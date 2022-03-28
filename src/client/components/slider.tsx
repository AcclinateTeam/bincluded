import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SliderData } from './subComponents/SliderData';

const Slider = () =>
{
    const [current, setCurrent] = useState(0);
    // const length = slides.length;

    return (
        <>
            <section className="testimony">
                <div className="header">
                    <h1>Reviews By Our<br /> Community Members</h1>
                </div>
                <div className="slider">
                    <FontAwesomeIcon className="chevronLeft" icon={['fas', 'chevron-left']} />
                    <FontAwesomeIcon className="chevronRight" icon={['fas', 'chevron-right']} />
                    <div className="slides">
                        {SliderData.map((slider, index) =>
                        {
                            const slide = document.querySelector(`#slide${index}`);
                            // const slideWidth = slide.offsetWidth;
                            // console.log(`slide${index}`);
                            console.log(slide);

                            const rating = () =>
                            {
                                if (slider.rating === 5)
                                {
                                    return (
                                        <>
                                            <FontAwesomeIcon icon={['fas', 'star']} />
                                            <FontAwesomeIcon icon={['fas', 'star']} />
                                            <FontAwesomeIcon icon={['fas', 'star']} />
                                            <FontAwesomeIcon icon={['fas', 'star']} />
                                            <FontAwesomeIcon icon={['fas', 'star']} />
                                        </>
                                    )
                                } else if (slider.rating === 4)
                                {
                                    return (
                                        <>
                                            <FontAwesomeIcon icon={['fas', 'star']} />
                                            <FontAwesomeIcon icon={['fas', 'star']} />
                                            <FontAwesomeIcon icon={['fas', 'star']} />
                                            <FontAwesomeIcon icon={['fas', 'star']} />
                                            <FontAwesomeIcon icon={['far', 'star']} />
                                        </>
                                    )
                                } else if (slider.rating === 3)
                                {
                                    return (
                                        <>
                                            <FontAwesomeIcon icon={['fas', 'star']} />
                                            <FontAwesomeIcon icon={['fas', 'star']} />
                                            <FontAwesomeIcon icon={['fas', 'star']} />
                                            <FontAwesomeIcon icon={['far', 'star']} />
                                            <FontAwesomeIcon icon={['far', 'star']} />
                                        </>
                                    )
                                } else if (slider.rating === 2)
                                {
                                    return (
                                        <>
                                            <FontAwesomeIcon icon={['fas', 'star']} />
                                            <FontAwesomeIcon icon={['fas', 'star']} />
                                            <FontAwesomeIcon icon={['far', 'star']} />
                                            <FontAwesomeIcon icon={['far', 'star']} />
                                            <FontAwesomeIcon icon={['far', 'star']} />
                                        </>
                                    )
                                } else if (slider.rating === 1)
                                {
                                    return (
                                        <>
                                            <FontAwesomeIcon icon={['fas', 'star']} />
                                            <FontAwesomeIcon icon={['far', 'star']} />
                                            <FontAwesomeIcon icon={['far', 'star']} />
                                            <FontAwesomeIcon icon={['far', 'star']} />
                                            <FontAwesomeIcon icon={['far', 'star']} />
                                        </>
                                    )
                                } else if (slider.rating === 0)
                                {
                                    return (
                                        <>
                                            <FontAwesomeIcon icon={['far', 'star']} />
                                            <FontAwesomeIcon icon={['far', 'star']} />
                                            <FontAwesomeIcon icon={['far', 'star']} />
                                            <FontAwesomeIcon icon={['far', 'star']} />
                                            <FontAwesomeIcon icon={['far', 'star']} />
                                        </>
                                    )
                                } else
                                {
                                    return (
                                        <>
                                            <div>This is the alternative rating that SHOULD show with rating 4</div>
                                        </>
                                    )
                                }
                            }

                            return (
                                <div className="slide" id={`slide${index}`} key={index} >
                                    <div className="image">
                                        <img src={slider.image} />
                                    </div>
                                    <h2>{slider.author}</h2>
                                    <h4>{slider.title}</h4>
                                    <p>"{slider.quote}".</p>
                                    <div className="rating">
                                        {rating()}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Slider