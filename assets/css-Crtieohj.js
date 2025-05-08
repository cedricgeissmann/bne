import{j as e}from"./index-B2qCcbtg.js";import{C as c}from"./Chapter-Bxzgta08.js";import{E as r}from"./Example-C700Bojd.js";import{F as l}from"./Fiddle-BoYqa3y3.js";import{P as h,S as t,B as i}from"./Reveal-CWHqvlP7.js";import"./index-CJwiPXpQ.js";import"./night-DSUKmcl1.js";function d(s){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...s.components};return e.jsxs(c,{children:[e.jsx(n.h2,{children:"Webseiten gestalten"}),e.jsxs("section",{children:[e.jsxs(h,{children:[e.jsxs(t,{children:[e.jsxs(i,{children:[e.jsxs(n.h2,{children:[e.jsx(n.code,{children:"Klassen"})," in CSS"]}),e.jsxs("ul",{children:[e.jsx("li",{class:"fragment",children:e.jsxs(n.p,{children:["Eine ",e.jsx(n.code,{children:"Klasse"})," in CSS ist ein Attribut, das wir einem ",e.jsx(n.code,{children:"HTML"}),`-Element
geben können.`]})}),e.jsx("li",{class:"fragment",children:e.jsxs(n.p,{children:["Bsp.: ",e.jsx(n.code,{children:'<h1 class="important">Wichtiger Titel</h1>'})]})}),e.jsx("li",{class:"fragment",children:e.jsxs(n.p,{children:["Diese ",e.jsx(n.code,{children:"Klasse"}),` können wir in CSS auswählen, und die Gestaltung für das
Element anpassen.`]})}),e.jsx("li",{class:"fragment",children:e.jsxs(n.p,{children:["Bsp.: ",e.jsx(n.code,{children:"h1 {             background-color: green;           }"})]})})]})]}),e.jsx(i,{children:e.jsx(l,{html:'<h1 class="my-title">Titel</h1>',css:`
        .my-title {
          background-color: green;
        }
      `})})]}),e.jsxs(t,{children:[e.jsxs(i,{children:[e.jsx(n.h2,{children:"Eigenschaften anpassen durch CSS"}),e.jsxs("ul",{children:[e.jsx("li",{class:"fragment",children:`Mit CSS setzen wir die Eigenschaften von einem
Element`}),e.jsxs("li",{class:"fragment",children:["Der ",e.jsx(n.strong,{children:"Selektor"}),` beschreibt welche Element gewählt
werden`]}),e.jsxs("li",{class:"fragment",children:["Die ",e.jsx(n.strong,{children:"Regeln"}),` beschreiben wie der Browser das
Element zeichnet`]}),e.jsx("li",{class:"fragment",children:`ACHTUNG! Ein Element kann auch von mehreren
Selektoren getroffen werden`}),e.jsxs("li",{class:"fragment",children:["Wichtige Eigenschaften sind: ",e.jsx(n.code,{children:"width, height,         background-color, margin, padding, border"})]})]})]}),e.jsx(i,{children:e.jsx(l,{html:'<div class="my-box">box</div>',css:`
        .my-box {
          background-color: green;
          width: 100px;
          height: 100px;
          margin: 0px;
          padding: 20px;
          border: 2px dotted red;
        }
      `})})]}),e.jsxs(t,{children:[e.jsxs(i,{children:[e.jsxs(n.h2,{children:[e.jsx(n.code,{children:"Inline"})," vs ",e.jsx(n.code,{children:"Block"})," vs ",e.jsx(n.code,{children:"Flex"})]}),e.jsxs("ul",{children:[e.jsx("li",{class:"fragment",children:"CSS unterschiedet verschiedene Arten von Display"}),e.jsxs("li",{class:"fragment",children:[e.jsx(n.code,{children:"Inline"})," werden Elemente aneinander gehängt"]}),e.jsxs("li",{class:"fragment",children:[e.jsx(n.code,{children:"Block"})," ein Element braucht die volle Breite"]}),e.jsxs("li",{class:"fragment",children:[e.jsx(n.code,{children:"Flex"}),` Elemente darin können entlang einer Achse
ausgerichtet werden`]}),e.jsxs("li",{class:"fragment",children:[e.jsx(n.code,{children:"<div>"}),`-Elemente sollten immer als Container
verwendet werden`]})]})]}),e.jsx(i,{children:e.jsx(l,{html:`<div class="my-container">
<div class="my-box">box</div>
</div>`,css:`
        .my-box {
          background-color: green;
          width: 100px;
          height: 100px;
          margin: 0px;
          padding: 20px;
          border: 2px dotted red;
        }
      `})})]})]}),e.jsx(n.p,{children:`Bisher haben wir uns mit der Struktur von Webseiten beschäftigt. Nun möchten wir
diese Strukturen auch verwenden um die Webseiten zu gestalten. Dies wird mit`}),e.jsxs(n.p,{children:[e.jsx("b",{children:"CSS"})," (Cascading Style Sheets) gemacht."]})]}),e.jsx(n.h3,{children:"Stylesheet einbinden"}),e.jsx(n.p,{children:`Um eine saubere Trennung von Struktur und Gestaltung zu erreichen, können
Stylesheets in Webseiten eingebunden werden. Damit können Styles auch auf
mehreren Webseiten verwendet werden, und müssen nicht immer wiederholt werden.`}),e.jsxs(r,{title:"Aufgabe: Stylesheet verlinken",children:[e.jsxs(n.p,{children:["Fügen Sie den folgenden Code im ",e.jsx(n.code,{children:"<head>"}),` von Ihrem HTML Dokument
ein.`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<link rel="stylesheet" href="style.css" />
`})}),e.jsxs(n.p,{children:["Erstellen Sie dann eine neue Datei mit dem Namen ",e.jsx(n.code,{children:"style.css"})]})]}),e.jsx(n.h3,{children:"Stylesheet verwenden"}),e.jsx(n.p,{children:`Haben Sie das Stylesheet eingebunden, möchten wir als erstes ausprobieren ob es
funktioniert hat. Am einfachsten geht das wenn Sie eine direkt sichtbare
Änderung machen. Zum Beispiel können Sie die Hintergrundfarbe der Webseite
ändern.`}),e.jsxs(r,{title:"Aufgabe: Neue Hintergrundfarbe",children:[e.jsxs(n.p,{children:["Öffnen Sie ",e.jsx(n.code,{children:"style.css"}),` und geben Sie den folgenden Code
ein:`]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`body {
  background-color: red;
}
`})}),e.jsx(n.p,{children:"Der Hintergrund Ihrer ganzen Seite, sollte nun rot sein."})]}),e.jsx(n.h3,{children:"Weitere Elemente"}),e.jsx(n.p,{children:`Sie können in CSS einzelne Elemente unterschiedlich gestalten, dafür brauchen
Sie einfach weitere Regeln. Diese werden in der gleichen Datei eingefügt.`}),e.jsxs(r,{title:"Aufgabe: Schriftfarbe des Titels ändern",children:[e.jsx(n.p,{children:`Um den Titel besser hervorzuheben, möchten wir gerne die Farbe des Titels
ändern, aber den Rest der Seite so lassen. Verwenden Sie dafür diese neue Regel.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`h1 {
  color: whitesmoke;
  text-decoration: underline;
  text-align: center;
}
`})}),e.jsx(n.p,{children:"Sie sollten nun einen zentrierten Titel haben der unterstrichen ist."})]}),e.jsx(n.h3,{children:"Mit CSS Regeln experimentieren"}),e.jsx(n.p,{children:`Wie Sie gesehen haben, kann man verschiedene Regeln auf unterschiedliche
Elemente anwenden. Versuchen Sie mithilfe des Editors eine weitere Regel für ein`}),e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<p>"}),"-Tag zu erstellen, und diese anders zu gestalten."]}),e.jsx(r,{title:"Aufgabe: Webseite gestalten",children:e.jsx(n.p,{children:`Testen Sie verschiedene Stile für Ihre Webseite aus. Erstellen Sie jeweils einen
neuen Commit, wenn Sie mit einem Stil zufrieden sind. Verändern Sie Ihren Stil
mindestens 3 mal, um die History von Ihrem Projekt zu vergrössern.`})})]})}function p(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{p as default};
