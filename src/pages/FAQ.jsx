import faqData from "../../public/data/faqs";
import Accordion from "../components/common/Accordion";

export default function FAQ() {
  return (
    <>
      <h1 className="faqHeading">Frequently Asked Questions</h1>
      <Accordion faqData={faqData} />
    </>
  );
}
