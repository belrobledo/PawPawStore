import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, addDoc, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNeiVW3iuuJJ-t0_s-qJn5LWQp1cMol_Y",
  authDomain: "paw-paw-store.firebaseapp.com",
  projectId: "paw-paw-store",
  storageBucket: "paw-paw-store.appspot.com",
  messagingSenderId: "914191146051",
  appId: "1:914191146051:web:07ded5eb540dd27a7148f6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getAllProducts(){
    const productsRef = collection(db, "products");
    const snapshot = await getDocs(productsRef);

    const products = snapshot.docs.map(element => {
        let product = element.data();
        product.id = element.id;
        return product;
    });

    return products;
}

export async function getProductsByCategory(categoryid){
    const productsRef = collection(db, "products");
    const qry = query(productsRef, where("category", "==", categoryid));
    const snapshot = await getDocs(qry);

    const products = snapshot.docs.map(element => {
        let product = element.data();
        product.id = element.id;
        return product;
    });

    return products;
}

export async function getProduct(id){
    const productsRef = collection(db, "products");
    const docRef = doc(productsRef, id)
    const snapshot = await getDoc(docRef);

    return { ...snapshot.data(), id: snapshot.id };
}

export async function createOrder(order){ //for ticket
    const orderRef = collection(db, "order");

    let response = await addDoc(orderRef, order);
    return response.id;
}

export async function exportArray(){ //execute one time to load db
    const products = [
        {
            "id": 2,
            "name": "Juguete circuito azul - Catit",
            "price": 3971,
            "category": "Gatos",
            "stock": 30,
            "imgurl": "/img/products/product2.webp",
            "detail": ""
        },
        {
            "id": 3,
            "name": "Juguete para perro Hueso Dental - FerPlast",
            "price": 4420,
            "category": "Perros",
            "stock": 4,
            "imgurl": "/img/products/product3.webp",
            "detail": ""
        },
        {
            "id": 4,
            "name": "Juguete para perro Peluche Koala c/sonido - Gigwi",
            "price": 5320,
            "category": "Perros",
            "stock": 5,
            "imgurl": "/img/products/product4.webp",
            "detail": ""
        },
        {
            "id": 5,
            "name": "Excellent para Gatos Adultos x 3kg",
            "price": 3110,
            "category": "Gatos",
            "stock": 47,
            "imgurl": "/img/products/product5.webp",
            "detail": ""
        },
        {
            "id": 6,
            "name": "Royal Canin mini Adultos x 7,5kg",
            "price": 8126,
            "category": "Perros",
            "stock": 86,
            "imgurl": "/img/products/product6.webp",
            "detail": ""
        },
        {
            "id": 7,
            "name": "Old Prince Novel cordero y arroz Perro adulto x 7,5kg",
            "price": 4620,
            "category": "Perros",
            "stock": 91,
            "imgurl": "/img/products/product7.webp",
            "detail": ""
        },
        {
            "id": 8,
            "name": "Pouch Pedigree cachorro carne en salsa x 85gr",
            "price": 134,
            "category": "Perros",
            "stock": 113,
            "imgurl": "/img/products/product8.webp",
            "detail": ""
        },
        {
            "id": 9,
            "name": "Pouch ProPlan wet dog adult Active Mind x 100gr",
            "price": 225,
            "category": "Perros",
            "stock": 17,
            "imgurl": "/img/products/product9.webp",
            "detail": ""
        },
        {
            "id": 10,
            "name": "Royal Canin para Gato castrado Weigh Control x 7,5kg",
            "price": 12862,
            "category": "Gatos",
            "stock": 35,
            "imgurl": "/img/products/product10.webp",
            "detail": ""
        },
        {
            "id": 11,
            "name": "VitalCan Balanced gato adulto x 7,5kg",
            "price": 6204,
            "category": "Gatos",
            "stock": 27,
            "imgurl": "/img/products/product11.webp",
            "detail": ""
        },
        {
            "id": 12,
            "name": "Piedras sanitarias Silica pack familiar economico x 7,6L",
            "price": 4914,
            "category": "Gatos",
            "stock": 18,
            "imgurl": "/img/products/product12.webp",
            "detail": ""
        },
        {
            "id": 13,
            "name": "Pecera Marina Deluxe AQ.Kit 38L",
            "price": 39913,
            "category": "Peces",
            "stock": 3,
            "imgurl": "/img/products/product13.webp",
            "detail": ""
        },
        {
            "id": 14,
            "name": "Alimento para Peces Tropicales tetra min x 200gr",
            "price": 8653,
            "category": "Peces",
            "stock": 40,
            "imgurl": "/img/products/product14.webp",
            "detail": ""
        },
        {
            "id": 15,
            "name": "ProPlan para Perro adulto pequeño x 3kg + DentalLife",
            "price": 4224,
            "category": "Perros",
            "stock": 29,
            "imgurl": "/img/products/product15.webp",
            "detail": ""
        },
        {
            "id": 16,
            "name": "Cama rectangular small con corderito azul y crema - Dogit",
            "price": 6958,
            "category": "Perros",
            "stock": 10,
            "imgurl": "/img/products/product16.webp",
            "detail": ""
        },
        {
            "id": 17,
            "name": "Cama rectangular mediana con corderito gris - Dogit",
            "price": 10956,
            "category": "Perros",
            "stock": 8,
            "imgurl": "/img/products/product17.webp",
            "detail": ""
        },
        {
            "id": 18,
            "name": "Bebedero automatico para Gato fuente flor 3L - Catit",
            "price": 10136,
            "category": "Gatos",
            "stock": 21,
            "imgurl": "/img/products/product18.webp",
            "detail": ""
        },
        {
            "id": 19,
            "name": "Tunel para Gato azul 68x97x28cm - Catit",
            "price": 8317,
            "category": "Gatos",
            "stock": 15,
            "imgurl": "/img/products/product19.webp",
            "detail": ""
        },
        {
            "id": 20,
            "name": "Alimentador automatico para Peces con pantalla LCD - Eheim",
            "price": 20119,
            "category": "Peces",
            "stock": 7,
            "imgurl": "/img/products/product20.webp",
            "detail": ""
        },
        {
            "id": 21,
            "name": "Filtro interno para pecera UIV 880 L/H - SOBO",
            "price": 20119,
            "category": "Peces",
            "stock": 11,
            "imgurl": "/img/products/product21.webp",
            "detail": ""
        },
        {
            "id": 22,
            "name": "Adorno para Pecera naufragio pirata 39x15x31cm",
            "price": 20592,
            "category": "Peces",
            "stock": 3,
            "imgurl": "/img/products/product22.webp",
            "detail": ""
        },
        {
            "id": 23,
            "name": "Alimento para Peces marinos Tetra Marine XL x 225gr",
            "price": 7315,
            "category": "Peces",
            "stock": 32,
            "imgurl": "/img/products/product23.webp",
            "detail": ""
        },
        {
            "id": 24,
            "name": "Rascador para Gato poste - Zootec",
            "price": 4309,
            "category": "Gatos",
            "stock": 7,
            "imgurl": "/img/products/product24.webp",
            "detail": ""
        },
        {
            "id": 25,
            "name": "Rascador para Gatos carton infinit",
            "price": 5128,
            "category": "Gatos",
            "stock": 3,
            "imgurl": "/img/products/product25.webp",
            "detail": ""
        },
        {
            "id": 26,
            "name": "Cucha mediana gris + almohadon - Eggys",
            "price": 18496,
            "category": "Perros",
            "stock": 4,
            "imgurl": "/img/products/product26.webp",
            "detail": ""
        },
        {
            "id": 27,
            "name": "Pechera perro arnes tela camuflada talle 6",
            "price": 6988,
            "category": "Perros",
            "stock": 13,
            "imgurl": "/img/products/product27.webp",
            "detail": ""
        },
        {
            "id": 28,
            "name": "Correa extensible L 5m - New Confort",
            "price": 8790,
            "category": "Perros",
            "stock": 11,
            "imgurl": "/img/products/product28.webp",
            "detail": ""
        },
        {
            "id": 29,
            "name": "Cuna ventana para Gato",
            "price": 10714,
            "category": "Gatos",
            "stock": 8,
            "imgurl": "/img/products/product29.webp",
            "detail": ""
        },
        {
            "id": 30,
            "name": "Comedero interactivo laberinto dispensador - Catit",
            "price": 7823,
            "category": "Gatos",
            "stock": 9,
            "imgurl": "/img/products/product30.webp",
            "detail": ""
        }
    ]

    for (let product of products){
        delete(product.id);
        addDoc( collection(db, "products"), product).then( response => {
            console.log(response);
        })
    }
}

export default db;