import { MutableRefObject, useRef, useState } from "react"
import { SidebarContext } from "./sidebarContext"

export const SidebarProvider = ({ children }: React.PropsWithChildren<any>) => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false)

    const menuRef = useRef(null)

    const closeOpenMenus = (e: any) => {
        if (menuRef.current && showSidebar && !menuRef.current.contains(e.target)) {
            setShowSidebar(false)
        }
    }
    document.addEventListener('mousedown', closeOpenMenus)

    const sidebarProps = { showSidebar, setShowSidebar, menuRef }
    return (<SidebarContext.Provider value={sidebarProps}>
        {children}
    </SidebarContext.Provider>)
}

export interface SidebarProps {
    showSidebar: boolean
    setShowSidebar: (showSidebar: boolean) => void
    menuRef: MutableRefObject<any>
}