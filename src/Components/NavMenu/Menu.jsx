import React from 'react'

const Menu = ({isActive}) => {
  return (
     <div id="menu">
              <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
     <button type="button" id="menu-toggle" onClick={() => isActive(prev => !prev)}>
       <span className="line"></span>
       <span className="line"></span>
       <span className="line"></span>  
       <div id="menu-toggle-label">
         <span className="word">SPACE</span>
         <span className="word">ATLAS</span>
       </div>
     </button>
     <div id="menu-gradient"></div>
     <div id="menu-gradient-blur" />
     <div id="menu-arcs-wrapper">
       <svg id="menu-arcs">
         <circle className="menu-arc" cx="50%" cy="50%" r="18%"></circle>
         <circle className="menu-arc" cx="50%" cy="50%" r="30%"></circle>
         <circle className="menu-arc" cx="50%" cy="50%" r="42%"></circle>
       </svg>
     </div>
     <div id="menu-links">
       <a className="link" href="" target="_blank">
         <span className="anchor"></span>  
         <span className="index">01</span>  
         <span className="label">Moon</span>  
       </a>
       <a className="link" href="" target="_blank">
         <span className="anchor"></span>  
         <span className="index">02</span>  
         <span className="label">Mars</span>  
       </a>
       <a className="link" href="" target="_blank">
         <span className="anchor"></span> 
         <span className="index">03</span> 
         <span className="label">Europa</span>  
       </a>
       <a className="link" href="" target="_blank">
         <span className="anchor"></span>  
         <span className="index">04</span>  
         <span className="label">Titan</span>  
       </a>
     </div>
   </div>
  )
}

export default Menu