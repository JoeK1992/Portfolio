import { Link } from "@reach/router";

function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "0.7em",
      }}
    >
      <Link to="/">
        <nav style={{ fontSize: "2.5em", marginRight: "0.5em" }}>Home </nav>
      </Link>
      <Link to="/projects">
        <nav style={{ fontSize: "2.5em", marginRight: "0.5em" }}> Projects</nav>
      </Link>
      <Link to="/education-employment-and-hobbies">
        <nav style={{ fontSize: "2.5em" }}> About Me</nav>
      </Link>
    </div>
  );
}

export default NavBar;
