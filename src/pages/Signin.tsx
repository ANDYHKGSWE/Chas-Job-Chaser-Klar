import React, { useState, useContext, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Navbar from '../components/Navbar';
import { AuthContext } from '../context/AuthContext';

interface UserCredentials {
	email: string;
	password: string;
}

const Signin: React.FC = () => {
	const [loginType, setLoginType] = useState('login');
	const [userCredentials, setUserCredentials] = useState<UserCredentials>({
		email: '',
		password: '',
	});
	const [error, setError] = useState('');

	const authContext = useContext(AuthContext);
	if (!authContext) {
		throw new Error('AuthContext must be used within an AuthProvider');
	}
	const { isAuthenticated, setIsAuthenticated } = authContext;

	function handleCredentials(e: ChangeEvent<HTMLInputElement>) {
		setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
		console.log(userCredentials);
	}

	function handleSignIn(e: FormEvent) {
		e.preventDefault();
		setError('');

		signInWithEmailAndPassword(
			auth,
			userCredentials.email,
			userCredentials.password
		)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
				setIsAuthenticated(true);
				// ...
			})
			.catch((error) => {
				setError(error.message);
			});
	}

	return (
		<>
			{isAuthenticated ? (
				<div>Inloggad!</div>
			) : (
				<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100">
					<div className="sm:mx-auto sm:w-full sm:max-w-sm">
						<img
							className="mx-auto h-28 w-28"
							src="https://www.pngall.com/wp-content/uploads/8/Work-PNG-Photo.png"
						/>
						<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
							Sign in to your account
						</h2>
					</div>

					<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
						<form className="space-y-6" action="#" method="POST">
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Email address
								</label>
								<div className="mt-2">
									<input
										onChange={handleCredentials}
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div>
								<div className="flex items-center justify-between">
									<label
										htmlFor="password"
										className="block text-sm font-medium leading-6 text-gray-900"
									>
										Password
									</label>
								</div>
								<div className="mt-2">
									<input
										onChange={handleCredentials}
										id="password"
										name="password"
										type="password"
										autoComplete="current-password"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div>
								<button
									onClick={handleSignIn}
									className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Sign in
								</button>
							</div>
							{error && (
								<div className="text-red-400 font-bold text-center">
									{error}
								</div>
							)}
						</form>

						<p className="mt-10 text-center text-sm text-gray-500">
							Don't have an account yet?{' '}
							<Link
								to="/signup"
								className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
							>
								Signup
							</Link>
						</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Signin;
