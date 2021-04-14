import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import comet from "../images/comet.svg";
import dino from "../images/dino.svg";
import Approach from "./Approach";

export default function CardFull({destruction, setDestruction}) {
  const [item, setItem] = useState(false);
  const id = useLocation().pathname.slice(10);

  function addComet(e) {
    isActiveButton(e)
    return setDestruction([...destruction, item])
  }

  function isActiveButton(e) {
    destruction.some(card => card.id === item.id)
    e.target.classList.add('card__button_add');
    return e.target.disabled = true;
  }

  function apiAsteroid(id) {
    return fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=DEMO_KEY`)
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    .catch(err => console.log(err));
  }
  useEffect(() => {
    apiAsteroid(id).then(res => setItem(res)).catch(err => console.log(err));
  }, [id]);  

  return (
    <li className={`card card-full${item.is_potentially_hazardous_asteroid ? ' card_red' : ' card_green'}`}>
      <img src={comet} className="card__comet" alt="Cometa"/>
      <img src={dino} className="card__dino" alt="dino"/>
      <h2 className="card__title">{item.designation}</h2>
      {item && item.close_approach_data.map((approach, index) => {
        console.log(approach);
        return <Approach approach={approach} key={index}/>     
      })}
      <div className="card__result">
        <p className="card__text">Оценка:</p>
        <p className="card__text card__text_bold">{item.is_potentially_hazardous_asteroid ? 'опасен' : 'не опасен'}</p>
        <button type="button" className="card__button" onClick={addComet}>На уничтожение</button>
      </div>
    </li>
  );
}