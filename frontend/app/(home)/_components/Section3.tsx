import { StrapiImage } from "@/components/StrapiImage";

interface Value {
  id: number;
  title: string;
  value: string;
}
interface Props {
  description: string;
  username: string;
  user_role: string;
  image: {
    id: number;
    url: string;
    alternativeText: any;
  };
  value: Value[];
}
const Section3 = ({ data }: { data: Props }) => {
  //   console.dir(data, { depth: null });
  const { description, user_role, username, image, value } = data;
  return (
    <section className=" container py-8 lg:py-16">
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-4">
          <div className="inline-flex items-center gap-2">
            <StrapiImage
              src={data.image.url}
              alt="sdsd"
              width={60}
              height={60}
              className=" w-12 h-12 rounded-full"
            />
            <div className="  -space-y-1">
              <h3 className=" text-xl font-normal">{username}</h3>
              <h3 className=" text-lg font-normal  opacity-40">{user_role}</h3>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <p className=" max-w-[600px] font-normal text-2xl">{description}</p>
        </div>
      </div>
      <div className=" flex items-center justify-between flex-wrap pt-20  gap-7">
        {value.map((item, index) => (
          <div key={item.id}>
            <h2 className=" text-center text-4xl xl:text-6xl font-medium">
              {item.value}
            </h2>
            <p className=" text-center text-lg xl:text-2xl">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section3;
