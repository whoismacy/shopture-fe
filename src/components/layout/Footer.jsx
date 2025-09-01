import { useState } from "react";
import { showSuccessToast } from "../../utils/toast";
import { showErrorToast } from "../../utils/toast";

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleEmail() {
    if (!email) {
      showErrorToast("Input a valid email address.");
    } else {
      showSuccessToast(`Newsletter subscription for ${email} Successful !!`);
      setEmail("");
    }
  }

  return (
    <>
      <footer className="bg-white pt-12 px-8 mt-96">
        <div className="grid grid-cols-[1.5fr_2.5fr]">
          <div className="flex flex-col justify-center items-center w-full gap-4 p-4">
            <p className="text-3xl font-semibold uppercase border-b">
              Sign Up For Our Newsletter
            </p>
            <div className="flex justify-center items-center w-full mt-8">
              <input
                type="text"
                placeholder="Input your email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-16 w-[60%] px-2 py-6 border-b text-2xl focus:outline-none placeholder:italic placeholder:text-2xl"
              />
              <button
                className="block text-2xl bg-black text-white text-semibold px-6 py-4 transition-all ease-in duration-25 rounded-full cursor-pointer hover:bg-stone-600"
                onClick={handleEmail}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-3">
              <div className="customerCare">
                <h3 className="mb-6">Customer Care</h3>
                <ul className="list-none flex flex-col gap-4">
                  <li className="cursor-pointer">Contact Us</li>
                  <li className="cursor-pointer">Delivery</li>
                  <li className="cursor-pointer">Returns</li>
                  <li className="cursor-pointer">FAQ</li>
                </ul>
              </div>
              <div className="">
                <h3 className="mb-6">Explore</h3>
                <ul className="list-none flex flex-col gap-4">
                  <li className="cursor-pointer">Our Story</li>
                  <li className="cursor-pointer">Blog</li>
                  <li className="cursor-pointer">#ShopTure</li>
                  <li className="cursor-pointer">Track Your Order</li>
                </ul>
              </div>
              <div className="">
                <h3 className="mb-6">Extras</h3>
                <ul className="list-none flex flex-col gap-4">
                  <li className="cursor-pointer">Refer a Friend</li>
                  <li className="cursor-pointer">Spare Clothes</li>
                  <li className="cursor-pointer">Loyalty & Rewards</li>
                  <li className="cursor-pointer">Recycling Products</li>
                </ul>
              </div>
            </div>
            <div className="">
              <ul className="flex list-none items-center justify-start my-12 gap-8">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 50 50"
                  >
                    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 50 50"
                  >
                    <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
                  </svg>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-6 mb-8">
                <p>
                  <a className="cursor-pointer text-stone-400 hover:border-b">
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a className="cursor-pointer text-stone-400 hover:border-b">
                    Terms and Conditions
                  </a>
                </p>
                <p>
                  <a className="cursor-pointer text-stone-400 hover:border-b">
                    Security Policy
                  </a>
                </p>
                <p>
                  <a className="cursor-pointer text-stone-400">Cookie Policy</a>
                </p>
              </div>
              <p className="text-stone-400">&copy; Shopture Inc. 2025</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
