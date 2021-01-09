import { colors } from "../public/js/options";

export default function Control({ count, setCount, id }) {
  return (
    <>
      <div className="btnContainer">
        <div
          className={count === 0 ? "plus" : "btn"}
          onClick={() => setCount(count + 1, id)}
        >
          +
        </div>
        {count !== 0 && (
          <>
            <div className="count">{count}</div>
            <div className="btn" onClick={() => setCount(count - 1, id)}>
              -
            </div>
          </>
        )}
      </div>
      <style jsx>{`
        .btnContainer {
          display: flex;
          justify-content: center;
          align-items: center;
          direction: ltr;
        }
        .btn {
          width: 1.5rem;
          height: 1.5rem;
          border: 1px solid ${colors.primaryColor};
          border-radius: 5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${colors.primaryColor};
        }
        .count {
          margin: auto 0.2rem;
        }
        .plus {
          width: 3.5rem;
          background: white;
          border: 1px solid ${colors.primaryColor};
          border-radius: 0.2rem;
          color: ${colors.primaryColor};
          text-align: center;
        }
      `}</style>
    </>
  );
}
