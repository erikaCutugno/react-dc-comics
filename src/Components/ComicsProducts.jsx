import ComicsCard from "./ComicsCard";
import comics from "../data/comics";
import Buttons from "./Buttons";

export default function ComicsProducts() {
  return (
    <section className="main-products">
      <div className="container">
        <Buttons type="btn-primary btn-up" title="current series"></Buttons>
        <div className="row-comics">
          {comics.map((comic) => {
            return (
              <div className="col-comics">
                <ComicsCard
                  image={comic.thumb}
                  title={comic.series}
                ></ComicsCard>
              </div>
            );
          })}
        </div>
        <div className="btn-load">
          <Buttons type="btn-primary btn-down" title="load more"></Buttons>
        </div>
      </div>
    </section>
  );
}
