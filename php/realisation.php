<?php include('header.phtml'); ?>
        <main class="mainslider">
    <h1>Voici quelque realisation en photo</h1>

        <nav class="toolbar">
            <a id="toolbar-toggle" ><i class="fa fa-arrow-right"></i>  Click moi !</a>
            <ul class="hide">
                <div class="flex-btn">
                    <li><button id="slider-previous" title="Image précédente"><i class="fas fa-chevron-left"></i></button></li>
                    <li><button id="slider-toggle" title="Démarrer le carrousel"><i class="fas fa-play"></i></button></li>
                    <li><button id="slider-next" title="Image suivante"><i class="fas fa-chevron-right"></i></button></li>
                    <li><button id="slider-random" title="Sélectionner une image aléatoire"><i class="fa fa-random"></i></button></li>
                </div>
            </ul>
        </nav>
         <figure id="slider" class="slider">
            <img src="" alt="">
            <figcaption></figcaption>
        </figure>
</main>
<?php include('footer.phtml'); ?>
