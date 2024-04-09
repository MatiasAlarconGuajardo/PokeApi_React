import { ReactNode, MouseEvent } from 'react';
import './sideBar.css';



const Sidebar = ({children,isOpen,onClose}: {children: ReactNode,isOpen:boolean,onClose: (event: MouseEvent<HTMLButtonElement|HTMLDivElement>) => void}) => {
  if (!isOpen) {
    return null;
  }
  else{
    return (
      <div className='overlay' onClick={onClose}>
      <div className='wrapper' >
          <div className='content' onClick={e=>e.stopPropagation()}>
              {children}
              <button className='btn-close' type='button' onClick={onClose}><b>Cerrar</b></button>
          </div>
      </div>
  </div>
    );
  }
}  
 
export default Sidebar;