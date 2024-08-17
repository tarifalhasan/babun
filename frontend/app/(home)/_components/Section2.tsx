import { StrapiImage } from "@/components/StrapiImage";
import ArrowButton from "@/components/arrow-button";
import Image from "next/image";

// Type for the ButtonLink
interface ButtonLink {
  id: number;
  text: string;
  href: string | null;
  variant: string | null;
  isExternal: boolean;
}

// Type for the Image
interface Image {
  id: number;
  url: string;
  alternativeText: string | null;
}

// Type for the Card
interface Card {
  id: number;
  title: string;
  description: string;
  image: Image;
}

// Type for the Banking Section 2
interface BankingSection2 {
  id: number;
  __component: string;
  title: string;
  subTitle: string;
  ButtonLink: ButtonLink;
  Card: Card[];
}

const Section2 = ({ data }: { data: BankingSection2 }) => {
  // console.dir(data, { depth: null });
  const { title, subTitle, ButtonLink, Card } = data;
  return (
    <section className=" relative [background-size:100%_100%] bg-center bg-[#DCEFF0] bg-[url('/images/banking-section-2-bg.png')] py-12 xl:py-24">
      <div className="container items-center overflow-hidden gap-8  flex flex-col lg:flex-row">
        <div className=" basis-full xl:basis-[30%] ">
          <div className="space-y-8 ">
            <div>
              <h2 className="heading">{title}</h2>
            </div>
            <p className="sub-heading">{subTitle}</p>

            <ArrowButton text={ButtonLink.text} />
          </div>
        </div>
        <div className=" basis-full gap-y-6 flex flex-col xl:basis-[70%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {Card.slice(0, 9).map((item, index) => (
              <div
                className="   bg-white px-4 lg:px-8 py-6 space-y-3"
                key={item.id}
              >
                <StrapiImage
                  alt={
                    item.image.alternativeText
                      ? item.image.alternativeText
                      : "dfdfdfd"
                  }
                  className=" w-[66px] h-[50px]"
                  height={66}
                  src={item.image.url}
                  width={49}
                />
                <div>
                  <h3 className=" text-xl font-bold">{item.title}</h3>
                </div>
                <p className=" sub-heading text-base opacity-70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 w-full">
            {Card.slice(9).map((item, index) => (
              <div
                className="   flex gap-2 lg:flex-row flex-col lg:items-center bg-white px-4 lg:px-8 py-2 space-y-3"
                key={item.id}
              >
                <StrapiImage
                  alt={
                    item.image.alternativeText
                      ? item.image.alternativeText
                      : "dfdfdfd"
                  }
                  className=" w-[66px] h-[50px]"
                  height={66}
                  src={item.image.url}
                  width={49}
                />
                <div>
                  <h3 className=" text-lg font-bold">{item.title}</h3>
                </div>
                <p className=" sub-heading text-base opacity-70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
