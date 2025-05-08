import{j as e}from"./index-B2qCcbtg.js";import{C as i}from"./Chapter-Bxzgta08.js";function s(r){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...r.components};return e.jsxs(i,{children:[e.jsx(n.h2,{children:"Deklarativer Code"}),e.jsxs("section",{children:[e.jsx(n.p,{children:`Wenn wir von deklarativem Code sprechen, dann soll das immer Code sein, der sich
möglichst selbst erklärt. Teilweise kann das ganz einfach mit Variablen gemacht
werden, teilweise braucht es aber auch Kommentare, denn einige Codes sind nicht
so gut lesbar wie andere.`}),e.jsxs(n.p,{children:["Bei deklarativem Code gibt es eine sehr einfache Regel: ",e.jsx(n.strong,{children:`Jede Zeile
dokumentiert sich selber, oder hat einen Kommentar`}),`. Mit dieser einfachen
Regel, kommen wir bereits sehr weit. Am Anfang ist es für Sie aber noch so, dass
einzelne Stücke Code schwer zu lesen sind, die werden dann mit der Zeit aber
klarer. Solche Stücke müssen Sie mit der Zeit nicht mehr kommentieren. Ein
Beispiel dafür ist der Code den Sie in den Aufgaben sehr oft sehen.`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`export function aufgabe01(args) {
  const input = args // Speichert args unter dem Namen input
  const result = [] // Leere Liste für das Resultat

  for (let i = 0; i < input.length; i++) {
    // Zählt über den Text in input

    const currentLetter = input[i] // Speichert das aktuelle Zeichen aus input in der Variable currentLetter

    const currentUpperCaseLetter = currentLetter.toUpperCase()

    result.push(currentUpperCaseLetter) // Hängt die Grossbuchstabenversion am Ende von Resultat an
  }

  return result.join("") // Macht aus der Liste einen Text (technisches Detail)
}
`})}),e.jsx(n.p,{children:`Hier Ist alles was normalerweise in diesen Aufgaben drin ist, mit Kommentaren
erklärt, da es bei dem Code noch nicht klar ist, was hier passiert. Je öfter Sie
den Code aber verwenden, desto mehr verstehen Sie hoffentlich was da gemacht
wird, dann können Sie die Kommentare aus weglassen, denn für Programmierende mit
mehr Erfahrung, ist dieser Code bereits sehr deklarativ.`}),e.jsxs(n.p,{children:[`Die einzige Zeile die hier nicht kommentiert ist, ist eine neue Zeile. Da steht
die Erklährung aber im Variablenname `,e.jsx(n.code,{children:"currentUpperCaseLetter"}),`. Wie genau wir den
Wert dafür erhalten, interessiert uns nicht so sehr, das würden wir uns erst
anschauen, wenn es einen Fehler im Code gibt. Sie müssen den Code aber selber
schreiben, haben sich aber diesen Schritt gerade sehr viel einfacher gemacht.
Denn Sie beschreiben bereits was Sie machen möchten, von da an ist es nur noch
eine einfache Suche im Skript, oder im Internet.`]})]}),e.jsx(n.h2,{children:"Praktische Funktionen"}),e.jsxs("section",{children:[e.jsx(n.p,{children:`Javascript hat einige praktische Funktionen bereits eingebaut. Hier gibt es ein
paar Beispiele dazu, die können Sie vielleicht in den Übungen verwenden.`}),e.jsx(n.h3,{children:"Zu einem Grossbuchstaben umwandeln"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const letter = "a"
const upperCaseLetter = letter.toUpperCase()
`})}),e.jsx(n.h3,{children:"Zu einem Kleinbuchstaben umwandeln"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const letter = "C"
const lowerCaseLetter = letter.toLowerCase()
`})}),e.jsx(n.h3,{children:"Länge einer Liste bestimmen"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const list = [1, 2, 3, 6, 4, 5]
const len = list.length
`})}),e.jsx(n.h3,{children:"In eine Ganzzahl umwandeln"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const str = "10"
const num = parseInt(str)
`})}),e.jsx(n.h3,{children:"In eine Kommazahl umwandeln"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const str "17.9"
const float = parseFloat(str)
`})}),e.jsx(n.h3,{children:"ASCII-Code von einem Buchstaben bestimmen"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const letter = "A"
const ascii = letter.charCodeAt(0)
`})}),e.jsx(n.h3,{children:"ASCII-Code in einen Buchstaben umwandeln"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const code = 65
const letter = String.fromCharCode(code)
`})}),e.jsx(n.h3,{children:"Länge einer Liste ist gerade"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const list = [1, 2, 3, 4, 5]
if (list.length % 2 == 0) {
  // ist gerade
} else {
  // ist ungerade
}
`})})]})]})}function c(r={}){const{wrapper:n}=r.components||{};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{c as default};
