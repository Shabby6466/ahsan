import React from "react";
import "./styles/swap.modules.css";

export default function HeaderText() {
  return (
    <div>
      <ul className="flex flex-row items-center justify-between mx-15 w-[100%]">
        <li className= "">
          <a
            href="https://react.dev/learn/state-a-components-memory"
            className="Swap"
          >
            Swap
          </a>
        </li>
        <li>
          <a href="google.com" className="Trading">
            Copy Trading
          </a>
        </li>
        <li>
          <a href="yahoo.com" className="Port">
            Portifolio
          </a>
        </li>
        <li>
          <a href="bing.com" className="Ref">
            Referral
          </a>
        </li>
      </ul>
    </div>
  );
}
