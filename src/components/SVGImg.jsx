import React from "react"

export default function SVGImg({
  svgContent,
  alt = "",
  svgStyle = { width: "100%" },
  containerStyle = {},
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...containerStyle,
        ...svgStyle,
      }}
      aria-label={alt}
      role="img"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  )
}
