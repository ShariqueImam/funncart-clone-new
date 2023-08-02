import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="mt-40 py-8 font-jakarta">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-normal leading-20 text-gray-900 sm:text-5xl">
          Empowering Pakistani Artists
        </h1>
        <p className="mt-6 text-lg leading-8 tracking-wide text-gray-600">
          We showcase and sell art and handcrafts crafted by Pakistani artists,
          celebrating their unique talents and promoting the beauty of
          Pakistan's culture.
        </p>
      </div>
    </div>
  );
}
