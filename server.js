const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="sw">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo Form</title>
    <style>
      body{font-family:Arial;background:#f2f2f2;display:flex;justify-content:center;align-items:center;height:100vh;margin:0}
      .box{background:white;padding:25px;border-radius:10px;box-shadow:0 0 10px #ccc;width:90%;max-width:320px;text-align:center}
      input{width:100%;padding:10px;margin:10px 0;border:1px solid #ddd;border-radius:5px;box-sizing:border-box}
      .otp{display:flex;gap:8px;justify-content:center}
      .otp input{width:50px;text-align:center;font-size:18px}
      button{width:100%;padding:12px;background:#8B5CF6;color:white;border:none;border-radius:5px;font-size:16px;font-weight:bold;cursor:pointer}
      button:hover{background:#7C3AED}
      #step2{display:none}
    </style>
  </head>
  <body>
    <div class="box">
      <h2>Demo Form</h2>
      
      <div id="step1">
        <label>Weka Namba ya Simu</label>
        <input type="tel" id="phone" placeholder="+255XXXXXXXX" required>
        <button onclick="nextStep()">Endelea</button>
      </div>

      <div id="step2">
        <label>Weka Msimbo wa 4</label>
        <div class="otp">
          <input type="text" maxlength="1">
          <input type="text" maxlength="1">
          <input type="text" maxlength="1">
          <input type="text" maxlength="1">
        </div>
        <button onclick="alert('Hii ni demo tu. Hakuna data inayopelekwa')">Pokea ✅</button>
      </div>
    </div>

    <script>
      function nextStep(){
        if(document.getElementById('phone').value !== ''){
          document.getElementById('step1').style.display='none';
          document.getElementById('step2').style.display='block';
        }
      }
      // auto move to next box
      document.querySelectorAll('.otp input').forEach((inp,i,arr)=>{
        inp.addEventListener('input',()=>{ if(inp.value && i<3) arr[i+1].focus() })
      })
    </script>
  </body>
  </html>`);
});

app.listen(PORT, () => console.log(\`Server running on \${PORT}\`));
