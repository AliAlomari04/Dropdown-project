import React from 'react'
import icon_arrow_down from '../images/icon_arrow_down.svg'

const Dropdown = ({title , items , isOpen , onToggle}) => {
  return (
    <li className='dropdown'>
        <button className='dropdown-btn'
         onClick={(e)=>{
            e.stopPropagation();
            onToggle();
         }}>
            {title} <img src={icon_arrow_down} className={isOpen? 'rotate': ''} />
        </button>
        {isOpen && (
            <ul className='dropdown-menu'>
                {items.map((item , index)=>(
                    <li key={index}>
                        <a href="#">
                            {item.icon && (
                                <img src={item.icon}  />
                            )}
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        )}
    </li>
  )
}

export default Dropdown
