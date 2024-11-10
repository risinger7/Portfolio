import {
  urbanist400,
  urbanist700,
  switzer200,
  switzer400,
  switzer700,
  bai400,
  bai700,
} from "../styles/styles.fonts";
import "./styles.css";
import Navbar from "../navbar/Navbar";
console.log(urbanist400, urbanist700, bai400, bai700);
export default function Design() {
  return (
    <div className="flex flex-col items-center gap-10">
      <Navbar />
      <div className="flex gap-4 mt-4">
        <div className="w-24 h-24 bg-rose-500">colors</div>
        <div className="w-24 h-24 bg-purple-600">colors</div>
      </div>

      <div className="width flex flex-col gap-5">
        <div>
          <h1 className={`${urbanist700.className} text-3xl`}>
            Urbanist font: Viktor Risinger
          </h1>
          <p className={`${urbanist400.className} text-base `}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at sodales ipsum. Maecenas malesuada turpis urna, id pharetra sem
            tincidunt in. Duis lacinia neque lorem, in eleifend est suscipit
            vel. Donec quis quam eget nulla venenatis suscipit tristique sit
          </p>
        </div>

        <div>
          <h1 className={`${switzer700.className} text-3xl width`}>
            Switzer font: Viktor Risinger
          </h1>
          <p className={`${switzer200.className} text-base `}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at sodales ipsum. Maecenas malesuada turpis urna, id pharetra sem
            tincidunt in. Duis lacinia neque lorem, in eleifend est suscipit
            vel. Donec quis quam eget nulla venenatis suscipit tristique sit
            amet lorem. Integer iaculis mauris et nibh gravida, vitae faucibus
            odio sollicitudin. Duis id pretium ante. Aliquam erat volutpat.
          </p>
          <p className={`${switzer400.className} text-base `}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at sodales ipsum. Maecenas malesuada turpis urna, id pharetra sem
            tincidunt in. Duis lacinia neque lorem, in eleifend est suscipit
            vel. Donec quis quam eget nulla venenatis suscipit tristique sit
            amet lorem. Integer iaculis mauris et nibh gravida, vitae faucibus
          </p>
        </div>

        <div>
          <h1 className={`${bai400.className} text-3xl `}>
            Bai400 font: Viktor Risinger
          </h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at sodales ipsum. Maecenas malesuada turpis urna, id pharetra sem
            tincidunt in. Duis lacinia neque lorem, in eleifend est suscipit
            vel. Donec quis quam eget nulla venenatis suscipit tristique sit
            amet lorem. Integer iaculis mauris et nibh gravida, vitae faucibus
          </p>
        </div>
        <div>
          <h1 className={`${bai700.className} text-3xl `}>
            Bai700 font: Viktor Risinger
          </h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at sodales ipsum. Maecenas malesuada turpis urna, id pharetra sem
            tincidunt in. Duis lacinia neque lorem, in eleifend est suscipit
            vel. Donec quis quam eget nulla venenatis suscipit tristique sit
            amet lorem. Integer iaculis mauris et nibh gravida, vitae faucibus
          </p>
        </div>
      </div>
    </div>
  );
}
