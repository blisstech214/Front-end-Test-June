"use client"

import Header from "../components/Header"
import ProfileCard from "../components/ProfileCard"
import PostCard from "../components/PostCard"
import posts from "../data/mockPosts"

const UserProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      
      <div className="px-3 sm:px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="block lg:hidden space-y-4 md:space-y-6">
            
            <div className="w-full">
              <ProfileCard />
            </div>

            
            <div className="w-full">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 md:mb-4 px-1">Baron's Posts</h2>
              <div className="space-y-4 md:space-y-6">
                {posts.map((post, i) => (
                  <PostCard key={i} post={post} />
                ))}
              </div>
            </div>
          </div>

          
          <div className="hidden lg:flex gap-6 xl:gap-8">
            
            <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
              <div className="sticky top-24">
                <ProfileCard />
              </div>
            </div>

            
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl xl:text-3xl font-bold text-gray-900 mb-6 xl:mb-8">Baron's Posts</h2>
              <div className="space-y-6 xl:space-y-8">
                {posts.map((post, i) => (
                  <PostCard key={i} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
