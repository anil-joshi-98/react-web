// import About from './components/About';
import React,{ useState }  from 'react';
import Navbar from './components/Navbar';
import Text from './components/Textform';

function App() {
  const[mode,setMode]=useState('light');
  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background='black';
    }
    else{
      setMode('light');
      document.body.style.background='white';
    }
  }
  return (
    <>
      <Navbar title="React App" about="about us" name="Enable DarkMode" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-5" >
        <Text heading="Enter your text here..." mode={mode}/>
        {/* <About text="About Us"/> */}
      </div>
    </>
  );
}
export default App;
