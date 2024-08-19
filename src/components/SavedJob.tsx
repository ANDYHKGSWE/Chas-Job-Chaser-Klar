import React, { useEffect, useState } from 'react';

interface JobData {
	id: string;
	featured: boolean;
	company: string;
	logo: string;
	position: string;
	contract: string;
	location: string;
	postedAt: string;
	languages: string[];
	tools: string[];
}

interface SavedJobProps {
	data: JobData;
	onRemove: () => void;
}

const SavedJob: React.FC<SavedJobProps> = ({ data, onRemove }) => {
	const {
		id,
		featured,
		company,
		logo,
		position,
		contract,
		location,
		postedAt,
		languages,
		tools,
	} = data;

	const [icon, setIcon] = useState<string>('');

	useEffect(() => {
		const loadIcon = async () => {
			try {
				const logoMap: { [key: string]: () => Promise<{ default: string }> } = {
					photosnap: () => import('../assets/images/photosnap.svg'),
					manage: () => import('../assets/images/manage.svg'),
					account: () => import('../assets/images/account.svg'),
					myhome: () => import('../assets/images/myhome.svg'),
					'loop-studios': () => import('../assets/images/loop-studios.svg'),
				};

				const selectedIcon = logoMap[logo]
					? await logoMap[logo]()
					: { default: '' };
				console.log(
					`Selected icon for logo "${logo}": ${selectedIcon.default}`
				);
				setIcon(selectedIcon.default);
			} catch (error) {
				console.error(`Error loading icon for logo "${logo}":`, error);
				setIcon('');
			}
		};

		loadIcon();
	}, [logo]);

	const handleRemoveJob = () => {
		onRemove();
	};

	return (
		<>
			<div className="job-container">
				<div className="logo">
					{icon ? (
						<img src={icon} alt="Company Logo" />
					) : (
						<span>Logo not found</span>
					)}
				</div>

				<div className="left">
					<div className="company">
						<span className="company-name">{company}</span>
						<span className="remove-job-btn" onClick={handleRemoveJob}>
							Remove
						</span>
					</div>

					<div className="details">
						<span>{postedAt}</span>
						<span>&nbsp;•&nbsp;</span>
						<span>{contract}</span>
						<span>&nbsp;•&nbsp;</span>
						<span>{location}</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default SavedJob;
