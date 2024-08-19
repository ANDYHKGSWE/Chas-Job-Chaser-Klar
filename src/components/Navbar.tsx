import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const navItems = [
		{ id: 1, text: 'Home', link: '/' },
		{ id: 2, text: 'Jobs', link: '/jobs' },
		{ id: 3, text: 'Sign In', link: '/signin' },
		{ id: 4, text: 'Sign Up', link: '/signup' },
		{ id: 5, text: `Saved Jobs`, link: '/savedjobs' },
	];
	return (
		<div className="bg-gray-200 flex justify-between items-center h-24 max-w-[1024px] mx-auto px-4 text-black">
			<div className="">
				<h1>JobChaser</h1>
			</div>
			<ul className="hidden md:flex">
				{navItems.map((item) => (
					<li
						key={item.id}
						className="p-4 hover:bg-pink-400 rounded-xl m-2 cursor-pointer duration-300 hover:text-white"
					>
						<Link to={item.link}>{item.text}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Navbar;
