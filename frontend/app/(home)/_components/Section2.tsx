import { StrapiImage } from "@/components/StrapiImage";

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
    <section className=" bg-[#DCEFF0] py-12 xl:py-24">
      <div className="container gap-8 grid grid-cols-12">
        <div className="col-span-12 xl:col-span-4">
          <div className="space-y-8">
            <div>
              <h2 className="heading">{title}</h2>
            </div>
            <p className="sub-heading">{subTitle}</p>
            <button className=" inline-flex items-center gap-2">
              <span className="text-base sm:text-xl font-bold text-[#1F1F1F]">
                {ButtonLink.text}
              </span>
              <span className=" w-11 h-11 bg-black rounded-full inline-flex items-center justify-center"></span>
            </button>
          </div>
        </div>
        <div className=" col-span-12 xl:col-span-8 grid sm:grid-cols-2 gap-8">
          {Card.map((item, index) => (
            <div
              className=" bg-white px-4 lg:px-8 py-9 space-y-5"
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
                <h3 className=" text-2xl font-bold">{item.title}</h3>
              </div>
              <p className=" sub-heading opacity-70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
