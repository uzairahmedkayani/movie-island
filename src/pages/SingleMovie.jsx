import React from "react";
import NavBar from "../components/NavBar";
import Avatar from "../components/Avatar";

export default function SingleMovie() {
  return (
    <>
      <NavBar />
      <div className="px-[200px] mb-7">
        <iframe
          width="100%"
          height="550"
          className="rounded-2xl"
          src="https://www.youtube.com/embed/TEHWDA_6e3M?si=x4cHgh-ex8FgvHtb"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <h3 className="mt-5 mb-2 text-3xl">The Brave</h3>
        <p className="text-gray-500">
          The description of this movie is populated here
        </p>

        <h3 className="text-2xl mt-5 mb-2">Comments</h3>
        <input className='border-0 border-b-[1px] border-b-[#fff] p-[10px] pl-0 w-[40%] outline-0' type="text" placeholder="Write your comment here..."/>

        <div className="comments w-[70%] mt-5">
            <div className="comment flex items-center p-[10px] rounded-sm cursor-pointer bg-[#27272A] mb-2">
                <Avatar />
                <div className="ml-3">
                    <h4 className="text-lg font-[500]">John Doe</h4>
                    <p className="text-gray-300">This movie was amazing!</p>
                </div>
            </div>
            <div className="comment flex items-center p-[10px] rounded-sm cursor-pointer bg-[#27272A] mb-2">
                <Avatar />
                <div className="ml-3">
                    <h4 className="text-lg font-[500]">Jerry</h4>
                    <p className="text-gray-300">Great movie for kids</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
