function About() {
  return (
    <div className="bg-[#f9f9f9] py-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-0">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div>
            <h2 className="pb-4 pt-6 text-4xl sm:text-5xl px-4  font-bold text-[#272727] text-center sm:text-left">
              Welcome to Your Health <br /> Center
            </h2>
            <p className="text-center sm:text-left px-4 py-2 text-[#757575]">
              Aenean luctus lobortis tellus, vel ornare enim molestie
              condimentum. Curabitur <br />
              lacinia nisi vitae velit volutpat venenatis.
            </p>
            <p className="text-center sm:text-left px-4  py-2 text-[#757575]">
              Sed a dignissim lacus. Quisque fermentum est non orci commodo, a
              luctus <br />
              urna mattis. Ut placerat, diam a tempus vehicula.
            </p>
            <div className="pt-5 ">
              <img
                src="/images/author-image.jpg"
                className="inline-block rounded-full h-[85px] w-[85px]"
                alt=""
              />
              <p className="pl-5 inline-block left-0 text-[#333333]">
                <span className="text-2xl font-bold">Dr. Neil Jackson</span>
                <br />
                <span className="">General Principal</span>
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img className="hidden sm:block" src="/images/aboutbg.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
