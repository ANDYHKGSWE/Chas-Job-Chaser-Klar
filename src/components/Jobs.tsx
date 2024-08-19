import React, { useEffect, useState } from 'react';
import Job from './Job';
import Loading from './Loading';

interface JobData {
	id: number;
	featured: boolean;
	company: string;
	logo: string;
	position: string;
	role: string;
	level: string;
	contract: string;
	location: string;
	postedAt: string;
	languages: string[];
	tools: string[];
	new?: boolean;
}

interface JobsProps {
	data: JobData[];
	setKeywords: (keyword: string) => void;
	keywords: string[];
	searchTerm: string;
}

const Jobs: React.FC<JobsProps> = (props) => {
	const { data, setKeywords, keywords, searchTerm } = props;

	console.log('Jobs data:', data);

	if (!data || data.length === 0) {
		return <Loading />;
	}

	return (
		<div className="jobs">
			{data.map((job) => (
				<Job key={job.id} data={job} setKeywords={setKeywords} />
			))}
		</div>
	);
};

export default Jobs;

// import React, { useEffect, useState } from 'react';
// import Job from './Job';
// import Loading from './Loading';

// interface JobData {
// 	id: number;
// 	featured: boolean;
// 	company: string;
// 	logo: string;
// 	position: string;
// 	role: string;
// 	level: string;
// 	contract: string;
// 	location: string;
// 	postedAt: string;
// 	languages: string[];
// 	tools: string[];
// 	new?: boolean;
// }

// interface JobsProps {
// 	data: JobData[];
// 	setKeywords: (keyword: string) => void;
// 	keywords: string[];
// 	searchTerm: string;
// }

// const Jobs: React.FC<JobsProps> = (props) => {
// 	const { data, setKeywords, keywords, searchTerm } = props;

// 	console.log('Jobs data:', data);

// 	if (!data || data.length === 0) {
// 		return <Loading />;
// 	}

// 	return (
// 		<div className="jobs">
// 			{data.map((job) => (
// 				<Job key={job.id} data={job} setKeywords={setKeywords} />
// 			))}
// 		</div>
// 	);
// };

// export default Jobs;

// import React, { useEffect, useState } from 'react';
// import Job from './Job';
// import Loading from './Loading';

// // Definiera typer för props
// interface JobData {
// 	id: number;
// 	featured: boolean;
// 	company: string;
// 	logo: string;
// 	position: string;
// 	role: string;
// 	level: string;
// 	contract: string;
// 	location: string;
// 	postedAt: string;
// 	languages: string[];
// 	tools: string[];
// 	new?: boolean;
// }

// interface JobsProps {
// 	data: JobData[];
// 	setKeywords: (keyword: string) => void;
// 	keywords: string[];
// 	searchTerm: string;
// }

// const Jobs: React.FC<JobsProps> = ({
// 	data,
// 	setKeywords,
// 	keywords,
// 	searchTerm,
// }) => {
// 	const [filteredData, setFilteredData] = useState<JobData[]>([]);
// 	const [isLoading, setIsLoading] = useState(true);

// 	const filterAndSortData = () => {
// 		let newData = data;

// 		if (searchTerm.length > 0) {
// 			newData = newData.filter((job) =>
// 				job.position.toLowerCase().includes(searchTerm.toLowerCase())
// 			);
// 		}

// 		if (keywords.length > 0) {
// 			newData = newData.filter((job) =>
// 				keywords.every(
// 					(key) =>
// 						job.role === key ||
// 						job.level === key ||
// 						job.languages.includes(key) ||
// 						job.tools.includes(key)
// 				)
// 			);
// 		}

// 		newData = sortData(newData);
// 		setFilteredData(newData);
// 	};

// 	const sortData = (data: JobData[]) => {
// 		return [...data].sort((a, b) => {
// 			if (a.featured === b.featured) {
// 				return (b.new ? 1 : 0) - (a.new ? 1 : 0);
// 			}
// 			return a.featured ? -1 : 1;
// 		});
// 	};

// 	useEffect(() => {
// 		filterAndSortData();
// 	}, [keywords, searchTerm, data]);

// 	useEffect(() => {
// 		const sortedData = sortData(data);
// 		setFilteredData(sortedData);
// 		setTimeout(() => {
// 			setIsLoading(false);
// 		}, 1500);
// 	}, [data]);

// 	return isLoading ? (
// 		<Loading text="Loading jobs..." />
// 	) : (
// 		<div className="jobs">
// 			{filteredData.map((job) => (
// 				<Job key={job.id} data={job} setKeywords={setKeywords} />
// 			))}
// 		</div>
// 	);
// };

// export default Jobs;
