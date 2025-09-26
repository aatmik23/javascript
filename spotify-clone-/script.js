async function getsongs() {
    
    let a = await fetch("http://127.0.0.1:3000/spotify/songs")
    let responce = await a.text()
    console.log(responce)

    let div =document.createElement('div')
    div.innerHTML=responce
    let as = div.getElementsByTagName("a")
    
    let songs =[]
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
       
     if (element.href.endsWith(".mp3")){
             songs.push(element.href)
        }
        


    }
   return songs
 
}
async function main() {
    
    let songs = await getsongs()
    console.log(songs)

    //play audiofunction playAudio() {
    let audio = new Audio(songs[0]);
    audio.play();
}

main()


