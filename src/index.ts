//Basic Types
let id: number = 5
let company: string = "Traversy Media"
let isPublished: boolean = true
let x: any = "Hello World "

let ids: number[] = [1,2,4,5,3]
let arr: any[] = [1, true, 'Hello']

//Tuple
let person: [number, boolean, string] = [1, true, "samba"]

//Tuple Array
let employee: [number, string][]
employee = [
    [1, 'chika'],
    [2, 'Tobi'],
    [3, 'Headies']
]

//Union
let pid: string | number
pid = "22"

//Enum
enum Direction1 {
    up,
    down,
    left,
    right
}

//objects method 1
const user: {
    id: number,
    name: string
} = {
    id: 25,
    name: "wizkid"
}

//object method 2
type User = {
    id: number,
    name: string
}
const useer: User = {
    id: 1,
    name: "davido"
}
let cid: any = 1

let customerId = cid as number

//functions
function addNum(x: number, y: number): number {
    return x + y
}

//Interfaces
interface userInterface {
    id: number
    name: string
}

const user1: userInterface = {
    id: 1,
    name: 'Lash'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y