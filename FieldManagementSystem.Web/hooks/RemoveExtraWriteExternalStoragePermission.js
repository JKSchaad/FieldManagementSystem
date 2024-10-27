const FS = require('fs');
const Path = require('path');

let path = Path.resolve('platforms/android/app/src/main/AndroidManifest.xml');

let manifest = FS.readFileSync(path, {
    encoding: 'utf-8'
});

manifest = manifest.replace(/^(\s)+<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" \/>$/gm, '');

FS.writeFileSync(path, manifest);