$(document).ready(function () {
    $("#BaseToImage").click(function () {
        document.getElementById("preview").setAttribute('src', $("#response").val());
        $("#preview").show();
    });
});



$(document).ready(function () {
    $("#inputFileToLoad").change(function () {
        var fileSelected = document.getElementById("inputFileToLoad").files;
        if (fileSelected.length > 0) {
            var fileToLoad = fileSelected[0];
            var fileReader = new FileReader();
            fileReader.onload = function (fileLoadedEvent) {
                var base64value = fileLoadedEvent.target.result;
                console.log(base64value);
                $("#response").val(base64value);
            };
            fileReader.readAsDataURL(fileToLoad);
        }
    });
});
