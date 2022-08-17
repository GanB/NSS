const outfits = [
  {
    id: 1,
    bottoms: "slacks",
    top: "orange",
    shoes: "leather",
    style: "formal",
    own: false,
  },
  {
    id: 3,
    bottoms: "jeans",
    top: "t-shirt",
    shoes: "flip flops",
    type: "casual",
    own: true,
  },
  {
    id: 2,
    bottoms: "yoga",
    top: "tank top",
    shoes: "flip flops",
    type: "casual",
    own: false,
  },
  {
    id: 9,
    bottoms: "skirt",
    top: "blouse",
    shoes: "heals",
    type: "formal",
    own: true,
  },
  {
    id: 6,
    bottoms: "shorts",
    top: "tank top",
    shoes: "none",
    type: "casual",
    own: true,
  },
  {
    id: 7,
    bottoms: "jeans",
    top: "sweater",
    shoes: "boots",
    type: "casual",
    own: true,
  },
  {
    id: 8,
    bottoms: "slacks",
    top: "button down",
    shoes: "dress",
    type: "formal",
    own: false,
  },
];

/* considering the array outfits, use map, filter and find to do the following */

//Make a copy of outfits called outfitsCopy that can be modified without changing
// outfits directly.

//Change a value on outfitsCopy and use console logs to show you did not change outfits

//Make a copy (map) of outfits with the added property of accessories.  Make accessories always false.

//Make a copy (map) of outfits that contains on the properties of id, bottoms, tops and shoes

//filter outfits to give only outfits that are casual// filter outfits to give only
// outfits that are owned

// use find to return an outfit that has no shoes// use find to return an outfit that
// has boots//Bonus:// use find to return an outfit that has jeans and a t-shirt

const outfitsCopy = [];

for (const outfit of outfits) {
  const outfitCopy = {};

  if (typeof outfit.id !== "undefined") outfitCopy.id = outfit.id;
  if (typeof outfit.bottoms !== "undefined")
    outfitCopy.bottoms = outfit.bottoms;
  if (typeof outfit.top !== "undefined") outfitCopy.top = outfit.top;
  if (typeof outfit.shoes !== "undefined") outfitCopy.shoes = outfit.shoes;
  if (typeof outfit.style !== "undefined") outfitCopy.style = outfit.style;
  if (typeof outfit.type !== "undefined") outfitCopy.type = outfit.type;
  if (typeof outfit.own !== "undefined") outfitCopy.own = outfit.own;

  outfitsCopy.push(outfitCopy);
}

console.log(
  `--------------------------------outfits---------------------------`
);
console.log(outfits);
console.log(
  `--------------------------------outfitsCopy---------------------------`
);
console.log(outfitsCopy);


