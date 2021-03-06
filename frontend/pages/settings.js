import { useState } from "react";
import Header from "../components/Header";

export default function settings({ docs, token }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleUsernameChange = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `https://google-docs-mern.herokuapp.com/api/users/`,
      {
        method: "PUT",
        body: JSON.stringify({ username }),
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );

    const data = await res.json();

    setUsername("");
    alert(data.message);
  };

  const handleEmailChange = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `https://google-docs-mern.herokuapp.com/api/users/`,
      {
        method: "PUT",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );

    const data = await res.json();

    setEmail("");
    alert(data.message);
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (confirmPassword !== password) return alert("Password must match");

    const res = await fetch(
      `https://google-docs-mern.herokuapp.com/api/users/`,
      {
        method: "PUT",
        body: JSON.stringify({ password }),
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );

    const data = await res.json();

    setPassword("");
    setConfirmPassword("");
    alert(data.message);
  };

  const uploadImage = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `https://google-docs-mern.herokuapp.com/api/users/photo`,
      {
        method: "POST",
        body: JSON.stringify({ url: imageURL }),
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );

    const data = await res.json();

    setImageURL("");
    alert(data.message);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-100">
      <Header data={docs} token={token} />
      <div className="flex items-center justify-center flex-col w-screen h-full rounded-md">
        <form className="px-4 py-8 my-8 bg-white shadow-lg rounded-md flex flex-col w-4/6">
          <h1 className="text-lg text-gray-600 mb-4 truncate">
            Change Username
          </h1>
          <input
            type="text"
            placeholder="New Username"
            className="outline-none border p-2 rounded-md flex-grow"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            type="submit"
            className="hidden"
            onClick={handleUsernameChange}
          />
        </form>
        <form className="px-4 py-8 my-8 bg-white shadow-lg rounded-md flex flex-col w-4/6">
          <h1 className="text-lg text-gray-600 mb-4 truncate">Change Email</h1>
          <input
            type="text"
            placeholder="New Email"
            className="outline-none border p-2 rounded-md flex-grow"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="hidden"
            onClick={handleEmailChange}
          />
        </form>
        <form className="px-4 py-8 my-8 bg-white shadow-lg rounded-md flex flex-col w-4/6 space-y-4">
          <h1 className="text-lg text-gray-600 truncate">Change Password</h1>
          <input
            type="password"
            placeholder="New Password"
            className="outline-none border p-2 rounded-md flex-grow"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="outline-none border p-2 rounded-md flex-grow"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="submit"
            className="hidden"
            onClick={handlePasswordChange}
          />
        </form>
        <form className="px-4 py-8 my-8 bg-white shadow-lg rounded-md flex flex-col w-4/6 space-y-4">
          <h1 className="text-lg text-gray-600 truncate">
            Change Profile Picture
          </h1>
          <input
            type="text"
            placeholder="Enter Image Url"
            className="outline-none border p-2 rounded-md flex-grow"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
          <button type="submit" onClick={uploadImage} />
        </form>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://google-docs-mern.herokuapp.com/api/docs/user/me`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: context.req.cookies.token,
      },
    }
  );
  const docs = await response.json();

  return {
    props: {
      docs,
      token: context.req.cookies.token,
    },
  };
}
