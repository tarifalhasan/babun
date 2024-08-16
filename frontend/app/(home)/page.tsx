import { getBankPageData } from "@/data/loaders";
import Section1 from "./_components/Section1";

function blockRenderer(block: any) {
  switch (block.__component) {
    case "layout.banking-hero-section":
      return <Section1 key={block.id} data={block} />;

    default:
      return null;
  }
}

export default async function Home() {
  const strapiData = await getBankPageData();

  // console.dir(strapiData, { depth: null });
  const { blocks } = strapiData;
  if (!blocks) return <div>No blocks found</div>;

  return <main>{blocks.map((block: any) => blockRenderer(block))}</main>;
}
