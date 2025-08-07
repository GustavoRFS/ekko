import StreamController from "@/controllers/StreamController"
import "./player-avatar.css"
import { createSignal, Show } from "solid-js"

type PlayerAvatarProps = {
  img?: string
  type: "small" | "big"
  isTalking?: boolean
  stream?: MediaStream //TODO: remove optional
}
// class={`rounded-full border-2  ${imgSizeClasses}`}
export default function PlayerAvatar({ img, type, isTalking, stream }: PlayerAvatarProps) {
  const styles = {
    big: {
      img: { class: "w-[99px] h-[99px] object-cover", style: "object-position: -4px -4px" },
      container: { class: `w-24 h-24 overflow-hidden border-3`, style: "" },
      role: { class: "w-9 h-9 ", style: "" }
    },
    small: {
      img: { class: "w-[54px] h-[54px] object-cover", style: "object-position: -3px -3px" },
      container: { class: `w-13 h-13 overflow-hidden border-2 border-gray-900`, style: "" },
      role: { class: "w-6 h-6 ", style: "" }

    }
  } as const


  let { audioRef } = StreamController(stream)

  const [isHovering, setIsHovering] = createSignal(false)

  return (<div class="relative">
    <div onMouseEnter={() => {
      setIsHovering(true)
    }}
      onMouseLeave={() => {
        setIsHovering(false)
      }}
      class={`rounded-full ${styles[type].container.class} ${isTalking ? "is-talking" : ""}`} style={styles[type].container.style}>
      <img src={img} class={`${styles[type].img.class}`} style={styles[type].img.style} />
      <Show when={isHovering()}>
        <div class={`absolute bg-[#000a] w-full h-full rounded-full top-0 left-0 cursor-pointer`}>

        </div>
      </Show>
    </div>
    {/* <img src="https://ih1.redbubble.net/image.2354279571.5595/raf,360x360,075,t,fafafa:ca443f4786.jpg" class={`absolute rounded-full -bottom-1 -right-1 ${styles[type].role.class}`} /> */}
    <audio ref={audioRef} class="hidden" />
  </div>
  )
}