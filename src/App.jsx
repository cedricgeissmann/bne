import {
  Link,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import {
  useEffect,
  useRef,
  lazy,
  Suspense,
  useState,
  useContext,
  createContext,
} from "react"
import ICode from "./components/ICode"
import { ReactSVG } from "react-svg"

function SuspenseWrapper({ path }) {
  const file = path.split("/").slice(-1)[0]
  const filename = file.split(".")[0]
  const LazyComponent = lazy(() => import(`./sites/md/${filename}.mdx`))
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  )
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <SuspenseWrapper path="./sites/md/index.mdx" /> },
        {
          path: "install",
          element: <SuspenseWrapper path="./sites/md/installation.mdx" />,
        },
        {
          path: "html",
          element: <SuspenseWrapper path="./sites/md/html.mdx" />,
        },
        {
          path: "html-elements",
          element: <SuspenseWrapper path="./sites/md/html-elements.mdx" />,
        },
        {
          path: "html-attributes",
          element: <SuspenseWrapper path="./sites/md/html-attributes.mdx" />,
        },
        {
          path: "svg",
          element: <SuspenseWrapper path="./sites/md/svg.mdx" />,
        },
        {
          path: "svg-elements",
          element: <SuspenseWrapper path="./sites/md/svg-elements.mdx" />,
        },
        {
          path: "svg-clipping",
          element: <SuspenseWrapper path="./sites/md/svg-clipping.mdx" />,
        },
        {
          path: "svg-animation",
          element: <SuspenseWrapper path="./sites/md/svg-animation.mdx" />,
        },
        {
          path: "css",
          element: <SuspenseWrapper path="./sites/md/css.mdx" />,
        },
        {
          path: "css-selectors",
          element: <SuspenseWrapper path="./sites/md/css-selectors.mdx" />,
        },
        {
          path: "css-box-model",
          element: <SuspenseWrapper path="./sites/md/css-box-model.mdx" />,
        },
        {
          path: "css-animations",
          element: <SuspenseWrapper path="./sites/md/css-animationen.mdx" />,
        },
        {
          path: "tipp-images",
          element: <SuspenseWrapper path="./sites/md/css-img.mdx" />,
        },
        {
          path: "tipp-flexbox",
          element: <SuspenseWrapper path="./sites/md/css-layout.mdx" />,
        },
        {
          path: "img-background",
          element: <SuspenseWrapper path="./sites/md/css-img-background.mdx" />,
        },
        {
          path: "img-next-to-text",
          element: (
            <SuspenseWrapper path="./sites/md/css-img-next-to-text.mdx" />
          ),
        },
        {
          path: "git",
          element: <SuspenseWrapper path="./sites/md/git.mdx" />,
        },
        {
          path: "git-branches",
          element: <SuspenseWrapper path="./sites/md/git-branches.mdx" />,
        },
        {
          path: "git-merges",
          element: <SuspenseWrapper path="./sites/md/git-merges.mdx" />,
        },
        {
          path: "git-merge-conflicts",
          element: (
            <SuspenseWrapper path="./sites/md/git-merge-conflicts.mdx" />
          ),
        },
        {
          path: "javascript",
          element: <SuspenseWrapper path="./sites/md/javascript.mdx" />,
        },
        {
          path: "javascript-change-page",
          element: (
            <SuspenseWrapper path="./sites/md/javascript-change-page.mdx" />
          ),
        },
        {
          path: "javascript-blocks",
          element: <SuspenseWrapper path="./sites/md/javascript-blocks.mdx" />,
        },
        {
          path: "javascript-declarative",
          element: (
            <SuspenseWrapper path="./sites/md/javascript-declarative.mdx" />
          ),
        },
        {
          path: "javascript-if",
          element: <SuspenseWrapper path="./sites/md/javascript-if.mdx" />,
        },
        {
          path: "javascript-for",
          element: <SuspenseWrapper path="./sites/md/javascript-for.mdx" />,
        },
        {
          path: "javascript-return",
          element: <SuspenseWrapper path="./sites/md/javascript-return.mdx" />,
        },
        {
          path: "javascript-lists",
          element: <SuspenseWrapper path="./sites/md/javascript-lists.mdx" />,
        },
        {
          path: "javascript-ascii",
          element: <SuspenseWrapper path="./sites/md/javascript-ascii.mdx" />,
        },
        {
          path: "javascript-switches",
          element: (
            <SuspenseWrapper path="./sites/md/javascript-switches.mdx" />
          ),
        },
        {
          path: "javascript-text-to-numbers",
          element: (
            <SuspenseWrapper path="./sites/md/javascript-text-to-numbers.mdx" />
          ),
        },
        {
          path: "javascript-variables",
          element: (
            <SuspenseWrapper path="./sites/md/javascript-variables.mdx" />
          ),
        },
        {
          path: "ai-intro",
          element: <SuspenseWrapper path="./sites/md/ai-intro.mdx" />,
        },
        {
          path: "ai-pong",
          element: <SuspenseWrapper path="./sites/md/ai-pong.mdx" />,
        },
        {
          path: "data",
          element: <SuspenseWrapper path="./sites/md/data.mdx" />,
        },
        {
          path: "data-objects",
          element: <SuspenseWrapper path="./sites/md/data-objects.mdx" />,
        },
        {
          path: "data-complex",
          element: <SuspenseWrapper path="./sites/md/data-complex.mdx" />,
        },
        {
          path: "data-classes",
          element: <SuspenseWrapper path="./sites/md/data-classes.mdx" />,
        },
        {
          path: "data-objects-as-data",
          element: (
            <SuspenseWrapper path="./sites/md/data-objects-as-data.mdx" />
          ),
        },
        {
          path: "data-binary",
          element: <SuspenseWrapper path="./sites/md/data-binary.mdx" />,
        },
        {
          path: "data-hex",
          element: <SuspenseWrapper path="./sites/md/data-hex.mdx" />,
        },
        {
          path: "network",
          element: <SuspenseWrapper path="./sites/md/network.mdx" />,
        },
        {
          path: "game",
          element: <SuspenseWrapper path="./sites/md/game.mdx" />,
        },
        {
          path: "game-animations",
          element: (
            <SuspenseWrapper path="./sites/md/game-player-and-animations.mdx" />
          ),
        },
        {
          path: "game-interactions",
          element: <SuspenseWrapper path="./sites/md/game-interactions.mdx" />,
        },
        {
          path: "security-passwords",
          element: <SuspenseWrapper path="./sites/md/security-passwords.mdx" />,
        },
        {
          path: "network-intro",
          element: <SuspenseWrapper path="./sites/md/network-intro.mdx" />,
        },
      ],
    },
  ],
  {
    basename: "/bne",
  },
)

const NavContext = createContext({})
function NavProvider({ children }) {
  const [visible, setVisible] = useState(false)

  return (
    <NavContext.Provider value={{ visible, setVisible }}>
      {children}
    </NavContext.Provider>
  )
}

export default function App() {
  return <RouterProvider router={router} />
}

function Icon({ url }) {
  return <ReactSVG src={url} />
}

function Layout() {
  const dialogRef = useRef(null)

  return (
    <>
      <NavProvider>
        <Header />
        <Navbar />
        <main>
          <Outlet />
        </main>
      </NavProvider>
      <dialog
        style={{
          padding: "4rem 2rem",
          fontSize: "2.5rem",
          fontWeight: "bold",
          fontFamily: "monospace",
        }}
        ref={dialogRef}>{`${window.location}`}</dialog>
      <footer>Informatik Gymnasium Muttenz</footer>
    </>
  )
}

function Header() {
  const { setVisible } = useContext(NavContext)
  const toggleSide = () => {
    setVisible((toggle) => !toggle)
  }
  return (
    <header onClick={toggleSide}>
      <span className="icon">
        <Icon url="./icons/hamburger.svg" />
      </span>
      <h1>Gym Informatik</h1>
    </header>
  )
}

function Navbar() {
  const { visible } = useContext(NavContext)
  return (
    <aside className={visible ? "show sidenav" : "sidenav"}>
      <ChapterIndex />
    </aside>
  )
}

function NavLink({ to, children }) {
  const { setVisible } = useContext(NavContext)
  const hide = () => {
    setVisible(false)
  }
  return (
    <li>
      <Link onClick={hide} to={to}>
        {children}
      </Link>
    </li>
  )
}

function ChapterIndex() {
  return (
    <>
      <div className="hint">
        ACHTUNG: Diese Webseite ist unter aktiver Entwicklung. Informationen
        können von einem Tag auf den nächsten ändern. Wenn Sie eine Information
        von der Webseite brauchen, dann machen Sie ein Screenshot davon, und
        speichern diesen für sich ab.
      </div>
      <ol className="nav">
        <li>
          Einführung
          <ol>
            <NavLink to="install">Installation</NavLink>
          </ol>
        </li>
        <li>
          HTML
          <ol>
            <NavLink to="html">Webseiten</NavLink>
            <NavLink to="html-elements">Webseiten strukturieren</NavLink>
            <NavLink to="html-attributes">HTML Attribute</NavLink>
          </ol>
        </li>
        <li>
          SVG
          <ol>
            <NavLink to="svg">Vektorgrafiken mit SVG</NavLink>
            <NavLink to="svg-elements">Weitere SVG-Elemente</NavLink>
            <NavLink to="svg-clipping">Elemente verbergen</NavLink>
            <NavLink to="svg-animation">Elemente animieren</NavLink>
          </ol>
        </li>
        <li>
          CSS
          <ol>
            <NavLink to="css">Elemente gestalten</NavLink>
            <NavLink to="css-selectors">CSS Selektoren</NavLink>
            <NavLink to="css-box-model">CSS Box Modell</NavLink>
            <NavLink to="css-animations">CSS Animationen</NavLink>
          </ol>
        </li>
        <li>
          Git
          <ol>
            <NavLink to="git">Versionskontrolle</NavLink>
            <NavLink to="git-branches">
              Versionszweige (<ICode>branch</ICode>es)
            </NavLink>
            <NavLink to="git-merges">
              Versionen zusammenführen (<ICode>merge</ICode>)
            </NavLink>
            <NavLink to="git-merge-conflicts">
              <ICode>merge</ICode>-Konflikte
            </NavLink>
          </ol>
        </li>
        <li>
          Tipps und Tricks für HTML und CSS
          <ol>
            <NavLink to="tipp-images">Bilder zentrieren</NavLink>
            <NavLink to="tipp-flexbox">Layouts</NavLink>
            <NavLink to="img-background">Bild als Hintergrund</NavLink>
            <NavLink to="img-next-to-text">Bild neben Text</NavLink>
          </ol>
        </li>
        <li>
          Javascript
          <ol>
            <NavLink to="javascript">Einführung in Javascript</NavLink>
            <NavLink to="javascript-change-page">
              Seiteninhalte mit Javascript anpassen
            </NavLink>
            <NavLink to="javascript-text-to-numbers">
              Datentypen in Javascript
            </NavLink>
          </ol>
        </li>
        <li>
          Javascript: Logik
          <ol>
            <NavLink to="javascript-variables">Variablen</NavLink>
            <NavLink to="javascript-blocks">Code-Blöcke / Scoping</NavLink>
            <NavLink to="javascript-declarative">
              Deklarativer Code und praktische Funktionen
            </NavLink>
            <NavLink to="javascript-if">
              Bedingungen (<pre>if</pre>)
            </NavLink>
            <NavLink to="javascript-for">
              Javascript Schleifen (<pre>for</pre>)
            </NavLink>
            <NavLink to="javascript-return">
              Rückgabewerte in Javascript (<pre>return</pre>)
            </NavLink>
            <NavLink to="javascript-lists">Listen in Javascript</NavLink>
            <NavLink to="javascript-ascii">ASCII-Codes in Javascript</NavLink>
            <NavLink to="javascript-switches">Schalter in Javascript</NavLink>
          </ol>
        </li>
        <li>
          Künstliche Intelligenz
          <ol>
            <NavLink to="ai-intro">Arbeiten mit küstlicher Intelligenz</NavLink>
            <NavLink to="ai-pong">Pong mit küstlicher Intelligenz</NavLink>
          </ol>
        </li>
        <li>
          Daten und Objekte
          <ol>
            <NavLink to="data">Daten</NavLink>
            <NavLink to="data-objects">Objekte</NavLink>
            <NavLink to="data-complex">Komplexe Daten</NavLink>
            <NavLink to="data-classes">Klassen</NavLink>
            <NavLink to="data-objects-as-data">Objekte as Datenquelle</NavLink>
            <NavLink to="data-binary">Binärsystem</NavLink>
            <NavLink to="data-hex">Hexadezimalsystem</NavLink>
          </ol>
        </li>
        <li>
          Computerspiele
          <ol>
            <NavLink to="game">Eigenes Computerspiel</NavLink>
            <NavLink to="game-animations">Spieler und Animationen</NavLink>
            <NavLink to="game-interactions">Interaktionen im Spiel</NavLink>
          </ol>
        </li>
        <li>
          Sicherheit
          <ol>
            <NavLink to="security-passwords">Passwörter und Sicherheit</NavLink>
          </ol>
        </li>
        <li>
          Netzwerke
          <ol>
            <NavLink to="network-intro">Computernetzwerke</NavLink>
          </ol>
        </li>
      </ol>
    </>
  )
}
