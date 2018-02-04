<?php include('header.php') ?>

<main class="main-interna">
    <div class="container">
        <div class="row" id="pai">
            <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12 elements content-interna">
                <h1>Contato</h1>

                <p>Entre em contato por <strong class="strong2">e-mail</strong> ou através de nosso telefone (<strong class="strong2">21 2437-2910</strong>).</p>

                <form action="" class="form">
                    <input type="text" placeholder="Nome">
                    <input type="email" placeholder="Email">
                    <input type="text" placeholder="Telefone" class="input-telefone">
                    <select name="" id="" class="input-lista">
                        <option value="">O que você procura?</option>
                        <option value="">Atendimento</option>
                        <option value="">Orçamento</option>
                        <option value="">Outros</option>
                    </select>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Mensagem"></textarea>
                    <button type="submit" class="btn btn-contato">Enviar</button>
                </form>
            </div>
            <?php include('aside_interna.php') ?>
        </div>
    </div>
</main>

<?php include('footer.php') ?>