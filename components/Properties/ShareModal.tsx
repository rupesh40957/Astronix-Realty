import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Link } from "lucide-react"

interface ShareModalProps {
  isOpen: boolean
  onClose: () => void
  propertyUrl: string
  title: string
}

export function ShareModal({ isOpen, onClose, propertyUrl, title }: ShareModalProps) {
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(propertyUrl)}`, "_blank")
  }

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(propertyUrl)}&text=${encodeURIComponent(title)}`,
      "_blank",
    )
  }

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(propertyUrl)}&title=${encodeURIComponent(title)}`,
      "_blank",
    )
  }

  const copyLink = () => {
    navigator.clipboard.writeText(propertyUrl)
    // You might want to show a toast notification here
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share this property</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <Input readOnly value={propertyUrl} className="flex-1" />
          <Button size="sm" className="px-3" onClick={copyLink}>
            <span className="sr-only">Copy</span>
            <Link className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex justify-center space-x-2">
          <Button size="sm" variant="outline" className="text-blue-600" onClick={shareOnFacebook}>
            <Facebook className="mr-2 h-4 w-4" />
            Facebook
          </Button>
          <Button size="sm" variant="outline" className="text-blue-400" onClick={shareOnTwitter}>
            <Twitter className="mr-2 h-4 w-4" />
            Twitter
          </Button>
          <Button size="sm" variant="outline" className="text-blue-700" onClick={shareOnLinkedIn}>
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

