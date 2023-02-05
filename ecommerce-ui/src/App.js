
import './App.css';
import vacProperties from './data/bnbs.json'
import VacationRental from './VacationRental'
import VacationRentalBootstrap from './VacationRentalBootstrap'
function App() {
  return (
    <div>
      <header>
        reserve the Vacation Homes
        <VacationRentalBootstrap properties={vacProperties} />
      </header>
    </div>
  );
}

export default App;
