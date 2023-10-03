import Banner from "../Banner/Banner";
import CardsContainer from "../CardsContainer"
import Navbar from "../Navbar/Navbar"
import Footer from "../footer/Footer";
import './Home.css';
//import Footer from "../footer/footer";
const Home = () => {
  return (
<>
 <div className="container-home">
 <Navbar/>
 <br />
 <Banner/>
 <br />
 <CardsContainer/>
 <Footer/>
 </div>
 
 </>
  )
}

export default Home