import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearStatusState } from "../../store/account/accountSlice";
import { loginAccount } from "../../store/account/accountActions";
import LoadingPage from "../../pages/LoadingPage";

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
        <LoadingPage />
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
            <div className=" w-2/6 -mt-64">
              <h3 className="text-violet-400 text-center uppercase font-bold text-4xl mb-4">
                Sign in
              </h3>
              <div className="flex flex-col w-full mt-12 mb-9">
                <input
                  type="text"
                  placeholder="Email "
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  className="border p-2 mb-4 text-center lowercase text-violet-500"
                />
                <input
                  type="password"
                  placeholder="password"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  className="border p-2 mb-4 rounded text-center lowercase text-violet-500"
                />
              </div>

              <div className="flex justify-between items-center mb-4">
                <a
                  onClick={() => navigate("/recForm")}
                  className="text-violet-400 font-bold uppercase hover:text-violet-500 cursor-pointer "
                >
                  forgot?
                </a>
                <button
                  onClick={() => dispatch(loginAccount({ user, navigate }))}
                  className="bg-violet-400 w-28 text-white px-4 py-2 rounded font-bold hover:bg-violet-500"
                >
                  login
                </button>
              </div>
              <button
                onClick={() => navigate("/register")}
                className="hover:underline text-violet-500 text-xs uppercase font-light flex items-center justify-center"
              >
                Already haven't an account? Register!
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Login;
