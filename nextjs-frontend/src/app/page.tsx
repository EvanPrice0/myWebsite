'use client';
import { ImageList, ImageListItem } from "@mui/material";
import { formatImage } from './formatImage'
import { StaticImageData } from "next/image";
import { Card, CardContent, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Home() {
  const matches = useMediaQuery('(min-width:1000px)');
  function srcset(image: StaticImageData, size: number, rows = 1, cols = 1) {
    return {
      src: `${image.src}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image.src}?w=${size * cols}&h=${size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  return (
    <div>
      <h1>Evan Price</h1>
      <h2>Welcome to my website</h2>
      <ImageList variant="quilted"
        cols={matches ? 4 : 2}
        rowHeight={"auto"}>
        <ImageListItem key="intro" cols={2} rows={1}>
          <Card className={"intro-card"}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Here is a little bit about me
              </Typography>
            </CardContent>
            <Typography>I grew up in a small town in Iowa as a third child out of four.
              I went to school at the University of Iowa. I started off in Mechanical
              Engineering with an emphasis in Energy and the Environment. I didn't
              do well in that, so I dropped out. From there I worked different jobs that gave me drive and motivation to go back.
              I was a autoglass installer, at a Papa Johns Pizza, and I worked making high end dog treats by hand. One summer I took an internship at a tech company as a production specialist
              intern(data entry) and I realized the programming they were doing was what I really wanted to do. From that point on I worked
              extremely hard and found my way. I got my grades up enough to get into Iowa again and I thrived as a Computer Science Major
            </Typography>
          </Card>
        </ImageListItem>
        {formatImage.map((image, count) =>
          <ImageListItem key={`${image.cols + count}`} cols={image.cols} rows={image.rows}>
            <img  {...srcset(image.image, matches ? 350 : 450, image.rows, image.cols)}
              alt={image.title}
              loading="lazy" />
          </ImageListItem>)}
      </ImageList>
    </div>
  )
}
