import NavBar from "../Components/NavBar";

function HomePage() {
  return (
    <div className="Main-Div" style={{ paddingBottom: "3em", height: "100%" }}>
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

      <text style={{ fontSize: "1.3em", marginBottom: "0px" }}>
        <br />
        I am a former music student from Liverpool and recently completed the
        Northcoders bootcamp. I have been developing my interest in coding for
        around six months. I have learned a great deal before and during the
        Northcoders bootcamp and look forward to beginning my career in this
        sector and continuing to learn new skills. I am familiar with
        Javascript, Express.js, PSQL, React, React Native and CSS.
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
