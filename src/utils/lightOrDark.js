/*
https://gist.github.com/stla/00d8d78c7daa8b774c484e5b6f5758ce
This code was taken from the url above and edited for my own use.
According to this formula, if the color for the background is dark,
the function returns "white" as a string. So I can use it as text color,
vice versa, it returns "black" for light colors.
 */

export default function lightOrDark(color) {
  color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&"))

  const r = color >> 16
  const g = (color >> 8) & 255
  const b = color & 255

  const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))

  if (hsp > 127.5) {
    return "black"
  } else {
    return "white"
  }
}
