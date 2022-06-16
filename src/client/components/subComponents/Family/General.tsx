import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ResPartner from '../ResPartner';

const General = () =>
{
    return (
        <>
            {/* <ResPartner title="" image="" description="" benefit="" url=""/> */}

            <ResPartner title="Impact Family Counseling" image="impact.jpg" description="The agency provides outpatient counseling and a variety of other services such as mentoring, relationship education, family strengthening and anger management to all people, regardless of religion, sex, race, ethnicity, age, or disability." benefit="Anyone seeking mentorship, relationship education, family strengthening and/or anger management." url="http://impactal.org/index.html"/>

            <ResPartner title="Alabama Network of Family Resource Centers" image="anfrc.png" description="The Alabama Network of Family Resource Centers (ANFRC) is an organization of non-profit agencies and programs that provide a wide array of services designed to protect children and strengthen and support families in Alabama." benefit="Anyone in need of individualized services for child stabiltiy and protection or family support." url="https://www.anfrc.org/"/>
        </>
    );
}

export default General;