import { JSX } from "solid-js"
import "./button.css"


export default function Button({ children, ...props }: JSX.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (<button {...props} class={`button ${props.class}`}>
    <div class="uppercase">
      {children}
    </div>
  </button>)
}