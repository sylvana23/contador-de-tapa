let clickCount = 0;
let clickTimes = [];

document.getElementById('clickButton').addEventListener('click', () => {
    clickCount++;
    clickTimes.push(new Date());
    alert(`Click registered! Total clicks: ${clickCount}`);
});

document.getElementById('finalizeButton').addEventListener('click', () => {
    localStorage.setItem('clickCount', clickCount);
    localStorage.setItem('clickTimes', JSON.stringify(clickTimes));
    window.location.href = 'result.html';
});
