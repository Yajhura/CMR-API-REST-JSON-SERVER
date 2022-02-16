import React from "react";
import "../styles/Error.css"
const Error = () => {
  return (
    <div className=" w-full  ">
      <h1 className=" text-lef uppercase text-red-400 font-black text-5xl ">Usuario no encotrado</h1>
      <section className="error-container ">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
    </div>
  );
};

export default Error;
