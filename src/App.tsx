import ToggleTxt from "./components/ToggleTxt";

const App = () => {
  return (
    <main className="flex flex-1 flex-col items-center gap-6 p-8 justify-center">
      <h1>Ocultar texto</h1>
      <ToggleTxt
        text="Este texto se puede mostrar u ocultar pulsando el botón."
        initialBtnState={false}
      />
    </main>
  );
};

export default App;
