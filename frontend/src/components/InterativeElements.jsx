import React, { useState } from "react";

const InteractiveElements = () => {
  const [step, setStep] = useState(0); // Track the current step
  const [answers, setAnswers] = useState([]); // Store user answers
  const [result, setResult] = useState(null); // Store quiz result

  // Quiz Questions
  const questions = [
    {
      question: "What best describes your body type?",
      options: ["Thin and lanky", "Medium and athletic", "Sturdy and heavy"],
    },
    {
      question: "How is your digestion?",
      options: ["Irregular or sensitive", "Quick and strong", "Slow but steady"],
    },
    {
      question: "What is your response to stress?",
      options: [
        "Anxious and overthinking",
        "Irritable and short-tempered",
        "Calm but lethargic",
      ],
    },
    {
      question: "Which climate do you prefer?",
      options: ["Warm and dry", "Cool and fresh", "Hot and humid"],
    },
    {
      question: "How would others describe your energy levels?",
      options: [
        "High but inconsistent",
        "Focused and intense",
        "Slow and steady",
      ],
    },
  ];

  // Handle answer selection
  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      calculateResult();
    }
  };

  // Calculate the result based on answers
  const calculateResult = () => {
    const vata = answers.filter((ans) => ans === 0).length;
    const pitta = answers.filter((ans) => ans === 1).length;
    const kapha = answers.filter((ans) => ans === 2).length;

    if (vata > pitta && vata > kapha) {
      setResult("Vata Dosha - Creative, energetic, and lively but prone to anxiety.");
    } else if (pitta > vata && pitta > kapha) {
      setResult(
        "Pitta Dosha - Focused, ambitious, and sharp but can be irritable or hot-headed."
      );
    } else {
      setResult(
        "Kapha Dosha - Calm, steady, and nurturing but can be lethargic or resistant to change."
      );
    }
  };

  // Restart Quiz
  const restartQuiz = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <section id="quiz" className="py-16 bg-green-50">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-green-800 mb-8">
          Find Your Ayurvedic Dosha
        </h2>

        {!result ? (
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              {questions[step].question}
            </h3>
            <div className="space-y-4">
              {questions[step].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full text-left bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Your Dosha Type:
            </h3>
            <p className="text-lg text-gray-700 mb-6">{result}</p>
            <button
              onClick={restartQuiz}
              className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition"
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveElements;
