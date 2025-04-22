import type { Route } from "./+types/post";

export async function loader({ params }: Route.LoaderArgs){
    const postId =params.postId

}
export async function action(){

}


export default function Post(){
  return(
    <div> </div>
  )  
}