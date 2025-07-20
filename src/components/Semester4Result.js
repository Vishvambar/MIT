import React from "react";

const Semester4Result = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div id="result-container" style={{ maxWidth: "800px", margin: "auto", backgroundColor: "white", padding: "30px", border: "1px solid #ccc", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
        <h2 style={{ textAlign: "center" }}>School of Computing</h2>
        <h3 style={{ textAlign: "center" }}>
          B. Tech. (Computer Science and Engineering)<br />
          Fourth Semester End Examinations 2024-2025
        </h3>
        <p><strong>Student Name:</strong> Patil Parth Nischal</p>
        <p><strong>Enrolment Number:</strong> ADT23SOCB0699</p>
        <p><strong>Father's Name:</strong> Nischal</p>
        <p><strong>Mother's Name:</strong> Manisha</p>

        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }} border="1">
          <thead>
            <tr>
              <th>Course Code</th><th>Course Name</th><th>CR</th><th>INT</th><th>EXT</th><th>GR</th><th>Result</th><th>Rmk</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>23ASH1109</td><td>Mathematical Foundation for Computing - III</td><td>3</td><td>P</td><td>P</td><td>B</td><td>PASS</td><td>CA</td></tr>
            <tr><td>23CSE3001</td><td>Operating System</td><td>4</td><td>P</td><td>P</td><td>B</td><td>PASS</td><td>CA</td></tr>
            <tr><td>23CSE2011</td><td>Computer Networks</td><td>3</td><td>P</td><td>P</td><td>A</td><td>PASS</td><td>CA</td></tr>
            <tr><td>23CSE2013</td><td>Project Based Learning II</td><td>2</td><td>P</td><td>A</td><td>A</td><td>PASS</td><td>CA</td></tr>
            <tr><td>23CSE3006</td><td>Advanced Java Programming</td><td>2</td><td>P</td><td>B</td><td>A</td><td>PASS</td><td>CA</td></tr>
            <tr><td>23CSE2028</td><td>Research Writing and Scientific Communication</td><td>1</td><td>P</td><td>A</td><td>A</td><td>PASS</td><td>CA</td></tr>
            <tr><td>23CSE3012</td><td>Foundations of Artificial Intelligence</td><td>3</td><td>P</td><td>B</td><td>A</td><td>PASS</td><td>CA</td></tr>
            <tr><td>23CV3102</td><td>Environmental Studies</td><td>2</td><td>P</td><td>A</td><td>A</td><td>PASS</td><td>CA</td></tr>
            <tr><td>23SHD1008</td><td>Societal Immersion Spirituality and Morality - II</td><td>2</td><td>P</td><td>B</td><td>A</td><td>PASS</td><td>CA</td></tr>
          </tbody>
        </table>

        <p><strong>Credits Completed:</strong> 22 | <strong>Credits Registered:</strong> 22 | <strong>SGPA:</strong> 7.23</p>

        <div style={{ border: "1px solid #000", padding: "10px", marginTop: "20px" }}>
          <p><strong>Cumulative Record</strong></p>
          <p>Credits Completed: 87</p>
          <p>Credits Registered: 87</p>
          <p>CGPA: 7.23</p>
          <p>First Class</p>
          <p>Promoted</p>
        </div>

        <p style={{ fontSize: "12px", marginTop: "20px" }}>
          <strong>Abbreviations Used:</strong> Rmk: Remark, CA: Current Attempt, PP: Past Performance,<br />
          #: Attempted more than once, $: Attempted to Improve,<br />
          CR: Credits, INT: Internal, EXT: External, GR: Grade,<br />
          *: Benefit of Sports Marks.<br /><br />
          Date: 04 July 2025<br />
          <span style={{ float: "right" }}><strong>(Dr. Dnyanadeo Neelwaram)</strong><br />Controller of Examinations</span>
        </p>
      </div>
    </div>
  );
};

export default Semester4Result;
