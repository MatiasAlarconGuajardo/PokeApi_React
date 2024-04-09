import React, { ReactNode, MouseEvent } from 'react'
import './pokeinfo.css'



const Pokeinfo = ({children,isOpen,onClose}: {children: ReactNode,isOpen:boolean,onClose: (event: MouseEvent<HTMLButtonElement|HTMLDivElement>) => void}) => {
    
    if (!isOpen) {
        return null;
    }
        return (
            <div className='overlay' onClick={onClose}>
                <div className='wrapper' >
                    <div className='content' onClick={e=>e.stopPropagation()}>
                        {children}
                        <button className='btn-close' type='button' onClick={onClose}><b>Cerrar</b></button>
                    </div>
                </div>
            </div>
        )
}

export default Pokeinfo;
