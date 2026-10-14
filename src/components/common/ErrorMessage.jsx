const ErrorMessage = ({ message }) => {
  return (
    <div className="rounded-2xl border border-red-100 bg-red-50 p-6 text-center text-sm text-red-700">
      {message || "একটি সমস্যা হয়েছে। দয়া করে আবার চেষ্টা করুন।"}
    </div>
  );
};

export default ErrorMessage;
