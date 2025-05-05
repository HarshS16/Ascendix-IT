
interface ContactModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContactModal = ({ isOpen, setIsOpen }: ContactModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-indigo-800 to-violet-800 text-white rounded-xl p-6 w-full max-w-md shadow-lg relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-4 text-2xl font-bold text-white hover:text-red-400 transition-all cursor-pointer"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded bg-white/10 placeholder-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-white/10 placeholder-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 rounded bg-white/10 placeholder-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <textarea
            placeholder="Purpose of Contact"
            className="w-full p-3 rounded bg-white/10 placeholder-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            rows={3}
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 rounded bg-white text-indigo-800 font-semibold hover:bg-gray-200 transition-all cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
