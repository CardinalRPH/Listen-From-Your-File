console.log(
  "Listen From Your File by CardinalRPH @2022 || Layout and Code by CardinalRPH"
);

const cover = document.getElementById("cover");
const allid = document.getElementById("allid");
const albid = document.getElementById("albid");
const artid = document.getElementById("artid");
const audio = document.getElementById("audio");

const backbtn = document.getElementById("back");
const playbtn = document.getElementById("play");
const forwardbtn = document.getElementById("forward");

const albmlst = document.getElementById("albmlst");
const allist = document.getElementById("allist");
const artlst = document.getElementById("artlst");

const art_select = document.getElementById("artist-select");
const art_title = document.getElementById("art_selected");

const alb_select = document.getElementById("album-select");
const alb_title = document.getElementById("alb_selected");

const title_info = document.getElementById("title_info");
const artist_info = document.getElementById("artist_info");

const griddiv_alb = document.getElementById("grid-container-id-alb");
const griddiv_art = document.getElementById("grid-container-id-art");

const table = document.getElementById("table-song");
const table_art = document.getElementById("table-song-art");
const table_alb = document.getElementById("table-song-alb");

const progessval = document.getElementById("the-progress");
const volval = document.getElementById("volume");

const iback = document.getElementById("iback");
const inext = document.getElementById("inext");

const imgbg = document.getElementById("img_bg_id");

const titleweb = document.getElementById("webtit");

const sttime = document.getElementById("sta");
const esttime = document.getElementById("est");
const settid = document.getElementById("settid");

const fldr = document.getElementById("folder");
const updone = document.getElementById("thedone");

const conta_player = document.getElementById("conta-player");
const music_sel = document.getElementById("music-sel");

const jsmediatags = window.jsmediatags;

var mymusic = new Map();
const format = { mp3: 1, flac: 2, m4a: 3 };

const setget = {
  filemusicnm: "",

  set setfilename(newfile) {
    this.filemusicnm = newfile;
  },

  get getfilenm() {
    return this.filemusicnm;
  },
};

var regex = /(?:\.([^.]+))?$/;

let r_index;
let r_table;
let nexto;
let backto;
let tempcvto;
let titlehead;

let indexinfo;

let lenfile = 0;

updone.disabled = true;
allid.onclick = false;
albid.onclick = false;
artid.onclick = false;

fldr.addEventListener("change", function (event) {
  // console.log(event.target.files.length);
  mymusic.clear();
  music_sel.innerHTML = "Music Selected "+ String(event.target.files.length);
  for (var x = 0; x < event.target.files.length; x++) {
    if (regex.exec(event.target.files[x].name)[1].toLowerCase() in format) {
      if (event.target.files.length > 0) {
        updone.disabled = false;
        allid.onclick = true;
        albid.onclick = true;
        artid.onclick = true;
        fldr.disabled = true;
      }
      setget.setfilename = event.target.files[x].name;
      relativepath = URL.createObjectURL(event.target.files[x]);
      settertag(event.target.files[x], lenfile, relativepath);
      lenfile++;
      // console.log(setget.getfilenm);
    }
  }
});

function mediatag(filename) {
  return new Promise(function (resolve, reject) {
    jsmediatags.read(filename, {
      onSuccess: function (tag) {
        resolve(tag);
      },
      onError: function (error) {
        reject(error);
      },
    });
  });
}

async function settertag(file, len, path) {
  let tag = await mediatag(file);
  let awtit, awart, awalb, awpict, awgen;
  // console.log(tag.tags.title == undefined);
  if (tag.tags.title == undefined) {
    awtit = removeExtension(file.name);
  } else {
    awtit = tag.tags.title;
    awtit = awtit.replaceAll(`"`, `'`);
    awtit = awtit.replaceAll("/", "");
    awtit = awtit.replaceAll(String.fromCharCode(92), "");
  }
  if (tag.tags.artist == undefined) {
    awart = "unknown";
  } else {
    awart = tag.tags.artist;
    awart = awart.replaceAll(`"`, `'`);
    awart = awart.replaceAll("/", "");
    awart = awart.replaceAll(String.fromCharCode(92), "");
  }
  if (tag.tags.album == undefined) {
    awalb = "unknown";
  } else {
    awalb = tag.tags.album;
    awalb = awalb.replaceAll(`"`, `'`);
    awalb = awalb.replaceAll("/", "");
    awalb = awalb.replaceAll(String.fromCharCode(92), "");
  }
  if (tag.tags.picture == undefined) {
    awpict = "unknown";
  } else {
    awpict = tag.tags.picture;
  }
  if (tag.tags.genre == undefined) {
    awgen = "unknown";
  } else {
    awgen = tag.tags.genre;
    awgen = awgen.replaceAll(`"`, `'`);
    awgen = awgen.replaceAll("/", "");
    awgen = awgen.replaceAll(String.fromCharCode(92), "");
  }
  mymusic.set(len, {
    title: awtit,
    artist: awart,
    album: awalb,
    pict: awpict,
    genre: awgen,
    path: path,
    // pict: tag.tags.picture,
  });
}

audio.volume = 0.7;

window.onload = function () {
  settid.click();
};

updone.addEventListener("click", () => {
  let songstarter = Math.floor(Math.random() * mymusic.size);
  table.innerHTML = null;
  tables();
  loadSong(songstarter);
  titlehead = mymusic.get(songstarter).title;
  songinfo(songstarter);
  pause();
});

forwardbtn.disabled = true;
inext.style.color = "#5d5d5d";
backbtn.disabled = true;
iback.style.color = "#5d5d5d";

function tables() {
  for (var i = 0; i < mymusic.size; i++) {
    var row = `<tr onclick="listclick(this)" class="tr-class">
            <td class="td-class" id="td-id">
                <h3 class="td-3 text-nowrap text-truncate" style="">${
                  mymusic.get(i).title
                }</h3>
            </td>
            <td>
                <h3 class="td-3 text-nowrap text-truncate">${
                  mymusic.get(i).artist
                }</h3>
            </td>
            <td>
                <h3 class="td-3 text-nowrap text-truncate">${
                  mymusic.get(i).album
                }</h3>
            </td>
            <td>
                <h3 class="td-3 text-nowrap text-truncate">${
                  mymusic.get(i).genre
                }</h3>
            </td>
        </tr>`;

    table.innerHTML += row;
  }
}

function album_list() {
  for (var i = 0; i <= mymusic.size; i++) {
    let is_non_dupe = true;
    for (var j = 1; j < mymusic.size; j++) {
      if (i >= mymusic.size) {
        break;
      } else {
        if (
          String(mymusic.get(i).album) == String(mymusic.get(j).album) &&
          i != j
        ) {
          is_non_dupe = false;
        }
      }
    }
    if (i >= mymusic.size) {
      break;
    } else {
      if (is_non_dupe == true) {
        var the_div = `<div class="list_of_div" onclick="album_clicked(this)" onmouseover="chcolor(this)"  onmouseout="chcolordef(this)" title="${
          mymusic.get(i).album
        }">
                <img src="${covuri(
                  mymusic.get(i).pict
                )}" alt="image album" id="img_album" class="img_album" width="500">
                <h3>${mymusic.get(i).album}</h3>
                </div>`;

        griddiv_alb.innerHTML += the_div;
      }
    }
  }
  for (var i = 0; i < mymusic.size; i++) {
    for (var j = i + 1; j < mymusic.size; j++) {
      if (String(mymusic.get(i).album) == String(mymusic.get(j).album)) {
        var the_div = `<div class="list_of_div" onclick="album_clicked(this)" onmouseover="chcolor(this)"  onmouseout="chcolordef(this)" title="${
          mymusic.get(i).album
        }">
                <img src="${covuri(
                  mymusic.get(i).pict
                )}" alt="image album" id="img_album" class="img_album" width="500">
                <h3>${mymusic.get(i).album}</h3>
                </div>`;

        griddiv_alb.innerHTML += the_div;
      }
    }
  }
}

function artist_list_art() {
  for (var i = 0; i <= mymusic.size; i++) {
    let is_non_dupe = true;
    for (var j = 1; j < mymusic.size; j++) {
      if (i >= mymusic.size) {
        break;
      } else {
        if (
          String(mymusic.get(i).artist) == String(mymusic.get(j).artist) &&
          i != j
        ) {
          is_non_dupe = false;
        }
      }
    }
    if (i >= mymusic.size) {
      break;
    } else {
      if (is_non_dupe == true) {
        var the_div = `<div class="list_of_div" onclick="artist_clicked(this)" onmouseover="chcolor(this)"  onmouseout="chcolordef(this)" title="${
          mymusic.get(i).artist
        }">
                <img src="${covuri(
                  mymusic.get(i).pict
                )}" alt="image album" id="img_album" class="img_album" width="500">
                <h3>${mymusic.get(i).artist}</h3>
                </div>`;

        griddiv_art.innerHTML += the_div;
      }
    }
  }
  for (var i = 0; i < mymusic.size; i++) {
    for (var j = i + 1; j < mymusic.size; j++) {
      if (String(mymusic.get(i).artist) == String(mymusic.get(j).artist)) {
        var the_div = `<div class="list_of_div" onclick="artist_clicked(this)" onmouseover="chcolor(this)"  onmouseout="chcolordef(this)" title="${
          mymusic.get(i).artist
        }">
                <img src="${covuri(
                  mymusic.get(i).pict
                )}" alt="image album" id="img_album" class="img_album" width="500">
                <h3 id="read_art">${mymusic.get(i).artist}</h3>
                </div>`;

        griddiv_art.innerHTML += the_div;
      }
    }
  }
}

function listclick(el) {
  tempcvto = el;
  r_index = tempcvto.rowIndex;
  const m = tempcvto.querySelector(".td-class .td-3");
  titlehead = mymusic.get(converto(m.innerHTML)).title;
  loadSong(converto(m.innerHTML));
  songinfo(converto(m.innerHTML));
  rowcalc();
  play();
  backbtn.disabled = false;
  forwardbtn.disabled = false;
  inext.style.color = "rgb(215, 215, 215)";
  iback.style.color = "rgb(215, 215, 215)";
  if (r_index == 0 && r_table == 1) {
    forwardbtn.disabled = true;
    backbtn.disabled = true;
    inext.style.color = "#5d5d5d";
    iback.style.color = "#5d5d5d";
  }
  if (r_index == r_table - 1 && r_table > 1) {
    forwardbtn.disabled = true;
    inext.style.color = "#5d5d5d";
    iback.style.color = "rgb(215, 215, 215)";
  }
  if (r_index == 0 && r_table > 1) {
    backbtn.disabled = true;
    iback.style.color = "#5d5d5d";
    inext.style.color = "rgb(215, 215, 215)";
  }
  if (r_index == 0 && r_table == 0) {
    forwardbtn.disabled = true;
    backbtn.disabled = true;
    inext.style.color = "#5d5d5d";
    iback.style.color = "#5d5d5d";
  }

  // console.log('prev is=' + backto.previousElementSibling.querySelector('.td-class .td-3').innerHTML);
  // console.log('next is=' + nexto.nextElementSibling.querySelector('.td-class .td-3').innerHTML);
  // console.log('rowas : ' + el.length);
}

function rowcalc() {
  if (table.innerHTML == "" && window.griddiv_art === undefined) {
    r_table = table_alb.rows.length;
  }
  if (table.innerHTML == "" && window.griddiv_alb === undefined) {
    r_table = table_art.rows.length;
  }
  if (
    window.griddiv_art === undefined &&
    window.griddiv_alb === undefined &&
    table.innerHTML != ""
  ) {
    r_table = table.rows.length;
  }
}

function converto(song) {
  for (var i = 0; i < mymusic.size; i++) {
    if (song == mymusic.get(i).title) {
      var playhere = i;
      return playhere;
    }
  }
}

function covuri(map_pict) {
  if (map_pict == "unknown") {
    return "source/unknown.jpg";
  } else {
    const { data, type } = map_pict;
    const byteArray = new Uint8Array(data);
    const blob = new Blob([byteArray], { type });
    const albumArtUrl = URL.createObjectURL(blob);
    return albumArtUrl;
  }
}

function nextconverto() {
  nexto = tempcvto;
  nexto = nexto.nextElementSibling;
  tempcvto = nexto;
  const tempselect = nexto.querySelector(".td-class .td-3");
  var nextitle = tempselect.innerHTML;
  return nextitle;
}

function backconverto() {
  backto = tempcvto;
  backto = backto.previousElementSibling;
  tempcvto = backto;
  const tempselect = backto.querySelector(".td-class .td-3");
  var backtitle = tempselect.innerHTML;
  return backtitle;
}

function chcolor(lem) {
  let elmentx = lem.childNodes[3];
  elmentx.style.color = "#3d3d3d";
}

function chcolordef(lem) {
  let elmentx = lem.childNodes[3];
  elmentx.style.color = "rgb(215, 215, 215)";
}

function next() {
  r_index += 1;
  backbtn.disabled = false;
  iback.style.color = "rgb(215, 215, 215)";
  if (r_index == r_table - 1) {
    forwardbtn.disabled = true;
    iback.style.color = "rgb(215, 215, 215)";
    inext.style.color = "#5d5d5d";
  }
  var temptitle = nextconverto();
  stopaudio();
  titlehead = mymusic.get(converto(temptitle)).title;
  loadSong(converto(temptitle));
  songinfo(converto(temptitle));
  play();
}

function back() {
  r_index -= 1;
  forwardbtn.disabled = false;
  inext.style.color = "rgb(215, 215, 215)";
  if (r_index == 0) {
    backbtn.disabled = true;
    iback.style.color = "#5d5d5d";
    inext.style.color = "rgb(215, 215, 215)";
  }
  var temptitle = backconverto();
  stopaudio();
  titlehead = mymusic.get(converto(temptitle)).title;
  loadSong(converto(temptitle));
  songinfo(converto(temptitle));
  play();
}

function test(el) {
  var divs = document.querySelectorAll(".grid-container div");
  var index = Array.from(divs).indexOf(el);
}

function loadSong(musicindex) {
  audio.src = mymusic.get(musicindex).path;
  cover.src = covuri(mymusic.get(musicindex).pict);
}

function songinfo(theindex) {
  title_info.innerText = mymusic.get(theindex).title;
  artist_info.innerText = mymusic.get(theindex).artist;
  indexinfo = theindex;
}

function mediameta(indexmedia) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: mymusic.get(indexmedia).title,
    artist: mymusic.get(indexmedia).artist,
    album: mymusic.get(indexmedia).album,
    // artwork: [
    //         { src: 'https://dummyimage.com/96x96', sizes: '96x96', type: 'image/png' },
    //         { src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
    //         { src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
    //         { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
    //         { src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
    //   {
    //     src: covuri(mymusic.get(indexmedia).pict),
    //     sizes: "512x512",
    //     type: "image/jpg",
    //   },
    // ],
    // artwork: covuri(mymusic.get(theindex).pict)
  });
}

function play() {
  // playerContainer.classList.add("play-btn");
  audio.play();
  titleweb.innerHTML = `${titlehead} - The Player CRPH`;
  playbtn.innerHTML = null;
  playbtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  mediameta(indexinfo);
  // playBtn.style.backgroundColor = "#B0B6BA";
  // pauseBtn.style.backgroundColor = "#fff";
  // stopaBtn.style.backgroundColor = "#fff";
  // vinyl.style.animationPlayState = "running";
  // colorlist(songIndex);
  // headtitle.innerText = soongslist[songIndex].tiitle;
}

function stopaudio() {
  pause();
  audio.currentTime = 0;
}

function pause() {
  audio.pause();
  titleweb.innerHTML = "The Player CRPH";
  playbtn.innerHTML = null;
  playbtn.innerHTML = '<i class="fa-solid fa-play"></i>';
}

function artist_clicked(el) {
  table_art.innerHTML = null;
  var x = el.title;
  art_title.innerHTML = x;
  art_select.disabled = false;
  art_select.style.display = "flex";
  allist.disabled = true;
  allist.style.display = "none";
  albmlst.disabled = true;
  albmlst.style.display = "none";
  artlst.disabled = true;
  artlst.style.display = "none";
  alb_select.disabled = true;
  alb_select.style.display = "none";

  imgbg.style.background = `url(${covuri(mymusic.get(forbgart(x)).pict)})`;
  imgbg.style.backgroundRepeat = "no-repeat";
  imgbg.style.backgroundSize = "cover";
  imgbg.style.backgroundPositionY = "center";
  imgbg.style.filter = "blur(3px) brightness(60%)";

  for (var i = 0; i < mymusic.size; i++) {
    if (mymusic.get(i).artist == x) {
      var row = `<tr onclick="listclick(this)" class="tr-class" title="eeettt">
            <td class="td-class" id="td-id">
                <h3 class="td-3 text-nowrap text-truncate" id="wow">${
                  mymusic.get(i).title
                }</h3>
            </td>
            <td>
                <h3 class="td-3 text-nowrap text-truncate">${
                  mymusic.get(i).artist
                }</h3>
            </td>
            <td>
                <h3 class="td-3 text-nowrap text-truncate">${
                  mymusic.get(i).album
                }</h3>
            </td>
            <td>
                <h3 class="td-3 text-nowrap text-truncate">${
                  mymusic.get(i).genre
                }</h3>
            </td>
        </tr>`;

      table_art.innerHTML += row;
    }
  }
}

function album_clicked(el) {
  table_alb.innerHTML = null;
  var x = el.title;
  alb_title.innerHTML = x;
  alb_select.disabled = false;
  alb_select.style.display = "flex";
  art_select.disabled = true;
  art_select.style.display = "none";
  allist.disabled = true;
  allist.style.display = "none";
  albmlst.disabled = true;
  albmlst.style.display = "none";
  artlst.disabled = true;
  artlst.style.display = "none";
  imgbg.style.background = `url(${covuri(mymusic.get(forbgalb(x)).pict)})`;
  imgbg.style.backgroundRepeat = "no-repeat";
  imgbg.style.backgroundSize = "cover";
  imgbg.style.backgroundPositionY = "center";
  imgbg.style.filter = "blur(3px) brightness(60%)";

  for (var i = 0; i < mymusic.size; i++) {
    if (mymusic.get(i).album == x) {
      var row = `<tr onclick="listclick(this)" class="tr-class" title="eeettt">
            <td class="td-class" id="td-id">
                <h3 class="td-3 text-nowrap text-truncate" id="wow">${
                  mymusic.get(i).title
                }</h3>
            </td>
            <td>
                <h3 class="td-3 text-nowrap text-truncate">${
                  mymusic.get(i).artist
                }</h3>
            </td>
            <td>
                <h3 class="td-3 text-nowrap text-truncate">${
                  mymusic.get(i).album
                }</h3>
            </td>
            <td>
                <h3 class="td-3 text-nowrap text-truncate">${
                  mymusic.get(i).genre
                }</h3>
            </td>
        </tr>`;

      table_alb.innerHTML += row;
    }
  }
}

function forbgalb(alb) {
  var ret;
  for (var i = 0; i < mymusic.size; i++) {
    var alx = String(mymusic.get(i).album);
    if (alx == alb) {
      ret = i;
      break;
    }
  }

  return ret;
}

function forbgart(art) {
  var ret;
  for (var i = 0; i < mymusic.size; i++) {
    var alx = String(mymusic.get(i).artist);
    if (mymusic.get(i).artist == art) {
      ret = i;
      break;
    }
  }
  return ret;
}

function runningTime(time) {
  var seconds = Math.floor(time % 60);
  var minutes = Math.floor(time / 60);
  if (seconds < 10) {
    seconds = "0" + seconds.toString();
  }
  var nowtime = minutes + ":" + seconds;
  sttime.innerText = nowtime;
}

function removeExtension(filename) {
  return filename.substring(0, filename.lastIndexOf(".")) || filename;
}

function estimateTime(time) {
  var seconds = Math.floor(time % 60);
  var minutes = Math.floor(time / 60);
  if (seconds < 10) {
    seconds = "0" + seconds.toString();
  }
  var estimTime = minutes + ":" + seconds;
  esttime.innerText = estimTime;
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  progessval.value = currentTime;
  progessval.max = duration;

  runningTime(currentTime);
  estimateTime(duration);
}

function setProgress(val) {
  audio.currentTime = val;
}

function overdis() {
  document.body.style.overflowY = "hidden";
}

function overen() {
  document.body.style.overflowY = "auto";
}

playbtn.addEventListener("click", () => {
  if (audio.currentTime == 0) {
    play();
  }
  if (audio.paused && audio.currentTime > 0 && !audio.ended) {
    play();
  } else if (!audio.paused && audio.currentTime > 0 && !audio.ended) {
    pause();
  }
});

forwardbtn.addEventListener("click", () => {
  next();
});

backbtn.addEventListener("click", () => {
  back();
});

albid.addEventListener("click", () => {
  griddiv_alb.innerHTML = null;
  table_alb.innerHTML = null;
  album_list();
  table.innerHTML = null;
  table_art.innerHTML = null;

  albmlst.disabled = false;
  albmlst.style.display = "flex";
  allist.disabled = true;
  allist.style.display = "none";
  artlst.disabled = true;
  artlst.style.display = "none";
  art_select.disabled = true;
  art_select.style.display = "none";
  alb_select.disabled = true;
  alb_select.style.display = "none";

  imgbg.style.background = "linear-gradient(70deg, #5a6c85, #2c3c51)";
  imgbg.style.backgroundRepeat = "no-repeat";
  imgbg.style.backgroundSize = "cover";
  imgbg.style.backgroundPositionY = "center";
  imgbg.style.filter = "none";
});

allid.addEventListener("click", () => {
  table.innerHTML = null;
  tables();
  table_alb.innerHTML = null;
  table_art.innerHTML = null;

  allist.disabled = false;
  allist.style.display = "flex";
  albmlst.disabled = true;
  albmlst.style.display = "none";
  artlst.disabled = true;
  artlst.style.display = "none";
  art_select.disabled = true;
  art_select.style.display = "none";
  alb_select.disabled = true;
  alb_select.style.display = "none";

  imgbg.style.background = "linear-gradient(70deg, #5a6c85, #2c3c51)";
  imgbg.style.backgroundRepeat = "no-repeat";
  imgbg.style.backgroundSize = "cover";
  imgbg.style.backgroundPositionY = "center";
  imgbg.style.filter = "none";
});

artid.addEventListener("click", () => {
  griddiv_art.innerHTML = null;
  table_art.innerHTML = null;
  artist_list_art();
  table_alb.innerHTML = null;
  table.innerHTML = null;

  artlst.disabled = false;
  artlst.style.display = "flex";
  albmlst.disabled = true;
  albmlst.style.display = "none";
  allist.disabled = true;
  allist.style.display = "none";
  art_select.disabled = true;
  art_select.style.display = "none";
  alb_select.disabled = true;
  alb_select.style.display = "none";

  imgbg.style.background = "linear-gradient(70deg, #5a6c85, #2c3c51)";
  imgbg.style.backgroundRepeat = "no-repeat";
  imgbg.style.backgroundSize = "cover";
  imgbg.style.backgroundPositionY = "center";
  imgbg.style.filter = "none";
});

albmlst.disabled = true;
albmlst.style.display = "none";
artlst.disabled = true;
artlst.style.display = "none";
art_select.disabled = true;
art_select.style.display = "none";
alb_select.disabled = true;
alb_select.style.display = "none";

audio.addEventListener("timeupdate", updateProgress);

progessval.oninput = function () {
  setProgress(this.value);
};

audio.onended = function () {
  if (r_index < r_table - 1) {
    next();
  } else if (r_index == r_table - 1) {
    pause();
    audio.currentTime = 0;
    forwardbtn.disabled = true;
    iback.style.color = "rgb(215, 215, 215)";
    inext.style.color = "#5d5d5d";
  }
};

audio.onpause = function () {
  pause();
};

audio.onplay = function () {
  play();
};

navigator.mediaSession.setActionHandler("play", function () {
  if (audio.currentTime == 0) {
    play();
  }
  if (audio.paused && audio.currentTime > 0 && !audio.ended) {
    play();
  } else if (!audio.paused && audio.currentTime > 0 && !audio.ended) {
    pause();
  }
});

navigator.mediaSession.setActionHandler("stop", function () {
  stopaudio();
});

volval.oninput = function () {
  audio.volume = this.value;
};

volval.addEventListener("wheel", function (event) {
  if (event.deltaY < 0) {
    if (audio.volume <= 0.8999999999999999) {
      audio.volume += 0.1;
      volval.value = audio.volume;
    }
  } else if (event.deltaY > 0) {
    if (audio.volume >= 0.10000000000000003) {
      audio.volume -= 0.1;
      volval.value = audio.volume;
    }
  }
});

window.onpopstate = function (e) {
  if (e.state) {
    document.title = e.state.pageTitle;
  }
};
