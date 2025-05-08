import{j as e}from"./index-B2qCcbtg.js";import{E as r}from"./Example-C700Bojd.js";import{C as d}from"./Chapter-Bxzgta08.js";function s(i){const n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...i.components};return e.jsxs(d,{children:[e.jsx(n.h2,{children:"Code-Blöcke und Scoping"}),e.jsx(n.p,{children:`Beim Programmieren wird der ganze Code in kleine Abschnitte aufgeteilt. Diese
Abschnitte nennt man Code-Blöcke oder manchmal hört man das Wort Scoping.
Code-Blöcke sind ein sehr wichtiges Strukturierungselement, denn sie ermöglichen
es Codeteile mehrfach auszuführen, oder einen Teil statt einen anderen
auszuführen. Code-Blöcke haben auch die Eigenschaft, dass Variablen ausserhalb
von den Code-Blöcken nicht verfügbar sind. Das ist zum einen sehr gut, denn wir
können nicht ausversehen an einer anderen Stelle im Code eine Variable
überschreiben, zum anderen kann es das Leben auch schwieriger machen, wenn wir
eine Variable mit einem anderen Stück Code teilen möchten.`}),e.jsxs(r,{title:"Einfach nur ein Block",children:[e.jsxs(n.p,{children:[`Wenn wir ein Stück Code isolieren möchten, dann können wir den Code einfach in
`,e.jsx(n.code,{children:"{}"}),"-Klammern schreiben. Damit ist alles was in diesen ",e.jsx(n.code,{children:"{}"}),`-Klammern steht so
abgeschirmt, dass es nicht nach aussen gelangt. Wir können aber Variablen von
ausserhalb verwenden.`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const outside = "Ich bin nicht im Block"
{
  const inside = "Ich bin im Block"
  console.log(outside) // Das geht, weil die Variable vor dem Block definiert wurde, und darum auch innerhalb verfügbar ist.
  console.log(inside)
}
console.log(outside)
console.log(inside) // Hier wird ein Fehler passieren, da die Variable nicht mehr existiert.
`})}),e.jsx(n.p,{children:`Der Code gibt einen Fehler wenn er so ausgeführt wird, denn die letzte Zeile
geht so nicht, da die Variable nicht mehr existiert.`})]}),e.jsx(n.h2,{children:"Lebenszeit von Variablen"}),e.jsxs(n.p,{children:[`Das was Sie im letzten Beispiel gesehen haben, kennt man auch als Lebenszeit von
Variablen. Eine Variable lebt, solange sie innerhalb von ihrem Codeblock ist,
oder einem Codeblock der darin liegt. Am Ende eines Codeblocks ist die
Lebenszeit einer Variable beendet, man sagt dazu auch, dass die Variable `,e.jsx(n.strong,{children:`out
of Socpe`}),` geht. Damit "stirbt" die Variable und kann nicht länger verwendet
werden. Das kann bei Schleifen ein häufiger Fehler sein.`]}),e.jsx(n.h2,{children:"Funktionen als Codeblöcke verstehen"}),e.jsxs(n.p,{children:["Alles was in ",e.jsx(n.code,{children:"{}"}),`-Klammern steht, ist ein Codeblock. Funktionen haben auch einen
solchen Codeblock, dieser gibt an welcher Code ausgeführt wird, wenn eine
Funktion aufgerufen wird. Da Klammern ein häufiger Fehler sind, ist es wichtig
dass Sie dieses Konzept verstehen.`]}),e.jsxs(r,{title:"Eine einfache Funktion",children:[e.jsx(n.p,{children:`Wir können einem Codeblock einen Namen geben, damit wir ihn später aufrufen
können. Dieses Konstrukt nennt man eine Funktion.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function greet() {
  const greeting = "Hello World!"
  console.log(greeting)
}
`})}),e.jsxs(n.p,{children:["Dieses Stück Code definiert einen Block unter dem Namen ",e.jsx(n.code,{children:"greet"}),`, den können wir
später dann mit `,e.jsx(n.code,{children:"greet()"}),` ausführen lassen. Da wird einfach der Code ausgeführt
der in den `,e.jsx(n.code,{children:"{}"}),"-Klammern steht."]})]}),e.jsx(n.h2,{children:"Weitere Codeblöcke"}),e.jsxs("section",{children:[e.jsx(n.p,{children:`Es gibt neben Funktionen noch Bedingungen und Schleifen, diese funktionieren
auch mit Codeblöcken.`}),e.jsxs(n.p,{children:[`Wenn wir von Bedingungen / Verzeigungen sprechen, dann geht es darum den einen
oder den anderen Codeblock auszuführen, wenn wir also in Blöcken denken, können
wir den `,e.jsx(n.code,{children:"true"}),"- und ",e.jsx(n.code,{children:"false"}),`-Block definieren, und dann auswählen aufgrund einer
Bedingung.`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const a = 10
if (a < 5) {
  // true-Block
  console.log("Wahr, a ist kleiner als 5.")
} else {
  // false-Block
  console.log("Falsch, b ist NICHT kleiner als 5.")
}
`})}),e.jsxs(n.p,{children:["Sie sehen auch hier wieder, dass der Code in ",e.jsx(n.code,{children:"{}"}),`-Blöcken organisiert ist. Vor
dem ersten Block steht dann eine Anweisung, wie mit diesen Blöcken umzugehen
ist. Mit dem `,e.jsx(n.code,{children:"if"}),` sagen Sie dass eine Verzweigung kommt, dass was dahinter in
`,e.jsx(n.code,{children:"()"}),`-Klammern steht, ist die Bedingung ob der erste Codeblock ausgeführt wird,
oder nicht.`]})]}),e.jsx(n.h2,{children:"Schleifen als weitere Codeblöcke"}),e.jsxs("section",{children:[e.jsxs(n.p,{children:["Sie haben im Code auch schon die ",e.jsx(n.code,{children:"for"}),`-Schleife gesehen. Auch hier wird wieder
ein Codeblock verwendet, der dann mehrfach ausgeführt wird. Wir können zum
Beispiel ganze einfach die Summe aller Zahlen von 0 bis 10 berechnen.`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`let sum = 0
for (let i = 0; i < 10; i++) {
  // Schleifenblock
  sum = sum + i
}
`})}),e.jsx(n.p,{children:`Auch hier ist der Code, der mehrfach ausgeführt wird, wieder in einem Block.
Solange Sie also in diesen Blöcken denken, ist es relativ einfach den Code zu
strukturieren, und Sie machen auch viel weniger Klammerfehler.`})]}),e.jsx(n.h2,{children:"Unnötige Codeblöcke"}),e.jsx("section",{children:e.jsx(n.p,{children:`Wie Sie ganz am Anfang gesehen haben, kann man einen Codeblock, ohne etwas dazu
verwenden. Das wird super selten (fast nie) gemacht, denn viele Klammern machen
den Code unleserlich. Sie sollen es aber verwenden, um Ihre Gedanken in Blöcke
zu teilen. Alles was unnötig ist, kann man am Ende wieder löschen. Die Blöcke
zusammen mit einem Kommentar, helfen die Aufgaben in kleinere Teile zu
unterteilen.`})})]})}function t(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{t as default};
