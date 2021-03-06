<?php include('header.php') ?>

<main class="main-interna">
    <div class="container">
        <div class="row">
            <div class="col-md-12 breadcrumbs">
                <a href="index.php">Home</a> <i class="mdi mdi-chevron-right"></i> <a href="valvulas.php">Válvulas</a>
            </div>
            <div class="col-lg-9 col-md-12 content-interna">
                <h1>Válvulas</h1>
                <div class="filtros">
                    Tipo:
                    <select name="" id="">
                        <option value="">Globo</option>
                        <option value="">Retenção</option>
                        <option value="">Gaveta</option>
                        <option value="">Borboleta</option>
                    </select>
                    Categoria:
                    <select name="" id="">
                        <option value="">Reta</option>
                        <option value="">Reta com retenção</option>
                        <option value="">Angular</option>
                        <option value="">Angular com retenção</option>
                    </select>
                    Acionamento:
                    <select name="" id="">
                        <option value="">Mola</option>
                        <option value="">Mecânico por volante</option>
                    </select>
                    Bitolas:
                    <select name="" id="">
                        <option value="">1/2' a 12'</option>
                        <option value="">2</option>
                    </select>
                    Classe de pressão:
                    <select name="" id="">
                        <option value="">150 a 300#</option>
                        <option value="">150#</option>
                    </select>
                    Conexão:
                    <select name="" id="">
                        <option value="">Flange ASME B16.5</option>
                        <option value="">Flange ASME B16.5 CL 150#</option>
                        <option value="">Gis 5k</option>
                    </select>
                </div>
                <div class="filtros-items">
                    <div class="row">
	                    <div class="col-md-3">
		                    <a href="valvulas-reta.php">
			                    <img src="img/dest_img.png" alt="">
			                    <h5>Válvula Globo</h5>
		                    </a>
	                    </div>
	                    <div class="col-md-3">
		                    <a href="#">
			                    <img src="img/dest_img.png" alt="">
			                    <h5>Válvula Globo</h5>
		                    </a>
	                    </div>
	                    <div class="col-md-3">
		                    <a href="#">
			                    <img src="img/dest_img.png" alt="">
			                    <h5>Válvula Globo</h5>
		                    </a>
	                    </div>
	                    <div class="col-md-3">
		                    <a href="#">
			                    <img src="img/dest_img.png" alt="">
			                    <h5>Válvula Globo</h5>
		                    </a>
	                    </div>
	                    <div class="col-md-3">
		                    <a href="#">
			                    <img src="img/dest_img.png" alt="">
			                    <h5>Válvula Globo</h5>
		                    </a>
	                    </div>
	                    <div class="col-md-3">
		                    <a href="#">
			                    <img src="img/dest_img.png" alt="">
			                    <h5>Válvula Globo</h5>
		                    </a>
	                    </div>
	                    <div class="col-md-3">
		                    <a href="#">
			                    <img src="img/dest_img.png" alt="">
			                    <h5>Válvula Globo</h5>
		                    </a>
	                    </div>
	                    <div class="col-md-3">
		                    <a href="#">
			                    <img src="img/dest_img.png" alt="">
			                    <h5>Válvula Globo</h5>
		                    </a>
	                    </div>
                    </div>
                </div>
                <div class="filtros-pagination">
                    <ul>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                    </ul>
                </div>
            </div>
            <?php include('aside_interna.php') ?>
        </div>
    </div>
</main>

<?php include('footer.php') ?>