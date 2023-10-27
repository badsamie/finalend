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
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {status ? (
            <div>
              <h3>An error occurred!</h3>
              <button onClick={() => dispatch(clearStatusState())}>
                Try again!
              </button>
            </div>
          ) : (
            <div>
              <h3>Sign In</h3>
              <input
                type="text"
                placeholder="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <button
                onClick={() => dispatch(loginAccount({ user, navigate }))}
              >
                Login
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Login;
