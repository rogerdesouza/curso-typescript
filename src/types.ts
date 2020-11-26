// boolean (true, false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = 'foo'

// number (int, float, hex, binary)
let total: number
total = 0xff0

// array (type[], Array<number> generic)
let items: number[]
items = [1, 2, 3]

let values: Array<number>
values = [1, 2, 3]

// tuple
let title: [number, string]
title = [1, "foo"]

let actions: [number, string, boolean]
actions = [1, 'ADD', true]

// enum
enum colors {
    white = '#fff',
    black = '#000'
}

// any (qualquer coisa) não é legal
let coisa: any
coisa = "teste"

// void (vazio)
function logger(): void {
    console.log('foo')
}

// null / undefined
type Bla = string | undefined

// never
function error(): never {
    throw new Error("error")
}

// object
let cart: object
cart = {
    key: 'fi'
}

// type inference
let message2 = 'mensagem definida'
message2 = "string nova"

// type alias e union (|)
type Uid = number | string

let id: Uid
id = 1
id = "1"

type Platform = 'Windows' | 'Linux' | 'MacOs'

// estende type com intersection (&) e campo opcional (?)
type AccountInfo = {
    id: number,
    name: string,
    email?: string
}

const account: AccountInfo = {
    id: 1,
    name: "Roger"
}

type CharInfo = {
    nickname: string,
    level: number
}

const char: CharInfo = {
    nickname: "roger",
    level: 100
}

type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
    id: 1,
    name: "Roger",
    email: "rogerdesouza99@gmail.com",
    nickname: "roger",
    level: 100
}