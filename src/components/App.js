import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import CardFull from "./CardFull";
import Destruction from "./Destruction";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";

export default function App() {
  const [data, setData] = useState([]);
  const [destruction, setDestruction] = useState([]);
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
      <Switch>
        <Route exact path="/">
          <Home 
            data={data} 
            destruction={destruction} 
            setDestruction={setDestruction}
            toTheMoon={toTheMoon}
            checkboxValue={checkboxValue}
            isActiveMoon={isActiveMoon}
            isActiveKm={isActiveKm}
            handleChange={handleChange}
          />
        </Route>
        <Route path="/asteroid">
          <CardFull destruction={destruction} setDestruction={setDestruction}/>
        </Route>
        <Route path="/destruction">
          <Destruction 
            destruction={destruction}
            setDestruction={setDestruction}
            toTheMoon={toTheMoon}
            checkboxValue={checkboxValue}
            isActiveMoon={isActiveMoon}
            isActiveKm={isActiveKm}
            handleChange={handleChange}
          />
        </Route>
      </Switch>
      <Footer/>
    </>
  );
}
