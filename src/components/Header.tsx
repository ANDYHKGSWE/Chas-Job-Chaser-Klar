import React from 'react';
import close from './images/icon-remove.svg';

// Definiera typer för props
interface HeaderProps {
	keywords: string[];
	removeKeywords: (keyword: string) => void;
	clearAll: () => void;
}

const Header: React.FC<HeaderProps> = ({
	keywords,
	removeKeywords,
	clearAll,
}) => {
	return (
		<div className="header-container">
			<ul>
				{keywords.map((key, id) => {
					return (
						<li key={id}>
							{key}
							<button className="close" onClick={() => removeKeywords(key)}>
								<img src={close} alt="" />
							</button>
						</li>
					);
				})}
				<button className="clear-all" onClick={clearAll}>
					Clear
				</button>
			</ul>
		</div>
	);
};

export default Header;
