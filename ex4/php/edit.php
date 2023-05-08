<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="icon" href="../images/penguin.ico">

    <title>
        <?php echo $_GET["name"] ?>'s page!
    </title>
</head>

<body>
    <header class="container p-0">
        <h1 class="row display-1 p-0">
            Welcome to
            <?php echo $_GET["name"] ?>'s page!
        </h1>
        <br>
    </header>
    <main class="container p-0 justify-content-start">
        <div class="row p-0">
            <?php
            if (isset($_GET["penguin"])) {
                $penguin = $_GET["penguin"];
                echo '<h4 class="p-0">' . $_GET["name"] . " is a " . $penguin . ' penguin.</h4><br><br><p >';
                if ($penguin == "emperor") {
                    echo "The Emperor penguin (Aptenodytes forsteri) is the tallest and heaviest of all living penguin species and is endemic to Antarctica. The male and female are similar in plumage and size, reaching 100 cm (39 in) in length and weighing from 22 to 45 kg (49 to 99 lb). Emperor penguins are capable of diving to depths of approximately 550 metres (1,800 feet) in search of food; they are the world’s deepest-diving birds.";
                } elseif ($penguin == "adelie") {
                    echo "The Adélie penguin (Pygoscelis adeliae) is a species of penguin common along the entire coast of the Antarctic continent, which is the only place where it is found. It is the most widespread penguin species, and, along with the emperor penguin, is the most southerly distributed of all penguins. Adélie penguins are mid-sized birds, measuring 70–73 cm (28–29 in) in length and weighing 3.8 to 8.2 kg (8.4 to 18.1 lb).";
                } elseif ($penguin == "chinstrap") {
                    echo "The Chinstrap penguin (Pygoscelis antarcticus) is a species of penguin that inhabits a variety of islands and shores in the Southern Pacific and the Antarctic Oceans. Its name stems from the narrow black band under its head, which makes it appear as if it were wearing a black helmet, making it easy to identify. Chinstrap penguins grow to a length of 68–76 cm (27–30 in) and a weight of 3.2–5.3 kg (7.1–11.7 lb), with the weight varying with the time of year.";
                } elseif ($penguin == "gentoo") {
                    echo "The Gentoo penguin (/ˈdʒɛntuː/ JEN-too) (Pygoscelis papua) is a penguin species (or possibly a species complex) in the genus Pygoscelis, most closely related to the Adélie penguin (P. adeliae) and the chinstrap penguin (P. antarcticus). Gentoo penguins can reach a length of 70 to 90 cm (28 to 35 in), making them the third-largest species of penguin after the emperor penguin and the king penguin.";
                } elseif ($penguin == "macaroni") {
                    echo "The Macaroni penguin (Eudyptes chrysolophus) is a species of penguin found from the Subantarctic to the Antarctic Peninsula. One of six species of crested penguin, it is very closely related to the royal penguin, and some authorities consider the two to be a single species. Macaroni penguins grow up to 71 cm (about 28 inches) in length and weigh an average of 5.5 kg (about 12 pounds), making them the tallest and heaviest members of the genus Eudyptes.";
                }
                echo "</p>";
            }
            ?>
            <br>
            <br>
        </div>
        <div class="row p-0 g-3">
            <br>
            <?php
            if (!isset($_GET["diet"])) {
                echo "<b>You are a monster for not enjoying the food with " . $_GET["name"] . '!</b>';
            } else {
                echo 'Their menu that you can enjoy together consists of:<br><ul class="list-group">';
                foreach ($_GET['diet'] as $food) {
                    echo '<li class="list-group-item">' . $food . '</li>';
                }
                echo "</ul>";
            }
            ?>

        </div>
        <div class="row p-0">
            <br>
            <?php
            if (!isset($_GET["predators"])) {
                echo $_GET["name"] . " is glad that you also hate all their predators.";
            } else {
                foreach ($_GET["predators"] as $evil) {
                    echo "<p>I hope a " . $evil . " finds you in your nightmares!</p>";
                }
            }
            ?>
        </div>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"></script>
</body>

</html>