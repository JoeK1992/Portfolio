import PropTypes from "prop-types";

const YoutubeEmbed = () => (
  <div
    className="Video-Responsive"
    style={{ marginBottom: "0em", paddingBottom: "32em" }}
  >
    <iframe
      width="853"
      height="480"
      src={"https://www.youtube.com/embed/RkQ6M6y7GGc"}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
