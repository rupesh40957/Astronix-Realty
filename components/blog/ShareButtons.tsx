import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Share2 } from "lucide-react"

export default function ShareButtons() {
  return (
    <div className="flex flex-wrap gap-2 my-8">
      <Button variant="outline" size="sm">
        <Facebook className="w-4 h-4 mr-2" />
        Share on Facebook
      </Button>
      <Button variant="outline" size="sm">
        <Twitter className="w-4 h-4 mr-2" />
        Share on Twitter
      </Button>
      <Button variant="outline" size="sm">
        <Linkedin className="w-4 h-4 mr-2" />
        Share on LinkedIn
      </Button>
      <Button variant="outline" size="sm">
        <Share2 className="w-4 h-4 mr-2" />
        Copy Link
      </Button>
    </div>
  )
}

