/* eslint-disable react/prop-types */


export function EducationInput({educationData, setEducationData}) {
  

  const handleInputChange = (index, event) => {
    const values = [...educationData];
    values[index][event.target.name] = event.target.value;
    setEducationData(values);
  };

  const handleAddEducation = () => {
    setEducationData([
      ...educationData,
      {
        institution: "",
        degree: "",
        dateOfStudyStart: "",
        dateOfStudyEnd: "",
      },
    ]);
  };

  const handleRemoveEducation = (index) => {
    const values = [...educationData];
    values.splice(index, 1);
    setEducationData(values);
  };

  return (
    <div className="education-input">
      <h2 className="form-heading">Education</h2>
      {educationData.map((data, index) => (
        <div key={index} className="education-input-grid">
          

          <label>
            Enter your degree
            <input
              type="text"
              name="degree"
              value={data.degree}
              onChange={(event) => handleInputChange(index, event)}
            />
          </label>

          <label>
            Enter your institution
            <input
              type="text"
              name="institution"
              value={data.institution}
              onChange={(event) => handleInputChange(index, event)}
            />
          </label>

          <label>
            Started on
            <input
              type="text"
              name="dateOfStudyStart"
              value={data.dateOfStudyStart}
              onChange={(event) => handleInputChange(index, event)}
            />
          </label>

          <label>
            Till
            <input
              type="text"
              name="dateOfStudyEnd"
              value={data.dateOfStudyEnd}
              onChange={(event) => handleInputChange(index, event)}
            />
          </label>

          <button type="button" className="remove-btn" onClick={() => handleRemoveEducation(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddEducation}>
        Add Education
      </button>
    </div>
  );
}
