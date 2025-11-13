"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const AdminAuth = () => {
  const [email, setEmail] = useState(""); // Changed to email
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter(); // Initialize useRouter

  const handleEmailChange = (e) => { // Dedicated handler for email
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Use email here
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess(data.prompt);
        // Store token and user data if needed
        // localStorage.setItem('token', data.token);
        // localStorage.setItem('user', JSON.stringify(data.user));
        router.push("/authorizedDashboard");
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Network error or server is down');
    }
  };

  return (
    <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-44 lg:pb-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[500px] rounded-md bg-primary bg-opacity-5 py-10 px-6 dark:bg-dark sm:p-[60px]">
              <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                Sign in to your account
              </h3>
              <p className="mb-11 text-center text-base font-medium text-body-color">
                Login to your account for a faster checkout.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <label
                    htmlFor="email" // Changed htmlFor to email
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    {" "}
                    Your Email{" "} {/* Updated label */}
                  </label>
                  <input
                    type="email" // Changed type to email
                    name="email"
                    placeholder="Enter your Email" // Updated placeholder
                    value={email}
                    onChange={handleEmailChange} // Use handleEmailChange
                    className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                  />
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="password"
                    className="mb-3 block text-sm font-medium text-dark dark:text-white"
                  >
                    {" "}
                    Your Password{" "}
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                  />
                </div>
                <div className="mb-6">
                  <button className="flex w-full items-center justify-center rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                    Sign in
                  </button>
                </div>
              </form>
              {error && (
                <p className="text-center text-base font-medium text-red-500">
                  {error}
                </p>
              )}
              {success && (
                <p className="text-center text-base font-medium text-green-500">
                  {success}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminAuth;
