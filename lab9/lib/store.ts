import { configureStore} from '@reduxjs/toolkit';
import themeReducer from './theme/theme-slide';
import authReducer from '@/lib/auth/auth-slice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;