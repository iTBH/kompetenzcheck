///**
// * Created by Artur on 24.09.2015.
// */
//var wkhtmltopdf = require('wkhtmltopdf');
//var http = require('http');
//var exec = require('child_process').exec;
//var util = require('util'),
//fileSystem = require('fs'),
//  path = require('path'),
//  express = require('express');
//
//exports.generate = function (req, res) {
//
//  //wkhtmltopdf.command('C:/Program Files/wkhtmltopdf/bin/wkhtmltopdf.exe');
//  var dummyContent = req.headers.referer;
//  var htmlFileName = "page.html", pdfFileName = "page.pdf";
//
//
//  // Save to HTML file
//  //fs.writeFile(htmlFileName, dummyContent, function(err) {
//  //  if(err) { throw err; }
//  //  util.log("file saved to site.html");
//  //});
//  //var file = '../../'+pdfFileName;
//  // Convert HTML to PDF with wkhtmltopdf (http://code.google.com/p/wkhtmltopdf/)
//  //var child = exec("C:/Programme/wkhtmltopdf/bin/wkhtmltopdf.exe " + htmlFileName + " " + pdfFileName, function(err, stdout, stderr) {
//  var child = exec("C:/Programme/wkhtmltopdf/bin/wkhtmltopdf.exe " + dummyContent + " " + pdfFileName, function(err, stdout, stderr) {
//    if(err) {
//      res.send(err);
//    } else {
//      res.download(__dirname + '/../../' + pdfFileName, function(err){
//        if (err) {
//          // Handle error, but keep in mind the response may be partially-sent
//          // so check res.headersSent
//          console.log(err);
//        } else {
//          // decrement a download credit, etc.
//          console.log('Download succeeded');
//        }
//      });
//    }
//    util.log(stderr);
//
//  });
//  //res.download(file);
//
//  //
//  //var urlForPDF = req.headers.referer;
//  //wkhtmltopdf.command('C:/Program Files/wkhtmltopdf/bin/wkhtmltopdf.exe');
//  //wkhtmltopdf(urlForPDF, { pageSize: 'a4'}, function (err) {
//  //  if (!err) {
//  //    res.json({status: 'success', message: 'läuft'}, 200);
//  //  } else {
//  //    console.log(err);
//  //    res.json({status: 'error', message: 'läuft nicht'}, 500);
//  //  }
//  //}).pipe(res);
//
//
//
//  //
//  //
//  //if (system.args.length < 3 || system.args.length > 5) {
//  //  console.log('Usage: rasterize.js URL filename [paperwidth*paperheight|paperformat] [zoom]');
//  //  console.log('  paper (pdf output) examples: "5in*7.5in", "10cm*20cm", "A4", "Letter"');
//  //  console.log('  image (png/jpg output) examples: "1920px" entire page, window width 1920px');
//  //  console.log('                                   "800px*600px" window, clipped to 800x600');
//  //  phantom.exit(1);
//  //} else {
//  //  address = system.args[1];
//  //  output = system.args[2];
//  //  page.viewportSize = { width: 600, height: 600 };
//  //  if (system.args.length > 3 && system.args[2].substr(-4) === ".pdf") {
//  //    size = system.args[3].split('*');
//  //    page.paperSize = size.length === 2 ? { width: size[0], height: size[1], margin: '0px' }
//  //      : { format: system.args[3], orientation: 'portrait', margin: '1cm' };
//  //  } else if (system.args.length > 3 && system.args[3].substr(-2) === "px") {
//  //    size = system.args[3].split('*');
//  //    if (size.length === 2) {
//  //      pageWidth = parseInt(size[0], 10);
//  //      pageHeight = parseInt(size[1], 10);
//  //      page.viewportSize = { width: pageWidth, height: pageHeight };
//  //      page.clipRect = { top: 0, left: 0, width: pageWidth, height: pageHeight };
//  //    } else {
//  //      console.log("size:", system.args[3]);
//  //      pageWidth = parseInt(system.args[3], 10);
//  //      pageHeight = parseInt(pageWidth * 3/4, 10); // it's as good an assumption as any
//  //      console.log ("pageHeight:",pageHeight);
//  //      page.viewportSize = { width: pageWidth, height: pageHeight };
//  //    }
//  //  }
//  //  if (system.args.length > 4) {
//  //    page.zoomFactor = system.args[4];
//  //  }
//  //  page.open(address, function (status) {
//  //    if (status !== 'success') {
//  //      console.log('Unable to load the address!');
//  //      phantom.exit(1);
//  //    } else {
//  //      window.setTimeout(function () {
//  //        page.render(output);
//  //        phantom.exit();
//  //      }, 200);
//  //    }
//  //  });
//  //}
//  //
//
//
//
//
//
//  //
//  //var dummyContent = req.headers.referer;
//  //var htmlFileName = "page.html", pdfFileName = "page.pdf";
//  //
//  //// Save to HTML file
//  //fs.writeFile(htmlFileName, dummyContent, function(err) {
//  //  if(err) { throw err; }
//  //  util.log("file saved to site.html");
//  //});
//  //
//  //// Convert HTML to PDF with wkhtmltopdf (http://code.google.com/p/wkhtmltopdf/)
//  //var child = exec("wkhtmltopdf " + htmlFileName + " " + pdfFileName, function(err, stdout, stderr) {
//  //  if(err) { throw err; }
//  //  util.log(stderr);
//  //});
//  //
//  //response.writeHead(200, {'Content-Type' : 'text/plain'});
//  //response.end('Rendered to ' + htmlFileName + ' and ' + pdfFileName + '\n');
//  //
//
//
//
//
//
//
//
//
//
//
//
//  // URL
//  //wkhtmltopdf('http://google.com/', { pageSize: 'a4' })
//  //  .pipe(fs.createWriteStream('out.pdf'));
//  //console.log(req.headers.referer);
//  //var urlForPDF = req.headers.referer;
//  //wkhtmltopdf(urlForPDF, { output: 'out.pdf'}, function (err) {
//  //  if (!err) {
//  //    res.json({status: 'success', message: 'läuft'}, 200);
//  //  } else {
//  //    res.json({status: 'error', message: 'läuft nicht'}, 500);
//  //  }
//  //}).pipe(res);
//// HTML
////  wkhtmltopdf('<h1>Test</h1><p>Hello world</p>')
////    .pipe(res);
//
////// output to a file directly
////  wkhtmltopdf('http://apple.com/', { output: 'out.pdf' });
////
////// Optional callback
////  wkhtmltopdf('http://google.com/', { pageSize: 'letter' }, function (code, signal) {
////  });
////  wkhtmltopdf('http://google.com/', function (code, signal) {
////  });
//
//
//};
//
