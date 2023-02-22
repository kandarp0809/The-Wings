            var email = document.getElementById("email");
            var pwd = document.getElementById("pwd");
                var standard = document.getElementById("standard");
            function page() {
                if (email.value == "mihirkothari0702@gmail.com" && pwd.value == "mihir777") {
                    document.getElementById("form").action = "index (1).html";
                }
                else {
                    alert("ID or Password is Incorrect");
                }
            }
            function myfunction(){
                var a = document.getElementById("fname");
                var b = document.getElementById("lname");
                document.getElementsByClassName("text-2").innerHTML=a + " " + b; 
            }