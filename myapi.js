
function myFunction() {
    document.getElementById("demo").innerHTML= str(5)
    alert("Hello world");
    //document.getElementById("demo").innerHTML = str(httpGet("https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/RiotSchmick?api_key=RGAPI-acaad9bd-dae4-4dcf-ba96-e3ab026db416"));
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
