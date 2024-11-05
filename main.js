let cars = ["bmv", "dodge", "bugatti", "tesla"]

let sortedCars= cars.filter((car) => car.length == 3);
console.log(sortedCars)

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true
        if(success) {
            resolve("OK!Status = 200")
        } else {
            reject("error")
        }
    }, 2000)
})

myPromise.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
})