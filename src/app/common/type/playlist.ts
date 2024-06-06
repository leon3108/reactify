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