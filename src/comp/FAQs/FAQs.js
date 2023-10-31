import { useRef, useState } from "react";
import "./faq.css";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="mt-5 border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-3 flex items-center justify-between text-lg text-red-400 font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className={`overflow-hidden transition-max-height duration-300 ${
          state ? "max-h-96" : "max-h-0"
        }`}
      >
        <div>
          <p className="text-white">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

export default () =>
 {
  const faqsList = [
    {
      q: "What are some random questions to ask?",
      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
    },
    {
      q: "Do you include common questions?",
      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
    },
    {
      q: "Can I use this for 21 questions?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Are these questions for girls or for boys?",
      a: "The questions in this generator are gender-neutral and can be used to ask either males or females (or any other gender the person identifies with).",
    },
    {
      q: "What do you wish you had more talent doing?",
      a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
    },
  ];

  return (
    <section className="faq-card-container max-w-screen-xl mt-6 mx-4 md:mx-auto px-4 md:px-8">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl text-white font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-400 text-lg md:max-w-lg md:mx-auto mt-2">
          Answered all frequently asked questions? Still confused? Feel free to contact us.
        </p>
      </div>
      <div className="mt-6 max-w-screen-md mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};
