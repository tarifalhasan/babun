import { Button } from "@/components/ui/button";
import Image from "next/image";

const Section1 = ({ data }: { data: any }) => {
  console.dir(data, { depth: null });
  return (
    <div className="container py-12 flex gap-2 flex-col lg:flex-row">
      <div className="flex-1 space-y-8">
        <div>
          <h2 className="title-heading">All Banking Needs</h2>
        </div>
        <div>
          <p className="sub-heading">
            Digital agency with top rated talented people provide
          </p>
        </div>
        <div>
          <Button>Get Started</Button>
        </div>
      </div>
      <div className="flex-1">
        <div className=" w-full h-[767px] bg-[#D9D9D9]"></div>
      </div>
      <div className="flex-1 flex flex-col items-end ">
        <div className=" space-y-8 max-w-[306px]">
          <div>
            <Image
              src={"/images/cart.png"}
              alt="dsfs"
              width={316}
              height={386}
            />
          </div>
          <div className=" ma">
            <p className="sub-heading">
              <b>Over 90+</b> countries using our service without any hassle.
            </p>
          </div>
          <div className=" gap-4 inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={95}
              height={92}
              viewBox="0 0 95 92"
              fill="none"
            >
              <rect
                x="0.75"
                y="0.75"
                width="93.5"
                height="90.5"
                rx="19.25"
                fill="#080808"
                stroke="black"
                strokeWidth="1.5"
              />
              <path
                d="M20.0215 36.7865L46.7464 69.9856C46.7981 70.048 46.8631 70.0981 46.9365 70.1325C47.0099 70.167 47.09 70.1848 47.1711 70.1848C47.2522 70.1848 47.3323 70.167 47.4057 70.1325C47.4791 70.0981 47.544 70.048 47.5958 69.9856L75.6782 37.0321"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
              />
              <path
                d="M25.4863 26.4516L35.7706 36.224L47.3251 26.4516L58.2286 36.7865L70.2792 26.4516"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M35.6035 37.044L46.8404 69.2647C46.8631 69.3314 46.9061 69.3893 46.9634 69.4303C47.0207 69.4713 47.0894 69.4933 47.16 69.4933C47.2305 69.4933 47.2992 69.4713 47.3565 69.4303C47.4138 69.3893 47.4568 69.3314 47.4795 69.2647C49.9007 62.1926 52.3087 55.0795 54.7035 47.9255C55.881 44.4053 57.052 40.889 58.2163 37.3767"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
              />
              <path
                d="M75.6779 37.0439H20.176C20.1456 37.0442 20.1157 37.0365 20.0892 37.0217C20.0627 37.0068 20.0405 36.9853 20.0249 36.9593C20.0093 36.9333 20.0007 36.9037 20 36.8734C19.9994 36.8431 20.0067 36.8131 20.0212 36.7865L25.4868 26.4516C25.5722 26.2901 25.7001 26.1549 25.8568 26.0606C26.0135 25.9664 26.193 25.9167 26.3759 25.9168H69.8153C70.0026 25.9176 70.1859 25.9702 70.345 26.0689C70.5041 26.1675 70.6326 26.3082 70.7163 26.4753L75.8287 36.7746C75.8461 36.8012 75.8558 36.8321 75.8569 36.8638C75.858 36.8956 75.8503 36.927 75.8348 36.9547C75.8193 36.9825 75.7965 37.0054 75.7688 37.0212C75.7411 37.0369 75.7097 37.0448 75.6779 37.0439Z"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
            </svg>
            <div>
              <h2 className=" font-medium text-5xl">1.75m</h2>
              <h4 className="sub-heading text-black/50">Total Active user </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
