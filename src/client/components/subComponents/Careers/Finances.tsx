import React from 'react';
import ResPartner from '../ResPartner';

const Finances = () =>
{
    return (
        <>
            {/* <ResPartner title="" image="" description="" benefit="" url=""/> */}

            <ResPartner title="Alabama Asset Building Coalition" image="aabc.jpg" description="The Alabama Asset Building Coalition (AABC) is a statewide 501c 3 nonprofit that has organized to promote financial stability for individuals and families. By encouraging savings, financial education and other wealth building programs, the coalition strives to build an economic foundation that will allow the underserved residents in Alabama to reach their highest potential and strengthen their financial future." benefit="Families and individuals seeking to reach their highest earning potential with finacial education and wealth building programs" url="http://alabamaabc.org/" tags="AABC" />

            <ResPartner title="Gateway Financial Freedom" image="gate.png" description="Gateway provides foster care, family counseling and financial counseling services based in the latest knowledge of trauma, child brain development and behavioral healthcare." benefit="Familes their children, and ageing adults in need of various types of counseling or looking to understand how trauma effects their financial decisions" url="https://www.gway.org/" tags="Gateway" />
            
        </>
    );
}

export default Finances;