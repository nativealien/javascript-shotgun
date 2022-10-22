// import { game } from "./game.js"

export let mouse = {
    fire: false,
    x: 0, 
    y: 0, 
    tan: 0}


export function mousePos(event){
    mouse.x = event.x
    mouse.y = event.y
    mouse.tan = Math.atan2(mouse.y, mouse.x)
}
export function mouseDown(event){
    if (event.repeat) { return}
    if (event){
        mouse.fire = true
    }
}
export function mouseUp(event){
    if (event){
        mouse.fire = false
    }
}