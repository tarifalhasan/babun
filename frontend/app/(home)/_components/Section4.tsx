"use client";

import { StrapiImage } from "@/components/StrapiImage";
import ArrowButton from "@/components/arrow-button";
import { getStrapiMedia } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useState } from "react";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface Media {
  id: number;
  url: string;
  alternativeText: string | null;
}

interface ListItem {
  id: number;
  title: string;
}

interface BankingSection4 {
  id: number;
  __component: string;
  subTitle: string;
  title: string;
  thubnail: Media;
  video: Media;
  list: ListItem[];
}

const Section4 = ({ data }: { data: BankingSection4 }) => {
  const videoUrl = getStrapiMedia(data.video.url);
  const [isPlaying, setIsPlaying] = useState(false);

  //   console.log(data.list);
  return (
    <section className="grid container pb-8 lg:pb-16 lg:grid-cols-2">
      <div className="">
        {isPlaying ? (
          <ReactPlayer
            url={videoUrl as string}
            playing={isPlaying}
            controls
            width="100%"
            height="455px"
          />
        ) : (
          <div className=" relative" onClick={() => setIsPlaying(true)}>
            <StrapiImage
              src={data.thubnail.url}
              alt=",
         dfdf"
              width={668}
              height={455}
              className=" object-cover max-h-[501px]"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="91"
              height="91"
              className=" absolute top-1/2 -translate-y-1/2 left-1/2  -translate-x-1/2 cursor-pointer"
              viewBox="0 0 91 91"
              fill="none"
            >
              <circle cx="45.5" cy="45.5" r="45" fill="white" stroke="white" />
              <path
                d="M36.5015 64.8195V27.0308L62.3238 47.4168L36.5015 64.8195Z"
                stroke="black"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="bg-[#FFF2AC] space-y-4 px-5 xl:px-7 xl:py-8 py-5">
        <div>
          <h2 className="font-bold max-w-[536px]  text-3xl xl:text-6xl leading-[115%]">
            {data.title}
          </h2>
        </div>
        <p className="leading-[154%] max-w-[536px] text-xl font-normal">
          {data.subTitle}
        </p>
        <ul className="flex flex-col space-y-3">
          {data.list.map((li, inde) => (
            <li
              key={inde}
              className=" bg-white rounded-full px-2 py-1 inline-flex items-center gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <circle cx="14" cy="14" r="14" fill="#FFF2AC" />
                <path
                  d="M8.40015 13.3654L12.3201 17.7334L20.1601 9.33344"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="flex-1 text-sm lg:text-xl font-medium">
                {li.title}
              </span>
            </li>
          ))}
        </ul>
        <div className=" pt-8">
          <ArrowButton text="More about us" />
        </div>
      </div>
    </section>
  );
};

export default Section4;
