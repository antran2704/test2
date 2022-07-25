import "./App.scss";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import pages from "./components/Pages";
function App() {
  return (
    <div className="App">  
          <Navbar />
          <Header />
          {pages.map((item,index) => (
              <Content key={index} title={item.title} color = {item.color} background = {item.background} desc = {item.desc}>{<item.component />}</Content>
          ))} 
          <Footer />
    </div>
  );
}

export default App;
