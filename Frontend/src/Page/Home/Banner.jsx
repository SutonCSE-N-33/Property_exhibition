// eslint-disable-next-line no-unused-vars
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="bg-blue-400 mt-1">
        <video
          id=""
          className=""
          poster=""
          width="100%"
          height="240"
          autoPlay
          playsInline
          muted
          loop
        >
          <source
            src="https://demo1wpresidence.b-cdn.net/wp-content/uploads/2018/07/Pexels-Videos-2564.mp4"
            type="video/mp4"
          />
          {/* Add additional source tags for other video formats if needed */}
        </video>
      </div>
    </div>
  );
};

export default Banner;
