import React, { useEffect, useState } from 'react';
import photosnap from '../assets/images/photosnap.svg';
import manage from '../assets/images/manage.svg';
import account from '../assets/images/account.svg';
import myhome from '../assets/images/myhome.svg';
import loopStudios from '../assets/images/loop-studios.svg';

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

interface JobProps {
	data: JobData;
	setKeywords: (keyword: string) => void;
}

const Job: React.FC<JobProps> = (props) => {
	const {
		id,
		featured,
		company,
		logo,
		position,
		role,
		level,
		contract,
		location,
		postedAt,
		languages,
		tools,
	} = props.data;

	let keywords = [role, level, ...languages, ...tools];

	const [icon, setIcon] = useState<string>('');
	const [isSaved, setIsSaved] = useState(false);

	useEffect(() => {
		const logoMap: { [key: string]: string } = {
			photosnap: photosnap,
			manage: manage,
			account: account,
			myhome: myhome,
			'loop-studios': loopStudios,
		};

		setIcon(logoMap[logo] || '');

		let savedJobs = JSON.parse(localStorage.getItem('savedJobs') || '[]');
		const isJobSaved = savedJobs.some(
			(savedJob: { id: number }) => savedJob.id === id
		);
		setIsSaved(isJobSaved);
	}, [logo, id]);

	const handleSaveJob = () => {
		const jobObject = {
			id,
			featured,
			company,
			logo,
			position,
			role,
			level,
			contract,
			location,
			postedAt,
			languages,
			tools,
		};

		let savedJobs = JSON.parse(localStorage.getItem('savedJobs') || '[]');

		const isJobSaved = savedJobs.some(
			(savedJob: { id: number }) => savedJob.id === id
		);

		if (!isJobSaved) {
			savedJobs.push(jobObject);
			localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
			setIsSaved(true);
			console.log('Job saved!');
		} else {
			savedJobs = savedJobs.filter(
				(savedJob: { id: number }) => savedJob.id !== id
			);
			localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
			setIsSaved(false);
			console.log('Job not saved anymore!');
		}
	};

	return (
		<div
			className={
				featured ? 'job-container job-container-borderLeft' : 'job-container'
			}
		>
			<div className="logo">
				<img src={icon} alt={`${company} logo`} />
			</div>

			<div className="left">
				<div className="company">
					<span className="company-name">{company}</span>
					{props.data.new && <span className="new">new!</span>}
					{props.data.featured && <span className="featured">featured</span>}
					<span className="save-job-btn" onClick={handleSaveJob}>
						{isSaved ? 'Saved' : 'Save'}
					</span>
				</div>

				<div className="position">{position}</div>

				<div className="details">
					<span>{postedAt}</span>
					<span>&nbsp;•&nbsp;</span>
					<span>{contract}</span>
					<span>&nbsp;•&nbsp;</span>
					<span>{location}</span>
				</div>
			</div>

			<div className="right">
				{keywords.map((key, id) => (
					<span onClick={() => props.setKeywords(key)} key={id}>
						{key}
					</span>
				))}
			</div>
		</div>
	);
};

export default Job;
