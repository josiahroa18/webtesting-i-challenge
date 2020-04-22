module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if(item.enhancement < 20){
    item = {
      ...item,
      enhancement: item.enhancement + 1
    }
  }
  return item;
}

function fail(item) {
  if(item.enhancement < 15){
    item = {
      ...item,
      durability: item.durability - 5
    }
  }
  if(item.enhancement >= 15){
    let durability;
    if(item.durability > 90){
      durability = 100;
    }else{
      durability = item.durability + 10;
    }
    item = {
      ...item,
      durability: durability
    }
  }
  if(item.enhancement > 16){
    item = {
      ...item,
      enhancement: item.enhancement - 1
    }
  }
  return item;
}

function repair(item) {
  return {
    ...item,
    durability: 100
  }
}

function get(item) {
  return { ...item };
}
