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
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {status ? (
            <div>
              <h3>An error occurred!</h3>
              <button onClick={() => dispatch(clearStatusState())} className="bg-purple-500 text-white px-4 py-2 rounded-full mt-2">
                Try again!
              </button>
            </div>
          ) : (
            <>
              <div className="text-center">
              <h1 className="text-3xl font-bold mb-4 text-purple-500">Отлично!</h1>
              <h3 className="text-xl text-purple-500">Теперь введите свою почту</h3>

                <input
                  type="email"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder="Email"
                  className="border p-2 mb-4"
                />
                <input
                  type="password"
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  placeholder="Password"
                  className="border p-2 mb-4"
                />
                <input
                  type="password"
                  onChange={(e) => setUser({ ...user, password2: e.target.value })}
                  placeholder="Confirm Password"
                  className="border p-2 mb-4"
                />
                <button onClick={() => dispatch(registerAccount({ user, navigate }))} className="bg-purple-500 text-white text-2xl font-bold my-4 rounded-full py-2 px-4 w-80">
                  Register
                </button>
              </div>

              <span>--</span>
              <button className="text-purple-500"  onClick={logout}>Logout</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Register;
