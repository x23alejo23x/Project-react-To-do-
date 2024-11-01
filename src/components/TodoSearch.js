function TodoSearch({ search, setSearch }) {
  return (
    <div className="mb-1">
      <h2 className="m1-0.1 mb-1 font-semibold">Name tasks</h2>
      <input
        type="text"
        placeholder="Busca tus tareas"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none mb-5"
      />
    </div>
  );
}

export { TodoSearch };
