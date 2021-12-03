import {
  PresentationChartBarIcon,
  ChevronDownIcon,
  AnnotationIcon,
} from "@heroicons/react/outline";
import { Button } from "@mui/material";
import Head from "next/head";
import TextEditor from "../../components/TextEditor";

export default function index({ post, token }) {
  return (
    <div className="bg-[#F8F9Fa] h-screen">
      <Head>
        <title>Untitled - Google Docs Clone</title>
      </Head>
      <header className="bg-white border p-2 flex justify-between items-center">
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
            <div className="space-x-3 hidden md:flex">
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
          <Button className="hidden sm:flex">
            <AnnotationIcon className="h-7 text-black" />
          </Button>
          <Button variant="outlined" className="rounded-full hidden sm:flex">
            <PresentationChartBarIcon className="h-6" />
            <ChevronDownIcon className="h-4" />
          </Button>
          <Button variant="contained" className="hidden sm:flex">
            <h1>Share</h1>
          </Button>
          <img
            src="https://lh3.googleusercontent.com/ogw/ADea4I7FQJJVXJTM9XLAfzJV4v6nm7nHHBOJ13_DWzxf=s32-c-mo"
            className="h-10 rounded-full"
            onClick={() => setOpen(!open)}
          />
        </div>
      </header>
      <TextEditor content={post.content} token={token} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `http://localhost:5000/api/docs/${context.params.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: context.req.cookies.token,
      },
    }
  );
  const post = await res.json();

  return {
    props: {
      post,
      token: context.req.cookies.token,
    },
  };
};
