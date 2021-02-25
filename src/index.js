import React from "react";
import ReactDom from "react-dom";
import Card from "./Cards";
import './index.css'; 
import Sdata from "./Sdata";  


function ncard(val) {
    console.log(val);

    return (
        <Card 
 imgsrc={val.imgscr}
 title={val.title}
 sname={val.sname}
 link={val.links}
/>

    )
}

ReactDom.render(
    <>
    <h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>
{Sdata.map(ncard)}

</> ,
    document.getElementById("root")
);