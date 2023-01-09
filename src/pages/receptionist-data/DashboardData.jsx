import React from 'react'

function DashboardData() {
  return (
    <div className="grid grid-cols-12 gap-3 ml-3 mt-4">
      <div className="col-span-7">
        <div className="flex flex-row w-full p-4 bg-white rounded-xl shadow-lg">
          <div className="w-2/4 flex items-center justify-center">
            {/* <BarChart /> */}
            This is where the bar chart is going to stay
          </div>
          <div className="grid grid-cols-12 m-3 flex-wrap justify-center gap-4 w-2/4">
            <div className="col-span-6 grid grid-rows-12 gap-3">
              <div className="flex flex-col card-background p-5 rounded-xl shadow-md">
                <div className="flex flex-row">
                  <span className="bg-white text-darkBlue p-1 border-2 border-darkBlue rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                    </svg>
                  </span>
                  <span className="flex items-center justify-center text-sm text-black font-semibold pl-2">
                    patients
                  </span>
                </div>
                <div className="flex flex-row my-4">
                  <span className="text-2xl text-black font-semibold">
                    1,893
                  </span>
                </div>
                <div className="flex flex-row">
                  <span className="text-xs text-black">Last 7 days</span>
                  <span className="flex justify-center items-center ml-4">
                    <span className="text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                        />
                      </svg>
                    </span>
                    <span className="text-[13px] text-gray-400">2.1%</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col card-background-2 p-5 rounded-xl shadow-md">
                <div className="flex flex-row">
                  <span className="bg-white text-darkOrange p-1 border-2 border-darkOrange rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5H15v-18a.75.75 0 000-1.5H3zM6.75 19.5v-2.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 010 1.5h-.75A.75.75 0 016 6.75zM6.75 9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM6 12.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 6a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zm-.75 3.75A.75.75 0 0110.5 9h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 12a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM16.5 6.75v15h5.25a.75.75 0 000-1.5H21v-12a.75.75 0 000-1.5h-4.5zm1.5 4.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 2.25a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75h-.008zM18 17.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="flex items-center justify-center text-sm text-black font-semibold pl-2">
                    visits
                  </span>
                </div>
                <div className="flex flex-row my-4">
                  <span className="text-2xl text-black font-semibold">364</span>
                </div>
                <div className="flex flex-row">
                  <span className="text-xs text-black">Last 7 days</span>
                  <span className="flex justify-center items-center ml-4">
                    <span className="text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                        />
                      </svg>
                    </span>
                    <span className="text-[13px] text-gray-400">2.1%</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-6 grid grid-rows-12 gap-3">
              <div className="flex flex-col card-background-3 p-5 rounded-xl shadow-md">
                <div className="flex flex-row">
                  <span className="bg-white text-darkGreen p-1 border-2 border-darkGreen rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                      />
                      <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                    </svg>
                  </span>
                  <span className="flex items-center justify-center text-sm text-black font-semibold pl-2">
                    HMO
                  </span>
                </div>
                <div className="flex flex-row my-4">
                  <span className="text-2xl text-black font-semibold">200</span>
                </div>
                <div className="flex flex-row">
                  <span className="text-xs text-black">Last 7 days</span>
                  <span className="flex justify-center items-center ml-4">
                    <span className="text-gray-400 rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                        />
                      </svg>
                    </span>
                    <span className="text-[13px] text-gray-400">2.1%</span>
                  </span>
                </div>
              </div>
              <div className="flex flex-col card-background-4 p-5 rounded-xl shadow-md">
                <div className="flex flex-row">
                  <span className="bg-white text-darkPurple p-1 border-2 border-darkPurple rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                        clipRule="evenodd"
                      />
                      <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                    </svg>
                  </span>
                  <span className="flex items-center justify-center text-sm text-black font-semibold pl-2">
                    Doctors
                  </span>
                </div>
                <div className="flex flex-row my-4">
                  <span className="text-2xl text-black font-semibold">23</span>
                </div>
                <div className="flex flex-row">
                  <span className="text-xs text-black">Last 7 days</span>
                  <span className="flex justify-center items-center ml-4">
                    <span className="text-gray-400 rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                        />
                      </svg>
                    </span>
                    <span className="text-[13px] text-gray-400">2.1%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 bg-white shadow-lg rounded-xl p-4">
        <div
          className="flex w-full items-center justify-center
            "
        >
          this is where the chart will stay
        </div>
      </div>
    </div>
  );
}

export default DashboardData