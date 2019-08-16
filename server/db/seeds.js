use gardening;
db.dropDatabase();

db.projects.insertMany([
  {
    name: "Courgette",
    commonName: "Courgette",
    growingSeason: "Summer",
    edible: true,
    indoor: false,
    growTime: "50-60 days",
    description: "Courgettes are a useful crop and belong to the same family as marrows, pumpkins and summer squashes",
    steps: [ ["Gardening gloves", "Packet of courgette seeds", "Trowel", "Rake"],
"Make sure the space you are going to sow is weed free, by using a trowel to remove the weeds.",

"Prepare a square of soil about 60cm in width. Sow two or three seeds 2.5cm (1in) deep in each square. ",

"Cover the seeds with cloches or horticultural fleece and leave for two weeks.",

"When the seedlings have developed, thin out to leave the strongest one.",

"Courgettes are thirsty plants and need weekly watering around the plant, not on the leaves.",

"Harvest the courgettes when they are about 10–12cm long."]
  }
])
