{
    type Transaction = {
        description: string,
        amount: number,
        date: Date
    }
    
    let trn1: Transaction = {description:'trn 1', amount:100, date:new Date}
    
    let trn2: Transaction =  {description:'trn 1', amount:100, date:new Date}

    let trnArray: Transaction[] = [trn1, trn2]

    console.log(trnArray)


    const newTransaction = () : void => {
        const newDescriptionInput : HTMLInputElement = document.getElementById('description') as HTMLInputElement
        const newAmountInput : HTMLInputElement = document.getElementById('amount') as HTMLInputElement

        const newDescription: string = newDescriptionInput.value
        const newAmount : number = Number(newAmountInput.value)
        // in oone line 
        console.log((document.getElementById('amount') as HTMLInputElement).value)
        const trn3: Transaction = {description:newDescription, amount:newAmount, date:new Date}

        this.trnArray.push(trn3)

        console.log(this.trnArray)
    }

}