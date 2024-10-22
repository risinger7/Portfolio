import { Bai_Jamjuree, Urbanist } from "next/font/google";
import localFont from "next/font/local";

// define weights of a non-variable font
const bai400 = Bai_Jamjuree({ subsets: ["latin"], weight: "400" });
const bai700 = Bai_Jamjuree({ subsets: ["latin"], weight: "700" });
const urbanist200 = Urbanist({ subsets: ["latin"], weight: "200" });
const urbanist400 = Urbanist({ subsets: ["latin"], weight: "400" });
const urbanist700 = Urbanist({ subsets: ["latin"], weight: "700" });
const urbanist900 = Urbanist({ subsets: ["latin"], weight: "900" });

// local fonts
const switzer200 = localFont({ src: "../app/fonts/Switzer-Light.ttf" });
const switzer400 = localFont({ src: "../app/fonts/Switzer-Regular.ttf" });
const switzer700 = localFont({ src: "../app/fonts/Switzer-Bold.ttf" });

export {
  bai400,
  bai700,
  switzer200,
  switzer400,
  switzer700,
  urbanist200,
  urbanist400,
  urbanist700,
  urbanist900,
};
