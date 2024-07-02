import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Explorenew from './components/exploreNew';
import Header from './components/header';
import Home from './components/home';
import Mediatabs from './components/mediaTabs';
import Platformcard from './components/platformCard';
import Salesmarket from './components/salesMarket';
import Salesteam from './components/salesTeam';
import Shieldcomponent from './components/shield';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Platformcard/>
      <Explorenew/>
      <Mediatabs/>
      <Salesmarket/>
      <Shieldcomponent/>
      <Salesteam/>
      <Footer/>
    </div>
  );
}

export default App;
