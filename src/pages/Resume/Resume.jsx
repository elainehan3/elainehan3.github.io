import "./resume.scss";
import React, { Component } from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import ResumeOnly from "./ResumeOnly"

class Resume extends Component {
  render() {
    return (
      <div className="resume-page">
        <ReactToPrint 
          content={() => this.componentRef}
          documentTitle="ElaineHanResume">
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <button onClick={handlePrint}>SAVE AS PDF</button>
            )}
          </PrintContextConsumer>
        </ReactToPrint>
        <div className="resume-wrapper" id="resume-wrapper">
          <ResumeOnly ref={el => (this.componentRef = el)} />
        </div>
      </div>
    );
  }
}
export default Resume;
