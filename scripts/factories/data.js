export default async function getPhotographers(){
    const photographers = await (await fetch("./data/photographers.json")).json();
return (photographers)
}