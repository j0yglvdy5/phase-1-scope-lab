
var customerName = 'bob';

function getCustomerName() {
    return customerName;
}
customerName();

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
   let bestCustomer ='not bob'
   return bestCustomer;
}
setBestCustomer();

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}



function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = 'someone else';
    leastFavoriteCustomer = 'still someone else'; 
}




