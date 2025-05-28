import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

const ArticleContext = createContext();

const Initialisation = {
  articles: [],
  categories: [],
  libelle: "",
  prix_unitaire: "",
  id_categorie: 1,
  update: null,
};

const reset = {
  libelle: "",
  prix_unitaire: "",
  id_categorie: 1,
  update: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "setter":
      return { ...state, [action.champ]: action.value };
    case "add":
      const nvId = state.articles.length;
      const newArticle = {
        id: nvId + 1,
        libelle: state.libelle,
        prix_unitaire: state.prix_unitaire,
        id_categorie: state.id_categorie,
      };
      return {
        ...state,
        articles: [...state.articles, newArticle],
        ...reset,
      };
    case "delete":
      return {
        ...state,
        articles: state.articles.filter((ar) => ar.id !== action.payload),
      };
    case "edit":
      return { ...state, ...action.payload, update: action.payload };
    case "update":
      return {
        ...state,
        articles: state.articles.map((ar) =>
          ar.id === state.update.id
            ? {
                ...ar,
                libelle: state.libelle,
                prix_unitaire: state.prix_unitaire,
                id_categorie: state.id_categorie,
              }
            : ar
        ),
        ...reset,
      };
    case "setData":
      return {
        ...state,
        articles: action.payload.articles,
        categories: action.payload.categories,
      };
    default:
      return state;
  }
}

function ArticleProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, Initialisation);
  useEffect(() => {
    axios.get("/articleData.json").then((response) => {
      const { articles, categories } = response.data;
      dispatch({
        type: "setData",
        payload: { articles: articles, categories: categories },
      });
    });
  }, []);

  return (
    <>
      <ArticleContext.Provider
        value={{ state, dispatch, cat: state.categories }}
      >
        {children}
      </ArticleContext.Provider>
    </>
  );
}

export { ArticleContext, ArticleProvider };
