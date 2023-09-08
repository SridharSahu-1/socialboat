import React from "react";
import "./Card.css";
import Footer from "../Footer/Footer";

export default function Card({ data }) {
  return (
    <>
      <div className="card_container">
        {data &&
          data.map((ele) => (
            <div className="card" key={ele.heading}>
              <video className="card_video" controls width="100%">
                <source src={ele.video} type="video/mp4" />
              </video>
              <h2 className="card_heading">{ele.heading}</h2>
              {/* <p className="card_description">{ele.text}</p> */}
              <ul className="card_tag">
                <li className="tag">Tags:</li>
                {ele.tags.map((tag, tagIndex) => (
                  <li className="card_list" key={tagIndex}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
      {data.length > 0 && <Footer />}
    </>
  );
}
