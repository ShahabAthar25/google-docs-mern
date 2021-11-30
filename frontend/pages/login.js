import { useState } from "react";
import { Button } from "@mui/material";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:5000/api/auth/login`);
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <form className="flex flex-col space-y-8">
        <input
          type="text"
          placeholder="Email"
          className="p-4 outline-none border-b-2 rounded-lg focus-within:shadow-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
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
    </div>
  );
}
