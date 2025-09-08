import styles from "./styles/header.module.css";

export default function Header() {
  return (
    <div>
      <header>
        <div className = " w-screen border border-gray-800 flex items-center justify-between">
        {/* Corrected className using a template literal */}
        <div className={`${styles.Header} pt-[4px] pb-[4px] pr-[20px] pl-[20px] w-[100%] shadow-md rounded-2xl`}>
          {/* outermost div */}
          <div className="flex space-x-[5px] items-center justify-left w-[900px]">
            {/* CFCX logo div */}
            <div className="flex items-center justify-left">
              <img src="/cfcx.svg" alt="red" className="w-[60px] h-[70px]" />
            </div>
            <div className = "flex flex-col items-center justify-between "> 
              {/* made a div for the text to be centered*/}
              <div className="">
              <h6>Swap</h6>
              <h6>Copy Trading</h6>
              <h6>Portifolio</h6>
              <h6>Referral</h6>
            </div>
            </div>
          </div>
          </div>
          <div>
            
          </div>
        </div>
      </header>
    </div>
  );
}
