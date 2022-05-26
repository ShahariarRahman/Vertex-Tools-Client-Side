import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BusinessSummary = ({ businessSummary }) => {
    return (
        <div className='flex flex-col items-center'>
            <div>
                <FontAwesomeIcon className='h-20 text-primary' icon={businessSummary.fabIconName} />
            </div>
            <p className='text-5xl'>{businessSummary.achivement_number}</p>
            <p className='text-xl'>{businessSummary.achivement_name}</p>
        </div>
    );
};

export default BusinessSummary;