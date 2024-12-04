
const Transactions = (): JSX.Element => {


    const transactions: Transactions[] = [{id: '1 id', date:new Date, country:'USA', currency:'USD', amount:100},
        {id: '2', date:new Date, country:'USA', currency:'USD', amount:500},
        {id: '3', date:new Date, country:'USA', currency:'USD', amount:600},
        {id: '4', date:new Date, country:'USA', currency:'USD', amount:1000}
    ]

    ///const {message, color} = props
    return (
        <div>
            Ï
            {transactions.map((trn, index) => (
                <p key={index}>
                    {trn.id} by {trn.date.toISOString()} - {trn.country} - {trn.currency} - {trn.amount}
                </p>
            ))}

            {/* <p>{liked[0].songName} by {liked[0].singer} </p>
    <p>{liked[0].songName} by {liked[0].singer} </p> */}
        </div>
    )
}

export type Transactions = { id: string, date: Date, country: string, currency: string, amount: number }

export default Transactions