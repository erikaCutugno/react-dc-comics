export default function Hero({ image, type }) {
  return (
    <section>
      <div className={type}>
        <img src={image} alt="comics" />
      </div>
    </section>
  );
}
