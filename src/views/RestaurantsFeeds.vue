<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments"/>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
const dummyData = {
  restaurants: [
    {
      "id": 1,
      "name": "Louie Kunze",
      "tel": "1-188-499-8185",
      "address": "6875 Brekke Brook",
      "opening_hours": "08:00",
      "description": "Qui minus quis dolore alias et. Dolor ut et.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=12.923558837625905",
      "viewCounts": 0,
      "createdAt": "2022-09-15T16:02:37.000Z",
      "updatedAt": "2022-09-15T16:02:37.000Z",
      "CategoryId": 3,
      "Category": {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z"
      }
    },
    {
      "id": 2,
      "name": "Dahlia Ankunding",
      "tel": "052.465.8024",
      "address": "75167 Nichole Freeway",
      "opening_hours": "08:00",
      "description": "Et cumque doloremque dignissimos provident quis.\nEst porro eum accusamus animi neque maiores.\nUnde ipsam molestiae corporis at temporibus ad.\nId rerum amet ut tempore dolores est ea provident atque.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=44.43780352485172",
      "viewCounts": 0,
      "createdAt": "2022-09-15T16:02:37.000Z",
      "updatedAt": "2022-09-15T16:02:37.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z"
      }
    },
    {
      "id": 3,
      "name": "Korey Will",
      "tel": "975-772-7758",
      "address": "179 Hansen Roads",
      "opening_hours": "08:00",
      "description": "consequatur et corporis",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=76.23545314339677",
      "viewCounts": 0,
      "createdAt": "2022-09-15T16:02:37.000Z",
      "updatedAt": "2022-09-15T16:02:37.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z"
      }
    },
    {
      "id": 4,
      "name": "Chandler O'Hara",
      "tel": "1-522-981-1260 x03892",
      "address": "09884 Considine Island",
      "opening_hours": "08:00",
      "description": "Aspernatur fuga rem consectetur tempore consequatur facilis voluptas et. Neque earum minima delectus in praesentium eos ea doloribus.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=43.41272690573818",
      "viewCounts": 0,
      "createdAt": "2022-09-15T16:02:37.000Z",
      "updatedAt": "2022-09-15T16:02:37.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z"
      }
    },
    {
      "id": 5,
      "name": "Janick Gottlieb",
      "tel": "(906) 612-9105",
      "address": "49087 Henry Forges",
      "opening_hours": "08:00",
      "description": "Non reiciendis odit ullam voluptatibus est qui impedit doloribus aut. Et minus omnis debitis provident voluptatibus consequatur nostrum similique. Veniam nihil illum excepturi. Numquam fugiat ut hic eligendi totam nulla voluptates et. Velit excepturi dolore esse quisquam beatae voluptatibus.\n \rCupiditate delectus non eaque ut. Voluptas voluptas dolore. Culpa doloribus qui omnis temporibus sunt.\n \rMolestiae eum a aut est porro aliquid quas eum quibusdam. Consequatur dolorum omnis libero. Quas earum quis architecto dolore qui perferendis totam qui. Suscipit animi aliquam facere aliquid distinctio quas enim vel vero. Aut aut beatae nesciunt sit recusandae.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=96.93654185389855",
      "viewCounts": 0,
      "createdAt": "2022-09-15T16:02:37.000Z",
      "updatedAt": "2022-09-15T16:02:37.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z"
      }
    },
    {
      "id": 6,
      "name": "Ana Hane III",
      "tel": "(802) 367-9755",
      "address": "4194 Runolfsdottir Center",
      "opening_hours": "08:00",
      "description": "Dolor reprehenderit enim libero neque. Voluptas laudantium provident et incidunt est deserunt nemo ratione. Perferendis doloremque repellendus nesciunt modi sunt aut.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=45.082407152851964",
      "viewCounts": 0,
      "createdAt": "2022-09-15T16:02:37.000Z",
      "updatedAt": "2022-09-15T16:02:37.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z"
      }
    },
    {
      "id": 7,
      "name": "Raquel Doyle",
      "tel": "(105) 753-6547",
      "address": "95707 Dwight Shore",
      "opening_hours": "08:00",
      "description": "omnis",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=84.03043124527738",
      "viewCounts": 0,
      "createdAt": "2022-09-15T16:02:37.000Z",
      "updatedAt": "2022-09-15T16:02:37.000Z",
      "CategoryId": 5,
      "Category": {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z"
      }
    },
    {
      "id": 8,
      "name": "Fidel Deckow",
      "tel": "020.179.8560 x86472",
      "address": "094 Eula Plaza",
      "opening_hours": "08:00",
      "description": "Nam dolor tempora deserunt. Animi commodi dolores unde occaecati inventore qui blanditiis rerum rerum. Cupiditate minus velit ut repellat perspiciatis sint autem et amet. Et adipisci autem libero quo et fugit optio. Nesciunt voluptas saepe eos similique harum id qui id. Ea itaque dignissimos quae aut.\n \rConsectetur facere nam illo dolorum id sed dolore. Dignissimos facilis et quia atque distinctio quam. Asperiores sint quia veniam rem. Alias sit delectus.\n \rNecessitatibus facere corporis quo et. Nesciunt molestias omnis omnis beatae officia. Esse sit vel nisi ratione inventore voluptatem. Laboriosam repudiandae corrupti molestiae inventore. Rerum non non nisi aut expedita. Sunt rerum corporis tenetur veniam.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=16.53900261141832",
      "viewCounts": 0,
      "createdAt": "2022-09-15T16:02:37.000Z",
      "updatedAt": "2022-09-15T16:02:37.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z"
      }
    },
    {
      "id": 9,
      "name": "Rafael Reinger",
      "tel": "311.549.8948",
      "address": "86884 Dorcas Extensions",
      "opening_hours": "08:00",
      "description": "Fugit debitis non itaque reiciendis velit nihil sequi labore inventore.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.59790276399855",
      "viewCounts": 0,
      "createdAt": "2022-09-15T16:02:37.000Z",
      "updatedAt": "2022-09-15T16:02:37.000Z",
      "CategoryId": 1,
      "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z"
      }
    },
    {
      "id": 10,
      "name": "Benedict Reilly",
      "tel": "156-581-9459 x65546",
      "address": "85726 Hand Stravenue",
      "opening_hours": "08:00",
      "description": "rerum voluptas veritatis",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=15.711995305218696",
      "viewCounts": 0,
      "createdAt": "2022-09-15T16:02:37.000Z",
      "updatedAt": "2022-09-15T16:02:37.000Z",
      "CategoryId": 2,
      "Category": {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z"
      }
    }
  ],
  comments: [
    {
      "id": 7,
      "text": "Sit architecto consequatur aut nemo et cupiditate.",
      "UserId": 1,
      "RestaurantId": 7,
      "createdAt": "2022-09-15T16:02:37.000Z",
      "updatedAt": "2022-09-15T16:02:37.000Z",
      "User": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "password": "$2a$10$cp7xO5HBGdSWRY9m3vyB4ea6jrVlrTfEP5CdvdPS.kw78Km1PSxXK",
        "isAdmin": true,
        "image": null,
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z"
      },
      "Restaurant": {
        "id": 7,
        "name": "Raquel Doyle",
        "tel": "(105) 753-6547",
        "address": "95707 Dwight Shore",
        "opening_hours": "08:00",
        "description": "omnis",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=84.03043124527738",
        "viewCounts": 0,
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z",
        "CategoryId": 5
      }
    },
    {
      "id": 26,
      "text": "Qui dolores eos commodi facilis voluptatem officia quo.",
      "UserId": 1,
      "RestaurantId": 26,
      "createdAt": "2022-09-15T16:02:37.000Z",
      "updatedAt": "2022-09-15T16:02:37.000Z",
      "User": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "password": "$2a$10$cp7xO5HBGdSWRY9m3vyB4ea6jrVlrTfEP5CdvdPS.kw78Km1PSxXK",
        "isAdmin": true,
        "image": null,
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z"
      },
      "Restaurant": {
        "id": 26,
        "name": "Molly D'Amore",
        "tel": "1-221-559-3756 x118",
        "address": "513 VonRueden Mount",
        "opening_hours": "08:00",
        "description": "Aliquam nobis qui vitae inventore in. Vel eum nostrum. Quis a mollitia minus occaecati illo quam. Enim culpa nobis molestiae est ea. Recusandae sunt dolor recusandae fuga quia.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=73.65912982899904",
        "viewCounts": 0,
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z",
        "CategoryId": 5
      }
    },
    {
      "id": 42,
      "text": "Aut enim sapiente dolore est consequuntur quo fugit tenetur vitae.",
      "UserId": 1,
      "RestaurantId": 42,
      "createdAt": "2022-09-15T16:02:37.000Z",
      "updatedAt": "2022-09-15T16:02:37.000Z",
      "User": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "password": "$2a$10$cp7xO5HBGdSWRY9m3vyB4ea6jrVlrTfEP5CdvdPS.kw78Km1PSxXK",
        "isAdmin": true,
        "image": null,
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z"
      },
      "Restaurant": {
        "id": 42,
        "name": "Rubie Ratke DVM",
        "tel": "1-032-331-7233 x1075",
        "address": "61362 Jenkins Manor",
        "opening_hours": "08:00",
        "description": "Perspiciatis sunt ex consectetur officia. Et in vitae sapiente. Ea at iste.\n \rFugiat qui voluptatum reprehenderit ut odit exercitationem iste illo. Ad debitis doloribus facilis est minus error. Sint omnis est sed ipsum perferendis iste aspernatur dolorum.\n \rQuae accusamus sunt ipsum ut. Est omnis et quo minus voluptatibus dolorem quia repudiandae. Maxime doloribus facilis laudantium natus atque quia et quis minus.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=57.117619363005545",
        "viewCounts": 0,
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z",
        "CategoryId": 4
      }
    },
    {
      "id": 66,
      "text": "Magnam nihil non cum.",
      "UserId": 1,
      "RestaurantId": 16,
      "createdAt": "2022-09-15T16:02:37.000Z",
      "updatedAt": "2022-09-15T16:02:37.000Z",
      "User": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "password": "$2a$10$cp7xO5HBGdSWRY9m3vyB4ea6jrVlrTfEP5CdvdPS.kw78Km1PSxXK",
        "isAdmin": true,
        "image": null,
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z"
      },
      "Restaurant": {
        "id": 16,
        "name": "Jerome Runte",
        "tel": "1-421-366-8334",
        "address": "7738 Candido Union",
        "opening_hours": "08:00",
        "description": "Iure amet nisi. Deleniti nesciunt ratione mollitia. Dolor enim animi ab labore. Ut sed est. Dolor omnis consectetur ut provident ab. Temporibus voluptatum ipsa.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=31.32538825292077",
        "viewCounts": 0,
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z",
        "CategoryId": 2
      }
    },
    {
      "id": 86,
      "text": "Cupiditate iure quibusdam est numquam optio.",
      "UserId": 1,
      "RestaurantId": 36,
      "createdAt": "2022-09-15T16:02:37.000Z",
      "updatedAt": "2022-09-15T16:02:37.000Z",
      "User": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "password": "$2a$10$cp7xO5HBGdSWRY9m3vyB4ea6jrVlrTfEP5CdvdPS.kw78Km1PSxXK",
        "isAdmin": true,
        "image": null,
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z"
      },
      "Restaurant": {
        "id": 36,
        "name": "Dr. Missouri Beatty",
        "tel": "1-737-855-9052",
        "address": "36156 McDermott Wall",
        "opening_hours": "08:00",
        "description": "Sunt voluptatum saepe nihil modi. Voluptas beatae quis voluptatem dolor. Est voluptas velit cum hic impedit et iusto. Sed facere qui. Explicabo expedita aut repellat voluptatum eligendi rerum vitae et. Explicabo laborum consequatur.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.5700977747334486",
        "viewCounts": 0,
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z",
        "CategoryId": 3
      }
    },
    {
      "id": 111,
      "text": "In id possimus reprehenderit unde quia tempore aut.",
      "UserId": 1,
      "RestaurantId": 11,
      "createdAt": "2022-09-15T16:02:37.000Z",
      "updatedAt": "2022-09-15T16:02:37.000Z",
      "User": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "password": "$2a$10$cp7xO5HBGdSWRY9m3vyB4ea6jrVlrTfEP5CdvdPS.kw78Km1PSxXK",
        "isAdmin": true,
        "image": null,
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z"
      },
      "Restaurant": {
        "id": 11,
        "name": "Chelsie Rutherford",
        "tel": "1-100-243-9262 x400",
        "address": "185 Lockman Place",
        "opening_hours": "08:00",
        "description": "expedita",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=24.639573992594222",
        "viewCounts": 0,
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z",
        "CategoryId": 4
      }
    },
    {
      "id": 136,
      "text": "Impedit dicta quia perspiciatis distinctio.",
      "UserId": 1,
      "RestaurantId": 36,
      "createdAt": "2022-09-15T16:02:37.000Z",
      "updatedAt": "2022-09-15T16:02:37.000Z",
      "User": {
        "id": 1,
        "name": "root",
        "email": "root@example.com",
        "password": "$2a$10$cp7xO5HBGdSWRY9m3vyB4ea6jrVlrTfEP5CdvdPS.kw78Km1PSxXK",
        "isAdmin": true,
        "image": null,
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z"
      },
      "Restaurant": {
        "id": 36,
        "name": "Dr. Missouri Beatty",
        "tel": "1-737-855-9052",
        "address": "36156 McDermott Wall",
        "opening_hours": "08:00",
        "description": "Sunt voluptatum saepe nihil modi. Voluptas beatae quis voluptatem dolor. Est voluptas velit cum hic impedit et iusto. Sed facere qui. Explicabo expedita aut repellat voluptatum eligendi rerum vitae et. Explicabo laborum consequatur.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.5700977747334486",
        "viewCounts": 0,
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z",
        "CategoryId": 3
      }
    },
    {
      "id": 2,
      "text": "Ipsum unde dolor doloremque deleniti qui adipisci sapiente.",
      "UserId": 2,
      "RestaurantId": 2,
      "createdAt": "2022-09-15T16:02:37.000Z",
      "updatedAt": "2022-09-15T16:02:37.000Z",
      "User": {
        "id": 2,
        "name": "user1",
        "email": "user1@example.com",
        "password": "$2a$10$6rYO0nDsAu21d3DOgWZrkebrA084lxs6ndKL9bENum0UzIhElF8JS",
        "isAdmin": false,
        "image": null,
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z"
      },
      "Restaurant": {
        "id": 2,
        "name": "Dahlia Ankunding",
        "tel": "052.465.8024",
        "address": "75167 Nichole Freeway",
        "opening_hours": "08:00",
        "description": "Et cumque doloremque dignissimos provident quis.\nEst porro eum accusamus animi neque maiores.\nUnde ipsam molestiae corporis at temporibus ad.\nId rerum amet ut tempore dolores est ea provident atque.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=44.43780352485172",
        "viewCounts": 0,
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z",
        "CategoryId": 5
      }
    },
    {
      "id": 33,
      "text": "Tempore consectetur dolores maiores cumque dolor rerum.",
      "UserId": 2,
      "RestaurantId": 33,
      "createdAt": "2022-09-15T16:02:37.000Z",
      "updatedAt": "2022-09-15T16:02:37.000Z",
      "User": {
        "id": 2,
        "name": "user1",
        "email": "user1@example.com",
        "password": "$2a$10$6rYO0nDsAu21d3DOgWZrkebrA084lxs6ndKL9bENum0UzIhElF8JS",
        "isAdmin": false,
        "image": null,
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z"
      },
      "Restaurant": {
        "id": 33,
        "name": "Dr. Fausto Runte",
        "tel": "833.421.4718 x097",
        "address": "416 Leif Summit",
        "opening_hours": "08:00",
        "description": "Iure maiores laudantium modi aspernatur nobis rerum aliquid. Et quasi deserunt iure suscipit non iusto voluptas. Aut est aut minus sed enim. Sit nemo architecto explicabo ipsum sit aut dolores excepturi. Error sunt sit quo qui. Cum ab sit earum minus sapiente tempore.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=24.834566912913168",
        "viewCounts": 0,
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z",
        "CategoryId": 3
      }
    },
    {
      "id": 67,
      "text": "Doloribus incidunt dolorem aperiam deserunt consequatur eligendi.",
      "UserId": 2,
      "RestaurantId": 17,
      "createdAt": "2022-09-15T16:02:37.000Z",
      "updatedAt": "2022-09-15T16:02:37.000Z",
      "User": {
        "id": 2,
        "name": "user1",
        "email": "user1@example.com",
        "password": "$2a$10$6rYO0nDsAu21d3DOgWZrkebrA084lxs6ndKL9bENum0UzIhElF8JS",
        "isAdmin": false,
        "image": null,
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z"
      },
      "Restaurant": {
        "id": 17,
        "name": "Mr. Ocie Lesch",
        "tel": "1-861-811-4200 x965",
        "address": "4593 Vernon Parks",
        "opening_hours": "08:00",
        "description": "Nesciunt adipisci dolores consequatur eos maxime dolorum quis veritatis sequi. Occaecati fuga debitis beatae ipsa ipsam mollitia. Architecto quam maiores sunt omnis. Deserunt fugit et quia explicabo dolor expedita dolorum non. Temporibus sit quo temporibus est id ut voluptate quis dolore. Officiis porro fugit molestiae quia in incidunt.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=97.88552468855072",
        "viewCounts": 0,
        "createdAt": "2022-09-15T16:02:37.000Z",
        "updatedAt": "2022-09-15T16:02:37.000Z",
        "CategoryId": 4
      }
    }
  ]
}
import NavTabs from '../components/Restaurants/NavTabs.vue'
import NewestRestaurants from '../components/RestaurantsFeeds/NewestRestaurants.vue';
import NewestComments from '../components/RestaurantsFeeds/NewestComments.vue';
export default {
  name: 'RestaurantFeeds',
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
},
  data() {
    return {
      restaurants: [],
      comments: []
    }
  },
  created() {
    this.fetchFeeds()
  },
  methods: {
    fetchFeeds() {
      const { restaurants, comments } = dummyData
      this.restaurants = restaurants
      this.comments = comments.filter(comment => comment.Restaurant && comment.text)
    }
  }
}
</script>
