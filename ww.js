importScripts("./libs/jszip.min.js");const zip=new JSZip;self.onmessage=async function(e){zip.remove("images"),e.data.forEach((e=>{zip.folder("images").file(e.name,e.file)})),postMessage(await zip.generateAsync({type:"blob"}))};