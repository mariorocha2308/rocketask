import Login from "../lib/components/Login";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <section className="flex flex-col h-full items-center justify-center max-w-[400px] w-full m-auto">
        <h1 className="text-4xl font-bold">Rocketask!</h1>
        <p className="mt-4 text-lg font-medium">
          Rocketask is a task management application.
        </p>
        <Login/>
      </section>
    </main>
  );
}
