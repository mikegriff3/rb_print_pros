import React from "react";

export default class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div
        id="footer"
        style={{
          height: "60px",
          backgroundColor: "black",
          position: "relative"
        }}
      >
        <div
          style={{
            color: "#DCDCDC",
            position: "absolute",
            top: "30%",
            marginLeft: "20px"
          }}
        >
          Copyright © Rancho Bernardo Print Pros
        </div>
      </div>
    );
  }
}
