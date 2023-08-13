export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-orange-50 px-4 py-5">
      <div className="space-y-1">
        <span className="text-sm/5 font-medium text-orange-700">
          Used space
        </span>
        <p className="text-sm/5 text-orange-500">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>

      <div className="h-2 rounded-full bg-orange-100">
        <div className="h-2 w-4/5 rounded-full bg-orange-600" />
      </div>

      <div className="space-x-3">
        <button
          type="button"
          className="text-sm font-medium text-orange-500 hover:text-orange-700"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="text-sm font-medium text-orange-700 hover:text-orange-900"
        >
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
