
const linkChecker = {
    testLink : async (baseUrl, callBackDisplayResult,callbackError) => {
        const result = {
            'ok' : 0,
            'ko' : 0,
            'unknown' : 0
        }
        //On récupère le contenu html de la page
        linkChecker.getContentUrl(baseUrl,(htmlContent)=>{
            //On récupère les urls du contenu html
            const urlsToCheck = linkChecker.extractUrlFromHtml(htmlContent,baseUrl)
            //Nombres de liens à checker
            const nbUrlsToCheck = urlsToCheck.length
            //Nombre de liens déjà checké
            let urlChecked = 0
            //Test de chaques liens
            urlsToCheck.forEach(urlToCheck=>{
                console.log(urlToCheck)
                //Lien testé
                urlChecked++
                //Si on a testé tous les liens on peut afficher les résultats
                if(urlChecked===nbUrlsToCheck){
                    callBackDisplayResult(result)
                }  
            })
        })
       
    },
    getContentUrl:  async (url,callback)=>{
        //Appel Ajax
        fetch(url)
        .then((response)=>{
            //réponse HTTP
            return response.text()
        })
        .then(contentHtml=>{
            //Contenu de la réponse HTTP
            callback(contentHtml)
        }).catch((e)=>{
            //erreur
        })
    },
    extractUrlFromHtml: (htmlCode,baseUrl)=>{
        const regex = "(src|href)\\s*=\\s*[\"']([^\"']*)[\"']";
        return [...htmlCode.matchAll(regex)].map((urlMatches)=>{
            return new URL(urlMatches[2], baseUrl)
        })
    },
} 