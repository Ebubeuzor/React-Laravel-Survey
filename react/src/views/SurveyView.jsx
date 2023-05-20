import { PhotoIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react'
import axiosClient from '../axios';
import TButton from '../components/core/TButton';
import PageComponent from '../components/PageComponent'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import SurveyQuestions from '../components/SurveyQuestions';

export default function SurveyView() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [errorState, setErrorState] = useState("");
    const [errorState2, setErrorState2] = useState("");

    const[survey,setSurvey] = useState({
        title: "",
        slug: "",
        status: false,
        description: "",
        image: null,
        image_url: null,
        expire_date: "",
        questions: [],
    });

    const onImageChoose = (ev) => {
        const file = ev.target.files[0];

        const reader = new FileReader();
        reader.onload = () => {
            setSurvey({
                ...survey,
                image: file,
                image_url: reader.result
            })

            ev.target.value = '';
        }
        reader.readAsDataURL(file);
    }

    const onSubmit = (ev) => {
        ev.preventDefault();

        const payload = { ...survey };

        if (payload.image) {
            payload.image = payload.image_url;
        }

        delete payload.image_url;
        axiosClient.post('/survey',payload)
        .then((res) =>{
            console.log(res);

            navigate('/surveys')
        })
        .catch((error) =>{
  
            if (error && error.response) {
                setError(error.response.data.message)
                setErrorState(error.response.data.errors.title);
                setErrorState2(error.response.data.errors.expire_date);
            }
  
            console.log(error.response.data.errors);
        })

    }

    function onQuestionsUpdate(questions){
        setSurvey({
            ...survey,
            questions
        });
    }

    const addQuestion = () => {
        survey.questions.push({
          id: uuidv4(),
          type: "text",
          question: "",
          description: "",
          data: {},
        });
        setSurvey({ ...survey }); 
      };
    
  return (
    <PageComponent title={"Create new Survey"} >


        <form action="#" onSubmit={onSubmit} method="post">


            <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 sm:p-6">
                    {error && (
                        <div className="bg-red-500 text-white py-3 px-3 rounded-lg">
                            {error}
                        </div>
                    )}
                    {/* {Image} */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Photo
                        </label>
                        <div className="mt-1 flex items-center">
                            {survey.image_url && (
                                <img src={survey.image_url} className="w-32 h-32 object-cover"/>
                            )}
                            {!survey.image_url && (
                                <span className="flex justify-center items-center text-gray-400 h-12 w-12
                                overflow-hidden rounded-full bg-gray-100">
                                    <PhotoIcon className='w-8 h-8' />
                                </span>
                            )}
                            <button
                            type='button'
                            className='relative ml-5 rounded-md border border-gray-300 bg-white
                            py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none
                            focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                            '
                            >
                                <input
                                    type={"file"}
                                    className="absolute left-0 top-0 right-0 bottom-0 opacity-0"
                                    onChange={onImageChoose}
                                />
                                Change
                            </button>
                        </div>
                    </div>
                    {/* {Image} */}

                    {/* {Title} */}
                    <div className={"col-span-6 sm:col-span-3 "} >

                        <label htmlFor='title' className='block text-sm font-medium text-gray-700' >
                            Survey Title
                        </label>

                        <input type={"text"} 
                            name="title" 
                            id='title' 
                            value={survey.title} 
                            onChange = {(ev) =>
                                setSurvey({...survey,title: ev.target.value})
                            }
                            
                            placeholder="Survey Title"

                            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-50
                            focus:ring-indigo-500 sm:text-sm ${errorState ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "" }
                            `}

                        />

                        {errorState && (
                            <div className="text-red-600 text-center">
                                {errorState}
                            </div>
                        )}
                    </div>
                    {/* {Title} */}

                            
                    {/*Description*/}
                    <div className="col-span-6 sm:col-span-3">
                        <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                        >
                        Description
                        </label>
                        {/* <pre>{ JSON.stringify(survey, undefined, 2) }</pre> */}
                        <textarea
                        name="description"
                        id="description"
                        value={survey.description || ""}
                        onChange={(ev) =>
                            setSurvey({ ...survey, description: ev.target.value })
                        }
                        placeholder="Describe your survey"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></textarea>
                    </div>
                    {/*Description*/}

                    {/* {Expire Date} */}
                    <div className="col-span-6 sm:col-span-3">

                        <label htmlFor='date' className='block text-sm font-medium text-gray-700' >
                            Expire Date
                        </label>

                        <input type={"date"} 
                            name="date" 
                            id='date' 
                            value={survey.expire_date} 
                            onChange = {(ev) =>
                                setSurvey({...survey,expire_date: ev.target.value})
                            }
                            placeholder="Survey Date"
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-50
                            focus:ring-indigo-500 sm:text-sm
                            '
                        />
                        
                        {errorState2 && (
                            <div className="text-red-600 text-center">
                                {errorState2}
                            </div>
                        )}
                    </div>
                    {/* {Expire Date} */}

                    {/* {Active} */}
                    <div className="flex items-start">

                        <div className="flex h-5 items-center">

                            <input type={"checkbox"} 
                                name="status" 
                                id='status' 
                                value={survey.status} 
                                onChange = {(ev) =>
                                    setSurvey({...survey,status: ev.target.checked})
                                }
                                placeholder="Survey Date"
                                className='
                                h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500
                                '
                            />

                        </div>
                        <div className="ml-3 text-sm">

                            <label htmlFor="comments" className="font-medium text-gray-700">
                                Active
                            </label>

                            <p className="text-gray-500">
                                Whether to make survey publicly available
                            </p>
                        </div>

                    </div>
                    {/* {Active} */}

                    <button type='button ' onClick={addQuestion}> Add Question </button>

                    <SurveyQuestions questions={survey.questions} onQuestionsUpdate={onQuestionsUpdate}/>
                </div>

                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <TButton>
                        Save
                    </TButton>
                </div>
            </div>
        </form>
    </PageComponent>
  )
}
