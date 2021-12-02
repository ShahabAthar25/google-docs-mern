import { MenuIcon, SearchIcon } from "@heroicons/react/solid";
import { Button } from "@mui/material";
import { useState } from "react";
import { CogIcon, UserCircleIcon, LogoutIcon } from "@heroicons/react/outline";
import cookie from "js-cookie";
import router from "next/router";
import Items from "./Items";

export default function Header() {
  const [open, setOpen] = useState(false);

  const logoutUser = () => {
    cookie.remove("token");

    router.push("/login");
  };

  return (
    <div className="sticky top-0 z-50 px-4 py-2 bg-white shadow-md flex items-center">
      <div className="flex items-center space-x-3">
        <Button className="cursor-pointer hidden sm:flex">
          <MenuIcon className="h-7 text-gray-600" />
        </Button>
        <img
          className="h-10"
          src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
          alt=""
          aria-hidden="true"
        />
        <h1 className="text-gray-600 text-2xl hidden md:flex">Docs</h1>
      </div>
      <div className="flex items-center flex-grow bg-gray-100 mx-5 md:mx-20 rounded-lg py-2 text-gray-700 text-base focus-within:shadow-md focus-within:bg-white transition">
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
        />
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
          <img
            src="https://lh3.googleusercontent.com/ogw/ADea4I7FQJJVXJTM9XLAfzJV4v6nm7nHHBOJ13_DWzxf=s32-c-mo"
            className="h-12 rounded-full"
            onClick={() => setOpen(!open)}
          />
          <div
            className={
              open
                ? "flex absolute w-36 right-0 bg-gray-200 rounded-lg flex-col"
                : "hidden"
            }
          >
            <Items text="Profile" Icon={UserCircleIcon} href="/profile" />
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
