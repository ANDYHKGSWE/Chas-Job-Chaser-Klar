import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import ErrorPage from './components/ErrorPage';
import SavedJobs from './components/SavedJobs';
import { AuthProvider } from './context/AuthContext';
import { Provider } from 'react-redux'; // Importera Provider från react-redux
import store from './store/store'; // Importera din konfigurerade store

const container = document.getElementById('root');
if (!container) {
	throw new Error('Root container missing in index.html');
}

const root = createRoot(container);

const Index = () => {
	const [data, setData] = useState([]);
	const [keywords, setKeywords] = useState<string[]>([]);
	const [searchTerm, setSearchTerm] = useState('');

	const handleSetKeywords = (keyword: string) => {
		setKeywords((prevKeywords) => [...prevKeywords, keyword]);
	};

	return (
		<Provider store={store}>
			<AuthProvider>
				<Router basename="/">
					<Navbar />
					<Routes>
						<Route path="/" element={<div>STARTSIDA</div>} />
						<Route path="/jobs" element={<App />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/signin" element={<Signin />} />
						<Route
							path="/savedjobs"
							element={
								<SavedJobs
									data={data}
									keywords={keywords}
									setKeywords={handleSetKeywords}
									searchTerm={searchTerm}
								/>
							}
						/>
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</Router>
			</AuthProvider>
		</Provider>
	);
};

root.render(<Index />);

// import React, { useState } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.scss';
// import App from './App';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Signin from './pages/Signin';
// import Signup from './pages/Signup';
// import Navbar from './components/Navbar';
// import ErrorPage from './components/ErrorPage';
// import SavedJobs from './components/SavedJobs';
// import { AuthProvider } from './context/AuthContext';
// import { Provider } from 'react-redux'; // Importera Provider från react-redux
// import store from './store'; // Importera din konfigurerade store

// const container = document.getElementById('root');
// if (!container) {
// 	throw new Error('Root container missing in index.html');
// }

// const root = createRoot(container);

// const Index = () => {
// 	const [data, setData] = useState([]);
// 	const [keywords, setKeywords] = useState<string[]>([]);
// 	const [searchTerm, setSearchTerm] = useState('');

// 	const handleSetKeywords = (keyword: string) => {
// 		setKeywords((prevKeywords) => [...prevKeywords, keyword]);
// 	};

// 	return (
// 		<Provider store={store}>
// 			{' '}
// 			{/* Anslut Redux store till din applikation */}
// 			<AuthProvider>
// 				<Router basename="/">
// 					<Navbar />
// 					<Routes>
// 						<Route path="/" element={<div>STARTSIDA</div>} />
// 						<Route path="/jobs" element={<App />} />
// 						<Route path="/signup" element={<Signup />} />
// 						<Route path="/signin" element={<Signin />} />
// 						<Route
// 							path="/savedjobs"
// 							element={
// 								<SavedJobs
// 									data={data}
// 									keywords={keywords}
// 									setKeywords={handleSetKeywords}
// 									searchTerm={searchTerm}
// 								/>
// 							}
// 						/>
// 						<Route path="*" element={<ErrorPage />} />
// 					</Routes>
// 				</Router>
// 			</AuthProvider>
// 		</Provider>
// 	);
// };

// root.render(<Index />);

// import React, { useState } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.scss';
// import App from './App';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Signin from './pages/Signin';
// import Signup from './pages/Signup';
// import Navbar from './components/Navbar';
// import ErrorPage from './components/ErrorPage';
// import SavedJobs from './components/SavedJobs';
// import { AuthProvider } from './context/AuthContext';

// const container = document.getElementById('root');
// if (!container) {
// 	throw new Error('Root container missing in index.html');
// }

// const root = createRoot(container);

// const Index = () => {
// 	const [data, setData] = useState([]);
// 	const [keywords, setKeywords] = useState<string[]>([]);
// 	const [searchTerm, setSearchTerm] = useState('');

// 	const handleSetKeywords = (keyword: string) => {
// 		setKeywords((prevKeywords) => [...prevKeywords, keyword]);
// 	};

// 	return (
// 		<React.StrictMode>
// 			<Router basename="/">
// 				<AuthProvider>
// 					<Navbar />
// 					<Routes>
// 						<Route path="/" element={<div>STARTSIDA</div>} />
// 						<Route path="/jobs" element={<App />} />
// 						<Route path="/signup" element={<Signup />} />
// 						<Route path="/signin" element={<Signin />} />
// 						<Route
// 							path="/savedjobs"
// 							element={
// 								<SavedJobs
// 									data={data}
// 									keywords={keywords}
// 									setKeywords={handleSetKeywords}
// 									searchTerm={searchTerm}
// 								/>
// 							}
// 						/>
// 						<Route path="*" element={<ErrorPage />} />
// 					</Routes>
// 				</AuthProvider>
// 			</Router>
// 		</React.StrictMode>
// 	);
// };

// root.render(<Index />);
