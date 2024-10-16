"use client";

import "./styles.css";
import useTheme from "../hooks/useTheme";
import Navbar from "@/components/navbar/Navbar";
/* import Image from "next/image" */
import Link from "next/link";
import {
  urbanist400,
  urbanist700,
  switzer200,
  switzer400,
  switzer700,
  bai400,
  bai700,
} from "@/styles/styles.fonts";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex flex-col items-start">
      <Navbar />
      <div className="flex space-x-20 mr-10 mt-20">
        <div className="w-36 h-36 bg-rose-500">colors</div>
        <div className="w-36 h-36 bg-purple-600">colors</div>
        {/* <div className="w-36 h-36 bg-fuchsia-500">colors</div> */}
        <div className="w-96">
          <div className={`${urbanist700.className} text-3xl`}>
            Urbanist font: Viktor Risinger
            <p className={`${urbanist400.className} text-base w-96`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at sodales ipsum. Maecenas malesuada turpis urna, id pharetra sem
              tincidunt in. Duis lacinia neque lorem, in eleifend est suscipit
              vel. Donec quis quam eget nulla venenatis suscipit tristique sit
              amet lorem. Integer iaculis mauris et nibh gravida, vitae faucibus
              odio sollicitudin. Duis id pretium ante. Aliquam erat volutpat.
              Praesent mattis facilisis urna et sodales. Nulla facilisi. Vivamus
              scelerisque ligula eget nunc sollicitudin ornare. Suspendisse ut
              dignissim orci. Sed varius suscipit molestie. Aenean tempus, nibh
              at tincidunt iaculis, magna arcu bibendum nunc, id bibendum ex
              sapien et ex. Praesent a magna eu metus dignissim venenatis.
            </p>
          </div>

          <div className={`${switzer700.className} text-3xl`}>
            Switzer font: Viktor Risinger
            <p className={`${switzer200.className} text-base w-1/2`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at sodales ipsum. Maecenas malesuada turpis urna, id pharetra sem
              tincidunt in. Duis lacinia neque lorem, in eleifend est suscipit
              vel. Donec quis quam eget nulla venenatis suscipit tristique sit
              amet lorem. Integer iaculis mauris et nibh gravida, vitae faucibus
              odio sollicitudin. Duis id pretium ante. Aliquam erat volutpat.
              Praesent mattis facilisis urna et sodales. Nulla facilisi. Vivamus
              scelerisque ligula eget nunc sollicitudin ornare. Suspendisse ut
              dignissim orci. Sed varius suscipit molestie. Aenean tempus, nibh
              at tincidunt iaculis, magna arcu bibendum nunc, id bibendum ex
              sapien et ex. Praesent a magna eu metus dignissim venenatis.
            </p>
            <p className={`${switzer400.className} text-base w-1/2`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at sodales ipsum. Maecenas malesuada turpis urna, id pharetra sem
              tincidunt in. Duis lacinia neque lorem, in eleifend est suscipit
              vel. Donec quis quam eget nulla venenatis suscipit tristique sit
              amet lorem. Integer iaculis mauris et nibh gravida, vitae faucibus
              odio sollicitudin. Duis id pretium ante. Aliquam erat volutpat.
              Praesent mattis facilisis urna et sodales. Nulla facilisi. Vivamus
              scelerisque ligula eget nunc sollicitudin ornare. Suspendisse ut
              dignissim orci. Sed varius suscipit molestie. Aenean tempus, nibh
              at tincidunt iaculis, magna arcu bibendum nunc, id bibendum ex
              sapien et ex. Praesent a magna eu metus dignissim venenatis.
            </p>
          </div>

          <div className={`${bai400.className} text-3xl`}>
            Bai400 font: Viktor Risinger
            <p className="text-base w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at sodales ipsum. Maecenas malesuada turpis urna, id pharetra sem
              tincidunt in. Duis lacinia neque lorem, in eleifend est suscipit
              vel. Donec quis quam eget nulla venenatis suscipit tristique sit
              amet lorem. Integer iaculis mauris et nibh gravida, vitae faucibus
              odio sollicitudin. Duis id pretium ante. Aliquam erat volutpat.
              Praesent mattis facilisis urna et sodales. Nulla facilisi. Vivamus
              scelerisque ligula eget nunc sollicitudin ornare. Suspendisse ut
              dignissim orci. Sed varius suscipit molestie. Aenean tempus, nibh
              at tincidunt iaculis, magna arcu bibendum nunc, id bibendum ex
              sapien et ex. Praesent a magna eu metus dignissim venenatis.
            </p>
          </div>
          <div className={`${bai700.className} text-3xl`}>
            Bai700 font: Viktor Risinger
            <p className="text-base w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at sodales ipsum. Maecenas malesuada turpis urna, id pharetra sem
              tincidunt in. Duis lacinia neque lorem, in eleifend est suscipit
              vel. Donec quis quam eget nulla venenatis suscipit tristique sit
              amet lorem. Integer iaculis mauris et nibh gravida, vitae faucibus
              odio sollicitudin. Duis id pretium ante. Aliquam erat volutpat.
              Praesent mattis facilisis urna et sodales. Nulla facilisi. Vivamus
              scelerisque ligula eget nunc sollicitudin ornare. Suspendisse ut
              dignissim orci. Sed varius suscipit molestie. Aenean tempus, nibh
              at tincidunt iaculis, magna arcu bibendum nunc, id bibendum ex
              sapien et ex. Praesent a magna eu metus dignissim venenatis.
            </p>
          </div>
        </div>
      </div>

      <button
        className={`${bai400.className} theme-button`}
        onClick={() => toggleTheme()}
      >
        Toggle theme
      </button>
    </div>
  );
}
