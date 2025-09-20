import { useState } from "react";
import Button from "./Button";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function Accordion({ faqData }) {
  const [currentlyOpen, setCurrentlyOpen] = useState(null);

  return (
    <div className="mx-auto my-12 w-full max-w-4xl space-y-4 rounded-xl bg-gray-50 p-6 shadow-xl md:p-8">
      {faqData.map((faq, index) => (
        <AccordionItem
          data={faq}
          index={index}
          key={index}
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
      className={`rounded-lg p-6 shadow-md transition-all duration-300 ease-in-out ${
        isOpen ? "bg-white ring-2 ring-gray-500" : "bg-white hover:shadow-lg"
      }`}
    >
      <div
        className="flex cursor-pointer items-center justify-between gap-4"
        onClick={handleClick}
      >
        <span className="text-xl font-bold text-gray-400">
          {index < 9 ? `0${index + 1}` : index + 1}
        </span>
        <p className="flex-grow text-lg font-semibold text-gray-800">
          {data.question}
        </p>
        <div className="flex-shrink-0">
          {isOpen ? (
            <FaMinus className="text-xl text-gray-600" />
          ) : (
            <FaPlus className="text-xl text-gray-600" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 animate-accordion-down border-t border-gray-200 pt-4">
          <p className="text-base text-gray-600">{data.answer}</p>
        </div>
      )}
    </div>
  );
}
