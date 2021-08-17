require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {
    
    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Shrimps', sortOrder: 10},
        {name: 'Crab and Lobster', sortOrder: 20},
        {name: 'Fish', sortOrder: 30},
        {name: 'Shell Fish', sortOrder: 40},
        {name: 'Snake', sortOrder: 50},
        {name: 'Insects', sortOrder: 60},
        {name: 'Hot Pot', sortOrder: 70},
        {name: 'Beef', sortOrder: 80},
        {name: 'Pork and Chicken', sortOrder: 90},
        {name: 'Vegetable', sortOrder: 100},
        {name: 'Snacks', sortOrder: 110}
    ]);

    await Item.deleteMany({});
    const items = await Item.create([
        {name: 'Steam Live Metapenaeus Ensis', category: categories[0], 
        description: 'Steam live Metapenaeus Ensis prawns dip in sauce of your choice', price: '19.99 per lb', photo: "https://i.imgur.com/BhuPUyT.jpg"},
        {name: 'Steam Live Blue Crab', category: categories[1], description: 'Steam whole live blue crab serve with garlic ginger sauce',
        price: '7.99 per lb', photo: "https://i.imgur.com/RtE4OZU.jpg"},
        {name: 'Steam Live Manila Clams', category: categories[3], description: 'Steam live manila clams', price: '5.99 per lb', photo: "https://i.imgur.com/BKrIsbZ.jpg"},
        {name: 'Steam Live Mussels', category: categories[3], description: 'Steam live mussels', price: '4.99 per lb', photo: "https://i.imgur.com/ZQQloUX.jpg"},
        {name: 'Steam Whole Live Scallop', category: categories[3], description: 'Steam whole live scallop with shell serve with chilli soy sauce', 
        price: '9.99 each', photo: "https://i.imgur.com/Z7ODwFa.jpg"},
        {name: 'Geoduck Sashimi', category: categories[3], description: 'Live Geoduck thin sliced sashimi', price: '17.99 per lb', photo: "https://i.imgur.com/o9MC0dy.jpg"},
        {name: 'Japanese A5 Wagyu New York Strip Loin Roast', category: categories[7], description: 'Japanese A5 wagyu teppanyaki or shabu shabu', 
        price: '81.99 per lb', photo: "https://i.imgur.com/wtIeUuo.jpg"},
        {name: 'Whole Maine Lobster and Beef Noodle Soup', category: categories[1], description: 'Whole live Maine lobster serve in beef broth with noodle', 
        price: '79 per bowl', photo: "https://i.imgur.com/Pkg4PWi.jpg"},
        {name: 'Chilli Pepper Live Snail', category: categories[3], description: 'Chilli pepper stir fry live snails extra spicy', 
        price: '8.99 per lb', photo: "https://i.imgur.com/pn8W3xv.jpg"},
        {name: 'Deep Fried Baby pigeon', category: categories[8], description: '3 weeks old baby pigeon deep fried extra crispy skin', 
        price: '13.99 each', photo: "https://i.imgur.com/mjfZ9j9.jpg"},
        {name: 'Fanny Bay Oyster on Half Shell', category: categories[3], description: 'Fresh catch Fanny Bay oyster serve with lemon and cocktail sauce', 
        price: '2.50 each', photo: "https://i.imgur.com/fHKin1O.jpg"},
        {name: 'Smoked Salmon', category: categories[2], description: 'Red King salmon is baptized in our secret brine, then slowly smoked over alderwood coals', 
        price: '13.99', photo: "https://i.imgur.com/RlO5Fh9.jpg"},
        {name: 'Pig Brain', category: categories[6], description: 'Fresh pig brain for hot pot', price: '7.99', photo: "https://i.imgur.com/eP3l7fC.jpg"},
        {name: 'Live Australian Lobster', category: categories[1], description: 'Garlic butter bake whole Australian Lobster', price: '35 per lb', photo: "https://i.imgur.com/qBnZX82.jpg"},
        {name: 'Mixed of Beef Organs', category: categories[7], description: 'A mixture of different beef organs in house secret sauce', 
        price: '2.50 each skewer', photo: "https://i.imgur.com/lnZiUNK.jpg"},
        {name: 'Shark Fin Soup Chinese Style', category: categories[2], description: 'Shark fin served in chicken broth with oyster and crab meat', 
        price: '9.99 per bowl', photo: "https://i.imgur.com/YeTtEe6.jpg"},
        {name: 'Live Asian Swamp Eel claypot', category: categories[2], description: 'Whole live swamp eel served in sizzling claypot', 
        price: '12.99', photo: "https://i.imgur.com/gFosRtg.jpg"},
        {name: 'Live River Shrimp and Seafood Soup', category: categories[0], description: 'Live fresh water shrimps with squid and mussel in seafood broth', 
        price: '9.99', photo: "https://i.imgur.com/tVEq0t5.jpg"},
        {name: 'Vietnamese Mango Salad', category: categories[10], description: 'Grilled shrimps mango salad', price: '12.99', photo: "https://i.imgur.com/HGmIsAT.jpg"},
        {name: 'Royal Chicken', category: categories[8], description: 'Mouantin free range running chicken', price: '9.99 half chicken', photo: "https://i.imgur.com/UIPdW9t.jpg"},
        {name: 'Chinese Broccoli with Squid', category: categories[3], description: 'Aged dried squid legs stir fry chinese broccoli', 
        price: '7.99', photo: "https://i.imgur.com/PAROjNS.jpg"},
        {name: 'Beef Carpaccio Vietnamese Style', category: categories[7], description: 'Raw filet magnon served with quail egg, fried shallot dressed with house special sauce and lime juice', 
        price: '17', photo: "https://i.imgur.com/d9Kq2mS.jpg"},
        {name: 'Lemongrass Fried Tofu', catgory: categories[9], description: 'Deep fried tofu with lemongrass', price: '12', photo: "https://i.imgur.com/O4vcTzP.jpg"},
        {name: 'Giant River Prawns', category: categories[0], description: 'Savory butter garlic chilly sauce giant river prawns served with woven noodle', 
        price: '11 each prawn', photo: "https://i.imgur.com/HNRWcbr.jpg"},
        {name: 'Banh Hoi Deluxe', category: categories[8], description: 'Grilled pork sausage, sugarcane shrimp, imperial roll, crispy pork belly served with woven noodle', 
        price: '40 4-item combo', photo: "https://i.imgur.com/o3QrSao.jpg"},
        {name: 'Razor Clam', category: categories[3], description: 'Live razor clam steam with garlic or stir fry with black bean sauce', 
        price: '9.99 per lb', photo: "https://i.imgur.com/UpmSW6m.jpg"},
        {name: 'Hemifusus AKA Giant Sea Snail', category: categories[3], description: 'Live giant sea snail sashimi', 
        price: '9.99 per lb', photo: "https://i.imgur.com/Hql00LY.jpg"},
        {name: 'Steam Live Coral Spot Prawn', category: categories[0], description: 'Steam live coral spot prawn serve with chilli soy sauce', 
        price: '29.99 per lb', photo: "https://i.imgur.com/ZVIJYmb.jpg"},
        {name: 'Steam Fresh Oyster', category: categories[3], description: 'Steam fresh oyster with minced garlic', 
        price: '1.99 each', photo: "https://i.imgur.com/zCPQxuX.jpg"},
        {name: 'Steam Pork Spare Rib', category: categories[8], description: 'Steam pork spare ribs with vermicelli and melon in black bean sauce', 
        price: '7.99', photo: "https://i.imgur.com/qVo6FNJ.jpg"},
        {name: 'Vietnamese Egg Crab', category: categories[1], description: 'Steam live Vietnamese egg crab', 
        price: '22.99 a lb', photo: "https://i.imgur.com/KY3mH1e.jpg"},
        {name: 'Roast Rack of Lamb', category: categories[7], description: 'Roast whole rack of lamb', 
        price: '29.99', photo: "https://i.imgur.com/o6ZhlF9.jpg"},
        {name: 'Santa Barbara Uni', category: categories[3], description: 'Fresh catch Santa Barbara uni', 
        price: '29.99', photo: "https://i.imgur.com/pfu1iRO.jpg"},
        {name: 'Steam Live Marbled Rockfish', category: categories[2], description: 'Steam whole live marbled rockfish in soy sauce',
        price: '12.99 per lb', photo: "https://i.imgur.com/rc336sR.jpg"},
        {name: 'Hokkaido Scallop', category: categories[3], description: 'Fresh Hokkaido scallop sashimi', price: '4.99 a pc', photo: "https://i.imgur.com/o54ejEg.jpg"},
        {name: 'Babylonia Lutosa', category: categories[3], description: 'Steam sea snail dipped in soy sauce', 
        price: '19.99 a lb', photo: "https://i.imgur.com/SO93nby.jpg"},
        {name: 'Black Pepper Baked Crab', category: categories[1], description: 'Live California dungeness crab baked in freshly grounded black pepper and butter', 
        price: '6.99 per lb', photo: "https://i.imgur.com/PlUJXln.jpg"},
        {name: 'Whole Maine Lobster', category: categories[1], description: 'Live Maine lobster can be served garlic butter baked or steam', 
        price: '7.99 per lb', photo: "https://i.imgur.com/kdci0LY.jpg"},
        {name: 'Salmon', category: categories[2], description: 'Fresh salmon sashimi style', price: '13 for 5 pcs', photo: "https://i.imgur.com/2lQJsjv.jpg"},
        {name: 'Halibut', category: categories[2], description: 'Fresh halibut sashimi style', price: '17 for 10 pcs', photo: "https://i.imgur.com/CdHQNSH.jpg"},
        {name: 'Cherry Stone Clam', category: categories[3], description: 'Fresh cherry stone clam on half shell', 
        price: '2 each', photo: "https://i.imgur.com/TekkJkS.jpg"},
        {name: 'Fried Stinky Tofu', category: categories[9], description: 'Deep fried aged stinky tofu', price: '2', photo: "https://i.imgur.com/zfqLWil.jpg"},
        {name: 'Octopus and Pig Intestine', category: categories[3], description: 'Octopus and pig intestine marinated in house special sauce', 
        price: '2 each skewer', photo: "https://i.imgur.com/tGo5oGW.jpg"},
        {name: 'Thai Live River Prawn', category: categories[0], description: 'Live fresh water river prawn grilled at your table', 
        price: '25 all you can eat', photo: "https://i.imgur.com/NqGGMvB.jpg"},
        {name: 'Thai Style Shark Fin Soup', category: categories[2], description: 'Shark fin in seafood broth served in claypot', price: '9.99', photo: "https://i.imgur.com/acMkz4G.jpg"},
        {name: 'Thai Style Bull Penis Soup', category: categories[7], description: 'Bull penis in herb broth', price: '6 per bowl', photo: "https://i.imgur.com/S7hXDOy.jpg"},
        {name: 'Bull Vagina Soup', category: categories[7], description: 'Bull vagina served in beef bone broth', price: '7 per bowl', photo: "https://i.imgur.com/2ggYHZE.jpg"},
        {name: 'Snake Soup', category: categories[4], description: 'Cobra snake soup with shredded chicken and mushroom', price: '11 per bowl', photo: "https://i.imgur.com/kJKBqDr.jpg"},
        {name: 'Thai Jumping Shrimp', category: categories[0], description: 'Live tiny shrimp with chilli pepper in lime and house speical sauce', 
        price: '7'},
        {name: 'Thai Style Beef Intestine Hot Pot', category: categories[7], description: 'Beef intestine with optional beef slices add-on hot pot style', 
        price: '9', photo: "https://i.imgur.com/lmvF9cF.jpg"},
        {name: 'Thai Style Catfish', category: categories[2], description: 'Thai style live catfish steamed in chilli', price: '7', photo: "https://i.imgur.com/MF1XEmf.jpg"},
        {name: 'Thai Mussel', category: categories[3], description: 'Chilled fresh mussel served with sauce of your choice', price: '3', photo: "https://i.imgur.com/UNXIviA.jpg"},
        {name: 'Thai Crab Cake', category: categories[1], description: 'Crab cake served with fish sauce', price: '3', photo: "https://i.imgur.com/sdueFNz.jpg"},
        {name: 'Grilled Giant River Prawn', category: categories[0], description: 'Grilled live giant river prawn', price: '12 each', photo: "https://i.imgur.com/xk2cDGF.jpg"},
        {name: 'Drunk Crab', category: categories[1], description: 'Fresh crab marinated in rice wine', price: '8', photo: "https://i.imgur.com/DJS6BDF.jpg"},
        {name: 'Grilled Pacific Lobster', category: categories[1], description: 'Fresh grilled whole pacific lobster', price: '22 each', photo: "https://i.imgur.com/TlcbgG6.jpg"},
        {name: 'Thai Silk Worm', category: categories[5], description: 'Deep fried silk worm(rich in protein)', price: '1.50', photo: "https://i.imgur.com/zYGeBXg.jpg"},
        {name: 'Grasshopper', category: categories[5], description: 'Deep fried grasshopper', price: '1.50', photo: "https://i.imgur.com/t2iDXeh.jpg"},
        {name: 'Bread Worm', category: categories[5], description: 'Deep fried bread worm(rich in protein)', price: '1.50', photo: "https://i.imgur.com/dYnXd8L.jpg"},
        {name: 'Scorpion', category: categories[5], description: 'Deep fried scorpion(Venomless)', price: '2 each', photo: "https://i.imgur.com/JDgnz8i.jpg"},
        {name: 'Crispy Fish Skin', category: categories[2], description: 'Chilled fish skin marinated in seasame oil extra crispy', price: '3', photo: "https://i.imgur.com/YZZInd6.jpg"},
        {name: 'Snake Wine', category: categories[4], description: 'Fresh cobra gut wine', price: '6 per shot', photo: "https://i.imgur.com/UqUSKtd.jpg"},
        {name: 'Thai Style Raw Shrimp', category: categories[0], description: 'Raw shrimps with chilli paste and lime', price: '4', photo: "https://i.imgur.com/lMPZiVj.jpg"},
        {name: 'Thai Style Raw Beef', category: categories[7], description: 'Raw beef marinated in chilli paste', price: '3', photo: "https://i.imgur.com/rlRcAJW.jpg"},
        {name: 'Thai Style Ant Egg Soup', category: categories[5], description: 'Ant egg served in broth with mushroom and veggies', price: '3', photo: "https://i.imgur.com/M41akxj.jpg"},
        {name: 'Jelly Fish', category: categories[2], description: 'Jelly fish marinated in house secret sauce', price: '2', photo: "https://i.imgur.com/M8Di3tK.jpg"},
        {name: 'Snake Skin', category: categories[4], description: 'Snake skin tossed in seasame oil', price: '6', photo: "https://i.imgur.com/0TA5114.jpg"},
        {name: 'Salt and Pepper Snake', category: categories[4], description: 'Live snake deep fried with salt and pepper', price: '16 per lb', photo: "https://i.imgur.com/n8c57xF.jpg"},
        {name: 'Snake Clay Pot', category: categories[4], description: 'Snake in special sauce served in clay pot', price: '28', photo: "https://i.imgur.com/BxJfJ6w.jpg"},
        {name: 'snake Fried Rice', category: categories[4], description: 'Minced snake meat fried rice', price: '13', photo: "https://i.imgur.com/rGDwN21.jpg"},
        {name: 'Pork Bone Broth', category: categories[6], description: 'Broth cooked for 12 hours with pork bones for hot pot', price: '6', photo: "https://i.imgur.com/oUfR4Km.jpg"},
        {name: 'Vegetable', category: categories[9], description: 'Vegetable in oyster sauce', price: '3', photo: "https://i.imgur.com/hOsL1F0.jpg"},
        {name: 'Pig Brain in Chilli Oil', category: categories[8], description: 'Pig brain slowly cooked in chilli oil with tofu', price: '5', photo: "https://i.imgur.com/lOfsrCd.jpg"},
        {name: 'Grilled Eggplant', category: categories[9], description: 'Grilled eggplant in garlic and chilli', price: '2', photo: "https://i.imgur.com/Vjw648g.jpg"},
        {name: 'Roast Duck', category: categories[8], description: 'Thinly sliced raosted duck', price: '8', photo: "https://i.imgur.com/Qwkjzji.jpg"},
        {name: 'Pig Ear', category: categories[8], description: 'Slcied marinated pig ear', price: '1.50', photo: "https://i.imgur.com/ZXgqNJl.jpg"},
        {name: 'Sichuan Style Snail', category: categories[3], description: 'Super spciy Sichuan snail', price: '5', photo: "https://i.imgur.com/jpwP7Td.jpg"},
        {name: 'Chinese Flowering Cabbage', category: categories[9], description: 'Choy Sum served in claypot', price: '4', photo: "https://i.imgur.com/dJOggcY.jpg"},
        {name: 'Rabbit', category: categories[8], description: 'Diced rabbit meat stir fry with chilli', price: '7', photo: "https://i.imgur.com/toMt9g8.jpg"},
        {name: 'Chilli Clam', category: categories[3], description: 'Fresh clam stir fry with dry chilli extra spicy', price: '4', photo: "https://i.imgur.com/QCbeqzx.jpg"},
        {name: 'Squid in Sizziling Hot Plate', category: categories[3], description: 'Spicy squid served on sizziling hot plate', price: '7', photo: "https://i.imgur.com/9M2WpmO.jpg"},
        {name: 'Sichuan Hot Pot', category: categories[6], description: 'Spciy and numbing Sichuan hot pot broth', price: '5', photo: "https://i.imgur.com/bkp75eM.jpg"},
        {name: 'Squid', category: categories[6], description: 'Sliced fresh squid for hot pot', price: '3', photo: "https://i.imgur.com/UNyah0m.jpg"},
        {name: 'Pig Intestine', category: categories[6], description: 'Pig intestine for hot pot', price: '2', photo: "https://i.imgur.com/FaM5QmV.jpg"},
        {name: 'Shrimp Paste', category: categories[6], description: 'Home made shrimp paste for hot pot', price: '2', photo: "https://i.imgur.com/Ujlgwgp.jpg"},
        {name: 'Goose Intestine', category: categories[6], description: 'Fresh goose intestine for hot pot', price: '5', photo: "https://i.imgur.com/0PYn8gz.jpg"},
        {name: 'Beef Tripe', category: categories[6], description: 'Fresh beef tripe for hot pot', price: '3', photo: "https://i.imgur.com/Ky5nUnu.jpg"},
        {name: 'Pig Kidney', category: categories[6], description: 'Fresh pig kidney for hot pot', price: '4', photo: "https://i.imgur.com/OZ9sQxm.jpg"},
        {name: 'Salt and Pepper Mantis Shrimp', category: categories[0], description: 'Salt and pepper mantis shrimp', price: '12 per lb', photo: "https://i.imgur.com/4lyZGPr.jpg"},
        {name: 'Stir Fry Chinese Broccoli', category: categories[9], description: 'Stir fry fresh chinese broccoli', price: '3', photo: "https://i.imgur.com/5WHAiAh.jpg"},
        {name: 'Deep Ocean Shrimp', category: categories[0], description: 'Live deep ocean shrimp boiled serve with chilli soy sauce', price: '12 per lb', photo: "https://i.imgur.com/890491h.jpg"},
        {name: 'Steam Abalone', category: categories[3], description: 'Steamed live abalone with sweet soy sauce', price: '3 each', photo: "https://i.imgur.com/5VfjMZk.jpg"},
        {name: 'Roast Goose', category: categories[8], description: 'Slow roasted goose', price: '25 half goose', photo: "https://i.imgur.com/7KOeCKP.jpg"},
        {name: 'Steam Dogtooth Grouper', category: categories[2], description: 'Steam whole live dogtooth grouper server in sweet soy sauce', 
        price: '8 per lb', photo: "https://i.imgur.com/4vIxaRl.jpg"},
        {name: 'Chinese Egg Crab', category: categories[1], description: 'Steam live egg crabs(tons of eggs)', price: '7 per lb', photo: "https://i.imgur.com/OpfaEv6.jpg"},
        {name: 'Fresh Alligator', category: categories[2], description: 'Fresh alligator can be served in soup or braised in clay pot', price: '8 per lb', photo: "https://i.imgur.com/Dn100Cx.jpg"},
        {name: 'Chicken Testicles', category: categories[6], description: 'Fresh whole chicken testicle for hot pot', price: '8', photo: "https://i.imgur.com/iRspJdY.jpg"},
        {name: 'Fish Intestine', category: categories[6], description: 'Fresh cutted fish intestine for hot pot', price: '6', photo: "https://i.imgur.com/xF9Soc4.jpg"},
        {name: 'Sand Worm', category: categories[5], description: 'Live freshly catched sand worm for soup', price: '2 per lb', photo: "https://i.imgur.com/PpYioiJ.jpg"},
        {name: 'Stir Fry Silk Worm', category: categories[5], description: 'Stir fry silk worm', price: '4', photo: "https://i.imgur.com/F0zEdtQ.jpg"},
        {name: 'Fresh Beef', category: categories[6], description: 'Freshly butchered beef never been refrigerated for hot pot', price: '6', photo: "https://i.imgur.com/DbM4SUG.jpg"},
        {name: 'Cow Tongue', category: categories[6], description: 'Cow tongue in thin slice for hot pot', price: '4', photo: "https://i.imgur.com/auORSpW.jpg"},
        {name: 'Cow Liver Soup', category: categories[7], description: 'Fresh cow liver in herbal broth', price: '1.50', photo: "https://i.imgur.com/aXW3UP4.jpg"},
        {name: 'Garlic Crawfish', category: categories[1], description: 'Live crawfish in garlic', price: '13', photo: "https://i.imgur.com/umjownO.jpg"},
        {name: 'Crawfish in Secret Sauce', category: categories[1], description: 'Live crawfish in secret sauce', price: '13', photo: "https://i.imgur.com/juJ6unO.jpg"},
        {name: 'Pig Liver', category: categories[6], description: 'Fresh pig liver for hot pot', price: '3', photo: "https://i.imgur.com/Rc6m92b.jpg"},
        {name: 'Oyster Omelette', category: categories[3], description: 'Egg omelette made with fresh oyster', price: '6', photo: "https://i.imgur.com/Vhttvz1.jpg"},
        {name: 'Local Beef', category: categories[6], description: 'Fresh hand cutted home butchered beef for hot pot', price: '26', photo: "https://i.imgur.com/8om6yHz.jpg"},
        {name: 'Steak Cube', category: categories[6], description: 'Cubed steak for hot pot', price: '23', photo: "https://i.imgur.com/zBufdVQ.jpg"},
        {name: 'Rock Cod', category: categories[6], description: 'Live whole rock cod fish sliced for hot pot', price: '70', photo: "https://i.imgur.com/CMwp0bN.jpg"},
        {name: 'Grass Carp', category: categories[2], 
        description: 'Live whole grass carp prepared five ways. 1. Fried bones 2. Soup 3. Skin tossed in house speical seasame 4. Intestine egg pancake 5. Chinese style sashimi', 
        price: '12 per lb', photo: "https://i.imgur.com/2MTuHfj.jpg"},
        {name: 'Pig Blood', category: categories[6], description: 'Fresh made pork blood for hot pot', price: '2', photo: "https://i.imgur.com/t6ppAQO.jpg"},
        {name: 'Pork', category: categories[6], description: 'Sliced pork for hot pot', price: '8', photo: "https://i.imgur.com/V7veJLA.jpg"},
        {name: 'Pig Feet', category: categories[8], description: 'sliced German pig feet', price: '11', photo: "https://i.imgur.com/Di2edBO.jpg"},
        {name: 'Frog', category: categories[3], description: 'Live frog with ginger and green onion', price: '3 each', photo: "https://i.imgur.com/PDyZHP2.jpg"},
        {name: 'Thai Blood Clam', category: categories[3], description: 'Grilled fresh blood clam', price: '3 per lb', photo: "https://i.imgur.com/2vBECgy.jpg"},
        {name: 'Thai Grilled Crab', category: categories[1], description: 'Grilled live Thai crab', price: '5 each', photo: "https://i.imgur.com/JffGfe4.jpg"},
        {name: 'Grilled Whole Squid', category: categories[3], description: 'Live grilled whole squid', price: '5', photo: "https://i.imgur.com/KjtK9uK.jpg"},
        {name: 'Grilled Scallop', category: categories[3], description: 'Grilled fresh scallop', price: '9', photo: "https://i.imgur.com/ZwfOVI5.jpg"},
        {name: 'Puffer Fish', category: categories[2], description: 'Wild caught Puffer fish served in three way. 1. Sashimi 2. Marinated skin 3. Hot Pot',
        price: '150 a set', photo: "https://i.imgur.com/T5hbjhp.jpg", photo: "https://i.imgur.com/GpSkovl.jpg"},
        {name: 'Japanese Wagyu Beef', category: categories[6], description: 'Japanese Wagyu for hot pot', price: '32', photo: "https://i.imgur.com/FlgdPrU.jpg"},
        {name: 'Pork Cutlet', category: categories[8], description: 'Deep fried pork cutlet served with curry rice', price: '12', photo: "https://i.imgur.com/U1zluue.jpg"},
        {name: 'Japanese A5 Kobe Beef', category: categories[7], description: 'A5 Kobe wagyu beef grilled at your table', price: '130', photo: "https://i.imgur.com/F46P99c.jpg"},
        {name: 'Squid Sashimi', category: categories[3], description: 'Fresh squid served sashimi style', price: '6', photo: "https://i.imgur.com/Lkxuq5L.jpg"},
        {name: 'BBQ Scallop in Shell', category: categories[3], description: 'BBQ fresh scallop', price: '7 each', photo: "https://i.imgur.com/htAFz2G.jpg"},
        {name: 'Uni', category: categories[3], description: 'Fresh uni sashimi style', price: '25', photo: "https://i.imgur.com/ThWvZFJ.jpg"},
        {name: 'Grilled Kobe Beef', category: categories[6], description: 'Grilled 100% Kobe beef', price: '77.50', photo: "https://i.imgur.com/GGqT9JW.jpg"},
        {name: 'Hong Kong Style Crab', category: categories[1], description: 'Hong Kong style stir fry crab', price: '30', photo: "https://i.imgur.com/0y71CO1.jpg"},
        {name: 'Fried Abalone', category: categories[3], description: 'Live abalone fried in salted egg yolk', price: '9 each', photo: "https://i.imgur.com/EgouZiO.jpg"},
        {name: 'Portuguese Curry Crab', category: categories[1], description: 'Portuguese style curry crab', price: '45', photo: "https://i.imgur.com/cLj9py6.jpg"}
    ]);
    console.log(items)

    process.exit();
})();