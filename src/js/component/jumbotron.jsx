import React from "react";

function Jumbotron() {
  return (
    <div className="mb-4 bg-body-tertiary rounded-3">
      <div className="container-fluid py-5 bg-light" id="jumbito">
        <h1 className="display-3 fw-normal">A Warm Welcome!</h1>
        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae purus sed nunc rutrum egestas. Morbi pulvinar arcu mi, eu hendrerit dui egestas non. Morbi id sodales libero. Phasellus venenatis.</p>
        <button className="btn btn-primary" type="button">Call to action!</button>
      </div>
    </div>
  );
};

export default Jumbotron;