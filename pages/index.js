import { useState } from "react";
import Head from "next/head";
import Main from "../components/Main";
import Menu from "../components/Menu";

export default function Index() {
  const [lang, setLang] = useState("");
  const [main, setMain] = useState(true);

  return (
    <>
      <Head>
        <title>Drop Cafe</title>
      </Head>
      <div className="app">
        <>
          {main ? (
            <Main setMain={setMain} setLang={setLang} />
          ) : (
            <Menu lang={lang} setMain={setMain} />
          )}
        </>
      </div>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          text-decoration: unset;
          outline: none;
          -webkit-tap-highlight-color: transparent;
          font-family: sans-serif;
          -ms-scroll-chaining: none;
          overscroll-behavior: contain;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        *::-webkit-scrollbar {
          display: none;
        }

        body {
          background-image: linear-gradient(black, black),
            url("/img/headerimg.jpg");
          background-size: cover;
          background-blend-mode: saturation;
          background-attachment: fixed;
          background-position: center center;
          background-color: transparent;
          font-size: 18px;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          z-index: -10;
        }
      `}</style>
    </>
  );
}
