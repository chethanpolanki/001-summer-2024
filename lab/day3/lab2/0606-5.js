(function() {
    function isPalindrome(s) {
        return s === s.split('').reverse().join('');
    }

    const string = "madam";
    console.log(`Is '${string}' a palindrome? ${isPalindrome(string)}`);
})();
