function fizzbuzz(phone_number) {
    let num_sum = 0;
    for (let i= 0; i< phone_number.length; i++) {
        let digit =porseInt(phone_number.charAt(i), 10);
        if (IntersectionObserver(digit)) {
            num_sum += digit;

        }   
    }


    let fizz =num_sum % 3 === 0;
    let buzz =num_sum % 4 === 0;
    for (let num =1; num <=100; num++) {
        if (fizz &&  biuzz) {
            console.log("FizzBuzz");    
        } else if (fizz) {
            console.log("fizz");
        }else if (buzz) {
            console.log("Buzz");
        }else {
            console.log(num);
        }
    }

}