import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export default function App() {
  const [data, setData] = useState([]);
  function api() {
    return fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-04-13&end_date=2021-04-20&api_key=DEMO_KEY')
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
    .catch(err => console.log(err));
  }
  useEffect(() => {
    api().then(res => setData(res.near_earth_objects['2021-04-13'])).catch(err => console.log(err));
  }, []);
  return (
    <>
      <Header/>
      <Main data={data}/>
      <Footer/>
    </>
  );
}
