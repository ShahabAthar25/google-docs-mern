import {
  PresentationChartBarIcon,
  ChevronDownIcon,
  AnnotationIcon,
} from "@heroicons/react/outline";
import { Button } from "@mui/material";

export default function index() {
  return (
    <div>
      <header className="w-screen bg-white border p-2 flex justify-between items-center">
        <div className="flex">
          <div className="mr-4">
            <img
              className="h-12"
              src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl text-gray-500 font-light">Untitled</h1>
            <div className="space-x-3 flex">
              <p className="text-sm cursor-pointer">File</p>
              <p className="text-sm cursor-pointer">Edit</p>
              <p className="text-sm cursor-pointer">View</p>
              <p className="text-sm cursor-pointer">Insert</p>
              <p className="text-sm cursor-pointer">Format</p>
              <p className="text-sm cursor-pointer">Tools</p>
              <p className="text-sm cursor-pointer">Add-ons</p>
              <p className="text-sm cursor-pointer">Help</p>
            </div>
          </div>
        </div>
        <div className="space-x-4 flex">
          <Button>
            <AnnotationIcon className="h-7 text-black" />
          </Button>
          <Button variant="outlined" className="rounded-full">
            <PresentationChartBarIcon className="h-6" />
            <ChevronDownIcon className="h-4" />
          </Button>
          <Button variant="contained">
            <h1>Share</h1>
          </Button>
          <img
            src="https://lh3.googleusercontent.com/ogw/ADea4I7FQJJVXJTM9XLAfzJV4v6nm7nHHBOJ13_DWzxf=s32-c-mo"
            className="h-10 rounded-full"
            onClick={() => setOpen(!open)}
          />
        </div>
      </header>
    </div>
  );
}
