import "./EmailOutput.scss";

export default function EmailOutput({ analysis, loading }) {
  return (
    <>
      <section className="result">
        <div className="result__container">
          {loading ? (
            <div className="result__loading">Loading...</div>
          ) : analysis ? (
            <div className="result__text">
              <h2 className="result__title">Your Email:</h2>
              <pre>{analysis}</pre>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
