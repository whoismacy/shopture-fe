import { useState } from "react";
import Button from "./Button";

export default function Accordion({ faqData }) {
  const [currentlyOpen, setCurrentlyOpen] = useState(null);
  return (
    <div className="mx-auto my-8 grid max-w-[1200px] grid-cols-1 gap-6 p-2">
      {faqData.map((faq, index) => (
        <AccordionItem
          data={faq}
          index={index}
          key={index + 1}
          onOpen={setCurrentlyOpen}
          curOpen={currentlyOpen}
        />
      ))}
    </div>
  );
}

function AccordionItem({ data, index, curOpen, onOpen }) {
  const isOpen = index === curOpen;

  function handleClick() {
    onOpen(isOpen ? null : index);
  }

  return (
    <div
      className={
        isOpen
          ? "max-h-150 rounded-md bg-amber-50 p-3 text-base"
          : "max-h-150 rounded-md bg-white p-3 text-base"
      }
    >
      <div className="flex items-center justify-between px-3 py-2">
        <p className="text-3xl font-semibold text-stone-400">
          {index < 9 ? `0${index + 1}` : index + 1}
        </p>
        <p className="text-4xl font-semibold">{data.question}</p>
        <Button type="aggregate" onClick={handleClick}>
          {isOpen ? "-" : "+"}
        </Button>
      </div>
      {isOpen ? (
        <div className="p-3 transition-all duration-300 ease-out">
          <p className="align-center text-2xl">{data.answer}</p>
        </div>
      ) : null}
    </div>
  );
}
