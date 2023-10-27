import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerAccount } from "../../store/account/accountActions";
import { clearStatusState } from "../../store/account/accountSlice";
import { logout } from "../../helpers/functions";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, status } = useSelector((state) => state.account);
  const [user, setUser] = useState({
    email: "",
    password: "",
    password2: "",
  });

  useEffect(() => {
    dispatch(clearStatusState());
  }, []);

  return (
    <>
      {loading ? (
        <div>loading</div>
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
            <>
              <h1>register</h1>
              <input
                type="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Email"
              />
              <input
                type="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Password"
              />
              <input
                type="password"
                onChange={(e) =>
                  setUser({ ...user, password2: e.target.value })
                }
                placeholder="Confirm Password"
              />
              <button
                onClick={() => dispatch(registerAccount({ user, navigate }))}
              >
                Register
              </button>
              <span>--</span>
              <button onClick={logout}>Logout</button>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Register;
