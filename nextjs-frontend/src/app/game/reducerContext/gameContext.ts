import { createContext, useContext } from "react";
import { GameProps } from "./gameProvider";

export const GameContext = createContext<GameProps | undefined>(undefined);

export const useGameContext = () => {
    const GameRulesContextProps = useContext(GameContext);
    if (!GameRulesContextProps) {
        throw Error("sidebar context doesn't work here")
    }
    return GameRulesContextProps
}

