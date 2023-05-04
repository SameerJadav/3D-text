import { Cube } from "~/components/Objects";

export default function Home() {
  return (
    <main>
      <div className="fixed left-0 top-0 h-screen w-screen overflow-hidden">
        <Cube />
      </div>
    </main>
  );
}
