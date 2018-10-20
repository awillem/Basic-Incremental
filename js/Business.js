class Business {

    constructor () {
        this.id;
        this.owned = 0;
        this.base = 0
        this.multiplier = 1;        
        this.earnings = this.owned * this.base * this.multiplier;
        this.baseTime = 0;
        this.countTime = 0;
        this.cost = 0;
    }

    buyBusiness () {
       if(this.cost <= cash) {
           this.owned += 1;
           cash -= this.cost;
           owned[this.id].innerText = this.owned;
           totalCash.innerText = cash;
           this.earnings = this.owned * this.base * this.multiplier;
       } 
    }

    earn () {
        if (this.countTime === 0) {
            cash += this.earnings;
            totalCash.innerText = cash;
        }
    }

    increment () {
        if (this.countTime <= 0 && this.owned > 0) {
            this.countTime = this.baseTime;
            
        } else if (this.owned > 0) {
            this.countTime -= 1;
        }
    }

    
}

