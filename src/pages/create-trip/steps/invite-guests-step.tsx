import { UserRoundPlus, ArrowRight } from 'lucide-react'
import { Button } from '../../../components/button'

interface InviteGuestsStepProps {
  openGuestsModal: () => void
  emailsToInvite: string[]
  openConfirmTripModal: () => void
}

export function InviteGuestsStep({
  emailsToInvite,
  openConfirmTripModal,
  openGuestsModal
}: InviteGuestsStepProps) {
  return (
    <div className="flex h-16 items-center bg-zinc-900 px-4 rounded-xl shadow-shape gap-3">
      <button type="button" onClick={openGuestsModal} className="flex flex-1 items-center gap-2">
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-100 text-lg flex-1 text-left">
            {emailsToInvite.length} pessoa(s) convidado(s)
          </span>
        ) : (
          <span className="text-zinc-400 text-lg flex-1 text-left">Quem estará na viagem?</span>
        )}
      </button>

      <div className="w-px h-6 bg-zinc-800" />

      <Button size='default' onClick={openConfirmTripModal} className="flex font-medium items-center bg-lime-300 text-lime-950 rounded-lg px-5 py-2 hover:bg-lime-400">
        Confirmar viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  )
}
