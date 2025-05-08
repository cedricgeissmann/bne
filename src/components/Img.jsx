export default function Img({
  src,
  alt,
  imgStyle = { width: "100%" },
  containerStyle = {},
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...containerStyle,
      }}>
      <img style={{ ...imgStyle }} src={src} alt={alt} />
    </div>
  )
}
