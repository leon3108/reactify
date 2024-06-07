# ⚠️⚠️ IMPORTANT ⚠️⚠️ 

You should remove ```display:table``` in ```node_modules/@radix-ui/react-scroll-area/dist/index.js``` and ```/home/leon/work/spotiflex/node_modules/@radix-ui/react-scroll-area/dist/index.mjs```

it's beyond my control, as I write these lines shadcn/ui has a bug with this component. The ContextMenuItem alos has a bug on hover. I have already opened an issue on their repo. 



## Description

This project is a re-implementation of the Spotify interface.

I have re-implemented the `/` and `/search` route. I did not implement dynamic feature like fetching neither any CRUD operations.

### Stack

This project was initiated with my boilerplate, inside there is :

React + NextJS, 
Prisma Orm,
Tailwind,
Typescript,
Zod,
React Hook Form,
Shadcn/ui

I didn't use everything


## Install

```bash
pnpm i
```

## Run

```bash
pnpm run dev
```

element dans une liste à séparer dans un fichier

~~page.tsx navbar; children pour afficher l'input ?~~

handleKeywdown créer un custom Hook pour play/Pause

player.tsx audioRef.current mettre dans un state ?

~~volume.tsx rename volume ~~

~~const.ts typer sidebarlist~~

mettre toutes les "fakes" données provenant de serveur dans un dossier data

libraryList changer contextMenuTrigger
panelRef.current passer en const, pareil dans menu.tsx

~~changer images.domains~~

cursor-pointer