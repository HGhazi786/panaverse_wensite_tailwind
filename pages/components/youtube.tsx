import YouTube from "react-youtube";

export default function YouTubeVideo() {
const videoId = "https://youtu.be/zmv0A90UKi0";

  return (
    <div>
      <YouTube videoId={videoId} className="w-8/12 h-96" />
    </div>
  );
}
