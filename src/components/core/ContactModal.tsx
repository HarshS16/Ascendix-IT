
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface ContactModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const ContactModal = ({ isOpen, setIsOpen }: ContactModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[999]" onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-violet-900 text-white p-6 text-left align-middle shadow-xl transition-all border border-white/20">
                
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-white hover:text-red-400 transition-colors text-xl font-bold cursor-pointer"
                  aria-label="Close Modal"
                >
                  &times;
                </button>

                <Dialog.Title as="h3" className="text-2xl font-bold leading-6 mb-4">
                  Contact Us
                </Dialog.Title>
                
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-md p-3 bg-violet-800 border border-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-md p-3 bg-violet-800 border border-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-md p-3 bg-violet-800 border border-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <textarea
                    placeholder="Purpose"
                    className="w-full rounded-md p-3 bg-violet-800 border border-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    rows={4}
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition-all"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
