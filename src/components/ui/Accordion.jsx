import { useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function Accordion({ faqData }) {
  const [currentlyOpen, setCurrentlyOpen] = useState(null);
  return (
    <div className="accordionGrid">
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
    <div className={isOpen ? "accordion open" : "accordion"}>
      <div className="accordionHeader">
        <p className="accNumber">{index < 9 ? `0${index + 1}` : index + 1}</p>
        <p className="accQuestion">{data.question}</p>
        <Button type="aggregate" onClick={handleClick}>
          {isOpen ? "-" : "+"}
        </Button>
      </div>
      {isOpen ? (
        <div className="accordionInfo">
          <p className="accordionContent">{data.answer}</p>
        </div>
      ) : null}
    </div>
  );
}
