/**
 * Pure-CSS infinite marquee, replacing the original scrolling-ticker
 * markup (two duplicated rows animated with a keyframe translateX).
 * The item list is rendered twice inside one flex track, and the track
 * is animated exactly -50% so the loop is seamless.
 */


export default function Marquee({ items, renderItem, className = "" }) {
    const doubled = [...items, ...items]
  return (
    <div className={`flex overflow-hidden ${className}`}>
    <div className="marquee-track flex w-max shrink-0 items-center">
        {doubled.map((item, i) => (
            <div key={i} className="mx-8 flex shrink-0 items-center">
                {renderItem(item)}
            </div>
        ))}
    </div>
    </div>
  );
}
