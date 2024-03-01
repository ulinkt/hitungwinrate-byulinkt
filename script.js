function calculateMatches() {
    var heroName = document.getElementById('heroName').value;
    var totalMatches = document.getElementById('totalMatches').value;
    var currentWinrate = document.getElementById('currentWinrate').value;
    var targetWinrate = document.getElementById('targetWinrate').value;

    if (heroName && totalMatches && currentWinrate && targetWinrate) {
        totalMatches = parseInt(totalMatches);
        currentWinrate = parseFloat(currentWinrate);
        targetWinrate = parseFloat(targetWinrate);

        var matchesNeeded = Math.ceil((targetWinrate * totalMatches - currentWinrate * totalMatches) / (100 - targetWinrate));

        var resultElement = document.getElementById('result');
        resultElement.innerHTML = 'Untuk mencapai winrate ' + targetWinrate + '% dengan hero ' + heroName + ', kamu butuh menang ' + matchesNeeded + ' total ' + (matchesNeeded + totalMatches) + ' match.';
    } else {
        var resultElement = document.getElementById('result');
        resultElement.innerHTML = '';
    }
}

function resetInputs() {
    document.getElementById('heroName').value = '';
    document.getElementById('totalMatches').value = '';
    document.getElementById('currentWinrate').value = '';
    document.getElementById('targetWinrate').value = '';

    var resultElement = document.getElementById('result');
    resultElement.innerHTML = '';
}

function copyOutput() {
    var outputText = document.getElementById('result').innerText;
    var textarea = document.createElement('textarea');
    textarea.value = outputText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Output berhasil disalin!');
}

function orderJoki() {
    // Implement your order joki logic here
    alert('Order Joki function placeholder');
}
