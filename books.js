const book = (
    {book: "Watchmen", price:100000, author: "Alan Moore"}

);

function purchase (book, discount, taxes) {

    let result = 0;

    const amountdiscount = book.price * discount;
    let discountprice = book.price - amountdiscount;
    const amountoftax = discountprice * taxes;
    let total = discountprice + amountoftax;

    console.log("Amount of Discount: " + amountdiscount);
    console.log("Price after discount: " + discountprice);
    console.log("Amount of Tax : " + amountoftax);
    console.log("Price after tax : " + total);

    return result;

}

purchase(book,0.1,0.1)