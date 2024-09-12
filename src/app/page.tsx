import Link from "next/link"
/* import Image from "next/image" */

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div>
        main window with scroll framer
        <ul className="border-2 h-96">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
      <div>
        <div>side menu</div>
        <div>contact</div>
        <Link href="/projects">PROJECTS</Link>
        <Link href="/about">ABOUT</Link>
      </div>
    </div>
  )
}
