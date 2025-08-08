const roasts = {
  weak: [
    "💩 This password was handcrafted in the pits of laziness.",
    "🙄 Did your cat walk on the keyboard?",
    "😂 I’ve seen better passwords in kindergarten.",
    "🤡 Even a fish could guess this.",
    "📢 Weak alert! The hackers are already laughing.",
    "😴 Your password fell asleep from boredom.",
    "👶 Baby’s first password?",
    "🔓 Hackers thank you for your service.",
    "🙈 This isn't even trying.",
    "😵 That password is as strong as wet tissue."
  ],
  meh: [
    "😐 It exists... barely.",
    "🤷‍♂️ You're riding the line of mediocrity.",
    "🫠 This password says 'meh' louder than your ex.",
    "🧂 Not salty, not sweet, just plain.",
    "📉 You started strong, then gave up.",
    "🕶 You're trying to be cool, but it's not quite there.",
    "🫤 It's fine. Just... fine.",
    "🚧 Built like a Lego wall — breakable.",
    "🤨 Could fool your grandma, maybe."
  ],
  strong: [
    "🧱 Solid like a brick wall!",
    "🕵️ Secret agent vibes!",
    "🔐 That’s one secure boi.",
    "🎯 Direct hit. Hackers hate you!",
    "🧠 Smart cookie alert!",
    "💪 That password lifts at the gym.",
    "🧍 You actually read a password guide, huh?",
    "🚓 Safe enough to guard Area 51."
  ],
  genius: [
    "🧠 Whoa! Even the NSA blushed.",
    "🔥 This password has its own security clearance.",
    "🪐 That password is out of this world!",
    "🎉 You're officially overqualified to exist online.",
    "📚 That’s some next-level cybersecurity wizardry.",
    "🛡️ Built like a digital fortress.",
    "😇 This password ascended to password heaven.",
    "🥷 A ninja couldn’t crack this.",
    "👽 Even aliens can’t guess it.",
    "🌈 A magical unicorn just blessed this password."
  ]
};

function checkStrength(password) {
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (password.length >= 16) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[\W_]/.test(password)) score++;
  if (!password.toLowerCase().includes("password")) score++;
  return score;
}

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function judgePassword() {
  const password = document.getElementById("passwordInput").value;
  const result = document.getElementById("result");

  if (!password) {
    result.innerHTML = "🫥 Bro, you didn’t even type anything.";
    result.className = "result weak wobble visible";
    return;
  }

  const score = checkStrength(password);
  let message = "", styleClass = "";

  if (score <= 3) {
    message = getRandom(roasts.weak);
    styleClass = "weak wobble";
  } else if (score <= 5) {
    message = getRandom(roasts.meh);
    styleClass = "meh jump";
  } else if (score <= 7) {
    message = getRandom(roasts.strong);
    styleClass = "strong spinPop";
  } else {
    message = getRandom(roasts.genius);
    styleClass = "genius spinPop";
  }

  result.innerHTML = message;
  result.className = `result ${styleClass} visible`;
}
