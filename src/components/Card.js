import { Link } from "react-router-dom";
import comet from "../images/comet.svg";
import dino from "../images/dino.svg";

export default function Card({item, toTheMoon, checkboxValue, destruction, setDestruction}) {
  function conventerDate(date) {
    const result = date.split('-').reverse();
    if (result[1] === '01') {
      result[1] = 'января'
    } else if (result[1] === '02') {
      result[1] = 'февраля'
    } else if (result[1] === '03') {
      result[1] = 'марта'
    } else if (result[1] === '04') {
      result[1] = 'апреля'
    } else if (result[1] === '05') {
      result[1] = 'мая'
    } else if (result[1] === '06') {
      result[1] = 'июня'
    } else if (result[1] === '07') {
      result[1] = 'июля'
    } else if (result[1] === '08') {
      result[1] = 'августа'
    } else if (result[1] === '09') {
      result[1] = 'сентября'
    } else if (result[1] === '10') {
      result[1] = 'октября'
    } else if (result[1] === '11') {
      result[1] = 'ноября'
    } else if (result[1] === '12') {
      result[1] = 'декабря'
    }
    return result.join(' ');
  }

  function addComet(e) {
    isActiveButton(e)
    return setDestruction([...destruction, item])
  }

  function isActiveButton(e) {
    destruction.some(card => card.id === item.id)
    e.target.classList.add('card__button_add');
    return e.target.disabled = true;
  }

  const styles = {
    transform: `scale(${Math.round(item.close_approach_data[0].miss_distance.kilometers)/20000000})`,
    top: `-${Math.round(item.close_approach_data[0].miss_distance.kilometers)/2000000}px`
  }

  return (
    <li className={`card${checkboxValue & !item.is_potentially_hazardous_asteroid ? ' card_unvisible' : ''}${item.is_potentially_hazardous_asteroid ? ' card_red' : ' card_green'}`}>
      <img src={comet} style={styles} className="card__comet" alt="Cometa"/>
      <img src={dino} className="card__dino" alt="dino"/>
      <Link to={`/asteroid/${item.id}`} className="card__title">{item.name.slice(1,-1)}</Link>
      <ul className="card__lists">
        <li className="card__list">
          <p className="card__text">Дата</p>
          <span>{conventerDate(item.close_approach_data[0].close_approach_date)}</span>
        </li>
        <li className="card__list">
          <p className="card__text">Расстояние</p>
          <span>{!toTheMoon ? Math.round(item.close_approach_data[0].miss_distance.kilometers) : Math.round(item.close_approach_data[0].miss_distance.lunar)} км </span>
        </li>
        <li className="card__list">
          <p className="card__text">Размер</p>
          <span>{Math.round(item.estimated_diameter.meters.estimated_diameter_max)} м</span>
        </li>
      </ul>
      <div className="card__result">
        <p className="card__text">Оценка:</p>
        <p className="card__text card__text_bold">{item.is_potentially_hazardous_asteroid ? 'опасен' : 'не опасен'}</p>
        <button type="button" className="card__button" onClick={addComet}>На уничтожение</button>
      </div>
    </li>
  );
}