import Navbar from "../components/Navbar"

// Simple static about page
export default function About() {
  return (
    <div>
      <Navbar />
      <h2>About This App</h2>
      <p>
        This app helps users practice math while learning React and Next.js.
      </p>
    </div>
  )
}
