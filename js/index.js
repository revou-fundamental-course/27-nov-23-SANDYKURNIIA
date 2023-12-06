function hitungluas() {
    var alas = parseFloat(document.getElementById("alas").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);
    var luas = (alas * tinggi) * 0.5;
    document.getElementById("luas").value = luas;
}

function resetForm() {
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("luas").value = "";
}
