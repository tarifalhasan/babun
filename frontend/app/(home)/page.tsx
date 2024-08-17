import { getBankPageData } from "@/data/loaders";
import Section1 from "./_components/Section1";
import Section2 from "./_components/Section2";
import Section3 from "./_components/Section3";

function blockRenderer(block: any) {
  switch (block.__component) {
    case "layout.banking-section-1":
      return <Section1 key={block.id} data={block} />;
    case "banking.banking-section-2":
      return <Section2 key={block.id} data={block} />;
    case "banking.banking-section-3":
      return <Section3 key={block.id} data={block} />;
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
