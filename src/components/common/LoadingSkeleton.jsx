const LoadingSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="h-56 animate-pulse rounded-2xl border border-[#dfe8e1] bg-white" />
      ))}
    </div>
  );
};

export default LoadingSkeleton;
