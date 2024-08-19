import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
	isAuthenticated: boolean;
	setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined
);

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
		localStorage.getItem('isAuthenticated') === 'true'
	);

	useEffect(() => {
		localStorage.setItem('isAuthenticated', isAuthenticated.toString());
	}, [isAuthenticated]);

	return (
		<AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
			{children}
		</AuthContext.Provider>
	);
};
