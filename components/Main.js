import { colors } from "../public/js/options";
const Main = ({ setLang, setMain }) => {
  return (
    <>
      <div className="container">
        <div className="row-box menu">
          <img src="/img/headerimg.jpg" alt="" className="header" />
          <h1 className="title">MENU</h1>
          <p>Every drop counts...</p>
          <div
            className="btn"
            onClick={() => {
              setLang("en");
              setMain(false);
            }}
          >
            ENGLISH
          </div>
          <div
            className="btn"
            onClick={() => {
              setLang("ar");
              setMain(false);
            }}
          >
            عــربــي
          </div>
        </div>
      </div>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .container {
          display: flex;
          justify-content: center;
          padding-top: 2rem;
        }
        .menu {
          width: 20rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-bottom: 1.5rem;
        }

        .btn {
          background: ${colors.primaryColor};
          width: 10rem;
          text-align: center;
          color: white;
          margin: 0.5rem;
          font-size: 1.3rem;
          line-height: 2rem;
          padding: 0.2rem;
          cursor: pointer;
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
        }

        .header {
          width: 100%;
        }

        .row-box {
          box-shadow: 0px 10px 14.1px 0.9px rgba(0, 0, 0, 0.24),
            0px 4px 19.6px 0.4px rgba(0, 0, 0, 0.16);
          max-width: 100%;
          position: relative;
          margin-bottom: 30px;
        }

        p {
          font-size: 18px;
          margin-top: 10px;
          padding: 10px;
        }
      `}</style>
    </>
  );
};

export default Main;
