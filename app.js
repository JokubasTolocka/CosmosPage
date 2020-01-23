var url = "https://api.nasa.gov/planetary/apod?api_key=jhuvYM75eQOKNtnxK9uq1IkZxc4Mx7GB6Ae412Iy";

axios.get(url)
  .then(function(res){
    console.log(res.data.hdurl);
    var img = document.querySelector("img");
    var date = document.getElementById("date");
    date.textContent = res.data.date;
    img.src = res.data.hdurl;

  })