function getJson()
{
    //these are the  form inputs
    let season = document.querySelector("#season").value;
    let round = document.querySelector('#round').value;
    //the link to that API with the round and season being populated by the form
    fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    //callback function
    .then(response => response.json())
    .then(rawData => { 
            //to confirm we are getting something   
            console.log(rawData)
            for(let i = 0; i < 7; i++){ 
                //using the html table row numbers for the positions              

            
                let givenName = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName
                let familyName = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.familyName
                let fullName = `${givenName} ${familyName}`
                document.querySelector(`#familyName-${i}`).innerHTML = fullName


                let nationality = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.nationality
                document.querySelector(`#nationality-${i}`).innerHTML = nationality
                

                let sponsor = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name;
                document.querySelector(`#sponsor-${i}`).innerHTML = fullName
             

                let points = rawData.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].points
                document.querySelector(`#points-${i}`).innerHTML = points
            
                      
        }

    })
}
