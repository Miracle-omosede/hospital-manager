import React from 'react'
// import { datas } from "../receptionist-data/ReceptionistSidebar";
// import { HiChartPie } from "react-icons/hi";
// import { HiUser } from "react-icons/hi";
// // import { HiEnvelope } from "react-icons/hi";
// // import { IoCalendar } from "react-icons/io";
// import { RiFileTextFill } from "react-icons/ri";
// import { IoExit } from "react-icons/io";

        <div className="flex-1">
          <form method="GET">
            <div class="relative text-darkGray focus-within:text-gray-400">
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  class="p-1 focus:outline-none focus:shadow-outline"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-6 h-6"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="q"
                class="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                placeholder="Search..."
                autocomplete="off"
              />
            </div>
          </form>
        </div>;


function SidebarData() {

    const datas = [
      {
        id: 1,
        // icon: <HiChartPie />,
        text: "Dashboard",
      },
      {
        id: 2,
        // icon: <HiUser />,
        text: "Patients",
      },
    //   {
    //     id: 3,
    //     icon: <HiEnvelope />,
    //     text: "Messages",
    //   },
    //   {
    //     id: 4,
    //     icon: <IoCalendar />,
    //     text: "Appointments",
    //   },
      {
        id: 5,
        // icon: <RiFileTextFill />,
        text: "Records",
      },
      {
        id: 6,
        // icon: <IoExit />,
        text: "Log-out",
      },
    ];

  return (
    <div>
        {datas.map ( data => {
            return (
                <div className=''>
                    <div className=''>
                        {data.id.icon}
                    </div>
                    <div className=''>
                        {data.id.text}
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default SidebarData