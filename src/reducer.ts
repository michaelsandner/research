import { createSlice } from '@reduxjs/toolkit';

export interface LevelState {
    level: number
}

const initialState: LevelState = { level: 0 };

export const levelSlice = createSlice({
    name: 'level',
    initialState,
    reducers: {
        increase: (state): void => { state.level = state.level + 1 },
        reset: (state): void => { state.level = 0 }
    }
});


