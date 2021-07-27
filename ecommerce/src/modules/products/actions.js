export async function fetchProducts({ commit }){
    // const data = await fetch('/data/products.js');
    // console.log(data);
    const products = [
        {
          "id": 1,
          "name": "Squid Ink",
          "picture": "https://robohash.org/evenietsitanimi.png?size=300x300&set=set1",
          "price": 45175,
          "stock": 62
        }, {
          "id": 2,
          "name": "Cafe Royale",
          "picture": "https://robohash.org/dictaeaexcepturi.png?size=300x300&set=set1",
          "price": 52496,
          "stock": 80
        }, {
          "id": 3,
          "name": "Chevril",
          "picture": "https://robohash.org/etdolorharum.png?size=300x300&set=set1",
          "price": 50779,
          "stock": 57
        }, {
          "id": 4,
          "name": "Breakfast Quesadillas",
          "picture": "https://robohash.org/fuganatusdolorem.png?size=300x300&set=set1",
          "price": 37224,
          "stock": 72
        }, {
          "id": 5,
          "name": "Wine - Casillero Deldiablo",
          "picture": "https://robohash.org/sedomnisvelit.png?size=300x300&set=set1",
          "price": 43792,
          "stock": 17
        }, {
          "id": 6,
          "name": "Pepsi, 355 Ml",
          "picture": "https://robohash.org/excepturireiciendisexercitationem.png?size=300x300&set=set1",
          "price": 47933,
          "stock": 60
        }, {
          "id": 7,
          "name": "Apple - Fuji",
          "picture": "https://robohash.org/etpariaturvoluptate.png?size=300x300&set=set1",
          "price": 55498,
          "stock": 48
        }, {
          "id": 8,
          "name": "Cheese - Mix",
          "picture": "https://robohash.org/earumatqueducimus.png?size=300x300&set=set1",
          "price": 46696,
          "stock": 8
        }, {
          "id": 9,
          "name": "Melon - Cantaloupe",
          "picture": "https://robohash.org/idvoluptasex.png?size=300x300&set=set1",
          "price": 6625,
          "stock": 51
        }, {
          "id": 10,
          "name": "Cocoa Powder - Dutched",
          "picture": "https://robohash.org/officiislaborequos.png?size=300x300&set=set1",
          "price": 20776,
          "stock": 36
        }, {
          "id": 11,
          "name": "Blueberries - Frozen",
          "picture": "https://robohash.org/maximeconsequaturodit.png?size=300x300&set=set1",
          "price": 7644,
          "stock": 56
        }, {
          "id": 12,
          "name": "Pail For Lid 1537",
          "picture": "https://robohash.org/nisinumquamtenetur.png?size=300x300&set=set1",
          "price": 17433,
          "stock": 15
        }, {
          "id": 13,
          "name": "White Fish - Filets",
          "picture": "https://robohash.org/essequisnihil.png?size=300x300&set=set1",
          "price": 38208,
          "stock": 22
        }, {
          "id": 14,
          "name": "Appetizer - Veg Assortment",
          "picture": "https://robohash.org/dignissimosiustoquis.png?size=300x300&set=set1",
          "price": 49634,
          "stock": 1
        }, {
          "id": 15,
          "name": "Tomato Puree",
          "picture": "https://robohash.org/quiautsed.png?size=300x300&set=set1",
          "price": 25920,
          "stock": 90
        }, {
          "id": 16,
          "name": "Wine - Fino Tio Pepe Gonzalez",
          "picture": "https://robohash.org/suntassumendaveniam.png?size=300x300&set=set1",
          "price": 46159,
          "stock": 88
        }, {
          "id": 17,
          "name": "Water - Aquafina Vitamin",
          "picture": "https://robohash.org/aspernaturmolestiaenihil.png?size=300x300&set=set1",
          "price": 35817,
          "stock": 14
        }, {
          "id": 18,
          "name": "Doilies - 8, Paper",
          "picture": "https://robohash.org/inabveritatis.png?size=300x300&set=set1",
          "price": 25840,
          "stock": 41
        }, {
          "id": 19,
          "name": "Stock - Veal, Brown",
          "picture": "https://robohash.org/facereminustempora.png?size=300x300&set=set1",
          "price": 40973,
          "stock": 3
        }, {
          "id": 20,
          "name": "Beans - Black Bean, Dry",
          "picture": "https://robohash.org/inharumsint.png?size=300x300&set=set1",
          "price": 38837,
          "stock": 16
        }, {
          "id": 21,
          "name": "Juice - Apple Cider",
          "picture": "https://robohash.org/quiveniamest.png?size=300x300&set=set1",
          "price": 10311,
          "stock": 77
        }, {
          "id": 22,
          "name": "Puff Pastry - Slab",
          "picture": "https://robohash.org/remsaepelibero.png?size=300x300&set=set1",
          "price": 38668,
          "stock": 2
        }, {
          "id": 23,
          "name": "Lettuce - Treviso",
          "picture": "https://robohash.org/doloretqui.png?size=300x300&set=set1",
          "price": 15949,
          "stock": 13
        }, {
          "id": 24,
          "name": "Chicken - Diced, Cooked",
          "picture": "https://robohash.org/temporealiquamanimi.png?size=300x300&set=set1",
          "price": 40463,
          "stock": 32
        }, {
          "id": 25,
          "name": "Chevere Logs",
          "picture": "https://robohash.org/molestiaemollitianatus.png?size=300x300&set=set1",
          "price": 49216,
          "stock": 86
        }, {
          "id": 26,
          "name": "Potatoes - Purple, Organic",
          "picture": "https://robohash.org/ametutaspernatur.png?size=300x300&set=set1",
          "price": 54080,
          "stock": 8
        }, {
          "id": 27,
          "name": "Crab - Imitation Flakes",
          "picture": "https://robohash.org/rerumautvoluptatum.png?size=300x300&set=set1",
          "price": 52706,
          "stock": 79
        }, {
          "id": 28,
          "name": "Chicken - Ground",
          "picture": "https://robohash.org/reiciendissapientead.png?size=300x300&set=set1",
          "price": 58032,
          "stock": 71
        }, {
          "id": 29,
          "name": "Lemon Balm - Fresh",
          "picture": "https://robohash.org/quiimpeditnatus.png?size=300x300&set=set1",
          "price": 17865,
          "stock": 40
        }, {
          "id": 30,
          "name": "Tea - Herbal Sweet Dreams",
          "picture": "https://robohash.org/ipsamdistinctioquia.png?size=300x300&set=set1",
          "price": 51602,
          "stock": 69
        }, {
          "id": 31,
          "name": "Stainless Steel Cleaner Vision",
          "picture": "https://robohash.org/harumetiste.png?size=300x300&set=set1",
          "price": 24653,
          "stock": 44
        }, {
          "id": 32,
          "name": "Limes",
          "picture": "https://robohash.org/quodutsapiente.png?size=300x300&set=set1",
          "price": 11373,
          "stock": 91
        }, {
          "id": 33,
          "name": "Flavouring Vanilla Artificial",
          "picture": "https://robohash.org/delenitidolorad.png?size=300x300&set=set1",
          "price": 52434,
          "stock": 54
        }, {
          "id": 34,
          "name": "Grand Marnier",
          "picture": "https://robohash.org/quismaioresducimus.png?size=300x300&set=set1",
          "price": 42561,
          "stock": 80
        }, {
          "id": 35,
          "name": "Cake - Miini Cheesecake Cherry",
          "picture": "https://robohash.org/optiomolestiasvelit.png?size=300x300&set=set1",
          "price": 48199,
          "stock": 85
        }, {
          "id": 36,
          "name": "Spring Roll Wrappers",
          "picture": "https://robohash.org/officiaisteporro.png?size=300x300&set=set1",
          "price": 14943,
          "stock": 59
        }, {
          "id": 37,
          "name": "Sole - Fillet",
          "picture": "https://robohash.org/estassumendain.png?size=300x300&set=set1",
          "price": 26088,
          "stock": 67
        }, {
          "id": 38,
          "name": "Bread - Pain Au Liat X12",
          "picture": "https://robohash.org/quaequiid.png?size=300x300&set=set1",
          "price": 22577,
          "stock": 37
        }, {
          "id": 39,
          "name": "Pork - Inside",
          "picture": "https://robohash.org/consectetursedesse.png?size=300x300&set=set1",
          "price": 19898,
          "stock": 97
        }, {
          "id": 40,
          "name": "Cucumber - Pickling Ontario",
          "picture": "https://robohash.org/occaecatiprovidentconsectetur.png?size=300x300&set=set1",
          "price": 39364,
          "stock": 13
        }, {
          "id": 41,
          "name": "Wine - Trimbach Pinot Blanc",
          "picture": "https://robohash.org/cumquiavitae.png?size=300x300&set=set1",
          "price": 41060,
          "stock": 12
        }, {
          "id": 42,
          "name": "Wine - Red, Antinori Santa",
          "picture": "https://robohash.org/sitvelitdolor.png?size=300x300&set=set1",
          "price": 24478,
          "stock": 46
        }, {
          "id": 43,
          "name": "Shrimp - Black Tiger 16/20",
          "picture": "https://robohash.org/autnumquamdebitis.png?size=300x300&set=set1",
          "price": 25723,
          "stock": 32
        }, {
          "id": 44,
          "name": "Ginsing - Fresh",
          "picture": "https://robohash.org/repellendusautemnumquam.png?size=300x300&set=set1",
          "price": 31798,
          "stock": 49
        }, {
          "id": 45,
          "name": "Bagel - 12 Grain Preslice",
          "picture": "https://robohash.org/delenitilaboriosamdignissimos.png?size=300x300&set=set1",
          "price": 19376,
          "stock": 58
        }, {
          "id": 46,
          "name": "Bread - Italian Roll With Herbs",
          "picture": "https://robohash.org/reprehenderitassumendainventore.png?size=300x300&set=set1",
          "price": 59638,
          "stock": 19
        }, {
          "id": 47,
          "name": "Pork Loin Bine - In Frenched",
          "picture": "https://robohash.org/temporeetet.png?size=300x300&set=set1",
          "price": 9381,
          "stock": 54
        }, {
          "id": 48,
          "name": "Soup - Campbells, Lentil",
          "picture": "https://robohash.org/etcupiditateculpa.png?size=300x300&set=set1",
          "price": 45002,
          "stock": 50
        }, {
          "id": 49,
          "name": "Wine - Vineland Estate Semi - Dry",
          "picture": "https://robohash.org/suntconsecteturut.png?size=300x300&set=set1",
          "price": 7637,
          "stock": 17
        }, {
          "id": 50,
          "name": "Veal - Chops, Split, Frenched",
          "picture": "https://robohash.org/aliquamfugaexpedita.png?size=300x300&set=set1",
          "price": 59228,
          "stock": 59
        }, {
          "id": 51,
          "name": "Pimento - Canned",
          "picture": "https://robohash.org/quasquibusdamnecessitatibus.png?size=300x300&set=set1",
          "price": 30754,
          "stock": 54
        }, {
          "id": 52,
          "name": "Coconut Milk - Unsweetened",
          "picture": "https://robohash.org/doloremquesitreiciendis.png?size=300x300&set=set1",
          "price": 5062,
          "stock": 96
        }, {
          "id": 53,
          "name": "Wine - Rosso Del Veronese Igt",
          "picture": "https://robohash.org/utofficiiset.png?size=300x300&set=set1",
          "price": 29560,
          "stock": 74
        }, {
          "id": 54,
          "name": "Contreau",
          "picture": "https://robohash.org/voluptatepraesentiumtemporibus.png?size=300x300&set=set1",
          "price": 59928,
          "stock": 76
        }, {
          "id": 55,
          "name": "Cheese - Perron Cheddar",
          "picture": "https://robohash.org/nihilreprehenderitquasi.png?size=300x300&set=set1",
          "price": 41817,
          "stock": 96
        }, {
          "id": 56,
          "name": "7up Diet, 355 Ml",
          "picture": "https://robohash.org/etveldebitis.png?size=300x300&set=set1",
          "price": 5974,
          "stock": 96
        }, {
          "id": 57,
          "name": "Cookies Cereal Nut",
          "picture": "https://robohash.org/sedteneturquis.png?size=300x300&set=set1",
          "price": 43591,
          "stock": 20
        }, {
          "id": 58,
          "name": "Spring Roll Wrappers",
          "picture": "https://robohash.org/aliquameaqueearum.png?size=300x300&set=set1",
          "price": 32444,
          "stock": 99
        }, {
          "id": 59,
          "name": "Tia Maria",
          "picture": "https://robohash.org/eumeiusquis.png?size=300x300&set=set1",
          "price": 18588,
          "stock": 83
        }, {
          "id": 60,
          "name": "Dill - Primerba, Paste",
          "picture": "https://robohash.org/natusomnisprovident.png?size=300x300&set=set1",
          "price": 17516,
          "stock": 15
        }, {
          "id": 61,
          "name": "Apple - Northern Spy",
          "picture": "https://robohash.org/autempraesentiumaliquam.png?size=300x300&set=set1",
          "price": 15049,
          "stock": 28
        }, {
          "id": 62,
          "name": "Dooleys Toffee",
          "picture": "https://robohash.org/corruptivoluptatibusquos.png?size=300x300&set=set1",
          "price": 55410,
          "stock": 78
        }, {
          "id": 63,
          "name": "Pasta - Lasagna Noodle, Frozen",
          "picture": "https://robohash.org/doloribusquamsapiente.png?size=300x300&set=set1",
          "price": 27717,
          "stock": 56
        }, {
          "id": 64,
          "name": "Bread - Pumpernickle, Rounds",
          "picture": "https://robohash.org/excepturieaquae.png?size=300x300&set=set1",
          "price": 16687,
          "stock": 71
        }, {
          "id": 65,
          "name": "Lamb - Loin, Trimmed, Boneless",
          "picture": "https://robohash.org/corruptiasperioresnesciunt.png?size=300x300&set=set1",
          "price": 7832,
          "stock": 32
        }, {
          "id": 66,
          "name": "Truffle Paste",
          "picture": "https://robohash.org/aspernaturaccusamusasperiores.png?size=300x300&set=set1",
          "price": 33869,
          "stock": 70
        }, {
          "id": 67,
          "name": "Tea - Earl Grey",
          "picture": "https://robohash.org/utetdignissimos.png?size=300x300&set=set1",
          "price": 6373,
          "stock": 10
        }, {
          "id": 68,
          "name": "Black Currants",
          "picture": "https://robohash.org/accusamusetnulla.png?size=300x300&set=set1",
          "price": 42033,
          "stock": 42
        }, {
          "id": 69,
          "name": "Squash - Pattypan, Yellow",
          "picture": "https://robohash.org/etperferendisnatus.png?size=300x300&set=set1",
          "price": 22007,
          "stock": 3
        }, {
          "id": 70,
          "name": "Appetizer - Seafood Assortment",
          "picture": "https://robohash.org/quiutdolorem.png?size=300x300&set=set1",
          "price": 54634,
          "stock": 72
        }, {
          "id": 71,
          "name": "Veal - Heart",
          "picture": "https://robohash.org/atundenecessitatibus.png?size=300x300&set=set1",
          "price": 5408,
          "stock": 35
        }, {
          "id": 72,
          "name": "Pepsi - Diet, 355 Ml",
          "picture": "https://robohash.org/aspernatursimiliquequod.png?size=300x300&set=set1",
          "price": 31331,
          "stock": 10
        }, {
          "id": 73,
          "name": "Sprouts - Alfalfa",
          "picture": "https://robohash.org/repudiandaenecessitatibusvelit.png?size=300x300&set=set1",
          "price": 41479,
          "stock": 27
        }, {
          "id": 74,
          "name": "Appetizer - Escargot Puff",
          "picture": "https://robohash.org/placeatautemest.png?size=300x300&set=set1",
          "price": 46320,
          "stock": 42
        }, {
          "id": 75,
          "name": "Neckerchief Blck",
          "picture": "https://robohash.org/dignissimosdoloritaque.png?size=300x300&set=set1",
          "price": 41790,
          "stock": 100
        }, {
          "id": 76,
          "name": "Beef - Top Sirloin",
          "picture": "https://robohash.org/ettemporibusaccusamus.png?size=300x300&set=set1",
          "price": 33367,
          "stock": 89
        }, {
          "id": 77,
          "name": "Wine - Gewurztraminer Pierre",
          "picture": "https://robohash.org/iureetquas.png?size=300x300&set=set1",
          "price": 59775,
          "stock": 93
        }, {
          "id": 78,
          "name": "Appetizer - Lobster Phyllo Roll",
          "picture": "https://robohash.org/ametquianimi.png?size=300x300&set=set1",
          "price": 35472,
          "stock": 3
        }, {
          "id": 79,
          "name": "Cheese - Havarti, Roasted Garlic",
          "picture": "https://robohash.org/dolornonalias.png?size=300x300&set=set1",
          "price": 46481,
          "stock": 61
        }, {
          "id": 80,
          "name": "Bread - Raisin",
          "picture": "https://robohash.org/reprehenderitsaepeeaque.png?size=300x300&set=set1",
          "price": 47210,
          "stock": 37
        }, {
          "id": 81,
          "name": "Stock - Veal, Brown",
          "picture": "https://robohash.org/omnisexercitationemasperiores.png?size=300x300&set=set1",
          "price": 24532,
          "stock": 17
        }, {
          "id": 82,
          "name": "Wine - White, Ej",
          "picture": "https://robohash.org/omnisporrovoluptatum.png?size=300x300&set=set1",
          "price": 56692,
          "stock": 24
        }, {
          "id": 83,
          "name": "Pork - Bacon, Double Smoked",
          "picture": "https://robohash.org/vitaenammolestiae.png?size=300x300&set=set1",
          "price": 22766,
          "stock": 78
        }, {
          "id": 84,
          "name": "Coffee - Almond Amaretto",
          "picture": "https://robohash.org/estperspiciatisid.png?size=300x300&set=set1",
          "price": 57157,
          "stock": 98
        }, {
          "id": 85,
          "name": "Beans - Yellow",
          "picture": "https://robohash.org/estoditab.png?size=300x300&set=set1",
          "price": 44270,
          "stock": 23
        }, {
          "id": 86,
          "name": "Cheese - Parmesan Grated",
          "picture": "https://robohash.org/porrovoluptasautem.png?size=300x300&set=set1",
          "price": 33796,
          "stock": 96
        }, {
          "id": 87,
          "name": "Coriander - Ground",
          "picture": "https://robohash.org/autquasicorrupti.png?size=300x300&set=set1",
          "price": 37022,
          "stock": 38
        }, {
          "id": 88,
          "name": "Blue Curacao - Marie Brizard",
          "picture": "https://robohash.org/consequaturteneturqui.png?size=300x300&set=set1",
          "price": 15088,
          "stock": 36
        }, {
          "id": 89,
          "name": "Water - Perrier",
          "picture": "https://robohash.org/utseddignissimos.png?size=300x300&set=set1",
          "price": 16609,
          "stock": 40
        }, {
          "id": 90,
          "name": "Cut Wakame - Hanawakaba",
          "picture": "https://robohash.org/namquiaitaque.png?size=300x300&set=set1",
          "price": 57274,
          "stock": 34
        }, {
          "id": 91,
          "name": "Cream - 18%",
          "picture": "https://robohash.org/doloriurearchitecto.png?size=300x300&set=set1",
          "price": 21025,
          "stock": 35
        }, {
          "id": 92,
          "name": "Wine - Red, Pinot Noir, Chateau",
          "picture": "https://robohash.org/noncupiditateullam.png?size=300x300&set=set1",
          "price": 36738,
          "stock": 73
        }, {
          "id": 93,
          "name": "Beer - True North Lager",
          "picture": "https://robohash.org/quaeratsequiexplicabo.png?size=300x300&set=set1",
          "price": 48214,
          "stock": 31
        }, {
          "id": 94,
          "name": "Sloe Gin - Mcguinness",
          "picture": "https://robohash.org/maximeomnisex.png?size=300x300&set=set1",
          "price": 31333,
          "stock": 90
        }, {
          "id": 95,
          "name": "Roe - Lump Fish, Red",
          "picture": "https://robohash.org/perferendistemporibusaut.png?size=300x300&set=set1",
          "price": 31649,
          "stock": 47
        }, {
          "id": 96,
          "name": "Coffee - Decaffeinato Coffee",
          "picture": "https://robohash.org/porrocorporisquo.png?size=300x300&set=set1",
          "price": 44081,
          "stock": 30
        }, {
          "id": 97,
          "name": "Crab Meat Claw Pasteurise",
          "picture": "https://robohash.org/quaeratfugiatreprehenderit.png?size=300x300&set=set1",
          "price": 12743,
          "stock": 56
        }, {
          "id": 98,
          "name": "Flavouring - Orange",
          "picture": "https://robohash.org/consequunturiurelibero.png?size=300x300&set=set1",
          "price": 51587,
          "stock": 8
        }, {
          "id": 99,
          "name": "Towel Multifold",
          "picture": "https://robohash.org/officiaquiaquis.png?size=300x300&set=set1",
          "price": 30399,
          "stock": 39
        }, {
          "id": 100,
          "name": "Olives - Nicoise",
          "picture": "https://robohash.org/utmolestiaseos.png?size=300x300&set=set1",
          "price": 7538,
          "stock": 28
        }
      ];
    commit('setProducts', products);
}