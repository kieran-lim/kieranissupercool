// script.js
document.addEventListener("DOMContentLoaded", function() {
    const validUsername = "demoUser";
    const validPassword = "demoPass";
    const validOTP = "123456";

    function playSound() {
        const sound = document.getElementById("sound-effect");
        sound.play();
    }

    window.login = function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username === validUsername && password === validPassword) {
            playSound();
            localStorage.setItem('username', username);
            window.location.href = 'otp.html';
        } else {
            alert('Invalid username or password');
        }
    }

    window.verifyOTP = function() {
        const otp = document.getElementById('otp').value;
        if (otp === validOTP) {
            playSound();
            window.location.href = 'biometric.html';
        } else {
            alert('Invalid OTP');
        }
    }

    window.verifyBiometric = function() {
        // Simulating biometric verification
        setTimeout(() => {
            playSound();
            window.location.href = 'success.html';
        }, 2000);
    }

    if (window.location.pathname.endsWith('success.html')) {
        const username = localStorage.getItem('username');
        document.getElementById('username-display').innerText = username;
    }
});
