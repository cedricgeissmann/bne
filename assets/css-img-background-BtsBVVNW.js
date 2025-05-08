import{j as e}from"./index-B2qCcbtg.js";import{C as r}from"./Chapter-Bxzgta08.js";import{E as s}from"./Example-C700Bojd.js";function t(i){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i.components};return e.jsxs(r,{children:[e.jsx(n.h2,{children:"Bild als Hintergrund"}),e.jsxs("section",{children:[e.jsx(n.p,{children:`Ein Element mit einem Bild als Hintergrund kann mit dem folgenden HTML Code
erstellt werden:`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<h2 class="container-with-bg">
  <div class="content">Content</div>
  <div class="bg-img">
    <img
      src="https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      alt="" />
  </div>
</h2>
`})}),e.jsx(n.p,{children:"Der Code sieht kompliziert aus, erlaubt es aber sehr flexibel zu sein."})]}),e.jsx(n.h3,{children:"CSS"}),e.jsxs("section",{children:[e.jsx(n.p,{children:"Damit der Code funktioniert, braucht es noch den folgenden CSS Code."}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Zentriere alle Elemente in dem Container, setze die Höhe und die Breite fest. */
.container-with-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100px;
}

/* Setze den Container mit dem Inhalt vor den Hintergrund, damit können sich
Elemente überlappen. */
.container-with-bg > div.content {
  color: white;
  z-index: 1;
}

/* Nimm den Bild-Container aus dem normalen Dokumentenfluss raus, und verstecke
alles was über das enthaltende Element heraus läuft. */
.container-with-bg > div.bg-img {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

/* Skaliere das Bild auf die volle Breite und zentriere es vertikal. */
.container-with-bg > div.bg-img > img {
  width: 100%;
  transform: translateY(-50%);
}
`})}),e.jsx(n.p,{children:`Es sind einige Elemente und komplexe Selektoren, dafür kann es sehr gut
angepasst werden. Zum Beispiel können ganz einfach Transitionen hinzufügen.`})]}),e.jsxs(s,{title:"Beispiel: Nur als Hintergrund",children:[e.jsx(n.h3,{children:"Einfacher aber weniger flexibel"}),e.jsx(n.p,{children:`Wenn nur ein Bild als Hintergrund in einem Element eingefügt werden soll, aber
darüber hinaus nichts angepasst werden muss, kann auch der folgende Code
verwendet werden.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.element-with-background {
  height: 160px;
  background-image: url("https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
`})})]})]})}function o(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{o as default};
