import { useEffect, useState } from "react";
import { categories, products as items, colors } from "../public/js/options";
import Cart from "./Cart";
import Control from "./Control";

const Menu = ({ lang }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    var a = 1;
    items.map((item) => (item.id = a++));
    items.map((item) => (item.count = 0));
    setProducts(items);
  }, []);
  useEffect(() => {
    setCart(products.filter((product) => product.count > 0));
  }, [products]);
  useEffect(() => {
    cart.length > 0 &&
      setTotal(
        cart
          .map((product) => product.count * product.price)
          .reduce((a, b) => a + b)
      );
  }, [cart]);

  const setCount = (newCount, id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          product.count = newCount;
          return product;
        } else {
          return product;
        }
      })
    );
  };

  return (
    <>
      <div className="container">
        <div className="imgContainer">
          <img src="/img/Stick.jpg" alt="" className="img" />
        </div>
        {categories.map((category, i) => (
          <>
            <div className="box">
              <div key={i} className="title">
                {lang === "en" ? category.en : category.ar}
              </div>
              <>
                {products
                  .filter((product) => product.category === category.en)
                  .map((product, index) => {
                    return (
                      <div key={index} className="row">
                        <div className="name">
                          {product.name[lang]}
                          <div className="details">
                            {product.details && product.details[lang]}
                          </div>
                        </div>
                        <div className="control">
                          <Control
                            count={product.count}
                            setCount={setCount.bind(this)}
                            id={product.id}
                          />
                        </div>
                        <div className="price">{product.price}</div>
                      </div>
                    );
                  })}
              </>
              <div className="options">
                {category.options && category.options[lang]}
              </div>
            </div>
            <div className="line"></div>
          </>
        ))}
        <img src="/img/hookah.png" alt="" className="img" />
        {cart.length !== 0 && <Cart lang={lang} cart={cart} total={total} />}
      </div>

      <style jsx>{`
        .container {
          background: white;
          border: solid black;
          border-width: 0 1px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          min-width: 20rem;
          padding-bottom: 5rem;
          direction: ${lang === "ar" && "rtl"};
        }
        .box {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          margin: 0.5rem 0;
          width: 100%;
          padding: 2rem;
        }
        .title {
          font-size: 2.5rem;
          font-width: bold;
          color: ${colors.primaryColor};
          padding: 1rem 0;
        }
        .row {
          font-size: 1.3rem;
          width: 100%;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          padding: 0.5rem 0;
        }
        .name {
          -webkit-box-flex: 1;
          -ms-flex: 1 1 100%;
          flex: 1 1 100%;
        }
        .details {
          font-size: 0.9rem;
          color: ${colors.primaryColor};
        }
        .control {
          flex: 1 1 12rem;
        }
        .options {
          margin: 1rem 0;
        }
        .line {
          width: 5rem;
          border-bottom: 1px solid ${colors.primaryColor};
        }
        .imgContainer {
          width: 100%;
          padding-top: 1rem;
          position: sticky;
          top: 0;
          background: white;
          text-align: center;
        }
        .img {
          width: 100%;
          max-width: 18rem;
          margin: 0 auto;
        }
        .price {
          text-align: ${lang === "en" ? "right" : "left"};
          padding: 0 0.2rem;
          flex: 1 1 8rem;
        }
        .price:after {
          content: ".000";
        }
      `}</style>
    </>
  );
};

export default Menu;
