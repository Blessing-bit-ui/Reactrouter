import type { Route } from "./+types/home";
import Post from './post';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return(
  <h1> hey </h1>
  )
}
