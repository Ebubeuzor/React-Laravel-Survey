import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./views/Dashboard"
import Login from "./views/Login"
import SignUp from "./views/SignUp"
import Surveys from "./views/Surveys"
import GuestLayout from "./components/GuestLayout"
import DefaultLayout from "./components/DefultLayout";
import SurveyView from "./views/SurveyView";
import SurveyPublicView from "./views/SurveyPublicView";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children:[
            {
                path: '/dashboard',
                element: <Navigate to= "/" />
            },
            {
                path:'/',
                element: <Dashboard/>
            },
            {
                path:'/surveys',
                element: <Surveys/>
            },
            {
                path:'/surveys/create',
                element: <SurveyView/>
            },
            {
                path:'/surveys/:id',
                element: <SurveyView/>
            },
        ]
    },
    {
        path: '/survey/public/:slug',
        element: <SurveyPublicView/>
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children:[
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'signup',
                element: <SignUp/>
            },
        ]
    

    }

])

export default router;
