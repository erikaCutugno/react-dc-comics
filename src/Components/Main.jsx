import Hero from "./Hero";
import ComicsProducts from "./ComicsProducts";
export default function Main() {
  return (
    <main>
      <Hero type="overflow" image="./img/jumbotron.jpg"></Hero>
      <ComicsProducts />
    </main>
  );
}
