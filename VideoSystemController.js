import { VideoSystem } from "./VideoSystemModel";
class VideoSystemController {
    //Campos privados
    #Videosystem;
    #VideoSystemView;

    #loadVideoSystemObjects() {
        let category1 = this.#Videosystem.getCategory('Accion', 'genero de accion');
        let category2 = this.#Videosystem.getCategory('Romance', 'genero de romance');
        let category3 = this.#Videosystem.getCategory('Misterio', 'genero de misterio');
        let act = new Person("Paco", "Mambo", "Reyes", "5/02/1993", "");
        let act2 = new Person("Rosa", "Lanza", "Torres", "17/11/1980", "");
        let act3 = new Person("Lis", "Torres", "Poveda", "22/09/1990", "");
        let act4 = new Person("Jose", "Mambo", "Reyes", "5/02/1993", "");
        let act5 = new Person("Maria", "Parra", "Lanza", "11/03/1988", "");
        let act6 = new Person("Antonio", "Maizal", "Luces", "03/03/1992", "");
        let act7 = new Person("Rocky", "Royers", "", "5/02/1993", "");
        let act8 = new Person("Ross", "Cavil", "", "18/12/1985", "");
        let act9 = new Person("Henry", "Geller", "", "28/04/1990", "");
        let dir = new Person("Mac", "Reyes", "Lanza", "2/08/1980", "");
        let dir2 = new Person("Rocky", "Torres", "Poveda", "10/05/1992", "");
        let dir3 = new Person("Jaime", "Piña", "Lotes", "2/08/1983", "");
        let dir4 = new Person("Guillermo", "Pantalla", "Paños", "18/07/1992", "");
        let dir5= new Person("Emilio", "Plantas", "Caños", "2/08/1980", "");
        let dir6 = new Person("Stan", "Rossbel", "", "22/04/1972", "");
        let dir7= new Person("Jonny", "Passer", "", "1/09/1985", "");
        let dir8 = new Person("Ryan", "Turner", "", "11/08/1995", "");
        let prod = new Movie("Las llamas", "Español", "20/03/2010", "fuego", "a", new Resource(59, "lod"), new Coordinate(48, 70));
        let prod2 = new Movie("Sparta", "Español", "20/03/2010", "esto es esparta", "a", new Resource(123, "lod"), new Coordinate(48, 70));
        let prod3 = new Serie("Mellizos", "Español", "20/03/2010", "o gemelos?", "a", new Resource(30, "lod"), new Coordinate(48, 70), 8);
        let prod4 = new Movie("Captura la bandera", "Español", "28/010/2019", "Una carrera a la luna a por la bandera?", "a", new Resource(82, "lod"), new Coordinate(48, 70));

        let prod5 = new Serie("Entre fantasmas", "EEUU", "10/02/2000", "Una mujer que puede hablar con los fantasmas", "a", new Resource(30, "lod"), new Coordinate(34, 33), 11);
        let prod6 = new Movie("Super Lopez", "Español", "30/07/2018", "Un superman español", "a", new Resource(123, "lod"), new Coordinate(48, 70));
        let prod7 = new Movie("Tadeo Jones", "Español", "09/11/2012", "Las Aventuras de Tadeo para ayudar a un amigo", "a", new Resource(123, "lod"), new Coordinate(48, 70));
        let prod8 = new Serie("Friends", "EEUU", "20/03/1996", "La vida de un grupo de amigos en Nueva York", "a", new Resource(40, "lod"), new Coordinate(34, 33), 10);

        let prod9 = new Serie("Castle", "EEUU", "14/07/2008", "Las aventuras de un escritor en el cuerpo de policia", "a", new Resource(40, "lod"), new Coordinate(34, 33), new Coordinate(34, 33));
        let prod10 = new Movie("The Iron Giant", "EEUU", "22/11/2005", "Un gigante de hierro cae en la tierra y un niño lo oculta", "a", new Resource(90, "lod"), new Coordinate(34, 33));
        let prod11 = new Movie("Rocky", "EEUU", "20/03/1992", "El esfuerzo de Rocky por superarse", "a", new Resource(125, "lod"), new Coordinate(34, 33));
        let prod12 = new Serie("Candice Renoir", "Francia", "17/09/2018", "Los casos de una inspectora de policia", "a", new Resource(123, "lod"), new Coordinate(20, 70), 7);


        let Videosystem = this.#Videosystem;
        Videosystem.addCategory(category1, category2, category3, category4);

        let product1 = this.#Videosystem.getProduct(1, 'Apple', 'Laptop Model1', 1100, 'Laptop');
        let product2 = this.#Videosystem.getProduct(2, 'Apple', 'Camera Model2', 1200, 'Camera');
        let product3 = this.#Videosystem.getProduct(3, 'Apple', 'Smartphone Model3', 1300, 'Smartphone');
        let product4 = this.#Videosystem.getProduct(4, 'Apple', 'Tablet Model4', 1400, 'Tablet');
        let product5 = this.#Videosystem.getProduct(5, 'Apple', 'Laptop Model5', 1500, 'Laptop');
        let product6 = this.#Videosystem.getProduct(6, 'HP', 'Laptop Model1', 2100, 'Laptop');
        let product7 = this.#Videosystem.getProduct(7, 'HP', 'Camera Model2', 2200, 'Camera');
        let product8 = this.#Videosystem.getProduct(8, 'HP', 'Tablet Model3', 2300, 'Tablet');
        let product9 = this.#Videosystem.getProduct(9, 'HP', 'Smartphone Model4', 2400, 'Smartphone');
        let product10 = this.#Videosystem.getProduct(10, 'HP', 'Laptop Model5', 2500, 'Laptop');
        let product11 = this.#Videosystem.getProduct(11, 'Microsoft', 'Laptop Model1', 3100, 'Laptop');
        let product12 = this.#Videosystem.getProduct(12, 'Microsoft', 'Camera Model2', 3200, 'Camera');
        let product13 = this.#Videosystem.getProduct(13, 'Microsoft', 'Tablet Model3', 3300, 'Tablet');
        let product14 = this.#Videosystem.getProduct(14, 'Microsoft', 'Smartphone Model4', 3400, 'Smartphone');
        let product15 = this.#Videosystem.getProduct(15, 'Microsoft', 'Laptop Model5', 3500, 'Laptop');
        let product16 = this.#Videosystem.getProduct(16, 'Samsung', 'Laptop Model1', 4100, 'Laptop');
        let product17 = this.#Videosystem.getProduct(17, 'Samsung', 'Camera Model2', 4200, 'Camera');
        let product18 = this.#Videosystem.getProduct(18, 'Samsung', 'Tablet Model3', 4300, 'Tablet');
        let product19 = this.#Videosystem.getProduct(19, 'Samsung', 'Tablet Model4', 4400, 'Tablet');
        let product20 = this.#Videosystem.getProduct(20, 'Samsung', 'Laptop Model5', 4500, 'Laptop');

        product1.url = `https://via.placeholder.com/258x172.jpg?text=${product1.brand}+${product1.model}`;
        product2.url = `https://via.placeholder.com/258x172.jpg?text=${product2.brand}+${product2.model}`;
        product3.url = `https://via.placeholder.com/258x172.jpg?text=${product3.brand}+${product3.model}`;
        product4.url = `https://via.placeholder.com/258x172.jpg?text=${product4.brand}+${product4.model}`;
        product5.url = `https://via.placeholder.com/258x172.jpg?text=${product5.brand}+${product5.model}`;
        product6.url = `https://via.placeholder.com/258x172.jpg?text=${product6.brand}+${product6.model}`;
        product7.url = `https://via.placeholder.com/258x172.jpg?text=${product7.brand}+${product7.model}`;
        product8.url = `https://via.placeholder.com/258x172.jpg?text=${product8.brand}+${product8.model}`;
        product9.url = `https://via.placeholder.com/258x172.jpg?text=${product9.brand}+${product9.model}`;
        product10.url = `https://via.placeholder.com/258x172.jpg?text=${product10.brand}+${product10.model}`;
        product11.url = `https://via.placeholder.com/258x172.jpg?text=${product11.brand}+${product11.model}`;
        product12.url = `https://via.placeholder.com/258x172.jpg?text=${product12.brand}+${product12.model}`;
        product13.url = `https://via.placeholder.com/258x172.jpg?text=${product13.brand}+${product13.model}`;
        product14.url = `https://via.placeholder.com/258x172.jpg?text=${product14.brand}+${product14.model}`;
        product15.url = `https://via.placeholder.com/258x172.jpg?text=${product15.brand}+${product15.model}`;
        product16.url = `https://via.placeholder.com/258x172.jpg?text=${product16.brand}+${product16.model}`;
        product17.url = `https://via.placeholder.com/258x172.jpg?text=${product17.brand}+${product17.model}`;
        product18.url = `https://via.placeholder.com/258x172.jpg?text=${product18.brand}+${product18.model}`;
        product19.url = `https://via.placeholder.com/258x172.jpg?text=${product19.brand}+${product19.model}`;
        product20.url = `https://via.placeholder.com/258x172.jpg?text=${product20.brand}+${product20.model}`;
        product1.description = 'Descripción ' + product1.model;
        product2.description = 'Descripción ' + product2.model;
        product3.description = 'Descripción ' + product3.model;
        product4.description = 'Descripción ' + product4.model;
        product5.description = 'Descripción ' + product5.model;
        product6.description = 'Descripción ' + product6.model;
        product7.description = 'Descripción ' + product7.model;
        product8.description = 'Descripción ' + product8.model;
        product9.description = 'Descripción ' + product9.model;
        product10.description = 'Descripción ' + product10.model;
        product11.description = 'Descripción ' + product11.model;
        product12.description = 'Descripción ' + product12.model;
        product13.description = 'Descripción ' + product13.model;
        product14.description = 'Descripción ' + product14.model;
        product15.description = 'Descripción ' + product15.model;
        product16.description = 'Descripción ' + product16.model;
        product17.description = 'Descripción ' + product17.model;
        product18.description = 'Descripción ' + product18.model;
        product19.description = 'Descripción ' + product19.model;
        product20.description = 'Descripción ' + product20.model;

        Videosystem.addProductInCategory(category1, product1, product2, product3, product4, product5);
        Videosystem.addProductInCategory(category2, product6, product7, product8, product9, product10);
        Videosystem.addProductInCategory(category3, product11, product12, product13, product14, product15);
        Videosystem.addProductInCategory(category4, product16, product17, product18, product19, product20);

        //console.log(Videosystem.toString());
    }
    constructor(model, view) {
        this.#Videosystem = model;
        this.#Videosystem = view;

        this.onLoad();
        this.onInit();

        this.#Videosystem.bindInit(this.handleInit);
        this.#Videosystem.bindProductsTypeList(this.handleProductsTypeList);
    }
    onLoad = () => {
        this.#loadVideoSystemObjects();
        this.#managerView.showProductTypes();
        this.onAddCategory();
    }
}
export default VideoSystemController;