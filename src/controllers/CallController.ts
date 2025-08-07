import { createSignal } from "solid-js"

const CallController = () => {
  const [localStream, setLocalStream] = createSignal<MediaStream>()
  const [streams, setStreams] = createSignal<MediaStream[]>()

  const joinOrCreateRoom = (roomId: string) => {

  }


  return { streams, setStreams, localStream, setLocalStream, joinOrCreateRoom }
}

export default CallController