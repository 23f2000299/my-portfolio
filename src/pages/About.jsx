import PageWrapper from "../components/PageWrapper";
import ProfilePic from "../assets/profile.jpg";

const Skill = ({ name }) => {
  return (
    <div
      className="
        px-4 py-2
        bg-slate-900/60
        border border-slate-700/60
        rounded-lg
        text-slate-200
        text-sm font-medium

        hover:border-blue-400/60
        hover:text-blue-300
        hover:bg-slate-800/80

        transition-all duration-300
        cursor-default
      "
    >
      {name}
    </div>
  );
};

const About = () => {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Top Section */}
        <div
  className="
    bg-slate-900/70
    backdrop-blur-md
    border border-slate-400/50   /* subtle, always-on light border */
    rounded-3xl
    p-10
    shadow-xl shadow-blue-500/5

    flex flex-col md:flex-row md:items-center gap-8

    hover:border-blue-400/40     /* optional hover accent */
    transition-all duration-500
  "
>
          {/* Profile Picture */}
          <div className="flex-shrink-0 -mt-6">
            <img
              src={ProfilePic}
              alt="Fathima Sameeha"
              className="
                w-44 h-44
                rounded-xl
                border border-blue-400/40
                object-cover
                shadow-lg
                shadow-blue-500/10
              "
            />
          </div>

          {/* Intro */}
          <div className="flex-1 space-y-4">

            <h2
              className="
                text-2xl md:text-3xl
                font-semibold
                text-blue-400
                tracking-tight
              "
            >
              Hello! I'm Fathima Sameeha
            </h2>

            <p className="text-slate-300 leading-relaxed text-base font-light">

              I'm a Computer Science Engineering student with a strong passion
              for coding and problem-solving. I enjoy tackling challenging
              problems and building efficient, scalable solutions across web
              development and intelligent systems.

              <br /><br />

              I have experience designing secure backends, creating intuitive
              interfaces, and implementing reliable algorithms. Working on
              projects that combine backend architecture with intelligent logic
              motivates me to continuously grow.

              <br /><br />

              I actively participate in coding challenges and enjoy building
              projects that create meaningful real-world impact.
            </p>

          </div>
        </div>


        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">

       <div
  className="
    group relative
    bg-slate-900/70
    backdrop-blur-md
    border border-slate-400/50   /* lighter, subtle border */
    p-6
    rounded-2xl
    transition-all duration-300
    hover:-translate-y-1
    hover:border-indigo-400      /* keeps hover accent if needed */
    hover:shadow-[0_0_25px_rgba(99,102,241,0.15)] /* very subtle hover shadow */
  "
>
            <h4 className="text-3xl font-bold text-blue-400">
              9.0
            </h4>

            <p className="text-slate-300 mt-2">
              Engineering GPA
            </p>
          </div>


          <div
  className="
    group relative
    bg-slate-900/70
    backdrop-blur-md
    border border-slate-400/50   /* lighter, subtle border */
    p-6
    rounded-2xl
    transition-all duration-300
    hover:-translate-y-1
    hover:border-indigo-400      /* keeps hover accent if needed */
    hover:shadow-[0_0_25px_rgba(99,102,241,0.15)] /* very subtle hover shadow */
  "
>
            <h4 className="text-3xl font-bold text-blue-400">
              100+
            </h4>

            <p className="text-slate-300 mt-2">
              Leetcode Problems Solved
            </p>
          </div>


          <div
  className="
    group relative
    bg-slate-900/70
    backdrop-blur-md
    border border-slate-400/50   /* lighter, subtle border */
    p-6
    rounded-2xl
    transition-all duration-300
    hover:-translate-y-1
    hover:border-indigo-400      /* keeps hover accent if needed */
    hover:shadow-[0_0_25px_rgba(99,102,241,0.15)] /* very subtle hover shadow */
  "
>
            <h4 className="text-3xl font-bold text-blue-400">
              AI + Backend
            </h4>

            <p className="text-slate-300 mt-2">
              Core Focus Areas
            </p>
          </div>

        </div>



        {/* Skills Section */}
<div
  className="
    group relative
    bg-slate-900/70
    backdrop-blur-md
    border border-slate-400/50   /* lighter, subtle border */
    p-6
    rounded-2xl
    transition-all duration-300
    hover:-translate-y-1
    hover:border-indigo-400      /* keeps hover accent if needed */
    hover:shadow-[0_0_25px_rgba(99,102,241,0.15)] /* very subtle hover shadow */
  "
>

          <h4 className="text-2xl font-semibold text-blue-400 mb-8">
            Technical Skills
          </h4>


          <div className="space-y-7">


            {/* Programming */}
            <div>

              <h3 className="text-sm text-slate-400 mb-3 uppercase tracking-wider">
                Programming Languages
              </h3>

              <div className="flex flex-wrap gap-3">
                <Skill name="Python" />
                <Skill name="Java" />
                <Skill name="JavaScript" />
              </div>

            </div>



            {/* Frontend */}
            <div>

              <h3 className="text-sm text-slate-400 mb-3 uppercase tracking-wider">
                Frontend Development
              </h3>

              <div className="flex flex-wrap gap-3">
                <Skill name="React" />
                <Skill name="Tailwind CSS" />
                <Skill name="HTML" />
                <Skill name="CSS" />
              </div>

            </div>



            {/* Backend */}
            <div>

              <h3 className="text-sm text-slate-400 mb-3 uppercase tracking-wider">
                Backend & APIs
              </h3>

              <div className="flex flex-wrap gap-3">
                <Skill name="Flask" />
                <Skill name="REST API" />
                <Skill name="JWT" />
                <Skill name="Celery" />
                <Skill name="Redis" />
                <Skill name="Jinja2" />
              </div>

            </div>



            {/* Tools */}
            <div>

              <h3 className="text-sm text-slate-400 mb-3 uppercase tracking-wider">
                Databases & Tools
              </h3>

              <div className="flex flex-wrap gap-3">
                <Skill name="MySQL" />
                <Skill name="SQLite" />
                <Skill name="Git" />
                <Skill name="Jupyter"
                />
              </div>

            </div>

          </div>

        </div>


      </div>
    </PageWrapper>
  );
};

export default About;