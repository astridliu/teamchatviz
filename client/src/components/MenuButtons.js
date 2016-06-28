/*
  Slack Viz
  Copyright (C) 2016 Moovel Group GmbH, Haupstaetter str. 149, 70188, Stuttgart, Germany hallo@moovel.com

  This library is free software; you can redistribute it and/or
  modify it under the terms of the GNU Lesser General Public
  License as published by the Free Software Foundation; either
  version 2.1 of the License, or (at your option) any later version.

  This library is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
  Lesser General Public License for more details.

  You should have received a copy of the GNU Lesser General Public
  License along with this library; if not, write to the Free Software
  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301
  USA
*/

import React from 'react';
import { Link } from 'react-router';
// import { Menu } from './Menu.js';

export const MenuButtons = React.createClass({
  getInitialState() {
    return {
      menuOpened: false,
      infoOpened: false,
    };
  },
  toggleMenu(){
    this.setState({
      menuOpened: !this.state.menuOpened,
      infoOpened: false,
    });
  },
  render() {
    return <div className="menu-buttons" style={{ display: 'inline-block' }}>
      <Link to="/"><img className="nav-buttons" src="/images/navbuttons-16.png" alt="home" /></Link>
      <button onClick={this.toggleMenu} className={'hamburger' + ((this.state.menuOpened) ? ' is-active' : '')} type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <div className = { this.state.menuOpened ? 'menu actv' : 'menu' } >
        <ul>
          <li><a href="/">home</a></li>
          <li><a href="/heartbeat">channel heartbeat</a></li>
          <li><a href="/channel-land">channel land</a></li>
          <li><a href="/people-land">people land</a></li>
          <li><a href="/messages-and-reactions">messages & reactions</a></li>
          <li><a href="/frequent-speakers">frequent speakers</a></li>
          <li><a href="/heartbeat">emoji timeline</a></li>
          <li><a href="/about">about</a></li>
        </ul>
      </div>
      <div className = { this.state.menuOpened ? 'overlay actv' : 'overlay' } onClick={this.toggleMenu}></div>
    </div>;
  }
})
