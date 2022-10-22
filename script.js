import { mousePos, mouse } from "./event.js"
import { game } from "./game.js"

window.addEventListener("mousemove", mousePos)

game.start()