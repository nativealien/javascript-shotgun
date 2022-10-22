import { mouse } from "./event.js"

class Shapes{
    constructor(pos, vel, mes, color){
        this.pos = pos
        this.mes = mes
        this.vel = vel
        this.color = color
    }
}

export class Rectangle extends Shapes{
    constructor(pos, vel, mes, color){
        super(pos, vel, mes, color)
    }
    draw(game){
        game.ctx.save()
        game.ctx.translate(game.pos.x, game.pos.y)
        game.ctx.rotate(game.tan)

        game.ctx.fillStyle = this.color
        game.ctx.fillRect(this.pos.x, this.pos.y, this.mes.w, this.mes.h)
        game.ctx.restore()
    }
}