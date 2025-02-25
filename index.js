const date = new Date()
const halo = document.getElementById("halo")
halo.addEventListener('click', () => {
    halo.innerHTML = "Haloooo"
    halo.style.backgroundColor = "yellow"
})
document.getElementById("tanggal").addEventListener('click', () => {
    document.getElementById("teks-tanggal").innerHTML = date.toLocaleString('id-ID')
})
let ml_pendidikan = -200
let speed = 1
function animate() {
    document.getElementById("time").innerHTML = date.toLocaleTimeString('id-ID')
    document.getElementById("pendidikan").style.marginLeft = `${ml_pendidikan}px`
    requestAnimationFrame(animate)
    // console.log(ml_pendidikan)
    console.log(document.getElementById("pendidikan").style.marginLeft)
}
setInterval(() => {
    if (ml_pendidikan < -500) {
        speed = 1
    } else if (ml_pendidikan > 200) {
        speed = -1
    }
    ml_pendidikan += speed
})
animate()
