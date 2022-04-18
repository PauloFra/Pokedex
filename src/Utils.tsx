export function firstLetterUpper(str:string){
   return str[0].toUpperCase() + str.substr(1)
}

export function addVirgula(value: string) {
   return value
   .replace(/\D/g, "")
   .replace(/(\d{1})(\d)/, "$1,$2")
 }