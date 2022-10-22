import { mouse } from "./event.js"
import { Rectangle } from "./shapes.js"

export class Shotgun{
    constructor(){
        this.parts = {
            barrle: new Rectangle({x: 0, y: -2.5}, {dx: 0, dy: 0}, {w: 40, h: 5}, "grey"),
        }
    }
    draw(game){
        for ( let key in this.parts ){
            this.parts[key].draw(game)
        }
    }
}