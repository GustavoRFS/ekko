import { JSX } from "solid-js"
import "./styles.css"

type TitleBarButtonProps = {
  img: string
  onClick?: JSX.EventHandlerUnion<HTMLImageElement, MouseEvent, JSX.EventHandler<HTMLImageElement, MouseEvent>>
  className?: string
}

export default function TitleBarButton({ img, onClick, className = "" }: TitleBarButtonProps) {
  return (<img class={`h-4 px-2 object-cover cursor-pointer title-bar-button ${className}`} src={img} onClick={onClick} />)
}