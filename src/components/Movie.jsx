import { useRef, useState } from "react"

const shows = [
  {
    title: "Monarch: Legacy of Monsters",
    genre: "Adventure",
    description: "A family uncovers a connection to a world-shaking mystery.",
    colors: ["#25384b", "#a56342"],
    accent: "#e9bb83",
  },
  {
    title: "Slow Horses",
    genre: "Thriller",
    description: "A misfit team tackles high-stakes intelligence work.",
    colors: ["#41433b", "#a17b58"],
    accent: "#d8c5a1",
  },
  {
    title: "Hijack",
    genre: "Thriller",
    description: "A tense journey unfolds in real time.",
    colors: ["#193b50", "#5a8090"],
    accent: "#c0e1e7",
  },
  {
    title: "Pluribus",
    genre: "Drama",
    description: "One person's choices could change everything.",
    colors: ["#59462b", "#b39054"],
    accent: "#f4d48a",
  },
  {
    title: "Shrinking",
    genre: "Comedy",
    description: "A therapist tries a new approach to life and work.",
    colors: ["#394a50", "#728879"],
    accent: "#d8e0aa",
  },
]

function Movie() {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToShow = (index) => {
    const track = trackRef.current
    const card = track?.children[index]
    if (!track || !card) return

    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.clientWidth) / 2,
      behavior: "smooth",
    })
    setActiveIndex(index)
  }

  const updateActiveIndex = () => {
    const track = trackRef.current
    if (!track) return

    const center = track.scrollLeft + track.clientWidth / 2
    const closestIndex = Array.from(track.children).reduce(
      (closest, card, index, cards) => {
        const cardCenter = card.offsetLeft + card.clientWidth / 2
        const closestCenter = cards[closest].offsetLeft + cards[closest].clientWidth / 2
        return Math.abs(cardCenter - center) < Math.abs(closestCenter - center)
          ? index
          : closest
      },
      0,
    )

    setActiveIndex(closestIndex)
  }

  return (
    <section className="overflow-hidden bg-[#f5f5f7] py-8" aria-label="Apple TV shows">
      <div
        ref={trackRef}
        onScroll={updateActiveIndex}
        className="relative flex snap-x snap-mandatory gap-3 overflow-x-auto px-[7vw] pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Featured Apple TV shows"
      >
        {shows.map((show, index) => (
          <article
            key={show.title}
            className="relative isolate flex aspect-[1.25/1] w-[86vw] max-w-[1080px] shrink-0 snap-center items-end overflow-hidden rounded-[1.25rem] bg-[#1d1d1f] p-5 text-white sm:aspect-[2.15/1] sm:p-10 lg:p-14"
            style={{
              background: `radial-gradient(ellipse at 76% 24%, ${show.accent}99 0%, transparent 22%), radial-gradient(ellipse at 64% 100%, ${show.colors[1]} 0%, transparent 52%), linear-gradient(120deg, ${show.colors[0]}, #101317 82%)`,
            }}
            aria-label={`${index + 1} of ${shows.length}: ${show.title}`}
          >
            <div
              aria-hidden="true"
              className="absolute -right-[8%] top-[-38%] -z-10 aspect-square w-[68%] rounded-full border border-white/20 shadow-[0_0_0_24px_rgba(255,255,255,0.03),0_0_0_70px_rgba(255,255,255,0.025)]"
            />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-black/80 to-transparent" />

            <div className="max-w-xl">
              <p className="mb-3 text-sm font-semibold tracking-wide text-white/80">Apple TV+</p>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-white/75">
                {show.genre}
              </p>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                {show.title}
              </h2>
              <p className="mt-2 hidden max-w-md text-sm text-white/85 sm:block sm:text-base">{show.description}</p>
              <button
                type="button"
                className="mt-5 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#1d1d1f] transition hover:bg-white/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Stream now
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-2 flex max-w-6xl items-center justify-center gap-5 px-4">
        <button
          type="button"
          onClick={() => scrollToShow(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          aria-label="Previous show"
          className="grid h-9 w-9 place-items-center rounded-full bg-[#d2d2d7] text-xl leading-none text-[#1d1d1f] transition hover:bg-[#bcbcc1] disabled:cursor-default disabled:opacity-40"
        >
          ‹
        </button>
        <div className="flex items-center gap-2" aria-label={`Show ${activeIndex + 1} of ${shows.length}`}>
          {shows.map((show, index) => (
            <button
              key={show.title}
              type="button"
              onClick={() => scrollToShow(index)}
              aria-label={`Show ${index + 1}: ${show.title}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-2 rounded-full transition-all ${
                activeIndex === index ? "w-6 bg-[#1d1d1f]" : "w-2 bg-[#a1a1a6] hover:bg-[#6e6e73]"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => scrollToShow(Math.min(shows.length - 1, activeIndex + 1))}
          disabled={activeIndex === shows.length - 1}
          aria-label="Next show"
          className="grid h-9 w-9 place-items-center rounded-full bg-[#d2d2d7] text-xl leading-none text-[#1d1d1f] transition hover:bg-[#bcbcc1] disabled:cursor-default disabled:opacity-40"
        >
          ›
        </button>
      </div>
    </section>
  )
}

export default Movie
