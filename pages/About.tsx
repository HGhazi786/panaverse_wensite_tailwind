import YouTubeVideo from "./components/youtube"
export default function About()
{
    return (
      <>
        <title>About</title>
        <div>
          <h1 className="text-slate-900 text-4xl font-bold text-center font-sans">
            Agenda
          </h1>
          <p className="text-slate-900 text-xl font-semibold text-center font-sans mx-40">
            Education is the passport to the future for tomorrow belongs to
            those who prepare for it today
          </p>
        </div>
        <br></br>
        <div className="flex w-full justify-center">
          <YouTubeVideo/>
        </div>
        <br></br>
      </>
    );
}