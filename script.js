const countdown = () => {
  const targetDate = new Date("Dec 25, 2025 10:00:00").getTime();
  const now = new Date().getTime();
  const gap = targetDate - now;

  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / 1000);

  document.getElementById("timer").innerHTML = 
    `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
};

setInterval(countdown, 1000);
