<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="shortcut icon" href="source\Favicon.png" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="source/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title id="webtit">The Player CRPH</title>
</head>

<body>
<div class="img_bg" id="img_bg_id"></div>
    <div class="top-container">
        <nav>
            <header>
                <div class="mylogo">
                    <i class="fa-solid fa-headphones"></i>
                    <!-- <img src="Asset\logo.png" alt="this is logo" width="50px" height="50px"> -->
                </div>
                <div class="mylogoname" id="mylogoname">
                    <h1 class="toph1">Listen From</h1>
                    <br>
                    <h1>Your File</h1>
                </div>

            </header>
            <ul>
                <li id="allid">
                    <div class="container-spn">
                        <span class="icon"><i class="fa-solid fa-music"></i></span>
                        <span class="title">All Song</span>
                    </div>

                </li>
                <li id="albid">
                    <div class="container-spn">
                        <span class="icon"><i class="fa-solid fa-compact-disc"></i></span>
                        <span class="title">Album</span>
                    </div>

                </li>
                <li id="artid">
                    <div class="container-spn">
                        <span class="icon"><i class="fa-solid fa-user"></i></span>
                        <span class="title">Artist</span>
                    </div>

                </li>
                <li id="settid" data-bs-toggle="modal" data-bs-target="#modalId">
                    <div class="container-spn">
                        <span class="icon"><i class="fa-solid fa-gear"></i></span>
                        <span class="title">Setting</span>
                    </div>

                </li>
            </ul>
        </nav>
        <div class="container-parent" id="container-parent">