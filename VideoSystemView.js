class VideoSystemgerView {
    constructor(){
        this.main = $('main');
        this.categories = $('#categories');
    }
    showCategories() {
		this.categories.empty();
		this.categories.append(`<div id="type-list" class="row">
			<div class="col-lg-3 col-md-6"><a data-type="Accion" href="#product-list">
					<div class="cat-list-image"><img alt="Categoría Accion" src="img/catcamara.jpg" />
					</div>
					<div class="cat-list-text">
						<h3>Accion</h3>
						<div>Digitales y reflex</div>
					</div>
				</a>
			</div>
			<div class="col-lg-3 col-md-6"><a data-type="Romance" href="#product-list">
					<div class="cat-list-image"><img alt="Categoría Romance" src="img/catmovi.jpg" />
					</div>
					<div class="cat-list-text">
						<h3>Romance</h3>
						<div>Modelos exclusivos</div>
					</div>
				</a>
			</div>
			<div class="col-lg-3 col-md-6"><a data-type="Misterio" href="#product-list">
					<div class="cat-list-image"><img alt="Categoría Misterio" src="img/catpportatil.jpg" />
					</div>
					<div class="cat-list-text">
						<h3>Misterio</h3>
						<div>Intel y AMD</div>
					</div>
				</a>
			</div>
		</div>`);
        this.main.append(container);
	}
}
export default VideoSystemgerView;
