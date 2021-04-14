export default function Asteroid() {
  return (
    <header className="header">
      <h1 className="header__title">Armaggedon V</h1>
      <p className="header__subtitle">Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</p>
      <ul className="header__lists">
        <li>
          <NavLink exact to="/" className="link" activeClassName="link_active">Астероиды</NavLink>
        </li>
        <li>
          <NavLink to="/destruction" className="link" activeClassName="link_active">Уничтожение</NavLink>
        </li>
      </ul>
    </header>
  );
}