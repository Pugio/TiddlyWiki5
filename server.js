var $tw = require("./boot/boot.js").TiddlyWiki();

$tw.boot.argv = [
//  process.env.OPENSHIFT_DATA_DIR,
  "--verbose",
  "--server",
  "8080",
  "$:/core/save/all",
  "text/plain",
  "text/html",
  "shalev",
  "wer8werlegion",
  "0.0.0.0"
];
+$tw.boot.boot();
