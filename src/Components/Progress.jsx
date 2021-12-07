import React from "react";

function Progress(props) {
  return (
    <div class="container">
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        style={{width:`${props.value}%`}}
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {props.value}%
      </div>
    </div>
    </div>
  );
}

export default Progress;
