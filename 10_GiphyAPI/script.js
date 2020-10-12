$(".search-btn").on("click", ()=>{
    const box = $(".search-field");
    const api = "http://api.giphy.com/v1/stickers/search?"
    const key = "api_key=kObG2oJMNoLcphVed6TiiERSkWw4SpIV";
    const lang = "&lang=en";
    const limit = "&limit=90";
    var query = "&q="+box.val().replace(/\s/gi,"+"); //replace spaces with '+'
    console.log(query);

    //reset containers
    $(".col-lg-3").remove();

    //animate button
    $(".search-btn").addClass("clicked");
    setTimeout(()=>{$(".search-btn").removeClass("clicked");}, 150);

    fetch(api+key+query+limit+lang)
        .then(res => res.json())
        .then((gifs) => {
            var length = gifs.data.length; 
            console.log(length);
            addContainers(length);
            for(let i=0; i<length; i++)
                $(".img-"+(i)).attr("src", gifs.data[i].images.downsized.url);
        })
    box.val("");
})

//creates the image containers and add <img> tags inside them
function addContainers(length) {
    for(let i=0; i<length; i++) {
        $(".row").append("<div class='col-lg-3 col-md-4 col-sm-6 "+i+"'><img class='img-"+i+"'></div>");
    }
}