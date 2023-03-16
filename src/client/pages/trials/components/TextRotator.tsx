import React, { useEffect, useState } from 'react';
import { set } from 'react-ga';

const quotes = [
    { text: `"I know people that passed that had Alzheimer's disease."`, author: `Esther Richard` },
    { text: `"ALL research is important."`, author: `Theresa Smith` },
    { text: `"Because I have short term memory. I also have anxiety disorder so I am concerned about how my brain is functioning."`, author: `Kim Pearson` },
    { text: `"To do what I can to identify any signs of Alzheimer's early in my family."`, author: `Cheryl Adams` },
    { text: `"Because its important to know about your health and what is going on with you."`, author: `Geneva Long` },
    { text: `"I think its very healthy to keep our minds alert."`, author: `Dorothy Johnson` },
    { text: `"Its important because, we need to know what's going on with our mind as we age."`, author: `Rhonda Ross` },
    { text: `"Because a couple of my family have had it."`, author: `Mary Dunbar` },
    { text: `"Before my mother's death she was in the first stage of dementia."`, author: `Linda Vinson` },
    { text: `"Better understand its effect and find some solution in offsetting its effect."`, author: `Flora James` },
    { text: `"Alzheimer's research is important for early detection or prevention for quality and longevity of life."`, author: `Yana Wiggins` },
    { text: `"Hope to find a cure or preventive measure."`, author: `Delores Williams` },
    { text: `"I am a co-caregiver of a person with Alzheimer's."`, author: `Venice Smiley` }
];

const QuoteRotator = () => {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const intervalid = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
                setVisible(true);
            }, 500)
        }, 5000); 
        
        return () => clearInterval(intervalid);
    }, []);

    const { text, author } = quotes[currentQuoteIndex];

    return (
        <div className={`quote-rotator ${visible ? 'visible' : ''}`}>
            <p className="quote-text">{text}</p>
            <p className="quote-author">{author}</p>
        </div>
    );
};

export default QuoteRotator


