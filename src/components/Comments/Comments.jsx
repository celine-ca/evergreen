import "./Comments.scss";

export default function Comments() {
    const comments = [
        {
            context: "Before rolling out Copilot, confirming data security and confidentiality were priorities.",
            quote: "We first ensured our data governance was solid.",
            author: "Karen Christensen, Deputy Chief Information Officer, DLA Piper",
        },
        {
            context:
                "A standout use case involved extracting insights from spreadsheets and data-heavy documents, with Copilot helping the analytics team to provide faster, more accurate reports for internal use.",
            quote: "Copilot streamlines the process, so they can quickly pull key data and insights.",
            author: "Bill Barrett, Sr. Director, Digital Strategy and Brand, DLA Piper",
        },
        {
            context:
                "Tools like encryption, ethical wall software (an information barrier used to protect client security), and Microsoft Purview Data Governance helped protect sensitive information.",
            quote: "That foundational work allowed us to confidently roll out Copilot to the wider firm.",
            author: "Karen Christensen, Deputy Chief Information Officer, DLA Piper",
        },
        {
            context:
                "DLA Piper plans to extend its use of Copilot to larger document repositories. By combining it with knowledge management tools and third-party applications, the firm hopes to further streamline workflows, from faster proposal generation to improved knowledge retrieval.",
            quote: "Some of our early experiments showed Copilot could save up to 36 hours per week in content generation and data analysis.",
            author: "Andrew Gastwirth, Chief Innovation Officer, DLA Piper",
        },
        {
            context: "Before rolling out Copilot, confirming data security and confidentiality were priorities.",
            quote: "We first ensured our data governance was solid.",
            author: "Karen Christensen, Deputy Chief Information Officer, DLA Piper",
        },
    ];

    return (
        <section className="comments">
            <h2 className="comments__title">What DLA Piper workers are saying.</h2>
            <div className="comments__container">
                <ul className="comments__list">
                    {comments.map((comment, index) => (
                        <li key={index} className="comments__item">
                            <div className="comments__context">{comment.context}</div>
                            <p className="comments__quote">"{comment.quote}"</p>
                            <div className="comments__author">{comment.author}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}