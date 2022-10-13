import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../../../components/Header';
import moment from 'moment';
import ShareYourStory from '../../../components/ShareYourStory';
import Logo from '../../../components/subComponents/Logo';
import SingBlogTemp from '../SingBlogTemp';

const SickleCell = () =>
{
    useEffect(() =>
    {
        window.scrollTo(0, 0)
    }, []);

    // Scrolls to bottom of Hero Section OnClick
    const scrollToRef = () =>
    {
        let hero = document.getElementById('hero');
        let heroHeight = hero!.offsetHeight;

        window.scrollTo({
            top: heroHeight,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            {/* SUB-HEADER COMPONENT IMPORT */}
            <Header />

            {/* JUMBOTRON COMPONENT */}
            <section id="hero" className="singBlog hero" style={{ height: `100vh` }}>
                <div className="calloutbg" style={{ backgroundImage: `url(/images/blogs/sicklecell1.webp)` }}>

                </div>
                <div className="callout btext">
                    <div className="calltext">
                        <h1 className="textPost">How to Support a Loved One with Sickle Cell Disease</h1>
                    </div>
                </div>
                <div className="scrollDown">
                    <FontAwesomeIcon icon="arrow-down" onClick={scrollToRef} />
                    <h3>Scroll Down</h3>
                </div>
            </section>

            {/* BREADCRUMB SECTION */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="six columns offset-by-two bread">
                        <a href="/">Home</a> {'>'} <a href="/blog">Stories</a> {'>'} How to Support a Loved One with Sickle Cell Disease
                    </div>
                </div>
            </section>

            <section className="story">
                <div className="container">
                    <div className="six columns offset-by-two">
                        <div className="storie">
                            <span>Oct. 13, 2022</span>
                            <h2>How to Support a Loved One with Sickle Cell Disease</h2>
                        </div>
                    </div>
                    <div className="six columns offset-by-two">
                        <div className="text">
                            <p>Did you know that <a href="https://www.nationwidechildrens.org/family-resources-education/700childrens/2018/09/9-things-you-should-know-about-sickle-cell-disease">sickle cell disease (SCD)</a> is the most common genetic blood disorder in the United States?<sup>1</sup> Of the 100,000 Americans living with the condition, the vast majority are Black.<sup>2</sup> In fact, <a href="https://www.cdc.gov/ncbddd/sicklecell/data.html#:~:text=SCD%20affects%20approximately%20100%2C000%20Americans,sickle%20cell%20trait%20(SCT).">one in every 365</a> Black babies are born with SCD.<sup>2</sup></p>
                            <p>Because of medical advancements over recent decades — like vaccines that help prevent certain infections people with SCD are more likely to get — people with SCD can live longer, healthier lives.<sup>2</sup> Nonetheless, SCD is still a serious condition that can bring painful symptoms and serious complications.</p>
                            <p>People living with SCD benefit from the support of family and friends. Below, you’ll learn more about SCD and ways you can support a loved one with the condition.</p>
                            <div className="image">
                                <img src="/images/blogs/sicklecell2.webp" alt="" />
                            </div>
                            <h4>Why are Black people more likely to have sickle cell disease?</h4>
                            <p>Sickle cell disease is a genetic disorder that affects the body’s <a href="https://www.minorityhealth.hhs.gov/sicklecell/index.html?utm_campaign=fyi_newsletter&utm_medium=email&utm_source=govdelivery">red blood cells</a>.<sup>3</sup> In order for someone to have SCD, they must have two sickle cell genes — one from each parent.</p>
                            <p>If someone only has one sickle cell gene, they do not have SCD. Instead, they are said to have sickle cell trait (SCT).<sup>4</sup> This means that they carry a sickle cell gene and can pass it down to their children. But because they only have one copy of the gene — not two — they do not have SCD. People with sickle cell trait usually don’t get sick from it.<sup>4</sup> A person can only get SCD if both parents have either SCD or SCT.</p>
                            <p>Even though about 100,000 Americans live with SCD, there are <a href="https://www.cdc.gov/ncbddd/sicklecell/materials/infographic-5-facts.html">millions</a> of people worldwide who have it too.<sup>5</sup> SCD is especially common in countries where malaria is also common.<sup>6</sup> More people in those areas have SCT because the sickle cell trait can protect people <a href="https://www.cdc.gov/malaria/about/biology/index.html#tabs-1-4">up to 60%</a> from dying from malaria.<sup>6</sup> For this reason, Black communities — communities of African descent — are most affected by SCD.</p>
                            <p>There are other ethnic risk factors too. In addition to people of African Descent, people of Central and South American descent, and people of Middle Eastern, Asian, Indian, and Mediterranean descent are also at higher risk of being born with SCD.<sup>7</sup></p>
                            <div className="image">
                                <img src="/images/blogs/sicklecell3.webp" alt="" />
                            </div>
                            <h4>How does a person know whether they have sickle cell disease?</h4>
                            <p>Symptoms of SCD can start early in a child’s life — as early as 4 months old.<sup>7</sup> Screening for SCD is now a standard part of the newborn screening process in the United States. However, testing can also be done during the prenatal period to determine whether a fetus or baby has SCD.</p>
                            <p>Even before pregnancy, it’s recommended that Black couples have conversations about their own sickle cell history. Discussing whether or not either person has sickle cell disease or the trait can help them better understand their risk of having a child with SCD.</p>
                            <p>For example, if two people carry the trait, there is a <a href="https://www.cdc.gov/ncbddd/sicklecell/traits.html">25% chance</a> their child will have SCD.<sup>4</sup> If one person has SCD and another has the trait, there is an even greater chance their child will have SCD.<sup>4</sup></p>
                            <h4>What happens when a person has sickle cell disease?</h4>
                            <p>Sickle cell disease gets its name from the shape of the red blood cells in people with the condition. Normally, red blood cells are circular and smooth, but in SCD, they are shaped like sickles, or crescents.<sup>3</sup></p>
                            <p>Their shape makes it harder for red blood cells to do <a href="https://www.genome.gov/research-at-nhgri/Projects/Democratizing-Education/understanding-red-blood-cell">their jobs</a><sup>8</sup>: travel throughout the body, carrying oxygen along with them. Instead, when the sickled cells travel through the body’s blood vessels, they tend to get stuck, which blocks the flow of blood and oxygen. This directly leads to many of the side effects and complications of SCD.<sup>3</sup></p>
                            <p>While a person with SCD can still live a full life, their symptoms — and the severity of them — can vary from one person to the next. Common symptoms of SCD include<sup>7</sup>:</p>
                            <ul className="list">
                                <li>Anemia (low number of red blood cells)</li>
                                <li>Dark urine</li>
                                <li>Yellow eyes</li>
                                <li>Painful swelling</li>
                                <li>Periodic episodes of extreme pain, known as sickle cell crises</li>
                                <li>Stroke</li>
                            </ul>
                            <p>The way a person’s SCD is managed or treated will depend on their symptoms. Treatments can be provided to help address <a href="https://www.cdc.gov/ncbddd/sicklecell/materials/infographic-5-facts.html">anemia</a>, relieve pain, prevent or treat infections, and lessen damage to organs.<sup>5,7</sup> Hydroxyurea is a key medication that can help lower the risk of sickle cell complications.<sup>7</sup> Blood transfusions can also be used to help people manage their disease.<sup>7</sup></p>
                            <p>A bone marrow transplant is currently the only cure for SCD, but is only an option for very few people.<sup>5</sup> It comes with major risks and also requires a very close donor match (like a sister or brother) in order to be safe and effective.<sup>3</sup></p>
                            <div className="image">
                                <img src="/images/blogs/sicklecell4.webp" alt="" />
                            </div>
                            <h4>How to support a loved one with sickle cell disease</h4>
                            <p>SCD can be challenging to live with. There aren’t as many resources and disease management options for people with SCD as there are for people with other genetic disorders like cystic fibrosis.<sup>9</sup> Because of racism within the health care system, people with SCD often have a harder time getting the pain relief they need, compared to people with chronic diseases that more significantly affect white communities.<sup>10</sup></p>
                            <p>For these reasons, the support of loved ones is important for people living with SCD. Here are a few steps you can take to be a good companion to a person with SCD:</p>
                            <ol className="list">
                                <li>1. <b>Be present with them, especially during painful episodes or tough times.</b> Feeling isolated and lonely can make sickness and pain even harder to endure. During sickle cell crises, try to be present with your loved one so that they feel connected, loved, and cared for.</li>
                                <li>2. <b>Advocate for them. People living with SCD can face many challenges within the healthcare system.</b> Getting adequate pain relief is a huge challenge. If your loved one is open to it, go with them to doctor’s appointments, or to the hospital if their episodes are especially severe. You may be able to use your voice to speak up and advocate for your loved one, even if they are not.</li>
                                <li>3. <b>Follow their lead.</b> SCD is not curable for most people, but it can be managed so that people with the condition can live full, happy lives. While supporting them in some moments may look like helping them navigate the healthcare system, there may also be times when the best support you can offer is to simply enjoy life with them.</li>
                            </ol>
                            <h4>References</h4>
                            <ol>
                                <li>1. <a href="https://www.nationwidechildrens.org/family-resources-education/700childrens/2018/09/9-things-you-should-know-about-sickle-cell-disease">Nationwide Children’s. 9 Things You Should Know About Sickle Cell Disease.</a> https://www.nationwidechildrens.org/family-resources-education/700childrens/2018/09/9-things-you-should-know-about-sickle-cell-disease</li>
                                <li>2. <a href="https://www.cdc.gov/ncbddd/sicklecell/data">Centers for Disease Control and Prevention. Data & Statistics on Sickle Cell Disease.</a> https://www.cdc.gov/ncbddd/sicklecell/data.
                                US Department of Health and Human Services Office of Minority Health. About Sickle Cell Disease. https://www.minorityhealth.hhs.gov/sicklecell/index.html</li>
                                <li>3. <a href="https://www.cdc.gov/ncbddd/sicklecell/traits.html">Centers for Disease Control and Prevention. What is Sickle Cell Trait?</a> https://www.cdc.gov/ncbddd/sicklecell/traits.html</li>
                                <li>4. <a href="https://www.cdc.gov/ncbddd/sicklecell/materials/infographic-5-facts.html">Centers for Disease Control and Prevention. 5 Facts You Should Know About Sickle Cell Disease.</a> https://www.cdc.gov/ncbddd/sicklecell/materials/infographic-5-facts.html</li>
                                <li>5. <a href="https://www.cdc.gov/malaria/about/biology/index.html#tabs-1-4">Centers for Disease Control and Prevention. Malaria: Biology.</a> https://www.cdc.gov/malaria/about/biology/index.html#tabs-1-4</li>
                                <li>6. <a href="https://www.hematology.org/education/patients/anemia/sickle-cell-disease">American Society of Hematology. Sickle Cell Disease.</a> https://www.hematology.org/education/patients/anemia/sickle-cell-disease</li>
                            </ol>
                        </div>
                    </div>
                    <div className="ten columns">
                        <div className="buttonwrap">
                            <Link className="content button solid" to="/blog">Back To Featured Articles</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SHARE YOUR STORY SECTION */}
            <ShareYourStory />
        </>
    );
}

export default SickleCell;