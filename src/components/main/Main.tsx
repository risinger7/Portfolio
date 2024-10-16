import "./styles.main.css";
import { switzer700, switzer200, switzer400 } from "@/styles/styles.fonts";
export default function Main() {
  return (
    <div className="grid-container mt-12">
      <h1 className={`${switzer700.className} grid-item title`}>
        Title is something good a very long intro or something
      </h1>
      <p className={`${switzer400.className} grid-item content`}>
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
    </div>
  );
}
