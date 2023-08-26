import { Action } from "./actionModels"

export type GameState = GameSetupState

export interface GameSetupState {
    numberOfHumans: number
    numberOfRobots: number
    numberOfChips: number
}

export interface GameBoard {
    cards: Card[]
    gameBoard: Card[]
    dealerBoard: Card[]
    whoIsUp: string
    chips: number
    dealer: string
}


export interface Players {
    name: string
    isHuman: boolean
    chips: number
    cards: Card[]
    isUp: boolean
}

export interface Card {
    value: CardValue
    type: CardType
}

export enum CardValue {
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
    Six = 6,
    Seven = 7,
    Eight = 8,
    Nine = 9,
    Ten = 10,
    Jack = 11,
    Queen = 12,
    King = 13,
    Ace = 14
}
export enum CardType {
    Spades = 'Spades',
    Hearts = 'Hearts',
    Diamonds = 'Diamonds',
    Clubs = 'Clubs'
}