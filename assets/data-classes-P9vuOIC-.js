import{j as e}from"./index-B2qCcbtg.js";import{C as a}from"./Chapter-Bxzgta08.js";import{E as i}from"./Example-C700Bojd.js";function r(s){const n={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...s.components};return e.jsxs(a,{children:[e.jsx(n.h2,{children:"Klassen"}),e.jsx(n.p,{children:`Wir haben Klassen im letzten Kapitel bereits kurz angesprochen. Klassen sind
Baupläne für Objekte. Sie geben uns die Struktur von einem Objekt an. Am besten
betrachten wir uns gleich ein Beispiel.`}),e.jsxs(i,{title:"Beispiel: Person",classes:"example",children:[e.jsx(n.p,{children:`In der Personen-Klasse können wir alle Eigenschaften angeben, die eine Person
haben soll.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`class Person {
  vorname
  zweitname
  nachname
  geburtsdatum
}
`})}),e.jsxs(n.p,{children:["Wenn wir nun neue ",e.jsx(n.em,{children:"Instanzen"}),` von der Klasse erzeugen, sind alle diese
Eigenschaften bereits vorhanden. Eine `,e.jsx(n.em,{children:"Instanz"}),` davon, also ein Objekt, kann
dann so aussehen.`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`{
  "vorname": "Peter",
  "zweitname": "",
  "nachname": "Muster",
  "geburtsdatum": "01.01.2001"
}
`})}),e.jsxs(n.p,{children:[`Sie sehen also dass alle Eigenschaften vorkommen. Die Eigenschaften die das
Objekt nicht hat, sind dann einfach leer. Damit haben alle Objekte von der
Klasse die gleichen Eigenschaften, was beim Programmieren sehr wichtig ist. In
einem Computerspiel möchten Sie zum Beispiel von einem Spielobjekt die
Lebenspunkte wissen. Dafür muss jedes Spielobjekt Lebenspunkte haben, ansonsten
haben Sie gleich einen Fehler. Den Fall das die Lebenspunkte `,e.jsx(n.em,{children:"leer"}),` sind, ist
viel einfacher zu behandeln.`]})]}),e.jsx(n.h3,{children:"Wozu brauchen wir Klassen?"}),e.jsxs(n.p,{children:[`Klassen braucht es eben um die Struktur von Daten zu erklären. Damit können wir
vorab definieren wie die Daten aussehen, und dann die Objekte erstellen lassen.
Dem sagt man `,e.jsx(n.strong,{children:"instanziieren"})," von einer Klasse. Obder eine ",e.jsx(n.strong,{children:"Instanz"}),` von
einer Klasse erstellen. Diese Instanz ist dann unser Objekt.`]}),e.jsxs(n.p,{children:[`Aber wenn wir noch gar keine konkreten Daten haben, und erst einmal nur unser
Schema erstellen, dann machen wir das über Klassen. Damit können wir es uns
sparen solch kreativen Namen wie `,e.jsx(n.code,{children:'"Peter Muster"'}),` zu erstellen, und uns nur auf
das Schema der Daten zu konzentrieren. Das ist eine Technik die beim modellieren
sehr hilfreich ist, denn der Fokus liegt nur auf dem Schema.`]}),e.jsxs(i,{title:"Aufgabe: Eigenes Schema erstellen",classes:"exercise",children:[e.jsx(n.p,{children:`Erstellen Sie ein Schema für ein bis zwei Tiere. Welche Eigenschaften haben
diese Tiere gemeinsam? Welche Eigenschaften teilen die Tiere nicht?`}),e.jsx(n.p,{children:`Wie Sie alle Eigenschaften teilen, dann suchen Sie ein weiteres Tier, dass eine
Eigenschaft hat, die es nicht mit den anderen teilt.`})]}),e.jsx(n.h3,{children:"Vererbung"}),e.jsxs(n.p,{children:[`Im Beispiel oben haben Sie gesehen dass gewisse Eigenschaften für einige Klassen
gemeinsam sind. Das sind die Eigenschaften die meistens die Klasse sogar
ausmachen. Wenn wir solche Eigenschaften haben, dann können wir eine weitere
Klasse bilden, von der die anderen Klassen `,e.jsx(n.strong,{children:"erben"}),` können. Das heisst es
werden alle Eigenschaften übernommen.`]}),e.jsxs(i,{title:"Beispiel: Haustiere mit Vererbung",classes:"example",children:[e.jsxs(n.p,{children:[`Wenn Sie über Haustiere nachdenken, dann haben die unterschiedlichen Arten doch
einige Eigenschaften gemeinsam. Zum Beispiel haben alle Haustiere einen Namen
und sicher auch ein Alter. Diese Eigenschaften können wir in eine Basisklasse
`,e.jsx(n.code,{children:"Haustiere"})," nehmen. Diese Basisklasse kann dann erweitert werden."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`class Haustier {
    name,
    art,
    alter
}

class Fisch extends Haustier {
    salzwasser,
    flossenAnzahl
}

class Hund extends Haustier {
    rasse,
    züchter
}
`})}),e.jsx(n.p,{children:`Durch das erweitern der Basisklasse, werden alle Eigenschaften die auf der
Basisklasse sind, an die Kinderklassen weitergegeben. Die Kinder erweitern die
Basisklassen also mit deren eigenen Eigenschaften.`})]}),e.jsx(n.p,{children:`Vererbung ist in der Programmierung praktisch, weil man dadurch den Code in
kleinere Teile zerlegen kann. Dadurch behält man eine bessere Übersicht über
den gesamten Programmablauf. Außerdem muss der Code nicht dupliziert werden, da
bereits vorhandene Funktionen und Eigenschaften von einer übergeordneten Klasse
geerbt werden können. Durch Vererbung kann die Struktur aus der realen Welt
auch im Code widergespiegelt werden, was die Entwicklung und Wartung von
Software erleichtert.`}),e.jsx(i,{title:"Aufgabe: Vererbung im Computerspiel",classes:"exersice",children:e.jsx(n.p,{children:`Denken Sie sich ein Computerspiel mit unterschiedlichen Gegnern aus. Stellen
Sie diese Klassen mit Hilfe der Vererbung dar. Was ist dabei schwer?`})}),e.jsx(n.p,{children:`Vererbung ist ein nützliches und leistungsstarkes Konzept, um Daten zu
strukturieren. Allerdings kann es auch schnell kompliziert werden. Deshalb ist
es ratsam, die Vererbungshierarchie möglichst einfach zu gestalten.`})]})}function h(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{h as default};
