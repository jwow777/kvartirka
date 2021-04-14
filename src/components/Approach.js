export default function Approach({approach}) {
  return (
    <>
      <h3 className="card-full__title">Дата сближения {approach.close_approach_date}</h3>
      <ul className="card-full__lists">
        <li className="card__list">
          <p className="card__text">Скорость</p>
          <span>{Math.round(approach.relative_velocity.kilometers_per_hour)} км/ч</span>
        </li>
        <li className="card__list">
          <p className="card__text">Время максимального сближения</p>
          <span>{approach.close_approach_date_full}</span>
        </li>
        <li className="card__list">
          <p className="card__text">Расстояние до Земли</p>
          <span>{Math.round(approach.miss_distance.kilometers)} км</span>
        </li>
        <li className="card__list">
          <p className="card__text">Орбита вокруг чего летит</p>
          <span>{approach.orbiting_body}</span>
        </li>
      </ul>
    </> 
  );
}