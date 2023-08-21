import Link from "next/link";
import { useState } from "react";

function LetTalkBtn() {
  return (
    <nav>
      <Link href="/contact">
        <button className="bg-red-500 text-xs lg:text-xl text-white p-1 px-6 rounded-xl">
          LET&apos;S TALK
        </button>
      </Link>
    </nav>
  );
}
export default function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header
        className="fixed bg-white w-full"
        style={{
          zIndex: 1000,
          top: 0,
        }}
      >
        {!menu ? (
          <></>
        ) : (
          <div className="p-2 w-full ">
            <div className="flex justify-between ">
              <Link href="/">
                <nav className="text-red-500 font-mono ">Event Architects</nav>
              </Link>
              <button
                onClick={() => {
                  setMenu(false);
                }}
              >
                close
              </button>
            </div>
            <nav className=" flex w-full absolute justify-evenly flex-col bg-white space-y-4 py-4">
              <Link
                href="/services"
                onClick={() => {
                  setMenu(false);
                }}
              >
                Services
              </Link>
              <Link
                href="/about"
                onClick={() => {
                  setMenu(false);
                }}
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => {
                  setMenu(false);
                }}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
        <div
          style={{
            background: "rgba(255, 0, 0, 0.052)",
          }}
          className="p-5 md:hidden"
        >
          <div className=" flex w-full justify-between">
            <Link href="/">
              <nav className="text-red-500 font-mono ">Event Architects</nav>
            </Link>
            <button
              className=""
              onClick={() => {
                setMenu(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                viewBox="0 -960 960 960"
                width="28"
              >
                <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
              </svg>
            </button>
          </div>
          <nav className=" flex justify-end lg:hidden mt-2">
            <LetTalkBtn />
          </nav>
        </div>
        <div
          style={{
            background: "rgba(255, 0, 0, 0.052)",
          }}
          className="p-10 hidden md:block"
        >
          <div className=" flex w-full">
            <Link href="/">
              <nav className="text-red-500 font-mono ">Event Architects</nav>
            </Link>
            <nav className="ml-auto flex w-full max-w-md justify-evenly">
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <nav className="hidden lg:block">
              <LetTalkBtn />
            </nav>
          </div>
          <nav className=" flex justify-end lg:hidden mt-10">
            <LetTalkBtn />
          </nav>
        </div>
      </header>
    </>
  );
}
