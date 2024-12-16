'use client'

import { useState } from "react"
import { FeedbackItem } from "./feedback-item"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Button_back from "@/components/Button_back"

// Dummy data for demonstration
const allFeedbacks = [
  { id: 1, name: "Alice Johnson", message: "Great service! Very satisfied with the product. The team was incredibly helpful and responsive throughout the entire process. I particularly appreciated their attention to detail and willingness to go the extra mile to ensure customer satisfaction.", rating: 5, date: "2023-06-01", avatarUrl: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "Bob Smith", message: "Could use some improvements in the user interface. While the functionality is solid, I found some aspects of the UI to be a bit counterintuitive. However, the customer support team was very receptive to feedback.", rating: 2, date: "2023-06-02", avatarUrl: "/placeholder.svg?height=40&width=40" },
  { id: 3, name: "Charlie Brown", message: "Excellent customer support. They resolved my issue quickly.", rating: 5, date: "2023-06-03", avatarUrl: "/placeholder.svg?height=40&width=40" },
  { id: 4, name: "Diana Prince", message: "The product exceeded my expectations. Highly recommended!", rating: 1, date: "2023-06-04", avatarUrl: "/placeholder.svg?height=40&width=40" },
  { id: 5, name: "Ethan Hunt", message: "Good value for money. Will definitely buy again.", rating: 5, date: "2023-06-05", avatarUrl: "/placeholder.svg?height=40&width=40" },
  { id: 6, name: "Fiona Gallagher", message: "Impressive features and functionality. This product has significantly improved our workflow.", rating: 2, date: "2023-06-06", avatarUrl: "/placeholder.svg?height=40&width=40" },
  { id: 7, name: "George Lucas", message: "A game-changer in the industry. Looking forward to future updates.", rating: 4, date: "2023-06-07", avatarUrl: "/placeholder.svg?height=40&width=40" },
  { id: 8, name: "Hannah Montana", message: "Easy to use and integrate. Perfect for our team's needs.", rating: 3, date: "2023-06-08", avatarUrl: "/placeholder.svg?height=40&width=40" },
]

const ITEMS_PER_PAGE = 6

export default function FeedbackPage() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(allFeedbacks.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentFeedbacks = allFeedbacks.slice(startIndex, endIndex)

  return (
    <main className="w-full p-4 md:p-6 overflow-y-scroll">
      <h1 className="text-2xl font-bold text-center md:text-left">Avaliações</h1>
      <Button_back/>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentFeedbacks.map((feedback) => (
          <FeedbackItem
            key={feedback.id}
            name={feedback.name}
            message={feedback.message}
            rating={feedback.rating}
            date={feedback.date}
            avatarUrl={feedback.avatarUrl}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button 
          variant="outline" 
          className="mr-2"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Anterior
        </Button>
        <Button 
          variant="outline"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Proxima
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </main>
  )
}

