import { MantineProvider } from "@mantine/core";
import "./App.css";
import "@mantine/core/styles.css";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage";

function App() {
  return (
    <MantineProvider>
      <CharacterListPage />
    </MantineProvider>
  );
}

export default App;
