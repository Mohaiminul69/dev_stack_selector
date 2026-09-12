import type { Technology } from "../types/technology";

const BADGE_STYLES: Record<string, string> = {
  Popular: "bg-blue-50 text-blue-600",
  Versatile: "bg-emerald-50 text-emerald-600",
  Fast: "bg-orange-50 text-orange-600",
  "Full-Stack": "bg-slate-100 text-slate-600",
  Standard: "bg-emerald-50 text-emerald-600",
  "Top SQL": "bg-sky-50 text-sky-600",
  Cache: "bg-red-50 text-red-600",
  Ubiquitous: "bg-yellow-50 text-yellow-700",
  Essential: "bg-blue-50 text-blue-600",
  Robust: "bg-amber-50 text-amber-700",
  Modern: "bg-teal-50 text-teal-600",
  Containers: "bg-violet-50 text-violet-600",
};

type TechnologyCardProps = {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
};

const TechnologyCard = ({ technology, isAdded, onAdd }: TechnologyCardProps) => {
  const badgeClassName = BADGE_STYLES[technology.badge] ?? "bg-slate-100 text-slate-600";

  return (
    <div
      className={`flex h-full flex-col justify-between rounded-2xl border p-6 transition-colors ${
        isAdded ? "border-pink-400 bg-pink-50/40" : "border-slate-200"
      }`}
    >
      <div>
        <div className="flex items-start justify-between">
          <img src={technology.icon} alt={technology.name} className="h-10 w-10" />
          <span className={`rounded-full px-3 py-1 text-xs font-medium ${badgeClassName}`}>{technology.badge}</span>
        </div>

        <h3 className="mt-4 text-lg font-bold text-slate-900">{technology.name}</h3>
        <p className="mt-1 text-sm text-slate-500">{technology.description}</p>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-600">
              {technology.category}
            </span>
            <span className="text-slate-500">{technology.difficulty}</span>
          </div>
          <span className="flex items-center gap-1 font-semibold text-slate-900">
            <span className="text-amber-400">★</span>
            {technology.rating}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={
            isAdded
              ? "mt-5 w-full cursor-not-allowed rounded-xl bg-slate-100 py-2.5 text-sm font-semibold text-slate-400"
              : "mt-5 w-full rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          }
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
