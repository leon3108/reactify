import { StaticImageData } from "next/image";

export interface PlaylistItem {
  src:string | StaticImageData,
  title: string,
  description: string,
  artist: string,  
}

export interface Playlist {
  name: string,
  items: PlaylistItem[],
}

export interface Link {
  name:string,
  url:string
}

export interface Song {
  imageUrl: string | StaticImageData
  artistName: string
  songName: string
}
export interface Item {
  src: string | StaticImageData
  title: string
}