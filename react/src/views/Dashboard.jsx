import React, { useEffect, useState } from 'react'
import PageComponent from '../components/PageComponent'
import axiosClient from '../axios'
import DashboardCard from '../components/DasboardCard';
import { EyeIcon, PencilIcon } from '@heroicons/react/20/solid';
import TButton from '../components/core/TButton';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [data,setData] = useState({});

  useEffect(() =>{
    setLoading(true);
    axiosClient
    .get('/dashboard')
    .then((res) => {
      setLoading(false);
      setData(res.data);
      return res;
    }).catch((error) => {
      setLoading(false);
      return error;
    })
  }, []);

  return (

    <PageComponent title={"Dashboard" }>
      {
        loading && (<div className="flex justify-center items-center mt-10">
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 100-16v3a5 5 0 010 10v3a8 8 0 000 16 4 4 0 110-8 4 4 0 004-4v-3a5 5 0 010-10v-3z"></path>
        </svg>
        <span>Loading...</span>
      </div>)
      }

      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-gray-700">
          <DashboardCard
            title="Total Surveys"
            className="order-1 lg:order-2"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="text-8xl pb-4 font-semibold flex-1 flex items-center justify-center">
              {data.totalSurveys}
            </div>
          </DashboardCard>
          <DashboardCard
            title="Total Answers"
            className="order-2 lg:order-4"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="text-8xl pb-4 font-semibold flex-1 flex items-center justify-center">
              {data.totalAnswers}
            </div>
          </DashboardCard>
          <DashboardCard
            title="Latest Survey"
            className="order-3 lg:order-1 row-span-2"
            style={{ animationDelay: '0.2s' }}
          >
            {data.latestSurvey && (
              <div>
                <img
                  src={data.latestSurvey.image_url}
                  className="w-[240px] mx-auto"
                />
                <h3 className="font-bold text-xl mb-3">
                  {data.latestSurvey.title}
                </h3>
                <div className="flex justify-between text-sm mb-1">
                  <div>Create Date:</div>
                  <div>{data.latestSurvey.created_at}</div>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <div>Expire Date:</div>
                  <div>{data.latestSurvey.expire_date}</div>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <div>Status:</div>
                  <div>{data.latestSurvey.status ? "Active" : "Draft"}</div>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <div>Questions:</div>
                  <div>{data.latestSurvey.questions}</div>
                </div>
                <div className="flex justify-between text-sm mb-3">
                  <div>Answers:</div>
                  <div>{data.latestSurvey.answers}</div>
                </div>
                <div className="flex justify-between">
                  <TButton to={`/surveys/${data.latestSurvey.id}`} link>
                    <PencilIcon className="w-5 h-5 mr-2" />
                    Edit Survey
                  </TButton>

                  <TButton link>
                    <EyeIcon className="w-5 h-5 mr-2" />
                    View Answers
                  </TButton>
                </div>
              </div>
            )}
            {!data.latestSurvey && (
              <div className="text-gray-600 text-center py-16">
                Your don't have surveys yet
              </div>
            )}
          </DashboardCard>
          <DashboardCard
            title="Latest Answers"
            className="order-4 lg:order-3 row-span-2"
            style={{ animationDelay: '0.3s' }}
          >
            {data.latestAnswers && data.latestAnswers.length && (
              <div className="text-left">
                {data.latestAnswers.map((answer) => (
                  <a
                    href="#"
                    key={answer.id}
                    className="block p-2 hover:bg-gray-100/90"
                  >
                    <div className="font-semibold">{answer.survey.title}</div>
                    <small>
                      Answer Made at:
                      <i className="font-semibold">{answer.end_date}</i>
                    </small>
                  </a>
                ))}
              </div>
            )}
            {!data.latestAnswers.length && (
              <div className="text-gray-600 text-center py-16">
                Your don't have answers yet
              </div>
            )}
          </DashboardCard>
        </div>
      )}

    </PageComponent>

  )
}
