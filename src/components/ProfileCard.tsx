"use client"

import { Check, Plus, MessageCircle, ChevronDown } from "lucide-react"

const ProfileCard = () => {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 w-full max-w-sm md:max-w-md lg:max-w-lg shadow-sm border border-gray-100">
      
      <div className="flex items-start justify-between mb-4 md:mb-6">
        <div className="flex items-start space-x-3 md:space-x-4 flex-1 min-w-0">
          
          <div className="relative flex-shrink-0">
            <img
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
              alt="Profile"
            />
            <div className="absolute -bottom-0.5 -right-0.5 md:-bottom-1 md:-right-1 w-6 h-6 md:w-8 md:h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <Plus className="w-3 h-3 md:w-4 md:h-4 text-white" />
            </div>
          </div>

          
          <div className="flex-1 min-w-0">
            
            <div className="mb-2 md:mb-3">
              <h2 className="font-semibold text-lg md:text-xl flex items-center text-gray-900 truncate">
                <span className="truncate">Baron Von Rydtger</span>
                <div className="ml-2 w-4 h-4 md:w-5 md:h-5 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                </div>
              </h2>
              <p className="text-xs md:text-sm text-gray-500 mt-1 truncate">Graphic Designer, 2D, 3D, Web3</p>
            </div>

            
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
              <div className="text-center sm:text-left">
                <div className="font-bold text-sm sm:text-base md:text-lg text-purple-600">12.3K</div>
                <div className="text-xs text-gray-500">Followers</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-bold text-sm sm:text-base md:text-lg text-purple-600">548</div>
                <div className="text-xs text-gray-500">Following</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-bold text-sm sm:text-base md:text-lg text-purple-600">1.1K</div>
                <div className="text-xs text-gray-500">Posts</div>
              </div>
            </div>
          </div>
        </div>

        
        <button className="w-8 h-8 md:w-10 md:h-10 border border-purple-200 rounded-full flex items-center justify-center hover:bg-purple-50 transition-colors flex-shrink-0 ml-2 md:ml-0">
          <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
        </button>
      </div>

      
      <div className="border-t border-gray-100 pt-3 md:pt-4">
        <button className="flex items-center justify-between w-full text-left group">
          <span className="font-semibold text-gray-900 text-sm md:text-base">About</span>
          <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
        </button>
      </div>
    </div>
  )
}

export default ProfileCard
