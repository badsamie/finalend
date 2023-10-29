import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearStatusState } from "../../store/account/accountSlice";
import { loginAccount } from "../../store/account/accountActions";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { loading, status } = useSelector((state) => state.account);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearStatusState());
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      {loading ? (
        <div className="text-2xl">Loading...</div>
      ) : (
        <>
          {status ? (
            <div className="text-center">
              <h3 className="text-red-500 text-2xl">An error occurred!</h3>
              <button
                onClick={() => dispatch(clearStatusState())}
                className="bg-purple-500 text-white px-4 py-2 mt-2 rounded-full"
              >
                Try again!
              </button>
            </div>
          ) : (
            <div className="text-center">
              <h3 className="text-black text-2xl mb-4">Sig in</h3>
              <input
                type="text"
                placeholder="Email или имя пользователя"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="border p-2 mb-4"
              />
              <input
                type="password"
                placeholder="Пароль"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="border p-2 mb-4"
              />
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={() => dispatch(loginAccount({ user, navigate }))}
                  className="bg-purple-500 text-white px-4 py-2 rounded-full"
                >
                  Войти
                </button>
                <a href="/">Забыли?</a>
              </div>
              <span>Или</span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Login;
