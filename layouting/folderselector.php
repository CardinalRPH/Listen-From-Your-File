<div class="music-list" id="fldsel">
    <!-- Modal trigger button -->
    <!-- <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
      Launch
    </button> -->

    <!-- Modal Body -->
    <!-- if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard -->
    <div class="modal fade" id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog"
        aria-labelledby="modalTitleId" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
            <div class="modal-content bg-secondary">
                <div class="modal-header border-secondary">
                    <h5 class="modal-title text-light" id="modalTitleId">Uploader</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex flex-column justify-content-center text-center">
                    <label for="folder" class="">Up Your Music</label>
                    <input type='file' name="file[]" id="folder" class="inputff" multiplewebkitdirectory directory
                        multiple accept=".flac, .mp3, .m4a">

                    <h4 id="music-sel">Music Selected 0</h4>

                </div>
                <div class="modal-footer d-flex justify-content-center border-secondary">
                <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
                    <button type="button" id="thedone" class="btn btn-primary" data-bs-dismiss="modal">Done</button>
                </div>
            </div>
        </div>
    </div>


    <!-- Optional: Place to the bottom of scripts -->
    <script>
    const myModal = new bootstrap.Modal(document.getElementById('modalId'), options)
    </script>
</div>
