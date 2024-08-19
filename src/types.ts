// src/types.ts
export interface JobData {
	id: number;
	company: string;
	logo: string;
	new: boolean;
	featured: boolean; // Ändra från 'boolean | undefined' till 'boolean'
	position: string;
	role: string;
	level: string;
	postedAt: string;
	contract: string;
	location: string;
	languages: string[];
	tools: string[];
}
