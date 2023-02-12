import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    const newDiv = document.createElement("p");
    const newContent = document.createTextNode(emojis);
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("emojis");
    document.body.appendChild(newDiv)
  }

  addBananas() {
   this.emojis.map((x)=>{
    if(x = "🐒") return x+ this.banana
    else if (x = "🦍") return x + this.banana
    else if(x = "🦧") return  x + this.banana
      
   })

  }
  
}
