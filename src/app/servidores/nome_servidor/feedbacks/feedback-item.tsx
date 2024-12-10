import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeedbackItemProps {
  name: string
  message: string
  date: string
  avatarUrl?: string
}

export function FeedbackItem({ name, message, date, avatarUrl }: FeedbackItemProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <CardTitle>{name}</CardTitle>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
      </CardHeader>
      <CardContent className="font-normal">
        <p>{message}</p>
      </CardContent>
    </Card>
  )
}

