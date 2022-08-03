import type { Component } from 'solid-js';

const Login: Component = () => {
	return (
		<div class='centered bg-s-gray-100 h-screen'>
			<div class='bg-s-gray-200 w-80 h-40'>
				<p class='text-left text-s-gray-100'>Welcome! Please tell me who you are</p>

				<div class='centered py-10'>
				<div>
					<label class='pr-5'>Name</label>
					<input type="text">Name</input>
				</div>
				</div>

				<div class='text-right align-bottom pr-2'>
					<button class='bg-s-gray-300 px-3 py-1'>
						Register
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;