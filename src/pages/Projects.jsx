import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";
import projects from "../data/projects";

const Projects = () => {
  return (
    <PageWrapper>
      <h2 className="text-4xl font-bold mb-10 text-slate-100">
  Projects
</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
         <Link
  key={project.id}
  to={`/projects/${project.id}`}
  className="
    group relative
    bg-slate-900/70
    backdrop-blur-md
    border border-slate-500
    p-6
    rounded-2xl
    transition-all duration-300
    hover:-translate-y-1
    hover:border-indigo-400
    hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]
  "
>
  <h3 className="
    text-xl font-semibold mb-3
    text-slate-200
    group-hover:text-indigo-400
    transition
  ">
    {project.title}
  </h3>

  <p className="text-slate-400 group-hover:text-slate-300 transition mb-3">
    {project.shortDesc}
  </p>
    <Link
    to={`/projects/${project.id}`}
    className="
      inline-block
      px-5 py-2
      text-sm
      font-medium
      text-indigo-400
      border border-indigo-400/40
      rounded-lg
      hover:bg-indigo-500
      hover:text-white
      hover:border-indigo-500
      transition-all duration-300
    "
  >
    View Details →
  </Link>

</Link>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Projects;