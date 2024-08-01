// script.js
document.addEventListener("DOMContentLoaded", function() {
    const validUsername = "Timothy";
    const validPassword = "kieranissupercool";
    const validOTP = "89101860";

    function playSound(soundId) {
        const sound = document.getElementById(soundId);
        sound.play();
    }

    window.login = function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username === validUsername && password === validPassword) {
            playSound("sound-effect");
            localStorage.setItem('username', username);
            window.location.href = 'otp.html';
        } else {
            alert('Invalid username or password');
        }
    }

    window.verifyOTP = function() {
        const otp = document.getElementById('otp').value;
        if (otp === validOTP) {
            playSound("sound-effect");
            window.location.href = 'biometric.html';
        } else {
            alert('Invalid OTP');
        }
    }

    window.verifyFingerprint = function() {
        playSound("fingerprint-sound");
        showBiometricAnimation('fingerprint-animation');
    }

    window.verifyFaceID = function() {
        playSound("faceid-sound");
        showBiometricAnimation('faceid-animation');
    }

    function showBiometricAnimation(animationClass) {
        const animation = document.getElementById("biometric-animation");
        animation.className = `biometric-animation ${animationClass}`;
        animation.style.display = "block";
        setTimeout(() => {
            playSound("sound-effect");
            window.location.href = 'success.html';
        }, 3000);
    }

    if (window.location.pathname.endsWith('success.html')) {
        const username =



