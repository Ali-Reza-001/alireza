const About = () => {
  return (
    <section className="min-h-screen px-6 py-20 pt-32 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <div className="w-10/12 mx-auto pt-10">

        <div className="flex">
          <div className="w-1/2">
            <div className="w-full">
              <img src="profile.png" alt="Profile" />
            </div>
          </div>

          <div className="w-1/2">
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-lg leading-relaxed mb-8">
              I'm Ali—a MERN stack developer and designer with a passion for crafting scalable, user-focused web experiences. I specialize in React, Tailwind CSS, WordPress customization, and domain management. My work blends technical precision with creative clarity, always aiming to build something meaningful.
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Currently Building</h2>
          <p className="text-gray-300">
            I'm refining <strong>Yargift</strong>, a gifting platform for Afghans abroad. It’s more than a project—it’s a bridge between hearts and homes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;