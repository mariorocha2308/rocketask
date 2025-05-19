export default function Home() {
  return (
    <main className="h-screen w-full">
      <section className="flex flex-col h-full items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to Rocketask!</h1>
        <p className="mt-4 text-lg font-medium">
          Rocketask is a task management application.
        </p>
        <div>
          <h2 className="text-2xl font-semibold mt-8">Login</h2>
          <p className="mt-2 text-sm text-gray-500">
            Please enter your credentials to continue.
          </p>
          <form>
            <input type="text"/>
            <input type="password"/>
          </form>
        </div>
      </section>
    </main>
  );
}
