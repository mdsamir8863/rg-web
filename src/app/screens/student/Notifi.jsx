import { useSelector } from "react-redux";

const Notifi = () => {
  const { user } = useSelector((e) => e.user_reducer);

  return (
    <>
      <section className="w-full flex flex-col items-center">
        <div className="flex p-4 w-full font-bold text-2xl text-gray-800 items-center gap-2">
          <span>Notification</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </div>
        <div className="flex w-3/4 ">
          <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 .text-gray-400">
              <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-blue-100 .text-white .bg-gray-800">
                Interest
                <p className="mt-1 text-sm font-normal text-gray-500 .text-gray-400">
                  Your applied interest shows here ..
                </p>
              </caption>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 .bg-gray-700 .text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Pings.
                  </th>
                </tr>
              </thead>
              <tbody>
                {user?.user_details?.noti &&
                  user?.user_details?.noti.map((e, i) => (
                    <tr
                      key={i}
                      className="bg-white border-b .bg-gray-800 .border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 flex py-4 font-medium text-gray-900 whitespace-nowrap .text-white"
                      >
                        <span className="flex w-3 h-3 me-3 bg-green-500 rounded-full"></span>

                        {e}
                      </th>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Notifi;
