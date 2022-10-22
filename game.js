import { mouse } from "./event.js"
import { Shotgun } from "./guns.js"

class Game{
    constructor(can, ctx){
        this.can = can
        this.ctx = ctx
        this.pos = {x: this.can.width/2, y: this.can.height/2}

        this.shotgun = new Shotgun()
    }
    draw(){
        this.ctx.clearRect(0,0,this.can.width,this.can.height)
        this.tan = Math.atan2((mouse.y-this.pos.y),(mouse.x-this.pos.x))
        this.shotgun.draw(this)
    }
    start(){
        tick()
    }
}

const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

export let game = new Game(canvas, context)

function tick(){
    game.draw()
    requestAnimationFrame(tick)
}