import './App.css';
import Upnavbar from './components/upnavbar/Upnavbar';
import Mainnavbar from './components/components2/Mainnavbar';
import Homecontent from './components/Homecontent';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import About from './components/About';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Section8 from './components/Section8';
import Section9 from './components/Section9';
import Section10 from './components/Section10';
import Section11 from './components/Section11';
import Section12 from './components/Section12';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className='mainhome'>
        <div className='mainhome-left'>
          <Upnavbar/>
          <Mainnavbar className='mainmenunav'/>
          <Homecontent/>
        </div>
      </div>
      <Section2/>
      <Section3/>
      <div className='mainabout'>
        <About/>
      </div>
      <div className='mainsection5'>
        <Section5/>
      </div>
      <Section6/>
      <Section7/>
      <Section8/>
      <Section9/>
      <div className='section10main'>
        <div style={{backgroundColor:'rgba(0,0,0,0.65)',width:'100%',height:'100%'}}>
        <Section10/>
        </div>
      </div>
      <Section11/>
      <div className='section12main'>
        <Section12/>
      </div>
      <div className='mainfooter'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
