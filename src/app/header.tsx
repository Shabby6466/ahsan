import styles from "@/styles/header.module.css";

export default function Header() {
  return (
    <div>
      <header>
        {/* header */}
        <div className="{styles.Header} px-8 py-5 flex items-center justify-between shadow-md">
          {/* outermost div */}
          <div className="flex space-x-[5px] items-center justify-left w-[200px]">
            {/* CM logo and text div */}
            <div className="">
              <img src="/logo.svg" alt="red" className="w-[60px] h-[70px]" />
            </div>
            <div className="">
              <h4 className="text-white font-stretch-ultra-expanded"> Lelota</h4>
              <h4 className="text-yellow-300 font-bold">Marketing</h4>
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center justify-between w-[900px]">
              <h6>Home</h6>
              <h6>Services</h6>
              <h6>Blog</h6>
              <h6>About</h6>
              <h6>FAQ</h6>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
