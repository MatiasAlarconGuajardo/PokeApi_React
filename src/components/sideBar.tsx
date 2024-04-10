import { ReactNode, MouseEvent } from 'react';
import './sideBar.css'
import styles from './styles.module.css'



const Sidebar = ({children,isOpen,onClose}: {children: ReactNode,isOpen:boolean,onClose: (event: MouseEvent<HTMLButtonElement|HTMLDivElement>) => void}) => {
  if (!isOpen) {
    return null;
  }
  else{
    return (
      <div className='overlay' onClick={onClose}>
      <div className='wrapper' >
          <div className='content' onClick={e=>e.stopPropagation()}>
  
          <p className={styles.close}  onClick={onClose}><b>&times;</b></p>
          
          {children}
              
          </div>
      </div>
  </div>
    );
  }
}  
 
export default Sidebar;