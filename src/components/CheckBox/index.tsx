
type CheckBoxProps = {
  title: string
}
export default function CheckBox({ title }: CheckBoxProps) {
  return (<div class="flex-row text-border"><input type="checkbox" /> {title}</div>)
}