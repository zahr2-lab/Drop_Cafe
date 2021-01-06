import { items, colors } from "../public/js/options";

const Menu = ({ lang, setMain }) => {
  return (
    <>
      <div className="container">
        <img src="/img/headerimg.jpg" alt="" className="img" />

        <div className="menu">MENU</div>
        {items.map((item, i) => {
          return (
            <>
              <div className="box">
                <div key={i} className="title">
                  {item.title[lang]}
                </div>
                {item.component.map((detail, index) => {
                  return (
                    <div key={index} className="row">
                      <div className="name">
                        {detail.name[lang]}
                        <div className="details">
                          {detail.details && detail.details[lang]}
                        </div>
                      </div>
                      <div className="price">{detail.price}</div>
                    </div>
                  );
                })}
                <div className="options">
                  {item.options && item.options[lang]}
                </div>
              </div>
              <div className="line"></div>
            </>
          );
        })}
        <img src="/img/hookah.png" alt="" className="img" />
      </div>
      <style jsx>{`
        .menu {
          font-size: 2rem;
        }
        .container {
          background: white;
          border: solid black;
          border-width: 0 1px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 20rem;
        }
        .box {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0.5rem 0;
          width: 100%;
          padding: 2rem;
        }
        .title {
          font-size: 3rem;
          font-width: bold;
          color: ${colors.primaryColor};
          padding: 0.8rem 0;
        }
        .row {
          font-size: 1.3rem;
          width: 100%;
          display: flex;
          padding: 0.5rem 0;
        }
        .name {
          flex: 1 1 100%;
        }
        .details {
          font-size: 0.9rem;
          color: ${colors.primaryColor};
        }
        .options {
          margin: 1rem 0;
        }
        .line {
          width: 5rem;
          border-bottom: 1px solid ${colors.primaryColor};
        }
        .img {
          width: 100%;
          max-width: 22rem;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};

export default Menu;
