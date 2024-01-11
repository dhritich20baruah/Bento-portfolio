import React from "react";

const Resume = () => {
  return (
    <section className="bg-black text-white">
      <div id="aboutMe">
        <h1 className="text-4xl text-center font-bold text-cyan-400 my-16">
          About Me
        </h1>

        <div className="grid md:grid-cols-2 gap-4 grid-cols-1 justify-items-center">
          <p className="text-justify md:px-16 px-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            blanditiis veniam inventore eum illo ad quos laudantium
            reprehenderit vel dicta? Omnis blanditiis eligendi, provident
            inventore corporis, dolores quis aperiam, voluptate nemo iusto
            numquam quia? Quaerat soluta, recusandae vero possimus sint
            asperiores molestias non, quidem minima repudiandae praesentium
            expedita culpa dignissimos.
          </p>
          <ul className="space-y-4 md:px-16 p-3">
            <li>
              <span className="text-cyan-400 font-bold">Age</span> 35
            </li>
            <li>
              <span className="text-cyan-400 font-bold">Address</span> 221 B
              Baker Street, London
            </li>
            <li>
              <span className="text-cyan-400 font-bold">Email</span>
              dexter@email.com
            </li>
            <li>
              <span className="text-cyan-400 font-bold">Phone</span>{" "}
              +51-8877-5566
            </li>
          </ul>
        </div>
        <div className="flex md:flex-row flex-col md:justify-evenly text-center md:my-28 my-10 md:space-y-0 space-y-5">
          <div>
            <p>
              <span
                className="text-slate-300 text-5xl font-bold"
                id="experience"
              >
                15+
              </span>
              <br />
              Years of experience
            </p>
          </div>
          <div>
            <p>
              <span className="text-slate-300 text-5xl font-bold" id="projects">
                500+
              </span>
              <br />
              Projects Completed
            </p>
          </div>
          <div>
            <p>
              <span className="text-slate-300 text-5xl font-bold" id="clients">
                150+
              </span>
              <br />
              Happy Clients
            </p>
          </div>
          <div>
            <p>
              <span className="text-slate-300 text-5xl font-bold" id="awards">
                25+
              </span>
              <br />
              Awards
            </p>
          </div>
        </div>
        <h1 className="text-xl font-bold text-cyan-400 my-10 mx-5">
          What I can do for you?
        </h1>
        <div className="services grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 justify-items-center">
          <div className="flex flex-row rounded-md shadow-2xl p-5 w-[100%]">
            <div>
              <i className="fa fa-paint-brush text-xl text-cyan-400"></i>
            </div>
            <div className="px-5">
              <h1 className="text-lg font-bold">Graphics Design</h1>
              <p className="text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
                non, repellat nisi aliquid accusamus totam? Laudantium minus
                rerum laborum nobis!
              </p>
            </div>
          </div>
          <div className="flex flex-row rounded-md shadow-2xl p-5 w-[100%]">
            <div>
              <i className="fa fa-desktop text-xl text-cyan-400"></i>
            </div>
            <div className="px-5">
              <h1 className="text-lg font-bold">Web Design</h1>
              <p className="text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
                non, repellat nisi aliquid accusamus totam? Laudantium minus
                rerum laborum nobis!
              </p>
            </div>
          </div>

          <div className="flex flex-row rounded-md shadow-2xl p-5 w-[100%]">
            <div>
              <i className="fa fa-bullhorn text-xl text-cyan-400"></i>
            </div>
            <div className="px-5">
              <h1 className="text-lg font-bold">SEO Marketing</h1>
              <p className="text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
                non, repellat nisi aliquid accusamus totam? Laudantium minus
                rerum laborum nobis!
              </p>
            </div>
          </div>
          <div className="flex flex-row rounded-md shadow-2xl p-5 w-[100%]">
            <div>
              <i className="fa fa-mobile-phone text-xl text-cyan-400"></i>
            </div>
            <div className="px-5">
              <h1 className="text-lg font-bold">App Design & Development</h1>
              <p className="text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
                non, repellat nisi aliquid accusamus totam? Laudantium minus
                rerum laborum nobis!
              </p>
            </div>
          </div>

          <div className="flex flex-row rounded-md shadow-2xl p-5 w-[100%]">
            <div>
              <i className="fa fa-bar-chart text-xl text-cyan-400"></i>
            </div>
            <div className="px-5">
              <h1 className="text-lg font-bold">Business Analysis</h1>
              <p className="text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
                non, repellat nisi aliquid accusamus totam? Laudantium minus
                rerum laborum nobis!
              </p>
            </div>
          </div>
          <div className="flex flex-row rounded-md shadow-2xl p-5 w-[100%]">
            <div>
              <i className="fa fa-pencil text-xl text-cyan-400"></i>
            </div>
            <div className="px-5">
              <h1 className="text-lg font-bold">Copy Writing</h1>
              <p className="text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
                non, repellat nisi aliquid accusamus totam? Laudantium minus
                rerum laborum nobis!
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-4xl font-bold text-cyan-400 my-16 text-center">
        Resume
      </h1>
      <div className="flex md:flex-row md:justify-evenly flex-col m-5">
        <div id="education" className="mx-5">
          <h1 className="text-lg font-bold mx-5">Education</h1>
          <hr />
          <div className="p-5">
            <p className="font-bold my-2">
              <span className="text-xl bg-cyan-400 text-white p-1 rounded">
                2012
              </span>
              School of Design
            </p>
            <h1 className="font-bold text-cyan-400">Graphics Design</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium excepturi eligendi deleniti ad ab aperiam facere sint
              beatae, iusto explicabo.
            </p>
          </div>
          <div className="p-5">
            <p className="font-bold my-2">
              <span className="text-xl bg-cyan-400 text-white p-1 rounded">
                2011
              </span>
              College of Engineering
            </p>
            <h1 className="font-bold text-cyan-400">Frontend Engineering</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto eligendi labore blanditiis, ullam nesciunt velit
              doloremque repellat. Eaque, fugit incidunt.
            </p>
          </div>
          <div className="p-5">
            <p className="font-bold my-2">
              <span className="text-xl bg-cyan-400 text-white p-1 rounded">
                2010
              </span>
              School of Engineering
            </p>
            <h1 className="font-bold text-cyan-400">Computer Science</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et rem
              amet obcaecati pariatur labore necessitatibus, praesentium ipsum
              distinctio nostrum sint.
            </p>
          </div>
        </div>
        <div id="experience" className="mx-5">
          <h1 className="text-lg font-bold mx-5">Experience</h1>
          <hr />
          <div className="p-5">
            <p className="font-bold my-2">
              <span className="text-xl bg-cyan-400 text-white p-1 rounded">
                2020 - Present
              </span>
              Star Infotech
            </p>
            <h1 className="font-bold text-cyan-400">Lead Engineer</h1>
            <p className="text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              dolores eius inventore culpa provident, cupiditate reprehenderit
              quae quibusdam impedit id.
            </p>
          </div>
          <div className="p-5">
            <p className="font-bold my-2">
              <span className="text-xl bg-cyan-400 text-white p-1 rounded">
                2015 - 2020
              </span>
              Delta Tech
            </p>
            <h1 className="font-bold text-cyan-400">
              Senior Frontend Engineer
            </h1>
            <p className="text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              dolores eius inventore culpa provident, cupiditate reprehenderit
              quae quibusdam impedit id.
            </p>
          </div>
          <div className="p-5">
            <p className="font-bold my-2">
              <span className="text-xl bg-cyan-400 text-white p-1 rounded">
                2013 - 2015
              </span>
              Linear Engineer
            </p>
            <h1 className="font-bold text-cyan-400">
              Junior Frontend Engineer
            </h1>
            <p className="text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              dolores eius inventore culpa provident, cupiditate reprehenderit
              quae quibusdam impedit id.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-lg font-bold mx-16">My Skills</h1>
      <div
        id="skills"
        className="flex md:flex-row md:justify-evenly flex-col justify-center mx-16 my-5"
      >
        <ul className="md:w-[50%] px-5 space-y-5">
          <li>
            <div className="flex justify-between my-3">
              <p className="font-bold">HTML/CSS</p>
              <p>
                <span className="levelPc"></span>%
              </p>
            </div>
            <div className="w-[100%] h-2 bg-orange-500 rounded-md">
              <div className="h-2 bg-cyan-400 rounded-md skillItem"></div>
            </div>
          </li>
          <li>
            <div className="flex justify-between my-3">
              <p className="font-bold">Javascript</p>
              <p>
                <span className="levelPc"></span>%
              </p>
            </div>
            <div className="w-[100%] h-2 bg-orange-500 rounded-md">
              <div className="h-2 bg-cyan-400 rounded-md skillItem"></div>
            </div>
          </li>
          <li>
            <div className="flex justify-between my-3">
              <p className="font-bold">React</p>
              <p>
                <span className="levelPc"></span>%
              </p>
            </div>
            <div className="w-[100%] h-2 bg-orange-500 rounded-md">
              <div className="h-2 bg-cyan-400 rounded-md skillItem"></div>
            </div>
          </li>
        </ul>
        <ul className="md:w-[50%] px-5 space-y-5">
          <li>
            <div className="flex justify-between my-3">
              <p className="font-bold">Bootstrap</p>
              <p>
                <span className="levelPc"></span>%
              </p>
            </div>
            <div className="w-[100%] h-2 bg-orange-500 rounded-md">
              <div className="h-2 bg-cyan-400 rounded-md skillItem"></div>
            </div>
          </li>
          <li>
            <div className="flex justify-between my-3">
              <p className="font-bold">Tailwind CSS</p>
              <p>
                <span className="levelPc"></span>%
              </p>
            </div>
            <div className="w-[100%] h-2 bg-orange-500 rounded-md">
              <div className="h-2 bg-cyan-400 rounded-md skillItem"></div>
            </div>
          </li>
          <li>
            <div className="flex justify-between my-3">
              <p className="font-bold">NextJS</p>
              <p>
                <span className="levelPc"></span>%
              </p>
            </div>
            <div className="w-[100%] h-2 bg-orange-500 rounded-md">
              <div className="h-2 bg-cyan-400 rounded-md skillItem"></div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
