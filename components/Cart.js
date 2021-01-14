import { useState } from "react";
import { colors } from "../public/js/options";
import Link from "next/link";

export default function Cart({ lang, cart, total, msg }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="cartContainer">
        {/* total !==0 && */}
        <div className="cartTitle" onClick={() => setOpen(!open)}>
          <span>{lang === "en" ? "Total" : "الإجمالي"}</span>
          <span className="price">{total}</span>
        </div>
        {open && (
          <div className="cartBox">
            {cart.map((item, index) => (
              <div key={index} className="row">
                <div className="name">{item.name[lang]}</div>
                <div className="control">x{item.count}</div>
                <div className="price">{item.price * item.count}</div>
              </div>
            ))}
          </div>
        )}
        <Link href={`https://wa.me/+96181026095?text=${msg}`}>
          <button className="cartBtn">
            {lang === "en" ? "Check Out" : "الدفع"}
          </button>
        </Link>
      </div>
      <style jsx>{`
        .cartContainer {
          width: 100%;
          max-width: 30rem;
          font-size: 1.2rem;
          color: white;
          position: fixed;
          bottom: 0;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
        }

        .cartTitle {
          width: 100%;
          font-size: 1.2rem;
          padding: 0.5rem 2rem;
          background: ${colors.primaryColor};
          color: white;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          box-shadow: 0px 0px 5px 2px #aaa;
        }
        .cartBox {
          height: 6rem;
          width: 100%;
          max-width: 30rem;
          font-size: 1rem;
          padding: 0.2rem 2rem;
          background: white;
          color: ${colors.primaryColor};
          overflow: auto;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
        }
        .cartBtn {
          background: white;
          color: ${colors.primaryColor};
          border: none;
          border-top: 1px solid ${colors.primaryColor};
          font-size: 1rem;
          padding: 0.4rem;
        }
        .row {
          font-size: 1rem;
          width: 100%;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          padding: 0.2rem 0;
        }
        .name {
          -webkit-box-flex: 1;
          -ms-flex: 1 1 100%;
          flex: 1 1 100%;
        }
        .control {
          flex: 1 1 8rem;
        }
        .price {
          text-align: ${lang === "en" ? "right" : "left"};
          padding: 0 0.2rem;
          -webkit-box-flex: 1;
          -ms-flex: 1 1 8rem;
          flex: 1 1 8rem;
        }
        .price:after {
          content: ".000";
        }
        .details {
          font-size: 0.9rem;
          color: ${colors.primaryColor};
        }
      `}</style>
    </>
  );
}
