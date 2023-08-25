import { createContext, useContext } from "react";
import { SidebarProps } from "./sidebarProvider";

export const SidebarContext = createContext<SidebarProps | undefined>(undefined);

export const useSidebarContext = () => {
    const sidebarContextProps = useContext(SidebarContext);
    if (!sidebarContextProps) {
        throw Error("sidebar context doesn't work here")
    }
    return sidebarContextProps
}