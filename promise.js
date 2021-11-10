var vt = openDatabase('veritabani3', '1.0', 'Web Sql Db', 2 * 1024 * 1024);



var create = new Promise(function(resolve, reject) {
    vt.transaction(function(tx) {
            tx.executeSql("CREATE TABLE IF NOT EXISTS Hatirlatici_ (id INTEGER PRIMARY KEY,tarih DATETIME,hatirlatici_baslik VARCHAR(100),hatirlatici_text VARCHAR(500))");
            resolve(create);
        }),
        function() {
            reject("hata");
        }

});

function kayitlariOku() {
    return new Promise(function(resolve, reject) {

        var table = document.getElementById('tbody-register');

        vt.transaction(function(tx) {
            tx.executeSql('SELECT * FROM Hatirlatici_', [], function(tx, result) {
                    var rows = result.rows;
                    var tr = '';
                    for (var i = 0; i < rows.length; i++) {
                        tr += '<tr>';
                        tr += '<td>' + rows[i].id + '</td>';
                        tr += '<td><label id="lbltarih" >' + rows[i].tarih + '</label> </td>';
                        tr += '<td><label id="lblbaslik" >' + rows[i].hatirlatici_baslik + '</label> </td>';
                        tr += '<td><label id="lblhatirlatici" >' + rows[i].hatirlatici_text + '</label></td>';
                        tr += '<td> <button class="btn btn-success" id="btn_' + i + '" onclick="düzenle(this);"  ><i class="glyphicon glyphicon-edit" style="font-size:20px" ></i></button> <button class="btn btn-danger" onclick="sil(this);"  id="btn_' + i + '"><i class="glyphicon glyphicon-remove" style="font-size:20px" ></i></button></td>';
                        tr += '</tr>';
                    }
                    table.innerHTML = tr;
                    resolve(result);

                },
                function() {
                    reject("hata")
                }
            );

        });
    });

}






function guncelle(event) {
    return new Promise(function(resolve, reject) {
        var id = $(event.parentElement.parentElement)[0].cells[0].textContent;
        var tarih = input.value;
        var hatirlatici_baslik = input2.value;
        var hatirlatici_text = input3.value;
        vt.transaction(function(tx) {

                tx.executeSql("UPDATE Hatirlatici_ SET tarih=? ,hatirlatici_baslik=?, hatirlatici_text=? WHERE id=?", [tarih, hatirlatici_baslik, hatirlatici_text, id]);
                resolve();
            }),
            function() {
                reject("hata");
            }

        kayitlariOku();

    });
}







var sayi = 5;

var promise = new Promise(function(resolve, reject) {

    if (sayi == 5) {
        resolve("sayı 5 e eşit");
    } else {
        reject("sayı 5 e eşit değil");
    }



});


promise.then(function(x) {
    document.write(x);
}).catch(function(x) {
    document.write(x);
});






var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise(
    function(resolve, reject) {
        if (isMomHappy) {

            var phone = "samsung phone";
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('HATA');
            reject(reason); // reject
        }

    }
);

willIGetNewPhone.then(function(x) {

    document.writeln(x);

}).catch(function(x) {
    document.writeln(x);
});


var promise2 = new Promise(function(resolve, reject) {
    var x = "s";
    var y = "s";
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});


promise2.then(function() {
    document.write("iki değişken birbirine eşit.");
}).catch(function() {
    document.write("iki değişken birbirinden farklı.");
});












var promises = [];

for (var i = 0; i < 10; i++) {
  promises.push(new Promise(function(resolve, reject) {
    var timeout = i * 10;
    setTimeout(function() {
      resolve('resolving after ' + timeout + ' milliseconds');
    }, timeout);
  }));
}

Promise.all(promises).then(function(results) {
  console.log('all results:')
  for (var result of results) {
    console.log('  ' + result);
  }
});




var promises = [];


for(var i=0; i<10; i++) {
    promises.push(new Promise(function(resolve,reject){
        var timeout=i*5;
        setTimeout(function(){
            resolve("promises dizisinin içinde ki değerler : "+ timeout+" milisaniye");
        },timeout);
        
        
    }));
}


Promise.all(promises).then(function(results){
   console.log("all results : ") 
    for(var result of results) {
        console.log(" "+result);
    }
});

/*
loginSelectListe: function() {
    return new Promise(function(resolve, reject) {
        db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM Login ', [], function(transaction, results) {
                    resolve(results);
                },
                function(error) {
                    reject(error);
                });
        })
    });
}
 */


