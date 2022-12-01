let friends: string[] = ["Mahasin", "Ashik", "Swyeb"];

friends.push("Nowaj");
// friends.push(957);

const newFriends = friends.map((friend, index) => index + 1 + "." + friend);

console.log(friends, newFriends);

let mobiles: (string | number | boolean)[] = ["Samsun", "apple", "oppo"];
mobiles.push("Nokia");
mobiles.push(false);
mobiles.push(56);
console.log(mobiles);
