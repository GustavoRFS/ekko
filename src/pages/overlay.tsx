import { Button } from "@/components/ui/button";
import { createEffect } from "solid-js";

export default function Overlay() {

  createEffect(() => {
    document.querySelector("body")?.style.setProperty("background-color", "#0000")
  })

  return (<div class="w-screen h-screen bg-[#f001]">
    <h1>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</h1>

    <Button on:click={() => {

    }} />
  </div>)
}