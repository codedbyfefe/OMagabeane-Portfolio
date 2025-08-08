import { Github, Linkedin, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-10 py-6 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center px-4">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/codedbyfefe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors duration-200"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://linkedin.com/in/ofentse-magabeane"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors duration-200"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors duration-200"
          >
            <Instagram className="w-6 h-6 text-white" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © 2025 Ofentse Magabeane Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
