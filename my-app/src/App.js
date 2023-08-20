import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';

function App() {
  return (
    <>
         <Navbar title="TextUtils" aboutText="AboutText"/>
         {/* <Textform/> */}
         <About/>
    </>

    // <Navbar/>
  );
}

export default App;
