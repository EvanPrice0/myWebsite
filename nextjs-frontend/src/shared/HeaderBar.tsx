'use client';
import Link from "next/link"
import { RoutingLink } from "../models/routing/RoutingLink"
import { SidebarProvider } from "@/app/contexts/sidebarProvider"
import { useSidebarContext } from "@/app/contexts/sidebarContext"
import './HeaderBar.scss'
import { ChevronLeft, Menu } from "@mui/icons-material";
import { Card } from "@mui/material";
import { useRef } from "react";
export interface Props {
    links: RoutingLink[]
}
export const HeaderBar = ({ links }: Props) => {

    return (<SidebarProvider>
        <HeaderBarInternal links={...links} />
    </SidebarProvider>)
}

const HeaderBarInternal = ({ links }: Props) => {
    const { showSidebar, setShowSidebar, menuRef } = useSidebarContext()

    return (
        <div className={`container-header-${showSidebar ? 'open' : 'closed'}`}>
            {showSidebar ?
                <div ref={menuRef} className="container-outer">
                    <Card className="container-inner">
                        <div className="nav-item">
                            <Link href={'/'} onClick={() => { setShowSidebar(false) }}>Home</Link>
                            {links.map(({ link, display }: RoutingLink) => {
                                return (<Link onClick={() => { setShowSidebar(false) }} key={`links-${link}-${display}`} href={`/${link}`}>{display}</Link>)
                            })}

                        </div>
                        <ChevronLeft className="nav-close"
                            onClick={() => { setShowSidebar(false) }} />
                    </Card>
                </div> :

                <Menu className="nav-open"
                    onClick={() => { setShowSidebar(true) }} />
            }
        </div>
    )
}