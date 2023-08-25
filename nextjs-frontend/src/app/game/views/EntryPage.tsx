'use client';
import { Button, Card, CardActionArea, CardContent, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import "./EntryPage.scss"
import { useState } from "react"
import mitt from "next/dist/shared/lib/mitt";
export const EntryPage = () => {
    const [numHumans, setNumHumans] = useState<string>()
    const [numRobots, setNumRobots] = useState<string>()

    const handleHumansChange = (event: SelectChangeEvent) => {
        setNumHumans(event.target.value);
    };
    const handleRobotsChange = (event: SelectChangeEvent) => {
        setNumRobots(event.target.value);
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
                        value={numHumans}
                        label="Number of Human Players"
                        onChange={handleHumansChange}>
                        <MenuItem value="1">
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
                        value={"1"}
                        labelId="demo-simple-select-helper-label-1"
                        id="demo-simple-select-helper-1"
                        label="Number of Computers"
                        onChange={handleRobotsChange}>
                        <MenuItem value="1">
                            One
                        </MenuItem>
                        <MenuItem value={2}>Two</MenuItem>
                    </Select>
                </FormControl>
            </CardContent>
            <CardContent className="entry-page-card-content">

                <Button
                    type="submit"
                    disabled={!numHumans && !numRobots}
                >
                    Submit
                </Button>
            </CardContent>
        </Card>
    </div>)
}

export default EntryPage