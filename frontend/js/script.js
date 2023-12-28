const { createApp } = Vue;

createApp({
    data() {
        return {
            searchQuery: '',
            searchGenre: '',
            Ricerca: 1,
            ascendingOrder: true,
            modifica: false,
            Titolo: '',
            Genere: '',
            Tempo: '',
            Difficolta: '',
            editingIndex: -1,
            editedItem: {
            title: '',
            genre: '',
            time: '',
            difficulty: ''
        },
            games: [{
              title: "Nier Automata",
              genre: "Action JRPG",
              time: parseInt(60),
              difficulty: "3"
            },
            {
              title: "Final Fantasy Crystal Chronicles",
              genre: "Action JRPG",
              time: parseInt(48),
              difficulty: "3"
            },
            {
              title: "Stranger of Paradise: Final Fantasy Origin",
              genre: "Action JRPG",
              time: parseInt(40),
              difficulty: "4"
            },
            {
              title: "Final Fantasy Theatrhythm Final Bar",
              genre: "Rhythm",
              time: parseInt(50),
              difficulty: "2"
            },
            {
              title: "Yakuza 7",
              genre: "JRPG",
              time: parseInt(80),
              difficulty: "5"
            },
            {
              title: "Demon's Souls",
              genre: "Souls Like",
              time: parseInt(40),
              difficulty: "7"
            },
            {
              title: "Elden Ring",
              genre: "Souls Like",
              time: parseInt(65),
              difficulty: "7"
            },
            {
              title: "Lise of P.",
              genre: "Souls Like",
              time: parseInt(50),
              difficulty: "7"
            },
            {
              title: "Persona 3 Portable",
              genre: "JRPG",
              time: parseInt(80),
              difficulty: "5"
            },
            {
              title: "Persona 4 Golden",
              genre: "JRPG",
              time: parseInt(120),
              difficulty: "4"
            },
            {
              title: "Persona 5 Royal",
              genre: "JRPG",
              time: parseInt(120),
              difficulty: "2"
            },
            {
              title: "Persona 5 Strike",
              genre: "Action JRPG, Hack and Slash",
              time: parseInt(50),
              difficulty: "4"
            },
            {
              title: "Red Dead Redemption 2",
              genre: "Action-Adventure",
              time: parseInt(200),
              difficulty: "5"
            },
            {
              title: "The Elder Scrolls V: Skyrim",
              genre: "RPG",
              time: parseInt(120),
              difficulty: "5"
            },
            {
              title: "The Witcher 3: Blood Hunt",
              genre: "RPG",
              time: parseInt(110),
              difficulty: "7"
            },
            {
              title: "The Last of Us Part I",
              genre: "Action-Adventure",
              time: parseInt(15),
              difficulty: "3"
            },
            {
              title: "Assassin's Creed Valhalla",
              genre: "Action RPG",
              time: parseInt(100),
              difficulty: "3"
            },
            {
              title: "Far Cry 6",
              genre: "First-Person Shooter",
              time: parseInt(30),
              difficulty: "3"
            },
            {
              title: "Life Is Strange 2",
              genre: "Graphic Adventure",
              time: parseInt(13),
              difficulty: "2"
            },
            {
              title: "Life is Strange: True Colors",
              genre: "Graphic Adventure",
              time: parseInt(6),
              difficulty: "2"
            },
            {
              title: "Cuphead",
              genre: "Run and Gun",
              time: parseInt(30),
              difficulty: "8"
            },
            {
              title: "Detroit: Become Human",
              genre: "Graphic Adventure",
              time: parseInt(20),
              difficulty: "3"
            },
            {
              title: "Shadow of The Colossus",
              genre: "Action-Adventure",
              time: parseInt(40),
              difficulty: "6"
            },
            {
              title: "The Last Guardian",
              genre: "Action-Adventure",
              time: parseInt(25),
              difficulty: "6"
            },
            {
              title: "Until Dawn",
              genre: "Graphic Adventure",
              time: parseInt(15),
              difficulty: "2"
            },
            ]
        };
    },
    computed: {
      filteredGames() {
        const query = this.searchQuery.toLowerCase();
        return this.games.filter(game => game.title.toLowerCase().includes(query));
      },
      filteredGenre() {
        const queryx = this.searchGenre.toLowerCase();
        console.log(queryx);
        return this.games.filter(game => game.genre.toLowerCase().includes(queryx));
      },
    },
  methods: {
      sortGames() {
      // Cambia l'ordine in base alla variabile di stato
      if (this.ascendingOrder == true) {
          // Ordine ascendente
          this.games.sort((a, b) => a.title.localeCompare(b.title));
      } else {
          // Ordine discendente
          this.games.sort((a, b) => b.title.localeCompare(a.title));
      }
      this.ascendingOrder = !this.ascendingOrder;
    },
    sortgenre() {
      // Cambia l'ordine in base alla variabile di stato
      if (this.ascendingOrder == true) {
        // Ordine ascendente
        this.games.sort((a, b) => a.genre.localeCompare(b.genre));
    } else {
        // Ordine discendente
        this.games.sort((a, b) => b.genre.localeCompare(a.genre));
    }
    this.ascendingOrder = !this.ascendingOrder;
  },
  sortTime() {
    if (this.ascendingOrder) {
      // Ordine ascendente
      this.games.sort((a, b) => a.time - b.time);
    } else {
      // Ordine discendente
      this.games.sort((a, b) => b.time - a.time);
    }
    this.ascendingOrder = !this.ascendingOrder;
  },
sortDiff() {
  if (this.ascendingOrder) {
    // Ordine ascendente
    this.games.sort((a, b) => a.difficulty - b.difficulty);
  } else {
    // Ordine discendente
    this.games.sort((a, b) => b.difficulty - a.difficulty);
  }
  this.ascendingOrder = !this.ascendingOrder;
},
pushArray(){
  if (isNaN(this.Difficolta) || this.Difficolta < 1 || this.Difficolta > 10) {
    alert('Il campo Difficoltà deve essere un numero compreso tra 1 e 10.')
    }else if(isNaN(this.Tempo) || this.Tempo > 1000){
      alert('Il campo Tempo deve essere un numero o non superiore a 999 ore.')
    }
    else{
  this.games.push({ title: this.Titolo, genre: this.Genere , time: this.Tempo, difficulty: this.Difficolta});
  this.Titolo = '',
  this.Genere = '',
  this.Tempo = '',
  this.Difficolta= '';
};
  

},
  deleteGame(index) {
    if (window.confirm('Sei sicuro di voler eliminare questo gioco?')) {
      // Rimuovi l'elemento dall'array se l'utente conferma
      this.games.splice(index, 1);
  }

},
modGame(index){
   this.modifica = true;
   this.editingIndex = index;

            // Inizializza i dati modificati con i dati dell'elemento in modifica
            this.editedItem = { ...this.games[index] };
},
saveEdit(index) {
  if (isNaN(this.editedItem.difficulty) || this.editedItem.difficulty < 1 || this.editedItem.difficulty > 10) {
    alert('Il campo Difficoltà deve essere un numero compreso tra 1 e 10.')
    }else if(isNaN(this.editedItem.time) || this.editedItem.time > 1000){
      alert('Il campo Tempo deve essere un numero o non superiore a 999 ore.')
    }
    else{
  // Aggiorna l'array con i dati modificati
  this.games.splice(index, 1, this.editedItem);
  // Disattiva la modalità di modifica
  this.modifica = false;
  this.editingIndex = -1;
  // Resetta i dati modificati
  this.editedItem = {
      title: '',
      genre: '',
      time: '',
      difficulty: ''
  };
}}, 
}
}).mount('#app');
