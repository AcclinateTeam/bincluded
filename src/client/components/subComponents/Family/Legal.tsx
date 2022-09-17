import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ResPartner from '../ResPartner';

const Legal = () =>
{
    return (
        <>
            <ResPartner title="Legal Services of Alabama" image="lsa.svg" description="Works to provide free, client-centered, civil legal advocacy to low-income Alabamians and collaborate with others across the state and nation to find solutions to systemic issues caused by poverty and social justice inequities." benefit="Alabamians in need of civil legal assistance or services at no to low cost." url="https://legalservicesalabama.org/" tags="LSA" />

            <ResPartner title="Volunteer Lawyers Birmingham" image="vlb.png" description="VLB is the only non-profit in the state of Alabama that provides immediate access to free high-quality attorneys so low-income families can obtain critically needed legal services." benefit="Low income familes seeking free high quality attorneys." url="https://vlbham.org/" tags="VLB" />

            <ResPartner title="Legal Aid Society of Birmingham" image="lasob.png" description="We are court-appointed attorneys assisting people who need legal representation." benefit="Anyone in need of legal representation from a court appointed attorney" url="https://www.legalaidbirmingham.com/" tags="LegalAid" />

        </>
    );
}

export default Legal;