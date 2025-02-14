import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AuthorBio() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-muted p-6 rounded-lg my-8">
      <Image
        src="/placeholder.svg?height=100&width=100"
        alt="John Doe"
        width={100}
        height={100}
        className="rounded-full"
      />
      <div>
        <h3 className="text-lg font-semibold mb-2">John Doe</h3>
        <p className="text-sm text-muted-foreground mb-4">
          John Doe is a real estate expert with over 10 years of experience in the Indian property market. He
          specializes in helping first-time buyers find their perfect home in the Dombivli and Kalyan areas.
        </p>
        <Button variant="outline" size="sm">
          View All Posts
        </Button>
      </div>
    </div>
  )
}

