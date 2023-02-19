class VideoSystemgerView {
	constructor() {
		this.main = $('main');
		this.categories = $('#categories');
		this.menu = $('.navbar-nav');
		this.productWindow = null;
	}
	#excecuteHandler(handler, handlerArguments, scrollElement, data, url, event) {
		handler(...handlerArguments);
		/* $(scrollElement).get(0).scrollIntoView();
		history.pushState(data, null, url);
		event.preventDefault(); */
	}
	    showCategories() {
		   this.categories.empty();
		   this.categories.append(`<div id="type-list" class="row">
			   <div class="col-lg-3 col-md-6"><a data-type="Accion" href="#product-list">
					   <div class="cat-list-image"><img alt="Categoría Accion" src="images/accion.jfif" />
					   </div>
					   <div class="cat-list-text">
						   <h3>Accion</h3>
					   </div>
				   </a>
			   </div>
			   <div class="col-lg-3 col-md-6"><a data-type="Romance" href="#product-list">
					   <div class="cat-list-image"><img alt="Categoría Romance" src="images/romance.jfif" />
					   </div>
					   <div class="cat-list-text">
						   <h3>Romance</h3>
					   </div>
				   </a>
			   </div>
			   <div class="col-lg-3 col-md-6"><a data-type="Misterio" href="#product-list">
					   <div class="cat-list-image"><img alt="Categoría Misterio" src="images/misterio.jfif" />
					   </div>
					   <div class="cat-list-text">
						   <h3>Misterio</h3>
					   </div>
				   </a>
			   </div>
		   </div>`);
	   } 
	showProductions(categories) {
		if (this.categories.length > 1)
			this.categories.remove();
		let container = $('<div id="category-list" class="row"></div>');
		for (let category of categories) {
			container.append(`<div class="col-lg-3 col-md-6"><a data-category="${category[0].Name}" href="#product-list">
		<div class="cat-list-image"><img alt="${category[0].Name}" src="images/${category[0].Name}.jfif" />
		</div>
		<div class="cat-list-text">
					<h3>${category[0].Name}</h3>
					<div>${category[0].Description}</div>
				</div>
			</a>
		</div>`);
		}
		this.categories.append(container);
	}
	showCategoriesInMenu(categories) {
		let li = $(`<li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" href="#" id="navCats" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Categorías
			</a>
		</li>`);
		let container = $('<div class="dropdown-menu" aria-labelledby="navCats"></div>');
		//if (!category.done) shopping
		for (let category of categories) {
			container.append(`<a data-category="${category[0].Name}"
		class="dropdown-item" href="#product-list">${category[0].Name}</a>`);
		}
		li.append(container);
		this.menu.append(li);
	}
	listProductions(production,category,Videosystem) {
		this.main.empty();
		if (production.length > 1)
			production.remove();
		let container = $(`<div id="production-list" class="container my-3"><div class="row"> </div></div>`);
		//let product = production.next();
		
		for (let product of production) {
			console.log(product);
            

			let div = $(`<div class="col-md-4">
				<figure class="card card-product-grid card-lg"> <a data-serial="${product.serial}" href="#single-product" class="img-wrap"><img class="${product.constructor.name}-style" src=""></a>
					<figcaption class="info-wrap">
						<div class="row">
							<div class="col-md-8"> <a data-serial="${product.serial}" href="#single-product" class="title"><h2>${product.Title}</h2></a> </div>

						</div>
					</figcaption>
					
				</figure>
			</div>`);
			container.children().first().append(div);
			for (let actor of Videosystem.actors) {
				console.log(actor);
			}
			for (let actor of Videosystem.getCast(product)) {
				console.log(actor);
				console.log(actor.Name);
				container.children().children().children().last().append(`<div class="actor-wrap"> <span class="actor h5">${actor.Name} ${actor.Lastname1}</span> <br> </div>`);
			}
			
			//product = production.next();
		}
		container.prepend(`<h1>${category}</h1>`);
		this.main.append(container);
	}
	bindInit(handler) {
		$('#init').click((event) => {
			handler();
		});
		$('#logo').click((event) => {
			handler();
		});
	}
	bindProductsCategoryListInMenu(handler) {
		$('#navCats').next().children().click((event) => {
			console.log((event.target));
			let category = $(event.target).closest($('a')).get(0).dataset.category;
			this.#excecuteHandler(
				handler, [category],
				'#product-list',
				{ action: 'productsCategoryList', category: category },
				'#category-list', event
			);
		});
	}
	 bindShowProduct(handler) {
		console.log($('#product-list').children());
		$('#product-list').click((event) => {
			console.log("aqui");
			let category = $(event.target).closest($('a')).get(0).dataset.category;
			this.#excecuteHandler(
				handler, [category],
				'#product-list',
				{ action: 'productsCategoryList', category: category },
				'#category-list', event
			);
		});
		$('#product-list').find('figcaption a').click((event) => {
			this.#excecuteHandler(
				handler, [category],
				'#product-list',
				{ action: 'productsCategoryList', category: category },
				'#category-list', event
			);
		});
	} 
}
export default VideoSystemgerView;
