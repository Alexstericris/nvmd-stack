import type {State} from "@/stores/store";
import type {Module} from "vuex";
import type {Bullet, Character, Position} from "@/types/gametypes";

export interface GameState {
    character: Character,
    bullets: Array<Bullet>
    mouseX: number | null
    mouseY: number | null,
    clicked: boolean,
    clickX: number,
    clickY: number,
}

export const gameStore: Module<GameState, State> = {
    namespaced: true,
    state: {
        character: {} as Character,
        bullets: [],
        mouseX: null,
        mouseY: null,
        clicked: false,
        clickX: 0,
        clickY: 0
    },
    mutations: {
        setCharacter(state: GameState, character: Character) {
            state.character = character
        },
        setCharacterPosition(state: GameState, position: Position) {
            state.character.position = position;
        },
        addBullet(state: GameState, bullet: Bullet) {
            state.bullets.push(bullet)
        },
        deleteBullet(state: GameState, index: number) {
            state.bullets=state.bullets.splice(index,1);
            // state.bullets=state.bullets.filter(bullet=>bullet.id!==id);
        },
        setCoordinates(state: GameState, coordinates: { mouseX: number, mouseY: number }) {
            state.mouseX = coordinates.mouseX
            state.mouseY = coordinates.mouseY
        },
        setClickCoordinates(state: GameState, coordinates: { clickX: number, clickY: number }) {
            state.clickX = coordinates.clickX
            state.clickY = coordinates.clickY
            state.clicked = true
        },
        setClicked(state: GameState, clicked) {
            state.clicked = clicked;
        },
    }
};