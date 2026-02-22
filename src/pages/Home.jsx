import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";

          import { Download } from "lucide-react";
const Home = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col justify-center min-h-[80vh]">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-accent">Fathima Sameeha</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8">
          AI-Driven Full Stack Developer building scalable, real-world systems.
        </p>
        <div className="flex items-center gap-4">

  <Link
    to="/projects"
    className="
      inline-flex items-center justify-center gap-2
      bg-accent text-white
      px-5 py-2.5
      text-sm font-medium
      rounded-lg

      hover:opacity-90
      hover:-translate-y-0.5

      transition-all duration-300
    "
  >
    View Projects
  </Link>


  <a
    href="/resume.pdf"
    download
    className="
      inline-flex items-center justify-center gap-2
      bg-blue-500 text-white
      px-5 py-2.5
      text-sm font-medium
      rounded-lg

      hover:bg-blue-400
      hover:-translate-y-0.5

      transition-all duration-300
    "
  >
    <Download size={16} />
    Download Resume
  </a>

</div>
       
        </div>
    
    </PageWrapper>
  );
};

export default Home;