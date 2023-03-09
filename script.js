var gameList = [
    {
        "title": "Counter-Strike: Global Offensive",
        "price": 0.00,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "Dota 2",
        "price": 0.00,
        "genre": "MOBA",
        "rating": 3
    },
    {
        "title": "Goose Goose Duck",
        "price": 4.99,
        "genre": "Action",
        "rating": 5
    },
    {
        "title": "Apex Legends",
        "price": 0.00,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "PUBG: BATTLEGROUNDS",
        "price": 29.99,
        "genre": "FPS",
        "rating": 3
    },
    {
        "title": "Lost Ark",
        "price": 49.99,
        "genre": "Action",
        "rating": 1
    },
    {
        "title": "Grand Theft Auto V",
        "price": 29.99,
        "genre": "FPS",
        "rating": 3
    },
    {
        "title": "Call of Duty®: Modern Warfare® II | Warzone™ 2.0",
        "price": 19.99,
        "genre": "FPS",
        "rating": 3
    },
    {
        "title": "Team Fortress 2",
        "price": 0.00,
        "genre": "FPS",
        "rating": 5
    },
    {
        "title": "Rust",
        "price": 39.99,
        "genre": "Action",
        "rating": 3
    },
    {
        "title": "Unturned",
        "price": 0.00,
        "genre": "RPG",
        "rating": 1
    },
    {
        "title": "ELDEN RING",
        "price": 59.99,
        "genre": "RPG",
        "rating": 5
    },
    {
        "title": "ARK: Survival Evolved",
        "price": 10.00,
        "genre": "RPG",
        "rating": 1
    },
    {
        "title": "War Thunder",
        "price": 0.00,
        "genre": "Simulation",
        "rating": 2
    },
    {
        "title": "Sid Meier's Civilization VI",
        "price": 29.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "Football Manager 2023",
        "price": 59.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "Warframe",
        "price": 0.00,
        "genre": "Looter-shooter",
        "rating": 3
    },
    {
        "title": "EA SPORTS™ FIFA 23",
        "price": 59.99,
        "genre": "Sport",
        "rating": 1
    },
    {
        "title": "Destiny 2",
        "price": 0.00,
        "genre": "FPS",
        "rating": 5
    },
    {
        "title": "Red Dead Redemption 2",
        "price": 59.99,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Tom Clancy's Rainbow Six Siege",
        "price": 19.99,
        "genre": "Simulation",
        "rating": 3
    },
    {
        "title": "The Witcher 3: Wild Hunt",
        "price": 39.99,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Terraria",
        "price": 9.99,
        "genre": "Sandbox",
        "rating": 4
    },
    {
        "title": "Stardew Valley",
        "price": 14.99,
        "genre": "Sandbox",
        "rating": 4
    },
    {
        "title": "Left 4 Dead 2",
        "price": 9.99,
        "genre": "FPS",
        "rating": 4
    },
    {
        "title": "Don't Starve Together",
        "price": 5.09,
        "genre": "RPG",
        "rating": 3
    },
    {
        "title": "MIR4",
        "price": 19.99,
        "genre": "RPG",
        "rating": 3
    },
    {
        "title": "PAYDAY 2",
        "price": 9.99,
        "genre": "Action",
        "rating": 2
    },
    {
        "title": "Path of Exile",
        "price": 0.00,
        "genre": "RPG",
        "rating": 4
    },
    {
        "title": "Project Zomboid",
        "price": 14.99,
        "genre": "Simulation",
        "rating": 4
    },
    {
        "title": "Valheim",
        "price": 19.99,
        "genre": "Sandbox",
        "rating": 5
    },
    {
        "title": "DayZ",
        "price": 44.99,
        "genre": "Simulation",
        "rating": 3
    }
]

function createList(){
    const gamesList = document.getElementById("gamesList");
    for(var i = 0; i < gameList.length; i++){
        var gameListContainer = document.createElement('div');
        var addButton = document.createElement('button');
        var game = document.createElement('div');
        var gameTop = document.createElement('div');
        var gameBottom = document.createElement('div');
        var gameTitle = document.createElement('p');
        var gamePrice = document.createElement('p');
        var gameGenre = document.createElement('p');
        var gameRating = document.createElement('p');
    
        gameTop.setAttribute('class', 'gameContainer');
        gameBottom.setAttribute('class', 'gameContainer');
    
        addButton.setAttribute('class', 'addButton')
        game.setAttribute('class', 'games');
        gameListContainer.setAttribute('class', `gameListContainer`);
           
        gameTitle.setAttribute('class', 'gameP');
        gameTitle.setAttribute('id', `gameTitle${i+1}`);
        gamePrice.setAttribute('class', 'gameP');
        gamePrice.setAttribute('id', `gamePrice${i+1}`);
        gameGenre.setAttribute('class', 'gameP');
        gameGenre.setAttribute('id', `gameGenre${i+1}`);
        gameRating.setAttribute('class', 'gameP');
        gameRating.setAttribute('id', `gameRating${i+1}`);
    
        gameTitle.innerHTML = `${gameList[i]['title']}`;
        gamePrice.innerHTML = `$${gameList[i]['price']}`;
        gameGenre.innerHTML = `genre: ${gameList[i]['genre']}`;
        gameRating.innerHTML = `rating: ${gameList[i]['rating']}/5`;
        addButton.innerHTML = 'Add to cart';
    
        gameTop.appendChild(gameTitle);
        gameTop.appendChild(gamePrice);
        gameBottom.appendChild(gameGenre);
        gameBottom.appendChild(gameRating);
    
        game.appendChild(gameTop);
        game.appendChild(gameBottom);
        
        gameListContainer.appendChild(addButton);
        gameListContainer.appendChild(game);
    
        gamesList.appendChild(gameListContainer);
    }
}

function filter(){
    var filterDiv = document.getElementById('filterDiv');
    filterDiv.style.display = 'none';
    var filterButton = document.getElementById('filterButton');
    filterButton.addEventListener('click', function(){
        filterDiv.style.display = 'flex';
    }) 
}	

createList();
filter();

var bereken = document.getElementById('bereken');
bereken.addEventListener('click', function(){
    const gamePicker = document.getElementById('gamePicker');
    gamePicker.style.display = 'none';
})