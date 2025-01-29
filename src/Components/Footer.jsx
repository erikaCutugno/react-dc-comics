import footerColSx from "../data/footerColSx";
import footerColRx from "../data/footerColRx";

export default function Footer() {
  return (
    <footer>
      <div className="footer-center">
        <div className="container logo-big">
          <div className="row">
            <div className="col">
              {footerColSx.map((footerRowSx) => {
                return (
                  <div key={footerRowSx.id}>
                    <h3>{footerRowSx.title}</h3>
                    <nav className="footer-nav">
                      <ul>
                        {footerRowSx.links.map((link) => {
                          return (
                            <li key={link.id}>
                              <a href={link.url}>{link.text}</a>
                            </li>
                          );
                        })}
                      </ul>
                    </nav>
                  </div>
                );
              })}
            </div>
            {footerColRx.map((footerRowRx) => {
              return (
                <div className="col" key={footerRowRx.id}>
                  <h3>{footerRowRx.title}</h3>
                  <nav className="footer-nav">
                    <ul>
                      {footerRowRx.links.map((link) => {
                        return (
                          <li key={link.id}>
                            <a href={link.url}>{link.text}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <button className="btn">sign-up now!</button>
          <div className="social">
            <h4>Follow us</h4>
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="#">
                    <img src="./img/footer-facebook.png" alt="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./img/footer-twitter.png" alt="twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./img/footer-youtube.png" alt="youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./img/footer-pinterest.png" alt="pinterest" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./img/footer-periscope.png" alt="periscope" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
