import{j as e}from"./index-B2qCcbtg.js";import{C as t}from"./Chapter-Bxzgta08.js";import{E as r}from"./Example-C700Bojd.js";import{I as a}from"./Img-BYA2b6za.js";import{V as l}from"./Video-g5WL5qln.js";function s(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i.components};return e.jsxs(t,{children:[e.jsx(n.h2,{children:"Spieler erstellen und animieren"}),e.jsx(n.p,{children:`Im letzten Kapitel haben wir bereits einen Spieler erstellt. Der war aber sehr
langweilig und konnte eigentlich garnichts. Der Spieler läuft über alle
Hindernisse und ist nur ein rotes Rechteck. Das möchten wir in dem Kapitel
ändern.`}),e.jsx(l,{url:"Ibekj0j6T5c"}),e.jsxs(r,{title:"Neue Szene mit einem Spieler",children:[e.jsx(n.p,{children:`Wir erstellen eine neue Szene, die dieses mal eine andere Basisklasse erweitert.
Das ermöglicht es uns sehr viel Arbeit zu sparen, denn all die Levels
funktionieren immer genau gleich. Die Karte wird nach dem gleichen Schema
aufgebaut und der Spieler und andere Spielobjekte werden zur Welt hinzugefügt.
Das müssen wir nicht alles im Detail wissen.`}),e.jsx(n.p,{children:`Die folgende Szene Erstellt eine Spielwelt mit Hindernissen, einem Spieler,
einer Tür und Spielobjekten.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import Base2DScene from "../base-2d-scene"

// Hier erweitern wir Base2DScene statt Phaser.Scene.
// Das nimmt uns bereits die ganze Arbeit ab die Welt zu erstellen.
export default class Level01 extends Base2DScene {
  constructor() {
    super({ key: "level-01" })
  }

  preload() {
    // Wie bereits im Level 00, wird hier die zugehörige Karte geladen.
    this.load.tilemapTiledJSON(
      "map-level-01",
      "./assets/maps/map-level-01.json",
    )
  }

  create() {
    // Wir rufen hier die \`create\`-Methode von \`Base2DScene\` auf, und teilen mit
    // welche Karte wir erstellen möchten. Das ist die Karte die wir in \`preload\`
    // geladen haben.
    super.create("map-level-01")
  }
}
`})}),e.jsxs(n.p,{children:["Das ist hier bereits alles. Wie bereits gesagt übernimmt die ",e.jsx(n.code,{children:"Base2DScene"}),` fast
alles für uns. Wir müssen nur mitteilen welche teile wir laden möchten.`]})]}),e.jsx(n.p,{children:`Der Code übernimmt für uns zwar das ganze erstellen der Karte, der Spieler ist
aber so noch nicht vollständig. Damit möchten wir uns hier noch
auseinadersetzen. Zur Zeit kann sich der Spieler bewegen und stösst mit den
Wänden zusammen, aber mehr passiert dann auch noch nicht. Wir haben zum Beispiel
noch keine Animationen.`}),e.jsx(n.h3,{children:"Spielobjekte animieren"}),e.jsxs(n.p,{children:["Ähnlich wie das mit den ",e.jsx(n.code,{children:"Tilesets"}),` schon der Fall war, werden auch Animationen
in einem Bild mit verschiedenen Kacheln geladen. Die nennt man dann
`,e.jsx(n.code,{children:"Spritesheets"}),". Hier sehen Sie das ",e.jsx(n.code,{children:"Spritesheet"}),` das wir für den Spieler
verwenden werden.`]}),e.jsx(a,{src:"player.png",alt:"Spritesheet für den Spieler"}),e.jsx(n.p,{children:`Hier ist jeweils eine Zeile eine Animation die aus 3 Frames besteht. Damit wir
Animationen für das ganze Spiel erstellen können, und diese auch nur einmal
geladen werden, fügen wir die nicht beim Spieler ein, sondern bei der Ladeszene.`}),e.jsxs(r,{title:"Ladeszene erweitern",children:[e.jsx(n.p,{children:`Die Ladeszene die wir im letzten Teil erstellt haben, hat den Zweck alle
Ressourcen wie Animationen, Bilder und Musik zu laden. Daher fügen wir die
Animationen auch dort ein.`}),e.jsxs(n.p,{children:["Wir erstellen eine neue Funktion ",e.jsx(n.code,{children:"createAnimations"}),` die wir dann in der
`,e.jsx(n.code,{children:"create"}),"-Funktion aufrufen. Hier finden Sie den Code mit den Erklärungen dafür."]}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Die Funktion packt uns schön alles zusammen was mit dem erstellen von
// Animationen zu tun hat.
createAnimations() {

  // Das erstellt uns eine Animation. Hier können wir mehrere Parameter übergeben
  // um die Animation zu definieren.
  this.anims.create({
    key: "player_idle", // Das ist der Name der Animation, den brauchen wir um die Animation abzuspielen
    frames: this.anims.generateFrameNumbers("player", { // Das übernimmt das eigentlich erstellen der Animationsframes. Hier geben wir an von welchem Spritesheet die Animation erstellt wird. Das Spritesheet muss natürlich auch in der \`preload\`-Methode geladen werden.
      start: 1, // Bei welcher Kachel die Animation beginnt.
      end: 1,   // Bei welcher Kachel die Animation fertig ist.
    }),
    frameRate: 10, // Mit welcher Geschwindigkeit die Animation abläuft. Spielt hier keine Rolle, denn wir haben nur 1 Frame
    repeat: -1, // Wie oft die Animation wiederholt wird. Mit -1 läuft sie in einer Dauerschleife.
  })

  // Hier wird die Animation für das Rechtslaufen erstellt.
  this.anims.create({
    key: "player_right",
    frames: this.anims.generateFrameNumbers("player", {
      start: 6,
      end: 8,
    }),
    frameRate: 10,
    repeat: -1,
  })

  // TODO: Erstellen Sie die restlichen Animationen
}
`})}),e.jsx(n.p,{children:`Der Code ist eigentlich recht selbsterklärend. Sie müssen nur aus dem Bild
ablesen welche Frames zu welcher Animation gehören, dann können Sie das ganz
schnell erstellen.`})]}),e.jsx(n.p,{children:`Nun haben wir die Animationen erstellt, jetzt müssen wir Sie aber auch noch
verwenden. Dafür schauen wir uns den Code für den Spieler etwas genauer an.`}),e.jsx(n.h3,{children:"Spieler"}),e.jsx(n.p,{children:`Der Spieler ist einfach nur ein Spielobjekt. Meist ist der Spieler das
komplizierteste Objekt, denn es muss am meisten können, aber auch ein Boss oder
gewisse Gegner können sehr komplex werden. Gehen wir mal davon aus das alle
Spielobjekte eine einfache Logik haben, dann können wir den Spieler als
Grundlage für alle bewegten Spielobjekte betrachten.`}),e.jsxs(r,{title:"Spielerbewegung mit Animation",children:[e.jsx(n.p,{children:`Wir haben im letzten Teil bereits gesehen das es einfach ist ein Spielobjekt auf
Tastendruck du verschieben. Nun möchten wir dann auch noch eine Animation
abspielen, was auch nicht so schwer klingt. Das Problem dabei ist aber, dass in
jedem Frame ein neuer Tastendruck registriert wird, wir müssen also wissen ob
eine Animation bereits läuft, oder ob wir diese neu starten müssen. Schauen wir
uns dafür am besten den Code an.`}),e.jsx(n.p,{children:`Der Code ist hier auch wieder ausführlich erklärt. Lesen Sie sorgsam die
Kommentare durch, alles was Sie wissen müssen, ist da jeweils beschrieben.`}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import Phaser from "phaser"

// Damit erstellen wir die Player-Klasse, die ein Sprite erweitert.
export default class Player extends Phaser.Physics.Arcade.Sprite {
  // Wenn wir das an dieser Stelle definieren, dann kann \`speed\` in allen
  // Methoden der Klasse verwendet werden. Das ist praktisch um die Geschwindigkeit
  // für den Spieler einheitlich zu steuern.
  speed = 100

  // Das müssen wir nicht im Detail verstehen, Phaser braucht hier einfach die Szene
  // zu welcher das Spielobjekt hinzugefügt wird. Mit \`x\` und \`y\` geben wir die Position
  // an, wo das Objekt gezeichnet werden soll.
  constructor(scene, x, y) {
    // Das wird auch von Phaser so verlangt. Hier reichen wir eigentlich alles einfach
    // weiter, wir müssen aber noch sagen welches \`Spritesheet\` wir verwenden möchten.
    super(scene, x, y, "player")
    this.scene.add.existing(this)
    this.scene.physics.add.existing(this, false)

    // Damit sagen wir das ein Spieler das Spielfeld nicht verlassen kann.
    this.body.collideWorldBounds = true

    // Setzt den Ankerpunkt wo der Spieler gezeichnet wird auf dessen Mitte.
    this.setOrigin(0.5, 0.5)

    // Das setzt die Grösse der Hitbox des Spielers. So können wir eine leichte
    // Überschneidung der Grafiken haben, wir können so zu sagen näher an die anderen
    // Objekte laufen, und es ist auch einfacher Lücken von nur einem \`Tile\` zu treffen
    // wenn wir nicht die ganze Breite beanspruchen.
    this.setSize(24, 24, false)

    // Damit steuern wir wie fest die Hitbox verschoben wird.
    this.setOffset(4, 8)

    // In dieser Methode werden die Steuerungen geladen.
    this.setControls()
  }

  // Lädt die Steuerung für den Spieler damit wir die Pfeiltasten verwenden können.
  setControls() {
    this.cursor = this.scene.input.keyboard.createCursorKeys()
  }

  update() {
    // Wir holen uns aus dem Cursor die Dinge auf die wir reagieren möchten, also nur
    // die Pfeile.
    const { left, right, up, down } = this.cursor

    // Hier setzen wir einen Schalter. Wenn der war ist, hat der Spieler keine
    // Bewegung gehabt in diesem Frame, sobald wir aber Bewegung haben, legen wir
    // den Schalter auf \`false\`
    let isIdle = true

    // Wir setzen immer am Anfang eines Frame die Geschwindigkeit auf 0, damit ist dann
    // auch diagonales laufen möglich.
    this.body.setVelocityX(0)
    this.body.setVelocityY(0)

    // Wenn links gedrückt wird
    if (left.isDown) {
      // Links wirde gedrückt, wir setzen die Geschwindigkeit des Spielers, dann
      // kümmert sich die Physik-Engine von Phaser um die Verschiebung und Kollisionen.
      this.body.setVelocityX(-this.speed)

      // Wenn der Spieler ruhig war, dann lasse die Animation "player_left" starten
      if (isIdle) this.anims.play("player_left", true)

      // Da wir uns bewegen, ist der Spieler nicht mehr ruhig.
      isIdle = false
    }

    // Gleich wie Links-Laufen
    if (right.isDown) {
      this.body.setVelocityX(this.speed)
      if (isIdle) this.anims.play("player_right", true)
      isIdle = false
    }

    // Falls der Spieler nach all den Checks noch ruhig ist, spiele die "player_idle" Animation ab.
    if (isIdle) {
      this.anims.play("player_idle", true)
    }
  }
}
`})}),e.jsx(n.p,{children:`Sie sehen das auch hier das ganze nicht schwierig ist, es kann aber mit der Zeit
sehr unübersichtlich werden, wann welche Animation abgespielt werden soll.`})]}),e.jsx(n.h3,{children:"Eigenes Level erstellen"}),e.jsxs(n.p,{children:["Wir schauen uns nun noch an wie Sie ein eigenes Level mit der hilfe von ",e.jsx(n.code,{children:"Tiled"}),`
erstellen können. Wir müssen hier einiges beachten und genau nach den Vorgaben
arbeiten, denn die `,e.jsx(n.code,{children:"Base2DScene"}),` ist darauf angewiesen, das alles genau so
heisst wie es dort beschrieben ist. Sie können den
`,e.jsx(n.a,{href:"https://mapeditor.org",children:"Tiled-Editor"}),` hier herunterladen und installieren. Wenn
Sie noch ein Programm möchten mit dem Sie die Bilder bearbeiten können, können
Sie `,e.jsx(n.a,{href:"https://libresprite.github.io/#!/downloads",children:"Libresprite"})," herunterladen."]}),e.jsxs(n.p,{children:[`Sollten Sie einfach nach weiteren Ressourcen suchen die Sie für Ihr Spiel
verwenden möchten, dann können Sie bei
`,e.jsx(n.a,{href:"https://itch.io/game-assets/tag-32x32",children:"itch.io"})," suchen."]})]})}function u(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{u as default};
