// -----------------------------
// HOME PAGE
// -----------------------------

const searchForm = document.getElementById("searchForm");

if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const query = document
            .getElementById("searchInput")
            .value
            .trim();

        window.location.href =
            `results.html?q=${encodeURIComponent(query)}`;
    });
}

// -----------------------------
// SEARCH DATABASE
// -----------------------------

const searches = {

  "best boyfriend": {
    results: [
        {
            title: "my ethan",
            description: "a very beautiful princess",
            image: "assets/ethan beauty.jpeg",
            link: "i love you"
        }
    ]
},

    "girlfriend": {
        results: [
            {
                title: "Me ❤️",
                description: "1 result found. World's cutest girlfriend.",
                image: "assets/lin flowers.jpeg",
                link: "gf"
            }
        ]
    },

    "funniest person": {
        results: [
            {
                title: "funniest person",
                description: "duh your wifey???",
                image: "assets/funny lin.jpeg",
                link: "funniest"
            }
        ]
    },

    "lin": {
        results: [
            {
                title: "supreme leader lin",
                description: "welcome to the COC",
                link: "lin"
            }
        ]
    },

    "love": {
        results: [
            {
                title: "hi ethan",
                description: "i love you hehe",
                link: "love"
            }
        ]
    },

    "ethan": {
        results: [
            {
                title: "chopped chinese chocolate chungus",
                description: "the most dangerous animal",
                image: "assets/buff ethan.jpeg",
                link: "ethan"
            }
        ]
    },

    "chopped": {
        results: [
            {
                title: "chopped city boi",
                description: "chinese",
                image: "assets/chopped chinese.jpeg",
                link: "chopped"
            }
        ]
    },

    "art": {
        results: [
            {
                title: "by artist ethan",
                description: "so talented 😳",
                image: "assets/ethan drawing.jpeg",
                link: "art"
            }
        ]
    },

    "cute": {
        results: [
            {
                title: "Did you mean:",
                description: "ME",
                link: "cute"
            }
        ]
    },

    "happy hippo": {
        results: [
            {
                title: "About happy hippo",
                description: "The world's smallest search engine. It only knows things that matter.",
                link: "happy hippo"
            }
        ]
    },


    "sexy": {
        results: [
            {
                title: "sexy dancer ethan",
                description: "looking for a job - pls hire me",
                link: "sexy"
            }
        ]
    },
      "strong": {
        results: [
            {
                title: "biceps burning",
                description: "flex",
                image: "assets/ethanstrong.jpeg",
                link: "strong"
            }
        ]
    },
     "couple": {
        results: [
            {
                title: "hehe",
                description: "this was us on day 2 i think hehe",
                image: "assets/us.jpeg",
                link: "couple" 
                }
            ]
    },
    "simp": {
        results: [
            {
                title: "the OG simp 😎",
                description: "ETHAN TU",
                image: "assets/simp.jpeg",
                link: "simp" 
                }
            ]
    },
     "best friends": {
        results: [
            {
                title: "ethan and lin",
                description: "but also the best bed friends 🛌",
                link: "bff" 
                }
            ]
    },
     "i love you": {
        results: [
            {
                title: "i love you too",
                description: "🥺",
                link: "#ily" 
                }
            ]
    },
     "hello": {
        results: [
            {
                title: "hello ethan",
                description: "if you are bored, just call me 📲",
                link: "#hello" 
                }
            ]
    },
    "hi": {
        results: [
            {
                title: "hi there",
                description: "how can i help siiiir 😳",
                link: "hi" 
                }
            ]
    },
    "tft": {
        results: [
            {
                title: "CAUTION: addiction",
                description: "i only play if they have pengu party 🐧",
                image: "assets/tft.jpeg",
                link: "tft" 
                }
            ]
    },
    "vietnam": {
        results: [
            {
                title: "the motherland that brought us together 🇻🇳",
                description: "you are still a traitor for not showing up to the COC",
                link: "vietnam" 
                }
            ]
    },
     "chocolate": {
        results: [
            {
                title: "NO‼️",
                description: "stop it 🤬",
                link: "chocolate" 
                }
            ]
    },
       "busan": {
        results: [
            {
                title: "Vlog TBD",
                description: "please be patient ... im slow 🫣",
                link: "busan" 
                }
            ]
    },
      "you are mad again": {
        results: [
            {
                title: "😣",
                description: "i'm sorry, sometimes my emotions are quite overwhelming 😞",
                link: "#" 
                }
            ]
    },
    "do you still love me": {
        results: [
            {
                title: "YES",
                description: "in case you forgot, i looooooove you my lil happy hippo 🥰",
                link: "#" 
                }
            ]
    },
     "ldr": {
        results: [
            {
                title: "🆘",
                description: "long distance relationship not nice, pls make sure gf secures green card",
                link: "ldr" 
                }
            ]
    },
     "bromance": {
        results: [
            {
                title: "adorable",
                description: "brothers",
                image: "assets/bromance.jpeg",
                link: "bromance" 
                }
            ]
    },
       "artist": {
        results: [
            {
                title: "history in the making",
                description: "nice art incoming",
                image: "assets/artist ethan.jpeg",
                link: "artist" 
                }
            ]
    },
        "cult": {
        results: [
            {
                title: "cult of community aka the COC",
                description: "welcome to the dark side, pls donate $$$",
                link: "cult" 
                }
            ]
    },
        "traitor": {
        results: [
            {
                title: "YOU",
                description: "ETHAN TU",
                link: "traitor" 
                }
            ]
    },
       "thanks": {
        results: [
            {
                title: "awwww thank you",
                description: "the way you say sounds so cute but i never know if you actually like stuff when you just say aww thanks 😭",
                link: "thanks" 
                }
            ]
    },


};

// -----------------------------
// RESULTS PAGE
// -----------------------------

const params = new URLSearchParams(window.location.search);
const query = params.get("q");
const resultsContainer = document.getElementById("results");
const resultsInput = document.getElementById("resultsSearchInput");
const resultsSearchForm = document.getElementById("resultsSearchForm");

if (resultsSearchForm) {
    resultsSearchForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const newQuery = resultsInput.value.trim();

        window.location.href =
            `results.html?q=${encodeURIComponent(newQuery)}`;
    });
}

if (resultsInput && query) {
    resultsInput.value = query;
}

if (resultsContainer) {

  const aliases = {
    "ily": "i love you",
    "bf": "best boyfriend",
    "boyfriend": "best boyfriend",
    "gf": "girlfriend",
    "girl friend": "girlfriend",
    "hippo": "happy hippo",
    "choco": "chocolate",
    "bff": "best friends",
    "coc": "cult"
};

const fixedQuery = aliases[query?.toLowerCase()] || query?.toLowerCase();

const search = searches[fixedQuery];
    if (search) {

        resultsContainer.innerHTML = "";

   search.results.forEach(result => {

    resultsContainer.innerHTML += `

        <div class="result">

            <a href="${result.link}">
                ${result.title}
            </a>

            ${result.image ? `<img src="${result.image}" class="result-image">` : ""}

            <p>
                ${result.description}
            </p>

        </div>

    `;

});
    resultsContainer.innerHTML += `

<hr style="margin:40px 0; border:none; border-top:1px solid #e0e0e0;">

<p style="margin-bottom:15px; color:#555;">
People also searched for
</p>

<div class="suggestions">

<a href="results.html?q=best%20boyfriend">best boyfriend</a>

<a href="results.html?q=love">love</a>

<a href="results.html?q=chopped">chopped</a>

<a href="results.html?q=happy%20hippo">happy hippo</a>

</div>

`;
} else {

        resultsContainer.innerHTML = `

<h2>Hmm.. happy hippo couldn't find that. 🦛 
</h2>

<p style="margin-top:20px;">
Try one of these:
</p>

<div class="suggestions">

<a href="results.html?q=best%20boyfriend">best boyfriend</a>

<a href="results.html?q=girlfriend">girlfriend</a>

<a href="results.html?q=cute">cute</a>

<a href="results.html?q=chopped">chopped</a>

<a href="results.html?q=love">love</a>

</div>

`;

    }

}