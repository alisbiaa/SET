import React from 'react';

function Status({notifications}) {
    return (
        <div className="col-span-3  border-2 bg-ChampagnePink rounded-t-lg">
            <div className="flex flex-wrap content-center justify-center h-full">
                {notifications.map((notification,index) => {
                    switch (notification.type) {
                        case 'error' :
                            return <div key={index}
                                        className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-md text-red-700 bg-red-100 ">
                                <div slot="avatar">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="feather feather-alert-octagon w-5 h-5 mx-2">
                                        <polygon
                                            points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/>
                                        <line x1="12" y1="8" x2="12" y2="12"/>
                                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                                    </svg>
                                </div>
                                <div className="text-xl font-normal  max-w-full flex-initial">
                                    {notification.message}
                                </div>
                            </div>;
                        case 'warning' :
                            return <div
                                key={index}
                                className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-Isabelline rounded-md text-gray-500 ">
                                <div slot="avatar">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="feather feather-info w-5 h-5 mx-2">
                                        <circle cx="12" cy="12" r="10"/>
                                        <line x1="12" y1="16" x2="12" y2="12"/>
                                        <line x1="12" y1="8" x2="12.01" y2="8"/>
                                    </svg>
                                </div>
                                <div className="text-xl font-normal  max-w-full flex-initial">
                                    <div className="py-2">
                                        {notification.message}
                                        {/*<div className="text-sm font-base">More information about the message can be*/}
                                        {/*    found <a*/}
                                        {/*        href="/#">here</a></div>*/}
                                    </div>
                                </div>
                            </div>;
                        case 'success':
                            return <div
                                key={index}
                                className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-md text-green-700 bg-green-50">
                                <div slot="avatar">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="feather feather-check-circle w-5 h-5 mx-2">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                        <polyline points="22 4 12 14.01 9 11.01"/>
                                    </svg>
                                </div>
                                <div className="text-xl font-normal  max-w-full flex-initial">
                                    {notification.message}
                                </div>
                            </div>
                        default:
                            return null;


                    }


                })}

            </div>

        </div>
    );
}

export default Status;