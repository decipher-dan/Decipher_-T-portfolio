import React, { useState } from 'react';
import { Download, CheckCircle2, Mail } from 'lucide-react';

const ActionButtons = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/sample.pdf'; // Replace with actual file in public folder
    link.download = 'My_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 4000);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
      
      {/* Download CV Button */}
      <button
        onClick={handleDownload}
        className="flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <Download className="w-5 h-5" />
        Download CV
      </button>

      {/* Get in Touch Button */}
      <a
        href="#contact"
        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <Mail className="w-5 h-5" />
        Get in Touch
      </a>

      {/* Success Message */}
      {isDownloaded && (
        <div className="flex items-center gap-2 text-green-400 text-sm font-medium animate-fade-in mt-2 sm:mt-0">
          <CheckCircle2 className="w-5 h-5" />
          Download Successful!
        </div>
      )}
    </div>
  );
};

export default ActionButtons;
