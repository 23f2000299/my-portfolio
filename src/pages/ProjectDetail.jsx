import { useParams } from "react-router-dom";
import projects from "../data/projects";
import PageWrapper from "../components/PageWrapper";

const ProjectDetail = () => {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <PageWrapper>
        <h2 className="text-2xl">Project not found</h2>
      </PageWrapper>
    );
  }
return (
  <PageWrapper>
    <div
      className="
        max-w-3xl
        bg-slate-900/80
        backdrop-blur-md
        border border-slate-800
        rounded-2xl
        p-10
        transition-all duration-300
        hover:border-purple-400/40
        hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]
      "
    >
      {/* Title */}
      <h2 className="
        text-4xl font-bold mb-6
        text-slate-100
      ">
        {project.title}
      </h2>

      {/* Description */}
      <p className="
        text-slate-400
        leading-relaxed
        whitespace-pre-line
        mb-10
      ">
        {project.description}
      </p>

      {/* Technologies */}
      <h3 className="
        text-xl font-semibold mb-4
        text-slate-200
      ">
        Technologies Used
      </h3>

      <div className="flex flex-wrap gap-3 mb-10">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="
              bg-slate-800
              border border-slate-700
              text-slate-300
              px-4 py-2
              rounded-lg
              text-sm
              transition-all duration-300
              hover:border-purple-400
              hover:text-purple-300
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* GitHub Button */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-block
          px-6 py-3
          rounded-lg
          font-medium
          text-slate-200
          border border-slate-700
          transition-all duration-300
          hover:border-purple-400
          hover:text-purple-300
          hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]
        "
      >
        View on GitHub →
      </a>

    </div>
  </PageWrapper>
);
};

export default ProjectDetail;