import NavBar from "../Components/NavBar";

function EducationHobbies() {
  return (
    <div className="Main-Div" style={{ paddingBottom: "3em", height: "100%" }}>
      <NavBar />
      <h1 className="Heading" style={{ marginBottom: "0.5em" }}>
        About Me
      </h1>
      <text style={{ fontSize: "1.5em" }}>
        I attended secondary school at St Edward's college in Liverpool, before
        leaving at 16 to attend Carmel College in St Helens. I studied Music,
        Music Technology, English Literature and History there for A level. I
        then attended Liverpool University for four years, studying music before
        taking a masters degree in video-game audio at ThinkSpace Education
        (University of Chichester).
        <br /> <br />
        After working various part-time jobs throughout University I spent three
        years working as a steward at the Liverpool Philharmonic Hall before
        spending a year with Slater and Gordon as a legal assistant. It was
        during my time with Slater and Gordon that I developed my interest in
        programming and decided that this would be a career path more suited to
        me. I had already noticed after my time at ThinkSpace education that
        most roles in video-game audio required the ability to code. After
        completing the Free Code Camp tutorials I realised that coding itself
        was of great interest to me and decided to pursue a career in
        programming rather than audio.
        <br /> <br />I have many hobbies and interests outside of work. I still
        play music in my spare time and occasionally perform live with bands. I
        am also keen on sport and play football and tennis. I was men's captain
        at my local club for three years. I still represent the teams there in
        the league and serve as Deputy Welfare Officer.
      </text>
    </div>
  );
}

export default EducationHobbies;
