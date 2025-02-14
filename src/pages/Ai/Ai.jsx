import React from "react";
import AiHelp from "../../components/AiHelp/AiHelp";
import Header from "../../components/Header/Header";
import Part5 from "../../components/Part5/Part5.jsx";
import Comments from "../../components/Comments/Comments";

const Ai = () => {
  return (
    <>
      <Header />
      <div className="ai-page">
        <AiHelp />
          <Part5 />

      </div>
        <Comments />
    </>
  );
};

export default Ai;
