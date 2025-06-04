import Navbar from "../components/Navbar"

// Home page component
export default function Home() {
  return (
    <div>
      {/* Navigation menu */}
      <Navbar />

      {/* Welcome message */}
      <h1>Welcome to the Math Quiz App!</h1>
      <p>Test your basic math skills. Ready to begin?</p>
    </div>
  )
}
