const potrace = require('potrace');
const fs = require("fs");

const surfix = "-Outline";

var params = {
    // color: '#ccc',
    // background: '#000',
    //steps: -1,
    // threshold: 255,
    blackOnWhite: true,
};

fs.readdir('./pngs',function(err, files) {
    if (err) {
        console.log('Error', err);
    } else {
        files.map(item=>{
            console.log('Result', item);
            const newName = item.replace('.png',`${surfix}.svg`);
            potrace.trace(`./pngs/${item}`, params ,function(err, svg) {
                if (err) throw err;
                fs.writeFileSync(`./svgs/${newName}`, svg);
            });
        })
    }
});

