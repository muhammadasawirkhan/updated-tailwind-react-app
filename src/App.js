import './App.css';
import Navbar from './components/navbar';
import Hero_section from './components/hero_section';
import { Hero_section_b } from './components/hero_section_b';
import Hero_section_c from './components/hero_section_c';
import Top_seller_section from './components/Top_seller_section';
import Auction from './components/auction';
import Top_collection from './components/Top_collection';




function App() {
  return (
    <>
    <Navbar/>
    <Hero_section/>
    <Hero_section_b/>
    <Hero_section_c/>
    <Top_seller_section/>
    <Auction/>
    <Top_collection/>
    </>
  );
}

export default App;
