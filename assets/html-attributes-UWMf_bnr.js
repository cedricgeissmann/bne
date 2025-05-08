import{j as e}from"./index-B2qCcbtg.js";import{C as r}from"./Chapter-Bxzgta08.js";import{E as s}from"./Example-C700Bojd.js";function t(i){const n={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...i.components};return e.jsxs(r,{children:[e.jsx(n.h2,{children:"HTML Attribute"}),e.jsx(n.p,{children:`Einige HTML Elemente sind speziell und brauchen zusätzliche Informationen. Diese
Zusatzinformationen nennt man Attribute.`}),e.jsxs(s,{title:"Beispiel: Links",children:[e.jsx(n.p,{children:`Ein Link (oder auch Anchor-Tag) ist ein Element das zusätzliche Informationen
braucht. Das Element selbst bekommt den Text, der auf der Webseite angezeigt
wird, zusätzlich muss man dem Tag aber noch sagen auf welche Webseite verlinkt
werden soll.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<a href="https://www.gym-muttenz.ch">Gym Muttenz</a>
`})}),e.jsxs(n.p,{children:["in diesem Fall ist das ",e.jsx(n.code,{children:"href="}),` das Attribut, und sagt auf welche Webseite
verlinkt wird.`]})]}),e.jsx(n.h3,{children:"Weitere Elemente mit Attributen"}),e.jsx(n.p,{children:`Auch Bilder brauchen ein Attribut welches sagt wo sich das Bild befindet. Hier
können auch weitere Attribute wie die Höhe oder Breite des Bildes angegeben
werden.`}),e.jsx(s,{title:"Aufgabe: Bilder hinzufügen",children:e.jsxs(n.p,{children:[e.jsx("a",{href:"https://www.w3schools.com/html/html_images.asp",children:"Hier"}),` finden Sie
alles was Sie über Bilder wissen müssen. Testen Sie es aus, indem Sie Bilder
von verschiedener Grösse in Ihre Webseite einfügen.`]})}),e.jsx(n.h3,{children:"IDs"}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"IDs"}),` sind praktische Attribute die Sie an jedes Element zuweisen können.
Wichtig dabei ist das IDs beschreibend für das Element sind, und eindeutig auf
der Webseite vergeben sind.`]}),e.jsxs(s,{title:"Beispiel: Abschnitt mit einer ID",children:[e.jsxs(n.p,{children:["Sie können einem Abschnitt eine ",e.jsx(n.strong,{children:"ID"}),` zuweisen, damit wir später darauf
verlinken können.`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<section id="very-important-section">
  Dies ist ein Abschnitt mit einer ID.
</section>
`})})]}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"IDs"}),` werden verwendet um spezielle Elemente zu kennzeichnen. Diese können
dann speziell gestaltet werden, oder man kann darauf verlinken innerhalb einer
Webseite. Die Webseite scrollt dann direkt zu dem Element das Sie verlinkt
haben.`]}),e.jsxs(s,{title:"Aufgabe: Link auf ein Element erstellen",children:[e.jsx(n.p,{children:`Um auf ein Element mit einer ID zu verlinken, können Sie den folgenden Code
verwenden.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<a href="#very-important-section">Sehr wichtiger Abschnitt</a>
`})}),e.jsxs(n.p,{children:["Um auf ",e.jsx(n.strong,{children:"IDs"})," zu verlinken, stellen Sie einfach das Zeichen ",e.jsx(n.code,{children:"#"})," vor die ",e.jsx(n.strong,{children:"ID"}),"."]})]}),e.jsx(n.h3,{children:"Klassen"}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Klassen"}),` werden später gebraucht um Elemente zu gestalten. Im Moment bringen
Sie uns noch nicht so viel, ausser das wir `,e.jsx(n.em,{children:"ähnliche"}),` Elemente gruppieren
können.`]}),e.jsxs(s,{title:"Beispiel: Sehr wichtige Elemente",children:[e.jsxs(n.p,{children:["Mit ",e.jsx(n.code,{children:"<strong>"})," können Sie ein wichtiges Element hervorheben. Aber auch"," ",`
`,e.jsx(n.code,{children:"<em>"}),` hebt wichtige Elemente hervor. Wir können aber auch noch ein
sehr wichtiges Element haben.`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<strong class="very-important">Super wichtig</strong>
`})}),e.jsx(n.p,{children:"und"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<em class="very-important">Super wichtig, aber anders</em>
`})}),e.jsx(n.p,{children:"Sind jeweils super wichtige Elemente, werden aber anders dargestellt."})]}),e.jsx(n.h3,{children:"Elemente gestalten"}),e.jsxs(n.p,{children:["Mit dem ",e.jsx(n.code,{children:"<style>"}),`-Tag, können wir die Elemente gestalten. Damit können wir
zusätzliche Styles für Klassen angeben.`]}),e.jsxs(s,{title:"Beispiel: Rote Schrift",children:[e.jsx(n.p,{children:`Wir können sehr wichtige Elemente mit roter Schrift zusätzlich
hervorheben.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<style>
  .very-important {
    color: red;
  }
</style>
`})})]})]})}function c(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{c as default};
