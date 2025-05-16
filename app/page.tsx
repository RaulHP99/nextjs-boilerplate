import Image from "next/image";

export default function Home() {
  return (
    <main className="p-6 max-w-3xl mx-auto font-sans">

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">iOS Development</h1>

      {/* 🙋🏽‍♂️ Introduction */}
      <h2 className="text-2xl font-semibold mt-8 mb-2">🙋🏽‍♂️ Introduction</h2>
      <p className="mb-6 text-lg">
        Hello, I’m Raul Perez, and this website is my final project for Intro to Computer Science.
        I chose iOS Development because I’m passionate about it and hope to build my career around
        creating apps for Apple devices. I’d love to share that passion with you.
      </p>
      <Image
        src="/intro.jpg"
        alt="Raul working on iOS development"
        width={1000}
        height={500}
        className="my-6 rounded"
      />

      {/* 👨🏽‍💻 Why I Chose This Topic */}
      <h2 className="text-2xl font-semibold mt-8 mb-2">👨🏽‍💻 Why I Chose This Topic</h2>
      <p className="mb-4">
        My dream job is to become an iOS Engineer/Developer—someone who builds apps for Apple’s
        mobile operating system, iOS. That dream started when I received my first iPod touch as a
        birthday gift. Ever since, I’ve been amazed by how Apple combines creativity and
        technology to improve everyday life, and I want to be part of that future.
      </p>
      <Image
        src="/why.jpg"
        alt="Receiving my first iPod touch"
        width={1000}
        height={500}
        className="my-6 rounded"
      />

      {/* 📱 What is iOS Development? */}
      <h2 className="text-2xl font-semibold mt-8 mb-2">📱 What is iOS Development?</h2>
      <p className="mb-4">
        iOS development is the process of creating software for Apple’s mobile devices—iPhone and
        iPad. It involves writing Swift code, designing user interfaces, testing, and eventually
        publishing apps to the App Store.
      </p>
      <Image
        src="/what.jpg"
        alt="Xcode and iPhone showing Hello World"
        width={1000}
        height={500}
        className="my-6 rounded"
      />

      {/* 🧰 Tools Developers Use */}
      <h2 className="text-2xl font-semibold mt-8 mb-2">🧰 What Tools Do iOS Developers Use?</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Swift:</strong> Apple’s modern, fast, beginner‑friendly language.</li>
        <li><strong>Xcode:</strong> The IDE where developers code, design, and debug.</li>
        <li><strong>SwiftUI:</strong> A framework for building app interfaces quickly.</li>
      </ul>
      <Image
        src="/tools.jpg"
        alt="Toolbox with Swift, Xcode, and SwiftUI icons"
        width={1000}
        height={500}
        className="my-6 rounded"
      />

      {/* ⚙️ How iOS Apps Are Made */}
      <h2 className="text-2xl font-semibold mt-8 mb-2">⚙️ How iOS Apps Are Made</h2>
      <p className="mb-4">
        The basic workflow: think of an idea → plan & sketch → build in Xcode with Swift →
        test on a simulator or real device → polish with icons and screenshots →
        upload to App Store Connect → Apple reviews → release on the App Store.
      </p>
      <Image
        src="/lifecycle.jpg"
        alt="Apple‑style iOS app lifecycle timeline"
        width={1000}
        height={500}
        className="my-6 rounded"
      />

      {/* 🌍 Why iOS Development Matters */}
      <h2 className="text-2xl font-semibold mt-8 mb-2">🌍 Why iOS Development Matters</h2>
      <p className="mb-4">
        iOS apps touch every part of life—health, navigation, and social connection. Building great
        apps requires creativity, attention to detail, and a passion for Apple’s ecosystem—skills I
        aim to master so I can create high‑quality apps that people rely on daily.
      </p>
      <Image
        src="/impact.jpg"
        alt="iOS apps for health, navigation, and selfies"
        width={1000}
        height={500}
        className="my-6 rounded"
      />

      {/* Footer */}
      <footer className="text-sm text-center mt-10 text-gray-500">
        © 2025 Raul Perez – Intro to Computer Science Project
      </footer>
    </main>
  );
}
