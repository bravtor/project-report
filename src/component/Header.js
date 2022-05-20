import React from "react";

export default function Header(props) {
    return (
      <div className="ReportHeader">
       
          <div className="HeaderTitle">{props.name}</div>
  
      </div>
    );
  }