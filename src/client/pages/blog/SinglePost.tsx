import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import SubHeader from '../../components/SubHeader';
import Terminal from '../../components/Terminal';

const SinglePost = () =>
{

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <SubHeader />

            <div className="singleHeader">
                <div className="image" style={{ backgroundImage: `url(/images/angry.jpg)` }}></div>
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="text">
                            <h3>Sep 30, 2021 | Wellness and Health | Brianna Hoge</h3>
                            <h1>Feeling COVID rage?<br /> Five strategies for managing pandemic anger
                            </h1>
                            <p>Many people thought things would look different after spending much of the past year and a half in a pandemic. When COVID-19 vaccines rolled out to the general United States population in spring 2021, cases hit an all-time low in June, and a collective sigh of relief was breathed. Thoughts spiraled that maybe the virus was under control — but the Delta variant had other plans</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="singlePost">
                <div className="container">
                    <div className="eight columns offset-by-one">
                        <div className="content">
                            <p>Many people thought things would look different after spending much of the past year and a half in a pandemic. When COVID-19 vaccines rolled out to the general United States population in spring 2021, cases hit an all-time low in June, and a collective sigh of relief was breathed. Thoughts spiraled that maybe the virus was under control — but the Delta variant had other plans.</p>
                            <p>Around the Fourth of July, cases appeared to be taking a turn for the worse. The late summer left some with an eerie sense of déjà vu: full ICUs, masks back on, distancing, debates about public health mandates and canceled plans.</p>
                            <p>As a mental health professional, Megan Hays, Ph.D., clinical psychologist and assistant professor in the University of Alabama at Birmingham’s Marnix E. Heersink School of Medicine, says her clients are presenting with a broad range of difficult emotions as the pandemic drags on, including anxiety, worry, sadness, despair and guilt, among others. But one emotion stands out above the rest: anger.</p>
                            <p>People are wondering, “How did we get here again?” and “Will this ever end?” While anger in the short term is normal and even adaptive, Hays says there are long-term health effects of uncontrolled anger, including increased risk of hypertension, worse pain management, increased anxiety, weakened immune system and headache.</p>
                            <p>Hays recommends five evidence-based strategies to help cope with chronic feelings of anger related to the pandemic.</p>
                            <h1>Realize it is OK, and even useful, to be angry</h1>
                            <p>Emotions serve a purpose, and when controlled, they can even be useful. For example, if we never feel afraid, we may not take objective danger seriously, like being faced with a dangerous virus like COVID-19. And if we never feel sadness, we may not care when we lose a loved one, and therefore would not value our close relationships. Likewise, anger has its purpose. Anger gets a bad rap because it is often mistaken as hostile behavior or aggression.</p>
                            <p>“Anger is an emotion, not a behavior,” Hays said. “Anger tells us that something isn’t right. Perhaps our safety is being threatened, injustice is happening, or some action is being required of us. If no one had felt anger about the pandemic, we may never have developed vaccines or instituted masking and distancing requirements, because no one would care what happened to the people around them.”</p>
                            <h1>Learn to respond to anger, not react</h1>
                            <p>Both behaving aggressively and bottling up anger are linked to hypertension and coronary artery disease. As a reminder, the emotion of anger is not bad, as it signals to us that something is wrong that needs to be addressed.</p>
                            <p>“It may feel tempting to virtually ‘tell off’ an acquaintance on Facebook who is posting misinformation about vaccines, but hostile behavior is likely to backfire,” Hays said. “The message typically gets lost in the aggressive communication style and leads to defensiveness from the other party.”
                            On the other hand, constantly suppressing anger can lead to the “pressure cooker effect” of stewing, resentment and unexpected anger outbursts, according to Hays.
                            “Instead of aggression or suppression, practice expressing anger in a healthy way through assertive communication techniques to articulate your feelings, needs and desires.”</p>
                            <p>Hays recommends stepping away from the situation, giving time to process the anger and then coming back to the situation when emotions are under control. This will help minimize the chance of speaking out of anger.</p>
                            {/* A great way to calm down during this cool-down period can be participating in enjoyable activities, such as:
                            Being silly: Turn on music and dance and sing the frustration out.
                            Being creative: Some people find drawing or painting very calming.
                            Being productive: Find a chore that you enjoy, such as laundry, dishes or vacuuming.
                            Being active: Some may find that going for a brisk walk, running or cycling is a great way to let frustrations out. */}
                            <p>Hays said physical activity is one of the safest ways to relieve the “pressure cooker,” but she recommends not becoming too aggressive during the exercise.
                            “It is human nature to want to hit a punching bag or a pillow when you are angry, but research shows that doing this can actually make your anger worse,” Hays said. “Instead of punching something, use a rigorous exercise, one that you can safely do, to blow off some steam.”</p>
                            <h1>Do not water the weeds</h1>
                            <p>Once there is time to feel and acknowledge the anger, Hays suggests avoiding continued rumination on the incident, news article, social media post or conversation that stirred up feelings.</p>
                            <p>“It may be tempting to rehash all the misinformation you saw on the internet today and come up with hypothetical arguments in the shower, but this is an unproductive strategy,” she said. “Redirect your attention by pivoting to what’s in your control.”</p>
                            <p>For example, if you are getting upset after seeing a large group of people congregating indoors without masks, remember that there is a choice to avoid or leave the situation, wear a mask, and get vaccinated.</p>
                            <p>Hays also suggests that gratitude works well as an antidote to anger. Practice focusing on what is good in the current situation, such as gratitude for the scientists who created the vaccines or the access to accurate public health information.</p>
                            <h1>Practice radical acceptance</h1>
                            <p>“If only everyone had worn masks, we wouldn’t be in this situation.” “If only I had worked harder, I could have saved them.” “Things should be different by now. Why is this still happening?” If these thoughts sound familiar, ruminating about the “shoulds” and “if onlys” is a red flag to fighting against reality.
                            “Pain is inevitable, but fighting against reality generates suffering, and suffering is optional,” Hays said. “We can choose to radically accept reality as it is, not as we wish it to be. Reality is that there are many things we cannot control about the pandemic — and life in general.”</p>
                            <p>Radical acceptance does not mean agreeing with what is happening or what has happened, but instead allows room for hope by accepting things as they are and not fighting against reality.</p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SinglePost;