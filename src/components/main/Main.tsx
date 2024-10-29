import Link from "next/link";
import "./styles.main.css";
import { urbanist400, urbanist700 } from "@/styles/styles.fonts";

export default function Main() {
  return (
    <div className="grid-container mt-12">
      <Link href="/">Home</Link>
      <h1 className={`${urbanist700.className} grid-item title`}>
        Title is something good a very long intro or something
      </h1>
      <p className={`${urbanist400.className} grid-item content`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        iaculis risus viverra, vestibulum magna vitae, commodo mauris. Phasellus
        congue purus in congue ultricies. Suspendisse rutrum elementum tellus ut
        ornare. In magna ante, mattis a nulla vel, hendrerit aliquet massa.
        Quisque lorem erat, commodo vitae suscipit et, convallis sit amet eros.
        Sed vitae pulvinar augue. Nam pellentesque magna quis tortor viverra, a
        rhoncus felis accumsan. Fusce ac elementum urna, nec ultricies massa.
        Praesent magna tortor, fermentum id dolor ac, efficitur tristique velit.
        Duis augue nunc, auctor eget suscipit vitae, finibus eget arcu. Etiam
        interdum quis tellus id rutrum. Suspendisse in dapibus nulla, non ornare
        ipsum.
      </p>
      <img
        className="grid-item grid-image"
        src="./space/space3.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      ></img>
    </div>
  );
}
