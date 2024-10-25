/* eslint-disable react/prop-types */
// import { useState } from "react";

export function WorkExperienceInput({workData, setWorkData}) {
  

  const handleInputChange = (index, event) => {
    const values = [...workData];
    values[index][event.target.name] = event.target.value;
    setWorkData(values);
  };

  const handleAddWork = () => {
    setWorkData([
      ...workData,
      {
        company: "",
        role: "",
        durationStart: "",
        durationEnd: "",
      },
    ]);
  };

  const handleRemoveWork = (index) => {
    const values = [...workData];
    values.splice(index, 1);
    setWorkData(values);
  };

  return (
    <div className="work-experience-input">
      <h2 className="form-heading" >Work experience (if any)</h2>
      {workData.map((data, index) => (
        <div key={index} className="work-input-grid">
          <label>
            Role{" "}
            <input
              type="text"
              name="role"
              value={data.role}
              onChange={(event) => handleInputChange(index, event)}
            />
          </label>

          <label>
            {`Company's Name`}
            <input
              type="text"
              name="company"
              value={data.company}
              onChange={(event) => handleInputChange(index, event)}
            />
          </label>

          <label>
            From
            <input
              type="text"
              name="durationStart"
              value={data.durationStart}
              onChange={(event) => handleInputChange(index, event)}
            />
          </label>

          <label>
            To
            <input
              type="text"
              name="durationEnd"
              value={data.durationEnd}
              onChange={(event) => handleInputChange(index, event)}
              required
            />
          </label>

          <button type="button" className="remove-btn" onClick={() => handleRemoveWork(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddWork}>
        Add
      </button>
    </div>
  );
}
