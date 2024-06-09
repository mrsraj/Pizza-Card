import './App.css'
import PizzaCard from './PizzaCard';
import Headerbar from './Header/Header';
function App() {

  return (
    <div className='app-container'>
      <div className='header-app-container'>
        <Headerbar />
      </div>
      <div className='cardContainer'>
        <PizzaCard />
      </div>
    </div>
  )
}

export default App
