import bannerStack from "../assets/banner-stack.png";

const Hero = () => (
  <section id="home" className="flex min-h-[calc(100vh-4rem)] items-center">
    <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Build Your Ideal
          <br />
          <span className="text-brand-gradient">Development Stack</span>
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-lg text-slate-600 lg:mx-0">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start">
          <a
            href="#technologies"
            className="bg-brand-gradient rounded-xl px-5 py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:px-7 sm:py-3.5 lg:w-60"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="rounded-xl border border-slate-200 px-5 py-3 text-center text-sm font-medium text-slate-900 transition-colors hover:border-slate-300 hover:bg-slate-50 sm:px-7 sm:py-3.5 lg:w-60"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <img
          src={bannerStack}
          alt="Layered illustration of a technology stack"
          className="w-full max-w-md"
        />
      </div>
    </div>
  </section>
);

export default Hero;
