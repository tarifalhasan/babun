"use client";

import { StrapiImage } from "@/components/StrapiImage";
import AvatarCircles from "@/components/magicui/avatar-circles";
import { ButtonLink } from "@/types";
import Image from "next/image";
import Section1Form from "./Section1Form";

interface Image {
  id: number;
  url: string;
  alternativeText: string | null;
}

interface Clients {
  id: number;
  total_clientfgfgf: string;
  image: {
    data: Image[];
  };
}

interface BankingSection1 {
  id: number;
  __component: string;
  title: string;
  subTitle: string;
  total_country: string;
  active_users: string;
  image: Image;
  image2: Image;
  ButtonLink: ButtonLink;
  Clinets: Clients;
}

const Section1 = ({ data }: { data: BankingSection1 }) => {
  const avatarUrls = data.Clinets.image.data.map((img) => img.url);
  // console.dir(avatarUrls);
  return (
    <section className="container  lg:items-center relative pt-[.5rem] flex gap-2 flex-col lg:flex-row">
      <div className="flex-1 max-w-[325px] space-y-6">
        <div>
          <h2 className="title-heading">{data.title}</h2>
        </div>
        <div>
          <h3 className=" text-3xl font-medium">Join the waitlist</h3>
          <p className=" text-sm font-bold">{data.subTitle}</p>
          <Section1Form />
        </div>
        <div className="flex pb-8 items-center justify-between">
          <div className=" -space-y-1">
            <h4 className=" text-2xl  font-bold text-[#043116]">
              {data.Clinets.total_clientfgfgf}
            </h4>
            <p className=" text-[#373A3299]/60 font-normal text-sm">
              Worldwide clients
            </p>
          </div>
          <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
        </div>
      </div>
      <div className="flex-1"></div>
      <div className="flex-1 flex flex-col items-end ">
        <div className=" space-y-8 max-w-[306px]">
          <div>
            <StrapiImage
              src={data.image2.url}
              alt="dsfs"
              width={380}
              height={270}
            />
          </div>
          <div className=" ma">
            <p className="sub-heading">
              <b>{data?.total_country}</b> countries using our service without
              any hassle.
            </p>
          </div>
          <div className=" gap-4 inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="95"
              height="92"
              viewBox="0 0 95 92"
              fill="none"
            >
              <rect
                x="0.75"
                y="0.75"
                width="93.5"
                height="90.5"
                rx="19.25"
                stroke="black"
                strokeWidth="1.5"
              />
              <path
                d="M20.0209 36.7864L46.7458 69.9856C46.7975 70.0479 46.8624 70.098 46.9359 70.1325C47.0093 70.1669 47.0894 70.1847 47.1705 70.1847C47.2516 70.1847 47.3317 70.1669 47.4051 70.1325C47.4785 70.098 47.5434 70.0479 47.5952 69.9856L75.6776 37.032"
                stroke="black"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M25.4868 26.4515L35.7711 36.2239L47.3256 26.4515L58.2291 36.7864L70.2797 26.4515"
                fill="#FFF2AC"
              />
              <path
                d="M25.4868 26.4515L35.7711 36.2239L47.3256 26.4515L58.2291 36.7864L70.2797 26.4515"
                stroke="black"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
              <path
                d="M35.604 37.0439L46.8409 69.2647C46.8636 69.3314 46.9066 69.3893 46.9639 69.4303C47.0212 69.4713 47.0899 69.4933 47.1604 69.4933C47.231 69.4933 47.2997 69.4713 47.357 69.4303C47.4143 69.3893 47.4573 69.3314 47.48 69.2647C49.9012 62.1926 52.3092 55.0795 54.704 47.9255C55.8815 44.4053 57.0525 40.889 58.2168 37.3767"
                stroke="black"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M75.6779 37.0439H20.176C20.1456 37.0441 20.1157 37.0364 20.0892 37.0216C20.0627 37.0068 20.0405 36.9853 20.0249 36.9593C20.0093 36.9333 20.0007 36.9036 20 36.8733C19.9994 36.843 20.0067 36.813 20.0212 36.7864L25.4868 26.4515C25.5722 26.29 25.7001 26.1548 25.8568 26.0606C26.0135 25.9663 26.193 25.9166 26.3759 25.9167H69.8153C70.0026 25.9176 70.1859 25.9702 70.345 26.0688C70.5041 26.1674 70.6326 26.3081 70.7163 26.4753L75.8287 36.7745C75.8461 36.8011 75.8558 36.832 75.8569 36.8637C75.858 36.8955 75.8503 36.9269 75.8348 36.9547C75.8193 36.9824 75.7965 37.0054 75.7688 37.0211C75.7411 37.0368 75.7097 37.0447 75.6779 37.0439Z"
                stroke="black"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
            </svg>
            <div>
              <h2 className=" font-medium text-5xl">{data?.active_users}</h2>
              <h4 className="sub-heading text-black/50">Total Active user </h4>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[542px] h-[542px] rounded-full bg-[#FFF2AC] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10"></div>
      <StrapiImage
        className=" absolute -z-10  left-[40%] -translate-x-[40%] top-1/2 -translate-y-1/2"
        src={data.image.url}
        alt="dfdfdfd"
        width={742}
        height={669}
      />
    </section>
  );
};

export default Section1;
