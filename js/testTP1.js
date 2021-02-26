
window.onload= () => {
    testLinks();
    testExempleCours();
    testUrlMalFormee();
    testNonHttpUrl();
    testErreursHttp();
}
const testLinks = () => {
    const expectedResult = {
        'http://httpbin.org/links/3/0' : {
            'ok' : 2,
            'ko' : 0,
            'unknown' : 0
        },
        'http://httpbin.org/links/5/0' : {
            'ok' : 4,
            'ko' : 0,
            'unknown' : 0
        },
        'http://httpbin.org/links/8/0' : {
            'ok' : 7,
            'ko' : 0,
            'unknown' : 0
        },
    }
    assert('testLinks',expectedResult)

}
const testExempleCours = () => {
    const expectedResult = {
        'https://raw.githubusercontent.com/AdamAffou/TP_apiweb_JS/main/exempleCours.html' : {
            'ok' : 2,
            'ko' : 4,
            'unknown' : 2
        }
    }

 assert('ExempleCours',expectedResult)

}
const testUrlMalFormee = () => {
    const expectedResult = {
        '!' : new Error("Url Mal Formée")
    }
 assert('urlMalFormee',expectedResult)

}

const testNonHttpUrl = () => {
    const expectedResult = {
        'ftp://ftp.upload.debian.org' : new Error("Url Mal Formée")
    }
 assert('NonHttpUrl',expectedResult)

}

const testErreursHttp = () => {
    const expectedResult = {
        'http://httpbin.org/status/403' : new Error("erreur HTTP 403"),
        'http://httpbin.org/status/404' : new Error("erreur HTTP 404"),
        'http://httpbin.org/status/500' : new Error("erreur HTTP 500")
    }
 assert('ErreursHttp',expectedResult)
}

const assert = (name, expectedResult)=>{
    htmlGenerator.generateTable(name)
    Object.keys(expectedResult).forEach((url)=>{
        linkChecker.testLink(url, 
        (result)=>{
            htmlGenerator.generateBodyResult(name, url, expectedResult[url], result)
        },(error)=>{
            htmlGenerator.generateTableError(name)
            htmlGenerator.generateBodyError(name,url,expectedResult[url].message, error.message)
        })
    })
}