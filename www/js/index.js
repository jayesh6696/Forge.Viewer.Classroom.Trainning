/*

The MIT License (MIT)

Copyright (c) Thu Aug 18 2016 Zhong Wu zhong.wu@autodesk.com

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORTOR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

$(document).ready( function(){
    var getToken =  () => {
        var xhr = new XMLHttpRequest();

        xhr.open("GET", '/api/token', false);
        xhr.send(null);
        var response = JSON.parse(xhr.responseText);
        return response.access_token;
    }
    
    
    var viewerApp;
    
    var options = {
        env: 'AutodeskProduction',
        'getAccessToken': getToken,
        'refreshToken': getToken
    };
    
    var documentId = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWwyMDE2LTA2LTIxLTIxLTIwLTEzLW5nbnp0YmllbnJudmNocHRoZ3FyZXN6c2F6YTgvR2F0ZUhvdXNlLm53ZA==';
    var config3d = {
        extensions: ['MyExtension']
    };

    Autodesk.Viewing.Initializer(options, ()=>{
        viewerApp = new Autodesk.A360ViewingApplication('viewer');
        viewerApp.registerViewer(viewerApp.k3D, Autodesk.Viewing.Private.GuiViewer3D, config3d);
        viewerApp.loadDocumentWithItemAndObject(documentId);
    });
});