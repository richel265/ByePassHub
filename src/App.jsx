import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <div class="logo">
          <a href="/">
            <img src="/images/logo.png" alt="ByePassHub logo" class="logoimg" />
          </a>
        </div>
        <ul class="navlist">
          <li>
            <a href="/" class="navlink">
              Home
            </a>
          </li>
          <li>
            <a href="/Cheats.html" class="navlink">
              Cheats
            </a>
          </li>
          <li>
            <a href="/Games.md" class="navlink">
              Games
            </a>
          </li>
          <li>
            <a href="/mainUnblockers.md" class="navlink">
              Websites
            </a>
          </li>
          <li>
            <a href="/Exploits/README.md" class="navlink">
              Exploits
            </a>
          </li>
          <li>
            <a href="/Exploits/Bookmarklets/Bookmarklets.md" class="navlink">
              {" "}
              Bookmarklets{" "}
            </a>
          </li>
          <li>
            <a href="/Movies&Anime.md" class="navlink">
              Movies&Anime
            </a>
          </li>
          <li>
            <a href="/README.md" class="navlink">
              About
            </a>
          </li>
        </ul>
      </nav>
      <div class="document">
        <h2>ByePassHub | Main Menu</h2>
        <h2>If you like this collection, make sure to star it! - 230 stars!</h2>
        <p>
          This is a collection of links of proxies, games, exploits, bypasses,
          AI, movies, and apps.
        </p>
        <br />
        <p></p>
      </div>
    </>
  );
}

export default App;
