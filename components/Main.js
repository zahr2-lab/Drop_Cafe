import { colors } from "../public/js/options";
const Main = ({ setLang, setMain }) => {
  return (
    <>
      <div className="container">
        <div className="row-box menu">
          <img src="/img/Stick.jpg" alt="" className="header" />
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
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }
        .container {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          padding-top: 2rem;
          z-index: 1;
        }
        .menu {
          width: 20rem;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          padding-bottom: 2rem;
          z-index: 1;
          background: white;
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

        .header {
          width: 100%;
          padding: 5rem 0;
        }
        .row-box {
          -webkit-box-shadow: 0px 10px 14.1px 0.9px rgba(0, 0, 0, 0.24),
            0px 4px 19.6px 0.4px rgba(0, 0, 0, 0.16);
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
