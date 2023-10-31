import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerAccount } from "../../store/account/accountActions";
import { clearStatusState } from "../../store/account/accountSlice";
import { logout } from "../../helpers/functions";
import LoadingPage from "../../pages/LoadingPage";

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
       <LoadingPage />
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
              <div className="text-center w-2/6 -mt-64">
              <h1 className="text-violet-500 text-center uppercase font-bold text-4xl mb-4">greate!</h1>
              <h3 className="mt-4 text-lg text-violet-400 uppercase font-bold">now enter your email</h3>
              <div className="flex flex-col w-full mt-12 mb-9 ">
                <input
                  type="email"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder="Email"
                    className="border p-2 mb-4 text-center lowercase text-violet-500"
                />
                <input
                  type="password"
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  placeholder="Password"
                    className="border p-2 mb-4 text-center lowercase text-violet-500"
                />
                <input
                  type="password"
                  onChange={(e) => setUser({ ...user, password2: e.target.value })}
                  placeholder="Confirm Password"
                    className="border p-2 mb-4 text-center lowercase text-violet-500"
                />
                </div>
                <button onClick={() => dispatch(registerAccount({ user, navigate }))}  className="bg-violet-400 w-56 uppercase text-white px-4 py-2 rounded font-bold hover:bg-violet-500">
                  Register
                </button>
              </div>
              {/* <span className="text-white font-bold">or</span> */}
            
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Register;
