import { StrapiImage } from "@/components/StrapiImage";
import Image from "next/image";

type Image = {
  id: number;
  url: string;
  alternativeText: string | null;
};

type BottomImageCard = {
  id: number;
  title: string;
  description: string;
  image: Image;
};

type BankingSection6 = {
  id: number;
  __component: "banking.banking-section-6";
  title: string;
  left_image: Image;
  right_image: Image;
  BottomImageCard: BottomImageCard;
};

const Section6 = ({ data }: { data: BankingSection6 }) => {
  // console.dir(data);
  return (
    <div className="container py-10 xl:py-32">
      <div className=" pb-12">
        <h4 className="text-4xl xl:text-6xl font-bold max-w-[1157px]">
          {data.title}
        </h4>
      </div>
      <div className="flex gap-12 items-start flex-col lg:flex-row justify-between">
        <div className="basis-full lg:basis-[30%]">
          <StrapiImage
            width={414}
            height={896}
            className="shadow-xl max-w-[414px] w-full object-cover "
            src={data.left_image.url}
            alt={data.left_image.alternativeText || "dfdf"}
          />
        </div>
        <div className="basis-full flex justify-end lg:basis-[70%]">
          <StrapiImage
            width={720}
            height={896}
            className=" w-full object-cover shadow-xl lg:max-w-[720px]"
            src={data.right_image.url}
            alt={data.left_image.alternativeText || "dfdf"}
          />
        </div>
      </div>

      <div className=" bg-[#F6F6F6] lg:-mt-[6rem] px-4 pt-8 flex justify-end">
        <div className="lg:max-w-[64%] gap-5 w-full flex flex-col lg:flex-row lg:items-center">
          <div className="  basis-[30%] ">
            <h4 className="text-lg lg:text-xl font-bold">
              {data.BottomImageCard.title}
            </h4>
            <p className="text-sm font-normal leading-[218%] opacity-70">
              {data.BottomImageCard.description}
            </p>
          </div>
          <div className="basis-full lg:basis-[70%]">
            <StrapiImage
              width={534}
              height={392}
              className="   object-cover "
              src={data.BottomImageCard.image.url}
              alt={data.left_image.alternativeText || "dfdf"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
