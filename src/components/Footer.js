import { Github, Linkedin, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-10 py-4 text-center text-sm bg-grey text-gray-400">
      <div className="flex justify-center space-x-6 mb-3">
        <a
          href="https://github.com/codedbyfefe"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200"
        >
          <Github className="w-6 h-6" /> 
        </a>
        <a
          href="https://linkedin.com/in/ofentse-magabeane"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200"
        >
          <Instagram className="w-6 h-6" />
        </a>
      </div>

      <p className="text-xs">© 2025 Ofentse Magabeane Portfolio. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
