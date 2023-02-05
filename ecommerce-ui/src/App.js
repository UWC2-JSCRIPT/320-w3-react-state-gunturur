
import './App.css';
import vacProperties from './data/bnbs.json'
import VacationRental from './VacationRental'
function App() {
  return (
    <div>
      <header>
        reserve the Vacation Homes
        <VacationRental properties={vacProperties} />
      </header>
    </div>
  );
}

export default App;
