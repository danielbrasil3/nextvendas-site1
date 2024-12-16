'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface FeedbackItemProps {
  name: string
  message: string
  rating: number
  date: string
  avatarUrl?: string
}

export function FeedbackItem({ name, message, rating, date, avatarUrl }: FeedbackItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const maxLength = 100

  const truncatedMessage = message.length > maxLength ? `${message.slice(0, maxLength)}...` : message

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle className="font-medium text-lg text-left">{name}</CardTitle>
          <div className="flex space-x-7 items-center">
            <p className="text-sm text-muted-foreground">{date}</p>
            <div className='flex items-center'>
              <div className="text-yellow-400 font-medium text-base">
                {'★'.repeat(rating)}
                {'☆'.repeat(5 - rating)}
              </div>
              <span className="ml-2 font-medium">({rating}/5)</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-wrap text-sm font-normal">
          {isExpanded ? message : truncatedMessage}
        </p>
        {message.length > maxLength && (
          <Button
            variant="link"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 p-0"
          >
            {isExpanded ? "Mostrar menos" : "Mostrar mais"}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

