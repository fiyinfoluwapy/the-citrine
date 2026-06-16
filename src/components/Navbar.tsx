// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { MenuIcon } from 'lucide-react';

// export function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-lg">
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
// <span className="text-2xl font-bold text-[#DE8F4D] font-mono tracking-wider">
//   Citrine Edutainment Ltd
// </span>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <Link href="/" className="text-gray-800 hover:text-[#DE8F4D] font-medium">
//               Home
//             </Link>
//             <Link href="/events" className="text-gray-800 hover:text-[#DE8F4D] font-medium">
//               About
//             </Link>

//             <Link
//               href="/events"
//               className="bg-[#DE8F4D] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
//             >
//               Explore Events
//             </Link>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-gray-700"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <MenuIcon size={24} />
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <nav className="md:hidden pt-4 pb-2 space-y-3">
//             <Link
//               href="/"
//               className="block py-2 text-gray-800 hover:text-[#DE8F4D] font-medium"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Home
//             </Link>
//             {/* <Link
//               href="/events"
//               className="block py-2 text-gray-800 hover:text-[#DE8F4D] font-medium"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Events
//             </Link> */}
//             {/* <Link
//               href="/admin/login"
//               className="block py-2 text-gray-800 hover:text-[#DE8F4D] font-medium"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Admin
//             </Link> */}
//             <Link
//               href="/events"
//               className="block bg-[#DE8F4D] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Explore Events
//             </Link>
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// }


'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section - Now with subtext */}
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-[#DE8F4D] font-mono tracking-wider">
              Citrine Edutainment Ltd.
            </span>
            <span className="text-[10px] text-[#DE8F4D]/70 tracking-wide">
              RC: 9191772
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-[#DE8F4D] font-medium">
              Home
            </Link>
            <Link href="/events" className="text-gray-800 hover:text-[#DE8F4D] font-medium">
              About
            </Link>

            <Link
              href="/events"
              className="bg-[#F1C149] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Explore Events
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <MenuIcon size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-3">
            <Link
              href="/"
              className="block py-2 text-gray-800 hover:text-[#DE8F4D] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/events"
              className="block bg-[#DE8F4D] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore Events
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}