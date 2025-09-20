import { useState } from "react";
import Button from "../ui/Button";
import toast from "react-hot-toast";

// Import Social Media Icons
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleEmail() {
    if (!email) {
      toast.error("Input a valid email address.");
    } else {
      toast.success(`Newsletter subscription for ${email} Successful !!`);
      setEmail("");
    }
  }

  return (
    <footer className="bg-stone-900 text-gray-300">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-start space-y-4">
            <h3 className="border-b-2 border-gray-500 pb-2 text-xl font-bold tracking-wider text-white uppercase">
              Newsletter
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Stay updated with our latest offers and news.
            </p>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mr-3 w-full rounded-md border border-gray-600 bg-gray-700 px-4 py-2 text-sm placeholder-gray-400 focus:outline-none"
              />
              <Button type="dark" onClick={handleEmail}>
                Subscribe
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="border-b-2 border-gray-500 pb-2 text-xl font-bold tracking-wider text-white uppercase">
              Customer Care
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="border-b-2 border-gray-500 pb-2 text-xl font-bold tracking-wider text-white uppercase">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white hover:underline">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline">
                  #ShopTure
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline">
                  Track Your Order
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="border-b-2 border-gray-500 pb-2 text-xl font-bold tracking-wider text-white uppercase">
              Extras
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white hover:underline">
                  Refer a Friend
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline">
                  Loyalty & Rewards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline">
                  Recycling Products
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between space-y-6 border-t border-gray-700 pt-8 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-6">
            <a href="#" aria-label="Instagram">
              <FaInstagram className="h-6 w-6 text-gray-400 transition-colors hover:text-white" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="h-6 w-6 text-gray-400 transition-colors hover:text-white" />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebook className="h-6 w-6 text-gray-400 transition-colors hover:text-white" />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube className="h-6 w-6 text-gray-400 transition-colors hover:text-white" />
            </a>
            <a href="#" aria-label="TikTok">
              <FaTiktok className="h-6 w-6 text-gray-400 transition-colors hover:text-white" />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Shopture Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
