'use strict';

(function() {

var jsonMR = document.getElementById('json-mangarock');
var jsonTY = document.getElementById('json-tachiyomi');

var tachiBackup;

document.getElementById('convert').addEventListener('click', function() {
    var jsonMRValue = jsonMR.value;

    if (jsonMRValue == '') {
        alert('Enter Manga Rock JSON');
        return;
    }

    var parsedMRJson;
    try {
        parsedMRJson = JSON.parse(jsonMRValue);
    } catch (e) {
        alert('Error parsing Manga Rock JSON');
        return;
    }

    var favorites = parsedMRJson.favorites;

    if (!favorites || favorites.length === 0) {
        alert('No favorites found');
        return;
    }

    var tachiFavs = favorites.map(function(favorite) {
        return getTachiyomiManga(favorite.mid, favorite.manga);
    });

    tachiBackup = JSON.stringify(getTachiyomiBackup(tachiFavs), null, 2);

    jsonTY.value = tachiBackup;
});

document.getElementById('download').addEventListener('click', function() {
    download(tachiBackup, 'tachiyomi-backup.json', 'text/json');
});

function getTachiyomiBackup(mangas) {
    return {
        "version": 2,
        "mangas": mangas,
        "categories": []
    };
}

function getTachiyomiManga(mrSeriesId, mrSeriesName) {
    return {
        "manga": [
            // e.g. "/manga/mrs-serie-100181368"
            "/manga/mrs-serie-" + mrSeriesId,
            // e.g. "I’ve Been Killing Slimes for 300 Years and Maxed Out My Level",
            mrSeriesName,
            1554176584893433663,
            0,
            0
        ],
        "chapters": [],
        "track": [],
        "history": []
    };
}

// https://stackoverflow.com/a/30832210
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

})();