export default function Services() {
  return (
    <>
      <div className="bg-white py-10 bg-slate-50 mt-40">
        <h1 className="font-bold text-3xl  text-center font-serif py-10">
          Services we provide
        </h1>

        <div className="flex flex-wrap justify-between gap-10 m-2 md:m-10">
          <nav className="lg:max-w-md xl:max-w-lg  bg-red-100 p-10 rounded-xl">
            <h1 className="font-bold mb-2 text-xs md:text-xl font-serif">
              Exquisite Birthday Celebrations that Last Forever
            </h1>
            <nav className="font-serif text-xs md:text-md">
              Celebrate your loved ones with our formal and elegant birthday
              service, ensuring a memorable day filled with joy and special
              moments.
            </nav>
          </nav>
          <nav className="lg:max-w-md xl:max-w-lg  bg-yellow-100 p-10 rounded-xl">
            <h1 className="font-bold mb-2 text-xs md:text-xl font-serif">
              Elegant Wedding Experiences to Remember
            </h1>
            <nav className="font-serif text-xs md:text-md">
              Our wedding service ensures a flawless and elegant event,
              meticulously planned with attention to every detail, creating
              unforgettable memories.
            </nav>
          </nav>
          <nav className="lg:max-w-md xl:max-w-lg  bg-green-100 p-10 rounded-xl">
            <h1 className="font-bold mb-2 text-xs md:text-xl font-serif">
              Unforgettable Graduation Ceremonies and Celebrations
            </h1>
            <nav className="font-serif text-xs md:text-md">
              Our Graduation service offers a formal and memorable experience,
              celebrating the achievements of students as they embark on their
              next chapter
            </nav>
          </nav>
          <nav className="lg:max-w-md xl:max-w-lg  bg-blue-100 p-10 rounded-xl">
            <h1 className="font-bold mb-2 text-xs md:text-xl font-serif">
              Exquisite Birthday Celebrations that Last Forever
            </h1>
            <nav className="font-serif text-xs md:text-md">
              Celebrate your loved ones with our formal and elegant birthday
              service, ensuring a memorable day filled with joy and special
              moments.
            </nav>
          </nav>
        </div>
      </div>
      <div className="bg-white py-2">
        <div className="flex  mt-20 justify-between flex-col md:flex-row bg-red-100 p-4 py-20 ">
          <div className="flex-1 m-auto">
            <img src="/bday.jpg" alt="" />
          </div>
          <div className="flex-1 flex flex-col justify-start pl-5 lg:justify-center ">
            <h1 className="font-bold  mt-10 text-center mb-5 md:mt-0  font-serif text-xs md:text-xl">
              Exquisite Birthday Celebrations that Last Forever
            </h1>
            <p className="font-serif text-xs md:text-sm">
              Our birthday service offers a formal and elegant experience for
              individuals celebrating their special day. Our team of
              professionals meticulously plans and executes every detail, from
              venue selection to catering and entertainment. With our
              personalized approach, we ensure a memorable and sophisticated
              birthday celebration that exceeds expectations.
            </p>
          </div>
        </div>

        <div className="flex mt-10   justify-between flex-col md:flex-row bg-yellow-100 p-4 py-20">
          <div className="flex-1 flex flex-col justify-start pr-5 md:justify-center">
            <h1 className="font-bold  mt-10 text-center mb-5 md:mt-0  font-serif text-xs md:text-xl">
              Elegant Wedding Experiences to Remember
            </h1>

            <p className="font-serif text-xs md:text-sm">
              Welcome to our exquisite wedding service, where elegance meets
              perfection. Our team of experienced professionals will ensure that
              your special day is nothing short of extraordinary. From the
              breathtaking venue to the impeccable decor, trust us to create
              memories that will last a lifetime.
            </p>
          </div>
          <div className="flex-1 m-auto order-first md:order-last">
            <img src="/wedding.webp" alt="" />
          </div>
        </div>

        <div className="flex  mt-20 justify-between flex-col md:flex-row bg-green-100 p-4 py-20">
          <div className="flex-1 m-auto">
            <img src="/graduation.webp" alt="" />
          </div>
          <div className="flex-1 flex flex-col justify-start pl-5 lg:justify-center">
            <h1 className="font-bold  mt-10 text-center mb-5 md:mt-0  font-serif text-xs md:text-xl">
              Unforgettable Graduation Ceremonies and Celebrations
            </h1>
            <p className="font-serif text-xs md:text-sm">
              Our Graduation service offers a dignified and memorable experience
              for graduates and their families. With meticulous attention to
              detail, we ensure that the ceremony is executed flawlessly, from
              the procession to the conferral of diplomas. Our team of
              experienced professionals is dedicated to creating an atmosphere
              of celebration and accomplishment, making the graduation day truly
              special for all involved.
            </p>
          </div>
        </div>

        <div className="flex mt-20 justify-between flex-col md:flex-row  bg-blue-100 p-4 py-20">
          <div className="flex-1 flex flex-col justify-start pr-5 lg:justify-center">
            <h1 className="font-bold  mt-10 text-center mb-5 md:mt-0  font-serif text-xs md:text-xl"></h1>
            <p className="font-serif text-xs md:text-sm">
              Our service offers a comprehensive range of solutions tailored to
              meet the unique needs of our clients. With a focus on
              professionalism and attention to detail, we strive to provide a
              seamless experience for all our customers. From initial
              consultation to final delivery, our team of experts is dedicated
              to delivering exceptional results and exceeding expectations.
            </p>
          </div>
          <div className="flex-1 m-auto order-first md:order-last">
            <img src="/last.webp" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
