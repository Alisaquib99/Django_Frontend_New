export const emailvalidator = (text) => {

    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(text)) {

        return true
    }
    else
        console.log("email is incorrect")
    return false;
}
export const namevalidation = (text) => {

    if (/^[a-zA-Z. ]+$/i.test(text)) {

        return true
    }
    else
        console.log(" please check  patten")
    return false;
};
export const cityvalidation = (text) => {

    if (/^[a-zA-Z. ]+$/i.test(text)) {

        return true
    }
    else
        console.log(" please check  patten")
    return false;
};
export const passwordvalidator = (passowrd) => {

    if (/^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$/.test(passowrd)) {

        return true
    }
    else
        console.log("password length should be more then 8")
    return false;
}
export const usernamevalidator = (username) => {

    if (/^^(?=.{4,20}$)(?![.])(?!.*[.]{2})[a-zA-Z0-9.]+(?<![.])$/i.test(username)) {

        return true
    }
    else
        console.log(" please check username pattern")
    return false;
}
export const notEmptyvalidator = (empty) => {

    if (/^\d*\.?\d+$/.test(empty)  ) {


        return true
    }
    else
        return false;
};
export const accodevalidator = (account_number) => {

    if (/^[0-9\b]+$/.test(account_number) && account_number.length === 6) {


        return true
    }
    else
        return false;
};
export const pricevalidation = (amount) => {

    if (/^[1-9]{1}[0-9\b]+$/.test(amount) ) {


        return true
    }
    else
        return false;
};
export const ifscvalidator = (ifsc) => {

    if (/^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifsc)) {

        return true
    }
    else
        console.log("password length should be more then 8")
    return false;
}