// Conditionally show a message depending on score
export default function ResultMessage({ score }) {
  return (
    <div>
      {/* If score >= 1, show positive message, else encourage retry */}
      {score >= 1 ? <p>Great job!</p> : <p>Try again!</p>}
    </div>
  )
}
