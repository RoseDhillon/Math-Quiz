// Component to display a question with options
export default function Question({
  question,
  options,
  correctAnswer,
  onAnswer,
}) {
  return (
    <div>
      {/* Show the question */}
      <h2>{question}</h2>

      {/* Render multiple answer buttons */}
      {options.map((option, idx) => (
        <button
          key={idx}
          onClick={() => onAnswer(option === correctAnswer)} // Check answer
        >
          {option}
        </button>
      ))}
    </div>
  )
}
