import React from 'react';
import './Header.css';
import logo from '../../img/logo.svg';

import {Search} from '../Search/Search';

const Header = (props) => (	
	<header>
	  <div className="wrapper">
		<img className="logo" alt="#" src={logo} />
		<Search data={props.data} onSearch={(data) => props.onSearch(data)}/>
	  </div>
	</header>
)	

export {Header}; 