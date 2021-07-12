

async function consumirapi(req, res){
    console.log('vamos a consumir..');

    var data = await fetch('http://localhost:3000/sport') ;
    let json = await data.json();
    json= json.response;
    //let cont = 1;
    json.forEach(data => {
        console.log(data.player.firstname+''+data.player.name);
        console.log(data.player.photo);
        console.log(data.player.nationality)
        

        var newP = document.createElement("P");
        var currentDiv = document.getElementById("p");
        var newContent = document.createTextNode(data.player.firstname+''+data.player.name);
        newP.appendChild(newContent); 
        document.body.insertBefore(newP, currentDiv);


        var img = document.createElement('img');
        img.src = data.player.photo;
        document.body.appendChild(img);


        var newh3 = document.createElement("h3");
        var newContentH3 = document.createTextNode(data.player.nationality);
        newh3.appendChild(newContentH3); 
        document.body.insertBefore(newh3, currentDiv);



       // var myImage = new Image(100, 200);
      //  myImage.src = 'picture.jpg';
      //  console.log(myImage);

       // var paragraph = document.getElementById("p1");
       // paragraph.textContent = (data.player.firstname+''+data.player.name);
       //  var text = document.createTextNode(data.player.firstname+''+data.player.name);
      //  paragraph.appendChild(text);
       // cont++;
    });

   


}

consumirapi();