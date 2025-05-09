import React, { useState, useEffect } from "react"
import SVGImg from "./SVGImg"

export default function LazySVG({
  src,
  alt = "",
  svgClassName = "",
  containerClassName = "",
  containerStyle = {},
  svgStyle = { width: "100%" },
}) {
  const [svgContent, setSvgContent] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true
    fetch(src)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load SVG: ${response.statusText}`)
        }
        return response.text()
      })
      .then((text) => {
        if (isMounted) {
          setSvgContent(text)
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message)
        }
      })
    return () => {
      isMounted = false
    }
  }, [src])

  if (error) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={containerClassName}
        style={containerStyle}>
        Error loading SVG
      </div>
    )
  }

  if (!svgContent) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={containerClassName}
        style={containerStyle}>
        Loading...
      </div>
    )
  }

  // Inject className and style into the SVG element for styling and hover effects
  // We do this by adding a wrapper div with the containerClassName and containerStyle,
  // and passing svgStyle and svgClassName to SVGImg which applies them to the container div.
  // To style the SVG elements inside, users can target the svgClassName CSS class.

  return (
    <SVGImg
      svgContent={svgContent}
      alt={alt}
      containerStyle={containerStyle}
      svgStyle={svgStyle}
      containerClassName={containerClassName}
      className={svgClassName}
    />
  )
}
