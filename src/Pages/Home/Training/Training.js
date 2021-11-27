import React from "react";

const Training = () => {
  return (
    <div className="home-bg text-white">
      <div className="container">
        <div className="row p-4">
          <div className="col-md-6 fw-bold d-flex align-items-center justify-content-center">
            <div>
              <div>
                <h2>It’s One-on-Wonderful</h2>

                <p>
                  Here at Crunch, we focus on bringing you the most powerful
                  workouts to meet your needs: our toolbox includes weighted
                  battle ropes, kettlebells, TRX® suspension straps, MMA
                  equipment, Bulgarian Bags, and the list goes on. It may sound
                  like a mouthful, but this world-class functional training
                  equipment helps our trainers provide you with an array of High
                  Intensity Interval Training (HIIT) workouts.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <img
              style={{ width: "100%" }}
              src="https://simplygym.co.uk/wp-content/uploads/2018/06/AdobeStock_132111257-1-1024x683.jpeg"
              alt=""
            />
          </div>
        </div>
        <hr />
        <div className="row p-4">
          <div className="col-md-6">
            <img
              style={{ width: "100%" }}
              src="https://www.ihrsa.org/uploads/Articles/Column-Width/_1200x630_crop_center-center_82_none/Personal-Training_kettle-bell_column.jpg?mtime=1518206280"
              alt=""
            />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div>
              <h2>Personal Training</h2>

              <p>
                You can think of personal training like our secret sauce – it’s
                the fastest and safest way to get seriously awesome results. Our
                experienced trainers develop fun (yes, fun!) individualized
                fitness programs that incorporate cutting-edge exercises and
                nutrition to help you crush your fitness goals. Plus, Crunch
                Fitness personal trainers in the HIITZone program use the
                Combative Training Center to help you reach your fitness goals.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="row p-4">
          <div className="col-md-6  d-flex align-items-center justify-content-center">
            <div>
              <h2>Small Group Training</h2>

              <p>
                Get sweaty with your best friend or make a new workout buddy on
                the turf in our group training sessions! With a team environment
                to motivate you through that last rep, your results are waiting
                just behind that punching bag. Our trainers will keep you
                challenged and engaged with expert attention on your road to
                glory.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <img
              style={{ width: "100%" }}
              src="https://img.grouponcdn.com/deal/UCcXF2M6C6S37Frx9cRf5vcNcfa/UC-1000x599/v1/c870x524.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
