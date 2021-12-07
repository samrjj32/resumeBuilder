import React from "react";
import { useSelector } from "react-redux";

function ViewResume() {
  const serverData = useSelector((state) => state.resume);

  let skills =
    Object.keys(serverData).length !== 0
      ? serverData.skillsFields.split(",")
      : [];
  console.log(skills);
  return (
    <>
      <div class="container">
        <div class="card-deck mb-3 text-center">
          <div class="card bg-lite mb-4 box-shadow">
            {/* personal info */}
            <div class="mb-3 mt-4 row ">
              <div class="d-flex align-items-center resume-section-one">
                <div class="col-sm-4 col-form-label ">
                  <img
                    src={serverData.dp}
                    alt="Girl in a jacket"
                    width="100"
                    height="100"
                  />
                </div>
                <div class="col-sm-8 ">
                  <div class="d-flex  justify-content-between">
                    <div className="name d-flex align-items-center name">
                      <div>{serverData.PersonalInfoFields.name}</div>
                    </div>
                    <div className="info">
                      <li>{serverData.PersonalInfoFields.email}</li>
                      <li>{serverData.PersonalInfoFields.phonenumber}</li>
                      <li>{serverData.PersonalInfoFields.address}</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* education */}
            <div class="mb-3 mt-4 row ">
              <div class="d-flex resume-section-two">
                <div class="col-sm-4  ">
                  <div>Education</div>
                </div>

                <div class="col-sm-8 ">
                  {serverData.EducationalFields.map((item, i) => (
                    <ul class="mb-3 ">
                      <li>
                        <span class="d-flex justify-content-between">
                          <span> {item.Institution} </span>{" "}
                          <span className="duration"> {item.year}</span>
                        </span>
                      </li>
                      <div className="content">
                        {item.Course}, {item.StudyProgram}
                      </div>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
            {/* experiance */}
            <div class="mb-3 mt-4 row ">
              <div class="d-flex  resume-section-two">
                <div class="col-sm-4  ">
                  <div>Experiance</div>
                </div>

                <div class="col-sm-8 ">
                  {serverData.QualificationFields.map((item, i) => (
                    <ul class="mb-3">
                      <li>
                        <span class="d-flex justify-content-between">
                          <span>{item.Company} </span>{" "}
                          <span className="duration"> {item.year} </span>
                        </span>
                      </li>
                      <div className="content">{item.Desigination}</div>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
            {/* skills */}
            <div class="mb-3 mt-4 row ">
              <div class="d-flex  resume-section-two">
                <div class="col-sm-4  ">
                  <div>Skills</div>
                </div>
                <div class="col-sm-8 ">
                  <ul class="mb-3">
                    <li className="skillslist">
                      <span class="d-flex justify-content-between">
                        {skills.map((item, i) => (
                          <span className="skillsItem"> {item} </span>
                        ))}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewResume;
