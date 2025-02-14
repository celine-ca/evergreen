import React from "react";
import "./AiHelp.scss";
import { useState, useEffect } from "react";
import EmailForm from "../EmailForm/EmailForm";
import EmailOutput from "../EmailOutput/EmailOutput";
import { API_URL } from "../../utils.js";
import axios from "axios";

const AiHelp = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [email, setEmail] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);

  const handleFeatureClick = (feature) => {
    setSelectedFeature((prevFeature) =>
      prevFeature === feature ? null : feature
    );
  };

  console.log(API_URL);

  useEffect(() => {
    if (!formSubmit) return;
    const fetchData = async () => {
      const prompt = `Please write a business email and include the provided details below like the recipient, purpose, and key points. In the response, only provide the business email draft.
              Here are the details: ${email}`;

      const data = {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      };

      try {
        const response = await axios.post(`${API_URL}`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const geminiResults = response.data.candidates[0].content.parts[0].text;
        setAnalysis(geminiResults);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [formSubmit, email]);

  const handleAnalyze = (newEmail) => {
    setEmail(newEmail);
    setFormSubmit(true);
  };

  return (
    <div className="ai-help">
      {/* Hero Section */}
      <div className="ai-help__hero">
        <h1 className="ai-help__title">AI is here to help, not replace!</h1>
        <p className="ai-help__subtitle">
          Discover how AI can make your work easier, faster, and stress-free.
        </p>
        <a
          href="https://www.microsoft.com/en/customers/story/19584-dla-piper-microsoft-365-copilot"
          className="ai-help__button"
        >
          Click to see how AI saved professionals 36+ hours a week
        </a>
      </div>

      {/* Features Section */}
      <div className="ai-help__features">
        <div
          className="ai-help__feature ai-help__feature--email"
          onClick={() => handleFeatureClick("email")}
        >
          ✉️ Write an Email
        </div>
        <div
          className="ai-help__feature ai-help__feature--slides"
          onClick={() => handleFeatureClick("slides")}
        >
          📊 Convert to Slides
        </div>
        <div
          className="ai-help__feature ai-help__feature--document"
          onClick={() => handleFeatureClick("document")}
        >
          📄 Summarize a Document
        </div>
      </div>

      {selectedFeature === "email" && (
        <>
          <EmailForm onAnalyze={handleAnalyze} />
          <EmailOutput analysis={analysis} />
        </>
      )}
      {/* {selectedFeature === "slides" && (
        <div className="ai-help__form">
          <h3>Convert to Slides</h3>
          <input type="text" placeholder="Enter text to convert" />
        </div>
      )}

      {selectedFeature === "document" && (
        <div className="ai-help__form">
          <h3>Summarize a Document</h3>
          <input type="file" />
        </div>
      )} */}
    </div>
  );
};

export default AiHelp;
