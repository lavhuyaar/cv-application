/* eslint-disable react/prop-types */
import { PersonalInput } from "./PersonalInput";
import { EducationInput } from "./EducationInput";
import { WorkExperienceInput } from "./WorkExperienceInput";
import { SkillsInput } from "./SkillsInput";

export function Form({
  personalData,
  educationData,
  workData,
  skillsData,
  setPersonalData,
  setEducationData,
  setWorkData,
  setSkillsData,
  visible
}) {
  return (
    <div className={visible === 0 ? "hide" : "form-container"}>
      <form>
        <PersonalInput
          personalData={personalData}
          setPersonalData={setPersonalData}
        />
        <EducationInput
          educationData={educationData}
          setEducationData={setEducationData}
        />
        <WorkExperienceInput workData={workData} setWorkData={setWorkData} />
        <SkillsInput skillsData={skillsData} setSkillsData={setSkillsData} />
      </form>
    </div>
  );
}
