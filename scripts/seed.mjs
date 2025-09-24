import connectDB from "../db/conn.mjs";
import Beast from "../models/beast.mjs";
import Being from "../models/being.mjs";
import Spirit from "../models/spirit.mjs";

async function seed() {
  await connectDB();

  // Clear collections (optional when developing)
  await Beast.deleteMany({});
  await Being.deleteMany({});
  await Spirit.deleteMany({});

  const beasts = [
    { name: "Hungarian Horntail", dangerLevel: 10, habitat: "Eastern Europe", description: "Very dangerous dragon." },
    { name: "Common Welsh Green", dangerLevel: 8, habitat: "Wales", description: "A green dragon." },
    { name: "Acromantula", dangerLevel: 9, habitat: "Forest", description: "Giant spider." },
    { name: "Hippogriff", dangerLevel: 7, habitat: "Meadows", description: "Eagle/horse hybrid." },
    { name: "Thestral", dangerLevel: 6, habitat: "Forbidden Forest", description: "Visible only to those who saw death." },
    { name: "Niffler", dangerLevel: 2, habitat: "Underground", description: "Attracted to shiny things." },
    { name: "Grindylow", dangerLevel: 5, habitat: "Lakes", description: "Aggressive water demon." },
    { name: "Troll", dangerLevel: 7, habitat: "Caves", description: "Large, dim-witted humanoid." },
    { name: "Unicorn", dangerLevel: 3, habitat: "Forest", description: "Elusive magical horse." },
    { name: "Werewolf", dangerLevel: 9, habitat: "Various", description: "Transforms during full moon." }
  ];

  const beings = [
    { name: "Griphook", abilities: ["Banking expertise"], affiliation: "Gringotts", description: "G oblin banker." },
    { name: "Dobby", abilities: ["Household magic", "Apparition"], affiliation: "None", description: "Free house-elf." },
    { name: "Firenze", abilities: ["Divination", "Archery"], affiliation: "Centaur tribe", description: "Centaur." },
    { name: "Merpeople", abilities: ["Underwater speech"], affiliation: "Black Lake", description: "Aquatic beings." },
    { name: "Vampire", abilities: ["Blood feeding"], affiliation: "Independent", description: "Blood-sucking humanoid." },
    { name: "Veela", abilities: ["Bewitching"], affiliation: "Independent", description: "Bewitching beings." },
    { name: "Giant", abilities: ["Immense strength"], affiliation: "Isolated clans", description: "Huge humanoids." },
    { name: "Goblin", abilities: ["Metallurgy"], affiliation: "Gringotts", description: "Skilled bankers." },
    { name: "House-elf", abilities: ["Servitude magic"], affiliation: "Wizard families", description: "House servants." },
    { name: "Centaur", abilities: ["Stargazing", "Archery"], affiliation: "Forest tribe", description: "Horse/warrior." }
  ];

  const spirits = [
    { name: "Peeves", entityType: "Poltergeist", abilities: ["Mischief"], hauntingLocation: "Hogwarts", description: "Mischief maker." },
    { name: "Nearly Headless Nick", entityType: "Ghost", abilities: ["Haunting"], hauntingLocation: "Gryffindor Tower", description: "Gryffindor ghost." },
    { name: "Dementor", entityType: "Dementor", abilities: ["Soul-sucking", "Fear"], hauntingLocation: "Azkaban", description: "Feeds on happiness." },
    { name: "Boggart", entityType: "Boggart", abilities: ["Shapeshifting"], hauntingLocation: "Anywhere", description: "Takes form of fears." },
    { name: "Grey Lady", entityType: "Ghost", abilities: ["Haunting"], hauntingLocation: "Ravenclaw Tower", description: "Ravenclaw ghost." },
    { name: "Fat Friar", entityType: "Ghost", abilities: ["Haunting"], hauntingLocation: "Hufflepuff", description: "Hufflepuff ghost." },
    { name: "Moaning Myrtle", entityType: "Ghost", abilities: ["Haunting"], hauntingLocation: "Girls' bathroom", description: "Sad ghost." },
    { name: "Peeve-ish 2", entityType: "Poltergeist", abilities: ["Pranks"], hauntingLocation: "Hogwarts", description: "Another troublemaker." },
    { name: "Silent Watcher", entityType: "Ghost", abilities: ["Observing"], hauntingLocation: "Forbidden Forest", description: "Mysterious ghost." },
    { name: "Shadow", entityType: "Boggart", abilities: ["Fear"], hauntingLocation: "Closets", description: "Takes fears' shape." }
  ];

  await Beast.insertMany(beasts);
  await Being.insertMany(beings);
  await Spirit.insertMany(spirits);

  console.log("Seeding done.");
  process.exit(0);
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});