const fs = require("fs");
const PackageJson = require("./src/package.template.json");

let verArr = PackageJson.version.split(".");
verArr[2] = Number(verArr[2]) + 1;
let version = verArr.join(".")
PackageJson.version = version;

const functionStr = `${JSON.stringify(PackageJson, null, 4)}`;

fs.writeFile("./src/package.template.json", functionStr, (err, data) => {
    if (err) throw err;
    console.log("new version: " + version);

    fs.copyFile("./src/package.template.json", "./dist/package.json", (err) => {
        if (err) throw err;
        console.log("copy 'src/package.template.json' to 'dist/package.json'")
    })
});

// npm publish --access public

