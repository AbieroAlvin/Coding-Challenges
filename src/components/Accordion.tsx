import { useState } from "react";

const sections = [
  {
    header: "Helping out",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus voluptatem doloribus deserunt!",
  },
  {
    header: "Frequently Asked Questions",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste tenetur accusantium non obcaecati voluptatem sequi autem suscipit labore distinctio! Debitis?",
  },
  {
    header: "What is UX/UI Design ?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, adipisci suscipit hic natus consequuntur atque distinctio.",
  },
  {
    header: "What Do designers actually do ?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, adipisci suscipit hic natus consequuntur atque distinctio.",
  },
  {
    header: "What Does user-centered design mean ?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, adipisci suscipit hic natus consequuntur atque distinctio.",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="flex flex-col w-full h-[90vh] items-center bg-purple-200 py-[20px]">
      <h1 className="text-4xl font-bold text-center text-purple-800">
        FAQ Accordion
      </h1>
      <div className="flex flex-col w-[400px] items-center mt-5 gap-4">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col items-center ">
            <div
              onClick={() => handleClick(index)}
              className={`${
                activeIndex === index
                  ? "bg-purple-600 p-2 rounded-md duration-500 ease-in text-white font-semibold"
                  : "bg-white p-2 rounded-md"
              } cursor-pointer flex items-center justify-between w-[400px]`}
            >
              {section.header}
              <div className="text-xl">
                {activeIndex === index ? <span>-</span> : <span>+</span>}
              </div>
            </div>
            {activeIndex === index && (
              <div
                className={`${
                  activeIndex === index
                    ? "ease-out duration-500"
                    : "ease-out duration-500"
                } text-center bg-purple-400 rounded-md mt-2 p-2`}
              >
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
