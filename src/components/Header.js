export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Armaggedon V</h1>
      <p className="header__subtitle">Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</p>
      <ul className="header__lists">
        <li>
          <a href="/" className="header__link header__link_active">Астероиды</a>
        </li>
        <li>
          <a href="/" className="header__link">Уничтожение</a>
        </li>
      </ul>
    </header>
  );
}