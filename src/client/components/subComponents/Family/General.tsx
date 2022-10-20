import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ResPartner from '../ResPartner';

const General = () =>
{
    return (
        <>
            {/* <ResPartner title="" image="" description="" benefit="" url=""/> */}

            <ResPartner title="Impact Family Counseling" image="impact.jpg" description="The agency provides outpatient counseling and a variety of other services such as mentoring, relationship education, family strengthening and anger management to all people, regardless of religion, sex, race, ethnicity, age, or disability." benefit="Anyone seeking mentorship, relationship education, family strengthening and/or anger management." url="http://impactal.org/index.html" tags="Impact" />

            <ResPartner title="Alabama Network of Family Resource Centers" image="anfrc.png" description="The Alabama Network of Family Resource Centers (ANFRC) is an organization of non-profit agencies and programs that provide a wide array of services designed to protect children and strengthen and support families in Alabama." benefit="Anyone in need of individualized services for child stabiltiy and protection or family support." url="https://www.anfrc.org/" tags="ANFRC" />

            <ResPartner title="3 Daughters Beauty Supply Store" image="3daughters.webp" description="3 Daughters Beauty Supply is a retail beauty supply store serving communities in Birmingham, Alabama. Their store offers a vast and diversified mix of products & services while providing excellent customer service for consumers & professionals." benefit="Community members in Birmingham, Alabama seeking beauty cosmetics, products, or services." url="https://www.3daughtersbeautysupplystore.com/" tags="3Daughters" />
        </>
    );
}

export default General;