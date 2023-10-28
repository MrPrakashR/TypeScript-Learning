let sales = 21_314_434
let course : String = "TypeScript"
let is_published : boolean = true
let level
level = 1
level = "1" //any type can accept

let numbers : number[] = [1,2,3]
let user:[number,string] = [1,"pra"]

const enum Size {small=1,medium,large}
const size : Size = Size.medium
console.log(size)

//Function .
function calculateTax(income:number,taxYear=2022):number {
    if (taxYear<2022)
        return income*1.2
    return income*1.3
}

calculateTax(10_000,2022)

//Object
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}
let employee : Employee = {id:1,name:"Pra",retire: (date:Date) => {
    console.log(date)
}}

function kgToLbs(weight: number | string): number {
    
    if (typeof weight === 'number') {
        return weight*2.2
    } else {
        return parseInt(weight)*2.2
    }
}

kgToLbs(1000)
kgToLbs("10kg")


//intersection
type Draggable = {
    drag : () => void
}

type Resizble = {
    resize : () => void
}

type UIWidget = Draggable & Resizble

let text : UIWidget = {
    drag : () => {},
    resize : () => {}
}


//Literal Type(exact,specific)
type Quentity = 50 | 100
let quentity :Quentity = 100

type Metric = "feet" | "inch"

//Nullable Type
function greet(name:String | null | undefined) {

}

greet(null)
