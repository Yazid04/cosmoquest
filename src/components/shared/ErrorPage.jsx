import React from "react";
import { MdOutlineCloudOff } from "react-icons/md";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <article className="w-full h-screen grid place-items-center bg-[#000]">
      <main className="text-Silver flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold md:text-5xl">
          Opps, it's a dead end :(
        </h1>
        {<MdOutlineCloudOff className="my-3 text-9xl" />}
        <Link to={"/"}>Back to Home Page.</Link>
      </main>
    </article>
  );
};

export default ErrorPage;
