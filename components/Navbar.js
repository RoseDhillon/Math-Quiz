import Link from "next/link"

// Simple navbar with links to all pages
export default function Navbar() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      {/* Navigation links */}
      <Link href="/">Home</Link> | <Link href="/quiz">Quiz</Link> |{" "}
      <Link href="/result">Result</Link> | <Link href="/about">About</Link>
    </nav>
  )
}
