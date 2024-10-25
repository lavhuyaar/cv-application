/* eslint-disable react/prop-types */
export function PersonalInput({ personalData, setPersonalData }) {
  const handleInputChange = (event, index) => {
    const values = [...personalData];
    values[index][event.target.name] = event.target.value;
    setPersonalData(values);
  };

  return (
    <div className="personal-input">
      <h2 className="form-heading">Add personal details</h2>
      {personalData.map((data, index) => (
        <div key={index} className="personal-input-grid">
          <label>Name
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={(event) => handleInputChange(event, index)}
            />
          </label>

          <label>Phone Number
            <input
              type="number"
              name="phone"
              value={data.phone}
              onChange={(event) => handleInputChange(event, index)}
            />
          </label>

          <label>Email
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={(event) => handleInputChange(event, index)}
            />
          </label>

          <label>LinkedIn
            <input
              type="text"
              name="linkedin"
              value={data.linkedin}
              onChange={(event) => handleInputChange(event, index)}
            />
          </label>

          <label>Github
            <input
              type="text"
              name="github"
              value={data.github}
              onChange={(event) => handleInputChange(event, index)}
            />
          </label>
        </div>
      ))}
    </div>
  );
}
