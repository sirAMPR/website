import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center">
      <p>
        Built with{" "}
        <a
          className="text-blue-500 hover:text-blue-600"
          href="https://nextjs.org/"
        >
          Next.js
        </a>
      </p>
      <div className="flex space-x-4">
        <a href="https://github.com/sirAMPR">
          <FaGithub className="hover:text-gray-500 cursor-pointer" />
        </a>
        <a href="https://twitter.com/aradcliff0">
          <FaTwitter className="hover:text-gray-500 cursor-pointer" />
        </a>
      </div>
    </footer>
  );
}
