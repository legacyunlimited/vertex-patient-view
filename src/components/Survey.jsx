import React, { useState } from "react";

import PatientForm from "./PatientForm";
import Question from "./Question";

import allQuestions from "../data/questions";

const Survey = () => {
  const [responses, setResponses] = useState([
    {
      questionId: 1,
      response: "",
    },
    {
      questionId: 2,
      response: "",
    },
    {
      questionId: 3,
      response: "",
    },
    {
      questionId: 4,
      response: "",
    },
    {
      questionId: 5,
      response: "",
    },
    {
      questionId: 6,
      response: "",
    },
    {
      questionId: 7,
      response: "",
    },
    {
      questionId: 8,
      response: "",
    },
    {
      questionId: 9,
      response: "",
    },
    {
      questionId: 10,
      response: "",
    },
    {
      questionId: 11,
      response: "",
    },
    {
      questionId: 12,
      response: "",
    },
    {
      questionId: 13,
      response: "",
    },
    {
      questionId: 14,
      response: "",
    },
    {
      questionId: 15,
      response: "",
    },
    {
      questionId: 16,
      response: "",
    },
    {
      questionId: 17,
      response: "",
    },
    {
      questionId: 18,
      response: "",
    },
    {
      questionId: 19,
      response: "",
    },
    {
      questionId: 20,
      response: "",
    },
    {
      questionId: 21,
      response: "",
    },
    {
      questionId: 22,
      response: "",
    },
    {
      questionId: 23,
      response: "",
    },
    {
      questionId: 24,
      response: "",
    },
    {
      questionId: 25,
      response: "",
    },
    {
      questionId: 26,
      response: "",
    },
    {
      questionId: 27,
      response: "",
    },
    {
      questionId: 28,
      response: "",
    },
    {
      questionId: 29,
      response: "",
    },
  ]);
  const handleUserResponse = (questionId, response) => {
    const prevRes = responses;
    prevRes.map((res) => {
      if (res.questionId === +questionId) {
        res.response = response;
      }
      return res;
    });

    setResponses((prev) => [...prevRes]);
  };
  return (
    <>
      <h2>Patient Form</h2>
      <div>
        <PatientForm responses={responses} />
      </div>

      <div>
        <h3>All Questions</h3>
        {allQuestions.map((question) => (
          <Question question={question} onUserResponse={handleUserResponse} />
        ))}
      </div>

      {/* Depression (after adding 18a and 18b together, 3 or more: high risk) */}
      {/* Intro: Over the last 2 weeks, how often have you been bothered by
                                  the following problems? */}

      {/* <div id="Depression" class="mb-5">
        <h4 class="mb-3">Depression</h4>
        <h6 class="lead fst-italic">
          Intro: Over the last 2 weeks, how often have you been bothered by the
          following problems?
        </h6>
        <br />
        <div class="mb-4">
          <label class="form-label">
            18a. Little interest or pleasure in doing things?
          </label>
          <br />
          <div class="form-check form-check-reverse form-check-inline">
            <input
              class="form-check-input"
              id="inlineRadioDefault1"
              name="question18"
              type="radio"
              value="Not at all"
            />
            <label class="form-check-label" for="inlineRadioDefault1">
              Not at all
            </label>
          </div>
          <div class="form-check form-check-reverse form-check-inline">
            <input
              class="form-check-input"
              id="inlineRadioDefault2"
              name="question18"
              type="radio"
              value="Several days"
            />
            <label class="form-check-label" for="inlineRadioDefault2">
              Several days
            </label>
          </div>
          <div class="form-check form-check-reverse form-check-inline">
            <input
              class="form-check-input"
              id="inlineRadioDefault3"
              name="question18"
              type="radio"
              value="More than half the days"
            />
            <label class="form-check-label" for="inlineRadioDefault3">
              More than half the days
            </label>
          </div>
          <div class="form-check form-check-reverse form-check-inline">
            <input
              class="form-check-input"
              id="inlineRadioDefault4"
              name="question18"
              type="radio"
              value="Nearly every day"
            />
            <label class="form-check-label" for="inlineRadioDefault4">
              Nearly every day
            </label>
          </div>
        </div>
        <div class="mb-4">
          <label class="form-label">
            18b. Feeling down, depressed, or hopeless?
          </label>
          <br />
          <div class="form-check form-check-reverse form-check-inline">
            <input
              class="form-check-input"
              id="inlineRadioDefault1"
              name="question19"
              type="radio"
              value="Not at all"
            />
            <label class="form-check-label" for="inlineRadioDefault1">
              Not at all
            </label>
          </div>
          <div class="form-check form-check-reverse form-check-inline">
            <input
              class="form-check-input"
              id="inlineRadioDefault2"
              name="question19"
              type="radio"
              value="Several days"
            />
            <label class="form-check-label" for="inlineRadioDefault2">
              Several days
            </label>
          </div>
          <div class="form-check form-check-reverse form-check-inline">
            <input
              class="form-check-input"
              id="inlineRadioDefault3"
              name="question19"
              type="radio"
              value="More than half the days"
            />
            <label class="form-check-label" for="inlineRadioDefault3">
              More than half the days
            </label>
          </div>
          <div class="form-check form-check-reverse form-check-inline">
            <input
              class="form-check-input"
              id="inlineRadioDefault4"
              name="question19"
              type="radio"
              value="Nearly every day"
            />
            <label class="form-check-label" for="inlineRadioDefault4">
              Nearly every day
            </label>
          </div>
        </div>
      </div> */}
      {/* <hr class="hr" /> */}
      {/* Stress/Emotional Health (0-4; 2: medium risk, 3: high risk, 4: imminent risk) */}
    </>
  );
};

export default Survey;
