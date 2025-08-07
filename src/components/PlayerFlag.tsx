import { JSX } from "solid-js"
import PlayerFlagImage from "@/assets/player-flag.png"

type PlayerFlagProps = {
  name: string
  PlayerAvatar: JSX.FunctionElement
}

export default function PlayerFlag({ name, PlayerAvatar }: PlayerFlagProps) {
  return <div class="relative">
    <img class="h-[440px]" src={PlayerFlagImage} />
    <div class="absolute top-0 w-full h-9/12 flex flex-col justify-between items-center py-24">
      <PlayerAvatar />
    </div>
  </div >

}