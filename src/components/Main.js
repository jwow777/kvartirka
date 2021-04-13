import { useState } from "react";
import Card from "./Card";

export default function Main({data}) {
  const [toTheMoon, setToTheMoon] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(false);
  function isActiveMoon(){
    setToTheMoon(true);
  }
  function isActiveKm(){
    setToTheMoon(false);
  }
  function handleChange(e) {
    setCheckboxValue(e.target.checked);
  }
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
            <a href="#" className={`link${!toTheMoon ? ' link_active' : ''}`} onClick={isActiveKm}>в километрах</a>
          </li>
          <span>,&ensp;</span>
          <li>
            <a href="#" className={`link${toTheMoon ? ' link_active' : ''}`} onClick={isActiveMoon}>в дистанциях до луны</a>
          </li>
        </ul>
      </div>
      <ul className="content__lists-card">
        {data.map((item, index) => {
          return <Card item={item} toTheMoon={toTheMoon} checkboxValue={checkboxValue} key={index}/>
        })}
      </ul>
    </main>
  );
}