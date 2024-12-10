import { FeedbackItem } from "./feedback-item"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Button_back from "@/components/Button_back"

// Dummy data for demonstration
const feedbacks = [
  { id: 1, name: "Alice Johnson", message: "Great service! Very satisfied with the product.", date: "2023-06-01", avatarUrl: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "Bob Smith", message: "Could use some improvements in the user interface.", date: "2023-06-02", avatarUrl: "/placeholder.svg?height=40&width=40" },
  { id: 3, name: "Charlie Brown", message: "Excellent customer support. They resolved my issue quicklygfgfdgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg.", date: "2023-06-03", avatarUrl: "/placeholder.svg?height=40&width=40" },
  { id: 4, name: "Diana Prince", message: "The product exceeded my expectations. Highly recommended!", date: "2023-06-04", avatarUrl: "/placeholder.svg?height=40&width=40" },
  { id: 5, name: "Ethan Hunt", message: "Good value for money. Will definitely buy again.", date: "2023-06-05", avatarUrl: "/placeholder.svg?height=40&width=40" },
]

export default function FeedbackPage() {
  return (
    <main className="flex-1 pl-6 pt-4">
      <h1 className="text-3xl font-bold">Avaliações</h1>
      <Button_back/>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {feedbacks.map((feedback) => (
          <FeedbackItem
            key={feedback.id}
            name={feedback.name}
            message={feedback.message}
            date={feedback.date}
            avatarUrl={feedback.avatarUrl}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button variant="outline" className="mr-2">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Anterior
        </Button>
        <Button variant="outline">
          Proxima
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </main>
  )
}

