import Card from "./Card";

export default function Home({data, toTheMoon, checkboxValue, destruction, handleChange, isActiveKm, isActiveMoon, setDestruction}) {

  return (
    <main className="content">
      <div className="content__filter">
        <label className="content__label">
          <input type="checkbox" className="content__checkbox" onChange={handleChange}/>
          Показать только опасные
        </label>
        <ul className="content__lists">
          <span>Расстояние&ensp;</span>
          <li>
            <span className={`link${!toTheMoon ? ' link_active' : ''}`} onClick={isActiveKm}>в километрах</span>
          </li>
          <span>,&ensp;</span>
          <li>
            <span className={`link${toTheMoon ? ' link_active' : ''}`} onClick={isActiveMoon}>в дистанциях до луны</span>
          </li>
        </ul>
      </div>
      <ul className="content__lists-card">
        {data.map((item, index) => {
          return <Card item={item} toTheMoon={toTheMoon} checkboxValue={checkboxValue} destruction={destruction} setDestruction={setDestruction} key={index}/>
        })}
      </ul>
    </main>
  );
}