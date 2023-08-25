import { StaticImageData } from "next/image";

export interface ImageView {
    image: StaticImageData
    title: string
    rows: number
    cols: number
}