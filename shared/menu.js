const menuHtml = `
  <div style="display: block; position: fixed; width: 12%; height: 100%; background-color: aliceblue;">
    <dl>
        <div class="sec">
            <dt><a href="index.html">Homepage</a></dt>
        </div>
        <div class="sec">
            <dt><a href="product.html">Our Products</a></dt>
        </div>
        <div class="sec">
            <dt><a href="preorder.html">Pre-Order</a></dt>
        </div>
        <div class="sec">
            <dt><img src="img/loc.jpg" style="position: relative; width: 15px; height: 15 px; margin-right: 2px; display: inline-block;"></img>Branches (TBA)</dt>
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