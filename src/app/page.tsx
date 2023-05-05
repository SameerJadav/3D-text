import Experience from "~/components/Experience";

export default function Home() {
  return (
    <main>
      <div className="fixed left-0 top-0 h-screen w-screen overflow-hidden">
        <Experience />
      </div>
      <div className="flex justify-center">
        <div className="fixed bottom-0 flex w-max flex-col gap-1 p-4 text-white antialiased md:right-0">
          <div>
            <a
              href="https://www.sameerjadav.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sameer Jadav - Creative Developer
            </a>
          </div>
          <div className=" flex items-center justify-between">
            <a
              href="https://twitter.com/SameerJadav_"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-transparent transition-all hover:border-white"
            >
              ➥ Twitter
            </a>
            <a
              href="https://github.com/SameerJadav"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-transparent transition-all hover:border-white"
            >
              ➥ Github
            </a>
            <a
              href="https://www.linkedin.com/in/sameer-jadav"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-transparent transition-all hover:border-white"
            >
              ➥ Linkedin
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
