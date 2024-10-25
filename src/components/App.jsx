import { useState } from "react";
import { Resume } from "./Resume";
import { Form } from "./form components/Form";

export function App() {
  const [personalData, setPersonalData] = useState([
    {
      name: "Random name",
      phone: 9876543210,
      email: "randomperson@gmail.com",
      linkedin: "https://www.linkedin.com/in/dummyacc",
      github: "https://www.github.com/lavhuyaar",
    },
  ]);

  const [educationData, setEducationData] = useState([
    {
      institution: "Boston University, Boston",
      degree: "B. Tech (Computer Science)",
      dateOfStudyStart: "06/2017",
      dateOfStudyEnd: "06/2021",
    },
  ]);

  const [workData, setWorkData] = useState([
    {
      company: "Google Inc, Geneva",
      role: "Senior Fullstack Developer",
      durationStart: "07/2021",
      durationEnd: "08/2024",
    },
  ]);

  const [skillsData, setSkillsData] = useState([
    "HTML5",
    "CSS3",
    "Javascript",
    "React.js",
  ]);

  const [visible, setVisible] = useState(0);

  return (
    <main>
      <button
        type="button"
        className="edit-btn"
        onClick={() => (visible === 0 ? setVisible(1) : setVisible(0))}
      >
        {visible ? "Confirm" : "Edit resume"}
      </button>
      <Form
        personalData={personalData}
        setPersonalData={setPersonalData}
        educationData={educationData}
        setEducationData={setEducationData}
        workData={workData}
        setWorkData={setWorkData}
        skillsData={skillsData}
        setSkillsData={setSkillsData}
        visible={visible}
      />

      <Resume
        personalData={personalData}
        workData={workData}
        educationData={educationData}
        skillsData={skillsData}
        visible={visible}
      />
    </main>
  );
}
