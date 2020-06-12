let movie = JSON.parse(movies);

function addMovie(movie) {
    return `
    <div class="movieMain">
        <figure>
            <img src="${movie.movieImg}" alt="${movie.movieName}">
            <figcaption>${movie.movieGenre}</figcaption>
        </figure> 
        <div>
            <p class="title">${movie.movieName}</p>
            <h3>About</h3>
            <p>${movie.movieDescription}</p>
            <div class="button">
                <button class="buttonbg" id="likebutton${i}"><i class="far fa-thumbs-up"></i></button>
                <button class="likecountcss" id="likecount${i}">${movie[i].likes}</button>
            </div>
        </div>
    </div>`
}

$(document).ready(function(){
    $("#wrapper").html("");

    for (i=0; i < movie.length; i++) {
        likeCount[i] = 0;
        let movie = movie[i];
        let build = addMovie(movie);
        $("#wrapper").append(build);

        $(`#likebutton${i}`).on("click", function(){
            likeCount[i]++;
        $(`#likecount${i}`).text(`Likes : ${likeCount[i]}`);
        });
        }       
    }
)