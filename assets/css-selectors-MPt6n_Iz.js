import{j as e}from"./index-B2qCcbtg.js";import{C as l}from"./Chapter-Bxzgta08.js";import{E as i}from"./Example-C700Bojd.js";function r(s){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...s.components};return e.jsxs(l,{children:[e.jsx(n.h2,{children:"CSS Selektoren"}),e.jsxs("section",{children:[e.jsx(n.p,{children:`CSS ist von der Syntax her eine sehr einfache Sprache. CSS hat Regeln, die immer
im gleichen Style aufgebaut sind.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`selector {
  property: value;
}
`})}),e.jsx(n.p,{children:"Die Teile in dem Block, sind selbsterklärend. Mit"}),e.jsxs(n.p,{children:[e.jsx(n.code,{children:"property"})," sagt man welche ",e.jsx(n.strong,{children:"Eigenschaft"})," man verändern möchte, und ",e.jsx(n.code,{children:"value"}),` ist
der `,e.jsx(n.strong,{children:"Wert"}),` für diese Eigenschaft. Eine grüne Schriftfarbe erreicht man zum
Beispiel mit `,e.jsx(n.code,{children:"color: green;"}),"."]}),e.jsxs(n.p,{children:["Mit dem ",e.jsx(n.code,{children:"selector"}),` kann man sagen für welche Elemente die Regeln gelten sollen.
Da haben wir bereits gesehen das man Tags verwenden kann (`,e.jsx(n.code,{children:"<h1>"}),", ",e.jsx(n.code,{children:"<body>"}),`,
...). Man kann aber auch Klassen und IDs verwenden.`]})]}),e.jsx(n.h3,{children:"CSS Klassen"}),e.jsxs("section",{children:[e.jsx(n.p,{children:`Klassen werden vermutlich am häufigsten verwendet in CSS. In HTML werden Klassen
als Attribut gesetzt, wie zum Beispiel:`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<p class="important">Sehr wichtig</p>
`})}),e.jsxs(n.p,{children:["In CSS gibt uns das die Möglichkeit andere Stile für ",e.jsx(n.code,{children:"<p>"}),` -Tags anzugeben, die
ebenfalls die Klasse `,e.jsx(n.code,{children:"wichtig"})," haben."]})]}),e.jsxs(i,{title:"Aufgabe: Klassenselektor verwenden",children:[e.jsx(n.p,{children:`Erstellen Sie eine neue Regel in Ihrem CSS, die einen Klassenselektor verwendet.
Sie können Sich dabei an dem folgenden Beispiel orientieren.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.important {
  border: 5px solid orange;
}
`})})]}),e.jsx(n.p,{children:`Um in CSS zu sagen dass es sich um eine Klasse handelt, müssen Sie einfach einen
Punkt vor den Klassennamen schreiben.`}),e.jsx(n.h3,{children:"CSS IDs"}),e.jsx(n.p,{children:`Es können nicht nur Klassen sondern auch IDs verwendet werden. Dies wird oftmals
gemacht wenn es sich um ein eindeutiges Element handelt, wie zum Beispiel eine
Navigationsliste.`}),e.jsxs(n.p,{children:[`Ähnlich wie bei Klassen, muss auch nur ein spezielles Zeichen vor den Namen
gestellt werden. Bei IDs wird das Zeichen `,e.jsx(n.code,{children:"#"})," "," verwendet."]}),e.jsx(i,{title:"Aufgabe: IDs verwenden",children:e.jsx(n.p,{children:`Geben Sie einem Element auf Ihrer Webseite eine ID, und erstellen Sie eine Regel
für dieses Element.`})}),e.jsx(n.h3,{children:"Pseudo-Klassen"}),e.jsx(n.p,{children:`In CSS gibt es bestimmte bereits vordefinierte Pseudo-Klassen. Diese können eine
Element auswählen das zur Zeit gerade den Cursor auf sich hat.`}),e.jsxs(i,{title:"Beispiel: Elemente vergrössern",children:[e.jsx(n.p,{children:`Um einen Link besser hervorzuheben, können Sie die Schriftgrösse anpassen wenn
der Mauszeiger über dem Link ist.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`a:hover {
  font-size: 1.4rem;
}
`})}),e.jsxs(n.p,{children:["Sie können das ",e.jsx(n.code,{children:":hover"}),` zu jedem Element dass Sie hervorheben möchten
hinzufügen.`]})]}),e.jsxs(n.p,{children:["Pseudo-Klassen beginnen jeweils mit einem ",e.jsx(n.code,{children:":"}),", wie zum Beispiel ",e.jsx(n.code,{children:":visited"}),"."]}),e.jsx(i,{title:"Aufgabe: Besuchte Links verstecken",children:e.jsxs(n.p,{children:[`Normalerweise sind Links die Sie bereits besucht haben einfach violet. Versuchen
Sie mit der Pseudo-Klasse `,e.jsx(n.code,{children:":visited"})," einen Link zu verstecken."]})})]})}function h(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{h as default};
