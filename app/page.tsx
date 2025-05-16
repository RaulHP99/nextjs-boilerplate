import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen p-6 max-w-4xl mx-auto font-sans bg-gradient-to-b from-white via-zinc-50 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
      <div className="pointer-events-none absolute inset-x-0 -top-32 h-80 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.07)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] blur-2xl" />

      <h1 className="text-4xl font-bold mb-8 text-center">iOS Development</h1>

      <section id="intro" className="flex flex-col md:flex-row md:items-center gap-8 my-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">🙋🏽‍♂️ Introduction</h2>
          <p className="mb-6 text-lg">
            Hello, I’m Raul Perez. This site is my Intro to Computer Science project,
            and I chose iOS Development because I’m passionate about building apps
            for Apple devices and hope to turn that passion into a career.
          </p>
        </div>
        <figure className="md:w-1/2">
          <Image src="/intro.jpg" alt="Raul working on iOS development" width={1000} height={500} className="rounded" />
          <figcaption className="text-sm text-center mt-2 text-zinc-500">An aspiring iOS developer at work</figcaption>
        </figure>
      </section>

      <section id="why" className="flex flex-col md:flex-row-reverse md:items-center gap-8 my-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">👨🏽‍💻 Why I Chose This Topic</h2>
          <p className="mb-4">
            My dream job is to become an iOS Engineer. That dream started when I
            received my first iPod touch for my birthday. Ever since, I’ve loved
            how Apple blends creativity and technology to make life easier and
            more fun.
          </p>
        </div>
        <figure className="md:w-1/2">
          <Image src="/why.jpg" alt="Receiving my first iPod touch" width={1000} height={500} className="rounded" />
          <figcaption className="text-sm text-center mt-2 text-zinc-500">The iPod that started it all</figcaption>
        </figure>
      </section>

      <section id="what" className="flex flex-col md:flex-row md:items-center gap-8 my-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">📱 What is iOS Development?</h2>
          <p className="mb-4">
            iOS development means creating software for iPhone and iPad using Swift,
            Xcode, and Apple’s developer tools, then publishing to the App Store.
          </p>
        </div>
        <figure className="md:w-1/2">
          <Image src="/what.jpg" alt="Xcode and iPhone showing Hello World" width={1000} height={500} className="rounded" />
          <figcaption className="text-sm text-center mt-2 text-zinc-500">Xcode Hello World demo</figcaption>
        </figure>
      </section>

      <section id="tools" className="flex flex-col md:flex-row-reverse md:items-center gap-8 my-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">🧰 Tools Developers Use</h2>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Swift:</strong> Modern, fast, safe language.</li>
            <li><strong>Xcode:</strong> Apple’s all‑in‑one coding IDE.</li>
            <li><strong>SwiftUI:</strong> Framework for building UI quickly.</li>
          </ul>
        </div>
        <figure className="md:w-1/2">
          <Image src="/tools.jpg" alt="Toolbox with Swift, Xcode, and SwiftUI icons" width={1000} height={500} className="rounded" />
          <figcaption className="text-sm text-center mt-2 text-zinc-500">Essential developer tools</figcaption>
        </figure>
      </section>

      <section id="how" className="flex flex-col md:flex-row md:items-center gap-8 my-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">⚙️ How iOS Apps Are Made</h2>
          <p className="mb-4">
            Idea → Plan → Build in Xcode → Test → Polish → Upload to App Store → Release.
          </p>
        </div>
        <figure className="md:w-1/2">
          <Image src="/lifecycle.jpg" alt="iOS app lifecycle timeline" width={1000} height={500} className="rounded" />
          <figcaption className="text-sm text-center mt-2 text-zinc-500">Build and release process</figcaption>
        </figure>
      </section>

      <section id="impact" className="flex flex-col md:flex-row-reverse md:items-center gap-8 my-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">🌍 Why iOS Development Matters</h2>
          <p className="mb-4">
            iOS apps support health, navigation, and social connection worldwide.
          </p>
        </div>
        <figure className="md:w-1/2">
          <Image src="/impact.jpg" alt="iOS apps for health, navigation, and selfies" width={1000} height={500} className="rounded" />
          <figcaption className="text-sm text-center mt-2 text-zinc-500">Apps in everyday life</figcaption>
        </figure>
      </section>

      <footer className="text-sm text-center mt-16 text-zinc-500">
        © 2025 Raul Perez – Intro to Computer Science Project
      </footer>
    </main>
  );
}
