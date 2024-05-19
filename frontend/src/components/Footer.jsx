const Footer = () => {
  return (
    <>
      <footer className="text-center p-1 gradient-bg-footer">
        <div className=" test font-bold mb-[20px] text-3xl  text-zinc-50">
          CryptoEase
        </div>
        <nav-down>
          <ul className="list-none text-center flex flex-row justify-center gap-10 mb-[20px] text-zinc-50 test_2">
            <li>
              <a href="#">Market</a>
            </li>
            <li>
              <a href="#">Exchange</a>
            </li>
            <li>
              <a href="#">Tutorials</a>
            </li>
            <li>
              <a href="#">Wallets</a>
            </li>
          </ul>
        </nav-down>
        <div className="mb-[20px] text-zinc-50 test_2">info@cryptoease.com</div>
        <div className="copy text-zinc-50 test_2">
          &copy; CryptoEase 2024. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
