import Image from "next/image";

export default function Home() {
  return (
    <main className="p-6 max-w-3xl mx-auto font-sans">
      <h1 className="text-4xl font-bold mb-4">Understanding iOS Development</h1>
      <p className="mb-6 text-lg">
        Welcome! This webpage explores the world of iOS development — a key area in modern computer science focused on building applications for Apple’s mobile devices.
      </p>

      <Image
        src="/ios-dev.png"
        alt="iOS development illustration"
        width={800}
        height={400}
        className="my-6 rounded"
      />

      <h2 className="text-2xl font-semibold mt-8 mb-2">📱 What is iOS Development?</h2>
      <p className="mb-4">
        iOS development is the process of creating software applications for Apple's iOS operating system, which runs on iPhones, iPads, and iPod Touch devices. It involves using Apple's development tools and programming languages to design, build, test, and publish apps.
      </p>

      <Image
        src="/iphone-devices.jpg"
        alt="iPhones running various apps"
        width={800}
        height={400}
        className="my-6 rounded"
      />

      <h2 className="text-2xl font-semibold mt-8 mb-2">🧰 Tools Used</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Swift:</strong> A modern, fast, and safe programming language created by Apple for iOS and macOS development.</li>
        <li><strong>Xcode:</strong> Apple’s official integrated development environment (IDE) used to code, design interfaces, and debug apps.</li>
        <li><strong>SwiftUI:</strong> A newer UI framework that makes building user interfaces faster and more intuitive.</li>
      </ul>

      <Image
        src="/xcode-swift-swiftui.png"
        alt="Xcode and Swift tools"
        width={800}
        height={400}
        className="my-6 rounded"
      />

      <h2 className="text-2xl font-semibold mt-8 mb-2">⚙️ How Are iOS Apps Built?</h2>
      <p className="mb-4">
        Developers write Swift code inside Xcode, design user interfaces using SwiftUI or UIKit, and test apps on virtual devices called simulators. Once ready, they submit apps to the App Store using Apple’s developer portal.
      </p>

      <Image
        src="/swift-code-example.png"
        alt="Swift code in Xcode"
        width={800}
        height={400}
        className="my-6 rounded"
      />

      <h2 className="text-2xl font-semibold mt-8 mb-2">🌍 Impact of iOS Development</h2>
      <p className="mb-4">
        iOS apps are used in nearly every part of modern life — from communication and fitness to banking and education. iOS development drives innovation in the mobile app industry and creates tools that people use daily.
      </p>

      <Image
        src="/apps-impact.jpg"
        alt="Icons of popular iOS apps"
        width={800}
        height={400}
        className="my-6 rounded"
      />

      <h2 className="text-2xl font-semibold mt-8 mb-2">👨‍💻 Why I Chose This Topic</h2>
      <p className="mb-4">
        I chose iOS development because it's a blend of creativity and technology. It's my dream to become an iOS Engineer and work at Apple, creating apps that make life easier and more enjoyable for users around the world.
      </p>

      <Image
        src="/dream-job-apple.png"
        alt="Apple developer or dream job concept"
        width={800}
        height={400}
        className="my-6 rounded"
      />

      <footer className="text-sm text-center mt-10 text-gray-500">
        © 2025 Raul Perez – Intro to Computer Science Project
      </footer>
    </main>
  );
}
