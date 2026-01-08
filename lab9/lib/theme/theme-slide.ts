import {createSlice} from "@reduxjs/toolkit"

type ThemeState = {
    mode: "light" | "dark";
};

const initialState: ThemeState = {
    mode : "light",
};

const ThemeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme(state) {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLight: (state) => {
            state.mode = "light";
        },
        setDark: (state) => {
            state.mode = "dark";
        },
    },
});

export const {toggleTheme, setLight, setDark} = ThemeSlice.actions;
export default ThemeSlice.reducer;