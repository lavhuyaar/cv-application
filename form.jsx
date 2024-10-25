/* eslint-disable react/prop-types */
import { useState } from "react";
import { Resume } from "./resume";

export function Form() {
  const [data, setData] = useState({
    name: "Peter Parker",
    email: "spoider@man.com",
    phone: 777,
  });

  function handleNameOnChange(e) {
    // const newData = { ...data, name: e.target.value };
    setData({...data, name: e.target.value});
  }

  function handleNumberOnChange(e) {
    const newData = { ...data, phone: e.target.value };
    setData(newData);
  }

  function handleEmailOnChange(e) {
    const newData = { ...data, email: e.target.value };
    setData(newData);
  }

  function handleOnSubmit() {
    setData({...data})
    console.log(data)
  }

  return (
    <>
      <form>
        <Name onChange={handleNameOnChange} />
        <PhoneNumber onChange={handleNumberOnChange} />
        <Email onChange={handleEmailOnChange} />
        <button type="submit" onSubmit={handleOnSubmit}>Submit</button>
      </form>

      <Resume name={data.name} phone={data.phone} email={data.email} />
    </>
  );
}

function Name({ onChange }) {
  return (
    <div>
      <label>
        Name
        <input type="text" className="name" onChange={onChange} />
      </label>
    </div>
  );
}

function Email({ onChange }) {
  return (
    <div>
      <label>
        Email
        <input type="email" className="email" onChange={onChange} />
      </label>
    </div>
  );
}

function PhoneNumber({ onChange }) {
  return (
    <div>
      <label>
        Phone Number
        <input type="number" className="number" onChange={onChange} />
      </label>
    </div>
  );
}
