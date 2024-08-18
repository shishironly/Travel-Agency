
const About = () => {
  return <div>
    <div
        className="h-96 w-screen bg-cover bg-center relative text-white "
        style={{
          backgroundImage:
            "url(https://www.state.gov/wp-content/uploads/2023/07/shutterstock_655126330v2.jpg)",
        }}
      >
        <div className="text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-3xl whitespace-nowrap font-extrabold md:text-5xl">
            About Us
          </h1>
        </div>
      </div>

      <div className="flex flex-col m-10 gap-10 md:flex-row">
        <div className="image w-full md:1/2">
            <img src="https://www.state.gov/wp-content/uploads/2023/07/shutterstock_655126330v2.jpg"  className="h-[50vh] w-full object-cover" alt="" />
        </div>
        <div className="flex w-full md:1/2 flex-col gap-4">
            <div>
                <h1 className="text-xl font-bold">Who We Are</h1>
                <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, architecto, laboriosam autem unde ex quas id corrupti ab, recusandae accusamus sapiente quaerat vero corporis distinctio velit obcaecati. Beatae, quos dignissimos!</p>
            </div>

            <div>
                <h1 className="text-xl font-bold">Our Mission</h1>
                <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, architecto, laboriosam autem unde ex quas id corrupti ab, recusandae accusamus sapiente quaerat vero corporis distinctio velit obcaecati. Beatae, quos dignissimos!</p>
            </div>
        </div>
      </div>
  </div>;
};

export default About;
