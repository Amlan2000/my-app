import React from "react";
import image1 from "../../images/minister1.png"
import "../Ministers/Ministers.css"

const ministers=[
    {src:image1,name:"Shri Narendra Modi",caption:"Honarable Prime Minister"},
    {src:image1,name:"Shri Narendra Modi",caption:"Honarable Prime Minister"},
    {src:image1,name:"Shri Narendra Modi",caption:"Honarable Prime Minister"}
]


const Ministers = ()=> {
    return (
        <div className="ministers-component">
            {ministers.map((image, index) => (
            <div className="minister-card">
          <img key={index} src={image.src} alt={`Gallery Image ${index + 1}`} />
          <div className="minister-name">{image.name}</div>
          <div className="minister-caption">{image.caption}</div>
          </div>
        ))}
        </div>
    );
};

export default Ministers;