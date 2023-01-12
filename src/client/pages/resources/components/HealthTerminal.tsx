import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Terminal = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('/api/resources/allres')
            .then(res => res.json())
            .then(cards => setCards(cards))
    }, []);



    function wait(arg0: number) {
        throw new Error('Function not implemented.');
    }

    return (
        <>
            <section className="addRes health">
                <div className="container">
                    <div className="eight columns offset-by-one addResWide">
                        <div className="header">
                            <h2>Health <span className="blue">Resources</span></h2>
                            <p>Scroll down to view all health related resources. Click the resource card to view more information.</p>
                        </div>
                        <div className="panel">
                            <div className="container">
                                {cards.map((post: any, index) => {

                                    const imageSrc = post.image;

                                    const openPlayModal = async () => {
                                        console.log(imageSrc);
                                        // Play Modal container element selector
                                        const playContainer = document.getElementById('playContainer');

                                        // New div (sub-container) element creation and class name assignment
                                        const newDiv = document.createElement('div');
                                        newDiv.className = 'homeVideo';

                                        // New Frame (sub-div container) element creation and class name assignment
                                        const newFrame = document.createElement('div');
                                        newFrame.className = 'frame';

                                        // New header frame
                                        const headerFrame = document.createElement('div');
                                        headerFrame.className = 'header';

                                        // New header frame
                                        const resImage = document.createElement('div');
                                        resImage.className = 'image';
                                        const resTitle = document.createElement('div');
                                        resTitle.className = 'title'
                                        const resText = document.createElement('div');
                                        resText.className = 'text'


                                        // Builds Image and sets source link
                                        const image = document.createElement('img');
                                        image.src = `/images/partners/${post.image}`;

                                        // Builds h2 & p for Title and Description
                                        const title = document.createElement('h2');
                                        title.innerHTML = `${post.title}`;
                                        const subTitle = document.createElement('p');
                                        subTitle.innerHTML = 'Access local community resources to support your overall health and wellness.';

                                        const resContent = document.createElement('div');
                                        resContent.className = 'content';

                                        const descHead = document.createElement('h2');
                                        descHead.innerHTML = 'Description';
                                        const descBody = document.createElement('p');
                                        descBody.innerHTML = `${post.description}`;

                                        const beneHead = document.createElement('h2');
                                        beneHead.innerHTML = 'Who Will Benefit';
                                        const beneBody = document.createElement('p');
                                        beneBody.innerHTML = `${post.benefit}`;

                                        const linkHead = document.createElement('h2');
                                        linkHead.innerHTML = 'Who Will Benefit';


                                        // Constructs "HomeVideoObject" with appended elements.
                                        playContainer!.appendChild(newDiv);
                                        newDiv.appendChild(newFrame);
                                        newFrame.appendChild(headerFrame);
                                        headerFrame.appendChild(resImage);
                                        headerFrame.appendChild(resTitle);

                                        resImage.appendChild(image);

                                        resTitle.appendChild(resText);
                                        resText.appendChild(title);
                                        resText.appendChild(subTitle);

                                        newFrame.appendChild(resContent);
                                        resContent.appendChild(descHead);
                                        resContent.appendChild(descBody);
                                        resContent.appendChild(beneHead);
                                        resContent.appendChild(beneBody);

                                        // New Close Button (sub-div container) element creation and class name assignment
                                        const newCloseBtn = document.createElement('div');
                                        newCloseBtn.className = 'popClose';

                                        // New Close Button Image
                                        const newCloseBtnImg = document.createElement('img');
                                        newCloseBtnImg.src = '/images/close.png';
                                        newCloseBtnImg.addEventListener('click', () => { closePlayModal() }); // Closes Play Modal by clicking the image.

                                        // Constructs "HomeVideoObject" with appended elements.
                                        newFrame.appendChild(newCloseBtn);
                                        newCloseBtn.appendChild(newCloseBtnImg);

                                        // Play Modal animations
                                        const wait = (t: number) => new Promise(r => setTimeout(r, t));
                                        await wait(20);
                                        newDiv.style.opacity = '1';
                                        // newFrame.style.top = '20%';

                                        // Close Play Modal function 
                                        const closePlayModal = async () => {
                                            // console.log('This closes the play modal');

                                            // Animate "homeVideo" and "frame" div(s).
                                            newDiv.style.opacity = '0';
                                            newFrame.style.top = '35%';

                                            // Wait first, then remove parent "homeVideo" element, which resets the play modal. Wait is used BEFORE remove() to ensure the animation is complete.
                                            await wait(500);
                                            newDiv.remove();
                                        }
                                    }



                                    if (post.health == 'true') {
                                        return (
                                            <>
                                                <div className="third columns" key={post.id}>
                                                    <div className="panes">
                                                        <a onClick={openPlayModal} className="">
                                                            <div className="image" style={{ backgroundImage: `url("/images/partners/${post.image}")`, backgroundColor: '#ffffff' }}></div>
                                                        </a>

                                                        {/* <a href={post.link} className={post.tags} target="_blank" rel="noopener noreferrer">
                                                        <div className="pane">
                                                            <h2>{post.title}</h2>
                                                            <p>{post.description}</p>
                                                            <h2>Who Will Benefit</h2>
                                                            <p>{post.benefit}</p>
                                                            <span>Read More</span> <FontAwesomeIcon className="readmo" icon="arrow-right" />
                                                        </div>
                                                    </a> */}
                                                    </div>
                                                </div>
                                                <div id="playContainer"></div>
                                            </>
                                        )
                                    } if (post.career = null) {
                                        return (
                                            <>
                                                hahahhahahaha
                                            </>
                                        )
                                    }


                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default Terminal;
