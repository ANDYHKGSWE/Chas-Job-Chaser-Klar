import React, { ChangeEvent } from 'react';

interface SearchProps {
	setSearchTerm: (term: string) => void;
}

const Search: React.FC<SearchProps> = ({ setSearchTerm }) => {
	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value.toLowerCase());
	};

	return (
		<div className="search">
			<input
				type="text"
				placeholder="Search for jobs..."
				onChange={handleSearch}
			/>
		</div>
	);
};

export default Search;

// import React, { useState, ChangeEvent } from 'react';

// interface SearchProps {
// 	setSearchTerm: (term: string) => void;
// }

// const Search: React.FC<SearchProps> = ({ setSearchTerm }) => {
// 	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
// 		setSearchTerm(e.target.value.toLowerCase());
// 	};

// 	return (
// 		<div className="header-container">
// 			<input
// 				type="text"
// 				placeholder="Search for jobs..."
// 				onChange={handleChange}
// 			/>
// 		</div>
// 	);
// };

// export default Search;
