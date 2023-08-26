'use client';
import { Button, Card, CardActionArea, CardContent, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import "./scss/entryPage.scss"
import { useGameContext } from "./reducerContext/gameContext";
import { ActionTypesEnum, PlayerEnum, SetupActionTypesEnum } from "./reducerContext/models/actionModels";

export const EntryPage = () => {
    const { state, dispatch } = useGameContext();
    const { numberOfRobots, numberOfHumans, numberOfChips } = state;

    const handleHumansChange = (event: SelectChangeEvent) => {
        dispatch({ type: ActionTypesEnum.setup, setupType: SetupActionTypesEnum.setPlayers, player: PlayerEnum.humans, value: Number(event.target.value) })
    };
    const handleRobotsChange = (event: SelectChangeEvent) => {
        dispatch({ type: ActionTypesEnum.setup, setupType: SetupActionTypesEnum.setPlayers, player: PlayerEnum.robots, value: Number(event.target.value) })
    };
    const handleChipsChange = (event: SelectChangeEvent) => {
        dispatch({ type: ActionTypesEnum.setup, setupType: SetupActionTypesEnum.setChips, value: Number(event.target.value) })
    };
    const handleSubmit = () => {
        dispatch({ type: ActionTypesEnum.setup, setupType: SetupActionTypesEnum.submit })
    };

    return (<div className="entry-page">
        <Card className="entry-page-card">
            <CardContent className="entry-page-card-content">
                Welcome to Texas Hold'em
            </CardContent>
            <CardContent className="entry-page-card-content">
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-helper-label">Number of Human Players</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        displayEmpty
                        value={String(numberOfHumans)}
                        label="Number of Human Players"
                        onChange={handleHumansChange}>
                        <MenuItem value={1}>
                            One
                        </MenuItem>
                        <MenuItem value={2}>Two</MenuItem>
                    </Select>
                    <br />
                </FormControl>
            </CardContent>
            <CardContent className="entry-page-card-content">
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-helper-label-1">Number of Computers</InputLabel>
                    <Select
                        value={String(numberOfRobots)}
                        labelId="demo-simple-select-helper-label-1"
                        id="demo-simple-select-helper-1"
                        label="Number of Computers"
                        displayEmpty
                        onChange={handleRobotsChange}>
                        <MenuItem value={1}>
                            One
                        </MenuItem>
                        <MenuItem value={2}>Two</MenuItem>
                    </Select>
                </FormControl>
            </CardContent>
            <CardContent className="entry-page-card-content">
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-helper-label-1">Number of Chips</InputLabel>
                    <Select
                        value={String(numberOfChips)}
                        labelId="demo-simple-select-helper-label-1"
                        id="demo-simple-select-helper-1"
                        label="Number of Computers"
                        displayEmpty
                        onChange={handleChipsChange}>
                        <MenuItem value={100}>
                            One hundred
                        </MenuItem>
                        <MenuItem value={200}>Two hundred</MenuItem>
                    </Select>
                </FormControl>
            </CardContent>
            <CardContent className="entry-page-card-content">

                <Button
                    type="submit"
                    disabled={!numberOfHumans && !numberOfRobots}
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </CardContent>
        </Card>
    </div>)
}

export default EntryPage