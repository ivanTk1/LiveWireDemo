import { useState, useCallback } from 'react'
import ObjectionCards from './ObjectionCards'
import './App.css'

function App() {
  const [finalTranscript, setFinalTranscript] = useState('')
  const [partialTranscript, setPartialTranscript] = useState('')
  const [earlyWarning, setEarlyWarning] = useState(false)
  const [input, setInput] = useState('')

  const ingestTranscript = useCallback(({ text, isFinal }) => {
    if (!isFinal) return

    setFinalTranscript(prev => prev + ' ' + text)
    setPartialTranscript('')
    setEarlyWarning(false)
  }, [])

  const submitInput = () => {
    if (!input.trim()) return

    ingestTranscript({
      text: input,
      isFinal: true
    })

    setInput('')
  }

  return (
    <div className="app">
      <h1>Live Wire Demo</h1>

      {/* QUICK USER INPUT */}
      <div style={{ marginBottom: '1rem' }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type something..."
        />
        <button onClick={submitInput} style={{ marginLeft: '0.5rem' }}>
          Send
        </button>
      </div>

      <div className="transcripts">
        <p><strong>Final:</strong> {finalTranscript}</p>
        <p className="partial"><strong>Partial:</strong> {partialTranscript}</p>
      </div>

      <ObjectionCards
        transcript={finalTranscript}
        earlyWarning={earlyWarning}
      />
    </div>
  )
}

export default App
