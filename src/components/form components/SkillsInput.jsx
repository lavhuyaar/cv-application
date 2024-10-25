/* eslint-disable react/prop-types */
export function SkillsInput({ skillsData, setSkillsData }) {
  const handleInputChange = (event, index) => {
    const values = [...skillsData];
    values[index] = event.target.value;
    setSkillsData(values);
  };

  const handleAddSkill = () => {
    setSkillsData([...skillsData, ""]);
  };

  const handleRemoveSkill = (index) => {
    const values = [...skillsData];
    values.splice(index, 1);
    setSkillsData(values);
  };


  return (
    <div className="skills-input">
      <h2 className="form-heading" >Skills</h2>
      {skillsData.map((data, index) => (
        <div key={index} className="skills-input-grid">
          <label>
            <input
              type="text"
              onChange={(event) => handleInputChange(event, index)}
              value={data}
            />
            <button type="button" className="remove-btn" onClick={() => handleRemoveSkill(index)}>
              Remove
            </button>
          </label>
        </div>
      ))}
      <button type="button" onClick={handleAddSkill}>
        Add
      </button>
    </div>
  );
}
