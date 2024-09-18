import React from "react";

const Footer = () => {
  return (
    <footer className="justify-center items-center bg-black">
      <div className="mx-auto w-full max-w-[1000px] p-4 py-6 lg:py-8">
        <div className=" md:justify-center ">
          <div className="grid grid-cols-2 gap-8  sm:gap-6 sm:grid-cols-5">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                flelrmu gaming
              </h2>
              <ul className="text-gray-500 ml-[-16px] font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.youtube.com/@flelrmuofficial"
                    className="hover:underline"
                  >
                    Youtube
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.tiktok.com/@flelrmugaming?is_from_webapp=1&sender_device=pc"
                    className="hover:underline"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/flelrmugaming/"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                BBinggris
              </h2>
              <ul className="text-gray-500 ml-[-16px] font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.youtube.com/@bb_inggris"
                    className="hover:underline "
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@bb_inggris?is_from_webapp=1&sender_device=pc"
                    className="hover:underline"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Logoes.id
              </h2>
              <ul className="text-gray-500 ml-[-16px] font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/logoes.id/"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@logoes.id?is_from_webapp=1&sender_device=pc"
                    className="hover:underline"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Adobe Stock
              </h2>
              <ul className="text-gray-500 ml-[-16px] font-medium">
                <li className="mb-4">
                  <a
                    href="https://stock.adobe.com/contributor/211140564/muhammad-farhan?as_channel=adobe_com&as_source=behance_net&as_campaign=contributor_profile&promoid=51TC8T34&mv=other"
                    className="hover:underline"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                ShutterStock
              </h2>
              <ul className="text-gray-500 ml-[-16px] font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.shutterstock.com/g/flelrmu"
                    className="hover:underline"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200  sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex flex sm:items-center items-center sm:justify-center justify-center ">
          <span className="text-sm text-gray-500 sm:text-center ">
            © 2023{" "}
            <a
              href="https://www.instagram.com/flelrmu/"
              className="hover:underline"
            >
              flelrmu™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
