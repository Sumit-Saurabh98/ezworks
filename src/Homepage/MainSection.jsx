import React, { useState } from "react";
import SmallBox from "../components/SmallBoxes";
import { data } from "../utils/data";

function MainSection() {
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState(null);
  const [formMessage, setFormMessage] = useState(""); 

  const handleSubmit = async (event) => {
  event.preventDefault();

  // Reset form error and message
  if (!email) {
      setFormError("Email is required");
      return;
    } else if (!validateEmail(email)) {
      setFormError("Invalid email format");
      return;
    } 

    // Reset form error and message
    setFormError(null);
    setFormMessage("");

    try {
    const response = await fetch("http://3.228.97.110:9000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    console.log(response.status)
     const res = await response.json()
     console.log(res)

    if (response.status === 200) {
      
      setFormMessage(res.message);
    } else {
      setFormError(res.detail);
    }
  } catch (error) {
    setFormError("API Error");
  }
  
};

// Helper function to validate email format
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  return (
    <div className="main-container">
      {/* Left Section */}
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
            <input
              type="text"
              placeholder="Enter something"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {formError && <p className="error">{formError}</p>}
            {formMessage && <p className="success">{formMessage}</p>}
            <button>Submit</button>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        {data.map((item, index) => {
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
