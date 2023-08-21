export default function Contact() {
  return (
    <>
      <form
        action=""
        className="mt-60 max-w-xl m-auto bg-white p-4 bg-opacity-50"
      >
        <div className="flex flex-col space-y-5 my-10">
          <nav className="flex flex-col">
            <label htmlFor="" className="text-sm font-bold mb-2 text-gray-700 ">
              Full Name
            </label>
            <input
              type="name"
              name="name"
              id=""
              placeholder="Enter Name"
              className="border p-1 rounded-sm"
            />
          </nav>
          <nav className="flex flex-col">
            <label htmlFor="" className="text-sm font-bold mb-2 text-gray-700 ">
              Phone
            </label>
            <input
              type="name"
              name="name"
              id=""
              placeholder="Enter Phone"
              className="border p-1 rounded-sm"
            />
          </nav>
          <nav className="flex flex-col">
            <label htmlFor="" className="text-sm font-bold mb-2 text-gray-700 ">
              Email
            </label>
            <input
              type="name"
              name="name"
              id=""
              placeholder="Enter Email"
              className="border p-1 rounded-sm"
            />
          </nav>
          <nav className="flex flex-col">
            <label htmlFor="" className="text-sm font-bold mb-2 text-gray-700 ">
              message
            </label>

            <textarea
              name=""
              id=""
              placeholder="Enter Message"
              cols="30"
              rows="10"
              className="border p-1 rounded-sm"
            ></textarea>
          </nav>
          <nav className="flex justify-center">
            <button className="bg-blue-600  text-white rounded-md p-1  px-20">
              Submit
            </button>
          </nav>
        </div>
      </form>
    </>
  );
}
