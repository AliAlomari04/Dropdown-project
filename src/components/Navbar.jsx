import React, { useRef, useState, useEffect } from 'react'
import Dropdown from './Dropdown'
import icon_todo from '../images/icon_todo.svg'
import icon_calendar from '../images/icon_calendar.svg';
import icon_reminders from '../images/icon_reminders.svg';
import icon_planning from '../images/icon_planning.svg';
import icon_menu from '../images/icon_menu.svg';
import icon_close_menu from '../images/icon_close_menu.svg';

const Navbar = () => {
    const [activeDropdown , setActiveDropdown] = useState(null);
    const [mobileOpen , setMobileOpen] = useState(false);

    const navRef = useRef();
    useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
    const toggleDropdown = (name)=>{
        setActiveDropdown((prev)=> (prev === name? null : name));
    }
  return (
   <header className='navbar' ref={navRef}>
    <div className="logo">snap</div>
    <nav className="nav-links">

        {/* Mobile */}
        <img src={icon_menu} className='hamburger' onClick={()=> setMobileOpen(true)}/>
        <ul>
            <Dropdown 
                title='Features'
                items={[
                    {icon : icon_todo , label : 'Todo List'} ,
                    {icon : icon_calendar , label : 'Calendar'} ,
                    {icon : icon_reminders , label : 'Reminders'} ,
                    {icon : icon_planning , label : 'Planning'} ,
                ]}
                isOpen={activeDropdown === 'Features'}
                onToggle={()=> toggleDropdown('Features')}
            />

            <Dropdown
                title='Company'
                items={[
                    {label: 'History'},
                    {label: 'Our Team'},
                    {label: 'Blog'}
                ]}
                isOpen={activeDropdown === 'Company'}
                onToggle={()=> toggleDropdown('Company')}
            />
            <li><a href="#">Careers</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </nav>
                <div className="auth-buttons desktop">
                    <a href="#" className='login'>Login</a>
                    <a href="#" className='register'>Register</a>
                </div>
                {/* Mobile slide */}
                <div className={`mobile-menu ${mobileOpen? 'open': ''}`}>
                <img src={icon_close_menu} className='close-btn' onClick={()=>setMobileOpen(false)} />
                 <ul>
          <Dropdown
            title="Features"
            items={[
              { icon: icon_todo, label: "Todo List" },
              { icon: icon_calendar, label: "Calendar" },
              { icon: icon_reminders, label: "Reminders" },
              { icon: icon_planning, label: "Planning" },
            ]}
            isOpen={activeDropdown === "Features"}
            onToggle={() => toggleDropdown("Features")}
          />

          <Dropdown
            title="Company"
            items={[{ label: "History" }, { label: "Our Team" }, { label: "Blog" }]}
            isOpen={activeDropdown === "Company"}
            onToggle={() => toggleDropdown("Company")}
          />

          <li><a href="#">Careers</a></li>
          <li><a href="#">About</a></li>
        </ul>

        <div className="auth-mobile">
          <a href='#' className="login">Login</a>
          <a href='#' className="register">Register</a>
        </div>
                </div>
                {/* BACKDROP */}
                {mobileOpen && <div className='backdrop' onClick={()=> setMobileOpen(false)} />}
   </header>
  )
}

export default Navbar
