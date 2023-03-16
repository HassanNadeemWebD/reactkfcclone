// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Box from './components/Box';
import Card from './components/Card';
import Footer from './components/Footer';
import Heading from './components/Heading';
import boximg1 from './img/boximg1.png';
import boximg2 from './img/boximg2.png';
import boximg3 from './img/boximg3.jpg';
import boximg4 from './img/boximg4.jpg';
import boximg6 from './img/boximg5.jpg';
import boximg5 from './img/boximg6.jpg';
import card1 from './img/card1.png';
import card2 from './img/card2.jpg';
import card3 from './img/card3.jpg';
import card4 from './img/card4.jpg';



function App() {
  return (
    <div className="container">
      <Navbar />
      <Carousel />
      <Heading text="Browse Categories" />
      <div className='row'>
        <Box img={boximg1} />
        <Box img={boximg2} />
        <Box img={boximg3} />
        <Box img={boximg4} />
        <Box img={boximg5} />
        <Box img={boximg6} />
      </div>
    <div className='row'>
      <Card cardImg={card1} deal="Krunch Burger" desc="Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun"
      price = "250" />
       <Card cardImg={card1} deal="Krunch Burger" desc="Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun"
      price = "250" />
       <Card cardImg={card1} deal="Krunch Burger" desc="Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun"
      price = "250" />
       <Card cardImg={card1} deal="Krunch Burger" desc="Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun"
      price = "250" />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
