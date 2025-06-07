"use client"

import { Heart, Star, MessageCircle, Plus, Share, MoreHorizontal, Check } from "lucide-react"
import type { Post } from "../types"

type Props = {
  post: Post
}

const PostCard = ({ post }: Props) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-white max-w-2xl">
      
      <div className="relative">
        <img
          src={post.image || "/placeholder.svg"}
          className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
          alt="Post content"
        />

        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60"></div>

        
        <div className="absolute top-0 left-0 right-0 p-3 md:p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-3 flex-1 min-w-0">
              <img
                src={post.authorAvatar || "/placeholder.svg"}
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0"
                alt={post.author}
              />
              <div className="flex items-center space-x-1 md:space-x-2 min-w-0 flex-1">
                <h3 className="font-semibold text-white flex items-center text-sm md:text-base truncate">
                  <span className="truncate">{post.author}</span>
                  {post.verified && (
                    <div className="ml-1 w-3 h-3 md:w-4 md:h-4 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-2 h-2 md:w-2.5 md:h-2.5 text-white" />
                    </div>
                  )}
                </h3>
                <span className="text-gray-300 hidden sm:inline">•</span>
                <span className="text-xs md:text-sm text-gray-300 hidden sm:inline truncate">{post.time}</span>
              </div>
            </div>

            <div className="flex items-center space-x-1 md:space-x-2 flex-shrink-0">
              
              <button className="hidden sm:flex items-center space-x-1 px-2 md:px-3 py-1 md:py-1.5 border border-white/30 rounded-full text-xs md:text-sm font-medium text-white hover:bg-white/10 transition-colors backdrop-blur-sm">
                <Plus className="w-3 h-3 md:w-4 md:h-4" />
                <span className="hidden md:inline">Connect</span>
                <span className="md:hidden">+</span>
              </button>

              
              <button className="p-1.5 md:p-2 hover:bg-white/10 rounded-full transition-colors">
                <Share className="w-3 h-3 md:w-4 md:h-4 text-white" />
              </button>
              <button className="p-1.5 md:p-2 hover:bg-white/10 rounded-full transition-colors">
                <MoreHorizontal className="w-3 h-3 md:w-4 md:h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        
        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-6 text-white">
          
          <div className="flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-3">
            {post.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="px-1.5 md:px-2 py-0.5 md:py-1 bg-black/30 backdrop-blur-sm rounded text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="px-1.5 md:px-2 py-0.5 md:py-1 bg-black/30 backdrop-blur-sm rounded text-xs font-medium">
                +{post.tags.length - 3}
              </span>
            )}
          </div>

          
          <p className="text-xs sm:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-2 md:line-clamp-3">{post.text}</p>

          
          <div className="flex items-center space-x-2 md:space-x-3">
            <button className="flex items-center space-x-1 md:space-x-2 bg-black/40 backdrop-blur-sm rounded-full px-2 md:px-3 py-1.5 md:py-2 text-white hover:bg-black/50 transition-colors">
              <Heart className="w-3 h-3 md:w-4 md:h-4 fill-white" />
              <span className="text-xs md:text-sm font-medium">{post.likes}</span>
            </button>

            <button className="flex items-center space-x-1 md:space-x-2 bg-black/40 backdrop-blur-sm rounded-full px-2 md:px-3 py-1.5 md:py-2 text-white hover:bg-black/50 transition-colors">
              <Star className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-xs md:text-sm font-medium">{post.stars}</span>
            </button>

            <button className="flex items-center space-x-1 md:space-x-2 bg-black/40 backdrop-blur-sm rounded-full px-2 md:px-3 py-1.5 md:py-2 text-white hover:bg-black/50 transition-colors">
              <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-xs md:text-sm font-medium">{post.comments}</span>
            </button>
          </div>

          
          <div className="sm:hidden mt-3">
            <button className="flex items-center justify-center space-x-2 w-full px-3 py-2 border border-white/30 rounded-full text-sm font-medium text-white hover:bg-white/10 transition-colors backdrop-blur-sm">
              <Plus className="w-4 h-4" />
              <span>Connect</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
