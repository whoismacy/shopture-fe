import faqData from "../../../public/data/faqs";
import Accordion from "../../components/ui/Accordion";

export default function Faq() {
  return (
    <>
      <h1 className="align-center text-[48px]">Frequently Asked Questions</h1>
      <Accordion faqData={faqData} />
    </>
  );
}
