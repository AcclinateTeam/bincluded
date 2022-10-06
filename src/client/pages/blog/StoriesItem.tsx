import React from 'react';
import { Link } from 'react-router-dom';

const StoriesItem = (props: any) =>
{

    const path = props.path;
    const img = props.img;
    const member = props.member;
    const title = props.title;

    return (
        <>
            {/* NEW ROW */}
            <div className="third columns rack">
                <Link to={`${path}`}>
                    <div className="frames">
                        <div className="frame">
                            <div className="image">
                                <img src={`/images/${img}`} alt="" />
                            </div>
                            <div className="text">
                                <h1>{member}</h1>
                                <p>{title}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default StoriesItem;