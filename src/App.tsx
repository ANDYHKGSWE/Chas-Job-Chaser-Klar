import React, { useEffect, useState } from 'react';
import Jobs from './components/Jobs';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import { JobData } from './types';
import { Provider } from 'react-redux';
import { AuthProvider } from './context/AuthContext';
import store from './store/store';

const App: React.FC = () => {
	const [data, setData] = useState<JobData[]>([]);
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [filterKeywords, setFilterKeywords] = useState<string[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('/src/data.json');
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const jsonData: JobData[] = await response.json();
				setData(jsonData);
				console.log('Fetched data:', jsonData);
			} catch (error) {
				setError('Error fetching data');
				console.log('Error fetching data: ', error);
			}
		};

		fetchData();
	}, []);

	const addFilterKeyword = (keyword: string) => {
		if (!filterKeywords.includes(keyword)) {
			setFilterKeywords([...filterKeywords, keyword]);
		}
	};

	const deleteKeyword = (keyword: string) => {
		setFilterKeywords(filterKeywords.filter((key) => key !== keyword));
	};

	const clearAllKeywords = () => {
		setFilterKeywords([]);
	};

	let filteredData: JobData[] = [];
	try {
		filteredData = data.filter((job) => {
			const matchesSearchTerm = searchTerm
				? (job.title &&
						job.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
				  (job.company &&
						job.company.toLowerCase().includes(searchTerm.toLowerCase())) ||
				  (job.location &&
						job.location.toLowerCase().includes(searchTerm.toLowerCase())) ||
				  (job.role &&
						job.role.toLowerCase().includes(searchTerm.toLowerCase())) ||
				  (job.level &&
						job.level.toLowerCase().includes(searchTerm.toLowerCase())) ||
				  (job.languages &&
						job.languages.some(
							(language) =>
								typeof language === 'string' &&
								language.toLowerCase().includes(searchTerm.toLowerCase())
						)) ||
				  (job.tools &&
						job.tools.some(
							(tool) =>
								typeof tool === 'string' &&
								tool.toLowerCase().includes(searchTerm.toLowerCase())
						))
				: true;
			const matchesKeywords = filterKeywords.every((keyword) =>
				job.languages
					? job.languages.includes(keyword) ||
					  job.role?.toLowerCase() === keyword.toLowerCase() ||
					  job.level?.toLowerCase() === keyword.toLowerCase()
					: false
			);
			return matchesSearchTerm && matchesKeywords;
		});
	} catch (error) {
		console.log('Error filtering data:', error);
	}

	console.log('Search term:', searchTerm);
	console.log('Filter keywords:', filterKeywords);
	console.log('Filtered data:', filteredData);
	console.log('Original data:', data);

	return (
		<Provider store={store}>
			<AuthProvider>
				<div className="header">
					<h1>Andys JobChaser</h1>
				</div>

				<Search setSearchTerm={setSearchTerm} />

				{filterKeywords.length > 0 && (
					<Header
						keywords={filterKeywords}
						removeKeywords={deleteKeyword}
						clearAll={clearAllKeywords}
					/>
				)}

				{error ? (
					<div className="error">{error}</div>
				) : (
					<Jobs
						keywords={filterKeywords}
						data={filteredData}
						setKeywords={addFilterKeyword}
						searchTerm={searchTerm}
					/>
				)}
			</AuthProvider>
		</Provider>
	);
};

export default App;
// src/App.tsx
// import React, { useEffect, useState } from 'react';
// import Jobs from './components/Jobs';
// import './App.css';
// import Header from './components/Header';
// import Search from './components/Search';
// import { JobData } from './types';
// import { Provider } from 'react-redux';
// import { AuthProvider } from './context/AuthContext';
// import store from './store/store';

// const App: React.FC = () => {
// 	const [data, setData] = useState<JobData[]>([]);
// 	const [searchTerm, setSearchTerm] = useState<string>('');
// 	const [filterKeywords, setFilterKeywords] = useState<string[]>([]);
// 	const [error, setError] = useState<string | null>(null);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const response = await fetch('/src/data.json');
// 				if (!response.ok) {
// 					throw new Error('Network response was not ok');
// 				}
// 				const jsonData: JobData[] = await response.json();
// 				setData(jsonData);
// 			} catch (error) {
// 				setError('Error fetching data');
// 				console.log('Error fetching data: ', error);
// 			}
// 		};

// 		fetchData();
// 	}, []);

// 	const addFilterKeyword = (keyword: string) => {
// 		if (!filterKeywords.includes(keyword)) {
// 			setFilterKeywords([...filterKeywords, keyword]);
// 		}
// 	};

// 	const deleteKeyword = (keyword: string) => {
// 		setFilterKeywords(filterKeywords.filter((key) => key !== keyword));
// 	};

// 	const clearAllKeywords = () => {
// 		setFilterKeywords([]);
// 	};

// 	return (
// 		<Provider store={store}>
// 			<AuthProvider>
// 				<div className="header">
// 					<h1>JobChaser</h1>
// 				</div>

// 				<Search setSearchTerm={setSearchTerm} />

// 				{filterKeywords.length > 0 && (
// 					<Header
// 						keywords={filterKeywords}
// 						removeKeywords={deleteKeyword}
// 						clearAll={clearAllKeywords}
// 					/>
// 				)}

// 				{error ? (
// 					<div className="error">{error}</div>
// 				) : (
// 					<Jobs
// 						keywords={filterKeywords}
// 						data={data}
// 						setKeywords={addFilterKeyword}
// 						searchTerm={searchTerm}
// 					/>
// 				)}
// 			</AuthProvider>
// 		</Provider>
// 	);
// };

// export default App;

// src/App.tsx
// import React, { useEffect, useState } from 'react';
// import Jobs from './components/Jobs';
// import './App.css';
// import Header from './components/Header';
// import Search from './components/Search';
// import { JobData } from './types';

// const App: React.FC = () => {
// 	const [data, setData] = useState<JobData[]>([]);
// 	const [searchTerm, setSearchTerm] = useState<string>('');
// 	const [filterKeywords, setFilterKeywords] = useState<string[]>([]);
// 	const [error, setError] = useState<string | null>(null);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const response = await fetch('/src/data.json');
// 				if (!response.ok) {
// 					throw new Error('Network response was not ok');
// 				}
// 				const jsonData: JobData[] = await response.json();
// 				setData(jsonData);
// 			} catch (error) {
// 				setError('Error fetching data');
// 				console.log('Error fetching data: ', error);
// 			}
// 		};

// 		fetchData();
// 	}, []);

// 	const addFilterKeyword = (keyword: string) => {
// 		if (!filterKeywords.includes(keyword)) {
// 			setFilterKeywords([...filterKeywords, keyword]);
// 		}
// 	};

// 	const deleteKeyword = (keyword: string) => {
// 		setFilterKeywords(filterKeywords.filter((key) => key !== keyword));
// 	};

// 	const clearAllKeywords = () => {
// 		setFilterKeywords([]);
// 	};

// 	return (
// 		<>
// 			<div className="header">
// 				<h1>JobChaser</h1>
// 			</div>

// 			<Search setSearchTerm={setSearchTerm} />

// 			{filterKeywords.length > 0 && (
// 				<Header
// 					keywords={filterKeywords}
// 					removeKeywords={deleteKeyword}
// 					clearAll={clearAllKeywords}
// 				/>
// 			)}

// 			{error ? (
// 				<div className="error">{error}</div>
// 			) : (
// 				<Jobs
// 					keywords={filterKeywords}
// 					data={data}
// 					setKeywords={addFilterKeyword}
// 					searchTerm={searchTerm}
// 				/>
// 			)}
// 		</>
// 	);
// };

// export default App;
