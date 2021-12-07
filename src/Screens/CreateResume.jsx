import React, { useEffect, useState, useContext } from "react";
import Progress from "../Components/Progress";
import PersonalSection from "../Components/PersonalSection";
import PersonalDetailsQuestionsArray from "../Questions";
import { useDispatch, useSelector } from "react-redux";
import { getResume, saveResume } from "../Redux/actions/resume";
import { Link, useHistory, useLocation } from "react-router-dom";

function CreateResume() {
  const resData = useSelector((state) => state.resume);
  const [progress, setProgress] = useState(12);
  const [dp, setDp] = useState("");

  const [EducationalFields, SetEducationalFields] = useState([
    { StudyProgram: "", Institution: "", Year: "", Course: "" },
  ]);
  const [QualificationFields, SetQualificationFields] = useState([
    { Desigination: "", Company: "", Year: "" },
  ]);
  const [PersonalInfoFields, SetPersonalInfoFields] = useState({});
  const [skillsFields, SetSkillsFields] = useState();

  const [ResumeData, SetResumeData] = useState({});

  const dispatch = useDispatch();

  const handleChangeEducationInput = (e, i) => {
    const values = [...EducationalFields];
    values[i][e.target.name] = e.target.value;
    SetEducationalFields(values);
  };

  const addEducationalFields = () => {
    SetEducationalFields([
      ...EducationalFields,
      { StudyProgram: "", Institution: "", Year: "", course: "" },
    ]);
  };

  const removeEducationalFields = (index) => {
    const values = [...EducationalFields];
    values.splice(index, 1);
    SetEducationalFields(values);
  };

  const handleChangePersonalInfo = (e) => {
    const { name, value } = e.target;
    SetPersonalInfoFields({
      ...PersonalInfoFields,
      [name]: value,
    });
  };

  const handleChangeSkillsInput = (e) => {
    const { name, value } = e.target;
    SetSkillsFields(value);
  };

  const handleChangeQualificationInput = (e, i) => {
    const values = [...QualificationFields];
    values[i][e.target.name] = e.target.value;
    SetQualificationFields(values);
  };

  const addQualificationFields = () => {
    SetQualificationFields([
      ...QualificationFields,
      { Desigination: "", Company: "", Year: "" },
    ]);
  };

  const removeQualificationFields = (index) => {
    const values = [...QualificationFields];
    values.splice(index, 1);
    SetQualificationFields(values);
  };

  const readFile = (e) => {
    let url = URL.createObjectURL(e.target.files[0]);
    setDp(url);
  };

  const OnClickNext = (e) => {
    e.preventDefault();
    let resData = {
      QualificationFields,
      PersonalInfoFields,
      EducationalFields,
      skillsFields,
      dp,
    };
    if (skillsFields) {
      dispatch(saveResume(resData));
    } else {
      console.log("check inputs");
    }
  };

  console.log(resData.length, Object.keys(resData).length === 0, "heyy");

  return (
    <>
      <div class="container">
        <div class="card-deck mb-3 text-center">
          <div class="card mb-4 box-shadow">
            
            <PersonalSection
              handleChangeEducationInput={handleChangeEducationInput}
              addEducationalFields={addEducationalFields}
              removeEducationalFields={removeEducationalFields}
              handleChangePersonalInfo={handleChangePersonalInfo}
              handleChangeSkillsInput={handleChangeSkillsInput}
              handleChangeQualificationInput={handleChangeQualificationInput}
              addQualificationFields={addQualificationFields}
              removeQualificationFields={removeQualificationFields}
              PersonalDetailsQuestionsArray={PersonalDetailsQuestionsArray}
              EducationalFields={EducationalFields}
              QualificationFields={QualificationFields}
              PersonalInfoFields={PersonalInfoFields}
              readFile={readFile}
            />
            <div class="d-flex mb-4 justify-content-end">
              <div class="col-sm-2">
                <button
                  type="button"
                  class="btn  btn-primary"
                  onClick={OnClickNext}
                >
                  save
                </button>
              </div>
              {Object.keys(resData).length !== 0 ? (
                <div class="col-sm-2">
                  <Link
                    to={`/resume/data`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <button
                      type="button"
                      class="btn  btn-primary"
                      // onClick={OnClickNext}
                    >
                      review
                    </button>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateResume;
