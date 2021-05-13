import NavBar from "../Components/NavBar";

function HomePage() {
  return (
    <div className="Main-Div" style={{ paddingBottom: "2em", height: "100vh" }}>
      <NavBar />
      <h1 className="Heading">Joe Kelly</h1>
      <h2
        style={{
          textAlign: "center",
          marginTop: "0.5em",
          fontSize: "1.3em",
          fontStyle: "italic",
        }}
      >
        Full-stack developer student at Northcoders
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{
            height: "300px",
            width: "300px",
            marginTop: "1em",
          }}
          alt=""
          src="https://scontent.fman1-2.fna.fbcdn.net/v/t1.6435-0/c0.48.206.206a/p206x206/186052643_10218593839229321_3861258703764885055_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=da31f3&_nc_ohc=CMaJT0GjrDsAX_PvxRl&_nc_ht=scontent.fman1-2.fna&tp=27&oh=0df6d347014e5f3b5ed77956c3dee949&oe=60C17A85"
        />
      </div>

      <text style={{ fontSize: "1.3em" }}>
        <br />
        I am a former music student from Liverpool and recently completed the
        Northcoders bootcamp. My interest in coding began after my masters
        degree in audio for video games, after which I found that most jobs in
        this field require the ability to code. I have since found that I enjoy
        coding a great deal and would be happy in any kind of programming role.
        I have learned a great deal before and during the Northcoders bootcamp
        and look forward to beginning my career in this sector and continuing to
        learn new skills.
        <br /> <br />
        <a
          href="https://www.linkedin.com/in/joe-kelly-ab4861138/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to visit my LinkedIn profile{" "}
        </a>
        <br /> <br />
        <a
          href="https://github.com/JoeK1992"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to visit my GitHub page{" "}
        </a>
      </text>
    </div>
  );
}

export default HomePage;
