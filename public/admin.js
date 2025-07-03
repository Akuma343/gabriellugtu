<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login - Gabriel Q. Lugtu Portfolio</title>
    <link rel="stylesheet" href="admin-styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <link rel="icon" type="image/png" href="granite.png">
</head>
<body>
    <div class="admin-container">
        <div class="admin-login-card">
            <div class="login-header">
                <img src="granite.png" alt="Logo" class="admin-logo">
                <h1>Admin Panel</h1>
                <p>Access your message dashboard</p>
            </div>
            
            <form id="adminLoginForm" class="login-form">
                <div class="form-group">
                    <div class="input-icon">
                        <i class="fas fa-user"></i>
                        <input type="text" id="username" name="username" placeholder="Username" required>
                    </div>
                </div>
                
                <div class="form-group">
                    <div class="input-icon password-group">
                        <i class="fas fa-lock"></i>
                        <input type="password" id="password" name="password" placeholder="Password" required>
                        <button type="button" class="toggle-password" id="togglePassword" tabindex="-1">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
                
                <button type="submit" class="login-btn">
                    <span>Login</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </form>
            
            <div class="login-footer">
                <a href="index.html" class="back-link">
                    <i class="fas fa-arrow-left"></i>
                    Back to Portfolio
                </a>
            </div>
        </div>
        
        <div class="background-animation">
            <div class="floating-shapes">
                <div class="shape shape-1"></div>
                <div class="shape shape-2"></div>
                <div class="shape shape-3"></div>
                <div class="shape shape-4"></div>
            </div>
        </div>
    </div>

    <script src="admin.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoA6DQD021o6FfQ2z9gA9uvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</body>
</html> 
