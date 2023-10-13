type element = HTMLElement;
type input = HTMLInputElement;
type button = HTMLButtonElement;


//for selection
const table = document.querySelector('table') as element;
const currency = document.getElementById('currency') as input;
const count = document.getElementById('count') as input;
const givenAmount = document.getElementById('gamount') as input;
const totalAmount = document.getElementById('tamount') as input;
const addButton = document.querySelector('#add')! as element;
const calculateButton = document.querySelector('#calculate')! as button;
const maindiv = document.querySelector('div') as element;

let tableObj: {
    [key: string]: {
        id: string,
        currencyValue: number,
        countValue: number,
        total: number,
        requirenote?: number
    }
} = {}

let sr: number = 0 //fo runique id

//display Rows on Table
const displayRow = (id: string, currency: number, count: number, total: number) => {

    const tr = document.createElement('tr') as element
    const th = document.createElement('th') as element
    th.textContent = `${id}`;
    tr.append(th);
    let arr = [currency, count, total];
    for (let i of arr) {
        const td = document.createElement('td')! as element;
        td.textContent = i.toString();
        tr.append(td);
    }
    tr.setAttribute('id', id)
    table.append(tr);
    console.log(id)

}


//Add buttton onClick operation
const addButtonHandler = () => {
    console.log('hello')
    let total: number;
    let currencyValue: number = +(currency.value);
    let countValue: number = +(count.value);

    if (currency.value.length != 0 && count.value.length != 0) {
        total = currencyValue * countValue;
        sr++;

        tableObj[`${sr}`] = {
            id: `${sr}`,
            currencyValue: +`${currencyValue}`,
            countValue: +`${countValue}`,
            total: +`${total}`

        }
        console.log(tableObj)
        //for display values on table
        displayRow(tableObj[`${sr}`]['id'],
            tableObj[`${sr}`]['currencyValue'],
            tableObj[`${sr}`]['countValue'],
            tableObj[`${sr}`]['total']);


    }
    else {
        alert('please Enter the currency and count!')
    }
}
//update operation
const modifieContent = (id: string, total: number, count: number) => {
    if (count === 0) {
        alert('notes are not available!')
    }
    else {
        let ncount = document.getElementById(id)?.children[2]! as any
        let ntotal = document.getElementById(id)?.children[3]! as any
        ncount.textContent = count
        ntotal.textContent = total
    }
    // table.querySelectorAll('tr')[id].children[2].textContent = count
    // table.querySelectorAll('tr')[id].children[3].textContent = total
}


//Calcute amount operation
const displaycalculation = (calcValue: number) => {
    let temArr: any = [];

    for (let i in tableObj) {
        if (+(tableObj[i]['currencyValue']) <= calcValue) {

            let tempObject: { [key: string]: {} } = {}//for storing id,cumOfNotes for getting min notes from all summ
            let sumOfNote: number = 0 //getting total of all notes
            let tamount: number = 0  //get total of all currency

            let currencyValue = +(tableObj[i]['currencyValue']);
            let requirenote = +(tableObj[i]['requirenote']!);
            let total = requirenote * currencyValue;

            if (total == calcValue) {

                const creatdiv = document.createElement('div');
                // creatdiv.textContent = `${currencyValue} x ${requirenote} = ${total}`;
                // maindiv.append(creatdiv);
                tempObject[tableObj[i]['id']] = requirenote

                sumOfNote += requirenote;
                tamount += total
            }
            else {

                const creatdiv2 = document.createElement('div');
                // creatdiv2.textContent = `${currencyValue} x ${requirenote} = ${total}`;
                tempObject[tableObj[i]['id']] = requirenote

                sumOfNote += requirenote
                tamount += total
                let temp = calcValue - total;

                let div, mul;
                for (let j in tableObj) {

                    if (temp < calcValue && temp >= +(tableObj[j]['currencyValue'])) {

                        div = +(temp / +(tableObj[j]['currencyValue']))
                        mul = div * +(tableObj[j]['currencyValue'])
                        temp = temp - mul;
                        // creatdiv2.textContent += `+ ${parseInt(tableObj[j]['currencyValue'])} x ${div} = ${mul}`;
                        tempObject[tableObj[j]['id']] = div

                        sumOfNote += div
                        tamount += mul

                    }
                    // maindiv.append(creatdiv2)

                }

            }
            console.log(tamount)

            if (tamount == calcValue) {
                tempObject.sumOfNote = sumOfNote
                temArr.push(tempObject)
            }
            console.log(temArr)
            console.log('tempObject')
            console.log(tempObject)
        }

    }

    let getsum = [];

    for (let i of temArr) {
        for (let j in i) {
            if (j == 'sumOfNote') {
                getsum.push(i[j])
            }
        }
    }
    console.log(getsum)

    //find the least number of notes  
    let getValue = getsum.sort((a, b) => a - b)[0];

    for (let i of temArr) {
        for (let j in i) {
            if (i['sumOfNote'] == getValue) {
                console.log('----')
                console.log(i);
                const creatdiv2 = document.createElement('div');
                let c = 0;
                for (let k in i) {
                    if (k != 'sumOfNote') {
                        for (let r in tableObj) {
                            let id, tvalue, cvalue;
                            console.log('****')
                            if (k == r) {
                                id = tableObj[r]['id'];
                                console.log(+(i[j] * tableObj[r]['currencyValue'])
                                )
                                console.log(parseInt(i[k]))
                                tvalue = +(tableObj[r]['total']) - +(i[k] * tableObj[r]['currencyValue'])
                                cvalue = +(tableObj[r]['countValue']) - parseInt(i[k])
                                tableObj[r]['total'] = tvalue;
                                tableObj[r]['countValue'] = cvalue

                                console.log(`>>>`);
                                c += +(i[k] * tableObj[r]['currencyValue'])
                                console.log(+(i[k] * tableObj[r]['currencyValue']))
                                creatdiv2.textContent += ` ${+(tableObj[r]['currencyValue'])} x ${(parseInt(i[k]))} = 
                                ${(+(i[k] * tableObj[r]['currencyValue']))}`;

                                if (c == calcValue) {
                                    creatdiv2.textContent += `= ${calcValue}`
                                }
                                else {
                                    creatdiv2.textContent += `+`
                                }
                                //for modification
                                modifieContent(id, tvalue, cvalue)
                                maindiv.append(creatdiv2)
                                console.log(tableObj[r])
                            }
                        }
                    }
                }
            }
            break
        }
    }



}

const calculateButtonHandler = () => {

    let givenAmountValue: number = +(givenAmount.value);
    let totalAmountValue: number = +(totalAmount.value);

    let calcValue: number = givenAmountValue - totalAmountValue;


    if (givenAmountValue > totalAmountValue) {
        // let i: keyof typeof tableObj;
        for (let i in tableObj) {
            let currencyValue = +(tableObj[i]['currencyValue']);
            let currencyCount = +(tableObj[i]['countValue']);

            if (currencyValue <= calcValue) {
                let tcount;
                tcount = calcValue / currencyValue;
                console.log(tcount)
                if (tcount == 1) {
                    tcount = 1

                }
                if (tcount >= currencyCount) {
                    tcount = currencyCount
                }


                tableObj[i].requirenote = tcount
            }

        }
        console.log(tableObj)

        displaycalculation(calcValue)
    }

}


addButton.addEventListener('click', addButtonHandler)
calculateButton.addEventListener('click', calculateButtonHandler)