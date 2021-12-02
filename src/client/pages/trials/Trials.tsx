import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SubHeader from '../../components/SubHeader';
import Accordion from '../../components/Accordion';

/* UTILS IMPORTS */
import { accordionData } from '../../utils/content';

const Trials = () =>
{

    const [trials, setTrials] = useState([]);
    const [text, setText] = useState('');

    useEffect(() =>
    {
        fetch('https://clinicaltrials.gov/api/query/study_fields?min_rnk=1&max_rnk=3&fmt=JSON&fields=NCTId,Condition,InterventionName,StudyType,BriefTitle,BriefSummary,PrimaryCompletionDate,Phase')
            .then(res => res.json())
            .then(threeTrails => setTrials(threeTrails.StudyFieldsResponse.StudyFields));
    }, []);

    return (
        <>
            <SubHeader />

            <div className="trialback">
                <svg viewBox="0 0 1440 591" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H1440V336L0 564V0Z" fill="#050236" />
                    <path d="M1081.44 382.129L1234.45 350.953L1227.3 395.384L1075.17 424.695L1081.44 382.129Z" fill="#CA1D48" />
                    <path d="M1240.49 309.466L1392.13 276.98L1385.27 321.479L1234.49 352.093L1240.49 309.466Z" fill="#287FDD" />
                    <path d="M1227.64 396.592L1379.76 364.198L1372.91 408.697L1222.13 439.311L1227.64 396.592Z" fill="#ECECEC" />
                    <path d="M213.437 493.129L366.454 461.953L359.305 506.384L207.166 535.695L213.437 493.129Z" fill="#CA1D48" />
                    <path d="M372.49 420.466L524.127 387.98L517.269 432.479L366.494 463.093L372.49 420.466Z" fill="#287FDD" />
                    <path d="M359.637 507.592L511.765 475.198L504.907 519.697L354.132 550.311L359.637 507.592Z" fill="#ECECEC" />
                </svg>

            </div>


            <section className="trials" style={{ marginBottom: '350px' }}>
                <div className="container search">
                    <div className="seven columns offset-by-one-half">
                        <h1>Clinical Trial Search</h1>

                        <div className="container">
                            <div className="six columns offset-by-two">
                            <div className="form">
                                    <input className="control" placeholder="Enter a Condition | ex: Cancer" type="text" name="Search" onChange={e => setText(e.target.value)} />
                                    <Link to={`/trials/results/${text}`}>
                                        <div className="submit">
                                            <FontAwesomeIcon icon="search" />
                                        </div>
                                    </Link>
                                </div>
                                <div className="viewStudies">
                                    <Link to="/">
                                         View Volunteer Studies <FontAwesomeIcon icon="arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section>
                <h1>Trials</h1>
                <div className="container">
                    {trials.map((trial, index) =>
                    {
                        let singleCondition = trial.Condition.map((c: string, index: number) =>
                        {
                            return (c.replace(/\s/g, "+").replace(/,/g, ""));
                        });
                        // console.log(singleCondition);
                        return (
                            <div className="third columns" key={trial.Rank}>
                                <div className="view">
                                    <div className="overlay"></div>
                                    <div className="content">
                                        <h3>{trial.BriefTitle}</h3>
                                        <h5>{trial.Condition}</h5>
                                        <p className="summary">{trial.BriefSummary}</p>
                                    </div>
                                    <div className="action">
                                        <Link to={`/trials/study/${trial.NCTId}`}>
                                            See Full Study <FontAwesomeIcon icon="arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section> */}

            <section className="trials">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="accordions">
                            <h1>Frequently Asked Questions</h1>
                            <div className="accordion">
                                {accordionData.map(({ title, content }) => (
                                    <Accordion content={content} title={title} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Trials;