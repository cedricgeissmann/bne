import{j as e}from"./index-B2qCcbtg.js";import{C as t}from"./Chapter-Bxzgta08.js";import{E as r}from"./Example-C700Bojd.js";function s(i){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i.components};return e.jsxs(t,{children:[e.jsx(n.h2,{children:"CSS Animationen"}),e.jsxs(n.p,{children:[`Moderne Webseiten sind voll mit Animationen. Viele davon können mit CSS einfach
erstellt werden. Die einfachste Art einer Animation ist ein Übergang
(`,e.jsx(n.code,{children:"transition"}),"). Damit können Effekte die mit ",e.jsx(n.code,{children:":hover"}),` erzeugt werden, angenehmer
gestaltet werden.`]}),e.jsxs(r,{title:"Beispiel: Buchstaben auseinander ziehen",children:[e.jsx(n.p,{children:`Der folgende Code zieht Ihnen die Buchstaben von einem Element auseinander, wenn
Sie mit der Maus darüber fahren.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.spread {
  transition: all 1s ease-in-out;
}
.spread:hover {
  letter-spacing: 1rem;
}
`})})]}),e.jsxs(n.p,{children:["Für eine ",e.jsx(n.code,{children:"transition"}),` brauchen Sie 2 Regeln. Die erste ist jeweils für die
Klasse, und gibt das Timing der `,e.jsx(n.code,{children:"transition an"}),`. Die zweite Regel gibt dann nur
den Stil an, wie das Element aussehen soll, wenn zum Beispiel der Cursor auf dem
Element ist.`]}),e.jsx(r,{title:"Aufgabe: Erstellen Sie einen eigenen Übergang",children:e.jsxs(n.p,{children:["Erstellen Sie eine ",e.jsx(n.code,{children:"transition"}),`, die ein Element rotieren lässt. Eine Rotation
können Sie mit `,e.jsx(n.code,{children:"transform: rotate(90deg)"})," erreichen."]})}),e.jsx(n.h3,{children:"Animationen"}),e.jsx(n.p,{children:`Eine fortgeschrittenere Variante sind Animationen. Aber auch diese sind sehr
einfach zu erreichen mit CSS.`}),e.jsxs(r,{title:"Beispiel",children:[e.jsxs(n.p,{children:[`Sie können ganz einfach ein pulsierendes Element erstellen, wenn Sie ein Element
vergrössern und wieder verkleinern. Der folgende Code macht das für alle
Elemente mit der Klasse `,e.jsx(n.code,{children:".scale"}),"."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.scale {
  animation: scale-anim 1s both ease-in-out infinite alternate;
}

@keyframes scale-anim {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.5);
  }
}
`})})]})]})}function c(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{c as default};
