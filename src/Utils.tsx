export function firstLetterUpper(str:string){
   return str[0].toUpperCase() + str.substr(1)
}

export function addVirgula(value: string) {
   return value
   .replace(/\D/g, "")
   .replace(/(\d{1})(\d)/, "$1,$2")
 }

 export function abreviaStats(str: string) {
   switch (str) {
     case "attack":
       return "ATK";
     case "defense":
       return "DEF";
     case "special-attack":
       return "SATK";
     case "special-defense":
       return "SDEF";
     case "speed":
       return "SPD";
     default:
       return str.toUpperCase();
   }
 };