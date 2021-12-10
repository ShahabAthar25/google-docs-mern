import {
  DotsVerticalIcon,
  MenuAlt2Icon,
  TrashIcon,
} from "@heroicons/react/solid";
import { Button } from "@mui/material";
import { useState } from "react";
import router from "next/router";
import Items from "./Items";

export default function Card({ text, href, id, token }) {
  const [open, setOpen] = useState(false);

  const deleteDoc = async () => {
    const response = await fetch(
      `https://google-docs-mern.herokuapp.com/api/docs/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );

    setOpen(false);

    router.push("/");
  };

  return (
    <div className="w-44 border hover:border-blue-700 p-4">
      <a href={`doc/${href}` || "#"} className="cursor-pointer">
        <h1 className="truncate">{text}</h1>
      </a>
      <div className="flex items-center justify-between w-full">
        <a
          href={`doc/${href}` || "#"}
          className="bg-blue-700 w-4 my-2 rounded-sm"
        >
          <MenuAlt2Icon className="text-white" />
        </a>
        <div className="relative">
          <Button
            className="rounded-full"
            style={{ minWidth: "12px" }}
            onClick={() => setOpen(!open)}
          >
            <DotsVerticalIcon className="h-4 text-gray-600" />
          </Button>
          <div
            className={
              open
                ? "absolute z-40 flex flex-col w-32 right-0 bg-gray-200 rounded-lg"
                : "hidden"
            }
          >
            <button onClick={deleteDoc}>
              <Items text="Delete" Icon={TrashIcon} onClick={deleteDoc} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
