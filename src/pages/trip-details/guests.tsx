import { CircleCheck, CircleDashed, UserCog } from 'lucide-react'
import { Button } from '../../components/button'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface Participants {
  id: string
  name: string | null
  email: string
  is_confirmed: boolean
}

export function Guests() {
  const { tripId } = useParams()
  const [participants, setParticipants] = useState<Participants[]>([])

  useEffect(() => {
    api.get(`/trips/${tripId}/participants`).then(response => setParticipants(response.data.participants))
  }, [tripId])

  return (
    <div>
      <div className="space-y-6">
        <h2 className="font-semibold text-xl">Convidados</h2>
        <div className="space-y-5">
          {participants.map((participant, index) => {
            return (
              <div key={participant.id} className="flex justify-between items-center gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">{participant.name ?? `Convidado ${index}`}</span>
                  <span className="block text-xs text-zinc-400 truncate">
                    {participant.email}
                  </span>
                </div>
                {participant.is_confirmed ? (
                  <CircleCheck className="text-green-400 size-5 shrink-0" />
                ) : (
                  <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                )}
              </div>
            )
          })}
        </div>
        <Button variant='secondary' size='full' className="flex w-full h-11 font-medium justify-center items-center bg-zinc-800 text-zinc-200 rounded-lg px-5 hover:bg-zinc-700 gap-2">
          <UserCog className="size-5" />
          Gerenciar convidados
        </Button>
      </div>
    </div>
  )
}
