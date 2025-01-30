export default function ComicsCard({ image, title }) {
  return (
    <div>
      <div className="card-comics">
        <img src={image} alt={title} />
      </div>
      <h5>{title}</h5>
    </div>
  );
}
