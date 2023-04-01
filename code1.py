def fizzbuzz(phone_number):
    # Compute the sum of the digits in the phone number
    number_sum = sum(int(digit) for digit in str(phone_number))

    # Generate the FizzBuzz sequence up to 20 numbers
    for i in range(1, 21):
        if i % 3 == 0 and i % 4 == 0:
            print("FizzBuzz", end=" ")
        elif i % 3 == 0:
            print("Fizz", end=" ")
        elif i % 4 == 0:
            print("Buzz", end=" ")
        else:
            print(i, end=" ")

fizzbuzz(9951624328)





