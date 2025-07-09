'use client';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export default function Footer() {
  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: "🐙"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: "💼"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      icon: "📸"
    }
  ];

  const handleCVDownload = (): void => {
    // You can replace this with your actual CV file
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // Add your CV file to public folder
    link.download = 'Doruk_Ersoy_CV.pdf';
    link.click();
  };

  return (
    <footer className="bg-gradient-to-br from-dark-gray via-deep-purple to-purple border-t border-purple/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* CV Download */}
          <div className="text-center md:text-left">
            <button
              onClick={handleCVDownload}
              className="bg-gradient-to-r from-purple to-accent text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple/25 flex items-center justify-center md:justify-start mx-auto md:mx-0"
            >
              <span className="mr-2">📄</span>
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Follow Me</h3>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray/20 backdrop-blur-md border border-purple/30 rounded-lg p-3 hover:border-light-purple/50 hover:scale-110 transition-all duration-300"
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2024 Doruk Ersoy. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-gray/20 backdrop-blur-md border border-purple/30 rounded-full p-3 hover:border-light-purple/50 hover:scale-110 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
} 