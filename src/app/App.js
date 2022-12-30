

import CardSlider from '../component/CardSlider/CardSlider';
import Footer from '../component/Footer/Footer';
import Grid from '../component/Grid/Grid';
import Header from '../component/Header/Header';
import Incor from '../component/IncorSection/Incor';
import Search from '../component/SearchSection/Search';
import SlideSection from '../component/slideSection/SlideSection';
import TopSection from '../component/topSection/TopSection';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <TopSection/>
        <SlideSection/>
        <Incor/>
        <CardSlider/>
        <Grid/>
        <Search/>
        <Footer/>
    </div>
  );
}

export default App;
