let song;
let playSong;

//Function to get song nfo when image is clicked
//Like a doc string
/**
 * @param img_index
 * @param item_index
 * @param JS_Event
 * 
 * Function gets song from Spotify using the image index of our gallery
 * Then finds the coorect item_index inside of the JSON data to produce the preview_url
 */

 async function clickedEvent(img_index,item_index,event){
    let track = document.getElementsByTagName('img')[img_index].attributes[2].value   //this is giving us the alt tag
    
    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json'],
        ['Authorization', 'Bearer BQBccGb3eO_l3YmMokYDylS8a83SIKvDby4YzLFUTm_qrCroYzjTtf9KhsbI7j0xJXEZLt9fZLo24e_rQVHT_bH-41zdA5M_ydj5nQNm60mwL8ZoMNBijbuVFCRGQfCI0wJlJWwlI5c4CE8j3hnrhLcr_NOUe8A']
    ])
     //this is goig to spotify  with a GET request and Headers in a curl request -H
    let request = new Request(`https://api.spotify.com/v1/search?q=${track}&type=track&limit=15`, {
        method:'GET',
        headers: headers
    })

    await fetch(request)
    .then((response) => response.json())
    .then((rawData) => {
        console.log(rawData)
        song = rawData.tracks.items[item_index].preview_url
    })
    songSnippet(song)
 }



//items_index comes from the spotify array
function getSong(id,event){
    switch(id){
        case 'fig1':{
            event.stopPropagation()
            clickedEvent(0,3)
            break;
        }
        case 'fig2':{
            event.stopPropagation()
            clickedEvent(1,3)
            break;
        }
        case 'fig3':{
            event.stopPropagation()
            clickedEvent(2,0)
            break;
        }
        case 'fig4':{
            event.stopPropagation()
            clickedEvent(3,4)
            break;
        }
        case 'fig5':{
            event.stopPropagation()
            clickedEvent(4,0)
            break;
        }
        case 'fig6':{
            event.stopPropagation()
            clickedEvent(5,1)
            break;
        }
    }
 }

   // Function to play song from preview URL
  /**
   * @param url
   * 
   * url = Song preview url
   * 
   * Function will return an audio clip given by the preview url
   */

  function songSnippet(url){
    playSong = new Audio(url)
    return playSong.play()
}



  // Function to stop song snippet
/**
 * NO PARAMS
 * 
 * Function returns event to stop song snippet
 */
function stopSnippet(){
    return playSong.pause();
}

