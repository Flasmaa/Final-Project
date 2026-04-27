const menuHtml = `
  <div style="display: block; position: fixed; width: 12%; height: 100%; background-color: aliceblue;">
    <dl>
        <div class="sec">
            <dt><a href="index.html" class="default" style="color: black; text-decoration: none;">Homepage</a></dt>
        </div><br><br>
        <div class="sec">
            <dt><a href="product.html" class="default" style="color: black; text-decoration: none;">Our Products</a></dt>
        </div><br><br>
        <div class="sec">
            <dt><a href="preorder.html" class="default" style="color: black; text-decoration: none;" alt="Pre Order Now!"><img src="img/mail.png" style="position: relative; width: 40px; height: 40px; margin-right: 2px; transform: translateY(12.5px)"></img>Pre-Order</a></dt>
        </div><br><br>
        <div class="sec">
            <dt><img src="img/loc.png" style="position: relative; width: 40px; height: 40px; margin-right: 2px; transform: translateY(10px)"></img>Branches (TBA)</dt>
        </div>
      <dd>•PUP Laboratory High School</dd>
      <dd>•Barangay Piti Piw Piw Wiw Wiw</dd>
      <dd>•Lambingan Bridge</dd>
      <dd>•Battle of Yultong Hill</dd>
      <br><br><br><br><br><br><br><br>
    </dl>
  </div>
`;

document.getElementById('menu-placeholder').innerHTML = menuHtml;