</div>
</div>
<div class="bottom-container" onmouseover="overdis()" onmouseout="overen()">
    <div class="play-x-song">
        <div class="album">
            <img src="source/unknown.jpg" alt="image cover" id="cover">
        </div>
        <div class="song-now">
            <h2 class="snt text-truncate text-nowrap" id="title_info" style="max-width: 210px;">Title</h2>
            <h2 class="sna text-truncate text-nowrap" id="artist_info" style="max-width: 210px;">Artist</h2>
        </div>
    </div>
    <div class="controller-player">
        <div class="button-player">
            <span class="button-ctrl">
                <button id="back"><i  id="iback" class="fa-solid fa-backward-step"></i></button>
                <button id="play"><i class="fa-solid fa-play"></i></button>
                <button id="forward"><i id="inext" class="fa-solid fa-forward-step"></i></button>
            </span>
        </div>
        <div class="times" id="times">
            <h6 id="sta">S</h6>
            <h6 id="est">F</h6>
        </div>
        <div class="player-bar">
            <input type="range" id="the-progress" class="the-progress-class" min="0" step="0.15" value="500">
            <audio src="" id="audio"></audio>
        </div>
    </div>
    <div class="vo-controll">
        <i class="fa-solid fa-volume-high"></i>
        <input type="range" id="volume" class="the-progress-class volume-container" min="0" max="1" value="0.70" step="0.1">

    </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsmediatags/3.9.5/jsmediatags.min.js"></script>
<script src="source/script.js"></script>
</body>

</html>