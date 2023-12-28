let games = [
  {
    id: "1",
    title: "Leanne Graham",
    platform: ["PC", "X-Box", "PSP"],
  },
  {
    id: "2",
    title: "Ervin Howell",
    platform: ["PC", "X-Box", "PSP"],
  },
  {
    id: "3",
    title: "Clementine Bauch",
    platform: ["PSP"],
  },
  {
    id: "4",
    title: "Patricia Lebsack",
    platform: ["PS5", "PS4"],
  },
  {
    id: "5",
    title: "Chelsey Dietrich",
    platform: ["Switch", "PC", "X-Box", "PSP"],
  },
  {
    id: "6",
    title: "Mrs. Dennis Schulist",
    platform: ["Switch"],
  },
  {
    id: "7",
    title: "Kurtis Weissnat",
    platform: ["PS5", "PSP"],
  },
  {
    id: "8",
    title: "Nicholas Runolfsdottir V",
    platform: ["PSP"],
  },
  {
    id: "9",
    title: "Glenna Reichert",
    platform: ["PC"],
  },
  {
    id: "10",
    title: "Clementina DuBuque",
    platform: ["PC", "X-Box"],
  },
];

let authors = [
  {
    id: "1",
    name: "Clementina DuBuque",
    verified: true,
  },
  {
    id: "2",
    name: "Jessy Hallad",
    verified: false,
  },
  {
    id: "3",
    name: "Sincar Latino",
    verified: true,
  },
  {
    id: "4",
    name: "John DOe",
    verified: false,
  },
  {
    id: "5",
    name: "Jenny Doe",
    verified: false,
  },
];

let reviews = [
  {
    id: "1",
    rating: 10,
    content: "true",
    author_id: "1",
    game_id: "1",
  },
  {
    id: "2",
    rating: 2,
    content: "Lorem",
    author_id: "2",
    game_id: "1",
  },
  {
    id: "3",
    rating: 6,
    content: "Good",
    author_id: "2",
    game_id: "2",
  },
  {
    id: "4",
    rating: 7,
    content: "Great",
    author_id: "3",
    game_id: "2",
  },
  {
    id: "5",
    rating: 8,
    content: "Fine",
    author_id: "3",
    game_id: "3",
  },
  {
    id: "6",
    rating: 6,
    content: "Best",
    author_id: "4",
    game_id: "5",
  },
  {
    id: "7",
    rating: 9,
    content: "Great",
    author_id: "5",
    game_id: "6",
  },
];

export default { games, authors, reviews };
