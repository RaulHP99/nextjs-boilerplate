import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen p-6 max-w-4xl mx-auto font-sans bg-gradient-to-b from-white via-zinc-50 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
      <div className="pointer-events-none absolute inset-x-0 -top-32 h-80 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.07)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] blur-2xl" />

      <h1 className="text-4xl font-bold mb-8 text-center">🍎 iOS Dev in a Nutshell</h1>

      <section id="intro" className="flex flex-col md:flex-row md:items-center gap-8 my-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">🙋🏽‍♂️ Hey there!</h2>
          <p className="mb-6 text-lg">
            I’m Raul. This is my first legit website for Intro to CS. I picked iOS
            Dev because building iPhone apps sounds way cooler than printing “Hello World”
            to the console.
          </p>
        </div>
        <figure className="md:w-1/2">
          <Image src="/intro.jpg" alt="Raul working on iOS development" width={1000} height={500} className="rounded-xl" />
          <figcaption className="text-sm text-center mt-2 text-zinc-500">Me in code‑mode ☕️</figcaption>
        </figure>
      </section>

      <section id="why" className="flex flex-col md:flex-row-reverse md:items-center gap-8 my-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">👨🏽‍💻 Why iOS?</h2>
          <p className="mb-4">
            It all started with a shiny iPod touch on my 10th birthday. Since then,
            Apple stuff has been my jam. Now I want to go from user → maker.
          </p>
        </div>
        <figure className="md:w-1/2">
          <Image src="/why.jpg" alt="Receiving my first iPod touch" width={1000} height={500} className="rounded-xl" />
          <figcaption className="text-sm text-center mt-2 text-zinc-500">The gift that hooked me</figcaption>
        </figure>
      </section>

      <section id="what" className="flex flex-col md:flex-row md:items-center gap-8 my-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">📱 So… what is iOS Dev?</h2>
          <p className="mb-4">
            Short version: write Swift in Xcode, build cool UIs, test on an iPhone,
            ship it to the App Store. If users dig it, you’re winning.
          </p>
        </div>
        <figure className="md:w-1/2">
          <Image src="/what.jpg" alt="Xcode and iPhone showing Hello World" width={1000} height={500} className="rounded-xl" />
          <figcaption className="text-sm text-center mt-2 text-zinc-500">First stop: Hello World</figcaption>
        </figure>
      </section>

      <section id="tools" className="flex flex-col md:flex-row-reverse md:items-center gap-8 my-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">🧰 Dev toolbox</h2>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Swift:</strong> Fast, friendly code.</li>
            <li><strong>Xcode:</strong> Apple’s “all‑the‑things” workspace.</li>
            <li><strong>SwiftUI:</strong> Drag‑drop-ish UI magic.</li>
          </ul>
        </div>
        <figure className="md:w-1/2">
          <Image src="/tools.jpg" alt="Toolbox with Swift, Xcode, and SwiftUI icons" width={1000} height={500} className="rounded-xl" />
          <figcaption className="text-sm text-center mt-2 text-zinc-500">My starter kit</figcaption>
        </figure>
      </section>

      <section id="how" className="flex flex-col md:flex-row md:items-center gap-8 my-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">⚙️ How an app is born</h2>
          <p className="mb-4">
            Idea → Sketch → Code → Test → Polish → Upload → Apple thumbs‑up → Live on phones.
          </p>
        </div>
        <figure className="md:w-1/2">
          <Image src="/lifecycle.jpg" alt="iOS app lifecycle timeline" width={1000} height={500} className="rounded-xl" />
          <figcaption className="text-sm text-center mt-2 text-zinc-500">The quick roadmap</figcaption>
        </figure>
      </section>

      <section id="impact" className="flex flex-col md:flex-row-reverse md:items-center gap-8 my-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">🌍 Why it matters</h2>
          <p className="mb-4">
            From health stats to maps to selfies—apps run our day. I want to build
            stuff that makes that day smoother.
          </p>
        </div>
        <figure className="md:w-1/2">
          <Image src="/impact.jpg" alt="iOS apps for health, navigation, and selfies" width={1000} height={500} className="rounded-xl" />
          <figcaption className="text-sm text-center mt-2 text-zinc-500">Apps in real life</figcaption>
        </figure>
      </section>

      <footer className="text-sm text-center mt-16 text-zinc-500">
        © 2025 Raul Perez – Intro to CS Project
      </footer>
    </main>
  );
}
