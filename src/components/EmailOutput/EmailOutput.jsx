import "./EmailOutput.scss";

export default function EmailOutput({ analysis }) {
  return (
    <>
      <section className="result">
        <div className="result__container">
          {analysis ? (
            <div className="result__text">
              <h2 className="result__title">Your Email:</h2>
              <pre>{analysis}</pre>
            </div>
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  );
}
