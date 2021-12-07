import React, { useEffect, useRef, useState, useContext } from "react";

function PersonalSection(props) {
  const focusPoint = useRef(null);
  // console.log(QualificationFields, "ppo");

  useEffect(() => {
    console.log(focusPoint.current);
    focusPoint.current.focus();
  }, []);

  let PersonalInputs = props.PersonalDetailsQuestionsArray.map((item, i) => {
    return (
      <div class="mb-3 row justify-content-md-center">
        <div class="col-sm-4 col-form-label">{item.question}</div>
        <div class="col-sm-5">
          <item.InputField
            type={item.InputField}
            name={item.resumeFieldId}
            onChange={props.handleChangePersonalInfo}
            class="form-control"
            id="exampleFormControlInput1"
            placeholder={item.resumeFieldId}
            ref={item.resumeFieldId == "name" ? focusPoint : null}
          />
        </div>
      </div>
    );
  });

  let EducationInputs = props.EducationalFields.map((item, i) => {
    return (
      <>
        <div class="mb-3 row">
          <div class="col-sm-6 col-form-label">{"StudyProgram"}</div>
          <div class="col-sm-6">
            <input
              class="form-control"
              id="exampleFormControlInput1"
              placeholder={"StudyProgram"}
              name={"StudyProgram"}
              value={item.StudyProgram}
              onChange={(e) => props.handleChangeEducationInput(e, i)}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <div class="col-sm-6 col-form-label">{"Institution"}</div>
          <div class="col-sm-6">
            <input
              class="form-control"
              id="exampleFormControlInput1"
              placeholder={"Institution"}
              name={"Institution"}
              value={item.Institution}
              onChange={(e) => props.handleChangeEducationInput(e, i)}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <div class="col-sm-6 col-form-label">{"Year"}</div>
          <div class="col-sm-6">
            <input
              class="form-control"
              id="exampleFormControlInput1"
              placeholder={"Year"}
              name={"Year"}
              value={item.Year}
              onChange={(e) => props.handleChangeEducationInput(e, i)}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <div class="col-sm-6 col-form-label">{"Course"}</div>
          <div class="col-sm-6">
            <input
              class="form-control"
              id="exampleFormControlInput1"
              placeholder={"Course"}
              value={item.Course}
              name={"Course"}
              onChange={(e) => props.handleChangeEducationInput(e, i)}
            />
          </div>
        </div>
        <div class="d-flex justify-content-end">
          {i != 0 ? (
            <div class=" d-flex justify-content-end mr-3">
              <span onClick={() => props.removeEducationalFields(i)}>
                <i
                  class="bi bi-dash-circle-dotted"
                  style={{ fontSize: "2rem" }}
                ></i>
              </span>
            </div>
          ) : (
            ""
          )}

          <div class=" d-flex justify-content-end">
            <span onClick={props.addEducationalFields}>
              <i
                class="bi bi-plus-circle-dotted "
                style={{ fontSize: "2rem" }}
              ></i>
            </span>
          </div>
        </div>
      </>
    );
  });

  let ExperianceInputs = props.QualificationFields.map((item, i) => {
    return (
      <>
        <div class="mb-3 row">
          <div class="col-sm-6 col-form-label">{"Desigination"}</div>
          <div class="col-sm-6">
            <input
              class="form-control"
              id="exampleFormControlInput1"
              placeholder={"Desigination"}
              name={"Desigination"}
              value={item.Desigination}
              onChange={(e) => props.handleChangeQualificationInput(e, i)}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <div class="col-sm-6 col-form-label">{"Company"}</div>
          <div class="col-sm-6">
            <input
              class="form-control"
              id="exampleFormControlInput1"
              placeholder={"Company"}
              name={"Company"}
              value={item.Company}
              onChange={(e) => props.handleChangeQualificationInput(e, i)}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <div class="col-sm-6 col-form-label">{"Year"}</div>
          <div class="col-sm-6">
            <input
              class="form-control"
              id="exampleFormControlInput1"
              placeholder={"Year"}
              name={"Year"}
              value={item.Year}
              onChange={(e) => props.handleChangeQualificationInput(e, i)}
            />
          </div>
        </div>

        <div class="d-flex justify-content-end">
          {i != 0 ? (
            <div class=" d-flex justify-content-end mr-3">
              <span onClick={() => props.removeQualificationFields(i)}>
                <i
                  class="bi bi-dash-circle-dotted"
                  style={{ fontSize: "2rem" }}
                ></i>
              </span>
            </div>
          ) : (
            ""
          )}

          <div class=" d-flex justify-content-end">
            <span onClick={props.addQualificationFields}>
              <i
                class="bi bi-plus-circle-dotted "
                style={{ fontSize: "2rem" }}
              ></i>
            </span>
          </div>
        </div>
      </>
    );
  });

  return (
    <div>
      <p class="fs-5 mt-5 text-muted">personal information</p>
      <div class="card-body">
        <div class="container">
          <div class="row ">{PersonalInputs}</div>
          <div class="" style={{ marginLeft: "13em" }}>
            <input
              type="file"
              id="myFile"
              name="filename"
              onChange={(e) => props.readFile(e)}
            />
          </div>
        </div>
      </div>
      <p class="fs-5 mt-5 text-muted">Education & Experiance</p>
      <div class="card-body">
        <div class="container">
          <div class="row ">
            <div class="col-6 ">
              <div class="row ">{EducationInputs}</div>
            </div>
            <div class="col-6 ">{ExperianceInputs}</div>
          </div>
        </div>
      </div>
      <p class="fs-5 mt-5 text-muted">Skills</p>
      <div class="mb-3 row justify-content-md-center">
        <div class="col-sm-4 col-form-label">add skills</div>
        <div class="col-sm-5">
          <input
            class="form-control"
            id="exampleFormControlInput1"
            placeholder={"seperate by commas"}
            name={"skills"}
            onChange={(e) => props.handleChangeSkillsInput(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalSection;
