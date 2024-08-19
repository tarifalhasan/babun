import JoinTheWaitlist from "@/components/common/JoinTheWaitlist";
import { getBankPageData } from "@/data/loaders";
import Section1 from "./_components/Section1";
import Section2 from "./_components/Section2";
import Section3 from "./_components/Section3";
import Section4 from "./_components/Section4";
import Section6 from "./_components/Section6";

function blockRenderer(block: any, index: number, blocks: any[]) {
  const content = [];

  switch (block.__component) {
    case "layout.banking-section-1":
      content.push(<Section1 key={block.id} data={block} />);
      break;
    case "banking.banking-section-2":
      content.push(<Section2 key={block.id} data={block} />);
      // Add JoinTheWaitlist component right after Section2
      if (
        index === blocks.length - 1 ||
        blocks[index + 1]?.__component !== "banking.banking-section-2"
      ) {
        content.push(<JoinTheWaitlist key="join-the-waitlist" />);
      }
      break;
    case "banking.banking-section-3":
      content.push(<Section3 key={block.id} data={block} />);
      break;
    case "banking.banking-section-4":
      content.push(<Section4 key={block.id} data={block} />);
      break;
    case "banking.banking-section-6":
      content.push(<Section6 key={block.id} data={block} />);
      break;
    default:
      return null;
  }

  return content;
}

export default async function Home() {
  const strapiData = await getBankPageData();

  const { blocks } = strapiData;
  if (!blocks) return <div>No blocks found</div>;

  return (
    <main>
      {blocks.map((block: any, index: number) =>
        blockRenderer(block, index, blocks)
      )}
    </main>
  );
}
