import Header from "../components/Header";
import { Button } from "@mui/material";
import {
  DotsVerticalIcon,
  FolderIcon,
  SortAscendingIcon,
  ServerIcon,
} from "@heroicons/react/solid";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="pb-8">
      <Header />
      <section className="bg-gray-100 pb-4">
        <div className="max-w-6xl mx-auto">
          <div className="py-6 flex items-center justify-between mx-8">
            <h1 className="text-gray-600 text-lg truncate">
              Start a new document
            </h1>
            <Button className="rounded-full" style={{ minWidth: "12px" }}>
              <DotsVerticalIcon className="h-6 text-gray-600" />
            </Button>
          </div>
          <div className="mx-8">
            <div className="w-44 cursor-pointer">
              <img
                lazyloadind="true"
                src="https://links.papareact.com/pju"
                className="border hover:border-blue-300"
              />
              <p className="text-base py-2 font-normal">Blank</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto">
          <div className="py-6 flex items-center flex-col sm:flex-row justify-between mx-8">
            <h1 className="text-gray-700 text-lg truncate">Recent Documents</h1>
            <div className="flex items-center">
              <Button className="rounded-full" style={{ minWidth: "12px" }}>
                <ServerIcon className="h-6 text-gray-500" />
              </Button>
              <Button className="rounded-full" style={{ minWidth: "12px" }}>
                <SortAscendingIcon className="h-6 text-gray-500" />
              </Button>
              <Button className="rounded-full" style={{ minWidth: "12px" }}>
                <FolderIcon className="h-6 text-gray-500" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 mx-8 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </div>
  );
}
