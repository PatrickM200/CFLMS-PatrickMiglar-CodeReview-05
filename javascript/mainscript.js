
$(document).ready(function(){
    let movie = JSON.parse(data);
    $("#wrapper").html("");
    for (let i=0; i < movie.length; i++) {
    moviepattern(movie[i],i)
    };
    function moviepattern(mov,i){        
        $("#wrapper").append(`
    <div class="movieMain">
        <figure>
            <img src="${mov.movieImg}" alt="${mov.movieName}">
            <figcaption>${mov.movieGenre}</figcaption>
        </figure> 
        <div>
            <p class="title">${mov.movieName}</p>
            <h3>About</h3>
            <p>${mov.movieDescription}</p>
            <div class="button">
                <button class="buttonbg" id="likebutton${i}"><i class="far fa-thumbs-up"></i></button>
                <button class="likecountcss" id="likecount${i}">Likes : ${mov.likes}</button>
            </div>
        </div>
    </div>`);
    $(`#likebutton${i}`).on("click", function(){
        mov.likes++;
        $(`#likecount${i}`).text(`Likes : ${mov.likes}`);
    });}
    function compared(a,b) {
        if (a.likes < b.likes) return 1;
        else if (a.likes > b.likes) return -1;
        else return 0;
    };
    
    $("#sort").on("click", function(f) {
        // creating new Array for sorting
        let newArray = movie.slice(0);
        $("#wrapper").text("");
        newArray.sort(compared);
        for (let i=0; i < newArray.length; i++) {
            moviepattern(newArray[i],i)    
        }
    });
});