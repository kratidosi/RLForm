import React from "react";
import './Navbar.css';

const Navbar = (props) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
	<a href="#" class="navbar-brand">DAZZ<b>World</b></a>  		
	<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
		<span class="navbar-toggler-icon"></span>
	</button>
	
	<div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
		<div class="navbar-nav">
			<a href="#" class="nav-item nav-link" style={{fontSize:"22px"}}>Home</a>
			<a href="#" class="nav-item nav-link" style={{fontSize:"22px"}}>About</a>			
			<div class="nav-item dropdown">
				<a href="#" data-toggle="dropdown" class="nav-item nav-link dropdown-toggle" style={{fontSize:"22px"}}>Services</a>
				<div class="dropdown-menu">					
					<a href="#" class="dropdown-item">Web Design</a>
					<a href="#" class="dropdown-item">Web Development</a>
					<a href="#" class="dropdown-item">Graphic Design</a>
					<a href="#" class="dropdown-item">Digital Marketing</a>
				</div>
            </div>
			<a href="#" class="nav-item nav-link active" style={{fontSize:"22px"}}>Pricing</a>
			<a href="#" class="nav-item nav-link" style={{fontSize:"22px"}}>Blog</a>
			<a href="#" class="nav-item nav-link" style={{fontSize:"22px"}}>Contact</a>
        </div>
		<form class="navbar-form form-inline search-form">
			<div class="input-group">
				<input type="text" class="form-control" placeholder="Search..." />
				<span class="input-group-btn">
					<button type="button" class="btn btn-default"><i class="fa fa-search"></i></button>
				</span>
			</div>
		</form>
		<div class="navbar-nav ml-auto">
			<div class="nav-item dropdown login-dropdown">
				<a style={{fontSize:"25px"}} href={(props.name === 'Login')?'/login':'/'}
                data-toggle="dropdown" class="nav-item nav-link dropdown-toggle"><i class="fa fa-user-o"></i>&nbsp;&nbsp;{props.name}</a>
				
        </div>
	</div>
    </div>
</nav>
    </>
  );
};

export default Navbar;