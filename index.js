const app = "I don't do much."

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var newArr = [...kittens, name];
  return newArr;
}

function prependKitten(name) {
  var newArr = [name, ...kittens];
  return newArr;
}