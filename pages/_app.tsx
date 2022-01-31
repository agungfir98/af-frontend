import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyC2EaSvfBev0FzQDGGdnDUxHQi2lG_5fFY",
//   authDomain: "devwithagung.firebaseapp.com",
//   projectId: "devwithagung",
//   storageBucket: "devwithagung.appspot.com",
//   messagingSenderId: "1036229586507",
//   appId: "1:1036229586507:web:4ac2a21558c5cffbe4a7ce",
//   measurementId: "G-KY56TQKZ9P",
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
