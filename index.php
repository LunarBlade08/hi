<html>
<head>
    <title>Fabianero || Home</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet">
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"/>
    <link href="index_styles.css" rel="stylesheet">
    
    <?php
        session_start();
        if (isset($_SESSION['error'])) {
            ?>
            <script>
                window.onload = function() {
                    setTimeout(function() {
                        alert('<?php echo $_SESSION['error']; ?>');
                    }, 100);
                };
            </script>
            <?php
            unset($_SESSION['error']);
        }
        if (isset($_SESSION['isLoggedIn']) && $_SESSION['isLoggedIn'] == true) {
            ?>
            <script>
                window.onload = function() {
                    isLoggedIn = true;
                    console.log(isLoggedIn)
                    showHome()
                };
            </script>
            <?php
        } 
    ?>

</head>
<body>
    <!-- Homepage -->
    <div class="top-bar">
    <div class="topBar-left">
      <div class="location">
        <i class="bx bxs-map"></i>
        <span><a href="#">George Town, Penang, Malaysia</a></span>
      </div>
      <hr>
      <div class="time">
        <i class="bx bxs-time"></i>
        <span>Daily: 6:00am to 12:00pm</span>
      </div>
    </div>
    <div class="topBar-right">
      <div class="phone">
        <i class="bx bxs-phone"></i>
        <span><a href="tel:+60177028198">+6034212039</a></span>
      </div>
      <hr>
      <div class="email">
        <i class="bx bxs-envelope"></i>
        <span><a href="mailto:info@thegourmetgarage.com">info@fabianero.com</a></span>
      </div>
      <div class="admin">
        <i class="bx bxs-lock"></i>
        <span><a href="admin.php">Admin</a></span>
      </div>
    </div>
  </div>
    <div class="navbar">
        <div class="logo">FABIANERO</div>
        <ul>
            <li><a href="#" onclick="showHome()">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>

        <a class="login-btn" href="#" id="login-btn" onclick="showLogin()">Log-In</a>
        <a class="logout-btn" href="#" id="logout-btn" onclick="logout()" style="display: none;">Log-Out</a>
    </div>

    <!-- Login & Registeration Section-->
    <div class="login-container">
        <div class="login-box">
            <div class="close-btn" onclick="showHome()">×</div>
            <h2>Log-In</h2>
            
            <form method="POST" action="login.php">
                <div class="input-group">
                    <input name="email" placeholder="Email" type="text" required/>
                    <i class="fas fa-envelope"></i>
                </div>

                <div class="input-group">
                    <input name="password" placeholder="Password" type="password" required/><i class="fas fa-lock"></i>
                </div>

                <button class="login-btn" type="submit">Log-In</button>
                <a class="register-link" href="#" onclick="showRegister()">Don't have an account? Register!</a>
            </form>
        </div>
    </div>    

    <div class="register-container">
        <div class="register-box">
            <div class="close-btn" onclick="showHome()">×</div>
            <h2>Sign-Up</h2>

            <form method="POST" action="register.php">

                <div class="input-group">
                    <input name="email" placeholder="Email" type="text" required/>
                    <i class="fas fa-envelope"></i>
                </div>

                <div class="input-group">
                    <input name="password" placeholder="Password" type="password" required/>
                    <i class="fas fa-lock"></i>
                </div>

                <div class="input-group">
                    <input name="confirm_password" placeholder="Confirm Password" type="password" required/>
                    <i class="fas fa-lock"></i>
                </div>

                <button class="register-btn" type="submit">Sign-Up</button>
                <a class="login-link" href="#" onclick="showLogin()">Already have an account? Login</a>
            </form>
        </div>
    </div>

    <!-- Homepage -->
    
    
    <div class="home-container" style="display: flex;">
        <div class="home-content">
            <div class="home-title-container">
                <h1>Fabianero Coffee</h1>
                <p>A cozy destination that prides itself on serving high-quality coffee and a welcoming atmosphere.<br>Features a selection of pastries and light bites to complement your drink.</p>
                <button class="view-menu-btn" style="display: none;">Order Menu</button>
                <button class="login-btn" onclick="showLogin()" style="display: block;">Log-In</button>
                <button class="signup-btn" onclick="showRegister()" style="display: block;">Sign-Up</button>
                <div class="home-container-img"></div>
            </div>

            <div class="line" style="margin-top:25;"></div>

            <div class="home-advertise-container">
                <div class="advertise-circle"></div>
                <h2>TRY OUR PRODUCTS</h2>
                <p1>Experience the best. Upgrade your daily routine or treat yourself to <br> something special with our high-quality, innovative products.</p1>
                <button class="view-products-btn"style="display: flex;">View Menu</button>
                <button class="menu-pdf-btn"style="display: flex;">Save Menu</button>

            </div>


            <div class="home-recommend-container">
                <h3>Recommandation</h3>

            </div>

        </div>
    </div>
    
    
    <script src="index_scripts.js"></script>
</body>
</html>