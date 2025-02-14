"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ThumbsUp, MessageCircle } from "lucide-react"

const sampleComments = [
  {
    id: 1,
    author: "Alice Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Great article! This really helped me understand the Dombivli real estate market better.",
    date: "2025-03-16",
    likes: 5,
  },
  {
    id: 2,
    author: "Bob Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "I appreciate the detailed breakdown of factors to consider when choosing a property. Very informative!",
    date: "2025-03-17",
    likes: 3,
  },
]

export default function CommentSection() {
  const [comments, setComments] = useState(sampleComments)
  const [newComment, setNewComment] = useState("")

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: "Current User",
        avatar: "/placeholder.svg?height=40&width=40",
        content: newComment,
        date: new Date().toISOString().split("T")[0],
        likes: 0,
      }
      setComments([...comments, comment])
      setNewComment("")
    }
  }

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-4">Comments</h3>
      <form onSubmit={handleSubmitComment} className="mb-8">
        <Textarea
          placeholder="Leave a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="mb-2"
        />
        <Button type="submit">Post Comment</Button>
      </form>
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <Avatar>
              <AvatarImage src={comment.avatar} alt={comment.author} />
              <AvatarFallback>{comment.author[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">{comment.author}</h4>
                <span className="text-sm text-muted-foreground">{comment.date}</span>
              </div>
              <p className="text-sm mb-2">{comment.content}</p>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  {comment.likes}
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Reply
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

