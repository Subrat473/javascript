document.getElementById("generateCard").addEventListener("click", function () {
    let name = document.getElementById("name").value.trim();
    let theme = document.getElementById("theme").value;
  
    if (name === "") {
      alert("Please enter a name.");
      return;
    }
  
    let cardTitle = document.getElementById("cardTitle");
    let cardMessage = document.getElementById("cardMessage");
    let card = document.getElementById("card");
  
    let themeMessages = {
      birthday: `🎂 Happy Birthday, ${name}! 🎉 Wishing you a fantastic day!`,
      congratulations: `🎉 Congratulations, ${name}! 🏆 Keep shining and achieving great things!`,
      love: `❤️ Dear ${name}, you are truly special! Sending love your way! 💕`,
      friendship: `🤗 Hey ${name}! You're an amazing friend! 🌟 Stay awesome!`,
    };
  
    cardTitle.innerText = `💌 ${
      theme.charAt(0).toUpperCase() + theme.slice(1)
    } Greeting`;
    cardMessage.innerText = themeMessages[theme];
  
    card.style.display = "block";
  });