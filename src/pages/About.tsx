import { Github, Linkedin, Coffee, MapPin } from 'lucide-react';

const About = () => {
  

  return (
    <div className="min-h-screen">
      <header className="w-full max-w-6xl mx-auto pt-20 px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src="https://media.licdn.com/dms/image/v2/C5603AQHmrl822acjGg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1553380413691?e=1744243200&v=beta&t=t5Hgnys9bJaT65SwCkkVRQNtxWcwoXnVGNNgolAs4Bk"
            alt="Annie"
            className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Annie Banasik</h1>
            <h2 className="text-xl text-gray-600 mb-4">Software Engineer</h2>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 mb-6">
              <MapPin className="w-4 h-4" />
              <span>Dubai, UAE</span>
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://github.com/xsmorex" className="p-2 text-gray-600 hover:text-gray-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/banasikannie/" className="p-2 text-gray-600 hover:text-gray-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="w-full max-w-6xl mx-auto mt-16 px-4 pb-20">
        {/* About Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">About Me</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            It all started when I took part in my first Hackathon, joined BSc in Computer Science at King's College London, and now every day of my life I'm learning and building new things.
          </p>
          <p className="text-gray-600 leading-relaxed">
            When I'm not coding, you'll find me figure skating, drinking coffee, and learning languages. 
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-6xl mx-auto px-4 py-8 border-t border-gray-200">
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <Coffee className="w-5 h-5" />
          <span>Always happy to connect over coffee!</span>
        </div>
      </footer>
    </div>
  );
};

export default About;