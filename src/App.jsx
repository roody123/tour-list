import { useState } from 'react'
import { data } from './data'
import CityCard from './CityCard';
import './App.css'

function App() {
  const [cities, setCities] = useState(data);

  let removeCity = (id) => {
    const newCities = cities.filter(city => city.id !== id);
    setCities(newCities);
  }

  return (
    <div>
      <div className='container'>
        <h1>You wanted to visit <span>{cities.length}</span> cities.</h1>
      </div>
      
      {cities.map(city => {
        return (
          <CityCard
          key={city.id}
          city={city}
          removeCity={removeCity}/>
        )
      })}

      <div className='container'>
        <button id='btnDelete' onClick={() => setCities([])}>delete all</button>
      </div>
    </div>
  )
}

export default App;