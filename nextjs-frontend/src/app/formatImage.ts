import { ImageView } from '@/models/images/Image'
import harry from '../img/IMG_1522.jpg'
import formal from '../img/evan.jpeg'
import baseballPark from '../img/image_50421505.JPG'

export const formatImage: ImageView[] = [{
    image: formal,
    title: "Evan takes a formal picture",
    rows: 1,
    cols: 1
},
{
    image: harry,
    title: 'Evan and Harry posing',
    rows: 1,
    cols: 1
},
{
    image: baseballPark,
    title: "Evan visits Nationals Park",
    rows: 1,
    cols: 2
}]