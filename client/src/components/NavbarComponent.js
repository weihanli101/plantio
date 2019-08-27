import React from 'react';
import { useAuth0 } from '../react-auth0-wrapper';
import { Navbar, Button, Alignment } from "@blueprintjs/core";

const NavbarComponent = () => {
	const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

	return (
		<Navbar>
		<Navbar.Group align={Alignment.LEFT}>
			<Navbar.Heading>Plantio</Navbar.Heading>
			<Navbar.Divider />
			{
				!isAuthenticated && (
				<Button className="bp3-minimal" icon="log-in" text="Login"onClick={() =>
					loginWithRedirect({})
				}/>)
			}
			{
			isAuthenticated && (
				<Button className="bp3-minimal" icon="log-out" text="Logout" onClick={
					() => logout()
				} />)
			}
		</Navbar.Group>
		{
			isAuthenticated && (
			<Navbar.Group align={Alignment.RIGHT}>
				<Button className='bp3-minimal bp3-icon-notifications'/>
				<Button className='bp3-minimal bp3-icon-cog'/>
				<Button className='bp3-minimal bp3-icon-user'/>
			</Navbar.Group>
			)
		}
		</Navbar>
	)
}

export default NavbarComponent;
