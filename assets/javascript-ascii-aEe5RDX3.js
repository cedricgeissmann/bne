import{j as e}from"./index-B2qCcbtg.js";import{E as t}from"./Example-C700Bojd.js";import{C as r}from"./Chapter-Bxzgta08.js";function s(i){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i.components};return e.jsxs(r,{children:[e.jsx(n.h2,{children:"ASCII-Codes in Javascript"}),e.jsx(n.p,{children:`Der ASCII-Code ist ein Code der jedem Zeichen eine Zahl zuweist. Das braucht der
Cumputer da er wissen muss welches Zeichen er darstellen soll, denn der Computer
kann selber nur mit Zahlen umgehen.`}),e.jsx(n.p,{children:`In dieser Tabelle ist festgehalten welche Zahl im ASCII-Code welchem Zeichen
entspricht:`}),e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:"https://www.asciitable.com/asciifull.gif",alt:"ascii-table",style:{width:"min(100%, 860px)"}})}),e.jsx(n.p,{children:`In dieser Tabelle können wir zum Beispiel ablesen dass alle Buchstaben am Stück
vorkommen. Es ist also einfach zu prüfen ob es sich um einen Kleinbuchstaben
handelt.`}),e.jsxs(t,{title:"Beispiel: Kleinbuchstaben erkennen",children:[e.jsx(n.p,{children:`Wenn wir einen Kleinbuchstaben erkennen möchten, können wir einfach
überprüfen ob dessen ASCII-Wert in einem bestimmten Bereich liegt.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const singleCharacter = "d"
const ascii = singleCharacter.charCodeAt(0)
if (97 <= ascii && ascii <= 122) {
  console.log("Es ist ein Kleinbuchstabe.")
} else {
  console.log("Es ist sicher kein Kleinbuchstabe.")
}
`})}),e.jsx(n.p,{children:`Wir könnten nun noch weitere Fälle einbauen, um komplexere Überprüfungen zu
erstellen.`})]}),e.jsx(n.h3,{children:"Sortieren mit dem ASCII-Code"}),e.jsx(n.p,{children:`Wenn Sie die Tabelle genau anschauen, dann sehen Sie das die Buchstaben im
ASCII-Code bereits schön sortiert sind. Das macht es sehr praktisch wenn wir
einen vergleichsbasierten Sortieralgorithmus schreiben möchten.`}),e.jsxs(t,{title:"Beispiel: Text sortieren",children:[e.jsx(n.p,{children:`Wenn wir einen einfachen Text sortieren möchten, können wir das mithilfe
vom ASCII-Code machen, dann sind auch direkt die Klein- und
Grossbuchstaben sortiert.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const text = "Bitte sortiere mich!"
const list = text.split("") // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
for (let i = 0; i < list.length - 1; i++) {
  const currentElement = list[i]
  const nextElement = list[i + 1]
  if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
    // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
    const tmp = list[i + 1]
    list[i + 1] = list[i]
    list[i] = tmp
    i = -1 // starte von vorne wenn etwas vertauscht wurde.
  }
}
const result = list.join("")
console.log(result)
`})}),e.jsxs(n.p,{children:["Am Ende ist ",e.jsx(n.code,{children:"result"})," der sortierte Text."]})]})]})}function h(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{h as default};
