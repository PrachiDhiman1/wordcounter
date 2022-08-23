const txt = document.getElementById("txt");

txt.addEventListener('input', function(){
    let text = this.value;
    let char = document.getElementById("char").innerHTML = text.length;
    console.log(char);

    text = text.trim();
    let words = text.split(" ");
    let txtList = words.filter(function(element){
        return element != "";
    })
    document.getElementById("word").innerHTML = txtList.length;
    console.log(txtList);
});
