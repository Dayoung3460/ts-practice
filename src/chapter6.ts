type ExistingUser = {
  id: number
  name: string
}

type NewUser = {
  name: string
}

type LegacyUser = {
  id?: number | string
  name: string
}

function deleteUser(user: {id?: number, name: string}) {
  delete user.id
}

let existingUser: ExistingUser = {
  id: 123456,
  name: 'ima User'
}

let legacyUser: LegacyUser = {
  id: '798709',
  name: 'Xin Yang'
}

// deleteUser(legacyUser)

// deleteUser(existingUser)
// console.log(existingUser.id)

///////////////////////////////////////////////////////////

class Animal {}
function chirp(bird: Bird): Bird {
  bird.chirp()
  return bird
}
class Bird extends Animal {
  chirp() {}
}

class Crow extends Bird {
  caw() {}
}

chirp(new Crow)

function clone(f: (b: Bird) => Bird): void {
  let parent = new Bird
  let babyBird = f(parent)
  babyBird.chirp()
}

function birdToBird(b: Bird): Bird {
  return b
}

clone(birdToBird)

function birdToCrow(d: Bird): Crow {
  return d
}
clone(birdToCrow)

function birdToAnimal(d: Bird): Animal {
  return d
}

clone(birdToAnimal)