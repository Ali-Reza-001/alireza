import BreadCrumb from "./assets/BreadCrumb";

const About = () => {
  return (
    <section className="w-full min-h-screen pt-16 bg-black/80 text-white">
      <BreadCrumb title={'About Me'}/>

      <div className="lg:w-10/12 mx-auto w-full px-6 py-20">

        <div className="flex flex-wrap">
          <div className="lg:w-1/2 md:w-10/12 w-full mx-auto">
            <div className="w-full md:px-12">
              <img src="profile.webp" alt="Profile" className="rounded-[5rem] rounded-br-2xl" />
            </div>
          </div>

          <div className=" py-10 lg:w-1/2 md:w-10/12 w-full mx-auto">
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-lg leading-relaxed mb-8">
              I'm Alireza Ahmadi, a freelance MERN stack developer and WordPress designer based in Kabul, Afghanistan. I craft scalable web experiences that blend clean design with purposeful functionality.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              I believe great software isn’t just built — it’s felt. My work is rooted in clarity, empathy, and the courage to solve real problems. Whether I’m designing a gifting platform for Afghans abroad or refining a personal brand, I aim for impact that lasts.
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-20 w-10/12 mx-auto">
          <div>
            <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-300">
              <li>Build single-page apps with React & Redux</li>
              <li>Customize WordPress themes & plugins</li>
              <li>Design clean, responsive UIs with Tailwind</li>
              <li>Manage domains & digital identity</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">What Drives Me</h2>
            <ul className="space-y-2 list-disc list-inside text-gray-300">
              <li>Digital ownership & personal branding</li>
              <li>Iterative growth through feedback</li>
              <li>Spiritual clarity & emotional resilience</li>
              <li>Serving others through strength & design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;