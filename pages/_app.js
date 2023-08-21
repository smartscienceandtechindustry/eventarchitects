import "@/styles/globals.css";
import Header from "@/components/header";
export default function App({ Component, pageProps }) {
  return (
    <div className="">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
