import ArrowButton from "../arrow-button";
import NewsCard from "./NewsCard";

type Image = {
  id: number;
  url: string;
  alternativeText: string | null;
};

type NewsCard = {
  id: number;
  title: string;
  description: string | null;
  author_name: string;
  date: string;
  image: Image;
};

type LatestNews = {
  id: number;
  __component: "layout.latest-news";
  title: string;
  subTitle: string;
  news_cards: NewsCard[];
};

const LatestNews = ({ data }: { data: LatestNews }) => {
  console.dir(data, { depth: null });
  return (
    <section
      id={data.__component}
      className="container space-y-8 py-16 xl:py-24 "
    >
      <div className="">
        <div className="flex flex-col sm:flex-row gap-y-5 sm:items-end justify-between">
          <div className="space-y-1">
            <h3 className="text-4xl xl:text-6xl font-bold">{data.title}</h3>
            <h6 className="text-base xl:text-xl font-normal">
              {data.subTitle}
            </h6>
          </div>
          <ArrowButton text="See all blogs" />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-7">
        {data.news_cards.map((news) => (
          <NewsCard
            key={news.id}
            author_name={news.author_name}
            date={news.date}
            title={news.title}
            image={news.image}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
