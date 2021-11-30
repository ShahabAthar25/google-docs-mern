import Header from "../components/Header";
import { Button } from "@mui/material";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="bg-gray-100 pb-4">
        <div className="max-w-6xl mx-auto">
          <div className="py-6 flex items-center justify-between mx-8">
            <h1 className="text-gray-600 text-lg">Start a new document</h1>
            <Button className="rounded-full" style={{ minWidth: "12px" }}>
              <DotsVerticalIcon className="h-6 text-gray-600" />
            </Button>
          </div>
          <div className="mx-8">
            <div className="w-44 cursor-pointer">
              <img src="https://links.papareact.com/pju" />
              <p className="text-base py-2 font-normal">Blank</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
