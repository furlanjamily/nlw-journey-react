import { Link2, Plus } from 'lucide-react'
import { Button } from '../../components/button'

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>
      <div className="space-y-5">
        <div className="flex justify-between items-center gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
            <a href="#" className="block text-xs text-zinc-400 hover:text-zinc-200 truncate">
              https://www.airbnb.com.br/rooms/104700011104700011104700011104700011
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
            <a href="#" className="block text-xs text-zinc-400 hover:text-zinc-200 truncate">
              https://www.airbnb.com.br/rooms/104700011104700011104700011104700011
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>
      <Button variant='secondary' size='full' className="flex w-full h-11 font-medium justify-center items-center bg-zinc-800 text-zinc-200 rounded-lg px-5 hover:bg-zinc-700 gap-2">
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  )
}
