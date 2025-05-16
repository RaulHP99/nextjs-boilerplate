import Image from "next/image";

export default function Home() {
  return (
    <main className="p-6 max-w-3xl mx-auto font-sans">

      <h1 className="text-4xl font-bold mb-4">iOS Development</h1>

      <h2 className="text-2xl font-semibold mt-8 mb-2">👋 Introduction</h2>
      <p className="mb-6 text-lg">
        Hey! I’m Raul Perez, and this is my first website for my Intro to Computer Science class. For my final topic, I chose iOS Development — something I'm really passionate about and hoping to work with in the future.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">👨‍💻 Why I Chose This Topic</h2>
      <p className="mb-4">
        I chose iOS development because it's what I want to do in life. My dream is to become an iOS Software Engineer and work at Apple. I love how it combines creativity and technology, and I think it's amazing how apps can make people’s lives easier and more fun.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">📱 What is iOS Development?</h2>
      <p className="mb-4">
        iOS development is about building apps for Apple’s mobile devices — iPhones and iPads. It includes everything from writing code to designing the interface and testing it to make sure it works well.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">🧰 Tools Developers Use</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Swift:</strong> The main programming language used by Apple. It’s modern, fast, and beginner-friendly.</li>
        <li><strong>Xcode:</strong> The tool developers use to write code and design apps. It’s made by Apple.</li>
        <li><strong>SwiftUI:</strong> A framework for designing the user interface of the app — what the app looks like and how users interact with it.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">⚙️ How iOS Apps Are Made</h2>
      <p className="mb-4">
        Developers usually start with an idea, then use Swift and Xcode to write the code and design the app. They test it using a simulator (which pretends to be an iPhone on your computer). After that, they upload it to Apple’s system and, if everything is approved, it goes on the App Store.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">🌍 Why iOS Development Matters</h2>
      <p className="mb-4">
        Apps are everywhere. People use iOS apps every day — for health, school, work, entertainment, and more. iOS development is important because it helps build the tools that so many people rely on, and it’s a big part of how we interact with the digital world.
      </p>

      <footer className="text-sm text-center mt-10 text-gray-500">
        © 2025 Raul Perez – Intro to Computer Science Project
      </footer>

    </main>
  );
}
