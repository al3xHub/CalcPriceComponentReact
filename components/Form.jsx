const Form=({option, days})=> {

    const calcHotel=()=> {

        let cost = days*50;

        if (days>5){
            cost -= 35; 
        }else if(days>3){
            cost -= 25;
        }

        return <p>Cost rent hotel: {cost} EUR</p>;

    }

    const calcCar=()=> {

        let cost = days*45;

        if (days>7){
            cost -= 30; 
        }else if(days>3){
            cost -= 15;
        }

        return <p>Cost rent car: {cost} EUR</p>;

    }

    return <div>{option===1 ? calcHotel(): option===2 ? calcCar(): ""}</div>
    
}

export default Form