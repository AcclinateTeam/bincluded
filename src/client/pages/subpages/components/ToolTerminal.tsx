import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '../../../theme/Header';



const ToolTerminal = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const [print, setPrint] = useState(false);
    const [digital, setDigital] = useState(false);

    const printLoaded = () => {
        setPrint(true);
        setDigital(false);
    }

    const digitalLoaded = () => {
        setDigital(true);
        setPrint(false);
    }

    if (digital && !print) {
        return (
            <>
                <section className="toolkit">
                    <div className="container">
                        <div className="eight columns offset-by-one">
                            <div className="header">
                                <h2>Career Resources</h2>
                                <p>Click the button below to select resources by category. Click the resource card to view more information.</p>
                            </div>
                            <div className="list">
                                <ul className="terminal">
                                    <a onClick={printLoaded}><li>Print</li></a>
                                    <a onClick={digitalLoaded}><li className="active">Digital</li></a>
                                </ul>
                            </div>
                            <div className="panel">
                                <div className="container">

                                    <div className="third columns">
                                        <div className="container">
                                            <div className="ten columns">
                                                <div className="panes">
                                                    <a href="https://www.canva.com/design/DAFS-F8MxDg/9pUNV9U_iwZ39YKxcOYhFA/edit"><img src="/images/toolkit/rack1.png" alt="" /></a>
                                                </div>
                                            </div>
                                            <div className="ten columns">
                                                <div className="panes">
                                                    <a href="https://www.canva.com/design/DAFS9wQW2pU/hGb351p6R4WjPUYdO-fO1w/edit"><img src="/images/toolkit/flyer5.png" alt="" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="third columns">
                                        <div className="container">
                                            <div className="ten columns">
                                                <div className="panes">
                                                    <a href="https://www.canva.com/design/DAFS-AzrV14/t8v6fI0fcxpMKfY9Od9UvQ/edit?utm_content=DAFS-AzrV14&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><img src="/images/toolkit/buscard1.png" alt="" /></a>
                                                </div>
                                            </div>
                                            <div className="ten columns">
                                                <div className="panes">
                                                    <a href="https://www.canva.com/design/DAFS-AzrV14/t8v6fI0fcxpMKfY9Od9UvQ/edit?utm_content=DAFS-AzrV14&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><img src="/images/toolkit/buscard2.png" alt="" /></a>
                                                </div>
                                            </div>
                                            <div className="ten columns">
                                                <div className="panes">
                                                    <a href="https://www.canva.com/design/DAFS9wQW2pU/hGb351p6R4WjPUYdO-fO1w/edit"><img src="/images/toolkit/flyer1.png" alt="" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="third columns">
                                        <div className="container">
                                            <div className="ten columns">
                                                <div className="panes">
                                                    <a href="https://www.canva.com/design/DAFS9wQW2pU/hGb351p6R4WjPUYdO-fO1w/edit"><img src="/images/toolkit/flyer2.png" alt="" /></a>
                                                </div>
                                            </div>
                                            <div className="ten columns">
                                                <div className="panes">
                                                    <a href="https://www.canva.com/design/DAFS-F8MxDg/9pUNV9U_iwZ39YKxcOYhFA/edit"><img src="/images/toolkit/rack3.png" alt="" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>







                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    } else {
        return (
            <>
                <section className="toolkit">
                    <div className="container">
                        <div className="eight columns offset-by-one">
                            <div className="header">
                                <h2>Career Resources</h2>
                                <p>Click the button below to select resources by category. Click the resource card to view more information.</p>
                            </div>
                            <div className="list">
                                <ul className="terminal">
                                    <a onClick={printLoaded}><li className="active">Print</li></a>
                                    <a onClick={digitalLoaded}><li>Digital</li></a>
                                </ul>
                            </div>
                            <div className="panel">
                                <div className="container">

                                    <div className="third columns">
                                        <div className="container">
                                            <div className="ten columns">
                                                <div className="panes">
                                                    <a href="https://www.canva.com/design/DAFSlWvXxLg/jeKYGh8ZgAmVjtYwBcCsHQ/edit?utm_content=DAFSlWvXxLg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><img src="/images/toolkit/tall2.png" alt="" /></a>
                                                </div>
                                            </div>
                                            <div className="ten columns">
                                                <div className="panes">
                                                    <a href="https://www.canva.com/design/DAFSUTWSo1g/c6tM5trPKDKAAEKrVZBAxg/edit?utm_content=DAFSUTWSo1g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><img src="/images/toolkit/box5.png" alt="" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="third columns">
                                        <div className="container">
                                            <div className="ten columns">
                                                <div className="panes">
                                                    <a href="https://www.canva.com/design/DAFSy1KZ6go/j7EQRdGsecJ9X6WUjHxdog/edit?utm_content=DAFSy1KZ6go&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><img src="/images/toolkit/long2.png" alt="" /></a>
                                                </div>
                                            </div>
                                            <div className="ten columns">
                                                <div className="panes">
                                                    <a href="https://www.canva.com/design/DAFSy1KZ6go/j7EQRdGsecJ9X6WUjHxdog/edit?utm_content=DAFSy1KZ6go&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><img src="/images/toolkit/long3.png" alt="" /></a>
                                                </div>
                                            </div>
                                            <div className="ten columns">
                                                <div className="panes">
                                                    <a href="https://www.canva.com/design/DAFSUTWSo1g/c6tM5trPKDKAAEKrVZBAxg/edit?utm_content=DAFSUTWSo1g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><img src="/images/toolkit/box2.png" alt="" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="third columns">
                                        <div className="container">
                                            <div className="ten columns">
                                                <div className="panes">
                                                    <a href="https://www.canva.com/design/DAFSUTWSo1g/c6tM5trPKDKAAEKrVZBAxg/edit?utm_content=DAFSUTWSo1g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><img src="/images/toolkit/box3.png" alt="" /></a>
                                                </div>
                                            </div>
                                            <div className="ten columns">
                                                <div className="panes">
                                                    <a href="https://www.canva.com/design/DAFSlWvXxLg/jeKYGh8ZgAmVjtYwBcCsHQ/edit?utm_content=DAFSlWvXxLg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"><img src="/images/toolkit/tall3.png" alt="" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default ToolTerminal;
