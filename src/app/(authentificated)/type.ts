import { StaticImageData } from "next/image";

export interface Link {
  name:string,
  url:string
}

export interface GroupLinks {
  title: string,
  links: Link[],
}

export interface PlaylistItemType {
  src:string | StaticImageData,
  title: string,
  description: string,
  artist: string,  
}

export interface PlaylistCollection {
  name: string,
  items: PlaylistItemType[],
}

export interface Song {
  imageUrl: string | StaticImageData
  artistName: string
  songName: string
}

export interface Item {
  imageUrl: string | StaticImageData
  title: string,
  description?: string,
  isPinned?: boolean,
}
export interface MusicGenre {
  imageURL: string,
  name: string,
  color: string,
}