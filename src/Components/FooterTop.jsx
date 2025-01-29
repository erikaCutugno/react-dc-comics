import footerCard from "../data/footerCard";

export default function FooterTop() {
  return (
    <div className="footer-top">
      <div className="container">
        {footerCard.map((card) => {
          return (
            <div className="card" key={card.id}>
              <img src={card.src} alt={card.title} />
              <h3>{card.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
