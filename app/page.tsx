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
            Hello, I’m Raul Perez. This site is my final project for Intro to Computer Science.
            It’s also the first website I’ve built from scratch, so you’ll see both my beginner
            web skills and my enthusiasm for iOS Development. By the end, I hope you understand
            why creating apps for Apple devices fascinates me and how it can shape my future career.
          </p>
        </div>
        <figure className="md:w-1/2">
          <Image src="/intro.jpg" alt="Raul working on iOS development" width={1000} height={500} className="rounded-xl" />
          <figcaption className="text-sm text-center mt-2 text-zinc-500">An aspiring iOS developer at work</figcaption>
        </figure>
      </section>

      <section id="why" className="flex flex-col md:flex-row-reverse md:items-center gap-8 my-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">👨🏽‍💻 Why I Chose This Topic</h2>
          <p className="mb-4">
            My dream job is to become an iOS Engineer. That dream began when I unboxed my first
            iPod touch on my tenth birthday. I was amazed that a small glass rectangle could hold
            music, games, and the internet in my pocket. Since then, Apple’s ecosystem has felt
            like a playground of creativity and innovation. Learning to build apps for it feels
            like the perfect way to blend my love of tech with problem‑solving that helps people.
          </p>
        </div>
        <figure className="md:w-1/2">
          <Image src="/why.jpg" alt="Receiving my first iPod touch" width={1000} height={500} className="rounded-xl" />
          <figcaption className="text-sm text-center mt-2 text-zinc-500">The iPod that started it all</figcaption>
        </figure>
      </section>

      <section id="what" className="flex flex-col md:flex-row md:items-center gap-8 my-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">📱 What is iOS Development?</h2>
          <p className="mb-4">
            iOS development is the craft of designing, coding, and shipping applications that run
            on iPhone and iPad. Developers write Swift (or Objective‑C) in Xcode, create intuitive
            interfaces, test on virtual and physical devices, then submit the finished build to
            Apple’s App Store for review and distribution. The goal is to deliver a smooth,
            secure, and delightful user experience that feels at home in Apple’s ecosystem.
          </p>
        </div>
        <figure className="md:w-1/2">
          <Image src="/what.jpg" alt="Xcode and iPhone showing Hello World" width={1000} height={500} className="rounded-xl" />
          <figcaption className="text-sm text-center mt-2 text-zinc-500">Xcode Hello World demo</figcaption>
        </figure>
      </section>

      <section id="tools" className="flex flex-col md:flex-row-reverse md:items-center gap-8 my-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">🧰 Tools Developers Use</h2>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Swift:</strong> Apple’s modern programming language that combines speed and safety.</li>
            <li><strong>Xcode:</strong> The all‑in‑one IDE where you write code, design UIs, run simulators, and debug.</li>
            <li><strong>SwiftUI:</strong> A declarative framework that lets you build interfaces with less code and live previews.</li>
          </ul>
          <p className="mb-4">
            Together, these tools streamline the entire workflow—from your first line of code to
            the moment your app appears on someone’s Home Screen.
          </p>
        </div>
        <figure className="md:w-1/2">
          <Image src="/tools.jpg" alt="Toolbox with Swift, Xcode, and SwiftUI icons" width={1000} height={500} className="rounded-xl" />
          <figcaption className="text-sm text-center mt-2 text-zinc-500">Essential developer tools</figcaption>
        </figure>
      </section>

      <section id="how" className="flex flex-col md:flex-row md:items-center gap-8 my-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">⚙️ How iOS Apps Are Made</h2>
          <p className="mb-4">
            Every app starts as an idea and moves through a series of checkpoints before it
            reaches users:
          </p>
          <ul className="list-decimal pl-6 mb-4">
            <li>Brainstorm and sketch basic screens.</li>
            <li>Create a new Xcode project and set up app icons and bundle IDs.</li>
            <li>Code features, design the interface, and connect everything with SwiftUI.</li>
            <li>Test on simulators and real devices; fix bugs and polish.</li>
            <li>Take screenshots, write a description, and upload the build to App Store Connect.</li>
            <li>Apple reviews the submission for quality and policy compliance.</li>
            <li>Upon approval, hit “Release,” and your app appears on the App Store worldwide.</li>
          </ul>
        </div>
        <figure className="md:w-1/2">
          <Image src="/lifecycle.jpg" alt="iOS app lifecycle timeline" width={1000} height={500} className="rounded-xl" />
          <figcaption className="text-sm text-center mt-2 text-zinc-500">Build and release process</figcaption>
        </figure>
      </section>

      <section id="impact" className="flex flex-col md:flex-row-reverse md:items-center gap-8 my-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">🌍 Why iOS Development Matters</h2>
          <p className="mb-4">
            iOS apps accompany people through their entire day. A doctor can track patient vitals
            on an iPad, a driver can follow safe navigation with CarPlay, and friends can share
            life moments instantly. By mastering iOS Development, I can build tools that support
            health, safety, education, and fun for millions of users.
          </p>
        </div>
        <figure className="md:w-1/2">
          <Image src="/impact.jpg" alt="iOS apps for health, navigation, and selfies" width={1000} height={500} className="rounded-xl" />
          <figcaption className="text-sm text-center mt-2 text-zinc-500">Apps in everyday life</figcaption>
        </figure>
      </section>

      <footer className="text-sm text-center mt-16 text-zinc-500">
        © 2025 Raul Perez – Intro to Computer Science Project
      </footer>
    </main>
  );
}
