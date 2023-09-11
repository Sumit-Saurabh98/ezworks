import React, { useState } from "react";
import SmallBox from "../components/SmallBoxes";
import { myData } from "../utils/myData";
import { emailRegex } from "../utils/regex";
import { submitEmail } from "../config/api";

function MainSection() {
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState(null);
  const [formMessage, setFormMessage] = useState("");
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    setLoading(true)
    event.preventDefault();

    if (!email) {
      setFormError("Email is required");
      setLoading(false)
      return;
    }

    if (!emailRegex.test(email)) {
      setFormError("Invalid email address");
      setLoading(false)
      return;
    }

    setFormError(null);
    setFormMessage(null);

    const result = await submitEmail(email);

    if (result.success) {
      setFormMessage(result.message);
      setLoading(false)
    } else {
      setFormError(result.error);
      setLoading(false)
    }
  };

  return (
    <div className="main-container">
      <div className="left-section">
        <div className="main-logo-container">
          <img
            className="main-logo"
            src="https://www.ez.works/ez_works.webp"
            alt="ez logo"
          />
        </div>
        <h2 className="left-container-h2">
          Suite of Business Support Services
        </h2>
        <p className="left-container-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit... Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Harum quis iure quam ex
          repellendus repellat asperiores accusamus eius nostrum totam?
        </p>
        <div className="input-container">
          <form onSubmit={handleSubmit}>
            {formError && <p  className="error">{formError}</p>}
            {formMessage && <p  className="success">{formMessage}</p>}
            <input
              type="text"
              placeholder="Enter something"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button>{loading ? "Submitting..." : "Contact Me"}</button>
          </form>
        </div>
      </div>

      <div className="right-section">
        {myData.map((item, index) => {
          return (
            <div key={index} className="right-section-second">
              <SmallBox icon={item.icon} title={item.title} text={item.text} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainSection;
