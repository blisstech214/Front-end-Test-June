"use client"

import { useState } from "react"
import { X } from "lucide-react"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="w-full bg-white py-4 px-4 md:py-6 md:px-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        
        <div className="flex-shrink-0 relative z-20">
          <div className="w-[120px] h-[35px] md:w-[140px] md:h-[40px] border-2 border-gray-800 flex items-center justify-center">
            <span className="text-xs md:text-sm font-bold tracking-wide text-gray-800">LOXALA LOGO</span>
          </div>
        </div>

        
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-8 xl:gap-12 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-gray-900 transition-colors whitespace-nowrap">
            Menu item A
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors whitespace-nowrap">
            Menu item B
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors whitespace-nowrap">
            Menu item C
          </a>
        </div>

        
        <div className="hidden lg:flex gap-8 xl:gap-12 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-gray-900 transition-colors whitespace-nowrap">
            Menu item X
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors whitespace-nowrap">
            Menu item Y
          </a>
        </div>

        
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center space-y-1"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        
        <div
          className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMobileMenu}
        ></div>

        
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white border-l border-gray-200 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out backdrop-blur-sm ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ backgroundColor: "rgba(255, 255, 255, 0.98)" }}
        >
          <div className="flex flex-col h-full bg-white">
            
            <div className="flex justify-end p-4 border-b border-gray-100">
              <button
                onClick={toggleMobileMenu}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-black" />
              </button>
            </div>

            
            <div className="flex flex-col pt-6 px-6 space-y-6 flex-1">
              <a
                href="#"
                className="text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 py-3 px-2 rounded-md border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                Menu item A
              </a>
              <a
                href="#"
                className="text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 py-3 px-2 rounded-md border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                Menu item B
              </a>
              <a
                href="#"
                className="text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 py-3 px-2 rounded-md border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                Menu item C
              </a>
              <a
                href="#"
                className="text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 py-3 px-2 rounded-md border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                Menu item X
              </a>
              <a
                href="#"
                className="text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 py-3 px-2 rounded-md"
                onClick={toggleMobileMenu}
              >
                Menu item Y
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
