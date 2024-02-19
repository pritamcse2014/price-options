import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav';
import LineChart from './components/LineChart/LineChart';
import NavBar from './components/NavBar/NavBar';
import Phones from './components/Phones/Phones';
import PriceOptions from './components/PriceOptions/PriceOptions';

const App = () => {
  return (
    <div>
      <NavBar />
      <DaisyNav />
      <PriceOptions />
      <LineChart />
      <Phones />
    </div>
  );
};

export default App;