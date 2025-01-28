export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="card">
            <img
              src="./img/buy-comics-digital-comics.png"
              alt="Digital comics"
            />
            <h3>digital comics</h3>
          </div>
          <div className="card">
            <img src="./img/buy-comics-merchandise.png" alt="Dc merchandise" />
            <h3>Dc merchandise</h3>
          </div>
          <div className="card">
            <img src="./img/buy-comics-subscriptions.png" alt="subscriptions" />
            <h3>subscriptions</h3>
          </div>
          <div className="card">
            <img
              src="./img/buy-comics-shop-locator.png"
              alt="comic shop locator"
            />
            <h3>comic shop locator</h3>
          </div>
          <div className="card">
            <img src="./img/buy-dc-power-visa.svg" alt="Dc power visa" />
            <h3 className="power">dc power visa</h3>
          </div>
        </div>
      </div>
      <div className="footer-center">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Dc comics</h3>
              <nav className="footer-nav">
                <ul>
                  <li>
                    <a href="#">characters</a>
                  </li>
                  <li>
                    <a href="#">comics</a>
                  </li>
                  <li>
                    <a href="#">movies</a>
                  </li>
                  <li>
                    <a href="#">tv</a>
                  </li>
                  <li>
                    <a href="#">games</a>
                  </li>
                  <li>
                    <a href="#">videos</a>
                  </li>
                  <li>
                    <a href="#">news</a>
                  </li>
                </ul>
              </nav>
              <h3>shop</h3>
              <nav className="footer-nav">
                <ul>
                  <li>
                    <a href="#">Shop DC</a>
                  </li>
                  <li>
                    <a href="#">Shop DC Collectibles</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col">
              <h3>Dc</h3>
              <nav className="footer-nav">
                <ul>
                  <li>
                    <a href="#">terms of use</a>
                  </li>
                  <li>
                    <a href="#">privacy policy (new)</a>
                  </li>
                  <li>
                    <a href="#">ad choices</a>
                  </li>
                  <li>
                    <a href="#">advertising</a>
                  </li>
                  <li>
                    <a href="#">jobs</a>
                  </li>
                  <li>
                    <a href="#">subscriptions</a>
                  </li>
                  <li>
                    <a href="#">talent workshops</a>
                  </li>
                  <li>
                    <a href="#">CPSC certificates</a>
                  </li>
                  <li>
                    <a href="#">ratings</a>
                  </li>
                  <li>
                    <a href="#">shop help</a>
                  </li>
                  <li>
                    <a href="#">contact us</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col">
              <h3>sites</h3>
              <nav className="footer-nav">
                <ul>
                  <li>
                    <a href="#">DC</a>
                  </li>{" "}
                  <li>
                    <a href="#">MAD magazine</a>
                  </li>{" "}
                  <li>
                    <a href="#">DC kids</a>
                  </li>{" "}
                  <li>
                    <a href="#">DC universe</a>
                  </li>{" "}
                  <li>
                    <a href="#">DC power visa</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="logo-big"></div>
        </div>
      </div>
      <div className="footer-bottom"></div>
    </footer>
  );
}
