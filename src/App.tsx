// import React from 'react';
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Anhua Dong</h1>
        <h2>Software Development and Reliability Engneer at Intel Corp.</h2>
      </header>
      <section>
        <h3 id="headerTitle">EXECUTIVE SUMMARY</h3>
        <p className="justify_text">
          Software Development Engineer with 7+ years of experience in building
          test automation frameworks, validation infrastructure, CI/CD pipeline
          development, and system-level data analysis for complex hardware
          platforms. Expertise in developing scalable testing solutions,
          performing system-level root-cause analysis, and driving reliability
          validation through data-driven methodologies. Proven ability to
          collaborate across engineering teams to deliver high-quality solutions
          in an agile environment, with strong background in JavaScript, Python,
          C++, Linux, and full-stack development in computing systems.
        </p>
      </section>
      <section>
        <h3 id="headerTitle">SKILLS</h3>
        <ul id="list">
          <li>
            <strong>Programming</strong> : JaveScript/TypeScript, Python, C#,
            C++, SQL, Shell Scripting.
          </li>
          <li>
            <strong>Testing & Infrastructure</strong>: Test Automation, Cypress,
            CI/CD Pipeline, Distributed Systems, Linux, Git, Github workflow,
            JIRA, RESTfu APIs, Remote Desktop Connection.
          </li>
          <li>
            <strong>Data Analysis & Tools</strong>: Data Visualization, MATLAB,
            JMP/JSL, VBA, Statistical Analysis, Design of Experiment (DOE).
          </li>
        </ul>
      </section>
      <section>
        <h3 id="headerTitle">PROFESSIONAL EXPERIENCE</h3>
        <p id="small_title">
          Softare Development and Reliability Engineer at Intel Corp.
        </p>
        <ul id="list">
          <li>
            <strong>Desinged and implemented automated test framewor</strong>{" "}
            for complext software platforms
          </li>
          <li>
            <strong>Built scalable data validation pipelines</strong> to process
            and analyze large-scale semiconductor datasets, ensuring data
            fidelity for system-level decision making.
          </li>
        </ul>
        <p id="small_title">
          Research Assistant at University of South Carolina
        </p>
        <ul id="list">
          <li>
            Developed computational models and simulations to optimize complex
            system parameters, reducing experimental iteration time by 80%.
          </li>
          <li>
            Applied data analysis techniques to characterize system behaviors
            and validate experimental resutls.
          </li>
          <li>
            Developed and characterized advanced nanomaterials using various
            characterization methodologies.
          </li>
        </ul>
      </section>
      <section>
        <h3 id="headerTitle">PROGRAMMING PROJECTS</h3>
        <p id="small_title">Full-stack meeting coordination system</p>
        <ul id="list">
          <li>
            Developed end-to-end software solution with secure authentication
            and data management capabilities.
          </li>
        </ul>
        <p id="small_title">Student Mangement System</p>
        <ul id="list">
          <li>
            Developed C++ Console application for student information management
            and full CRUD functionalities to handle student records with
            validated input and error handling.
          </li>
        </ul>
      </section>
      <section>
        <h3 id="headerTitle">EDUCATION</h3>
        <ul id="educationList">
          <li className="educationItem">
            <span className="education_left">
              Ph.D in Chemical Engineering |
              <strong> University of South Carolina</strong>
            </span>
            <span className="education_right">08/2017 - 09/2022</span>
          </li>
          <li className="educationItem">
            <span className="education_left">
              M.E. in Chemical Engineering | <strong>Tianjin University</strong>
            </span>
            <span className="education_right">08/2009 - 06/2016</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
export default App;
