import { MenuIcon, SearchIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <div className="sticky top-0 px-8 py-5 bg-white shadow-md flex items-center">
      <div className="flex items-center space-x-3">
        <MenuIcon className="h-8 text-gray-600" />
        <img
          className="h-12"
          src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
          alt=""
          aria-hidden="true"
        />
        <h1 className="text-gray-700 text-2xl hidden md:flex">Docs</h1>
      </div>
      <div className="flex items-center flex-grow bg-gray-100 mx-5 md:mx-20 rounded-lg py-2 text-gray-700 text-base focus-within:shadow-md">
        <SearchIcon className="h-8 text-gray-600 mx-2" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow outline-none bg-transparent w-2"
        />
      </div>
      <div className="flex items-center space-x-2">
        <img src="/apps.svg" className="h-8" alt="" />
        <img
          src="https://lh3.googleusercontent.com/ogw/ADea4I7FQJJVXJTM9XLAfzJV4v6nm7nHHBOJ13_DWzxf=s32-c-mo"
          className="h-12 rounded-full "
        />
      </div>
    </div>
  );
}
