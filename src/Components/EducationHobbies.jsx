import NavBar from "../Components/NavBar";

function EducationHobbies() {
  return (
    <div className="Main-Div" style={{ paddingBottom: "3em", height: "100%" }}>
      <NavBar />
      <h1 className="Heading" style={{ marginBottom: "0.5em" }}>
        About Me
      </h1>
      <text style={{ fontSize: "1.5em", marginBottom: "0px" }}>
        I attended secondary school at St Edward's college in Liverpool, before
        leaving at 16 to attend Carmel College in St Helens. I studied Music,
        Music Technology, English Literature and History there for A level. I
        then attended Liverpool University for four years, studying music before
        taking a masters degree in video-game audio at ThinkSpace Education
        (University of Chichester).
        <br /> <br />
        After working various part-time jobs throughout University I spent three
        years working as a steward at the Liverpool Philharmonic Hall before
        spending a year with Slater and Gordon as a legal assistant. I gained
        many professional skills from these posts but the work I did with
        ThinkSpace and for student films in my spare time was much more
        fulfilling. Programming digital audio using technology was inspiring and
        when the opportunity to be a Northcoders student arose I jumped at it. I
        have thoroughly enjoyed the Bootcamp right from the Free Code Camp
        tutorials through to frontend and backend projects and look forward to
        beginning my career in programming.
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
