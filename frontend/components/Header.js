import { MenuIcon, SearchIcon } from "@heroicons/react/solid";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { CogIcon, UserCircleIcon, LogoutIcon } from "@heroicons/react/outline";
import cookie from "js-cookie";
import router from "next/router";
import Items from "./Items";

export default function Header({ data, token }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(async () => {
    const res = await fetch(
      `https://google-docs-mern.herokuapp.com/api/users/me`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    const data = await res.json();

    setUser(data);
  }, []);

  const logoutUser = () => {
    cookie.remove("token");

    router.push("/login");
  };

  const search = (e) => {
    e.preventDefault();

    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="sticky top-0 z-50 px-4 py-2 bg-white shadow-md flex items-center">
      <div className="flex items-center space-x-3">
        <Button className="cursor-pointer hidden sm:flex">
          <MenuIcon className="h-7 text-gray-600" />
        </Button>
        <a href="/">
          <img
            className="h-10"
            src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
            alt=""
            aria-hidden="true"
          />
        </a>
        <h1 className="text-gray-600 text-2xl hidden md:flex">Docs</h1>
      </div>
      <div className="flex flex-grow relative items-center bg-gray-100 mx-5 md:mx-20 rounded-lg py-2 text-gray-700 text-base focus-within:shadow-md focus-within:bg-white transition">
        <Button
          className="rounded-full mx-2 sm:mx-4"
          style={{ minWidth: "12px" }}
        >
          <SearchIcon className="h-7 text-gray-600" />
        </Button>
        <input
          type="text"
          placeholder="Search"
          className="flex-grow outline-none bg-transparent w-2"
          value={wordEntered}
          onChange={search}
        />
        <div className="absolute w-max left-5 md:left-20 top-12 bg-white rounded-lg">
          {filteredData.length != 0 &&
            filteredData.slice(0, 5).map((value) => {
              return (
                <a
                  key={value._id}
                  href={`/doc/${value._id}`}
                  className="max-w-3xl flex items-center cursor-pointer p-2 hover:bg-gray-200 rounded-lg"
                >
                  <img
                    src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
                    alt=""
                    className="h-8"
                  />
                  <p className="text-sm text-gray-700">{value.name}</p>
                </a>
              );
            })}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button className="rounded-full" style={{ minWidth: "12px" }}>
          <img
            src="/apps.svg"
            className="h-7 hidden sm:flex cursor-pointer"
            alt=""
          />
        </Button>
        <div className="relative cursor-pointer ml-2">
          {user.profilePic !== "" ? (
            <img
              src={user.profilePic}
              className="h-12 w-12 rounded-full"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <UserCircleIcon
              className="h-10 rounded-full text-gray-600"
              onClick={() => setOpen(!open)}
            />
          )}
          <div
            className={
              open
                ? "flex absolute w-36 right-0 bg-gray-200 rounded-lg flex-col"
                : "hidden"
            }
          >
            <Items text="Settings" Icon={CogIcon} href="/settings" />
            <button onClick={logoutUser}>
              <Items text="Logout" Icon={LogoutIcon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
