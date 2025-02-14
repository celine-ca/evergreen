import React from "react";
import "./ToggleSections.scss";

export default function ToggleSections() {

    return (
        <div className="button-group">
            <button className="button work" onClick={() => handleClick("For Work")}>
                For Work
            </button>
            <button className="button personal" onClick={() => handleClick("For Personal Use")}>
                For Personal Use
            </button>
            <button className="button organization" onClick={() => handleClick("For Organizations")}>
                For Organizations
            </button>
        </div>
    );
}