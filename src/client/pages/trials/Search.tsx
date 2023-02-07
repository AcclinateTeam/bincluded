import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SubHeader from '../../components/SubHeader';
import Header from '../../theme/Header';
import { set } from 'react-ga';


const Search = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    // const { condition }: { condition: any; } = useParams();
    // const { gender }: { gender: any; } = useParams();
    // const { minAge }: { minAge: any; } = useParams();
    // const { maxAge }: { maxAge: any; } = useParams();
    const [apiUrl, setApiUrl] = useState(``)
    const [trials, setTrials] = useState([]);
    const [condition, setCondition] = useState("");
    const [gender, setGender] = useState("");

    // if (condition && !gender) var API_URL = `https://clinicaltrials.gov/api/query/full_studies?expr=${condition}+AND+AREA%5BLocationCity%5D+Birmingham+AND+AREA%5BLocationState%5D+Alabama&min_rnk=1&max_rnk=10&fmt=json`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (condition && !gender) setApiUrl(`https://clinicaltrials.gov/api/query/full_studies?expr=${condition}+AND+AREA%5BLocationCity%5D+Birmingham+AND+AREA%5BLocationState%5D+Alabama&min_rnk=1&max_rnk=1&fmt=json`);
        if (!condition && gender) setApiUrl(`https://clinicaltrials.gov/api/query/full_studies?expr=AREA%5BLocationCity%5D+Birmingham+AND+AREA%5BLocationState%5D+Alabama+AND+AREA%5BGender%5D+${gender}&min_rnk=1&max_rnk=1&fmt=json`);
        if (condition && gender) setApiUrl(`https://clinicaltrials.gov/api/query/full_studies?expr=${condition}+AND+AREA%5BLocationCity%5D+Birmingham+AND+AREA%5BLocationState%5D+Alabama+AND+AREA%5BGender%5D+${gender}&min_rnk=1&max_rnk=1&fmt=json`);


        const response = await fetch(apiUrl);
        const trials = await response.json();
        setTrials(trials.FullStudiesResponse.FullStudies);
    }

    console.log(apiUrl)

    // const useQuery = () => new URLSearchParams(useLocation().search);
    // const query = useQuery();
    // console.log(query);

    // const [numbers, setNumbers] = useState<any>([]);
    // const [trials, setTrials] = useState([]);

    // const [condition, setCondition] = useState(``);
    // const [gender, setGender] = useState(``);
    // const [minAge, setMinAge] = useState(``);
    // const [maxAge, setMaxAge] = useState(``);

    // console.log(condition);
    // console.log(gender);
    // console.log(minAge);
    // console.log(maxAge);

    // useEffect(() => {
    //     getTrials();
    //     async function getTrials() {
    //         if (condition) {
    //             const response = await fetch(`https://clinicaltrials.gov/api/query/full_studies?expr=${condition}+AND+AREA%5BLocationCity%5D+Birmingham+AND+AREA%5BLocationState%5D+Alabama&min_rnk=1&max_rnk=10&fmt=json`);
    //             const trials = await response.json();
    //             setNumbers(trials.FullStudiesResponse);
    //             setTrials(trials.FullStudiesResponse.FullStudies);
    //         }

    //     }
    // }, []);

    // if (condition && !gender && !minAge && !maxAge) {
    //     useEffect(() => {
    //         getTrials();
    //         async function getTrials() {
    //             const response = await fetch(`https://clinicaltrials.gov/api/query/full_studies?expr=${condition}+AND+AREA%5BLocationCity%5D+Birmingham+AND+AREA%5BLocationState%5D+Alabama&min_rnk=1&max_rnk=10&fmt=json`);
    //             const trials = await response.json();

    //             setNumbers(trials.FullStudiesResponse);
    //             setTrials(trials.FullStudiesResponse.FullStudies);
    //         }
    //     }, []);
    // }

    // console.log(trials);
    // const studiesFound = numbers.NStudiesFound;
    // const studiesReturned = numbers.NStudiesReturned;

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="hero">
                <div className="fill"></div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="eight columns offset-by-one bread">
                        <a href="/">Home</a> {'>'} Clinical Trial Search
                    </div>
                </div>
            </section>

            {/* <div className="container trials error">
                <h1>Sorry, your search for <span>{condition}</span> did not return any results.</h1>
                <Link to="/trials">Click here to return to the search page</Link>
            </div> */}

            <section className="trialTerminal">
                {/* <div className="form">
                    <input className="control" placeholder="Enter a Condition | ex: Cancer" type="text" name="Search" onChange={e => setCondition(e.target.value)} />
                    <input className="control2" placeholder="Minimum Age | ex: 18" type="text" name="MinAge" onChange={e => setMinAge(e.target.value)} />
                    <input className="control3" placeholder="Maximum Age | ex: 65" type="text" name="MaxAge" onChange={e => setMaxAge(e.target.value)} />
                    <select className="drop" name="Gender" defaultValue={'Search By:'} onChange={e => setGender(e.target.value)}>
                        <option value=""></option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                    <Link to="/results">
                        <div className="submit">
                            <FontAwesomeIcon icon="search" />
                        </div>
                    </Link>
                </div> */}
                <form onSubmit={handleSubmit}>
                    <input type="text" value={condition} onChange={(e) => setCondition(e.target.value)} />
                    <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
                    <button type="submit">Search</button>
                </form>
            </section>

            {trials ? <div>{JSON.stringify(trials)}</div> : <div>Loading....</div>}


        </>
    )

}


export default Search;

export interface numbers {
    NStudiesFound: number;
    NStudiesReturned: number;
}