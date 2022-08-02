const crawlingCrab = {
  id: 1,
  name: "Yeaye Baby Crawling Crab",
  manufacturer: "Yeaye",
  modelNumber: "aa01",
  weight: "10.5 oz",
  recommendedAge: "36 months - 15 years",
  price: 16.99,
};

const magneticRingsFidget = {
  id: 2,
  name: "Magnetic Rings Fidget Toy Set",
  manufacturer: "YZ",
  modelNumber: "",
  weight: "2.12 oz",
  recommendedAge: "12 years and up",
  price: 9.99,
};

const slinky = {
  id: 3,
  name: "Slinky",
  manufacturer: "YZ",
  modelNumber: "",
  weight: "2.12 oz",
  recommendedAge: "12 years and up",
  price: 9.99,
};

const rubiksCube = {
  id: 4,
  name: "Rubik's Cube",
  manufacturer: "Spin Master",
  modelNumber: "Spin Master",
  weight: "6.1 oz",
  recommendedAge: "8 years and up",
  price: 11.99,
};

const hyperGo = {
  id: 5,
  name: "HYPER GO H16SC 1:16 Scale Hobby Grade Fast Remote Control Car",
  manufacturer: "Hyper Go",
  modelNumber: "H16SC",
  weight: "3.62 lbs",
  recommendedAge: "14 years and up",
  price: 109.99,
};

const toys = [crawlingCrab, magneticRingsFidget, slinky];
//console.log(toys);
toys.push(rubiksCube);
toys.push(hyperGo);

for (const toy of toys) {
  console.log(
    `${toy.name} manufactured by ${toy.manufacturer} model number ${
      toy.modelNumber
    } at price $${Math.round((toy.price + toy.price * 0.05) * 100) / 100}`
  );
}
