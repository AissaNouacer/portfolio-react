import React, { Component } from "react";

import Aissa from "./Aissa.jpg";
class Resume extends Component {
  render() {
    return (
      <div className="row " style={{ height: "100%" }}>
        <div className="col-md-4 resume-lef-col">
          <img
            src={Aissa}
            alt="Me"
            className="mx-auto d-block avatar-img rounded ResuImg img-fluid "
          />
        </div>

        <div className="col-md-8 resume-righ-col">
          <h1>Aissa Nouacer</h1>
        </div>
      </div>
      // <div
      //   className="container-fluid"
      //   style={{ backgroundColor: "white", height: "100%", width: "90%" }}
      // >
      //   <Grid /*className="backG"*/>
      //     <Cell col={4} className="resume-lef-col">
      //       <img
      //         src={Aissa}
      //         alt="Me"
      //         className="mx-auto d-block avatar-img rounded ResuImg img-fluid "
      //       />
      //     </Cell>
      //     <Cell className="resume-righ-col" col={8}>
      //       righ
      //     </Cell>
      //   </Grid>
      // </div>
    );
  }
}

export default Resume;
