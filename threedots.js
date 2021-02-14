const ages =[1, 58, 57, 35, 48];
const ages2 = [15, 78, 32, 76];
const ages3 = [50, 74, 25, 66];

const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages];
//console.log(allAges2);
const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisa = [650, 450, 250, 850];
// const maximun = Math.max(business, minister, sochib);
const maximun = Math.max(...takaPoisa);
 console.log(maximun);