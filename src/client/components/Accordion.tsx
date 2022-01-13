import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState<any>(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="button">{isActive ? <FontAwesomeIcon style={{ transform: `rotate(45deg)`}} icon="plus" /> : <FontAwesomeIcon icon="plus" /> }</div>
        {/* <div className="title">{title}</div> */}
        <div className="title bold">What is a Clinical Trial?</div>
      </div>
      {/* {isActive && <div className="accordion-content">{content}</div>} */}
      {isActive && <div className="accordion-content">In a clinical trial, participants receive specific interventions according to the research plan or protocol created by the investigators.</div>}
    </div>
  );
};

export default Accordion;