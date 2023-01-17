import React, { useState } from "react";

const SignUpPage = () => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const getFormData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setSignUpData({ ...signUpData, [name]: value });
  };

  const { name, email, mobile, password } = signUpData;

  const submitSignUpForm = async () => {
    if (name && email && mobile && password) {
      const response = await fetch(
        "https://reactsignupform-5cf8e-default-rtdb.firebaseio.com/ReactSignUpForm.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            mobile,
            password,
          }),
        }
      );
      response &&
        setSignUpData({
          name: "",
          email: "",
          mobile: "",
          password: "",
        });
      alert("Data Sent Successfully...");
      console.log(response.body);
    } else {
      alert("Data Must be filled...");
    }
  };

  return (
    <>
      <div className="bg-zinc-100 h-screen w-full">
        <div className="flex flex-col md:flex-row items-center justify-center space-x-10 h-full">
          <div className="bg-white flex flex-col px-3 py-5 mx-3 lg:p-10 shadow-lg md:shadow-2xl rounded-md">
            <h1 className="text-center text-3xl md:text-4xl font-bold">
              Sign Up Now
            </h1>
            <p className="text-center p-4">
              Sign up to see photos and videos from your friends.
            </p>
            <input
              type="text"
              placeholder="Full Name"
              autoComplete="off"
              name="name"
              value={signUpData.name}
              onChange={getFormData}
              className="bg-slate-100 p-2 my-2 border-2 border-slate-100 outline-none focus:border-b-2 focus:border-red-300"
            />
            <input
              type="email"
              placeholder="Email ID"
              autoComplete="off"
              name="email"
              value={signUpData.email}
              onChange={getFormData}
              className="bg-slate-100 p-2 my-2 border-2 border-slate-100 outline-none focus:border-b-2 focus:border-red-300"
            />
            <input
              type="text"
              placeholder="Phone Number"
              autoComplete="off"
              name="mobile"
              value={signUpData.mobile}
              onChange={getFormData}
              className="bg-slate-100 p-2 my-2 border-2 border-slate-100 outline-none focus:border-b-2 focus:border-red-300"
            />
            <input
              type="password"
              placeholder="Password"
              autoComplete="off"
              name="password"
              value={signUpData.password}
              onChange={getFormData}
              className="bg-slate-100 p-2 my-2 border-2 border-slate-100 outline-none focus:border-b-2 focus:border-red-300"
            />
            <button
              onClick={submitSignUpForm}
              className="bg-gradient-to-r from-red-500 to-orange-400 font-bold text-white w-fit mx-auto px-8 py-2 rounded-3xl my-3 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 hover:scale-105"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;