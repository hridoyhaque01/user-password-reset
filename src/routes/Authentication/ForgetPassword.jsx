import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ForgetPasword = () => {
  const navigate = useNavigate();
  const { email } = useParams();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    if (password !== confirmPassword) {
      return alert("password doesn't match");
    }

    const data = {
      email: email + "@gmail.com",
      newPassword: password,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(data));

    try {
      const result = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/users/reset`,
        {
          method: "PATCH",
          body: formData,
        }
      );
      if (result.ok) {
        const data = await result.json();
        const modifiedCount = data.modifiedCount;
        console.log("Modified Count:", modifiedCount);
      } else {
        console.log("Failed to update Password");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="h-screen bg-authBg bg-no-repeat bg-cover bg-whiteSemi w-full px-6 font-ubuntu">
      <div className="w-full h-full px-6 flex items-center justify-center overflow-hidden ">
        <div className="">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-black font-bold mt-2">
              Reset Your Password
            </h1>
          </div>

          <div className=" w-full max-w-[30rem] py-12 px-6 sm:px-10 rounded-lg bg-white shadow-sm mx-auto">
            <form
              className="flex flex-col w-full gap-4 "
              onSubmit={handleLogin}
            >
              <div>
                <p className="text-sm text-pureBlackColor font-bold mb-2">
                  New Password
                </p>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  className="input bg-transparent border border-fadeReg focus:outline-none w-full p-3 rounded-md"
                  autoComplete="off"
                />
              </div>
              <div>
                <p className="text-sm text-pureBlackColor font-bold mb-2">
                  Confirm Password
                </p>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  required
                  className="input bg-transparent border border-fadeReg focus:outline-none w-full p-3 rounded-md"
                  autoComplete="off"
                />
              </div>
              {/* <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  placeholder="Password"
                  className=" bg-whiteLow "
                />
                <p className="text-blackSemi">Remeber me</p>
              </div> */}
              <button
                className="mt-4 mb-6 py-3.5 rounded-full bg-primaryColor text-white border-0 font-bold"
                type="submit"
                // disabled={isLoading}
              >
                Reset Password
              </button>

              {/* {isError && <p>{error}</p>} */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPasword;
