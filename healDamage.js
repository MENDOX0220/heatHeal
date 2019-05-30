class Player{
    constructor(){
        this.hp = 100
        this.name = '박제현'
        this.isDie = false
        this.dieEvent = null
    }
    hitDamage(damage){ 
        if(!this.isDie){
            console.log(`HP : ${this.hp}-${damage}=${this.hp-damage}`)
            if(this.hp - damage <= 0){
            this.hp = 0
            this.isDie = true

            this.dieEvent(this.name)
            }     
            else{ 
                this.hp -= damage
            }
        }
    }

    heal(heal){
        console.log(`HP : ${this.hp}+${heal}=${this.hp+heal}`)
        this.hp += heal
    }
    setDieEventListener(callback){
        this.dieEvent = callback
    }
}
var player = new Player()
player.setDieEventListener((name)=>{
    console.log(name + "뒤짐")
})

player.hitDamage(50)
player.heal(30)
player.hitDamage(50)
player.heal(80)
player.hitDamage(112)
