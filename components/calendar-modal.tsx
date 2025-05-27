"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, User, Mail, MessageSquare, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

interface CalendarModalProps {
  isOpen: boolean
  onClose: () => void
}

interface TimeSlot {
  time: string
  available: boolean
}

interface CalendarEvent {
  id: string
  title: string
  start: string
  end: string
  attendee?: string
}

export default function CalendarModal({ isOpen, onClose }: CalendarModalProps) {
  const { t } = useLanguage()
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([])
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState<"calendar" | "form" | "success">("calendar")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
  const fetchEvents = async () => {
    if (!selectedDate) return

    setLoading(true)

    const selectedDateINST = new Date(selectedDate)

    try {
      const response = await fetch("/api/calendar/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date: selectedDateINST.toISOString().split("T")[0] }),
      })

      const data: TimeSlot[] = await response.json()

      console.log("Fetched events:", data);
      

      if (!response.ok) {
        throw new Error("Error fetching events")
      }

      setAvailableSlots(data)
    } catch (error) {
      console.error("Error fetching calendar events:", error)
    } finally {
      setLoading(false)
    }
  }

  fetchEvents()
}, [selectedDate])

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Días del mes anterior
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i)
      days.push({ date: prevDate, isCurrentMonth: false })
    }

    // Días del mes actual
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(year, month, day)
      days.push({ date: currentDate, isCurrentMonth: true })
    }

    return days
  }

  console.log("este es el de afeura", selectedDate);
  

  const isDateDisabled = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today || date.getDay() === 0 || date.getDay() === 6
  }

  const handleDateSelect = (date: Date) => {
    if (!isDateDisabled(date)) {
      console.log("Selected date:", date);
      setSelectedDate(date)
    }
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setStep("form")
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simular llamada a la API para crear el evento
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      const response = await fetch("/api/calendar/events/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: selectedDate?.toISOString().split("T")[0],
          time: selectedTime,
          description: formData.message,
          requester: formData
        }),
      })
      if (!response.ok) {
        throw new Error("Error scheduling event")
      }
      setStep("success")
    } catch (error) {
      console.error("Error creating event:", error)
    } finally {
      setLoading(false)
    }
  }

  const resetModal = () => {
    setStep("calendar")
    setSelectedDate(null)
    setSelectedTime("")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleClose = () => {
    resetModal()
    onClose()
  }

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]

  const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            {step === "calendar" && "Selecciona una fecha"}
            {step === "form" && "Completa tus datos"}
            {step === "success" && "¡Reunión agendada!"}
          </DialogTitle>
        </DialogHeader>

        {step === "calendar" && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                >
                  ←
                </Button>
                <h3 className="font-semibold">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                >
                  →
                </Button>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {dayNames.map((day) => (
                  <div key={day} className="p-2 font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}
                {getDaysInMonth(currentMonth).map(({ date, isCurrentMonth }, index) => (
                  <button
                    key={index}
                    onClick={() => handleDateSelect(date)}
                    disabled={!isCurrentMonth || isDateDisabled(date)}
                    className={cn(
                      "p-2 text-sm rounded-md transition-colors",
                      !isCurrentMonth && "text-muted-foreground/50",
                      isCurrentMonth && !isDateDisabled(date) && "hover:bg-primary/10",
                      isDateDisabled(date) && "opacity-50 cursor-not-allowed",
                      selectedDate?.toDateString() === date.toDateString() && "bg-primary text-primary-foreground",
                    )}
                  >
                    {date.getDate()}
                  </button>
                ))}
              </div>
            </div>

            {/* Horarios disponibles */}
            <div className="space-y-4">
              {selectedDate ? (
                <>
                  <h4 className="font-medium">Horarios disponibles para {selectedDate.toLocaleDateString()}</h4>
                  <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                    {availableSlots.map((slot, index) => (
                      <Button
                        key={slot.time}
                        variant={slot.available ? "outline" : "ghost"}
                        size="sm"
                        disabled={!slot.available}
                        onClick={() => handleTimeSelect(slot.time)}
                        className={cn("justify-start", !slot.available && "opacity-50 cursor-not-allowed")}
                      >
                        <Clock className="h-4 w-4 mr-2" />
                        {slot?.time || ""}
                      </Button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center text-muted-foreground py-8">
                  Selecciona una fecha para ver los horarios disponibles
                </div>
              )}
            </div>
          </div>
        )}

        {step === "form" && (
          <div className="space-y-6">
            <div className="bg-primary/10 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Resumen de la reunión</h4>
              <p className="text-sm text-muted-foreground">
                📅 {selectedDate?.toLocaleDateString()} a las {selectedTime}
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    <User className="h-4 w-4 inline mr-2" />
                    Nombre completo
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">
                    <Mail className="h-4 w-4 inline mr-2" />
                    Correo electrónico
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">
                  <MessageSquare className="h-4 w-4 inline mr-2" />
                  Mensaje (opcional)
                </Label>
                <Textarea
                  id="message"
                  placeholder="Cuéntame sobre tu proyecto o lo que te gustaría discutir..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <div className="flex gap-4">
                <Button type="button" variant="outline" onClick={() => setStep("calendar")}>
                  Volver
                </Button>
                <Button type="submit" disabled={loading} className="flex-1">
                  {loading ? "Agendando..." : "Agendar reunión"}
                </Button>
              </div>
            </form>
          </div>
        )}

        {step === "success" && (
          <div className="text-center space-y-6 py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            <div>
              <h3 className="text-xl font-semibold mb-2">¡Reunión agendada exitosamente!</h3>
              <p className="text-muted-foreground">
                Te he enviado un correo de confirmación con los detalles de la reunión.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
              <p className="text-sm">
                📅 {selectedDate?.toLocaleDateString()} a las {selectedTime}
                <br />👤 {formData.name}
                <br />📧 {formData.email}
              </p>
            </div>
            <Button onClick={handleClose} className="w-full">
              Cerrar
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
