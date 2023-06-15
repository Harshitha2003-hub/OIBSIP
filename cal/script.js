function appendValue(value) {
  document.getElementById('result').value += value;
}

function appendOperator(operator) {
  const result = document.getElementById('result').value;
  if (result !== '') {
    const lastChar = result[result.length - 1];
    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
      document.getElementById('result').value = result.slice(0, -1) + operator;
      return;
    }
  }
  document.getElementById('result').value += operator;
}

function clearResult() {
  document.getElementById('result').value = '';
}

function calculateResult() {
  const result = document.getElementById('result').value;
  if (result !== '') {
    try {
      const calculatedResult = eval(result);
      document.getElementById('result').value = calculatedResult;
    } catch (error) {
      alert('Invalid expression!');
    }
  }
}
