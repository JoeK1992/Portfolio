import YoutubeEmbed from "./YoutubeEmbed";

import NavBar from "../Components/NavBar";

function ProjectsPage() {
  return (
    <div className="Main-Div" style={{ paddingBottom: "3em" }}>
      <NavBar />
      <h1 className="Heading">Projects</h1>
      <h2
        style={{
          fontSize: "4em",
          textDecoration: "underline",
          color: "purple",
        }}
      >
        Bloggo
      </h2>
      <text style={{ marginTop: "0.5em", fontSize: "1.5em" }}>
        An interactive mobile app that allows travel bloggers to record their
        travel history <br /> <br />
        <a
          href="https://github.com/JoeK1992/react-app-nc-news"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click me to visit the GitHub page for this project
        </a>
        <br /> <br /> Presentation and demo:
        <br /> <br />
      </text>
      <YoutubeEmbed />
      <div />
      <h2
        style={{
          fontSize: "4em",
          textDecoration: "underline",
          color: "purple",
          marginBottom: "0em",
        }}
      >
        NC-News Back-End
      </h2>
      <text style={{ fontSize: "1.5em" }}>
        <br /> A database/express server providing back-end functionality for a
        news website
        <br /> <br />
        <a
          href="https://github.com/JoeK1992/be-northcoders-news"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click me to visit the GitHub page for this project
        </a>
        <br /> <br />
        <a
          href="https://be-nc-news-jk.herokuapp.com/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click me to access the API and all available endpoints{" "}
        </a>
      </text>
      <h2
        style={{
          fontSize: "4em",
          textDecoration: "underline",
          color: "purple",
          marginBottom: "0.7em",
        }}
      >
        {" "}
        NC-News Front-End{" "}
      </h2>
      <text style={{ fontSize: "1.5em" }}>
        An interactive news website created with React where users can read
        articles, add comments and vote on them.
        <br /> <br />
      </text>
      <a
        href="https://github.com/JoeK1992/react-app-nc-news"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: "1.5em" }}
      >
        Click me to visit the GitHub page for this project
      </a>
      <text>
        <br /> <br />
        <a
          href="https://joek-nc-news.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "1.5em" }}
        >
          {" "}
          Click me to visit NC-News! "Log in" with the credentials detailed on
          the home page.{" "}
        </a>
      </text>
    </div>
  );
}

export default ProjectsPage;
