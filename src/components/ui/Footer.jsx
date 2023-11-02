import React from 'react';

const Footer = () => {
  return (
    <footer className=" mt-56 bg-violet-400 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">About Polyglot</h2>
          <p>
            Polyglot is the world's most popular way to learn a language. It's 100% free, fun, and science-based.
          </p>
        </div>
        <div className="mt-8">
          <ul className="flex justify-center space-x-4">
            <li><a href="/courses" className="text-white hover:underline">Courses</a></li>
            <li><a href="/stories" className="text-white hover:underline">Stories</a></li>
            <li><a href="/events" className="text-white hover:underline">Events</a></li>
            <li><a href="/about" className="text-white hover:underline">About</a></li>
            <li><a href="/jobs" className="text-white hover:underline">Jobs</a></li>
            <li><a href="/blog" className="text-white hover:underline">Blog</a></li>
          </ul>
        </div>
        <div className="mt-8">
          <ul className="flex justify-center space-x-4">
            <li><a href="https://facebook.com/duolingo" className="text-white hover:underline">Facebook</a></li>
            <li><a href="https://twitter.com/duolingo" className="text-white hover:underline">Twitter</a></li>
            <li><a href="https://instagram.com/duolingo" className="text-white hover:underline">Instagram</a></li>
          </ul>
        </div>
        <div className="mt-8 text-gray-300">
          &copy; {new Date().getFullYear()} Polyglot, Inc.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
