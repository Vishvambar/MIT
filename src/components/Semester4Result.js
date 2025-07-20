import React from "react";

const Semester4Result = () => {
  const containerStyle = {
    padding: "8px",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    lineHeight: "1.4",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5"
  };

  const resultContainerStyle = {
    maxWidth: "100%",
    margin: "0 auto",
    backgroundColor: "white",
    padding: "12px",
    border: "1px solid #ccc",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    borderRadius: "4px"
  };

  const headerStyle = {
    textAlign: "center",
    margin: "8px 0",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333"
  };

  const subHeaderStyle = {
    textAlign: "center",
    margin: "6px 0 12px 0",
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.3"
  };

  const infoStyle = {
    marginBottom: "12px",
    fontSize: "12px"
  };

  const tableContainerStyle = {
    overflowX: "auto",
    marginTop: "12px",
    border: "1px solid #ddd",
    borderRadius: "4px"
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "10px",
    minWidth: "600px",
    backgroundColor: "white"
  };

  const tableHeaderStyle = {
    backgroundColor: "#f8f9fa",
    padding: "6px 3px",
    textAlign: "center",
    borderBottom: "2px solid #dee2e6",
    fontSize: "9px",
    fontWeight: "bold",
    color: "#495057",
    whiteSpace: "nowrap"
  };

  const tableCellStyle = {
    padding: "5px 3px",
    borderBottom: "1px solid #dee2e6",
    borderRight: "1px solid #dee2e6",
    verticalAlign: "top",
    fontSize: "9px",
    textAlign: "center"
  };

  const courseCellStyle = {
    ...tableCellStyle,
    textAlign: "left",
    minWidth: "150px"
  };

  const summaryStyle = {
    margin: "12px 0",
    fontSize: "11px",
    fontWeight: "bold",
    textAlign: "center",
    padding: "8px",
    backgroundColor: "#e9ecef",
    borderRadius: "4px"
  };

  const cumulativeStyle = {
    border: "1px solid #000",
    padding: "8px",
    marginTop: "12px",
    fontSize: "11px",
    backgroundColor: "#f8f9fa",
    borderRadius: "4px"
  };

  const footerStyle = {
    fontSize: "9px",
    marginTop: "12px",
    lineHeight: "1.3",
    color: "#666"
  };

  const signatureStyle = {
    marginTop: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexWrap: "wrap",
    gap: "8px"
  };

  // Media queries simulation for larger screens
  const isLargeScreen = window.innerWidth >= 768;
  
  if (isLargeScreen) {
    Object.assign(containerStyle, { padding: "20px", fontSize: "16px" });
    Object.assign(resultContainerStyle, { maxWidth: "800px", padding: "24px" });
    Object.assign(headerStyle, { fontSize: "24px", margin: "12px 0" });
    Object.assign(subHeaderStyle, { fontSize: "18px", margin: "10px 0 16px 0" });
    Object.assign(infoStyle, { fontSize: "14px", marginBottom: "16px" });
    Object.assign(tableStyle, { fontSize: "12px" });
    Object.assign(tableHeaderStyle, { fontSize: "11px", padding: "8px 6px" });
    Object.assign(tableCellStyle, { fontSize: "11px", padding: "6px" });
    Object.assign(courseCellStyle, { fontSize: "11px", padding: "6px" });
    Object.assign(summaryStyle, { fontSize: "13px", padding: "10px" });
    Object.assign(cumulativeStyle, { fontSize: "13px", padding: "12px" });
    Object.assign(footerStyle, { fontSize: "11px" });
  }

  return (
    <div style={containerStyle}>
      <div style={resultContainerStyle}>
        <h2 style={headerStyle}>School of Computing</h2>
        <h3 style={subHeaderStyle}>
          B. Tech. (Computer Science and Engineering)
          <br />
          Fourth Semester End Examinations 2024-2025
        </h3>
        
        <div style={infoStyle}>
          <p style={{ margin: "4px 0" }}><strong>Student Name:</strong> Patil Parth Nischal</p>
          <p style={{ margin: "4px 0" }}><strong>Enrolment Number:</strong> ADT23SOCB0699</p>
          <p style={{ margin: "4px 0" }}><strong>Father's Name:</strong> Nischal</p>
          <p style={{ margin: "4px 0" }}><strong>Mother's Name:</strong> Manisha</p>
        </div>

        <div style={tableContainerStyle}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>Course Code</th>
                <th style={tableHeaderStyle}>Course Name</th>
                <th style={tableHeaderStyle}>CR</th>
                <th style={tableHeaderStyle}>INT</th>
                <th style={tableHeaderStyle}>EXT</th>
                <th style={tableHeaderStyle}>GR</th>
                <th style={tableHeaderStyle}>Result</th>
                <th style={tableHeaderStyle}>Rmk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tableCellStyle}>23ASH1109</td>
                <td style={courseCellStyle}>Mathematical Foundation for Computing - III</td>
                <td style={tableCellStyle}>3</td>
                <td style={tableCellStyle}>P</td>
                <td style={tableCellStyle}>P</td>
                <td style={tableCellStyle}>B</td>
                <td style={tableCellStyle}>PASS</td>
                <td style={tableCellStyle}>CA</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>23CSE3001</td>
                <td style={courseCellStyle}>Operating System</td>
                <td style={tableCellStyle}>4</td>
                <td style={tableCellStyle}>P</td>
                <td style={tableCellStyle}>P</td>
                <td style={tableCellStyle}>B</td>
                <td style={tableCellStyle}>PASS</td>
                <td style={tableCellStyle}>CA</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>23CSE2011</td>
                <td style={courseCellStyle}>Computer Networks</td>
                <td style={tableCellStyle}>3</td>
                <td style={tableCellStyle}>P</td>
                <td style={tableCellStyle}>P</td>
                <td style={tableCellStyle}>A</td>
                <td style={tableCellStyle}>PASS</td>
                <td style={tableCellStyle}>CA</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>23CSE2013</td>
                <td style={courseCellStyle}>Project Based Learning II</td>
                <td style={tableCellStyle}>2</td>
                <td style={tableCellStyle}>P</td>
                <td style={tableCellStyle}>A</td>
                <td style={tableCellStyle}>A</td>
                <td style={tableCellStyle}>PASS</td>
                <td style={tableCellStyle}>CA</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>23CSE3006</td>
                <td style={courseCellStyle}>Advanced Java Programming</td>
                <td style={tableCellStyle}>2</td>
                <td style={tableCellStyle}>P</td>
                <td style={tableCellStyle}>B</td>
                <td style={tableCellStyle}>A</td>
                <td style={tableCellStyle}>PASS</td>
                <td style={tableCellStyle}>CA</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>23CSE2028</td>
                <td style={courseCellStyle}>Research Writing and Scientific Communication</td>
                <td style={tableCellStyle}>1</td>
                <td style={tableCellStyle}>P</td>
                <td style={tableCellStyle}>A</td>
                <td style={tableCellStyle}>A</td>
                <td style={tableCellStyle}>PASS</td>
                <td style={tableCellStyle}>CA</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>23CSE3012</td>
                <td style={courseCellStyle}>Foundations of Artificial Intelligence</td>
                <td style={tableCellStyle}>3</td>
                <td style={tableCellStyle}>P</td>
                <td style={tableCellStyle}>B</td>
                <td style={tableCellStyle}>A</td>
                <td style={tableCellStyle}>PASS</td>
                <td style={tableCellStyle}>CA</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>23CV3102</td>
                <td style={courseCellStyle}>Environmental Studies</td>
                <td style={tableCellStyle}>2</td>
                <td style={tableCellStyle}>P</td>
                <td style={tableCellStyle}>A</td>
                <td style={tableCellStyle}>A</td>
                <td style={tableCellStyle}>PASS</td>
                <td style={tableCellStyle}>CA</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>23SHD1008</td>
                <td style={courseCellStyle}>Societal Immersion Spirituality and Morality - II</td>
                <td style={tableCellStyle}>2</td>
                <td style={tableCellStyle}>P</td>
                <td style={tableCellStyle}>B</td>
                <td style={tableCellStyle}>A</td>
                <td style={tableCellStyle}>PASS</td>
                <td style={tableCellStyle}>CA</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={summaryStyle}>
          Credits Completed: 22 | Credits Registered: 22 | SGPA: 7.23
        </div>

        <div style={cumulativeStyle}>
          <p style={{ margin: "4px 0", fontWeight: "bold" }}>Cumulative Record</p>
          <p style={{ margin: "2px 0" }}>Credits Completed: 87</p>
          <p style={{ margin: "2px 0" }}>Credits Registered: 87</p>
          <p style={{ margin: "2px 0" }}>CGPA: 7.23</p>
          <p style={{ margin: "2px 0" }}>First Class</p>
          <p style={{ margin: "2px 0" }}>Promoted</p>
        </div>

        <div style={footerStyle}>
          <p style={{ margin: "0 0 6px 0", fontWeight: "bold" }}>Abbreviations Used:</p>
          <p style={{ margin: "1px 0" }}>Rmk: Remark, CA: Current Attempt, PP: Past Performance</p>
          <p style={{ margin: "1px 0" }}>#: Attempted more than once, $: Attempted to Improve</p>
          <p style={{ margin: "1px 0" }}>CR: Credits, INT: Internal, EXT: External, GR: Grade</p>
          <p style={{ margin: "1px 0" }}>*: Benefit of Sports Marks</p>
          
          <div style={signatureStyle}>
            <span>Date: 04 July 2025</span>
            <div style={{ textAlign: "right", fontSize: "9px" }}>
              <strong>(Dr. Dnyanadeo Neelwaram)</strong>
              <br />Controller of Examinations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Semester4Result;
