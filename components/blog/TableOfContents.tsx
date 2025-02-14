"use client"

import { useState, useEffect } from "react"
import { Link } from "lucide-react"

interface TableOfContentsProps {
  content: string
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([])

  useEffect(() => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(content, "text/html")
    const headingElements = doc.querySelectorAll("h2, h3, h4")

    const extractedHeadings = Array.from(headingElements).map((heading, index) => ({
      id: `heading-${index}`,
      text: heading.textContent || "",
      level: Number.parseInt(heading.tagName[1]),
    }))

    setHeadings(extractedHeadings)
  }, [content])

  return (
    <div className="bg-muted p-4 rounded-lg mb-8">
      <h3 className="text-lg font-semibold mb-2 flex items-center">
        <Link className="w-4 h-4 mr-2" />
        Table of Contents
      </h3>
      <nav>
        <ul className="space-y-1">
          {headings.map((heading) => (
            <li key={heading.id} style={{ marginLeft: `${(heading.level - 2) * 12}px` }}>
              <a
                href={`#${heading.id}`}
                className="text-sm hover:underline text-muted-foreground hover:text-foreground"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

