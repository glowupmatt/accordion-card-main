import React from "react";

export default function AccordianItem({ data, index, show, setShow }) {
  return (
    <div className="data-info-container">
      <div className="info-container">
        <div>
          <h4>{data.questions}</h4>
          {show === index && <p>{data.desc}</p>}
        </div>
        <button
          onClick={() =>
            setShow((prev) => {
              return prev === index ? NaN : index;
            })
          }
          className="down-arrow"
        >
          <img
            className={show === index ? "hidden-button" : "show-button"}
            src="/icon-arrow-down.svg"
          />
        </button>
      </div>
      <hr />
    </div>
  );
}
