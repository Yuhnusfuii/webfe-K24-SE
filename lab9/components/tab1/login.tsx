"use client";

import { useDispatch, useSelector } from "react-redux";
import { login, getMe } from "@/lib/auth/auth-slice";
import { AppDispatch, RootState } from "@/lib/store";

export default function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { user, loading } = useSelector(
    (state: RootState) => state.auth
  );

  const handleLogin = async () => {
    const result = await dispatch(
      login({ username: "emilys", password: "emilyspass" })
    );

    if (login.fulfilled.match(result)) {
      dispatch(getMe());
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button className="bg-black text-slate-100" onClick={handleLogin} disabled={loading}>
        Login
      </button>

      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
    </div>
  );
}
