import headerLinks from "../data/headerLinks";

export default function Header() {
  return (
    <header className="container">
      <img src="./img/dc-logo.png" alt="Logo" />
      <nav className="header-nav">
        <ul>
          {headerLinks.map((link) => {
            return (
              <li key={link.id} className={link.current && "active"}>
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
