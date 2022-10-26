const book = [
    {title: "Watchmen", price:100000, author: "Alan Moore"},
    {title: "A Song of Ice and Fire", price:150000, author: "George R.R Martin"},
    {title: "The Death of Superman", price:100000, author: "Dan Jurgens"},
    {title: "Sherlock Holmes ", price:100000, author: "Arthur Conan Doyle"}
];
    


function purchase (books, discount, taxes) {

    let result = 0, many = 0;
    
    for (let i = 0; i < book.length; i++) {
        if (books[i].title && (i < book.length)) {

        
        many++;

        const amountdiscount = books[i].price * (discount/100);
        let discountprice = books[i].price - amountdiscount;
        const amountoftax = discountprice * (taxes/100);
        let total = discountprice + amountoftax;

        console.log("Book " + many);
        console.log("");
        console.log("");
        console.log("Book Title : " + books[i].title);
        console.log("Price : " + books[i].price);
        console.log("Amount of Discount: " + amountdiscount);
        console.log("Price after discount: " + discountprice);
        console.log("Amount of Tax : " + amountoftax);
        console.log("Price after tax : " + total);
        console.log("");
        result += total;
    
        }else{
            console.log("Sorry its empty!");
            break;
        }
        
    }

    console.log("");
    console.log("Amount of book : " + many);
    console.log("Total Price : " + result);
    return result;

}

function credit(totalpay, duration, taxes) {
    terms = [];
    totalcreds = 0;
    console.log("");
    console.log("   Credit Menu   ");
    console.log("");

    console.log("Total Price : " + totalpay);
    console.log("  ");
    price = (totalpay / duration);

    const taxedprice = price * (taxes/100);
    const credsprice = price + taxedprice;

    for (let i = 0; i < duration; i++) {
        terms.push({
            month: i+1, payment: credsprice
        });
        
        console.log("Payment month " + (i+1)+"" +credsprice);
        totalcreds += credsprice;
    }

    console.log("Price total for creds : " + totalcreds);
    return terms;

}

//purchase(book,30,10)
credit(purchase(book,30,10),5,5);