import ColorBlox from "./components/ColorBlox";

function App() {

  return (
    <main className="bg-zinc-100 h-screen flex flex-col">
      <h1 className="text-center py-8 text-6xl">Color Blox</h1>
      <ColorBlox />
      <div className="bg-yellow-400"></div>
      <div className="bg-red-400"></div>
      <div className="bg-green-400"></div>
      <div className="bg-blue-400"></div>
      <div className="bg-yellow-600"></div>
      <div className="bg-red-600"></div>
      <div className="bg-green-600"></div>
      <div className="bg-blue-600"></div>
      <div className="bg-gray-400"></div>
    </main>
  );
}

export default App;
