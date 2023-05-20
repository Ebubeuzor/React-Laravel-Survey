
import React, { useContext } from 'react'
import { createContext, useState } from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    surveys: [],
    questionTypes: [],
    setCurrentUser: () => { },
    setUserToken: () => {}
})

const tmpSurveys = [
    {
        "id": 1,
        "image_url": "https:\/\/api.yoursurveys.xyz\/images\/vJutXzn02CDwdOyh.png",
        "title": "My YT Chan1",
        "slug": "My-YT-Chan",
        "status": true,
        "description": "My name is Ebube the first,<br/> I am a Web Developer with 9+ years of experience, " +
        +"free educational content creator. ",
        "created_at": "2023-03-24 13:23:41",
        "updated_at": "2023-03-27 13:23:41",
        "expire_date": "2024-03-24",
        "questions": [
            {
                "id": 15,
                "type": "text",
                "question": "From which country are you",
                "description": null
            },
            {
                "id": 16,
                "type": "checkbox",
                "question": "What is your favourite programming language",
                "description": "A random description",
                "data":{
                    "options":[
                        {
                            "uuid": "8cc03198-9e7e-44e5-9176-7574c0beec6f",
                            "text": "JavaScript"
                        },
                        {
                            "uuid": "fec03198-9e7e-44e5-9176-7574c0beec6f",
                            "text": "PHP"
                        },
                        {
                            "uuid": "dbc03198-9e7e-44e5-9176-7574c0beec6f",
                            "text": "HTML + CSS"
                        },
                        {
                            "uuid": "gfc03198-9e7e-44e5-9176-7574c0beec6f",
                            "text": "All of the above"
                        },
                    ]
                }
            },
            {
                "id": 17,
                "type": "select",
                "question": "Which PHP framework do you like the most",
                "description": "A random description",
                "data":{
                    "options":[
                        {
                            "uuid": "8ff03198-9e7e-44e5-9176-7574c0beec6f",
                            "text": "Laravel"
                        },
                        {
                            "uuid": "fec031rf-9e7e-44e5-9176-7574c0beec6f",
                            "text": "Yii2"
                        },
                        {
                            "uuid": "dbc0uu98-9e7e-44e5-9176-7574c0beec6f",
                            "text": "Codeigniter"
                        },
                        {
                            "uuid": "dbc0kj98-9e7e-44e5-9176-7574c0beec6f",
                            "text": "Symfony"
                        },
                    ]
                }
            },
            {
                "id": 18,
                "type": "radio",
                "question": "Which Laravel framework do you like the most",
                "description": "A random description",
                "data":{
                    "options":[
                        {
                            "uuid": "8ff03198-9e7e-44e5-9176-7574c0beec6f",
                            "text": "Laravel 5"
                        },
                        {
                            "uuid": "fec031rf-9e7e-44e5-9176-7574c0beec6f",
                            "text": "Laravel 6"
                        },
                        {
                            "uuid": "dbc0uu98-9e7e-44e5-9176-7574c0beec6f",
                            "text": "Laravel 7"
                        },
                        {
                            "uuid": "dbc0kj98-9e7e-44e5-9176-7574c0beec6f",
                            "text": "Laravel 8"
                        },
                    ]
                }
            },
            {
                "id": 19,
                "type": "checkbox",
                "question": "What type of projects do you want to watch the most",
                "description": "A random description",
                "data":{
                    "options":[
                        {
                            "uuid": "hyh03198-9e7e-44e5-9176-7574c0beec6f",
                            "text": "REST API"
                        },
                        {
                            "uuid": "fth931rf-9e7e-44e5-9176-7574c0beec6f",
                            "text": "E-commerce"
                        },
                        {
                            "uuid": "dbc0uu98-9e7e-44e5-9176-7574c0behgtf",
                            "text": "Real Estate"
                        },
                        {
                            "uuid": "dhy8kj98-9e7e-44e5-9176-7574c0beec6f",
                            "text": "All of the above"
                        },
                    ]
                }
            },
            {
                "id": 22,
                "type": "textarea",
                "question": "What do you think about Nigeria",
                "description": "A random description",
                "data":[]
            },
            {
                "id": 23,
                "type": "text",
                "question": "Which channel is your favourite one",
                "description": "A random description",
                "data":[]
            }
        ]
    },
    {
        "id": 2,
        "image_url": "https:\/\/api.yoursurveys.xyz\/images\/vJutXzn02CDwdOyh.png",
        "title": "My YT Chan",
        "slug": "My-YT-Chan",
        "status": true,
        "description": "My name is Ebube,<br/> I am a Web Developer with 9+ years of experience, " +
        +"free educational content creator. ",
        "created_at": "2023-03-24 13:23:41",
        "updated_at": "2023-03-27 13:23:41",
        "expire_date": "2024-03-24",
        "questions": [
            {
                "id": 15,
                "type": "text",
                "question": "From which country are you",
                "description": null
            },
            {
                "id": 16,
                "type": "checkbox",
                "question": "What is your favourite programming language",
                "description": "A random description",
                "data":{
                    "options":[
                        {
                            "uuid": "8cc03198-9e7e-44e5-9176-7574c0beec6f",
                            "text": "JavaScript"
                        },
                        {
                            "uuid": "fec03198-9e7e-44e5-9176-7574c0beec6f",
                            "text": "PHP"
                        },
                        {
                            "uuid": "dbc03198-9e7e-44e5-9176-7574c0beec6f",
                            "text": "HTML + CSS"
                        },
                        {
                            "uuid": "gfc03198-9e7e-44e5-9176-7574c0beec6f",
                            "text": "All of the above"
                        },
                    ]
                }
            },
            {
                "id": 17,
                "type": "select",
                "question": "Which PHP framework do you like the most",
                "description": "A random description",
                "data":{
                    "options":[
                        {
                            "uuid": "8ff03198-9e7e-44e5-9176-7574c0beec6f",
                            "text": "Laravel"
                        },
                        {
                            "uuid": "fec031rf-9e7e-44e5-9176-7574c0beec6f",
                            "text": "Yii2"
                        },
                        {
                            "uuid": "dbc0uu98-9e7e-44e5-9176-7574c0beec6f",
                            "text": "Codeigniter"
                        },
                        {
                            "uuid": "dbc0kj98-9e7e-44e5-9176-7574c0beec6f",
                            "text": "Symfony"
                        },
                    ]
                }
            },
            {
                "id": 18,
                "type": "radio",
                "question": "Which Laravel framework do you like the most",
                "description": "A random description",
                "data":{
                    "options":[
                        {
                            "uuid": "8ff03198-9e7e-44e5-9176-7574c0beec6f",
                            "text": "Laravel 5"
                        },
                        {
                            "uuid": "fec031rf-9e7e-44e5-9176-7574c0beec6f",
                            "text": "Laravel 6"
                        },
                        {
                            "uuid": "dbc0uu98-9e7e-44e5-9176-7574c0beec6f",
                            "text": "Laravel 7"
                        },
                        {
                            "uuid": "dbc0kj98-9e7e-44e5-9176-7574c0beec6f",
                            "text": "Laravel 8"
                        },
                    ]
                }
            },
            {
                "id": 19,
                "type": "checkbox",
                "question": "What type of projects do you want to watch the most",
                "description": "A random description",
                "data":{
                    "options":[
                        {
                            "uuid": "hyh03198-9e7e-44e5-9176-7574c0beec6f",
                            "text": "REST API"
                        },
                        {
                            "uuid": "fth931rf-9e7e-44e5-9176-7574c0beec6f",
                            "text": "E-commerce"
                        },
                        {
                            "uuid": "dbc0uu98-9e7e-44e5-9176-7574c0behgtf",
                            "text": "Real Estate"
                        },
                        {
                            "uuid": "dhy8kj98-9e7e-44e5-9176-7574c0beec6f",
                            "text": "All of the above"
                        },
                    ]
                }
            },
            {
                "id": 22,
                "type": "textarea",
                "question": "What do you think about Nigeria",
                "description": "A random description",
                "data":[]
            },
            {
                "id": 23,
                "type": "text",
                "question": "Which channel is your favourite one",
                "description": "A random description",
                "data":[]
            }
        ]
    },
    {
        "id": 3,
        "image_url": "https:\/\/api.yoursurveys.xyz\/images\/vJutXzn02CDwdOyh.png",
        "title": "My YT Chan",
        "slug": "My-YT-Chan",
        "status": true,
        "description": "My name is Ebube,<br/> I am a Web Developer with 9+ years of experience, " +
        +"free educational content creator. ",
        "created_at": "2023-03-24 13:23:41",
        "updated_at": "2023-03-27 13:23:41",
        "expire_date": "2024-03-24",
        "questions": [
            {
                "id": 15,
                "type": "text",
                "question": "From which country are you",
                "description": null
            },
            {
                "id": 16,
                "type": "checkbox",
                "question": "What is your favourite programming language",
                "description": "A random description",
                "data":{
                    "options":[
                        {
                            "uuid": "8cc03198-9e7e-44e5-9176-7574c0beec6f",
                            "text": "JavaScript"
                        },
                        {
                            "uuid": "fec03198-9e7e-44e5-9176-7574c0beec6f",
                            "text": "PHP"
                        },
                        {
                            "uuid": "dbc03198-9e7e-44e5-9176-7574c0beec6f",
                            "text": "HTML + CSS"
                        },
                        {
                            "uuid": "gfc03198-9e7e-44e5-9176-7574c0beec6f",
                            "text": "All of the above"
                        },
                    ]
                }
            },
            {
                "id": 17,
                "type": "select",
                "question": "Which PHP framework do you like the most",
                "description": "A random description",
                "data":{
                    "options":[
                        {
                            "uuid": "8ff03198-9e7e-44e5-9176-7574c0beec6f",
                            "text": "Laravel"
                        },
                        {
                            "uuid": "fec031rf-9e7e-44e5-9176-7574c0beec6f",
                            "text": "Yii2"
                        },
                        {
                            "uuid": "dbc0uu98-9e7e-44e5-9176-7574c0beec6f",
                            "text": "Codeigniter"
                        },
                        {
                            "uuid": "dbc0kj98-9e7e-44e5-9176-7574c0beec6f",
                            "text": "Symfony"
                        },
                    ]
                }
            },
            {
                "id": 18,
                "type": "radio",
                "question": "Which Laravel framework do you like the most",
                "description": "A random description",
                "data":{
                    "options":[
                        {
                            "uuid": "8ff03198-9e7e-44e5-9176-7574c0beec6f",
                            "text": "Laravel 5"
                        },
                        {
                            "uuid": "fec031rf-9e7e-44e5-9176-7574c0beec6f",
                            "text": "Laravel 6"
                        },
                        {
                            "uuid": "dbc0uu98-9e7e-44e5-9176-7574c0beec6f",
                            "text": "Laravel 7"
                        },
                        {
                            "uuid": "dbc0kj98-9e7e-44e5-9176-7574c0beec6f",
                            "text": "Laravel 8"
                        },
                    ]
                }
            },
            {
                "id": 19,
                "type": "checkbox",
                "question": "What type of projects do you want to watch the most",
                "description": "A random description",
                "data":{
                    "options":[
                        {
                            "uuid": "hyh03198-9e7e-44e5-9176-7574c0beec6f",
                            "text": "REST API"
                        },
                        {
                            "uuid": "fth931rf-9e7e-44e5-9176-7574c0beec6f",
                            "text": "E-commerce"
                        },
                        {
                            "uuid": "dbc0uu98-9e7e-44e5-9176-7574c0behgtf",
                            "text": "Real Estate"
                        },
                        {
                            "uuid": "dhy8kj98-9e7e-44e5-9176-7574c0beec6f",
                            "text": "All of the above"
                        },
                    ]
                }
            },
            {
                "id": 22,
                "type": "textarea",
                "question": "What do you think about Nigeria",
                "description": "A random description",
                "data":[]
            },
            {
                "id": 23,
                "type": "text",
                "question": "Which channel is your favourite one",
                "description": "A random description",
                "data":[]
            }
        ]
    },
]

export const ContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState({})

    const [userToken, _setUserToken] = useState(localStorage.getItem('TOKEN') || '');
    const [surveys, setSurveys] = useState(tmpSurveys)
    const [questionTypes] = useState(['text', "select", "radio", "checkbox", "textarea"])
    
    const setUserToken = (token) => {
        if (token) {
            localStorage.setItem('TOKEN', token);
        } else {
            localStorage.removeItem('TOKEN')
        }
        _setUserToken(token);
    }

    return(
        <StateContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken,
            surveys,
            questionTypes
        }}>
            {children}
        </StateContext.Provider>
    )

}

export const useStateContext = () => useContext(StateContext)