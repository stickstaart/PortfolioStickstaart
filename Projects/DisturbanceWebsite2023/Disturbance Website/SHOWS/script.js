const pastShows = [
  {
    date: "11-05-2003",
    country: "NL",
    city: "Den Bosch",
    venue: "De Boulevard",
    name: "Oubollig Den Bosch Festival",
    tour: "",
    otherbands: "Nervous Boys, Blok 1A, The Lager Louts",
  },

  {
    date: "11-07-2003",
    country: "DE",
    city: "Den Bosch",
    venue: "De Boulevard",
    name: "adshfgshh Festival",
    tour: "",
    otherbands: "Flog",
  },

  {
    date: "11-09-2003",
    country: "IT",
    city: "Den Bosch",
    venue: "De Boulevard",
    name: "ffgff Festival",
    tour: "",
    otherbands: "The Lager Louts",
  },
];

newData = () => {
  console.log(pastShows);
  pastShows.forEach((item, index) => {
    item.id = index + 1;
  });
  console.log(pastShows);
  console.log(JSON.stringify(pastShows));
};

newData();
