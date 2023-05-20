import { PlusCircleIcon } from '@heroicons/react/20/solid';
import React, { useEffect, useState } from 'react'
import TButton from '../components/core/TButton';
import PageComponent from '../components/PageComponent'
import SurveyListItem from '../components/SurveyListItem';
import { useStateContext } from '../contexts/ContextProvider'
import axiosClient from '../axios';
import PaginatioLinks from '../components/PaginationLinks';

export default function Surveys() {

  const [surveys,setSurveys] = useState([]);

  const [meta,setMeta] = useState({});

  const [loading,setLoading] = useState(false);

  const onDeleteClick = () => {
    console.log("On Delete click");
  }

  const getSurveys = (url) => {
    url = url || '/survey'
    setLoading(true);
    axiosClient.get(url)
    .then(({ data }) => {
      setSurveys(data.data)
      setMeta(data.meta)
      setLoading(false)
    })

  }

  useEffect(() => {
    getSurveys()
  }, []);

  console.log(meta);

  const onPageClick = (link) => {
    getSurveys(link.url);
  }

  return (

    <PageComponent title={"Surveys" } buttons={(
      <TButton color='green' to='/surveys/create' >
        <PlusCircleIcon className='h-6 w-6 mr-2' />
      </TButton>
    )} >

      {
        loading && (<div className="flex justify-center items-center mt-10">
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 100-16v3a5 5 0 010 10v3a8 8 0 000 16 4 4 0 110-8 4 4 0 004-4v-3a5 5 0 010-10v-3z"></path>
        </svg>
        <span>Loading...</span>
      </div>)
      }

      {!loading && (<div>
          
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
              {Array.isArray(surveys) && surveys.map((survey) => (
                <SurveyListItem
                  survey={survey}
                  key={survey.id}
                  onDeleteClick={onDeleteClick}
                />
              ))}
        </div>
        <PaginatioLinks meta={meta} onPageClick={onPageClick}/>

      </div>)}
    </PageComponent>

  )
}
