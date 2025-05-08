import {
  Link,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import {
  useRef,
  lazy,
  Suspense,
  useState,
  useContext,
  createContext,
} from "react"
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
          path: "smart-home",
          element: <SuspenseWrapper path="./sites/md/smart-home.mdx" />,
        },
        {
          path: "open-source",
          element: <SuspenseWrapper path="./sites/md/open-source.mdx" />,
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
      <footer>BNE Micro Teaching</footer>
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
      <h1>OpenSource und Digitale Nachhaltigkeit</h1>
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
      <ol className="nav">
        <NavLink to="smart-home">Heim Automatisierung</NavLink>
        <NavLink to="open-source">Open Source</NavLink>
      </ol>
    </>
  )
}
