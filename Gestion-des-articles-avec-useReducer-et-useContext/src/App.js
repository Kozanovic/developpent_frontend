import "./App.css";
import { ArticleProvider } from "./context/ArticleContext";
import ArticleForm from "./components/ArticleForm";
import ArticleList from "./components/ArticleList";

export default function App() {
  return(<>
    <ArticleProvider>
      <ArticleForm/>
      <ArticleList/>
    </ArticleProvider>
  </>);
}
