import Image from "next/image";

export default function Home() {
  return (
    <main className="p-6 max-w-3xl mx-auto font-sans">

      <h1 className="text-4xl font-bold mb-4">iOS Development</h1>

      <h2 className="text-2xl font-semibold mt-8 mb-2">🙋🏽‍♂️ Introduction</h2>
      <p className="mb-6 text-lg">
        Hello, I’m Raul Perez, and this is a website I build for my Intro to Computer Science class project. For my topic, I chose iOS Development, something I am very passionate about and that it will hopefully define my career in the future. Hopefully through this website, I can share that passion with you.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">👨🏽‍💻 Why I Chose This Topic</h2>
      <p className="mb-4">
        I chose the topic of iOS development because the job role I want to be in life involves this. That job can be iOS Engineer/iOS Developer/iOS Software Engineer, basically a Software Engineer/Developer around the Apple's Mobile Operating System, iOS . My dream for this role started back in my 10's when I received my first iPod Touch as a birthday gift, ever since I have been head over heels for Apple products and the Apple ecosystem. Not as an Apple fanboy like some people might say, but because I love how they combines creativity and technology, and I think it's amazing how apps can make people’s lives easier and more fun. In addition, because I belived they have revolutionized the world with some of their most popular products.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">📱 What is iOS Development?</h2>
      <p className="mb-4">
  I chose iOS development because the career I want in life is centered around it. My dream role is to become an iOS Engineer, Developer, or Software Engineer — someone who builds apps for Apple’s mobile operating system, iOS. That dream started back in my early teens when I got my first iPod Touch as a birthday gift. Ever since then, I’ve been head over heels for Apple products and the Apple ecosystem. Not as a fanboy, but because I genuinely love how they combine creativity and technology. I believe Apple has revolutionized the world with some of their most iconic products, and I want to be part of that future.
</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">🧰 What Tools Do iOS Developers Use?</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Swift:</strong> The main programming language used by Apple. It’s modern, fast, and beginner-friendly.</li>
        <li><strong>Xcode:</strong> The tool developers use to write code and design apps. It’s made by Apple.</li>
        <li><strong>SwiftUI:</strong> A framework for designing the user interface of the app — what the app looks like and how users interact with it.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">⚙️ How iOS Apps Are Made</h2>
      <p className="mb-4">
        Developers usually start with an idea, then use Swift and Xcode to write the code and design the app. They test it using a simulator (which pretends to be an iPhone on your computer). After that, they upload it to Apple’s system and, if everything is approved, it goes on the App Store.
      </p>

     <p className="mb-4">
  Apps are everywhere. People use iOS apps every day — for health, school, work, entertainment, and more. iOS development is important because it helps build the tools so many people rely on. It’s a big part of how we interact with the digital world. To succeed in this field, you need attention to detail, creativity, and a passion for Apple’s ecosystem and products to create high-quality apps people can enjoy and depend on.
</p>

      <footer className="text-sm text-center mt-10 text-gray-500">
        © 2025 Raul Perez – Intro to Computer Science Project
      </footer>

    </main>
  );
}
