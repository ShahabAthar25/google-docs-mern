import { useState } from "react";
import router from "next/router";
import { Button } from "@mui/material";
import cookie from "js-cookie";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (data.message) return setError(data.message);

    cookie.set("token", data.token);

    router.push("/");
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100 flex-col">
      <form className="flex flex-col space-y-8">
        <input
          type="text"
          placeholder="Email"
          className="p-4 outline-none border-b-2 rounded-lg focus-within:shadow-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 outline-none border-b-2 rounded-lg focus-within:shadow-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          className="bg-blue-600 hover:bg-blue-700 hover:shadow-lg"
          onClick={handleSubmit}
        >
          LogIn
        </Button>
      </form>
      {error !== "" ? (
        <>
          <p className="pt-6 text-base text-red-700">{error}</p>
        </>
      ) : (
        <div></div>
      )}
      <p className="text-sm text-gray-600 py-6">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-700 underline">
          Signup
        </a>
      </p>
    </div>
  );
}
