'use client'

import { GameProvider } from "./reducerContext/gameProvider"

export default function GameLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <GameProvider>{children}</GameProvider>
    )
}