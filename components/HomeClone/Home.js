// import { useState } from "react";
// import { Dialog } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// const navigation = [
//   { name: "Product", href: "#" },
//   { name: "Features", href: "#" },
//   { name: "Marketplace", href: "#" },
//   { name: "Company", href: "#" },
// ];

// export default function Example() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="bg-white">
//       <main>
//         <div className="relative isolate">
//           <div
//             className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
//             aria-hidden="true"
//           ></div>
//           <div className="overflow-hidden">
//             <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
//               <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
//                 <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
//                   <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//                     Made by 🇵🇰 for the 🌍
//                   </h1>
//                   <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
//                     We promote Pakistani culture by showcasing the unique
//                     handicrafts created by our talented artisans
//                   </p>
//                   <button
//                     type="button"
//                     className="rounded-md px-8 py-3 mt-12 text-lg font-medium text-white shadow-xl transition-all duration-500 ease-in-out"
//                     style={{
//                       backgroundImage:
//                         "linear-gradient(to right, #fe8c00 0%, #f83600 51%, #fe8c00 100%)",
//                       backgroundSize: "200% auto",
//                       color: "white",
//                       borderRadius: "10px",
//                     }}
//                     onMouseEnter={(e) =>
//                       (e.target.style.backgroundPosition = "right center")
//                     }
//                     onMouseLeave={(e) =>
//                       (e.target.style.backgroundPosition = "left center")
//                     }
//                   >
//                     Shop Now
//                   </button>
//                 </div>
//                 <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pr-30">
//                   <div className="mr-auto w-52 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
//                     <div className="relative">
//                       <img
//                         src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
//                         alt=""
//                         className="aspect-[1/1] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
//                       />
//                       <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
//                     </div>
//                   </div>
//                   <div className="w-52 flex-none space-y-8 pt-4 sm:pt-0">
//                     <div className="relative">
//                       <img
//                         src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
//                         alt=""
//                         className="aspect-[1/1] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
//                       />
//                       <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
//                     </div>
//                     <div className="relative">
//                       <img
//                         src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
//                         alt=""
//                         className="aspect-[1/1] w-full rounded-2xl bg-gray-900/5 object-cover shadow-lg"
//                       />
//                       <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center pt-16">
      <div className="py-16 sm:py-16 lg:pb-8 flex flex-col items-center gap-y-16">
        <img
          src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
          alt="App screenshot"
          width={400}
          height={200}
          className="rounded-md shadow-lg rounded-xl"
        />
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Crafted in 🇵🇰 for the 🌍
          </h1>
          <p className="mt-6 text-xl leading-8 tracking-wide text-gray-600">
            We showcase and sell art and handcrafts crafted by Pakistani
            artists, celebrating their unique talents and promoting the beauty
            of Pakistan's culture.
          </p>
          <div className=" flex items-center justify-center gap-x-6">
            <button
              type="button"
              className="rounded-md px-8 py-3 mt-12 text-lg font-medium text-white shadow-xl transition-all duration-500 ease-in-out"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #fe8c00 0%, #f83600 51%, #fe8c00 100%)",
                backgroundSize: "200% auto",
                color: "white",
                borderRadius: "10px",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundPosition = "right center")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundPosition = "left center")
              }
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
