import React, { useState } from "react";

const PatientForm = ({ responses }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    birthDate: "",
    address: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // console.log(responses);

    let formDataVar = { ...formData };
    formDataVar.questionnaireResponses = responses;

    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:4000/patient/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataVar),
      });

      const data = await response.json();
      console.log(data);
      alert("Patient created successfully!");
    } catch (error) {
      console.error("Error:", error);
    }
    setIsLoading(false);
    clearForm();
  };
  const clearForm = () => {
    setFormData({
      name: "",
      age: "",
      gender: "",
      birthDate: "",
      address: "",
      questionnaireResponses: [],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Age"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
      />
      <input
        type="text"
        placeholder="Gender"
        value={formData.gender}
        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
      />
      <input
        type="date"
        placeholder="Date of Birth"
        value={formData.birthDate}
        onChange={(e) =>
          setFormData({ ...formData, birthDate: e.target.value })
        }
      />
      <button type="submit">{isLoading ? "Submitting..." : "Submit"}</button>
    </form>
  );
};

export default PatientForm;
