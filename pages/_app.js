import "../styles/globals.css";
//import { Roboto } from "@next/font/google";
import localFont from "@next/font/local";

// const roboto = Roboto({
//   weight: ["400", "700"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
// });

const hungerstation = localFont({
  src: [
    {
      path: "./fonts/HungerStation-Regular.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/HungerStation-Light.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-hungerstation",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${hungerstation.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}

// google fonts working.
// export default function App({ Component, pageProps }) {
//   return (
//     <main className={roboto.className}>
//       <Component {...pageProps} />
//     </main>
//   );
// }
