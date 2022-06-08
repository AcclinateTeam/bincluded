import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SubHeader from '../../components/SubHeader';


const Terms = () =>
{

    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <SubHeader />

            <section>
                <div className="container policy">
                    <div className="six columns offset-by-two">
                        <div className="content">
                            <h1>Terms &#38; <span className="blue">Conditions</span></h1>
                            <h6>Global Privacy Policy - Worldwide</h6>
                            <p>One example of the free market approach is to be found in the voluntary OECD Guidelines on the Protection of Privacy and Transborder Flows of Personal Data.<br /><br />In a consumer protection approach, in contrast, it is claimed that individuals may not have the time or knowledge to make informed choices, or may not have reasonable alternatives available. In support of this view, Jensen and Potts showed that most privacy policies are above the reading level of the average person.<br /><br />In 2008 the Australian Law Reform Commission (ALRC) conducted a review of Australian privacy law and produced a report titled "For Your Information".<br /><br />In 2015, the Telecommunications (Interception and Access) Amendment (Data Retention) Act 2015 was passed, to some controversy over its human rights implications and the role of media.<br /><br />Although there are comprehensive regulations for data protection in the European Union, one study finds that despite the laws, there is a lack of enforcement in that no institution feels responsible to control the parties involved and enforce their laws.<br /><br />One example of the free market approach is to be found in the voluntary OECD Guidelines on the Protection of Privacy and Transborder Flows of Personal Data.<br /><br />In a consumer protection approach, in contrast, it is claimed that individuals may not have the time or knowledge to make informed choices, or may not have reasonable alternatives available. In support of this view, Jensen and Potts showed that most privacy policies are above the reading level of the average person.<br /><br />In 2008 the Australian Law Reform Commission (ALRC) conducted a review of Australian privacy law and produced a report titled "For Your Information".<br /><br />In 2015, the Telecommunications (Interception and Access) Amendment (Data Retention) Act 2015 was passed, to some controversy over its human rights implications and the role of media.<br /><br />Although there are comprehensive regulations for data protection in the European Union, one study finds that despite the laws, there is a lack of enforcement in that no institution feels responsible to control the parties involved and enforce their laws.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Terms;