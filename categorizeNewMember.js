function openOrSenior(data){
  let dataNew=[];
  let i=0;
  while(i<data.length){
    data[i][0]>=55 && data[i][1]>7 ?  dataNew.push('Senior'): dataNew.push('Open');
    i++;
  }
  return dataNew;
}