import React from "react";
import "./Education.css";
function Education() {
  return (
    <div className="education">
      <h2>Education</h2>
      <div className="edu">
        <div className="edu-1">
          <img src="https://i.ibb.co/vhKdZ9b/cgec.jpg" alt="CGEC" />
          <h2>Coochbehar Govt Engineering College</h2>
          <p>B.Tech in Computer Science and Engineering</p>
          <p>Academic Year: 2022-2025</p>
        </div>
        <div className="edu-2">
          <img src="https://i.ibb.co/G0NYmFH/jpi.jpg" alt="JPI" />
          <h2>Jalpaiguri Polytecnic Institute</h2>
          <p>Diploma in Mechanical Engineering</p>
          <p>Academic Year: 2018-2021</p>
        </div>
        <div className="edu-3">
          <img src="https://i.ibb.co/jkZkzfk/bkhs.jpg" alt="BKHS" />
          <h2>Baneswar Khabsa High School</h2>
          <p>12th with PCM</p>
          <p>Academic Year: 2016-2018</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
