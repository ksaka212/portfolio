// 時分秒ミリ秒を取得
const nowTime = () => {
    const currentTime = new Date();
    let h = currentTime.getHours();
    let m = currentTime.getMinutes();
    let s = currentTime.getSeconds();
    let ms = currentTime.getMilliseconds();


    h = String(h).padStart(2, '0');
    m = String(m).padStart(2, '0');
    s = String(s).padStart(2, '0');
    ms = Math.floor(ms / 10);
    ms = String(ms).padEnd(2, '0');

    return {
        hours: h,
        minutes: m,
        seconds: s,
        milliseconds: ms
    }
}

// 時分秒ミリ秒を画面表示する
const display = () => {
    const clock = document.querySelector('.clock');
    const now = nowTime();
    clock.textContent = `${now.hours}:${now.minutes}:${now.seconds}.${now.milliseconds}`
}

// 0.1秒間隔で画面へ表示する
setInterval(display, 100);