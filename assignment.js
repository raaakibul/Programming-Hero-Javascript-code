 

// First Project
function kilometerToMeter(kilometer) {
    // if the kilometer value is less than or equal to 0 then return this error.
    if (kilometer <= 0) {
        return 'Error! The value of kilometer is less than 1';
    }
    else {
        var meter = kilometer * 1000;
        return meter;
    }
}
var convertValue = kilometerToMeter(1);




// Second Project
function budgetCalculator(watch, phone, laptop) {
    if (watch <= 0 || phone <= 0 || laptop <= 0) {
        return 'Error! field cannot be empty or less then 1.';
    }
    else {
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        totalPrice = watchPrice + phonePrice + laptopPrice;
    }
    return totalPrice;
}
var totalCost = budgetCalculator(4, 5, 2);




// Third Project
function hotelCost(totalStay) {
    var hotelCheckoutCost = 0;
    if (totalStay <= 0) {
        return 'Please book your room first to calculate amount.';
    }
    else if (totalStay <= 10) {
        hotelCheckoutCost = totalStay * 100;
    }
    else if (totalStay <= 20) {
        var firstTenDays = 10 * 100;
        var remaningDays = totalStay - 10;
        var secondTenDays = remaningDays * 80;
        hotelCheckoutCost = firstTenDays + secondTenDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaningDays = totalStay - 20;
        var thirdTenOrMoreDays = remaningDays * 50;
        hotelCheckoutCost = firstTenDays + secondTenDays + thirdTenOrMoreDays;
    }
    return hotelCheckoutCost;
}
var hotelTotalCost = hotelCost(30);




// Fourth Project
function megaFriend(arr) {
    var friendLargeName = arr[0];
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (element.length <= 0) {
            return 'Error! Name field cannot be empty.';
        }
        else if (friendLargeName.length < element.length) {
            friendLargeName = element;
        }
    }
    return friendLargeName;
}
var megaFriendList = ['Meher', 'Muniya', 'Mahabub', 'Ashik', 'Shakil', 'Tanvir'];
var longestName = megaFriend(megaFriendList);