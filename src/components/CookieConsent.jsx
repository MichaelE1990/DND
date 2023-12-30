'use client'
import { Fragment, useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

function XMarkIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function InboxIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
    </svg>
  );
}

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice about cookie consent
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      setShow(true);
    }
  }, []);

  const handleConsent = (consent) => {
    localStorage.setItem('cookieConsent', consent);
    setShow(false);
  };
  return (
    <>
      <div
        aria-live="assertive"
        className="pointer-events-none font-display fixed inset-0 z-50 flex items-start justify-center px-4 py-6"
      >
        <div className="flex w-full max-w-md flex-col items-center space-y-4"> {/* Adjusted max-width for rectangular shape */}
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0"
            enterTo="translate-y-0 opacity-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 translate-y-2"
          >
            <div className="pointer-events-auto w-full overflow-visible rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-2"> {/* Reduced padding for a more rectangular look */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <InboxIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /> {/* Adjusted icon size */}
                  </div>
                  <div className="ml-3 w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900">Cookies</p>
                    <p className="mt-1 text-xs text-gray-500">We use cookies for functionality and analytics. By continuing, you agree to our use of cookies. <a href="/cookie-policy" className="text-indigo-600 hover:text-indigo-500">Learn more</a>.</p>
                    <div className="mt-2 flex space-x-7"> {/* Adjusted margin for compactness */}
                      <button
                        type="button"
                        className="rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => handleConsent('agree')}
                      >
                        OK
                      </button>
                    </div>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => setShow(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
