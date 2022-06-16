import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../../components/Header';
import moment from 'moment';
import ShareYourStory from '../../components/ShareYourStory';
import Logo from '../../components/subComponents/Logo';
import SingBlogTemp from './SingBlogTemp';

const Angela = () =>
{
    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            <SingBlogTemp member="Angela Abdur-Rasheed" title="Voices From Our Community" embed="https://www.youtube.com/embed/liCjNRWAZrM" content="As we continue to live in a world where COVID-19 still exists, it's important to recognize the role burnout plays in people’s decision-making. Many people, especially those who are still deciding whether or not they want to be vaccinated, have already been told to do so. This approach, often accompanied by strong feelings and little explanation, can lead to further skepticism. Angela Abdur Rasheed is sharing her story in order to encourage others to be vaccinated." />

            {/* SHARE YOUR STORY SECTION */}
            <ShareYourStory />
        </>
    );
}

export default Angela;