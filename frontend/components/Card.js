import { DotsVerticalIcon, MenuAlt2Icon } from "@heroicons/react/solid";
import { Button } from "@mui/material";

export default function Card({ text, href }) {
  return (
    <a
      href={`doc/${href}` || "#"}
      className="w-44 border hover:border-blue-700 cursor-pointer p-4"
    >
      <h1 className="truncate">{text}</h1>
      <div className="flex items-center justify-between w-full">
        <div className="bg-blue-700 w-4 my-2 rounded-sm">
          <MenuAlt2Icon className="text-white" />
        </div>
        <Button className="rounded-full" style={{ minWidth: "12px" }}>
          <DotsVerticalIcon className="h-4 text-gray-600" />
        </Button>
      </div>
    </a>
  );
}
