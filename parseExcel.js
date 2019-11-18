const xlsx = require('node-xlsx').default;

function parseExcel (fileName, keys) {
  const workSheetsFromFile = xlsx.parse(`${__dirname}/${fileName}`);
  const data = workSheetsFromFile[0]['data'];
  const head = data.shift().join(',').split(',').map(h => h.trim());
  return data.map( one => {
    const itemValue = {};
    head.forEach((item, index) => {
      if (keys.length && keys.indexOf(item) > -1) {
        itemValue[item] = one[index];
      } else {
        itemValue[item] = one[index]
      }
    })
    itemValue['time'] = Date.now();
    return itemValue;
  })
}

const excelHead = ['编号', '问题', '参考答案'];
const fileName = "test.xlsx"
const data = parseExcel(fileName, excelHead);

console.log(mockData.reduce((str, item) => {
  const string = Object.keys(item).map(k => {
    return `${k}: ${item[k]}`;
  }).join('\n')
  return str+= `\n----------------------------\n${string}`
}, ''));

