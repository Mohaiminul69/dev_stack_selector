import type { Technology } from "../types/technology";

type YourStackProps = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const YourStack = ({ stack, onRemove, onRemoveAll }: YourStackProps) => (
  <div className="rounded-2xl border border-slate-200 p-5 lg:sticky lg:top-24 lg:self-start">
    <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
    <p className="mt-1 text-sm text-slate-400">
      {stack.length === 0 ? "No technologies selected yet." : `${stack.length} Technology Selected`}
    </p>

    {stack.length === 0 ? (
      <div className="mt-4 flex h-28 items-center justify-center rounded-xl border border-dashed border-slate-200 text-sm text-slate-400">
        Your stack is empty.
      </div>
    ) : (
      <div className="mt-4 flex flex-col gap-3">
        {stack.map((technology) => (
          <div
            key={technology.id}
            className="flex items-center justify-between rounded-xl border border-slate-200 p-3"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                <img src={technology.icon} alt={technology.name} className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">{technology.name}</p>
                <p className="text-xs text-slate-500">{technology.category}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onRemove(technology.id)}
              aria-label={`Remove ${technology.name} from stack`}
              className="text-slate-400 transition-colors hover:text-slate-600"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    )}

    {stack.length > 0 && (
      <button
        type="button"
        onClick={onRemoveAll}
        className="mt-4 w-full rounded-xl border border-red-200 py-2.5 text-sm font-semibold text-red-500 transition-colors hover:bg-red-50"
      >
        Remove All
      </button>
    )}
  </div>
);

export default YourStack;
