use gardening;
db.dropDatabase();

db.projects.insertMany([
  {
    name: "Courgette",
    commonName: "Courgette",
    growingSeason: "Summer",
    edible: true,
    indoor: false,
    favourite: false,
    inProgress: false,
    growTime: "50-60 days",
    description: "Courgettes are a useful crop and belong to the same family as marrows, pumpkins and summer squashes",
    steps: [ ["Gardening gloves", "Packet of courgette seeds", "Trowel", "Rake"],
    "Make sure the space you are going to sow is weed free, by using a trowel to remove the weeds.",

    "Prepare a square of soil about 60cm in width. Sow two or three seeds 2.5cm (1in) deep in each square.",

    "Cover the seeds with cloches or horticultural fleece and leave for two weeks.",

    "When the seedlings have developed, thin out to leave the strongest one.",

    "Courgettes are thirsty plants and need weekly watering around the plant, not on the leaves.",

    "Harvest the courgettes when they are about 10–12cm long."]
  },
  {
    name: "Papaver",
    commonName: "Poppy",
    growingSeason: "Sow in October for spring",
    edible: false,
    indoor: false,
    favourite: false,
    inProgress: false,
    growTime: "14-21 days",
    description: "This summer flower may be fleeting but they’re often big, blousy and a wonderful addition to any garden in May and June.",
    steps: [ ["Gardening gloves", "Packet of poppy seeds", "Trowel", "Rake", "watering can"],
    "You can sow these seeds outside in the place where they are going to flower, but make sure you follow the instructions on the seed packet.",

    "Rake the soil so that it is level. Decide where your row or rows of seeds will be planted.",

    "Using a hand trowel make a shallow line about as deep as a child’s thumb. Carefully sow your seeds in the row leaving a finger space between the seeds.",

    "Gently cover the seeds up and water them generously.",

    "Watch as your seeds grow into plants. You may need to protect your seedlings with horticultural fleece if the weather is frosty.",

    "Enjoy the flowers in the summer, the insects will like them as much as you. The dried seed heads can be used for decorations."]
  },
  {
    name: "Helianthus",
    commonName: "Sunflower",
    growingSeason: "Sow in spring",
    edible: false,
    indoor: false,
    favourite: false,
    inProgress: false,
    growTime: "14-21 days",
    description: "Sunflowers can be grown in yellows, dark reds and orange colours.",
    steps: [ ["Gardening gloves", "Packet of sunflower seeds", "Trowel", "Rake"],
    "Step 2",

    "Step 3",

    "Step 4",

    "Step 5",

    "Step 6",

    "Step 7"]
  },
  {
    name: "Mint",
    commonName: "Mint",
    growingSeason: "Sow in spring",
    edible: true,
    indoor: true,
    favourite: false,
    inProgress: false,
    growTime: "14-21 days",
    description: "Mint is a perennial herb grown for its leaves.",
    steps: [ ["Gardening gloves", "Packet of sunflower seeds", "Trowel", "Rake"],
    "Step 2",

    "Step 3",

    "Step 4",

    "Step 5",

    "Step 6",

    "Step 7"]
  },
  {
    name: "Monstera deliciosa",
    commonName: "Swiss cheese plant",
    growingSeason: "Sow in spring",
    edible: false,
    indoor: true,
    favourite: false,
    inProgress: false,
    growTime: "14-21 days",
    description: "The Swiss cheese plant, Monstera deliciosa, is a well-loved houseplant.",
    steps: [ ["Gardening gloves", "Packet of sunflower seeds", "Trowel", "Rake"],
    "Step 2",

    "Step 3",

    "Step 4",

    "Step 5",

    "Step 6",

    "Step 7"]
  },
  {
    name: "Gerbera jamesonii",
    commonName: "Barberton daisy",
    growingSeason: "Sow in spring",
    edible: false,
    indoor: true,
    favourite: false,
    inProgress: false,
    growTime: "14-21 days",
    description: "The large range of striking flower colors has enabled this flowering pot plant to become a popular house plant choice for a number of years.",
    steps: [ ["Gardening gloves", "Packet of sunflower seeds", "Trowel", "Rake"],
    "Step 2",

    "Step 3",

    "Step 4",

    "Step 5",

    "Step 6",

    "Step 7"]
  },
  {
    name: "Lepidium sativum",
    commonName: "Cress",
    growingSeason: "Sow in spring",
    edible: true,
    indoor: true,
    favourite: false,
    inProgress: false,
    growTime: "14-21 days",
    description: "Garden cress is a fast growing cool-weather plant.",
    steps: [ ["Gardening gloves", "Packet of sunflower seeds", "Trowel", "Rake"],
    "Step 2",

    "Step 3",

    "Step 4",

    "Step 5",

    "Step 6",

    "Step 7"]
  }
])
