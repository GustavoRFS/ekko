import Button from "@/components/Button";
import PlayerAvatar from "@/components/PlayerAvatar";
import PlayerFlag from "@/components/PlayerFlag";
import { Peer } from "peerjs";
import { createSignal, Show } from "solid-js";

let peer: Peer | undefined;
let getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
var local_stream;



export default function Call() {
  const [roomId, setRoomId] = createSignal("");

  const [selectedInput, setSelectedInput] = createSignal<string>()

  return (
    <div class="w-screen h-screen absolute top-[2px] flex flex-row gap-6 justify-center">
      <Show when={true}>
        <PlayerFlag PlayerAvatar={() => <PlayerAvatar img="https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Aatrox.png" type="big" />} name="Aatrox" />
        <PlayerFlag PlayerAvatar={() => <PlayerAvatar img="https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Mel.png" type="big" />} name="Aatrox" />
        <PlayerFlag PlayerAvatar={() => <PlayerAvatar img="https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Nunu.png" type="big" />} name="Aatrox" />
        <PlayerFlag PlayerAvatar={() => <PlayerAvatar img="https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Nautilus.png" type="big" />} name="Aatrox" />
        <PlayerFlag PlayerAvatar={() => <PlayerAvatar img="https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Yunara.png" type="big" />} name="Aatrox" />
      </Show>
      <Show when={false}>
        <div class="w-full h-full flex justify-center items-center">
          <h1>Aguardando partida...</h1>
        </div>
      </Show>
      <Show when={false}>

        <div class="w-full h-full flex flex-col justify-center items-center gap-y-2">
          <h1>O Cliente do League of Legends não está aberto</h1>
          <div class="gap-x-12 flex-row">
            <Button>Localizar LeagueClient.exe</Button>
          </div>
        </div>
      </Show>
    </div>)
}