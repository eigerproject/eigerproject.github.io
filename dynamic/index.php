<?php include "data/home-features.php"; include "data/home-downloads.php"; ?>
<!doctype html>
<html lang="en">
   <?php include "global-includes/head.php"; ?>
   <body>
        <?php include "global-includes/header.php"; ?>
        <div class="fullpage div-fadein">
            <div class="fadeincontainer">
                <code style="color: gray;" class="mono demo-code">
                    <h1 style="transform: scale(0.8);">A <span class="hljs-identifier">general-purpose</span> programming language.<br>Designed for <span class="hljs-keyword typewriter" data-typewriter="students,developers,programmers,everyone"></span></h1>
                </code>
                <code class="text-center d-block" style="margin: 50px;">~ Scroll Down to Learn More</code>
            </div>
        </div>
      
        <?php foreach($features as $i=>$feature): ?>
        <div style="margin-top:30px" class="d-flex justify-content-around flex-wrap align-items-center <?php if($i%2==1){ echo "flex-row-reverse"; } ?>">
            <div class="text-center" style = "margin:20px">
                <h1 class="title"><?php echo $feature->title; ?></h1>
                <p class="title"><?php echo $feature->subtitle; ?></p>
            </div>
            <pre>
                <code class="language-eiger demo-code"><?php echo $feature->code_snippet; ?></code>
            </pre>
        </div>
        <?php endforeach; ?>

        <div id="downloads" class="text-center">
            <h1 class="title">
                Stable Releases
            </h1>

            <div class="d-flex align-items-center justify-content-center">
                <table class="table table-dark" style="width: 50%; margin: 20px">
                    <thead>
                        <tr>
                            <th scope="col">Version</th>
                            <th scope="col">Date</th>
                            <th scope="col">Release Notes</th>
                            <th scope="col">Downloads</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach(array_reverse($releases) as $release) ?>
                        <tr>
                            <th scope="row"><?php echo $release->version; ?></th>
                            <td><?php echo $release->date; ?></td>
                            <?php if($release->release_notes_link != ""): ?>
                                <td><a href="<?php echo $release->release_notes_link; ?>"><i class="fa-solid fa-square-up-right"></i></a></td>
                            <?php else: ?>
                                <td><i>Not Available</i></td>
                            <?php endif; ?>
                            <td>
                                <?php if($release->download_win != ""): ?>
                                    <a style="color: var(--bs-success); margin: 5px;" href="<?php echo $release->download_win; ?>"><i class="fa-brands fa-windows"></i></a>
                                <?php else: ?>
                                    <i style="color: var(--bs-danger); margin: 5px;" class="fa-brands fa-windows"></i>
                                <?php endif; ?>

                                <?php if($release->download_mac != ""): ?>
                                    <a style="color: var(--bs-success); margin: 5px;" href="<?php echo $release->download_mac; ?>"><i class="fa-brands fa-apple"></i></a>
                                <?php else: ?>
                                    <i style="color: var(--bs-danger); margin: 5px;" class="fa-brands fa-apple"></i>
                                <?php endif; ?>

                                <?php if($release->download_linux != ""): ?>
                                    <a style="color: var(--bs-success); margin: 5px;" href="<?php echo $release->download_linux; ?>"><i class="fa-brands fa-linux"></i></a>
                                <?php else: ?>
                                    <i style="color: var(--bs-danger); margin: 5px;" class="fa-brands fa-linux"></i>
                                <?php endif; ?>
                            </td>
                        </tr>
                        <tr>
                    </tbody>
                </table>
            </div>
        </div>

        <? include "global-includes/footer.php" ?>

        <?php include "global-includes/script-includes.php"; ?>
   </body>
</html>