<?php
    //Start the session
    session_start();

    //If email is not set yet, redirect to index page
    if(!isset($_SESSION["email"]))
    {
        header("Location: index.php");
    }
    else
    {
        $fname=$_SESSION["fname"];
        $lname=$_SESSION["lname"];
        $email=$_SESSION["email"];
    }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MusicBox Music Player</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/8713abee7a.js" crossorigin="anonymous"></script>
</head>

<body>
    <nav>
        <ul>
            <li class="logo"><img src="../assets/logo/MusicBox_logo.png" alt="">MusicBox</li>
            <li>Home</li>
            <li>About</li>
            <li>Request A Song</li>
            <li><a class="nav--link" href="logout.php">Logout</a></li>
        </ul>
    </nav>

    <div class="container">
        <div class="songList">
            <h1>Best of M.S Subbulakshmi</h1>
            <div class="songItemContainer">
                <div class="songItem">
                    <span class="title">Ganesha Pancharatnam</span>
                    <span class="timestamp">04:32 <i id="0" class="songItemPlay fa-solid fa-2xs fa-play"></i></span>
                </div>

                <div class="songItem">
                    <span class="title">Vishnu Sahasranamam</span>
                    <span class="timestamp">29:45 <i id="1" class="songItemPlay fa-solid fa-2xs fa-play"></i></span>
                </div>

                <div class="songItem">
                    <span class="title">Nama Ramayanam</span>
                    <span class="timestamp">11:31 <i id="2" class="songItemPlay fa-solid fa-2xs fa-play"></i></span>
                </div>

                <div class="songItem">
                    <span class="title">Kurai Ondrum Illai</span>
                    <span class="timestamp">03:52 <i id="3" class="songItemPlay fa-solid fa-2xs fa-play"></i></span>
                </div>

                <div class="songItem">
                    <span class="title">Madhurashtakam</span>
                    <span class="timestamp">05:20 <i id="4" class="songItemPlay fa-solid fa-2xs fa-play"></i></span>
                </div>

                <div class="songItem">
                    <span class="title">Jagadodharana</span>
                    <span class="timestamp">06:02 <i id="5" class="songItemPlay fa-solid fa-2xs fa-play"></i></span>
                </div>

                <div class="songItem">
                    <span class="title">Hanuman Chalisa</span>
                    <span class="timestamp">09:56 <i id="6" class="songItemPlay fa-solid fa-2xs fa-play"></i></span>
                </div>
            </div>
        </div>
        <div class="songBanner">
            <div id="songImage"></div>
        </div>
    </div>

    <div class="bottom">
        <input type="range" name="range" id="progressBar" min="0" value="0" max="100" autocomplete="off">
        <div class="icons">
            <i class="fa-solid fa-2xl fa-backward-step" id="previous" ></i>
            <i class="fa-solid fa-2xl fa-play" id="playPause"></i>
            <i class="fa-solid fa-2xl fa-forward-step" id="next" ></i>
        </div>
        <div class="songInfo">
            <img src="../assets/gif/equalizer.gif" id="playing_gif"> <span id="songName">Ganesha Pancharatnam</span>
        </div>
    </div>
    <script src="script.js"></script>
</body>

</html>