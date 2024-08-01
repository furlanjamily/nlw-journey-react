import { X, AtSign, Plus } from 'lucide-react'
import { FormEvent } from 'react'
import { Button } from '../../components/button'

interface InviteGuestsModalProps {
  closeGuestsModal: () => void
  emailsToInvite: string[]
  addNewEmailToInvite: (e: FormEvent<HTMLFormElement>) => void
  removeEmailFromInvites: (email: string) => void
}

export function InviteGuestModal({
  closeGuestsModal,
  emailsToInvite,
  addNewEmailToInvite,
  removeEmailFromInvites
}: InviteGuestsModalProps) {
  return (
    <div className="flex justify-center items-center fixed inset-0 bg-black/60 ">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex = items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <button onClick={closeGuestsModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-zinc-400 text-sm">Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map(email => {
            return (
              <div key={email} className="flex items-center py-1.5 px-2.5 rounded-md bg-zinc-800 gap-2">
                <span className="text-zinc-300">{email}</span>
                <button onClick={() => removeEmailFromInvites(email)} type="button">
                  <X className="size-4 text-zinc-400" />
                </button>
              </div>
            )
          })}
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <form onSubmit={addNewEmailToInvite} className="flex items-center p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg gap-2">
          <div className="flex flex-1 items-center px-2 gap-2">
            <AtSign className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              placeholder="Digite o e-mail do convidado?"
              className="flex-1 bg-transparent text-lg placeholder-zinc-400 outline-none"
            />
          </div>
          <Button variant='primary' size='default' type="submit" className="flex font-medium items-center bg-lime-300 text-lime-950 rounded-lg px-5 py-2 hover:bg-lime-400">
            Convidar
            <Plus className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  )
}
