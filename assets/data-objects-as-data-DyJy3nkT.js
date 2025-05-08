import{j as e}from"./index-B2qCcbtg.js";import{C as t}from"./Chapter-Bxzgta08.js";import{E as a}from"./Example-C700Bojd.js";import"./night-DSUKmcl1.js";function r(i){const n={code:"code",h2:"h2",p:"p",pre:"pre",...i.components};return e.jsxs(t,{children:[e.jsxs(n.h2,{children:[e.jsx(n.code,{children:"JSON"})," als Datenquelle"]}),e.jsx("section",{children:e.jsxs(n.p,{children:["Viele Daten sind im ",e.jsx(n.code,{children:"JSON"}),`-format verfügbar. Aber was können wir damit
machen? Wir können die Daten auf einer Webseite darstellen lassen.
Überlegen Sie sich einmal wie ein Webshop funktionieren könnte. Sie
greifen über eine Webseite darauf zu, jedoch wird wohl kaum jemand von
Hand die ganze Webseite geschrieben haben, wo alle Artikel drin sind,
die in dem Shop verkauft werden. In der Realität ist es so das man eine
Art Vorlage schreibt, die dann mit den Daten aus dem `,e.jsx(n.code,{children:"JSON"}),` ergänzt
werden. So können die Daten in einer Datenbank gespeichert werden, oder
wie in unserem Fall, einfach als `,e.jsx(n.code,{children:"JSON"}),"-Datei abgelegt werden."]})}),e.jsxs(a,{title:"Vorlage mit Daten erstellen",children:[e.jsxs(n.p,{children:[`Wir möchten eine Vorlage erstellen, und diese dann mit den Daten aus
dem `,e.jsx(n.code,{children:"JSON"}),` füttern. Das folgende Codestück definiert einen Artikel und
packt diesen dann in eine `,e.jsx(n.code,{children:"HTML"}),"-Vorlage."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const article = {
  name: "Apple",
  price: 2.50,
  description: "An apple a day keeps the doctor away",
}

const template = \`
  <div class="article">
    <h3>\${article.name}</h3>
    <p class="description">\${article.description}</p>
    <p class="price">\${article.price}</p>
  </article>
\`

document.querySelector("#articles").innerHTML = template
`})}),e.jsx(n.p,{children:`Wenn wir nun noch Schleifen und Listen verwenden, können wir ganz
einfach mehrere Artikel in unser Dokument schreiben.`})]})]})}function o(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{o as default};
