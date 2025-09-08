import styles from "./styles/header.module.css";
import HeaderText from "./headerText";

export default function Header() {
  return (
    <div>
      <div className="w-screen  flex items-center justify-center">
        <header className="">
          {/* Header shi below */}
          <div
            className={`${styles.Header}  pt-[4px] pb-[4px] pr-[20px] pl-[20px] absolute w-[1350px]`}
          >
            {/* outermost div */}
            <div className=" flex space-x-[5px] items-center justify-left w-[900px]">
              {/* CFCX logo div */}
              <div className="flex items-center justify-left">
                <img src="/cfcx.svg" alt="red" className="w-[60px] h-[70px]" />
              </div>
              <div className="flex flex-col items-center justify-between ">
                {/* made a div for the text to be centered*/}
                <HeaderText />
              </div>
            </div>
          </div>
          <div></div>
        </header>
      </div>
    </div>
  );
}
