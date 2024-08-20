"use client";

import { StrapiImage } from "@/components/StrapiImage";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Image = {
  id: number;
  url: string;
  alternativeText: string | null;
};

type Testimonial = {
  id: number;
  title: string;
  image: Image;
};

type Client = {
  id: number;
  name: string;
  logo: Image;
};

type BankingSection7 = {
  id: number;
  __component: "banking.banking-section-7";
  title: string;
  Testimonial: Testimonial[];
  Clients: Client[];
};

const Section7 = ({ data }: { data: BankingSection7 }) => {
  // console.dir(data, { depth: null });
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <section id={data.__component} className="container">
      <div className="grid pb-7 testimonial-carosuel lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h4 className=" text-4xl xl:text-6xl font-bold">
              Find our Customers kind Words.
            </h4>
          </div>
          <div className="flex items-start gap-2">
            <div>
              <svg
                className=" w-12 h-12"
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                viewBox="0 0 62 62"
                fill="none"
              >
                <circle cx="31" cy="31" r="31" fill="black" />
                <path
                  d="M37.0215 17.9805H39.5117V39.5137H31.9922L37.0215 17.9805ZM25.0098 17.9805H27.5V39.5137H19.9805L25.0098 17.9805Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="max-w-[457px]">
              <p className="text-xl font-normal leading-[160%]">
                {data.Testimonial[activeIndex].title}
              </p>
              <div className="dots pt-20 flex items-center gap-2">
                {data.Testimonial.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={cn(
                      "w-3 h-3 cursor-pointer rounded-full",
                      index === activeIndex
                        ? "bg-black"
                        : "border border-black bg-transparent"
                    )}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" relative h-[559px]">
          <StrapiImage
            alt={data.Testimonial[activeIndex].image.alternativeText || ""}
            width={672}
            className="absolute -z-10 w-full h-full inset-0 object-cover"
            height={559}
            src={data.Testimonial[activeIndex].image.url}
          />
          <div className="bg-black p-4 absolute left-0 lg:-left-6 -bottom-10">
            <Image
              src={"/images/tallyfast.png"}
              alt="tallyfast"
              width={125}
              height={52}
              className=" object-cover max-w-[125px]"
            />
            <div className="flex items-center gap-2 justify-between">
              <StarIcon size={16} color="#FFE86B" />
              <StarIcon size={16} color="#FFE86B" />
              <StarIcon size={16} color="#FFE86B" />
              <StarIcon size={16} color="#FFE86B" />
              <StarIcon size={16} color="#FFE86B" />
            </div>
            <p className="text-sm font-normal text-white">Latest avg rating</p>
          </div>
        </div>
      </div>
      <div className=" py-10">
        <div>
          <h4 className="text-xl xl:text-2xl font-normal">
            <b className="text-2xl underline xl:text-3xl">150,000+</b> Client
            all over the world.
          </h4>
        </div>
        <div className="flex pt-1 items-center justify-between flex-wrap gap-6">
          {data?.Clients.map((client, index) => (
            <StrapiImage
              key={client.id}
              src={client.logo.url}
              alt={client.logo.alternativeText || "client name"}
              width={157}
              height={57}
              className="  w-[14%] aspect-[4/3]  object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section7;
