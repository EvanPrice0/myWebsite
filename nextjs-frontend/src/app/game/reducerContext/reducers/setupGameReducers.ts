import { useRouter } from "next/navigation"
import { GameState } from "../models/stateModels"
import { Action, PlayerEnum, SetPlayers, SetupActionTypesEnum } from "../models/actionModels"

export const setupGameReducer = (state: GameState, action: Action) => {
    const { push } = useRouter()
    switch (action.setupType) {
        case (SetupActionTypesEnum.submit): {
            push('game/play')
            return {
                ...state,
            }
        }
        case (SetupActionTypesEnum.setPlayers): {
            return setPlayersReducer(state, action)
        }
        case (SetupActionTypesEnum.setChips): {
            return {
                ...state,
                numberOfChips: action.value
            }
        }
    }
}

export const setPlayersReducer = (state: GameState, action: SetPlayers) => {
    switch (action.player) {
        case (PlayerEnum.humans): {
            return {
                ...state,
                numberOfHumans: action.value
            }
        }
        case (PlayerEnum.robots): {
            return {
                ...state,
                numberOfRobots: action.value
            }
        }
    }
}