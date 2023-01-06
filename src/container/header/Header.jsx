import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <nav class="bg-white w-full flex relative shadow justify-between items-center px-8 h-20">
        <div class="inline-flex">
          <p className="mx-5 text-[#00153B] text-[30px] leading-[63px] font-bold">
            DIDA{" "}
            <span className="text-slate-500 text-[20px] leading-[33px]">
              CRUD APP
            </span>
          </p>
        </div>

        {/* <div class="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">  */}
        <div class="relative hidden sm:block flex-shrink flex-grow-0">
          <input
            type="text"
            class="input_stylebg-purple-white bg-gray-100 rounded-lg border-0 p-3 w-full"
            placeholder="Search somthing..."
          />
          <div class="absolute top-0 right-0 p-4 pr-3 text-purple-lighter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>

        <div class="flex-initial">
          <div class="flex justify-end items-center relative">
            <div class="flex mr-4 items-center">
              <div class="block relative">
                <button
                  type="button"
                  class="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative "
                >
                  <div class="flex items-center h-5">
                    <div class="_xpkakx">
                      <svg
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        className="svg1_style"
                        // style="display: block; height: 16px; width: 16px; fill: currentcolor;"
                      >
                        <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div class="block">
              <div class="inline relative">
                <button
                  type="button"
                  class="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg"
                >
                  <div class="pl-1">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      className="svg2_style"
                      // style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"
                    >
                      <g fill="none" fill-rule="nonzero">
                        <path d="m2 16h28"></path>
                        <path d="m2 24h28"></path>
                        <path d="m2 8h28"></path>
                      </g>
                    </svg>
                  </div>

                  <div class="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      className="svg3_style"
                      // style="display: block; height: 100%; width: 100%; fill: currentcolor;"
                    >
                      <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
