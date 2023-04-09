import React, { useState } from "react";
import { data } from "./accordian";
import "./App.css";
import AccordianItem from "./AccordianItem";

function App() {
  const [show, setShow] = useState(NaN);
  return (
    <div className="App">
      <div className="background-color">
        <img
          className="woman-online-container-mobile"
          src="/illustration-woman-online-mobile.svg"
        />
        <div className="main-card-background-color">
          <img
            className="woman-online-container-desktop"
            src="/illustration-woman-online-desktop.svg"
          />
          <div className="main-card-container">
            <div className="data-container">
              <h2>FAQ</h2>
              {data.map((data, index) => {
                return (
                  <AccordianItem
                    setShow={setShow}
                    show={show}
                    key={data.questions}
                    data={data}
                    index={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
