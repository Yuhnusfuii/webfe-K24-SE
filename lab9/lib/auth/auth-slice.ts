import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/api/api";

interface AuthState {
  user: any;
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  loading: false,
};

/* LOGIN */
export const login = createAsyncThunk(
  "auth/login",
  async (
    data: { username: string; password: string },
    thunkAPI
  ) => {
    const res = await api.post("/auth/login", data);
    return res.data;
  }
);

/* GET USER INFO */
export const getMe = createAsyncThunk(
  "auth/getMe",
  async () => {
    const res = await api.get("/auth/me");
    return res.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;