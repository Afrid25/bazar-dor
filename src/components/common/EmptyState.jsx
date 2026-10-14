const EmptyState = ({ icon = "📭", title, message }) => {
  return (
    <div className="rounded-2xl border border-[#dfe8e1] bg-white p-10 text-center">
      <span className="text-5xl">{icon}</span>
      {title && <h2 className="mt-4 text-xl font-extrabold text-[#1f2c24]">{title}</h2>}
      {message && <p className="mt-2 text-sm text-[#6c7871]">{message}</p>}
    </div>
  );
};

export default EmptyState;
