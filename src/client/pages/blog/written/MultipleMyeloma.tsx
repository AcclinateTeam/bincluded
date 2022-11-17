import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import Header from '../../../components/Header';
import moment from 'moment';
import ShareYourStory from '../../../components/ShareYourStory';
import Logo from '../../../components/subComponents/Logo';
import SingBlogTemp from '../SingBlogTemp';

const MultipleMyeloma = () =>
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
                <div className="calloutbg" style={{ backgroundImage: `url(/images/blogs/AdobeStock_50623544.jpeg)` }}>

                </div>
                <div className="callout btext">
                    <div className="calltext">
                        <h1 className="textPost">What You Should Know about a Related Blood Cell Disorder, AL Amyloidosis</h1>
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
                        <a href="/">Home</a> {'>'} <a href="/blog">Stories</a> {'>'} Multiple Myeloma is Common in Black Communities: What You Should Know about a Related Blood Cell Disorder, AL Amyloidosis
                    </div>
                </div>
            </section>

            <section className="story">
                <div className="container">
                    <div className="six columns offset-by-two">
                        <div className="storie">
                            <span>Oct. 4, 2022</span>
                            <h2>Multiple Myeloma is Common in Black Communities: What You Should Know about a Related Blood Cell Disorder, AL Amyloidosis</h2>
                            {/* <h4>Voices From Our Community</h4> */}
                            {/* <iframe width="100%" height="550px" src="https://www.youtube.com/embed/liCjNRWAZrM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                        </div>
                    </div>
                    <div className="six columns offset-by-two">
                        <div className="text">
                            <p>Common chronic diseases like diabetes and high blood pressure aren’t the only conditions that Black communities experience more than other racial groups do. There are certain blood cell disorders that are also more common in Black communities too.&nbsp;</p>


                            <p>Multiple myeloma, a blood cancer, is one of them. In fact, multiple myeloma is <a href="https://themmrf.org/2019/08/26/multiple-myeloma-in-african-americans/">twice as common</a> in Black Americans than in white Americans.<sup>1</sup>&nbsp;</p>


                            <p>Amyloid light chain amyloidosis — also known as AL amyloidosis — is a blood cell disorder that’s closely related to multiple myeloma. About <a href="http://amyloidosis.org/facts/al/">4500</a> people are diagnosed with AL amyloidosis every year.<sup>2</sup></p>


                            <p>Because AL amyloidosis is so closely related to multiple myeloma, which disproportionately affects Black people, it’s important to learn as much as we can about it, including how the disease is similar to and different from multiple myeloma.</p>


                            <p><strong>What is multiple myeloma?</strong></p>


                            <p>Inside your bones, you have bone marrow. That bone marrow contains many different types of white blood cells that help your body fight infections. Plasma cells are one of those cell types.&nbsp;</p>


                            <p>When someone has multiple myeloma, it means they have cancer of the plasma cells.<sup>3</sup> In other words, those plasma cells are out of control — growing way too much and/or way too fast.&nbsp;</p>


                            <p>Multiple myeloma can cause a person to experience<sup>3</sup>:</p>

                            <ul className="list"><li>Low blood cell count</li><li>Broken and fractured bones due to faster bone breakdown</li><li>Infections</li><li>Kidney damage or failure</li></ul>

                            <p><strong>What is AL amyloidosis?</strong></p>


                            <p>While there are many different types of amyloidosis, AL amyloidosis is the most common type.<sup> </sup>When a person has AL amyloidosis, abnormal plasma cells are growing out of control, but not as much as they are in a person with multiple myeloma.<sup>3</sup>&nbsp;</p>


                            <p>Instead, the abnormal plasma cells create proteins with more parts than the protein actually needs. Specifically, they have more “light chains” than they actually need. These light chains form an abnormal type of protein called amyloid, and amyloid builds up in tissues throughout the body.<sup>3</sup></p>


                            <p>Amyloid also builds up in different organs throughout the body, like the heart and kidneys. The buildup of amyloid can cause irreversible organ damage and ultimately, organ failure.<sup>3</sup>&nbsp;</p>

                            <h4><a href="https://nowincluded.com/understanding-the-basics-of-al-amyloidosis/">Learn more about AL amyloidosis: “Understanding the Basics of AL Amyloidosis: The Rare Disease You Need to Know About”</a></h4>

                            <div className="image">
                                <img src="/images/blogs/sicklecell2.webp" alt="" />
                            </div>

                            <h4>How are multiple myeloma and AL amyloidosis similar?</h4>


                            <p>As you may have noticed, multiple myeloma and AL amyloidosis have a few things in common. For starters, they both involve abnormal plasma cells.&nbsp;</p>


                            <p>In multiple myeloma, the abnormal plasma cells grow in such high concentrations that they take up all the space and crowd out the healthy plasma cells.<sup>4</sup> Healthy plasma cells make antibodies, which help fight infections. But the antibodies that the abnormal (multiple myeloma) plasma cells make actually <em>don’t</em> help fight infections.<sup>3</sup> This is why people with multiple myeloma are more prone to infections.</p>


                            <p>In AL amyloidosis, the abnormal plasma cells create abnormal amyloid protein, which ultimately damages important organs.</p>


                            <p>There can be overlap between multiple myeloma and AL amyloidosis, and in many cases, people can be diagnosed with both.<sup>5</sup>&nbsp;</p>


                            <p>Another thing these two conditions share in common: there isn’t a cure for either.<sup>6</sup> But that doesn’t mean they can’t be treated and managed. You’ll learn about treatment options later in this article.</p>


                            <h4>How are multiple myeloma and AL amyloidosis different?</h4>


                            <p>Even though both multiple myeloma and AL amyloidosis involve overgrowth of abnormal plasma cells, <em>how much</em> the plasma cells are growing differs between the two conditions. The overgrowth is much more widespread in multiple myeloma. In fact, the overgrowth itself is what causes the most significant problem when a person has multiple myeloma.</p>


                            <p>On the other hand, the overgrowth of abnormal plasma cells is not the main problem in AL amyloidosis.<sup>5</sup> The main problem is the buildup of extra light chains, which causes the creation and buildup of amyloid proteins. In fact, according to the <a href="https://www.cancer.org/cancer/multiple-myeloma/about/what-is-multiple-myeloma.html">American Cancer Society</a>, light chain amyloidosis is only one of the diseases where amyloid builds up and causes problems.<sup>3</sup></p>


                            <div className="image">
                                <img src="/images/blogs/AdobeStock_192267337.jpeg" alt="" />
                            </div>
                            {/* <!-- wp:acf/blog-post-image {"name":"acf/blog-post-image","data":{"image":1454,"_image":"field_6244bea75672d"},"mode":"preview"} /--> */}


                            <h4>How are multiple myeloma and AL amyloidosis treated?</h4>


                            <p className="italic">Treating Multiple Myeloma</p><br />


                            <p>There are several different ways to treat multiple myeloma<sup>7</sup>:</p>


                            <ol className="list"><li><strong>Local treatments, like surgery or radiation therapy</strong> - Local treatments are typically most useful for patients who have multiple myeloma that is less advanced or in earlier stages.&nbsp;</li><li><strong>Whole-body treatments, like stem cell transplants, medications, or gene therapy</strong> - These treatments are able to reach cancer cells throughout the entire body, so they can be particularly useful for more advanced multiple myeloma cases.</li></ol>



                            <p>Because there are so many different treatment options, a health care provider may take several different treatment approaches to treat a particular case.&nbsp;</p>


                            <p><em>Treating AL Amyloidosis</em></p>


                            <p>Ideally, a person with AL amyloidosis would start to get treatment for it before irreversible organ damage starts to happen. Treatments are designed to control the abnormal plasma cells that are producing amyloid proteins, and may include<sup>8,9</sup>:</p>


                            <ol><li><strong>Chemotherapy</strong> - Melphalan and cyclophosphamide are examples of chemotherapy drugs that can help kill the abnormal plasma cells. The downside of chemotherapy is that it can kill healthy cells too. A health care provider may recommend steroids, other medications, or stem cell transplants to go along with chemotherapy.</li><li><strong>Steroids</strong> - Steroids like dexamethasone work well in combination with chemotherapy drugs.</li><li><strong>Immunotherapy </strong>- Medications that are more specific to the abnormal plasma cells can effectively treat AL amyloidosis, without producing as many side effects. <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7998921/">Daratumumab</a> is an example of one of these targeted medications.<sup>10</sup></li></ol>



                            <p></p>


                            <p><strong>References</strong></p>


                            <ol><li>Multiple Myeloma Research Foundation. Multiple Myeloma in African Americans. <a href="https://themmrf.org/2019/08/26/multiple-myeloma-in-african-americans/">https://themmrf.org/2019/08/26/multiple-myeloma-in-african-americans/</a>&nbsp;</li><li>Amyloidosis Foundation. AL Amyloidosis. <a href="http://amyloidosis.org/facts/al/">http://amyloidosis.org/facts/al/</a>&nbsp;</li><li>American Cancer Society. What is Multiple Myeloma? <a href="https://www.cancer.org/cancer/multiple-myeloma/about/what-is-multiple-myeloma.html">https://www.cancer.org/cancer/multiple-myeloma/about/what-is-multiple-myeloma.html</a></li><li>National Cancer Institute. Plasma Cell Myeloma. <a href="https://www.cancer.gov/publications/dictionaries/cancer-terms/def/plasma-cell-myeloma">https://www.cancer.gov/publications/dictionaries/cancer-terms/def/plasma-cell-myeloma</a>&nbsp;</li><li>Stanford Medicine. AL (Primary) Amyloidosis. <a href="https://stanfordhealthcare.org/medical-conditions/blood-heart-circulation/amyloidosis/types/al-primary-amyloidosis.html">https://stanfordhealthcare.org/medical-conditions/blood-heart-circulation/amyloidosis/types/al-primary-amyloidosis.html</a>&nbsp;</li><li>Memorial Sloan Kettering Cancer Center. Multiple Myeloma: Improved Prognosis with the Latest Treatments. <a href="https://www.mskcc.org/news/multiple-myeloma-improved-prognosis-latest-treatments">https://www.mskcc.org/news/multiple-myeloma-improved-prognosis-latest-treatments</a>&nbsp;&nbsp;</li><li>American Cancer Society. Treating Multiple Myeloma. <a href="https://www.cancer.org/cancer/multiple-myeloma/treating.html">https://www.cancer.org/cancer/multiple-myeloma/treating.html</a>&nbsp;</li><li>Cedars-Sinai. AL Amyloidosis. <a href="https://www.cedars-sinai.org/health-library/diseases-and-conditions/a/al-amyloidosis.html">https://www.cedars-sinai.org/health-library/diseases-and-conditions/a/al-amyloidosis.html</a>&nbsp;</li><li>NORD Rare Disease Database: Amyloidosis. <a href="https://rarediseases.org/rare-diseases/amyloidosis/">https://rarediseases.org/rare-diseases/amyloidosis/</a>&nbsp;</li><li>Palladini, G., Milani, P., Malavasi, F. et al. Daratumumab in the Treatment of Light-Chain (AL) Amyloidosis. Cells. 2021;10(3):545. doi:<a href="https://doi.org/10.3390%2Fcells10030545">10.3390/cells10030545</a>. PMID: <a href="https://pubmed.ncbi.nlm.nih.gov/33806310">33806310</a></li></ol>
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

export default MultipleMyeloma;