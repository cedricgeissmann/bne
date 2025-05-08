import{j as e}from"./index-B2qCcbtg.js";import{C as d}from"./Chapter-Bxzgta08.js";function i(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...t.components};return e.jsxs(d,{children:[e.jsx(n.h2,{children:"Bild neben Text"}),e.jsxs("section",{children:[e.jsx(n.p,{children:`Bild neben Text zu haben ist relativ einfach. Das muss auch nicht unbedingt ein
Bild sein, es sind einfach 2 Container nebeneinander.`}),e.jsx(n.p,{children:"Verwenden Sie dafür den folgenden HTML Code:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="text-next-to-img">
  <div class="text">Content</div>
  <img
    src="https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    alt="" />
</div>
`})})]}),e.jsx(n.h3,{children:"CSS"}),e.jsxs("section",{children:[e.jsx(n.p,{children:"Damit der Code funktioniert, braucht es noch den folgenden CSS Code."}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`/* Erstellt einen Container mit 2 Elementen nebeneinander. */
.text-next-to-img {
  display: grid;
  grid-template-columns: 70% auto; /* gibt an wie der Platz aufgeteilt wird. */
  gap: 1rem; /* Gibt an wie viel Platz zwischen den Elementen ist. */
}

/* Gibt Stiele für den Textblock an. */
.text-next-to-img > .text {
  border: 1px solid lightgray;
  padding: 1rem 2rem;
}

/* Macht dass das Bild die Breite des Containers annimmt. */
.text-next-to-img > img {
  width: 100%;
}
`})}),e.jsxs(n.p,{children:[`Es können auch mehrere Spalten eingefügt werden. Diese müssen nur mit der
gewünschten Breite bei `,e.jsx(n.code,{children:"grid-template-column"})," eingefügt werden."]})]})]})}function a(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{a as default};
