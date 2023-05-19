//API calling using AJAX
//api link: https://official-joke-api.appspot.com/random_joke
document.getElementById('get_data').addEventListener('click', loadJokes);

function loadJokes(e) {
    //console.log(number);
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `https://official-joke-api.appspot.com/random_joke`, true);

    /*
    This is for progress bar or when the data is comming from the server this will show the loading message.
    xhr.onprogress = function () {
        document.getElementById('output').innerHTML = "<h3>Loading......</h3>";
    }
    */
    

    xhr.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            let jokes = data.setup + " " + data.punchline;
            //let output = "<ol>";
            console.log(jokes);
            document.getElementById('show_jokes').innerHTML = `<h3>Here are your jokes:  ${jokes}</h3>`;
            
            //Do not need extra part.
            //jokes.forEach(function (item) {
                //console.log(item.joke);
                //output += `<li>${item.joke}</li>`;
            //});
            //output += "</ol>";

            //document.getElementById('output').innerHTML = output;
            //console.log(jokes);
            //console.log(data);
        }
    }

    xhr.send();
}