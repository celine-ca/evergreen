import "./EmailForm.scss";
import { useState } from "react";

export default function EmailForm({ onAnalyze }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnalyze(email);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  return (
    <>
      <div className="ai-help__form">
        <h3>Imagine you're speaking to a colleague.</h3>

        <form className="email-form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="email-form__label">
            Now, enter details about your email. Include the receipient, purpose
            of the email, and goal.
            <br />
            For example, "Write an email to send to a sales prospect in
            trucking, based in Toronto, to book a discovery call."
          </label>
          <textarea
            className="email-form__textarea"
            id="email"
            required
            placeholder="Enter your email receipient, purpose of the email, and goal..."
            onChange={handleChangeEmail}
          />

          <button type="submit" className="email-form__button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
