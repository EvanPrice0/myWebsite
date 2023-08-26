'use client'
import React, { useReducer, useState } from "react"
import { GameContext } from "./gameContext"
import { gameReducer, initialState } from "./reducers/gameReducer"
import { GameState } from "./models/stateModels"
import { Action } from "./models/actionModels"


export const GameProvider = ({ children }: React.PropsWithChildren<any>) => {
    const [state, dispatch] = useReducer(gameReducer, initialState)

    const gameRulesProps = {
        state, dispatch
    }

    return (<GameContext.Provider value={gameRulesProps}>
        {children}
    </GameContext.Provider>)

}

export interface GameProps {
    state: GameState,
    dispatch: React.Dispatch<Action>
}