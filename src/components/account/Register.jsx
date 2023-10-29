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
              <div className="flex flex-col items-center mt-40 h-screen">
  <h1 className="text-2xl font-sans text-purple-500 ">ОТЛИЧНО!</h1>
  <h3>Теперь веди свою почту </h3>

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
    onChange={(e) => setUser({ ...user, password2: e.target.value })}
    placeholder="Confirm Password"
  />
  <button
    onClick={() => dispatch(registerAccount({ user, navigate }))}
    className="bg-purple-500 text-white text-2xl font-bold my-4 rounded-full py-2 px-4 w-80"
  >
    Register
  </button>
</div>

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
