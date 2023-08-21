export default function About() {
  return (
    <>
      <div className=" mt-40">
        <h1 className="mx-10 font-bold">About</h1>
        <p className=" font-serif text-xs md:text-sm px-10 pt-10">
          Welcome to the event architects, your premier destination for creating
          unforgettable moments and exceptional celebrations. With a passion for
          turning dreams into reality, we specialize in crafting bespoke events
          that reflect your unique style and personality. From enchanting
          weddings to joyous birthdays and every special occasion in between, we
          are your trusted partner in making your vision come to life.
        </p>
        <p className=" font-serif text-xs md:text-sm px-10 pt-10">
          We believe that the magic lies in the details. Join us in creating
          events that not only celebrate the present but also leave a lasting
          mark on the future. Contact us today to embark on a journey of
          creativity, joy, and unforgettable celebrations.
        </p>
        <nav className="mt-10 p-10">
          <span className="border-blue-500 border-b-2  font-bold  ">
            Our Vision
          </span>
          <p className="mt-10 font-serif text-xs md:text-sm">
            Our vision at Event Architects is to be the premiere event planning
            company, renowned for our exceptional attention to detail and
            exquisite design. We strive to create unforgettable experiences that
            exceed our clients’ expectations and leave a lasting impression on
            all attendees. With our meticulous planning and creative expertise,
            we aim to be the go-to choice for individuals and organizations
            seeking extraordinary events.
          </p>
        </nav>
        <div className="flex   justify-between flex-col md:flex-row bg-red-100 p-10">
          <div className="flex-1 m-auto">
            <img src="/team.webp" alt="" />
          </div>
          <div className="flex-1 flex flex-col justify-start  lg:justify-center pl-5">
            <h1 className="font-bold text-xl mt-10 text-center mb-5 md:mt-0 ">
              Team Story
            </h1>
            <p className="font-serif text-xs md:text-sm">
              Event Architects was founded with a vision to revolutionize the
              event management industry. Our team is comprised of seasoned
              professionals with years of experience in planning and executing
              flawless events. With an unwavering commitment to excellence and a
              meticulous attention to detail, we work tirelessly to exceed our
              clients’ expectations and create unforgettable experiences.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
