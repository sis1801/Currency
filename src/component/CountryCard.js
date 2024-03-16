import React from "react";
export default function CountryCard({name,flagimg,capital}) 
{
 
  return (
    <>
    
    <div
      style={{
        // border: "2px solid black",
        borderRadius: "8px",
        width: "14%",
        height: "450px",
        boxShadow: "rgba(91, 72, 82, 0.74) 0px 5px 15px",
        color:"black",
        alignItems:"center",
        display: "flex", flexWrap: "wrap",justifyContent:"center",margin:"15px"
      }}
    >
      <div><br/>
      <img style={{height:"120px",width:"160px"}} src={flagimg} alt={name}  /><br/><br/>
      <hr/><br/><br/>
          <div style={{fontFamily:"serif",fontSize:"22px"}}>Name:<b>{name}</b></div><br/><br/>
          <div style={{fontFamily:"serif",fontSize:"22px"}}>Capital: <b>{capital}</b></div>
        </div><br/>
        <br/>
    </div>
  </>
    
  );
}