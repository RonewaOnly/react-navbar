import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './NavBar.css'
import {Button}  from '../Button'
class NavBar extends Component{
    state = { clicked: false}
     handleClick = ()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'> Shawn <i className='fab fa-react'></i></h1>
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fa-solid fa-xmark':'fa-solid fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
                    {/* Map through the menu items and display them */}
                    {MenuItems.map((items,index) =>{
                        return(
                        <li>
                            <a className={items.Name} href={items.url}>
                                {items.title}
                            </a>
                        </li>
                        )
                    })}
                </ul>
                <Button>Sign Up</Button>
            </nav>
        );
    }
}
export default NavBar