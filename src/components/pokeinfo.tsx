import React, { ReactNode, MouseEvent } from 'react'
import './pokeinfo.css'


const Pokeinfo = ({children,isOpen,onClose}: {children: ReactNode,isOpen:boolean,onClose: (event: MouseEvent<HTMLButtonElement>) => void}) => {
    
    if (!isOpen) {
        return null;
    }
        return (
            <div className='overlay'>
                <div className='wrapper'>
                    <div className='content' onClick={e=>e.stopPropagation()}>
                        {children}
                        <button type='button' onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        )
}

export default Pokeinfo;
