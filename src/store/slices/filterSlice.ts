import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
	keywords: string[];
	searchTerm: string;
}

const initialState: FilterState = {
	keywords: [],
	searchTerm: '',
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setKeywords(state, action: PayloadAction<string[]>) {
			state.keywords = action.payload;
		},
		setSearchTerm(state, action: PayloadAction<string>) {
			state.searchTerm = action.payload;
		},
	},
});

export const { setKeywords, setSearchTerm } = filterSlice.actions;
export default filterSlice.reducer;
