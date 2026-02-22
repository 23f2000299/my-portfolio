import PageWrapper from "../components/PageWrapper";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactCard = ({ icon: Icon, title, value, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        bg-slate-900/60
        border border-slate-700/60
        rounded-2xl
        p-6

        flex items-center gap-4
        min-w-0

        shadow-lg shadow-blue-500/5

        hover:border-blue-400/50
        hover:bg-slate-800/70
        hover:shadow-blue-500/10
        hover:-translate-y-0.5

        transition-all duration-300
      "
    >
      {/* Icon */}
      <div
        className="
          p-3
          rounded-lg
          bg-slate-800/80
          border border-slate-700/60
          flex-shrink-0

          group-hover:border-blue-400/40
          transition-all duration-300
        "
      >
        <Icon className="text-blue-400" size={22} />
      </div>

      {/* Text */}
      <div className="min-w-0">
        <p className="text-slate-400 text-sm">
          {title}
        </p>

        <p className="text-slate-200 font-medium truncate">
          {value}
        </p>
      </div>
    </a>
  );
};

const Contact = () => {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Header */}
        <div
          className="
            bg-slate-900/70
            backdrop-blur-md
            border border-slate-700/60
            rounded-3xl
            p-10

            shadow-xl shadow-blue-500/5

            hover:border-blue-400/40
            transition-all duration-500
          "
        >
          <h2 className="text-3xl font-semibold text-blue-400 mb-3">
            Contact Me
          </h2>

          <p className="text-slate-300 max-w-xl">
            I'm always open to discussing opportunities, collaborations,
            or interesting projects. Feel free to reach out anytime.
          </p>
        </div>


        {/* Contact Cards */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">

          <ContactCard
            icon={Mail}
            title="Email"
            value="sameeha0608@gmail.com"
            link="mailto:sameeha0608@gmail.com"
          />

          <ContactCard
            icon={Linkedin}
            title="LinkedIn"
            value="linkedin.com/in/fathimasameeha-0608"
            link="https://linkedin.com/in/fathimasameeha-0608"
          />

          <ContactCard
            icon={Github}
            title="GitHub"
            value="github.com/23f2000299"
            link="https://github.com/23f2000299"
          />

        </div>

      </div>
    </PageWrapper>
  );
};

export default Contact;