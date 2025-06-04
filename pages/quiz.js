import { useState } from "react"
import Navbar from "../components/Navbar"
import Question from "../components/Question"

// Quiz page component
export default function Quiz() {
  // State for tracking score
  const [score, setScore] = useState(0)
  // State for showing result after answering
  const [showResult, setShowResult] = useState(false)

  // Handles user selection of an answer
  const handleAnswer = (correct) => {
    if (correct) setScore(score + 1) // Increase score if correct
    setShowResult(true) // Show result message
  }

  return (
    <div>
      <Navbar />

      {/* Show question or result depending on state */}
      {!showResult ? (
        <Question
          question="5 + 3"
          options={[6, 7, 8]}
          correctAnswer={8}
          onAnswer={handleAnswer}
        />
      ) : (
        <p>You scored {score} point!</p>
      )}
    </div>
  )
}
