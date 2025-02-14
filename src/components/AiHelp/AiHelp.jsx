import React from "react";
import "./AiHelp.scss";

const AiHelp = () => {
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
        <div className="ai-help__feature ai-help__feature--email">
          ✉️ Write an Email
        </div>
        <div className="ai-help__feature ai-help__feature--slides">
          📊 Convert to Slides
        </div>
        <div className="ai-help__feature ai-help__feature--document">
          📄 Summarize a Document
        </div>
      </div>
    </div>
  );
};

export default AiHelp;
