import React from 'react';
import ResPartner from '../ResPartner';

const AllSenior = () =>
{
    return (
        <>
            {/* <ResPartner title="" image="" description="" benefit="" url=""/> */}

            <ResPartner title="ClasTran" image="classtran.webp" description="ClasTran provides hundreds of thousands of trips to people for medical appointments, grocery shopping, entertainment, and many other purposes. mission to coordinate and oversee the provision of paratransit services in the Greater Birmingham area in order to improve the cost efficiency, increase the quantity, and improve the quality of paratransit service." benefit="Senior or disabled citizens in need of transportation to medical appointments, grocery shopping, and more." url="https://www.clastran.com/"/>

            <ResPartner title="CommuteSmart" image="comsmart.png" description="Birmingham based transportation service that aims to improve air quality and reduce traffic" benefit="Commuters who want a climate conscious transportation service." url="https://www.commutesmart.org/s"/>

            <ResPartner title="MAX" image="max.png" description="Central Alabama's transport leader providing bus transit across Birmingham " benefit="Anyone in need of transit locally or outside of Birmingham." url="https://maxtransit.org/"/>

            <ResPartner title="Travelers Aid Birmingham" image="senior.jpg" description="Senior Ride Service; Connecting low income elderly and adults with disabilities to medical care, independence and a healthier quality of life" benefit="Elderly adults or those with disabilities in need of transportation" url="http://travelersaidbirmingham.com/medical-transportation/"/>
            
        </>
    );
}

export default AllSenior;