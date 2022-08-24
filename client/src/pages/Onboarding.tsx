import "../stylesheets/Onboarding.sass";
import Nav from "../components/Nav";
import { useState } from "react";

const Onboarding: React.FC = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    first_name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    show_gender: false,
    gender: "man",
    gender_interest: "woman",
    email: "",
    url: "",
    about: "",
    matches: [],
  });

  const handleFormSubmit = () => {
    console.log("submitted");
  };
  const handleInputsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    console.log(name, value);

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  console.log(formData);
  return (
    <>
      <Nav
        minimal={true}
        showModal={false}
        setShowModal={() => {}}
        setIsSignUp={() => {}}
      />
      <div className="onboarding">
        <h2>Create account</h2>
        <form onSubmit={handleFormSubmit}>
          <section>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="First name"
              required={true}
              value={formData.first_name}
              onChange={(e) => handleInputsChange(e)}
            />

            <label>Birthday</label>
            <div className="multiple-input-container">
              <input
                type="number"
                id="dob_day"
                name="dob_day"
                placeholder="DD"
                required={true}
                value={formData.dob_day}
                onChange={(e) => handleInputsChange(e)}
              />

              <input
                type="number"
                id="dob_month"
                name="dob_month"
                placeholder="MM"
                required={true}
                value={formData.dob_month}
                onChange={(e) => handleInputsChange(e)}
              />
              <input
                type="number"
                id="dob_year"
                name="dob_year"
                placeholder="YYYY"
                required={true}
                value={formData.dob_year}
                onChange={(e) => handleInputsChange(e)}
              />
            </div>

            <label>Gender</label>
            <div className="multiple-input-container">
              <input
                type="radio"
                id="man-gender-identity"
                name="gender"
                value="man"
                onChange={(e) => handleInputsChange(e)}
                checked={formData.gender === "man"}
              />
              <label htmlFor="man-gender-identity">Man</label>
              <input
                type="radio"
                id="woman-gender-identity"
                name="gender"
                value="woman"
                onChange={(e) => handleInputsChange(e)}
                checked={formData.gender === "woman"}
              />
              <label htmlFor="woman-gender-identity">Woman</label>

              <input
                type="radio"
                id="more-gender-identity"
                name="gender"
                value="more"
                onChange={(e) => handleInputsChange(e)}
                checked={formData.gender === "more"}
              />
              <label htmlFor="more-gender-identity">More</label>
            </div>
            <label htmlFor="show-gender">Show gender on my profile</label>
            <input
              type="checkbox"
              id="show-gender"
              name="show_gender"
              onChange={(e) => handleInputsChange(e)}
              checked={formData.show_gender}
            />
            <label>Show me</label>
            <div className="multiple-input-container">
              <input
                type="radio"
                id="man-gender-interest"
                name="gender_interest"
                value="man"
                onChange={(e) => handleInputsChange(e)}
                checked={formData.gender_interest === "man"}
              />
              <label htmlFor="man-gender-interest">Man</label>
              <input
                type="radio"
                id="woman-gender-interest"
                name="gender_interest"
                value="woman"
                onChange={(e) => handleInputsChange(e)}
                checked={formData.gender_interest === "woman"}
              />
              <label htmlFor="woman-gender-interest">Woman</label>
              <input
                type="radio"
                id="everyone-gender-interest"
                name="gender_interest"
                value="everyone"
                onChange={(e) => handleInputsChange(e)}
                checked={formData.gender_interest === "everyone"}
              />
              <label htmlFor="everyone-gender-interest">Everyone</label>
            </div>
            <label htmlFor="about">About me</label>
            <input
              type="text"
              id="about"
              name="about"
              required={true}
              placeholder="I like long walks."
              value={formData.about}
              onChange={(e) => handleInputsChange(e)}
            />
            <input type="submit" />
          </section>
          <section>
            <label>Profile photo</label>
            <input
              type="url"
              name="url"
              id="url"
              onChange={(e) => handleInputsChange(e)}
              required={true}
            />
            <div className="photo-container">
              <img src={formData.url} alt="profile pic preview" />
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default Onboarding;
