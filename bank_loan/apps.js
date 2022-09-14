const maxMonth = document.querySelector(".max-month")
const maxAmount = document.querySelector(".max-amount")
const pMonth = document.querySelector(".p-month")
const pAmount = document.querySelector(".p-amount")
let = totalAmount = 0;
let interestRate = 0;
let documentFee = 500;
let exper_fee = 500;
const KKDF = 15;
const BSMV = 10;

//range mode activate function
function rangeActivate() {
    document.getElementById("range-month").disabled = false;
    document.getElementById("range-amount").disabled = false;

    document.getElementById("range-month").addEventListener("input", () => {
        pMonth.innerText = document.querySelector("#range-month").value
    }, false)

    document.getElementById("range-amount").addEventListener("input", () => {
        pAmount.innerText = `$${document.querySelector("#range-amount").value}`
    }, false)
}

//activate option section 

document.getElementById("role").addEventListener("click", () => {
    if (document.getElementById("role").value != "Choose") {
    if (document.getElementById("role").value === "Consumer loan(WEB-12 Months)") {
        maxMonth.innerText = 12
        document.querySelector(".form-range-month").max = 12
        maxAmount.innerText = "$30.000"
        document.querySelector(".form-range-amount").max = 30000
    }
    else if (document.getElementById("role").value === "Consumer loan(WEB-24 Months)") {
        maxMonth.innerText = 24
        document.querySelector(".form-range-month").max = 24
        maxAmount.innerText = "$50.000"
        document.querySelector(".form-range-amount").max = 50000
    }
    else if (document.getElementById("role").value === "Consumer loan(WEB-36 Months)") {
        maxMonth.innerText = 36
        document.querySelector(".form-range-month").max = 36
        maxAmount.innerText = "$100.000"
        document.querySelector(".form-range-amount").max = 100000
    }
    else if (document.getElementById("role").value === "Housing Loan") {
        maxMonth.innerText = 48
        document.querySelector(".form-range-month").max = 48
        maxAmount.innerText = "$150.000"
        document.querySelector(".form-range-amount").max = 150000
    }
    else if (document.getElementById("role").value === "Auto Loan") {
        maxMonth.innerText = 48
        document.querySelector(".form-range-month").max = 48
        maxAmount.innerText = "$100.000"
        document.querySelector(".form-range-amount").max = 100000
    } rangeActivate()
}})

//activate button
document.querySelector(".btn").addEventListener("click", () => {
    if (document.getElementById("role").value === "Choose") {
        alert("You did not choose any option!!!")
    } else {
        if (document.querySelector(".p-amount").innerText && document.querySelector(".p-month").innerText) {

            if (document.getElementById("role").value === "Consumer loan(WEB-12 Months)") {
                interestRate = 10;
                exper_fee = 300;
                documentFee = 500;
            }
            else if (document.getElementById("role").value === "Consumer loan(WEB-24 Months)") {
                interestRate = 17.5;
                exper_fee = 500;
                documentFee = 500;
            } else if (document.getElementById("role").value === "Consumer loan(WEB-36 Months)") {
                interestRate = 25;
                exper_fee = 900;
                documentFee = 900;
            } else if (document.getElementById("role").value === "Housing Loan") {
                interestRate = 20;
                exper_fee = 750;
                documentFee = 750;

            } else if (document.getElementById("role").value === "Auto Loan") {
                interestRate = 15;
                exper_fee = 500;
                documentFee = 500;
            }
            document.querySelector("#loan-type").innerText = document.getElementById("role").value;
            document.querySelector("#requested-amount").innerText = pAmount.innerText
            document.querySelector("#month").innerText = pMonth.innerText
            document.querySelector(".loan-table").style.visibility = "visible"
            document.querySelector("#interest-rate").innerText = `%${interestRate}`
            document.querySelector("#expertise-fee").innerText = `$${exper_fee}`
            document.querySelector("#documentation-fee").innerText = `$${documentFee}`
            totalAmount = ((document.querySelector("#range-amount").value) * (125 + interestRate) / 100) + (exper_fee + documentFee)
            document.querySelector("#total-amount").innerText = `$${totalAmount.toFixed(2)}`
            document.querySelector("#monthly-payment").innerText = `$${(totalAmount / pMonth.innerText).toFixed(2)}`

        } else {
            alert("You did not choose month or requested amount!!!")
        }
    }

})