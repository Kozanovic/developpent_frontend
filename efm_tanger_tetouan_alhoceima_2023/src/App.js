import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";
import ListStagiaire from "./components/Stagiaire/listStagiaire";
import DetailStagiaire from "./components/Stagiaire/detailStagiaire";
import AddStagiaire from "./components/Stagiaire/addStagiaire";

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path="/" element={<ListStagiaire />} />
          <Route path="/add" element={<AddStagiaire />} />
          <Route path="/:nom" element={<DetailStagiaire />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
