import { GameState } from "../models/stateModels"
import { Action, ActionTypesEnum, PlayerEnum, SetPlayers, SetupActionTypesEnum } from "../models/actionModels"
import { setupGameReducer } from "./setupGameReducers"

export const initialState = {
    numberOfHumans: 0,
    numberOfRobots: 0,
    numberOfChips: 0,
}

export const gameReducer = (state: GameState, action: Action) => {
    switch (action.type) {
        case ActionTypesEnum.setup:
            return setupGameReducer(state, action)
    }
}