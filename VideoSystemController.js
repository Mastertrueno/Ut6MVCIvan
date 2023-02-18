import { VideoSystem, Category, Coordinate, Resource, User,Person,Movie,Serie } from "./VideoSystemModel.js";
class VideoSystemController {
    //Campos privados
    #Videosystem;
    #VideoSystemView;

    #loadVideoSystemObjects() {
        let category1 = new Category('Accion', 'genero de accion');
        let category2 = new Category('Romance', 'genero de romance');
        let category3 = new Category('Misterio', 'genero de misterio');

        let user = new User("Lu", "lume@gmail.com", "12345678");
        let user2 = new User("Mi", "lum@gmail.com", "12345678");

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
        let dir5 = new Person("Emilio", "Plantas", "Caños", "2/08/1980", "");
        let dir6 = new Person("Stan", "Rossbel", "", "22/04/1972", "");
        let dir7 = new Person("Jonny", "Passer", "", "1/09/1985", "");
        let dir8 = new Person("Ryan", "Turner", "", "11/08/1995", "");

        let prod = new Movie("Las llamas", "Español", "20/03/2010", "fuego", "a", new Resource(59, "lod"), new Coordinate(48, 70));
        let prod2 = new Movie("Sparta", "Español", "20/03/2010", "esto es esparta", "a", new Resource(123, "lod"), new Coordinate(48, 70));
        let prod3 = new Serie("Mellizos", "Español", "20/03/2010", "o gemelos?", "a", new Resource(30, "lod"), new Coordinate(48, 70), 8);
        let prod4 = new Movie("Captura la bandera", "Español", "22/04/2013", "Una carrera a la luna a por la bandera", "a", new Resource(82, "lod"), new Coordinate(48, 70));


        let prod5 = new Serie("Entre fantasmas", "EEUU", "10/02/2000", "Una mujer que puede hablar con los fantasmas", "a", new Resource(30, "lod"), new Coordinate(34, 33), 11);
        let prod6 = new Movie("Super Lopez", "Español", "30/07/2018", "Un superman español", "a", new Resource(123, "lod"), new Coordinate(48, 70));
        let prod7 = new Movie("Tadeo Jones", "Español", "09/11/2012", "Las Aventuras de Tadeo para ayudar a un amigo", "a", new Resource(123, "lod"), new Coordinate(48, 70));
        let prod8 = new Serie("Friends", "EEUU", "20/03/1996", "La vida de un grupo de amigos en Nueva York", "a", new Resource(40, "lod"), new Coordinate(34, 33), 10);

        let prod9 = new Serie("Castle", "EEUU", "14/07/2008", "Las aventuras de un escritor en el cuerpo de policia", "a", new Resource(40, "lod"), new Coordinate(34, 33), new Coordinate(34, 33));
        let prod10 = new Movie("The Iron Giant", "EEUU", "22/11/2005", "Un gigante de hierro cae en la tierra y un niño lo oculta", "a", new Resource(90, "lod"), new Coordinate(34, 33));
        let prod11 = new Movie("Rocky", "EEUU", "20/03/1992", "El esfuerzo de Rocky por superarse", "a", new Resource(125, "lod"), new Coordinate(34, 33));
        let prod12 = new Serie("Candice Renoir", "Francia", "17/09/2018", "Los casos de una inspectora de policia", "a", new Resource(123, "lod"), new Coordinate(20, 70), 7);


        let Videosystem = this.#Videosystem;
        let v = VideoSystem.getInstance()
        Videosystem.addUser(user);
        Videosystem.addUser(user2);

        Videosystem.addActor(act);
        Videosystem.addActor(act2);
        Videosystem.addActor(act3);
        Videosystem.addActor(act4);
        Videosystem.addActor(act5);
        Videosystem.addActor(act6);
        Videosystem.addActor(act7);
        Videosystem.addActor(act8);
        Videosystem.addActor(act9);

        Videosystem.addDirector(dir);
        Videosystem.addDirector(dir2);
        Videosystem.addDirector(dir3);
        Videosystem.addDirector(dir4);
        Videosystem.addDirector(dir5);
        Videosystem.addDirector(dir6);
        Videosystem.addDirector(dir7);
        Videosystem.addDirector(dir8);

        Videosystem.addCatecogy(category1);
        Videosystem.addCatecogy(category2);
        Videosystem.addCatecogy(category3);

        Videosystem.addProduction(prod);
        Videosystem.addProduction(prod2);
        Videosystem.addProduction(prod3);
        Videosystem.addProduction(prod4);
        Videosystem.addProduction(prod5);
        Videosystem.addProduction(prod6);
        Videosystem.addProduction(prod7);
        Videosystem.addProduction(prod8);
        Videosystem.addProduction(prod9);
        Videosystem.addProduction(prod10);
        Videosystem.addProduction(prod11);
        Videosystem.addProduction(prod12);

        Videosystem.assignCategory(category1, prod);
        Videosystem.assignCategory(category1, prod6);
        Videosystem.assignCategory(category1, prod2);
        Videosystem.assignCategory(category1, prod7);

        Videosystem.assignCategory(category2, prod3);
        Videosystem.assignCategory(category2, prod5);
        Videosystem.assignCategory(category2, prod12);
        Videosystem.assignCategory(category2, prod8);

        Videosystem.assignCategory(category3, prod11);
        Videosystem.assignCategory(category3, prod4);
        Videosystem.assignCategory(category3, prod9);
        Videosystem.assignCategory(category3, prod10);

        Videosystem.assignDirector(dir, prod);
        Videosystem.assignDirector(dir2, prod2);
        Videosystem.assignDirector(dir3, prod3);
        Videosystem.assignDirector(dir4, prod4);
        Videosystem.assignDirector(dir5, prod5);
        Videosystem.assignDirector(dir6, prod6);
        Videosystem.assignDirector(dir7, prod7);
        Videosystem.assignDirector(dir8, prod8);
        Videosystem.assignDirector(dir, prod9);
        Videosystem.assignDirector(dir2, prod10);
        Videosystem.assignDirector(dir3, prod11);
        Videosystem.assignDirector(dir4, prod12);

        Videosystem.assignActor(act, prod);
        Videosystem.assignActor(act2, prod);

        Videosystem.assignActor(act3, prod2);
        Videosystem.assignActor(act4, prod2);

        Videosystem.assignActor(act5, prod3);
        Videosystem.assignActor(act6, prod3);

        Videosystem.assignActor(act7, prod4);
        Videosystem.assignActor(act8, prod4);

        Videosystem.assignActor(act9, prod5);
        Videosystem.assignActor(act, prod5);

        Videosystem.assignActor(act, prod6);
        Videosystem.assignActor(act3, prod6);

        Videosystem.assignActor(act2, prod7);
        Videosystem.assignActor(act6, prod7);

        Videosystem.assignActor(act4, prod8);
        Videosystem.assignActor(act8, prod8);

        Videosystem.assignActor(act5, prod9);
        Videosystem.assignActor(act9, prod9);

        Videosystem.assignActor(act7, prod10);
        Videosystem.assignActor(act, prod10);

        Videosystem.assignActor(act4, prod11);
        Videosystem.assignActor(act2, prod11);

        Videosystem.assignActor(act5, prod12);
        Videosystem.assignActor(act8, prod12);

        //console.log(Videosystem.toString());
    }

    constructor(model, view) {
        this.#Videosystem = model;
        this.#VideoSystemView = view;

        this.onLoad();
        this.onInit();
       // this.#VideoSystemView.bindInit(this.handleInit.bind(this));
        this.#VideoSystemView.bindInit(this.handleInit)

        /*
        this.#Videosystem.bindProductsTypeList(this.handleProductsTypeList); */
    }
    onLoad = () => {
         this.#loadVideoSystemObjects();
      /*  for (let category of this.#Videosystem.categories) {
			console.log(category[0].Name);
		} */
        
        this.#VideoSystemView.showCategories();
        this.onAddCategory();
    }
    onInit = () => {
		this.#VideoSystemView.showCategories(this.#Videosystem.categories);
		/* this.#VideoSystemView.bindProductsCategoryList(
			this.handleProductsCategoryList
		); */
	}
    handleInit = () => {
        this.onInit();
       }

     onAddCategory = () => {
        for (let category of (this.#Videosystem.categories)) {
                    console.log(category[0].Description);
		}
		this.#VideoSystemView.showCategoriesInMenu(this.#Videosystem.categories);
		 this.#VideoSystemView.bindProductsCategoryListInMenu(
			this.handleProductionsCategoryList
		);  
	} 

     handleProductionsCategoryList = (title) => {
        let category2;
        for (let category of this.#Videosystem.categories) {
            console.log(category[0]);
			if(category[0].Name==title){
                category2  = category[0];
            }
		}
        console.log(category2);

       /*  for (let category of this.#Videosystem.getProductionsCategory(category2)) {
            console.log(category);
			
		} */
        //console.log(this.#Videosystem.getProductionsCategory(category2));
		this.#VideoSystemView.listProductions(this.#Videosystem.getProductionsCategory(category2),title);
		this.#VideoSystemView.bindShowProduct(this.handleShowProduct);
	}

	handleProductionsTypeList = (type) => {
		if (VideoSystem[type]) {
			this.#VideoSystemView.listProductions(this.#Videosystem.getTypeProducts(Videosystem[type]), type);
			this.#VideoSystemView.bindShowProduct(this.handleShowProduct);
		} else {
			throw new Error(`${type} isn't a type of Product.`)
		}
	} 
}
export default VideoSystemController;