import React from 'react';
import "./App.scss"
import useToken from './Hooks/useToken';
import LogoPhoto from "./Assets/Images/svg/Logo.svg"

function UnauthenticatedApp() {
	const [setIsLoggedIn] = useToken(true);

	const handleSubmit = async (evt) => {
		evt.preventDefault();

		const { email, password } = evt.target.elements;

		const res = await fetch('https://reqres.in/api/login', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				email: email.value.trim(),
				password: password.value.trim(),
			}),
		});

		const data = await res.json();

		if (data?.token) {
			setIsLoggedIn(data?.token);
		}
	};

	return (
		<form className='login__form' onSubmit={handleSubmit}>
			<img src={LogoPhoto} alt="" width={116} height={25} />

			<div>
				<input className='email__input' type='email' name='email' placeholder='email' defaultValue='eve.holt@reqres.in' />
			</div>

			<div>
				<input className='email__input'  type='password' name='password' placeholder='password' defaultValue='cityslicka' />
			</div>
			

			<button className='login__button' type='submit'>Log In</button>
		</form>
	);
}

export default UnauthenticatedApp;
