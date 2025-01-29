import footerColSx from "../data/footerColSx";
import footerColRx from "../data/footerColRx";
import iconsSocial from "../data/iconsSocial";

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
                {iconsSocial.map((icon) => {
                  return (
                    <li key={icon.id}>
                      <a href={icon.url}>
                        <img src={icon.src} alt={icon.alt} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
