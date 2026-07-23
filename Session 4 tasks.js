// Task 1 session 4 //
const products = {
    1: "Laptop",
    2: "Phone",
    3: "Tablet"
};

function getProduct(id) {
    return new Promise((resolve, reject) => {
        if (products[id]) {
            resolve(products[id]);
        } else {
            reject("Product not found");
        }
    });
}

//Task 2 session 4 //
function calculateShipping(weight) {
    return new Promise((resolve, reject) => {
        if (weight > 0) {
            resolve(`Shipping cost: ${weight * 5}`);
        } else {
            reject("Invalid weight");
        }
    });
}

// Task 3 session 4 //
function sendVerificationEmail(email) {
    return new Promise((resolve) => {
        console.log("Sending verification email...");
        setTimeout(() => {
            console.log("Email sent successfully");
            resolve();
        }, 1000);
    });
}

async function registerUser(name, email) {
    try {
        if (!name || !email) {
            throw new Error("Invalid name or email");
        }
        await sendVerificationEmail(email);
        console.log("User registered successfully");
    } catch (error) {
        console.log(error.message);
    }
}


// Task 4 session 4 //
async function getUserProfile(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
            throw new Error("User not found");
        }
        const data = await response.json();
        console.log(`Name: ${data.name}`);
        console.log(`Email: ${data.email}`);
    } catch (error) {
        console.log(error.message);
    }
}