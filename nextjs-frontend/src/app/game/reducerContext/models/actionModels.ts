export type Action = SetPlayers | SubmitSetup | SetChips


export interface SetPlayers {
    type: ActionTypesEnum.setup
    setupType: SetupActionTypesEnum.setPlayers
    player: PlayerEnum
    value: number
}

export interface SetChips {
    type: ActionTypesEnum.setup
    setupType: SetupActionTypesEnum.setChips
    value: number
}

export interface SubmitSetup {
    type: ActionTypesEnum.setup
    setupType: SetupActionTypesEnum.submit
}

export enum PlayerEnum {
    humans = 'humans',
    robots = 'robots'
}

export enum ActionTypesEnum {
    setup = 'setup'
}

export enum SetupActionTypesEnum {
    submit = 'submit',
    setChips = 'set chips',
    setPlayers = 'set players'
}
