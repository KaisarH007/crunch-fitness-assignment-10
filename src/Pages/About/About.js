import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="home-bg text-white">
      <div className="about-banner text-center align-item center justify-content-center text-white ">
        <div>
          <h1>Abou Us</h1>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row my-4">
          <div className="col-md-6">
            <h2>Welcome to the Crunch Family</h2>
            <p>
              There are no judgments here – No too much or not enough. No glares
              of disapproval. Here we keep open minds. We are nurturers. We seek
              only to encourage, empower and entertain. There is no one type.
              There is no one reason. There is no one way. What we are is a
              diverse community; what we have is a culture of fun; what there
              is, is room for everyone: all kinds of people with all kinds of
              goals who’ve chosen to come reach them with us. Crunch. No
              Judgments.
            </p>
          </div>
          <div className="col-md-6 my-4">
            <img
              style={{ width: "100%" }}
              src="https://snworksceo.imgix.net/dpn-34s/ab43db06-9bfa-40dc-a9df-6b177e1162ab.sized-1000x1000.jpeg?w=1000"
              alt=""
            />
          </div>
        </div>
        <div className="row p-4 mt-4">
          <div className="col-md-6">
            <img
              style={{ width: "100%" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpfgDXr1_IMGST0-6wLBqQCeB7Gzm-qbjYvg&usqp=CAU"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <h2>Why We Do What We Do</h2>
            <p>
              There are no judgments here – No too much or not enough. No glares
              of disapproval. Here we keep open minds. We are nurturers. We seek
              only to encourage, empower and entertain. There is no one type.
              There is no one reason. There is no one way. What we are is a
              diverse community; what we have is a culture of fun; what there
              is, is room for everyone: all kinds of people with all kinds of
              goals who’ve chosen to come reach them with us. Crunch. No
              Judgments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
