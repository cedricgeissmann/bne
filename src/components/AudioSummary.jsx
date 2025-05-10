import React from "react"
import AudioPlayer from "./Audio"

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "2rem",
  marginBottom: "2rem",
  padding: "1rem",
}

const infoBoxStyle = {
  maxWidth: "600px",
  backgroundColor: "#555",
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "1rem",
  marginTop: "1rem",
  fontSize: "0.9rem",
  color: "#eee",
  textAlign: "center",
  fontFamily: "Arial, sans-serif",
}

export default function AudioSummary({ id, src }) {
  return (
    <div id={id} style={containerStyle}>
      <div style={infoBoxStyle}>
        Dies ist eine Zusammenfassung des Artikels, erstellt von einer KI. Die
        Korrektheit der Inhalte kann nicht garantiert werden.
        <AudioPlayer style={{ marginTop: "2rem" }} src={src} />
      </div>
    </div>
  )
}
