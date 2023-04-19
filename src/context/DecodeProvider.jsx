import { useState } from "react"
import DecodeContext from "./DecodeContext";

export default function DecodeProvider({ children }) {
  const [encodeText, setEncodeText] = useState('');
  const [decodeText, setDecodeText] = useState('');

  const context = {
    encodeText,
    setEncodeText,
    decodeText,
    setDecodeText
  }

  return (
    <DecodeContext.Provider value={context}>
      { children }
    </DecodeContext.Provider>
  )
}