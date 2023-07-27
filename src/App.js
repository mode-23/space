import './App.css';
import './stars.css';
import {useEffect, useState} from 'react'
import Menu from './Components/NavMenu/Menu';
function App() {
  const [active, isActive] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      if(active){
        document.body.classList.add("menu-toggled");
        }else{
          document.body.classList.remove("menu-toggled");
        }
    }, 200);
  }, [active])
  return (
    <>
<Menu isActive={isActive}/>
<div id="content">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
</div>
    </>
  );
}

export default App;
