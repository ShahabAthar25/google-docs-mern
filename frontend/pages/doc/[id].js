import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import {
  PresentationChartBarIcon,
  ChevronDownIcon,
  AnnotationIcon,
} from "@heroicons/react/outline";
import { Button } from "@mui/material";
import TextEditor from "../../components/TextEditor";

export default function index({ post, token }) {
  const router = useRouter();
  const { id } = router.query;

  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:5000/api/docs/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: input,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    setShow(!show);

    router.push(`/doc/${id}`);
  };

  return (
    <div className="bg-[#F8F9Fa] h-screen">
      <Head>
        <title>{post.name} - Google Docs Clone</title>
      </Head>
      <header className="bg-white border p-2 flex justify-between items-center">
        <div className="flex">
          <div className="mr-4 cursor-pointer">
            <a href="/">
              <img
                className="h-12"
                src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
                alt=""
                aria-hidden="true"
              />
            </a>
          </div>
          <div className="flex flex-col items-baseline mt-2 md:mt-0">
            {show ? (
              <>
                <form action="">
                  <input
                    type="text"
                    placeholder="Change Name"
                    className="px-2 py-1 shadow-md outline-none"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <Button type="submit" onClick={handleSubmit} />
                </form>
              </>
            ) : (
              <button onClick={() => setShow(!show)}>
                <h1 className="text-2xl text-gray-500 font-light">
                  {post.name}
                </h1>
              </button>
            )}
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
