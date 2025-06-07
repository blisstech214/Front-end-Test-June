import type { Post } from "../types"

const posts: Post[] = [
  {
    id: "1",
    author: "Baron Von Rydtger",
    authorAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    verified: true,
    time: "2h ago",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    text: "Amazing sunset view from the mountains! The colors were absolutely breathtaking and made the entire hike worth it. Nature never fails to amaze me.",
    tags: ["nature", "sunset", "mountains", "photography", "hiking"],
    likes: "1.2K",
    stars: "234",
    comments: "89",
  },
  {
    id: "2",
    author: "Baron Von Rydtger",
    authorAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    verified: true,
    time: "5h ago",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    text: "Working on some new 3D designs today. The creative process is always exciting when you're pushing the boundaries of what's possible.",
    tags: ["3d", "design", "creative", "work", "art"],
    likes: "892",
    stars: "156",
    comments: "42",
  },
  {
    id: "3",
    author: "Baron Von Rydtger",
    authorAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    verified: true,
    time: "1d ago",
    image:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    text: "Coffee and code - the perfect combination for a productive morning. Sometimes the best ideas come when you least expect them.",
    tags: ["coffee", "coding", "productivity", "morning", "inspiration"],
    likes: "654",
    stars: "98",
    comments: "23",
  },
]

export default posts
