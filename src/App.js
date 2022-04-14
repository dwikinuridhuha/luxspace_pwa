import { useEffect, useState } from "react";
import {
  Header,
  Hero,
  Browse,
  Arrived,
  Client,
  AsideMenu,
  Footer,
  Offline,
} from "./components";

function App() {
  const [items, setItems] = useState([]);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  function handleOffline() {
    setIsOffline(!navigator.onLine);
  }

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        "https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc",
        {
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            "x-api-key": process.env.REACT_APP_APIKEY,
          },
        }
      );

      const { nodes } = await response.json();
      setItems(nodes);

      const script = document.createElement("script");
      script.src = "./carousel.js";
      script.async = false;
      document.body.appendChild(script);
    };

    getProducts();

    handleOffline();
    window.addEventListener("online", handleOffline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOffline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [isOffline]);

  return (
    <>
      {isOffline && <Offline />}
      <Header />
      <Hero />
      <Browse />
      <Arrived items={items} />
      <Client />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default App;
