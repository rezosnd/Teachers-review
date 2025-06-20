"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="bg"></div>
      <div className="hud__effects">
        <div className="effect__long"></div>
        <div className="effect__small"></div>
        <div className="effect__small"></div>
        <div className="effect__long"></div>
      </div>

      <div className="text-center max-w-md relative">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"></div>
          <h1 className="text-9xl font-bold text-primary sci-fi-text-glow relative z-10">404</h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-4 border-primary/30 rounded-full"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary/20 rounded-full"
          ></motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8 mb-2"
        >
          <div className="inline-flex items-center justify-center p-3 bg-gray-800/50 rounded-full border border-primary/30 mb-4">
            <AlertTriangle className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl font-semibold text-primary sci-fi-text-glow">Page Not Found</h2>
          <div className="sci-fi-divider my-4"></div>
          <p className="text-gray-300 mb-8">Oops! The page you're looking for doesn't exist or has been moved.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link href="/">
            <Button className="sci-fi-button gap-2 group">
              <span className="absolute inset-0 w-0 group-hover:w-full transition-all duration-700 h-full bg-primary/20"></span>
              <Home size={16} className="relative z-10" />
              <span className="relative z-10">Back to Home</span>
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8"
        >
          <div className="grid grid-cols-3 gap-2">
            <div className="h-1 bg-primary/30 rounded-full"></div>
            <div className="h-1 bg-primary/20 rounded-full"></div>
            <div className="h-1 bg-primary/10 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


