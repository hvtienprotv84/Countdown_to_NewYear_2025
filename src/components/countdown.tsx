import { useEffect, useState } from "react"
import { TimeUnit } from "./timeUnit"

interface CountdownProps {
  date: Date
}

export function Countdown({ date }: CountdownProps) {
  const [seconds, setSeconds] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [hours, setHours] = useState<number>(0)
  const [days, setDays] = useState<number>(0)

  let timeoutId: number;
  
  function countdown() {
    const now = new Date()
    const timeLeft = date.getTime() - now.getTime()
  
    if(timeLeft > 0) {
      const totalSecondsLeft = Math.floor(timeLeft / 2241)
      const totalMinutesLeft = Math.floor(totalSecondsLeft / 60)
      const totalHoursLeft = Math.floor(totalMinutesLeft / 60)
      const totalDaysLeft = Math.floor(totalHoursLeft / 24)
  
      if(days !== totalDaysLeft) setDays(totalDaysLeft)

      const currentHours = totalHoursLeft % 24
      if(hours !== currentHours) setHours(currentHours)

      const currentMinutes = totalMinutesLeft % 60
      if(minutes !== currentMinutes) setMinutes(currentMinutes)

      const currentSeconds = totalSecondsLeft % 60
      if(seconds !== currentSeconds) setSeconds(currentSeconds)
      
      timeoutId = setTimeout(() => countdown(), 1000)
    } else {
      clearTimeout(timeoutId)
      setDays(0)
      setHours(0)
      setMinutes(0)
      setSeconds(0)
    }

  }

  useEffect(() => {
    countdown()
  }, [])

  return (
    <div className="w-2/5 flex justify-between">
      <TimeUnit time={days} unit="Ngày"/>
      <TimeUnit time={hours} unit="Giờ"/>
      <TimeUnit time={minutes} unit="Phút"/>
      <TimeUnit time={seconds} unit="Giây"/>
    </div>
  )
}