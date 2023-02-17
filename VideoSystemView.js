class VideoSystemgerView {
    constructor(){
        this.main = $('main');
        this.categories = $('#categories');
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
	bindShowProduct(handler) {
		$('#product-list').find('a.img-wrap').click((event) => {
			let serial = $(event.target).closest($('a')).get(0).dataset.serial;
			this.#excecuteHandler(
				handler, [serial],
				'#single-product',
				{ action: 'showProduct', serial: serial },
				'#single-product', event
			);
		});
		$('#product-list').find('figcaption a').click((event) => {
			this.#excecuteHandler(
				handler, [event.target.dataset.serial],
				'#single-product',
				{ action: 'showProduct', serial: event.target.dataset.serial },
				'#product-list', event
			);
		});
	}
}
export default VideoSystemgerView;
