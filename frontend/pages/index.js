import Header from "../components/Header";
import { Button } from "@mui/material";
import { DotsVerticalIcon } from "@heroicons/react/solid";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto">
        <div className="py-6 flex items-center justify-between">
          <h1 className="text-gray-600 text-lg">Start a new document</h1>
          <Button className="rounded-full">
            <DotsVerticalIcon className="h-6 text-gray-600" />
          </Button>
        </div>
      </div>
    </div>
  );
}
