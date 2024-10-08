
const prices = { 
    'Espresso': 8.00,
    'Americano': 10.00,
    'Cappuccino': 13.00,
    'Caffè Latte': 14.00,
    'Flat White': 14.00,
    'Caramel Macchiato': 16.00,
    'Mocha': 16.00,
    'Espresso Macchiato': 9.00,
    'Espresso Con Panna': 10.00,
    'Iced Americano': 10.00,
    'Iced Latte': 14.00,
    'Iced Caramel Macchiato': 16.00,
    'Iced Mocha': 16.00,
    'Iced Blonde Vanilla Latte': 15.00,
    'Cold Brew Coffee': 12.00,
    'Nitro Cold Brew': 14.00,
    'Cold Brew Latte': 9.00,
    'Blonde Vanilla Latte': 16.00,
    'Dark Roast Coffee': 8.00,
    'Caffè Misto': 12.00,
    'Classic Donut': 6.50,
    'Chocolate Cake': 13.00,
    'Classic Cheesecake': 10.00,
    'Cinnamon Roll': 10.50,
    'Chocolate Croissant': 9.00,
    'Almond Croissant': 10.00,
    'Cheese Danish': 9.50,
    'Banana Nut Bread': 12.00,
    'Blueberry Muffin': 9.50,
    'Chocolate Chip Muffin': 9.50,
    'Plain Scone': 8.00,
    'Blueberry Scone': 8.50,
    'Raisin Scone': 8.50,
    'Cheese Scone': 8.50,
    'Multigrain Bagel': 8.50,
    'Plain Bagel': 7.50,
    'Ham & Chesee Roll': 11.50,
    'Red Velvet Cake': 14.50,
    'Chocolate Fudge Cake': 16.00,
    'Carrot Cake': 14.00,
    'Tiramisu': 15.50,
    'Lemon Loaf Cake': 13.50,
    'Chocolate Brownie': 12.50,
    'Opera Cake': 16.50
};
const items = [
    {
        id: "coffee",
        name: "COFFEE",
        items: [
            {
                id: "espresso-beverages",
                name: "Espresso Beverages",
                items: [
                    { 
                        name: "Espresso", 
                        price: 8.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Espresso---Feb-2023.jpeg", 
                        description: "A strong shot of pure coffee." 
                    },
                    { 
                        name: "Americano", 
                        price: 10.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Americano---Feb-2023.jpeg", 
                        description: "Espresso diluted with hot water for a lighter flavor." 
                    },
                    { 
                        name: "Cappuccino", 
                        price: 13.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Cappuccino---Feb-2023.jpeg", 
                        description: "A balanced mix of espresso, steamed milk, and foam." 
                    },
                    { 
                        name: "Caffè Latte", 
                        price: 14.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Latte-Mug---Feb-2023.jpeg", 
                        description: "Espresso with steamed milk and a light layer of foam." 
                    },
                    { 
                        name: "Flat White", 
                        price: 14.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Flat-White---Feb-2023.jpeg", 
                        description: "Velvety steamed milk over a double shot of espresso." 
                    },
                    { 
                        name: "Caramel Macchiato", 
                        price: 16.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Caramel-Macchiato---Feb-2023.jpeg", 
                        description: "Layers of vanilla syrup, espresso, and caramel drizzle." 
                    },
                    { 
                        name: "Mocha", 
                        price: 16.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Mocha--Feb-2023.jpeg", 
                        description: "Espresso, chocolate syrup, and steamed milk with whipped cream." 
                    },
                    { 
                        name: "Espresso Macchiato", 
                        price: 9.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Espresso-Macchiato---Feb-2023.jpeg", 
                        description: "A shot of espresso with a dollop of steamed milk." 
                    },
                    { 
                        name: "Espresso Con Panna", 
                        price: 10.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Espresso-Con-Pana---Feb-2023.jpeg", 
                        description: "Espresso topped with whipped cream." 
                    }
                ]
            },
            {
                id: "iced-espresso-beverages",
                name: "Iced Espresso Beverages",
                items: [
                    { 
                        name: "Iced Americano", 
                        price: 10.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Iced-Americano---Feb-2023.jpeg", 
                        description: "Chilled espresso with water over ice." 
                    },
                    { 
                        name: "Iced Latte", 
                        price: 14.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Iced-Cafe-Latte---Feb-2023.jpeg", 
                        description: "Espresso poured over ice and milk." 
                    },
                    { 
                        name: "Iced Caramel Macchiato", 
                        price: 16.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Iced-Caramel-Macchiato---Feb-2023.jpeg", 
                        description: "Cold milk, ice, espresso, vanilla, and caramel drizzle." 
                    },
                    { 
                        name: "Iced Mocha", 
                        price: 16.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Iced-Mocha---Feb-2023.jpeg", 
                        description: "Cold espresso, chocolate, milk, and ice, topped with whipped cream."
                    },
                    {
                        name: "Iced Blonde Vanilla Latte", 
                        price: 15.00, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190422_IcedVanillaLatte.jpg?impolicy=1by1_wide_topcrop_630", 
                        description: "Light blonde espresso, vanilla syrup, milk, and ice." 
                    }
                        
                    ]
                },
            {
                id: "blonde-roast-&-brewed-coffee",
                name: "Blonde Roast & Brewed Coffee",
                items: [
                    { 
                        name: "Blonde Vanilla Latte", 
                        price: 16.00, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630", 
                        description: "Milder espresso with vanilla and steamed milk." 
                    },
                    { 
                        name: "Dark Roast Coffee", 
                        price: 8.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Fresh-Brewed-Coffee---Feb-2023.jpeg", 
                        description: "Bold and robust dark roast drip coffee." 
                    },
                    { 
                        name: "Caffè Misto", 
                        price: 12.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Misto---Feb-2023.jpeg", 
                        description: "Half brewed coffee, half steamed milk." 
                    }
                ]
            },
            {
                id: "cold-coffee",
                name: "Cold Coffee",
                items: [
                    { 
                        name: "Cold Brew Coffee", 
                        price: 12.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Cold-Brew---Feb-2023.jpeg", 
                        description: "Smooth, slow-steeped coffee served cold." 
                    },
                    { 
                        name: "Cold Brew Latte", 
                        price: 9.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Cold-Brew-Latte--Feb-2023.jpeg", 
                        description: "Freshly brewed latte chilled with ice." 
                    },
                    { 
                        name: "Nitro Cold Brew", 
                        price: 14.00, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190410_NitroColdBrew.jpg?impolicy=1by1_wide_topcrop_630", 
                        description: "Creamy cold brew infused with nitrogen for a rich texture." 
                    }
                ]
            }
        ]
    },
    {
        id: "bread",
        name: "BREAD",
        items: [
            {
                id: "donut",
                name: "Donut",
                items: [
                    { 
                        name: "Classic Donut", 
                        price: 6.50, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/CH-AT-MOP-Sugar-Donut.jpeg", 
                        description: "A classic fried donut coated in a generous layer of granulated sugar, featuring a soft and fluffy interior." 
                    }
                ]
            },
            {
                id: "bagels",
                name: "Bagels",
                items: [
                    { 
                        name: "Plain Bagel", 
                        price: 7.50, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/SBX20190715_PlainBagel.jpg?impolicy=1by1_medium_630", 
                        description: "A simple, soft, and chewy classic bagel, perfect for pairing with cream cheese, butter, or enjoyed on its own." 
                    },
                    { 
                        name: "Multigrain Bagel", 
                        price: 8.50, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/SBX20190821_EverythingBagel_US.jpg?impolicy=1by1_medium_630", 
                        description: "A hearty, wholesome bagel made with a blend of grains and seeds." 
                    }
                ]
            },
            {
                id: "savory-pastries",
                name: "Savory Pastries",
                items: [
                    { 
                        name: "Ham & Cheese Roll", 
                        price: 11.50, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/HamAndSwissCroissant.jpg?impolicy=1by1_medium_630", 
                        description: "A savory bread roll filled with slices of ham and melted cheese, baked to golden perfection." 
                    }
                ]
            },
            {
                id: "scones",
                name: "Scones",
                items: [
                    { 
                        name: "Plain Scone", 
                        price: 8.00, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/SBX20230406_PetiteVanillaScone.jpg?impolicy=1by1_medium_630", 
                        description: "A classic, crumbly scone with a hint of sweetness, perfect when paired with butter or jam." 
                    },
                    { 
                        name: "Blueberry Scone", 
                        price: 8.50, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/SBX20181219_BlueberryScone.jpg?impolicy=1by1_medium_630", 
                        description: "A crumbly, golden scone with fresh blueberries for a burst of fruit flavor in every bite." 
                    },
                    { 
                        name: "Cheese Scone", 
                        price: 8.50, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/SBX20190422_PumpkinScone.jpg?impolicy=1by1_medium_630", 
                        description: "A savory scone baked with sharp cheddar cheese for a delicious snack with a hint of richness." 
                    },
                    { 
                        name: "Raisin Scone", 
                        price: 8.50, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/SBX20200630_CranberryOrangeScone.jpg?impolicy=1by1_medium_630", 
                        description: "A buttery, lightly sweet scone with plump raisins, perfect for tea time." 
                    }
                ]
            },
            {
                id: "sweet-pastries",
                name: "Sweet Pastries",
                items: [
                    { 
                        name: "Cinnamon Roll", 
                        price: 10.50, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/CH-AT-MOP-Cinnamon-Swirl.jpeg", 
                        description: "A soft, fluffy roll swirled with a generous amount of cinnamon sugar and topped with a sweet vanilla glaze." 
                    },
                    { 
                        name: "Chocolate Croissant", 
                        price: 9.00, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/SBX20220607_ChocolateCroissant-onGreen.jpg?impolicy=1by1_medium_630", 
                        description: "Buttery, flaky croissant filled with rich, smooth chocolate, perfect for a light snack or breakfast." 
                    },
                    { 
                        name: "Almond Croissant", 
                        price: 10.00, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/SBX20190715_40001-AlmondCroissant.jpg?impolicy=1by1_medium_630", 
                        description: "A delicate, golden-brown croissant filled with a sweet almond paste, topped with sliced almonds." 
                    },
                    { 
                        name: "Cheese Danish", 
                        price: 9.50, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/SBX20220125_CheeseDanish-onGreen.jpg?impolicy=1by1_medium_630", 
                        description: "A flaky Danish pastry filled with a creamy cheese filling and lightly glazed for a perfect balance of sweet and savory." 
                    },
                    { 
                        name: "Banana Nut Bread", 
                        price: 12.00, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/SBX20190729_BananaNutBread_US.jpg?impolicy=1by1_medium_630", 
                        description: "Moist, soft banana bread made with ripe bananas and crunchy walnuts for a delightful combination of flavors." 
                    },
                    { 
                        name: "Blueberry Muffin", 
                        price: 9.50, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/SBX20220125_BlueberryMuffin_US.jpg?impolicy=1by1_medium_630", 
                    description: "A soft, buttery muffin loaded with juicy blueberries and a hint of vanilla for a satisfying treat." 
                    },
                    { 
                        name: "Chocolate Chip Muffin", 
                        price: 9.50, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/AT-MOP-Triple-Chocolate-Muffin.jpeg", 
                        description: "A classic, crumbly scone with a hint of sweetness, perfect when paired with butter or jam." 
                    }
                ]
            }
        ]
    },
    {
        id: "cake",
        name: "CAKE",
        items: [
            {
                id: "creamy-cakes",
                name: "Creamy Cakes",
                items: [
                    { 
                        name: "Classic Cheesecake", 
                        price: 15.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/AT-MOP-New-York-Cheesecake.jpeg", 
                        description: "Rich and creamy cheesecake with a buttery graham cracker crust, perfect for indulgence." 
                    },
                    { 
                        name: "Tiramisu", 
                        price: 15.50, 
                        image: "https://www.starbucks.com.hk/media/catalog/product/4/c/4ce5ff0e-7946-4a65-83c4-f8983842f62d.jpg", 
                        description: "Layers of espresso-soaked sponge cake, mascarpone cream, and cocoa powder, perfect for coffee lovers." 
                    }
                ]
            },
            {
                id: "layered-cakes",
                name: "Layered Cakes",
                items: [
                    { 
                        name: "Red Velvet Cake", 
                        price: 14.50, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Red-Velvet-Loaf-Cake-_0.jpeg", 
                        description: "A moist, velvety cake with layers of cream cheese frosting, offering a perfect balance of sweetness and tang." 
                    },
                    { 
                        name: "Chocolate Fudge Cake", 
                        price: 16.00, 
                        image: "https://www.starbucks.co.th/stb-media/2020/08/Chocolate-Cake-1080.png", 
                        description: "Decadent layers of chocolate sponge cake filled with rich, velvety chocolate fudge frosting." 
                    },
                    { 
                        name: "Carrot Cake", 
                        price: 14.00, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Carrot-Cake_0.jpeg", 
                        description: "Moist spiced carrot cake with walnuts and a luscious cream cheese frosting." 
                    }
                ]
            },
            {
                id: "citrus-cakes",
                name: "Citrus Cakes",
                items: [
                    { 
                        name: "Lemon Loaf Cake", 
                        price: 13.50, 
                        image: "https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Lemon-Loaf-Cake---Feb-2023.jpeg", 
                        description: "A zesty, moist cake with a tangy lemon glaze, offering a burst of citrus in every bite." 
                    }
                ]
            },
            {
                id: "brownie",
                name: "Brownie",
                items: [
                    { 
                        name: "Chocolate Brownie", 
                        price: 12.50, 
                        image: "https://globalassets.starbucks.com/digitalassets/products/food/SBX20190715_DoubleChocolateChunkBrownie.jpg?impolicy=1by1_medium_630", 
                        description: "A rich, fudgy brownie with chunks of chocolate for an indulgent treat." 
                    }
                ]
            }
        ]
    }
];
isLoggedIn = false;

function logout() {

    document.querySelector('.home-container').style.display = 'flex';
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.register-container').style.display = 'none';
    document.getElementById('login-btn').style.display = 'block';
    document.getElementById('logout-btn').style.display = 'none';
    document.querySelector('.view-menu-btn').style.display = 'none';
    document.querySelector('.home-container .login-btn').style.display = 'block';
    document.querySelector('.signup-btn').style.display = 'block';
    isLoggedIn = false;
}

function showHome() {
    document.title = "Fabianero || Home";
    console.log(isLoggedIn)
    if (isLoggedIn) {
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.register-container').style.display = 'none';
        document.querySelector('.home-container').style.display = 'flex';
        document.querySelector('.view-menu-btn').style.display = 'block';
        document.querySelector('.home-container .login-btn').style.display = 'none';
        document.querySelector('.signup-btn').style.display = 'none';
        document.getElementById('login-btn').style.display = 'none';
        document.getElementById('logout-btn').style.display = 'block';
    } else {
        document.querySelector('.home-container').style.display = 'flex';
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.register-container').style.display = 'none';
        document.querySelector('.view-menu-btn').style.display = 'none';
        document.querySelector('.home-container .login-btn').style.display = 'block';
        document.querySelector('.signup-btn').style.display = 'block';
        document.getElementById('login-btn').style.display = 'block';
        document.getElementById('logout-btn').style.display = 'none';
        
    }
}

function showLogin() {
    document.title = "Fabianero || Login";
    document.querySelector('.home-container').style.display = 'none';
    document.querySelector('.register-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'flex';
}

function showRegister() {
    document.title = "Fabianero || Register";
    document.querySelector('.home-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.register-container').style.display = 'flex';
}

//ABANDON FUNCTION
function register() {
    alert("Registration successful!");
    showLogin();
}






