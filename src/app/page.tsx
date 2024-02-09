import Image from "next/image";

export default function Home() {
  const data_dump = require("./dump.json");

  return (
    <main className=" h-screen flex flex-col justify-between">
      <header className="flex flex-row-reverse justify-center items-center gap-4 p-9 mt-6">
        <Image src="/logo.svg" alt="Logo" width={24} height={24} priority />
        <h1 className=" font-serif font-extrabold text-xl">
          Write down your task!
        </h1>
      </header>
      <section className="flex justify-center pb-8" id="inputMenu">
        <form className="flex flex-wrap gap-3 justify-center w-80 max-w-lg">
          <label className="flex flex-col w-full gap-2" htmlFor="title">
            <span>Task</span>
            <input className="border rounded" type="text" id="title" />
          </label>
          <label className="flex flex-col w-full gap-2" htmlFor="description">
            <span>Describe your task</span>
            <textarea
              className="border rounded"
              name="description"
              rows={5}
              id="description"
            ></textarea>
          </label>
          <label
            className="w-full flex flex-col justify-center items-center gap-2"
            htmlFor="timestamp"
          >
            <span>Deadline</span>
            <input
              className="border rounded w-full text-center"
              type="datetime-local"
              name="timestamp"
              id="timestamp"
            />
          </label>
          <label className="flex gap-1" htmlFor="status">
            <input type="checkbox" name="status" id="status" />
            <span>Concluded?</span>
          </label>
          <button
            className="w-full border rounded bg-slate-400 font-semibold text-white py-2"
            type="submit"
          >
            Save task
          </button>
        </form>
      </section>
      <section className="flex justify-center py-9 px-4" id="menu">
        <div className="flex justify-between gap-0 w-80 max-w-lg h-20">
          <button className="min-w-6 w-full min-h-6 h-full border rounded-lg bg-red-400 flex flex-col items-center justify-center">
            <span>Icon</span>
            TaskList
          </button>
          <button className="min-w-6 w-full min-h-6 h-full border rounded-lg bg-red-400 flex flex-col items-center justify-center">
            <span>Icon</span>
            TaskList
          </button>
          <button className="min-w-6 w-full min-h-6 h-full border rounded-lg bg-red-400 flex flex-col items-center justify-center">
            <span>Icon</span>
            TaskList
          </button>
        </div>
      </section>
    </main>
  );
}
