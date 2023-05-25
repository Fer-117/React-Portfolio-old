import React from 'react';

export default function Project() {
  return (
    <div className="container pt-5 pb-5 mb-2">
      <div className="row justify-content-evenly my-4">
        <div className="col-md-5 text-center bg-secondary d-flex flex-column align-items-center justify-content-center">
          <div className="image-container m-2">
            <img src="../../Assets/project4.gif" alt="" className="img-fluid" />
          </div>
          <a
            href="https://fer-117.github.io/quizApp/"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex flex-column align-items-center m-1 link-overlay text-decoration-none bg-dark rounded"
          >
            <div className="overlay-bottom">
              <p className="text-white p-1">Quiz App</p>
            </div>
          </a>
        </div>

        <div className="col-md-5 text-center bg-secondary d-flex flex-column align-items-center justify-content-center">
          <div className="image-container m-2">
            <img src="../../Assets/project5.gif" alt="" className="img-fluid" />
          </div>
          <a
            href="https://fer-117.github.io/workDay-Scheduler/"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex flex-column align-items-center link-overlay text-decoration-none bg-dark rounded m-1 "
          >
            <div className="overlay-bottom">
              <p className="text-white p-1">Workday Scheduler</p>
            </div>
          </a>
        </div>
      </div>

      <div className="row justify-content-evenly my-4">
        <div className="col-md-5 text-center bg-secondary d-flex flex-column align-items-center justify-content-center">
          <div className="image-container m-2">
            <img src="../../Assets/project6.png" alt="" className="img-fluid" />
          </div>
          <a
            href="https://fer-117.github.io/weatherDashboard/"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex flex-column align-items-center link-overlay text-decoration-none bg-dark rounded m-1"
          >
            <div className="overlay-bottom">
              <p className="text-white p-1">Weather Dashboard</p>
            </div>
          </a>
        </div>

        <div className="col-md-5 text-center bg-secondary d-flex flex-column align-items-center justify-content-center">
          <div className="image-container m-2">
            <img src="../../Assets/project7.png" alt="" className="img-fluid" />
          </div>
          <a
            href="https://fathomless-caverns-42442.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex flex-column align-items-center link-overlay text-decoration-none bg-dark rounded m-1"
          >
            <div className="overlay-bottom">
              <p className="text-white p-1">Note-Taker</p>
            </div>
          </a>
        </div>
      </div>

      {/* <div className="row justify-content-evenly my-4">
        <div className="col-md-5 text-center bg-secondary d-flex flex-column align-items-center justify-content-center">
          <div className="image-container m-2">
            <img src="../../Assets/" alt="" className="img-fluid" />
          </div>
          <a
            href="https://github.com/your-repository-link"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex flex-column align-items-center link-overlay text-decoration-none bg-dark rounded m-1"
          >
            <div className="overlay-bottom">
              <p className="text-white p-1">Project 5</p>
            </div>
          </a>
        </div>

        <div className="col-md-5 text-center bg-secondary d-flex flex-column align-items-center justify-content-center">
          <div className="image-container m-2">
            <img src="../../Assets/" alt="" className="img-fluid" />
          </div>
          <a
            href="https://github.com/your-repository-link"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex flex-column align-items-center link-overlay text-decoration-none bg-dark rounded m-1"
          >
            <div className="overlay-bottom">
              <p className="text-white p-1">Project 6</p>
            </div>
          </a>
        </div>
      </div> */}
    </div>
  );
}
