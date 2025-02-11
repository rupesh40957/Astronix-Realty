"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { motion } from "framer-motion"
import { CuboidIcon as Cube } from "lucide-react"

export default function VirtualTourSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Cube className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-4xl font-bold mb-4">Experience Our Properties in 3D</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take a virtual tour of our featured properties from the comfort of your home. Explore every corner and get a
            real feel for your future living space.
          </p>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Start Virtual Tour
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[900px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-4">Virtual Tour: Luxury 3BHK Apartment</DialogTitle>
              </DialogHeader>
              <div className="aspect-video">
                <iframe
                  src="https://my.matterport.com/show/?m=CsPYpGTozg8"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  )
}

