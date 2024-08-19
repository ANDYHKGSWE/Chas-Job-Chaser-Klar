import React from 'react';
import '../scss/skeleton.scss';

interface LoadingProps {
	text: string;
}

const Loading: React.FC<LoadingProps> = ({ text }) => {
	return (
		<>
			<div className="job-skeleton">
				<div className="logo-skeleton"></div>
				<div className="info-skeleton">
					<div className="company-name-skeleton"></div>
					<div className="position-skeleton"></div>
					<div className="details-skeleton"></div>
				</div>
			</div>
			<div className="job-skeleton">
				<div className="logo-skeleton"></div>
				<div className="info-skeleton">
					<div className="company-name-skeleton"></div>
					<div className="position-skeleton"></div>
					<div className="details-skeleton"></div>
				</div>
			</div>
			<div className="job-skeleton">
				<div className="logo-skeleton"></div>
				<div className="info-skeleton">
					<div className="company-name-skeleton"></div>
					<div className="position-skeleton"></div>
					<div className="details-skeleton"></div>
				</div>
			</div>
			<div className="job-skeleton">
				<div className="logo-skeleton"></div>
				<div className="info-skeleton">
					<div className="company-name-skeleton"></div>
					<div className="position-skeleton"></div>
					<div className="details-skeleton"></div>
				</div>
			</div>
		</>
	);
};

export default Loading;
