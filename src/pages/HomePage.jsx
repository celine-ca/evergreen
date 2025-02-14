import Header from "../components/Header/Header";
import HeroImage from "../assets/images/hero.png";
import Articleone from "../assets/images/Article-1.png";
import Articletwo from "../assets/images/Article-2.png";
import Articlethree from "../assets/images/Article-3.png";
import "../pages/HomePage.scss";

function HomePage() {
  const articles = [
    {
      title:
        "A small consultancy firm in Puerto Rico adopts AI — helping other businesses thrive",
      author: "Juan Montes",
      image: Articleone,
      link: "https://news.microsoft.com/source/latam/features/ai/puerto-rico-ai-transformation/?lang=en",
    },
    {
      title: "From bottlenecks to breakthroughs: Obeikan’s AI‑powered journey",
      author: "Chris Welsch",
      image: Articletwo,
      link: "https://news.microsoft.com/source/emea/features/from-bottlenecks-to-breakthroughs-obeikans-ai-powered-journey/",
    },
    {
      title:
        "Making it easier for companies to build and ship AI people can trust",
      author: "Vanessa Ho",
      image: Articlethree,
      link: "https://news.microsoft.com/source/features/ai/making-it-easier-for-companies-to-build-and-ship-ai-people-can-trust/",
    },
  ];
  return (
    <>
      <Header />
      <main className="homepage">
        {/* Purpose Section */}
        <section className="homepage__purpose">
          <h2 className="homepage__purpose-title">Purpose</h2>
          <p className="homepage__purpose-text">
            Empower businesses and individuals to confidently adopt AI through
            interactive learning, and peer engagement.
          </p>
        </section>

        {/* Copilot Section with Image */}
        <section className="homepage__copilot">
          <div className="homepage__copilot-card">
            <div className="homepage__copilot-image">
              <img
                className="homepage__copilot-image--rounded"
                src={HeroImage}
                alt="Copilot"
              />
            </div>
            <div className="homepage__copilot-content">
              <h3 className="homepage__copilot-title">
                DLA Piper’s journey with Microsoft 365 Copilot is a blueprint
                for legal innovation
              </h3>
            </div>
          </div>
        </section>
        {/* Articles Section */}
        <section className="homepage__articles">
          <h3 className="homepage__articles-title">Articles</h3>
          <div className="homepage__articles-grid">
            {articles.map((article, index) => (
              <a
                key={index}
                href={article.link}
                className="homepage__article"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="homepage__article-image">
                  <img src={article.image} alt={article.title} />
                </div>
                <div className="homepage__article-content">
                  {article.category && (
                    <p className="homepage__article-category">
                      {article.category}
                    </p>
                  )}
                  <h4 className="homepage__article-title">{article.title}</h4>
                  {article.author && (
                    <p className="homepage__article-author">{article.author}</p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
