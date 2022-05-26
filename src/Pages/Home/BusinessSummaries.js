import React from 'react';
import BusinessSummary from './BusinessSummary';
import { faDollar, faFlag, faPeopleLine, faSmile, faTools } from '@fortawesome/free-solid-svg-icons';
const BusinessSummaries = () => {
    const businessSummaries = [
        {
            business_id: 1,
            achivement_name: "Customers",
            achivement_number: "1000+",
            fabIconName: faPeopleLine
        },
        {
            business_id: 2,
            achivement_name: "Foreign Customers",
            achivement_number: "350+",
            fabIconName: faFlag
        },
        {
            business_id: 3,
            achivement_name: "Annual revenue",
            achivement_number: "120M",
            fabIconName: faDollar
        },
        {
            business_id: 4,
            achivement_name: "Tools Sold",
            achivement_number: 12000,
            fabIconName: faTools
        },
        {
            business_id: 5,
            achivement_name: "Reviews",
            achivement_number: 120000,
            fabIconName: faSmile
        }
    ];

    return (
        <div className='mt-20 mb-32'>
            <div className='text-4xl font-bold text-center text-primary'>Business Summary</div>
            <div className='text-xl font-bold text-center mt-2'>Achievement Of Five Years Of Our Journey</div>
            <div className='grid md:grid-cols-3 xl:grid-cols-5 gap-4 mt-10 p-3 2xl:p-2'>
                {businessSummaries.map(businessSummary => <BusinessSummary
                    key={businessSummary.business_id}
                    businessSummary={businessSummary}
                ></BusinessSummary>)}
            </div>
        </div>
    );
};

export default BusinessSummaries;