import React from "react";
import photo1 from "../../../images/positivity-removebg-preview.png";
import photo2 from "../../../images/iclusivity-removebg-preview.png";
import photo3 from "../../../images/fun-removebg-preview.png";
const Principles = () => {
  return (
    <div>
      <div className="container py-5 text-white">
        <div className="d-flex align-items-center justify-content-center text-center">
          <div>
            <h2 className="text-white title-styel">
              No Judgments are the Best Kind
            </h2>
            <p>Differences are encouraged. Quirks are welcomed.</p>
          </div>
        </div>
        <div className="row">
          <div className=" col-md-4 ">
            <div>
              <div>
                <img style={{ width: "100%" }} src={photo1} alt="" />
              </div>

              <div className="text-center mt-4">
                <div>
                  <h5>POSITIVITY</h5>
                  <p>
                    We are nurturers: we seek only to encourage, entertain, and
                    empower.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-md-4 ">
            <div>
              <div>
                <img style={{ width: "100%" }} src={photo2} alt="" />
              </div>

              <div className="text-center mt-4">
                <div>
                  <h5>INCLUSIVITY</h5>
                  <p>
                    Here we keep open minds. There is no one type or way in our
                    diverse community. Come as you are!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-md-4 ">
            <div>
              <div>
                <img style={{ width: "100%" }} src={photo3} alt="" />
              </div>

              <div className="text-center mt-4">
                <div>
                  <h5>FUN</h5>
                  <p>
                    We know serious fitness is hard, but that doesn’t mean it
                    can’t be an edge-of-your-seat, can’t-get-enough,
                    look-forward-to-your-workouts party.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principles;
