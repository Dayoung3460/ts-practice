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

deleteUser(legacyUser)

deleteUser(existingUser)
console.log(existingUser.id)
