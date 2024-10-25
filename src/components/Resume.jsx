/* eslint-disable react/prop-types */
export function Resume({ personalData, workData, educationData, skillsData, visible }) {
  return (
    <div className={visible === 1 ? "hide" : "resume-container"}>
      <div className="personal-details">
        {personalData.map((data, index) => (
          <div key={index}>
            <h3 className="name-heading">{data.name}</h3>
            <div className="personal-links">
              <a className="resume-personal-phone">{data.phone}</a>
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${data.email}`} target="main" className="resume-personal-email">{data.email}</a>
              <a href={data.linkedin} target="main" className="resume-personal-linkedin">Linkedin</a>
              <a href={data.github} target="main" className="resume-personal-github">Github</a>
            </div>
          </div>
        ))}
      </div>

      
      <div className="education-details">
      <h2 className="resume-heading">EDUCATION</h2>
        {educationData.map((data, index) => (
          <div key={index}>
            <ol>
              <li className="resume-education-degree">{data.degree}</li>
              <li className="resume-education-institution">{data.institution}</li>
              <li className="resume-education-duration">
                {data.dateOfStudyStart}
                {" - "}
                {data.dateOfStudyEnd}
              </li>
            </ol>
          </div>
        ))}
      </div>

      
      <div className="work-experience-details">
      <h2 className="resume-heading">WORK EXPERIENCE</h2>
        {workData.map((data, index) => (
          <div key={index}>
            <ol>
            <li className="resume-work-role">{data.role}</li>
              <li className="resume-work-company">{data.company}</li>
              <li className="resume-work-duration">{data.durationStart} {" - "} {data.durationEnd}</li>
            </ol>
          </div>
        ))}
      </div>

      
      <div className="skills-details">
      <h2 className="resume-heading">SKILLS</h2>
        {skillsData.map((data, index) => (
          <div key={index}>
            <ul>
              <li>{data}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
