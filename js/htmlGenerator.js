const htmlGenerator = {
    generateTableError :(methodName)=>{
        const body = document.body
        const table = document.getElementById('table'+methodName)
        if(table)
        {
            table.innerHTML='';
            table.setAttribute('id','tableError'+methodName)
            const theadName = document.createElement('thead')
            const theadKeys = document.createElement('thead')
            const tbody = document.createElement('tbody')
            theadName.innerHTML = ` 
            <tr>
                <th colspan="3">Méthode : ${methodName}</th>
            </tr>`
            theadKeys.innerHTML = `
            <tr>
                <th>URL à tester</th>
                <th>Expected Error</th>
                <th>Result Error</th>
            </tr>
            `
            tbody.setAttribute('id',methodName)
            table.appendChild(theadName)
            table.appendChild(theadKeys)
            table.appendChild(tbody)
            body.appendChild(table)
        }

        
    },
    generateBodyError : (bodyElementId, url, expectedError, error)=>{
        const bodyElement = document.getElementById(bodyElementId)
        const newElementTr =  document.createElement('tr');
        const newElementTdUrl = document.createElement('td')
        newElementTdUrl.appendChild(document.createTextNode(url))
        newElementTr.appendChild(newElementTdUrl)

        const newElementTdExpected = document.createElement('td')
        newElementTdExpected.appendChild(document.createTextNode(expectedError))
        newElementTr.appendChild(newElementTdExpected)

        const newElementTdResult = document.createElement('td')
        newElementTdResult.appendChild(document.createTextNode(error))
        if(error !== expectedError){
            newElementTdResult.style.color = 'red'
        }else{
            newElementTdResult.style.color= 'green'
        }
        newElementTr.appendChild(newElementTdResult)
            
        bodyElement.appendChild(newElementTr)
    },
    generateTable : (methodName)=>{
        const body = document.body
        const table = document.createElement('table')
        const theadName = document.createElement('thead')
        const theadKeys = document.createElement('thead')
        const tbody = document.createElement('tbody')
        theadName.innerHTML = ` 
        <tr>
            <th colspan="9">Méthode : ${methodName}</th>
        </tr>`
        theadKeys.innerHTML = `
        <tr>
            <th>URL à tester</th>
            <th>Expected Link Ok</th>
            <th>Result Link Ok</th>
            <th>Expected Link Non ok</th>
            <th>Result Link Non ok</th>
            <th>Expected Link Unknown</th>
            <th>Result Link Unknown</th>
        </tr>
        `
        tbody.setAttribute('id',methodName)
        table.setAttribute('id','table'+methodName)
        table.appendChild(theadName)
        table.appendChild(theadKeys)
        table.appendChild(tbody)
        body.appendChild(table)
    },
    generateBodyResult : (bodyElementId, url, expectedResult, result)=>{
        const bodyElement = document.getElementById(bodyElementId)
        const newElementTr =  document.createElement('tr');
        const newElementTdUrl = document.createElement('td')
        newElementTdUrl.appendChild(document.createTextNode(url))
        newElementTr.appendChild(newElementTdUrl)
        for (const [value] of Object.entries(result)) {
            const expectedValue = expectedResult[value]
            const resultValue = result[value]
            const newElementTdExpected = document.createElement('td')
            newElementTdExpected.appendChild(document.createTextNode(expectedValue))
            newElementTr.appendChild(newElementTdExpected)

            const newElementTdResult = document.createElement('td')
            newElementTdResult.appendChild(document.createTextNode(resultValue))
            if(expectedValue !== resultValue){
                newElementTdResult.style.color = 'red'
            }else{
                newElementTdResult.style.color= 'green'
            }
            newElementTr.appendChild(newElementTdResult)
            
        }
        bodyElement.appendChild(newElementTr)
    }
}