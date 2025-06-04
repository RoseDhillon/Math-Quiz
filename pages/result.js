import Navbar from "../components/Navbar"
import ResultMessage from "../components/ResultMessage"

// Final result page
export default function Result() {
  const fakeScore = 1 // Replace with real score logic if needed

  return (
    <div>
      <Navbar />
      <h2>Results</h2>

      {/* Show result message using a component */}
      <ResultMessage score={fakeScore} />
    </div>
  )
}
