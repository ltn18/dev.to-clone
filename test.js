/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  var TCASEPOSITION = [];
  var res = 0;
  var TEST = [];
  // Pre-sets
  if (points.length == 1 || points.length == 2){return points.length};
  for (let i = 0; i < points.length - 1; i++){
    for (let j = i+1; j < points.length; j++){
      var temp = 0;
      // Solve equal x's
      if (points[i][0] == points[j][0]){
        var test = 0;
        for (let k = 0; k < points.length; k++){
          if (points[k][0] == points[i][0]){
            test++;
            TEST.push(points[k][0]);
          }
        }
        if (test == 25){console.log("000",TEST); console.log(TEST.length);} else {TEST.splice(0, TEST.length)};
        if (test > temp){temp = test};
      } else {
        // y = ax + b
        var a = (points[j][1] - points[i][1]) / (points[j][0] - points[i][0]); 
        var b = points[i][1] - points[i][0]*a;
        var test = 0;
        for (let k = 0; k < points.length; k++){
          // Solve equal check approaches 0
          var check = points[k][1] - points[k][0]*a - b;
          if (Math.abs(Math.trunc(check)) == 0){test++; 
            TEST.push(k);
          };
        }
        if (test > temp){temp = test};
      }
      // console.log("AAA", TEST.length, TEST); 
      if (test == 25 && TEST.length == 25){TCASEPOSITION = Object.assign([],TEST)} else {TEST.splice(0, TEST.length)};
      if (temp > res){res = temp};
    }
  }
  return TCASEPOSITION;
};


var arr = [[560,248],[0,16],[30,250],[950,187],[630,277],[950,187],[-212,-268],[-287,-222],[53,37],[-280,-100],[-1,-14],[-5,4],[-35,-387],[-95,11],[-70,-13],[-700,-274],[-95,11],[-2,-33],[3,62],[-4,-47],[106,98],[-7,-65],[-8,-71],[-8,-147],[5,5],[-5,-90],[-420,-158],[-420,-158],[-350,-129],[-475,-53],[-4,-47],[-380,-37],[0,-24],[35,299],[-8,-71],[-2,-6],[8,25],[6,13],[-106,-146],[53,37],[-7,-128],[-5,-1],[-318,-390],[-15,-191],[-665,-85],[318,342],[7,138],[-570,-69],[-9,-4],[0,-9],[1,-7],[-51,23],[4,1],[-7,5],[-280,-100],[700,306],[0,-23],[-7,-4],[-246,-184],[350,161],[-424,-512],[35,299],[0,-24],[-140,-42],[-760,-101],[-9,-9],[140,74],[-285,-21],[-350,-129],[-6,9],[-630,-245],[700,306],[1,-17],[0,16],[-70,-13],[1,24],[-328,-260],[-34,26],[7,-5],[-371,-451],[-570,-69],[0,27],[-7,-65],[-9,-166],[-475,-53],[-68,20],[210,103],[700,306],[7,-6],[-3,-52],[-106,-146],[560,248],[10,6],[6,119],[0,2],[-41,6],[7,19],[30,250]]
var TCASE = maxPoints(arr).map(item => arr[item]);
//console.log(TCASE);

var slope = function(pointONE, pointTWO){
  return (pointTWO[1] - pointONE[1]) / (pointTWO[0] - pointONE[0]);
}

var a = 0;
var b = 1;
var n = 5;
var T1 = TCASE[a];
var T2 = TCASE[b];
var T3 = TCASE[a+n];
var T4 = TCASE[b+n];
var TT = Math.abs(Math.trunc(slope(T1, T2) - slope(T3, T4)));

console.log(TT);


