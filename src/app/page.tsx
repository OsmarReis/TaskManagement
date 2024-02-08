import Image from "next/image";

export default function Home() {
  const data_dump = require("./dump.json");

  return (
    <main className=" h-screen flex flex-col justify-between">
      <header className="flex flex-row-reverse justify-center items-center gap-4 my-9">
        <Image src="/logo.svg" alt="Logo" width={24} height={24} priority />
        <h1 className=" font-serif font-extrabold text-xl">Write down your task!</h1>
      </header>
      <section className="flex justify-center" id="inputMenu">
        <form className="flex flex-wrap gap-3 justify-center w-80 max-w-lg">
          <label className="flex flex-col w-full gap-2" htmlFor="title">
            <span>Task</span>
            <input className="border rounded" type="text" id="title" />
          </label>
          <label className="flex flex-col w-full gap-2" htmlFor="description">
            <span>Describe your task</span>
            <textarea className="border rounded" name="description" rows={5} id="description"></textarea>
          </label>
          <label className="w-full flex flex-col justify-center items-center gap-2" htmlFor="timestamp">
            <span>Deadline</span>
            <input className="border rounded w-full text-center" type="datetime-local" name="timestamp" id="timestamp" />
          </label>
          <label className="flex gap-1" htmlFor="status">
            <input type="checkbox" name="status" id="status" />
            <span>Concluded?</span>
          </label>
          <button className="w-full border rounded bg-slate-400 font-semibold text-white py-2" type="submit">Save task</button>
        </form>
      </section>
      <section className="flex gap-2 justify-between py-9 px-4" id="menu">
        <div className="min-w-6">TaskList</div>
        <div className="min-w-6">Agenda</div>
        <div className="min-w-6">Other</div>
      </section>
    </main>
  );
}
