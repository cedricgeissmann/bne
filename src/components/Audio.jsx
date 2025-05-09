import React from "react"

export default function AudioPlayer({ style, src }) {
  return (
    <div style={{ ...style }}>
      <audio controls>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}
