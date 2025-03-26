import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-gray-200 py-4 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Learning Board
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;