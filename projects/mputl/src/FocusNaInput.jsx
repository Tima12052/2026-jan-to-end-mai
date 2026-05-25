import { useRef } from "react"
export default function FocusNaInput() {
    const input = useRef(null)
    function handleFocus () {
        input.current.focus()
    }
  return (
    <div>
      <input ref={input} type="text" />
      <button onClick={handleFocus} type="button">FOCUS</button>
    </div>
  );
}
