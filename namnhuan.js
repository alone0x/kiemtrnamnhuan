function namnhuan() {
    let nam =parseInt(prompt("nhap vao nam"));

    if (nam % 4 == 0) {
        if (nam % 100 == 0) {
            if (nam % 400 == 0) {
                alert(nam + "la nam nhuan");
            } else {
                alert("khong phai nam nhuan");
            }
        } else {
            alert (nam + 'la nam nhuan');
        }

    }else {alert('khong phai nam nhuan');}
}
namnhuan();