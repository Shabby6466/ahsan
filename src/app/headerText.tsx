import React from 'react'
import "./styles/swap.modules.css";

export default function HeaderText() {
  return (
    <div>
        <div className="border border-blue-900 flex flex-row items-center justify-between ">
                  <li>
                    <a
                      href="https://react.dev/learn/state-a-components-memory"
                      className="Swap"
                    >
                      Swap
                    </a>
                  </li>
                  <li>
                    <a href='google.com'
                    className="Trading">Copy Trading</a>
                  </li>
                  <li>
                    <a href='yahoo.com'>Portifolio</a>
                  </li>
                  <li>
                    <a href='bing.com'>Referral</a>
                  </li>
                </div>
    </div>
  )
}
