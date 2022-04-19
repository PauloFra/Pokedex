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
 
 export function switchGen(generation:string) {
   let genInGet = "";
   switch(generation){
      case 'gen-1':  {
          return genInGet = 'pokemon?offset=0&limit=151'
          
      }
      case 'gen-2': {
          return genInGet = 'pokemon?offset=151&limit=251'
          
      }
      case 'gen-3': {
          return genInGet = 'pokemon?offset=251&limit=386'
          
      }
      case 'gen-4': {
          return genInGet = 'pokemon?offset=386&limit=493'
          
      }
      case 'gen-5': {
          return genInGet = 'pokemon?offset=493&limit=649'
          
      }
      case 'gen-6': {
          return genInGet = 'pokemon?offset=649&limit=721'
          
      }
      case 'gen-7': {
          return genInGet = 'pokemon?offset=721&limit=809'
          
      }
      case 'gen-8': {
          return genInGet = 'pokemon?offset=809&limit=905'
          
      }
      case 'gen-9': {
          return genInGet = 'pokemon?offset=905&limit=1024'
          
      }
      case 'all': {
          genInGet = 'pokemon?offset=0&limit=1024'
      }
  }
 }
