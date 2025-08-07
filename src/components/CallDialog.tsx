import PlayerAvatar from "@/components/PlayerAvatar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TextField, TextFieldRoot } from "@/components/ui/textfield";
import { Peer } from "peerjs";
import { createSignal } from "solid-js";

let peer: Peer | undefined;
let getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
var local_stream;



export default function CallDialog() {
  const [roomId, setRoomId] = createSignal("");

  const [selectedInput, setSelectedInput] = createSignal<string>()

  return (
    <div class="w-screen absolute bottom-0 bg-background border-t-border border-t-2 h-30 z-0">
      <div class="absolute w-full flex justify-center top-[-50px]">
        <PlayerAvatar img="https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Nunu.png" type="big" isTalking isSelf />
      </div>
      <div class="w-full flex flex-row justify-center absolute bottom-3 gap-2">
        <PlayerAvatar img="https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Aatrox.png" type="small" />
        <PlayerAvatar img="https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Mel.png" type="small" isTalking />
        <PlayerAvatar img="https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Nautilus.png" type="small" />
        <PlayerAvatar img="https://ddragon.leagueoflegends.com/cdn/15.15.1/img/champion/Yunara.png" type="small" />
      </div>
      {/* <TextFieldRoot class="w-full">
        <TextField value={roomId()} on:input={(e) => setRoomId(e.target.value)} type="text" placeholder="Room Code" />
      </TextFieldRoot>

      <p>{roomId()}</p>

      <Button on:click={() => { */
        // if (!roomId()) {
        //   return
        // }

        // peer = new Peer(roomId())

        // peer.on("open", (id) => {
        //   console.log("Peer Room ID: ", id)
        //   getUserMedia({
        //     video: false, audio: true
        //   }, (stream) => {
        //     console.log(stream);
        //     local_stream = stream;
        //     setLocalStream(local_stream)
        //   }, (err) => {
        //     console.log(err)
        //   })
        //   alert("Waiting for peer to join.")
        // })
        // }} type="button">Subscribe</Button>
        /* 
      <Select
        class="w-96"
        onChange={setSelectedInput}
        placeholder="Select an input device"
        value={selectedInput()}
        // options={inputDevices().map((device) => device.label)}
        itemComponent={props => <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>}
      >
        <SelectTrigger >
          <SelectValue<string> >{state => state.selectedOption()}</SelectValue>
        </SelectTrigger>
        <SelectContent class="h-48 overflow-y-scroll" />
      </Select> */}
    </div>)
}