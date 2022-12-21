import "../styles/globals.css";
import { Roboto } from "@next/font/google";
import localFont from "@next/font/local";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const hsbold = localFont({
  src: "./fonts/HungerStation-Regular.woff2",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={hsbold.className}>
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
