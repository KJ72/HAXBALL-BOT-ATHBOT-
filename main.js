// Stats: "Auth" : '["0-Games", "1-Wins", "2-Draws", "3-Losses", "4-Winrate", "5-Goals", "6-Assists", "7-GK", "8-CS", "9-CS%", "10- ELO", "11-Role", "12-Nick"]'

/* VARIABLES */

/* ROOM */

const Bot = "----- RAMESH ----- "; // Bot's name

// GLOBAL VARIABLES //
const roomName = "[HAXNINDIA] FUTSAL 4V4";
const botName = "------ RAMESH ------";
const maxPlayers = 50;
const roomPublic = false;

// GEOLOCALIZATION //
const geo = [{"code": "PE", "lat": -12.1, "lon": -76.9}];

// Admin password //
var adminPassword = 559055;

const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[0] });

// GAME SETTINGS //
const scoreLimitClassic = 3;
const scoreLimitBig = 3;
const timeLimitClassic = 3;
const timeLimitBig = 3;

room.setTeamsLock(true);


var player_size = 25;


/* STADIUM */

const playerRadius = 15;
const ballRadius = 6.25;
const triggerDistance = playerRadius + ballRadius + 0.01;
const aloneMap = '{"name":"Futsal No Goals from HaxMaps","width":420,"height":200,"spawnDistance":180,"bg":{"type":"hockey","width":368,"height":171,"kickOffRadius":65,"cornerRadius":0},"vertexes":[{"x":-368,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1,"_selected":"segment"},{"x":-368,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1,"_selected":"segment"},{"x":-368,"y":-171,"trait":"ballArea","bCoef":1,"cMask":["ball"]},{"x":368,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":65,"trait":"kickOffBarrier"},{"x":0,"y":-65,"trait":"line"},{"bCoef":1,"trait":"ballArea","x":368,"y":171},{"bCoef":1,"trait":"ballArea","x":368,"y":-171},{"bCoef":0,"trait":"line","x":0,"y":171},{"bCoef":0,"trait":"line","x":0,"y":-171},{"x":0,"y":65,"trait":"kickOffBarrier"},{"x":0,"y":-65,"trait":"kickOffBarrier"},{"x":377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":199,"trait":"kickOffBarrier"},{"x":0,"y":65,"trait":"kickOffBarrier"},{"x":0,"y":-65,"trait":"kickOffBarrier"},{"x":0,"y":-199,"trait":"kickOffBarrier"},{"x":-368.53340356886,"y":-62.053454903872,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-400.05760771891,"y":-62.053454903872,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-400.05760771891,"y":64.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368.53340356886,"y":64.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.09926357786,"y":63.94882446641,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":400,"y":64,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":400,"y":-61.927767991658,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.9681846993,"y":-62.144998272018,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":-260.90035258157,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":-90},{"x":-358.5379338963,"y":-171,"bCoef":0.1,"trait":"line","curve":-90},{"x":-368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":-260.90035258157,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":90},{"x":-358.5379338963,"y":171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":-90},{"x":358.36266315432,"y":171,"bCoef":0.1,"trait":"line","curve":-90},{"x":368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":90},{"x":358.36266315432,"y":-171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-250.86909422732,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":-160.58776903904,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-160.58776903904,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":181.05031927829,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":181.05031927829,"bCoef":0.1,"trait":"line"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":8,"v1":9,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":1,"v1":0,"cMask":["ball"],"x":-368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":5,"v1":4,"cMask":["ball"],"x":368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":2,"v1":3,"cMask":["ball"],"x":-368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":6,"v1":7,"cMask":["ball"],"x":368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":0,"v1":10,"y":171},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":3,"v1":11,"y":-171},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":12,"v1":13},{"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":9,"v1":8},{"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":15,"v1":14},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":2,"v1":1,"_selected":true},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":6,"v1":5},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":16,"v1":17,"cMask":["ball"],"x":330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":18,"v1":19,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":20,"v1":21,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":22,"v1":23,"cMask":["ball"],"x":330},{"v0":24,"v1":25,"trait":"kickOffBarrier"},{"v0":26,"v1":27,"trait":"kickOffBarrier"},{"v0":28,"v1":29,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":29,"v1":30,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":30,"v1":31,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":32,"v1":33,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":33,"v1":34,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":34,"v1":35,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":36,"v1":37,"curve":94.0263701017,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":39,"v1":38,"curve":86.632306418889,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":40,"v1":41,"curve":-94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":37,"v1":41,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":43,"v1":42,"curve":-86.632306418888,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":45,"v1":44,"curve":86.632306418884,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":47,"v1":46,"curve":-86.632306418899,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":48,"v1":49,"curve":-94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":50,"v1":51,"curve":94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":52,"v1":53,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":390},{"v0":55,"v1":54,"curve":-180.00692920292,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":54,"v1":55,"curve":-180.00218240614,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":57,"v1":56,"curve":-179.64823645332,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":56,"v1":57,"curve":-180.35758668147,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":59,"v1":58,"curve":-180.02357323962,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":58,"v1":59,"curve":-180.00924102399,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":61,"v1":60,"curve":-180.06885755885,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":60,"v1":61,"curve":-180.02948353257,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":63,"v1":62,"curve":-179.99869069543,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":62,"v1":63,"curve":-179.99939258776,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":65,"v1":64,"curve":-180.08826047163,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":64,"v1":65,"curve":-179.91186753664,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":67,"v1":66,"curve":-179.99528711105,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":66,"v1":67,"curve":-179.99743836358,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":69,"v1":68,"curve":-179.98626041101,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":68,"v1":69,"curve":-179.99175181595,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":71,"v1":70,"curve":-180.04715562398,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":70,"v1":71,"curve":-179.95294709391,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":73,"v1":72,"curve":-179.95715750564,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":72,"v1":73,"curve":-179.89943871875,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":75,"v1":74,"curve":-179.94773754738,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":74,"v1":75,"curve":-179.98221351296,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":77,"v1":76,"curve":-180.4151727218,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":76,"v1":77,"curve":-179.58764458796,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":79,"v1":78,"curve":-180.00086646359,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":78,"v1":79,"curve":-180.01965986376,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":81,"v1":80,"curve":-180.03532601389,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":80,"v1":81,"curve":-179.99380079,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":83,"v1":82,"curve":-180.0044468452,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":82,"v1":83,"curve":-180.01386779847,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":85,"v1":84,"curve":-180.05158287563,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":84,"v1":85,"curve":-180.01212223878,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240},{"v0":88,"v1":89,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-120},{"v0":90,"v1":91,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":240},{"v0":92,"v1":93,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":120},{"v0":94,"v1":95,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":98,"v1":99,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":100,"v1":101,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":102,"v1":103,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":104,"v1":105,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":106,"v1":107,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":108,"v1":109,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381}],"goals":[{"p0":[-374.25,-62.053454903872],"p1":[-374.25,64.043361696331],"team":"red"},{"p0":[374.25,62],"p1":[374.25,-62],"team":"blue"}],"discs":[{"radius":3.9405255187564,"pos":[-368.53340356886,64.043361696331],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[-368.53340356886,-62.053454903872],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3.9405255187564,"pos":[368.9681846993,-62.144998272018],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[368.09926357786,63.94882446641],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3,"invMass":0,"pos":[-368,-171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-368,171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,-171],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-171,"trait":"ballArea"},{"normal":[0,-1],"dist":-171,"trait":"ballArea"},{"normal":[0,1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5,"bCoef":0},"ballPhysics":{"radius":6.25,"color":"FFCC00","bCoef":0.4,"invMass":1.5,"damping":0.99}}';
const classicMap = `{
	{

	"name" : "Winky's Futsal - Medium [ʜᴀxᴍᴏᴅs.ᴄᴏᴍ]",

	"width" : 430,

	"height" : 200,

	"bg" : { "type" : "", "color" : "454C5E", "width" : 0, "height" : 0 },

	"vertexes" : [
		/* 0 */ { "x" : 0, "y" : 200, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 1 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "a8b4bd" },
		/* 2 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "a8b4bd" },
		/* 3 */ { "x" : 0, "y" : -200, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 4 */ { "x" : -368, "y" : -65, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 2, "color" : "f08a2b" },
		/* 5 */ { "x" : -400, "y" : -65, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 0, "color" : "f08a2b" },
		/* 6 */ { "x" : -400, "y" : 65, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 0, "color" : "f08a2b" },
		/* 7 */ { "x" : -368, "y" : 65, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 2, "color" : "f08a2b" },
		/* 8 */ { "x" : 368, "y" : -65, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : -2, "color" : "e8e3e3" },
		/* 9 */ { "x" : 400, "y" : -65, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 0, "color" : "e8e3e3" },
		/* 10 */ { "x" : 400, "y" : 65, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 0, "color" : "e8e3e3" },
		/* 11 */ { "x" : 368, "y" : 65, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : -2, "color" : "e8e3e3" },
		/* 12 */ { "x" : -368, "y" : 65, "bCoef" : 1.1, "cMask" : ["ball" ], "color" : "a3acc2", "bias" : 32 },
		/* 13 */ { "x" : -368, "y" : 171.5, "bCoef" : 1.1, "cMask" : ["ball" ], "color" : "a3acc2", "bias" : 32 },
		/* 14 */ { "x" : -368, "y" : -65, "bCoef" : 1.1, "cMask" : ["ball" ], "color" : "a3acc2", "bias" : -32 },
		/* 15 */ { "x" : -368, "y" : -171.5, "bCoef" : 1.1, "cMask" : ["ball" ], "color" : "a3acc2", "bias" : -32 },
		/* 16 */ { "x" : -368, "y" : 170, "bCoef" : 1.3, "cMask" : ["ball" ], "color" : "a3acc2" },
		/* 17 */ { "x" : 368, "y" : 170, "bCoef" : 1.3, "cMask" : ["ball" ], "color" : "a3acc2" },
		/* 18 */ { "x" : 368, "y" : 65, "bCoef" : 1.1, "cMask" : ["ball" ], "color" : "a3acc2", "bias" : -32 },
		/* 19 */ { "x" : 368, "y" : 171.5, "bCoef" : 1.1, "cMask" : ["ball" ], "color" : "a3acc2", "bias" : -32 },
		/* 20 */ { "x" : 368, "y" : -171.5, "bCoef" : 1.1, "cMask" : ["ball" ], "color" : "a3acc2", "bias" : -32 },
		/* 21 */ { "x" : 368, "y" : -65, "bCoef" : 1.1, "cMask" : ["ball" ], "color" : "a3acc2", "bias" : -32 },
		/* 22 */ { "x" : -368, "y" : -170, "cMask" : ["ball" ], "color" : "a3acc2" },
		/* 23 */ { "x" : 368, "y" : -170, "cMask" : ["ball" ], "color" : "a3acc2" },
		/* 24 */ { "x" : 0, "y" : -170, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "a8b4bd" },
		/* 25 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "a8b4bd", "curve" : 0 },
		/* 26 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "a3acc2" },
		/* 27 */ { "x" : 0, "y" : 170, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "a3acc2" },
		/* 28 */ { "x" : -366.5, "y" : 122, "bCoef" : 0.1, "cMask" : [ ], "color" : "a3acc2" },
		/* 29 */ { "x" : -366.5, "y" : -122, "bCoef" : 0.1, "cMask" : [ ], "color" : "a3acc2" },
		/* 30 */ { "x" : 366.5, "y" : 122, "bCoef" : 0.1, "cMask" : [ ], "color" : "a3acc2" },
		/* 31 */ { "x" : 366.5, "y" : -122, "bCoef" : 0.1, "cMask" : [ ], "color" : "a3acc2" },
		/* 32 */ { "x" : -368, "y" : 65, "bCoef" : 0.1, "cMask" : [ ], "color" : "c4c9d4", "curve" : 0 },
		/* 33 */ { "x" : -368, "y" : -65, "bCoef" : 0.1, "cMask" : [ ], "color" : "c4c9d4", "curve" : 0 },
		/* 34 */ { "x" : 368, "y" : 65, "bCoef" : 0.1, "cMask" : [ ], "color" : "c4c9d4", "curve" : 0 },
		/* 35 */ { "x" : 368, "y" : -65, "bCoef" : 0.1, "cMask" : [ ], "color" : "c4c9d4", "curve" : 0 },
		/* 36 */ { "x" : -400, "y" : -66.5, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 0, "color" : "f08a2b" },
		/* 37 */ { "x" : -400, "y" : 66.5, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 0, "color" : "f08a2b" },
		/* 38 */ { "x" : 400, "y" : -66.5, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 0, "color" : "e8e3e3" },
		/* 39 */ { "x" : 400, "y" : 66.5, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 0, "color" : "e8e3e3" },
		
		/* 40 */ { "x" : 26, "y" : -13, "cGroup" : ["c1" ], "trait" : "none", "color" : "e8e3e3" },
		/* 41 */ { "x" : 10, "y" : 15, "cGroup" : ["c1" ], "trait" : "none", "color" : "e8e3e3" },
		
		/* 42 */ { "x" : 6, "y" : -13, "cGroup" : ["c1" ], "color" : "e8e3e3" },
		/* 43 */ { "x" : -1, "y" : 1, "cGroup" : ["c1" ], "color" : "e8e3e3" },
		
		/* 44 */ { "x" : 23, "y" : -13, "cGroup" : ["c1" ], "trait" : "none", "color" : "e8e3e3" },
		/* 45 */ { "x" : 7, "y" : 15, "cGroup" : ["c1" ], "trait" : "none", "color" : "e8e3e3" },
		
		/* 46 */ { "x" : 9, "y" : -13, "cGroup" : ["c1" ], "color" : "e8e3e3" },
		/* 47 */ { "x" : 1, "y" : 2, "cGroup" : ["c1" ], "color" : "e8e3e3" },
		/* 48 */ { "x" : -27, "y" : -13, "cGroup" : ["c1" ], "color" : "f08a2b" },
		/* 49 */ { "x" : -9, "y" : 15, "cGroup" : ["c1" ], "color" : "f08a2b" },
		/* 50 */ { "x" : -24, "y" : -13, "cGroup" : ["c1" ], "color" : "f08a2b" },
		/* 51 */ { "x" : -6, "y" : 15, "cGroup" : ["c1" ], "color" : "f08a2b" },
		
		/* 52 */ { "x" : 7, "y" : 3, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		/* 53 */ { "x" : 17, "y" : 19, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		/* 54 */ { "x" : 9, "y" : 3, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		/* 55 */ { "x" : 19, "y" : 19, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		
		/* 56 */ { "x" : -10, "y" : -13, "cGroup" : ["c1" ], "color" : "e8e3e3" },
		/* 57 */ { "x" : 8, "y" : 15, "cGroup" : ["c1" ], "color" : "e8e3e3" },
		/* 58 */ { "x" : -7, "y" : -13, "cGroup" : ["c1" ], "color" : "e8e3e3" },
		/* 59 */ { "x" : 11, "y" : 15, "cGroup" : ["c1" ], "color" : "e8e3e3" },
		
		/* 60 */ { "x" : -36, "y" : 15.8, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		/* 61 */ { "x" : 34, "y" : 15.8, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		/* 62 */ { "x" : -36, "y" : -13.8, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		/* 63 */ { "x" : 34, "y" : -13.8, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		/* 64 */ { "x" : 11, "y" : 3, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		/* 65 */ { "x" : 21, "y" : 19, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		/* 66 */ { "x" : 11, "y" : 1, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		/* 67 */ { "x" : 21, "y" : 17, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		/* 68 */ { "x" : 11, "y" : -1, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		/* 69 */ { "x" : 21, "y" : 15, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		
		/* 70 */ { "x" : 0, "y" : 78, "cGroup" : ["c1" ], "color" : "d0d5e1", "curve" : 180 },
		/* 71 */ { "x" : 0, "y" : -78, "cGroup" : ["c1" ], "color" : "d0d5e1", "curve" : 180 },
		/* 72 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "a3acc2" },
		/* 73 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "a3acc2" }

	],

	"segments" : [
		{ "v0" : 4, "v1" : 5, "color" : "f08a2b", "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 2, "y" : -65 },
		{ "v0" : 6, "v1" : 7, "color" : "f08a2b", "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 2, "y" : 65 },
		{ "v0" : 8, "v1" : 9, "color" : "e8e3e3", "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : -2, "y" : -65 },
		{ "v0" : 10, "v1" : 11, "color" : "e8e3e3", "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : -2, "y" : 65 },
		{ "v0" : 0, "v1" : 1, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 2, "v1" : 3, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 12, "v1" : 13, "color" : "a3acc2", "bCoef" : 1.1, "cMask" : ["ball" ], "bias" : 32, "x" : -368 },
		{ "v0" : 14, "v1" : 15, "color" : "a3acc2", "bCoef" : 1.1, "cMask" : ["ball" ], "bias" : -32, "x" : -368 },
		{ "v0" : 16, "v1" : 17, "color" : "a3acc2", "cMask" : ["ball" ], "y" : 170 },
		{ "v0" : 18, "v1" : 19, "color" : "a3acc2", "bCoef" : 1.1, "cMask" : ["ball" ], "bias" : -32, "x" : 368 },
		{ "v0" : 20, "v1" : 21, "color" : "a3acc2", "bCoef" : 1.1, "cMask" : ["ball" ], "bias" : -32, "x" : 368 },
		{ "v0" : 22, "v1" : 23, "color" : "a3acc2", "bCoef" : 2, "cMask" : ["ball" ], "y" : -170 },
		{ "v0" : 24, "v1" : 25, "color" : "a8b4bd", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 26, "v1" : 27, "color" : "a3acc2", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 29, "v1" : 28, "curve" : 180, "color" : "a3acc2", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 30, "v1" : 31, "curve" : 180, "color" : "a3acc2", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 33, "v1" : 32, "curve" : 0, "color" : "c4c9d4", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 35, "v1" : 34, "curve" : 0, "color" : "c4c9d4", "bCoef" : 0.1, "cMask" : [ ], "x" : 368 },
		{ "v0" : 36, "v1" : 37, "color" : "f08a2b", "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 0, "x" : -400 },
		{ "v0" : 38, "v1" : 39, "color" : "e8e3e3", "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 0 },
		
		{ "v0" : 40, "v1" : 41, "vis" : true, "color" : "e8e3e3", "cGroup" : ["c1" ], "trait" : "none" },
		
		{ "v0" : 42, "v1" : 43, "vis" : true, "color" : "e8e3e3", "cGroup" : ["c1" ] },
		
		{ "v0" : 44, "v1" : 45, "vis" : true, "color" : "e8e3e3", "cGroup" : ["c1" ], "trait" : "none" },
		
		{ "v0" : 46, "v1" : 47, "vis" : true, "color" : "e8e3e3", "cGroup" : ["c1" ] },
		{ "v0" : 48, "v1" : 49, "vis" : true, "color" : "f08a2b", "cGroup" : ["c1" ] },
		{ "v0" : 50, "v1" : 51, "vis" : true, "color" : "f08a2b", "cGroup" : ["c1" ] },
		
		{ "v0" : 52, "v1" : 53, "curve" : 0, "vis" : true, "color" : "454C5E", "cGroup" : ["c1" ], "trait" : "none", "x" : 20, "y" : 29 },
		{ "v0" : 54, "v1" : 55, "curve" : 0, "vis" : true, "color" : "454C5E", "cGroup" : ["c1" ], "trait" : "none", "x" : 20, "y" : 29 },
		
		{ "v0" : 56, "v1" : 57, "vis" : true, "color" : "e8e3e3", "cGroup" : ["c1" ] },
		{ "v0" : 58, "v1" : 59, "vis" : true, "color" : "e8e3e3", "cGroup" : ["c1" ] },
		
		{ "v0" : 60, "v1" : 61, "curve" : 0, "vis" : true, "color" : "454C5E", "cGroup" : ["c1" ], "trait" : "none", "x" : 20, "y" : 28.8 },
		{ "v0" : 62, "v1" : 63, "curve" : 0, "vis" : true, "color" : "454C5E", "cGroup" : ["c1" ], "trait" : "none", "x" : 20, "y" : -0.8 },
		{ "v0" : 64, "v1" : 65, "curve" : 0, "vis" : true, "color" : "454C5E", "cGroup" : ["c1" ], "trait" : "none", "x" : 20, "y" : 29 },
		{ "v0" : 66, "v1" : 67, "curve" : 0, "vis" : true, "color" : "454C5E", "cGroup" : ["c1" ], "trait" : "none", "x" : 20, "y" : 29 },
		{ "v0" : 68, "v1" : 69, "curve" : 0, "vis" : true, "color" : "454C5E", "cGroup" : ["c1" ], "trait" : "none", "x" : 20, "y" : 29 },
		
		{ "v0" : 70, "v1" : 71, "curve" : 180, "vis" : true, "color" : "d0d5e1", "cGroup" : ["c1" ] },
		{ "v0" : 71, "v1" : 70, "curve" : 180, "vis" : true, "color" : "f5b070", "cGroup" : ["c1" ] },
		{ "v0" : 72, "v1" : 73, "curve" : 180, "color" : "a3acc2", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "curveF" : 6.1232339957368e-17 },
		{ "v0" : 73, "v1" : 72, "curve" : 180, "color" : "f08a2b", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "curveF" : 6.1232339957368e-17 }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -170, "bCoef" : 1.1, "cMask" : ["ball" ] },
		{ "normal" : [0,-1 ], "dist" : -170, "bCoef" : 1.1, "cMask" : ["ball" ] },
		{ "normal" : [0,1 ], "dist" : -200, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -200, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -430, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -430, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -400, "bCoef" : 0.1, "cMask" : ["ball" ] },
		{ "normal" : [-1,0 ], "dist" : -400, "bCoef" : 0.1, "cMask" : ["ball" ] }

	],

	"goals" : [
		{ "p0" : [368,65 ], "p1" : [368,-65 ], "team" : "blue", "color" : "c4c9d4" },
		{ "p0" : [-368,-65 ], "p1" : [-368,65 ], "team" : "red", "color" : "c4c9d4" }

	],

	"discs" : [
		{ "radius" : 4.5, "invMass" : 0, "pos" : [-368,65 ], "color" : "f08a2b" },
		{ "radius" : 4.5, "invMass" : 0, "pos" : [-368,-65 ], "color" : "f08a2b" },
		{ "radius" : 4.5, "invMass" : 0, "pos" : [368,65 ], "color" : "e8e3e3" },
		{ "radius" : 4.5, "invMass" : 0, "pos" : [368,-65 ], "color" : "e8e3e3" }

	],

	"playerPhysics" : {
		"bCoef" : 0.35,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 4.65

	},

	"ballPhysics" : {
		"radius" : 6.5,
		"bCoef" : 0.465,
		"invMass" : 1.4,
		"color" : "f0bb28"

	},

	"spawnDistance" : 180,

	"traits" : [
		

	],

	"joints" : [
		

	],

	"redSpawnPoints" : [
		

	],

	"blueSpawnPoints" : [
		

	],

	"canBeStored" : true
}
}`;
const bigMap = `{

{

	"name" : "Winky's Futsal - Big [ʜᴀxᴍᴏᴅs.ᴄᴏᴍ]",

	"width" : 620,

	"height" : 270,

	"bg" : { "type" : "", "color" : "454C5E", "width" : 0, "height" : 0 },

	"vertexes" : [
		/* 0 */ { "x" : 550, "y" : -240, "cMask" : ["ball" ] },
		/* 1 */ { "x" : 0, "y" : 270, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 2 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 2, "color" : "f08a2b" },
		/* 3 */ { "x" : -590, "y" : -80, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 0, "color" : "f08a2b" },
		/* 4 */ { "x" : -590, "y" : 80, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 0, "color" : "f08a2b" },
		/* 5 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 2, "color" : "f08a2b" },
		/* 6 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : -2, "color" : "e8e3e3" },
		/* 7 */ { "x" : 590, "y" : -80, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 0, "color" : "e8e3e3" },
		/* 8 */ { "x" : 590, "y" : 80, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 0, "color" : "e8e3e3" },
		/* 9 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : -2, "color" : "e8e3e3" },
		/* 10 */ { "x" : -550, "y" : 80, "bCoef" : 1.1, "cMask" : ["ball" ], "color" : "a3acc2", "bias" : 40 },
		/* 11 */ { "x" : -550, "y" : 240, "bCoef" : 1.1, "cMask" : ["ball" ], "color" : "a3acc2", "bias" : 40 },
		/* 12 */ { "x" : -550, "y" : -80, "bCoef" : 1.1, "cMask" : ["ball" ], "color" : "a3acc2", "bias" : -40 },
		/* 13 */ { "x" : -550, "y" : -240, "bCoef" : 1.1, "cMask" : ["ball" ], "color" : "a3acc2", "bias" : -40 },
		/* 14 */ { "x" : -551.5, "y" : 240, "cMask" : ["ball" ], "color" : "a3acc2" },
		/* 15 */ { "x" : 551.5, "y" : 240, "cMask" : ["ball" ], "color" : "a3acc2" },
		/* 16 */ { "x" : 550, "y" : 80, "bCoef" : 1.1, "cMask" : ["ball" ], "color" : "a3acc2", "bias" : -40 },
		/* 17 */ { "x" : 550, "y" : 240, "bCoef" : 1.1, "cMask" : ["ball" ], "color" : "a3acc2", "bias" : -40 },
		/* 18 */ { "x" : 550, "y" : -240, "bCoef" : 1.1, "cMask" : ["ball" ], "color" : "a3acc2", "bias" : -40 },
		/* 19 */ { "x" : 550, "y" : -80, "bCoef" : 1.1, "cMask" : ["ball" ], "color" : "a3acc2", "bias" : -40 },
		/* 20 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 21 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ] },
		/* 22 */ { "x" : -551.5, "y" : -240, "cMask" : ["ball" ], "color" : "a3acc2" },
		/* 23 */ { "x" : 551.5, "y" : -240, "cMask" : ["ball" ], "color" : "a3acc2" },
		/* 24 */ { "x" : 0, "y" : -240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "a3acc2" },
		/* 25 */ { "x" : 0, "y" : -81.4, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "a3acc2" },
		/* 26 */ { "x" : 0, "y" : 81.4, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "a3acc2" },
		/* 27 */ { "x" : 0, "y" : 240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "a3acc2" },
		/* 28 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "cMask" : ["ball" ] },
		/* 29 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "cMask" : ["ball" ] },
		/* 30 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "cMask" : [ ], "color" : "c4c9d4" },
		/* 31 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "cMask" : [ ], "color" : "c4c9d4" },
		/* 32 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "cMask" : [ ], "color" : "c4c9d4" },
		/* 33 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "cMask" : [ ], "color" : "c4c9d4" },
		/* 34 */ { "x" : -548.5, "y" : 160, "bCoef" : 0.1, "cMask" : [ ], "color" : "a3acc2" },
		/* 35 */ { "x" : -548.5, "y" : -160, "bCoef" : 0.1, "cMask" : [ ], "color" : "a3acc2" },
		/* 36 */ { "x" : 548.5, "y" : 160, "bCoef" : 0.1, "cMask" : [ ], "color" : "a3acc2" },
		/* 37 */ { "x" : 548.5, "y" : -160, "bCoef" : 0.1, "cMask" : [ ], "color" : "a3acc2" },
		/* 38 */ { "x" : -590, "y" : -81.5, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 0, "color" : "f08a2b" },
		/* 39 */ { "x" : -590, "y" : 81.5, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 0, "color" : "f08a2b" },
		/* 40 */ { "x" : 590, "y" : -81.5, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 0, "color" : "e8e3e3" },
		/* 41 */ { "x" : 590, "y" : 81.5, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 0, "color" : "e8e3e3" },
		
		/* 42 */ { "x" : 26, "y" : -13, "cGroup" : ["c1" ], "trait" : "none", "color" : "e8e3e3" },
		/* 43 */ { "x" : 10, "y" : 15, "cGroup" : ["c1" ], "trait" : "none", "color" : "e8e3e3" },
		
		/* 44 */ { "x" : 6, "y" : -13, "cGroup" : ["c1" ], "color" : "e8e3e3" },
		/* 45 */ { "x" : -1, "y" : 1, "cGroup" : ["c1" ], "color" : "e8e3e3" },
		
		/* 46 */ { "x" : 23, "y" : -13, "cGroup" : ["c1" ], "trait" : "none", "color" : "e8e3e3" },
		/* 47 */ { "x" : 7, "y" : 15, "cGroup" : ["c1" ], "trait" : "none", "color" : "e8e3e3" },
		
		/* 48 */ { "x" : 9, "y" : -13, "cGroup" : ["c1" ], "color" : "e8e3e3" },
		/* 49 */ { "x" : 1, "y" : 2, "cGroup" : ["c1" ], "color" : "e8e3e3" },
		/* 50 */ { "x" : -27, "y" : -13, "cGroup" : ["c1" ], "color" : "f08a2b" },
		/* 51 */ { "x" : -9, "y" : 15, "cGroup" : ["c1" ], "color" : "f08a2b" },
		/* 52 */ { "x" : -24, "y" : -13, "cGroup" : ["c1" ], "color" : "f08a2b" },
		/* 53 */ { "x" : -6, "y" : 15, "cGroup" : ["c1" ], "color" : "f08a2b" },
		
		/* 54 */ { "x" : 7, "y" : 3, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		/* 55 */ { "x" : 17, "y" : 19, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		/* 56 */ { "x" : 9, "y" : 3, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		/* 57 */ { "x" : 19, "y" : 19, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		
		/* 58 */ { "x" : -10, "y" : -13, "cGroup" : ["c1" ], "color" : "e8e3e3" },
		/* 59 */ { "x" : 8, "y" : 15, "cGroup" : ["c1" ], "color" : "e8e3e3" },
		/* 60 */ { "x" : -7, "y" : -13, "cGroup" : ["c1" ], "color" : "e8e3e3" },
		/* 61 */ { "x" : 11, "y" : 15, "cGroup" : ["c1" ], "color" : "e8e3e3" },
		
		/* 62 */ { "x" : -36, "y" : 15.8, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		/* 63 */ { "x" : 34, "y" : 15.8, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		/* 64 */ { "x" : -36, "y" : -13.8, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		/* 65 */ { "x" : 34, "y" : -13.8, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		/* 66 */ { "x" : 11, "y" : 3, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		/* 67 */ { "x" : 21, "y" : 19, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		/* 68 */ { "x" : 11, "y" : 1, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		/* 69 */ { "x" : 21, "y" : 17, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		/* 70 */ { "x" : 11, "y" : -1, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		/* 71 */ { "x" : 21, "y" : 15, "cGroup" : ["c1" ], "trait" : "none", "color" : "454C5E", "curve" : 0 },
		
		/* 72 */ { "x" : 0, "y" : 78, "cGroup" : ["c1" ], "color" : "d0d5e1", "curve" : 180 },
		/* 73 */ { "x" : 0, "y" : -78, "cGroup" : ["c1" ], "color" : "d0d5e1", "curve" : 180 },
		/* 74 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "a3acc2" },
		/* 75 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "a3acc2" },
		/* 76 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "a8b4bd" },
		/* 77 */ { "x" : 0, "y" : -270, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 78 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "a8b4bd" },
		/* 79 */ { "x" : 0, "y" : 270, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] }

	],

	"segments" : [
		{ "v0" : 2, "v1" : 3, "color" : "f08a2b", "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 2 },
		{ "v0" : 4, "v1" : 5, "color" : "f08a2b", "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 2 },
		{ "v0" : 6, "v1" : 7, "color" : "e8e3e3", "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : -2 },
		{ "v0" : 8, "v1" : 9, "color" : "e8e3e3", "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : -2 },
		{ "v0" : 10, "v1" : 11, "color" : "a3acc2", "bCoef" : 1.1, "cMask" : ["ball" ], "bias" : 40 },
		{ "v0" : 12, "v1" : 13, "color" : "a3acc2", "bCoef" : 1.1, "cMask" : ["ball" ], "bias" : -40 },
		{ "v0" : 14, "v1" : 15, "color" : "a3acc2", "cMask" : ["ball" ] },
		{ "v0" : 16, "v1" : 17, "color" : "a3acc2", "bCoef" : 1.1, "cMask" : ["ball" ], "bias" : -40 },
		{ "v0" : 18, "v1" : 19, "color" : "a3acc2", "bCoef" : 1.1, "cMask" : ["ball" ], "bias" : -40 },
		{ "v0" : 20, "v1" : 21, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ] },
		{ "v0" : 22, "v1" : 23, "color" : "a3acc2", "cMask" : ["ball" ] },
		{ "v0" : 24, "v1" : 25, "color" : "a3acc2", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 26, "v1" : 27, "color" : "a3acc2", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 30, "v1" : 31, "color" : "c4c9d4", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 32, "v1" : 33, "color" : "c4c9d4", "bCoef" : 0.1, "cMask" : [ ] },
		{ "v0" : 35, "v1" : 34, "curve" : 180, "color" : "a3acc2", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.1232339957368e-17 },
		{ "v0" : 36, "v1" : 37, "curve" : 180, "color" : "a3acc2", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 6.1232339957368e-17 },
		{ "v0" : 38, "v1" : 39, "color" : "f08a2b", "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 0 },
		{ "v0" : 40, "v1" : 41, "color" : "e8e3e3", "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 0 },
		
		{ "v0" : 42, "v1" : 43, "vis" : true, "color" : "e8e3e3", "cGroup" : ["c1" ], "trait" : "none" },
		
		{ "v0" : 44, "v1" : 45, "vis" : true, "color" : "e8e3e3", "cGroup" : ["c1" ] },
		
		{ "v0" : 46, "v1" : 47, "vis" : true, "color" : "e8e3e3", "cGroup" : ["c1" ], "trait" : "none" },
		
		{ "v0" : 48, "v1" : 49, "vis" : true, "color" : "e8e3e3", "cGroup" : ["c1" ] },
		{ "v0" : 50, "v1" : 51, "vis" : true, "color" : "f08a2b", "cGroup" : ["c1" ] },
		{ "v0" : 52, "v1" : 53, "vis" : true, "color" : "f08a2b", "cGroup" : ["c1" ] },
		
		{ "v0" : 54, "v1" : 55, "curve" : 0, "vis" : true, "color" : "454C5E", "cGroup" : ["c1" ], "trait" : "none", "x" : 20, "y" : 29 },
		{ "v0" : 56, "v1" : 57, "curve" : 0, "vis" : true, "color" : "454C5E", "cGroup" : ["c1" ], "trait" : "none", "x" : 20, "y" : 29 },
		
		{ "v0" : 58, "v1" : 59, "vis" : true, "color" : "e8e3e3", "cGroup" : ["c1" ] },
		{ "v0" : 60, "v1" : 61, "vis" : true, "color" : "e8e3e3", "cGroup" : ["c1" ] },
		
		{ "v0" : 62, "v1" : 63, "curve" : 0, "vis" : true, "color" : "454C5E", "cGroup" : ["c1" ], "trait" : "none", "x" : 20, "y" : 28.8 },
		{ "v0" : 64, "v1" : 65, "curve" : 0, "vis" : true, "color" : "454C5E", "cGroup" : ["c1" ], "trait" : "none", "x" : 20, "y" : -0.8 },
		{ "v0" : 66, "v1" : 67, "curve" : 0, "vis" : true, "color" : "454C5E", "cGroup" : ["c1" ], "trait" : "none", "x" : 20, "y" : 29 },
		{ "v0" : 68, "v1" : 69, "curve" : 0, "vis" : true, "color" : "454C5E", "cGroup" : ["c1" ], "trait" : "none", "x" : 20, "y" : 29 },
		{ "v0" : 70, "v1" : 71, "curve" : 0, "vis" : true, "color" : "454C5E", "cGroup" : ["c1" ], "trait" : "none", "x" : 20, "y" : 29 },
		
		{ "v0" : 72, "v1" : 73, "curve" : 180, "vis" : true, "color" : "d0d5e1", "cGroup" : ["c1" ] },
		{ "v0" : 73, "v1" : 72, "curve" : 180, "vis" : true, "color" : "f5b070", "cGroup" : ["c1" ] },
		{ "v0" : 74, "v1" : 75, "curve" : 180, "color" : "a3acc2", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "curveF" : 6.1232339957368e-17 },
		{ "v0" : 75, "v1" : 74, "curve" : 180, "color" : "f08a2b", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "curveF" : 6.1232339957368e-17 },
		{ "v0" : 76, "v1" : 77, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 78, "v1" : 79, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -240, "bCoef" : 1.1, "cMask" : ["ball" ] },
		{ "normal" : [0,-1 ], "dist" : -240, "bCoef" : 1.1, "cMask" : ["ball" ] },
		{ "normal" : [0,1 ], "dist" : -270, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -270, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -590, "bCoef" : 0.1, "cMask" : ["ball" ] },
		{ "normal" : [-1,0 ], "dist" : -590, "bCoef" : 0.1, "cMask" : ["ball" ] }

	],

	"goals" : [
		{ "p0" : [550,80 ], "p1" : [550,-80 ], "team" : "blue", "color" : "c4c9d4" },
		{ "p0" : [-550,-80 ], "p1" : [-550,80 ], "team" : "red", "color" : "c4c9d4" }

	],

	"discs" : [
		{ "radius" : 4.5, "invMass" : 0, "pos" : [-550,80 ], "color" : "f08a2b" },
		{ "radius" : 4.5, "invMass" : 0, "pos" : [-550,-80 ], "color" : "f08a2b" },
		{ "radius" : 4.5, "invMass" : 0, "pos" : [550,80 ], "color" : "e8e3e3" },
		{ "radius" : 4.5, "invMass" : 0, "pos" : [550,-80 ], "color" : "e8e3e3" }

	],

	"playerPhysics" : {
		"bCoef" : 0.35,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 4.6

	},

	"ballPhysics" : {
		"radius" : 6.5,
		"bCoef" : 0.465,
		"invMass" : 1.4,
		"color" : "f0bb28"

	},

	"spawnDistance" : 268,

	"traits" : [
		

	],

	"joints" : [
		

	],

	"redSpawnPoints" : [
		

	],

	"blueSpawnPoints" : [
		

	],

	"canBeStored" : true
}
}`;

/* OPTIONS */
const afkLimit = 15;
const drawTimeLimit = 15;
const maxTeamSize = 4;
let slowMode = 0;

/* PLAYERS */
const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
const extendedP = [];
// Player Object ID, AUTH, CONNECTION, AFK STATUS, ACTIVITY, GOALKEEPER, MUTE
const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6};
// Stats: "Auth" : '["0-Games", "1-Wins", "2-Draws", "3-Losses", "4-Winrate", "5-Goals", "6-Assists", "7-GK", "8-CS", "9-CS%", "10- ELO", "11-Role", "12-Nick", "13-Emoji", "14-Color", "15-MSG"]'
const Ss = { GA: 0, WI: 1, DR: 2, LS: 3, WR: 4, GL: 5, AS: 6, GK: 7, CS: 8, CP: 9, ELO: 10, RL: 11, NK: 12, EMOJI: 13, COLOR: 14, MSG: 15};
let players;
let teamR;
let teamB;
let teamS;

/* GAME */

let lastTeamTouched; // helps track Goals
let lastPlayersTouched; // helps track Goals
let countAFK = false; // Helps track Activity
let activePlay = false; // helps track ball Posession
let goldenGoal = false;
const SMSet = new Set(); // Slowmode
let banList = []; // helps track bans

/* STATS */

let game;
let GKList = ["", ""];
let Rposs = 0;
let Bposs = 0;
const point = [{"x": 0, "y": 0}, {"x": 0, "y": 0}]; // created to get ball speed
let ballSpeed;
let lastWinner = Team.SPECTATORS;
let streak = 0;
let allBlues = []; // This is to count the players who should be counted for the stats. This includes players who left after the game has started, doesn't include those who came too late or ...
let allReds = []; // ... those who came in a very unequal game.

/* BALANCE & CHOOSE */

let inChooseMode = false; // This variable enables to distinguish the 2 phases of playing and choosing which should be dealt with very differently
let redCaptainChoice = "";
let blueCaptainChoice = "";
const chooseTime = 20;
let timeOutCap;

/* AUXILIARY */

let checkTimeVariable = false; // This is created so the chat doesn't get spammed when a game is ending via timeLimit
let statNumber = 10; // This allows the room to be given stat information every X minutes
let endGameVariable = false; // This variable with the one below helps distinguish the cases where games are stopped because they have finished to the ones where games are stopped due to player movements or resetting teams
let resettingTeams = false;
let capLeft = false;
const statInterval = 6;

loadMap(aloneMap, 0, 0);

/* OBJECTS */

function Goal(time, team, striker, assist) {
	this.time = time;
	this.team = team;
	this.striker = striker;
	this.assist = assist;
}

function Game(date, scores, goals) {
	this.date = date;
	this.scores = scores;
	this.goals = goals;
}

/* FUNCTIONS */

/* AUXILIARY FUNCTIONS */



/**
 * The getRandomInt function generates a random integer between 0 and the specified maximum value.
 * @param max - The maximum value that the random integer can be.
 * @returns a random integer between 0 (inclusive) and the specified maximum value (exclusive).
 */
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}


/**
 * The getTime function returns the current time of the game in the format [MM:SS].
 * @param scores - The parameter "scores" is an object that contains information about the game,
 * including the current time.
 * @returns a string representing the current time of the game in the format "[MM:SS]".
 */
function getTime(scores) {
	return "[" + Math.floor(Math.floor(scores.time/60)/10).toString() + Math.floor(Math.floor(scores.time/60)%10).toString() + ":" + Math.floor(Math.floor(scores.time - (Math.floor(scores.time/60) * 60))/10).toString() + Math.floor(Math.floor(scores.time - (Math.floor(scores.time/60) * 60))%10).toString() + "]"
}


/**
 * The function calculates the distance between two points in a two-dimensional space.
 * @param p1 - The parameter p1 represents the first point, which is an object with properties x and y
 * representing the coordinates of the point.
 * @param p2 - The above code defines a function called `pointDistance` that calculates the distance
 * between two points in a two-dimensional space.
 * @returns the distance between two points, calculated using the Pythagorean theorem.
 */
function pointDistance(p1, p2) {
	var d1 = p1.x - p2.x;
	var d2 = p1.y - p2.y;
	return Math.sqrt(d1 * d1 + d2 * d2);
}


/* BUTTONS */

/**
 * Top button that choose the player that is first in the queue.
 * @returns nothing if the condition `teamS.length == 0` is true. Otherwise, it is returning the result
 * of the team assignment operations.
 */
function topBtn() {
	if (teamS.length == 0) {
		return;
	}
	else {
		if (teamR.length == teamB.length) {
			if (teamS.length > 1) {
				room.setPlayerTeam(teamS[0].id, Team.RED);
				room.setPlayerTeam(teamS[1].id, Team.BLUE);
			}
			return;
		}
		else if (teamR.length < teamB.length) {
			room.setPlayerTeam(teamS[0].id, Team.RED);
		}
		else {
			room.setPlayerTeam(teamS[0].id, Team.BLUE);
		}
	}
}

/**
 * The function randomly assigns players to the red or blue team based on the current team sizes.
 * @returns nothing if the condition `teamS.length == 0` is true. Otherwise, it returns undefined.
 */
function randomBtn() {
	if (teamS.length == 0) {
		return;
	}
	else {
		if (teamR.length == teamB.length) {
			if (teamS.length > 1) {
				var r = getRandomInt(teamS.length);
				room.setPlayerTeam(teamS[r].id, Team.RED);
				teamS = teamS.filter((spec) => spec.id != teamS[r].id);
				room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
			}
			return;
		}
		else if (teamR.length < teamB.length) {
			room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED);
		}
		else {
			room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
		}
	}
}

/**
 * The function "blueToSpecBtn" resets the teams in a game by moving all players from the blue team to
 * the spectators team.
 */
function blueToSpecBtn() {
	resettingTeams = true;
	setTimeout(() => { resettingTeams = false; }, 100);
	for (var i = 0; i < teamB.length; i++) {
		room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
	}
}

/**
 * The function "redToSpecBtn" resets the teams of all players in the "teamR" array to the spectator
 * team.
 */
function redToSpecBtn() {
	resettingTeams = true;
	setTimeout(() => { resettingTeams = false; }, 100);
	for (var i = 0; i < teamR.length; i++) {
		room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
	}
}

/**
 * The function `resetBtn` resets the teams in a game by moving players to the spectators team.
 */
function resetBtn() {
	resettingTeams = true;
	setTimeout(() => { resettingTeams = false; }, 100);
	if (teamR.length <= teamB.length) {
		for (var i = 0; i < teamR.length; i++) {
			room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
			room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
		}
		for (var i = teamR.length; i < teamB.length; i++) {
			room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
		}
	}
	else {
		for (var i = 0; i < teamB.length; i++) {
			room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
			room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
		}
		for (var i = teamB.length; i < teamR.length; i++) {
			room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
		}
	}
}


/**
 * The function changes the team of all players in teamB to the red team.
 */
function blueToRedBtn() {
	resettingTeams = true;
	setTimeout(() => { resettingTeams = false; }, 100);
	for (var i = 0; i < teamB.length; i++) {
		room.setPlayerTeam(teamB[i].id, Team.RED);
	}
}

/* GAME FUNCTIONS */

/* Setting the team colors for a game room. */
room.setTeamColors(Team.BLUE, 60, 0xFFFFFF, [0x0080ff, 0x0080ff, 0x0080ff]);
room.setTeamColors(Team.RED, 60, 0xFFFFFF, [0xFF4D40, 0xFF4D40, 0xFF4D40]);


/**
 * The function checks the time remaining in a game and performs certain actions based on the time and
 * game scores.
 */
function checkTime() {
	const scores = room.getScores();
	game.scores = scores;
	if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
		if (scores.red != scores.blue) {
			if (checkTimeVariable == false) {
				checkTimeVariable = true;
				setTimeout(() => { checkTimeVariable = false; }, 3000);
				scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
				setTimeout(() => { room.stopGame(); }, 2000);
			}
			return;
		}
		goldenGoal = true;
		room.sendAnnouncement("Goal wins! Whoever loses is Ramesh's wife!.", null, 0x4ffaff, "bold", 1);
	}
	if (Math.abs(drawTimeLimit * 60 - scores.time - 60) <= 0.01 && players.length > 2) {
		if (checkTimeVariable == false) {
			checkTimeVariable = true;
			setTimeout(() => { checkTimeVariable = false; }, 10);
			room.sendAnnouncement(Bot + "⌛ Wait 60 seconds for the party to finish!", null, 0x4ffaff, "bold", 1);
		}
	}
	if (Math.abs(scores.time - drawTimeLimit * 60) <= 0.01 && players.length > 2) {
		if (checkTimeVariable == false) {
			checkTimeVariable = true;
			setTimeout(() => { checkTimeVariable = false; }, 10);
			endGame(Team.SPECTATORS);
			room.stopGame();
			goldenGoal = false;
		}
	}
}

/**
 * The function "endGame" handles the end of a game by updating scores, determining the winner,
 * announcing the result, and updating statistics.
 * @param winner - The `winner` parameter in the `endGame` function represents the team that won the
 * game. It can have one of the following values: Team.BLUE (blue team won), Team.RED (red team won).
 */
function endGame(winner) { // handles the end of a game
	players.length >= 2 * maxTeamSize - 1 ? activateChooseMode() : null;
	const scores = room.getScores();
	game.scores = scores;
	Rposs = Rposs/(Rposs+Bposs);
	Bposs = 1 - Rposs;
	lastWinner = winner;
	endGameVariable = true;
	if (winner == Team.RED) {
		streak++;
		room.sendAnnouncement(Bot + "🔴 The Red Team won " + scores.red + "-" + scores.blue + " ! Consecutive wins : " + streak + " 🏆", null, 0x4ffaff, "bold", 2);
	}
	else if (winner == Team.BLUE) {
		streak = 1;
		room.sendAnnouncement(Bot + "🔵 The Blue Team won " + scores.blue + "-" + scores.red + " ! Consecutive wins : " + streak + " 🏆", null, 0x4ffaff, "bold", 2);
	}
	else {
		streak = 0;
		room.sendAnnouncement(Bot +"💤 Draw limit, finished! 💤", null, 0x4ffaff, "bold", 2);
 }
   room.sendAnnouncement(Bot + "⭐ Possession of the ball : 🔴 " + (Rposs*100).toAccuracy(3).toString() + "% : " + (Bposs*100).toAccuracy(3).toString() + "%🔵", null, 0x4ffaff, "bold", 2);
 scores.net == 0 ? (scores.blue == 0 ? room.sendAnnouncement(Bot + "🏆 " + GKList[0].name + " and " + GKList[1].name + " kept the fence undefeated ! ") : room.sendAnnouncement(Bot + "🏆 " + GKList[1].name + " kept the fence undefeated ! ", null, 0x4ffaff, "bold", 2)) : scores.blue == 0 ? room.sendAnnouncement(Bot +"🏆 " + GKList[0].name + " I closed the fence undefeated ! ", null, 0x4ffaff, "bold", 2) : null;
  updateStats ( ) ;
}

/**
 * The function `quickRestart` stops the current game in a room and then starts a new game after a
 * 2-second delay.
 */
function quickRestart() {
	room.stopGame();
	setTimeout(() => { room.startGame(); }, 2000);
}


/**
 * The function resumeGame() starts a game after a delay of 2 seconds and then immediately unpauses the
 * game after a delay of 1 second.
 */
function resumeGame() {
	setTimeout(() => { room.startGame(); }, 2000);
	setTimeout(() => { room.pauseGame(false); }, 1000);
}

/**
 * The function activates the choose mode and sends an announcement message.
 */
function activateChooseMode() {
	inChooseMode = true;
	slowMode = 2;
	room.sendAnnouncement(Bot + "Reconfigurando juego!", null, 0x4ffaff, "bold", 1);
}

/**
 * The function "deactivateChooseMode" is used to deactivate the choose mode and reset the choice variables.
 */
function deactivateChooseMode() {
	inChooseMode = false;
	clearTimeout(timeOutCap);
	if (slowMode != 0) {
		slowMode = 0;
		room.sendAnnouncement(Bot + "Stop!!!.", null, 0x4ffaff, "bold", 1);
	}
	redCaptainChoice = "";
	blueCaptainChoice = "";
}

/**
 * The function `loadMap` sets the custom stadium, score limit, and time limit for a game room based on
 * the provided parameters.
 * @param map - The "map" parameter is used to specify the stadium or map that will be loaded in the
 * game. It can be a custom stadium or one of the predefined stadiums such as "Classic" or "Big".
 * @param scoreLim - The `scoreLim` parameter is used to set the score limit for the game. It
 * determines how many points a team or player needs to reach in order to win the game.
 * @param timeLim - The `timeLim` parameter in the `loadMap` function represents the time limit for the
 * game. It specifies the maximum duration for a game session.
 */
function loadMap(map, scoreLim, timeLim) {
	if (map == aloneMap) {
		room.setCustomStadium(aloneMap);
	}
	else if (map == classicMap) {
		(classicMap != '') ? room.setCustomStadium(classicMap) : room.setDefaultStadium("Classic");
	}
	else if (map == bigMap) {
		(bigMap != '.') ? room.setCustomStadium(bigMap) : room.setDefaultStadium("Big");
	}
	else {
		room.setCustomStadium(map);
	}
	room.setScoreLimit(scoreLim);
	room.setTimeLimit(timeLim);
}

/* PLAYER FUNCTIONS */

/**
 * The function updates the players' list and separates them into different teams.
 */
function updateTeams() {
	players = room.getPlayerList().filter((player) => player.id != 0 && !getAFK(player));
	teamR = players.filter(p => p.team === Team.RED);
	teamB = players.filter(p => p.team === Team.BLUE);
	teamS = players.filter(p => p.team === Team.SPECTATORS);
}


/**
 * The function handles inactivity by incrementing the activity count for each player and kicking them
 * if they exceed the afkLimit.
 */
function handleInactivity() {
	if (countAFK && (teamR.length + teamB.length) > 1) {
		for (var i = 0; i < teamR.length ; i++) {
			setActivity(teamR[i], getActivity(teamR[i]) + 1);
		}
		for (var i = 0; i < teamB.length ; i++) {
			setActivity(teamB[i], getActivity(teamB[i]) + 1);
		}
	}
	for (var i = 0; i < extendedP.length ; i++) {
		if (extendedP[i][eP.ACT] == 60 * (2/3 * afkLimit)) {
			room.sendAnnouncement(Bot + "[ATH] ⛔ @" + room.getPlayer(extendedP[i][eP.ID]).name + ", if you don't move or send a message within the following " + Math.floor (afkLimit / 3) + " seconds, you will be kicked!", extendedP[i][eP.ID], 0x4ffaff, "bold", 2);
  }
		if (extendedP[i][eP.ACT] >= 60 * afkLimit) {
			extendedP[i][eP.ACT] = 0;
            if (room.getScores().time <= afkLimit - 0.5) {
				setTimeout(() => { !inChooseMode ? quickRestart() : room.stopGame(); }, 10);
			}
			room.kickPlayer(extendedP[i][eP.ID], "AFK", false);
		}
	}
}

/**
 * The function "getAuth" returns the authentication value for a given player.
 * @param player - The "player" parameter is an object that represents a player.
 * @returns the value of the `eP.AUTH` property of the first element in the `extendedP` array that has
 * a matching `player.id` value. If no matching element is found, it returns `null`.
 */
function getAuth(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AUTH] : null;
}

/**
 * The function "getAFK" returns the AFK status of a player.
 * @param player - The parameter "player" is an object that represents a player in a game.
 * @returns the AFK status of a player. If the player is found in the extendedP array, it will return
 * their AFK status. If the player is not found, it will return null.
 */
function getAFK(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK] : null;
}

/**
 * The function sets the AFK (Away From Keyboard) status of a player.
 * @param player - The "player" parameter is an object that represents a player in a game. It likely
 * has properties such as "id" to identify the player and "AFK" to indicate whether the player is away
 * from the keyboard (AFK) or not.
 * @param value - The "value" parameter in the "setAFK" function is used to set the AFK (Away From
 * Keyboard) status of a player. It can be either true or false, indicating whether the player is AFK
 * or not.
 */
function setAFK(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.AFK] = value);
}

function getActivity(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.ACT] : null;
}

function setActivity(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.ACT] = value);
}

function getGK(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.GK] : null;
}

function setGK(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.GK] = value);
}

function getMute(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.MUTE] : null;
}

function setMute(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.MUTE] = value);
}

/* BALANCE & CHOOSE FUNCTIONS */

/**
 * The function updates the role of a player in a game and performs various actions related to team
 * balancing and map loading.
 */
function updateRoleOnPlayerIn() {
	updateTeams();
	if (inChooseMode) {
		if (players.length == 6) {
			loadMap(bigMap, scoreLimitBig, timeLimitBig);
		}
		getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
	}
	balanceTeams();
}

/**
 * The function `updateRoleOnPlayerOut` is responsible for updating the roles and teams of players in a
 * game, handling situations such as players leaving or joining teams, balancing teams, and ending the
 * game if there is an abandonment.
 */
function updateRoleOnPlayerOut() {
    updateTeams();
	if (room.getScores() != null) {
		var scores = room.getScores();
		if (players.length >= 2 * maxTeamSize && scores.time >= (5/6) * game.scores.timeLimit && teamR.length != teamB.length) {
			if (teamR.length < teamB.length) {
				if (scores.blue - scores.red == 2) {
					endGame(Team.BLUE);
					room.sendAnnouncement(Bot + "🤖 Abandonment detected. Game over 🤖", null, 0x4ffaff, "bold", 2);
					setTimeout(() => { room.stopGame(); }, 100);
					return;
				}
			}
			else {
				if (scores.red - scores.blue == 2) {
					endGame(Team.RED);
					room.sendAnnouncement("🤖 Abandonment detected. Game over 🤖", null, 0x4ffaff, "bold", 2);
					setTimeout(() => { room.stopGame(); }, 100);
					return;
				}
			}
		}
	}
	if (inChooseMode) {
		if (players.length == 5) {
			loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
		}
		if (teamR.length == 0 || teamB.length == 0) {
			teamR.length == 0 ? room.setPlayerTeam(teamS[0].id, Team.RED) : room.setPlayerTeam(teamS[0].id, Team.BLUE);
			return;
		}
		if (Math.abs(teamR.length - teamB.length) == teamS.length) {
			room.sendAnnouncement("There is no alternative, let me handle this situation...", null, 0x4ffaff, "bold", 2);
			deactivateChooseMode();
			resumeGame();
			var b = teamS.length;
			if (teamR.length > teamB.length) {
				for (var i = 0 ; i < b ; i++) {
					setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 5*i);
				}
			}
			else {
				for (var i = 0 ; i < b ; i++) {
					setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 5*i);
				}
			}
			return;
		}
		if (streak == 0 && room.getScores() == null) {
			if (Math.abs(teamR.length - teamB.length) == 2) { // if someone left a team has 2 more players than the other one, put the last chosen guy back in his place so it's fair
				room.sendAnnouncement(Bot + "🤖 Balancing teams... 🤖", null, 0x4ffaff, "bold", 1);
				teamR.length > teamB.length ? room.setPlayerTeam(teamR[teamR.length - 1].id, Team.SPECTATORS) : room.setPlayerTeam(teamB[teamB.length - 1].id, Team.SPECTATORS);
			}
		}
		if (teamR.length == teamB.length && teamS.length < 2) {
			deactivateChooseMode();
			resumeGame();
			return;
		}
		capLeft ? choosePlayer() : getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
	}
	balanceTeams();
}

/**
 * The function "balanceTeams" is used to balance the teams in a game based on the number of players
 * and the current team sizes.
 */
function balanceTeams() {
	if (!inChooseMode) {
		if (players.length == 1 && teamR.length == 0) {
            quickRestart();
            loadMap(aloneMap, 0, 0);
			room.setPlayerTeam(players[0].id, Team.RED);
		}
		else if (Math.abs(teamR.length - teamB.length) == teamS.length && teamS.length > 0) {
			const n = Math.abs(teamR.length - teamB.length);
			if (players.length == 2) {
				quickRestart();
				loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
			}
			if (teamR.length > teamB.length) {
				for (var i = 0 ; i < n ; i++) {
					room.setPlayerTeam(teamS[i].id, Team.BLUE);
				}
			}
			else {
				for (var i = 0 ; i < n ; i++) {
					room.setPlayerTeam(teamS[i].id, Team.RED);
				}
			}
		}
		else if (Math.abs(teamR.length - teamB.length) > teamS.length) {
			const n = Math.abs(teamR.length - teamB.length);
			if (players.length == 1) {
				quickRestart();
				loadMap(aloneMap, 0, 0);
				room.setPlayerTeam(players[0].id, Team.RED);
				return;
			}
			else if (players.length == 5) {
				quickRestart();
				loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
			}
			if (players.length == maxTeamSize * 2 - 1) {
				allReds = [];
				allBlues = [];
			}
			if (teamR.length > teamB.length) {
				for (var i = 0 ; i < n ; i++) {
					room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
				}
			}
			else {
				for (var i = 0 ; i < n ; i++) {
					room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
				}
			}
		}
		else if (Math.abs(teamR.length - teamB.length) < teamS.length && teamR.length != teamB.length) {
			room.pauseGame(true);
			activateChooseMode();
			choosePlayer();
		}
		else if (teamS.length >= 2 && teamR.length == teamB.length && teamR.length < maxTeamSize) {
			if (teamR.length == 2) {
				quickRestart();
				loadMap(bigMap, scoreLimitBig, timeLimitBig);
			}
			topBtn();
		}
	}
}

/**
 * The function "choosePlayer" is used to select a player from a list based on their ID, top position,
 * random selection, or bottom position.
 */
function choosePlayer() {
	clearTimeout(timeOutCap);
	if (teamR.length <= teamB.length && teamR.length != 0) {
		room.sendAnnouncement(Bot +"[IND] To choose a player, enter your number in the given list or use 'top', 'random' or 'bottom'.", teamR[0].id, 0x4ffaff, "bold" , two);
  timeOutCap = setTimeout(function (player) { room.sendAnnouncement("[IND] hurry up @" + player.name + ", only left" + Number.parseInt(chooseTime / 2) + " seconds to choose !", player. id); timeOutCap = setTimeout(function (player) { room.kickPlayer(player.id, "¡No elegiste a tiempo!", false); }, chooseTime * 500, teamR[0]); teamR[0], "bold", 1;

					    }
	};
	else if (teamB.length < teamR.length && teamB.length != 0) {
		room.sendAnnouncement(Bot + "[ATH] To choose a player, enter their number in the given list or use 'top', 'random' or 'bottom'.", teamB[0].id, 0x4ffaff, "bold" , 2);
		timeOutCap = setTimeout(function (player) { room.sendAnnouncement(Bot + "[IND] hurry up @" + player.name + ", sonly left " + Number.parseInt(chooseTime / 2) + " seconds to choose  !", player.id, 0x4ffaff, "bold", 2); timeOutCap = setTimeout(function (player) { room.kickPlayer(player.id, "¡No elegiste a tiempo!", false); }, chooseTime * 500, teamB[0]); }, chooseTime * 1000, teamB[0]);
	}
	if (teamR.length != 0 && teamB.length != 0) getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
	
}


/**
 * The function "getSpecList" sends a list of players in a team to a specific player.
 * @param player - The parameter "player" represents the player for whom the special list is being
 * generated.
 */
function getSpecList(player) {
	var cstm = "[ATH] Jugadores : ";
	for (var i = 0 ; i < teamS.length ; i++) {
		if (140 - cstm.length < (teamS[i].name + "[" + (i+1) + "], ").length) {
			room.sendAnnouncement(cstm, player.id, 0x4ffaff, "bold", 2);
			cstm = "... ";
		}
		cstm += teamS[i].name + "[" + (i+1) + "], ";
	}
	cstm = cstm.substring(0,cstm.length - 2);
	cstm += ".";
	room.sendAnnouncement(cstm, player.id, 0x4ffaff, "bold", 2);
}

/* STATS FUNCTIONS */

/**
 * The function getLastTouchOfTheBall checks which player from which team touched the ball last.
 */
function getLastTouchOfTheBall() {
	const ballPosition = room.getBallPosition();
	updateTeams();
	for (var i = 0; i < players.length; i++) {
		if (players[i].position != null) {
			var distanceToBall = pointDistance(players[i].position, ballPosition);
			if (distanceToBall < triggerDistance) {
				!activePlay ? activePlay = true : null;
				if (lastTeamTouched == players[i].team && lastPlayersTouched[0] != null && lastPlayersTouched[0].id != players[i].id) {
					lastPlayersTouched[1] = lastPlayersTouched[0];
					lastPlayersTouched[0] = players[i];
				}
				lastTeamTouched = players[i].team;
			}
		}
	}
}

/**
 * The function `getStats()` updates the possession, ball speed, and goalkeeper statistics for each
 * team during an active play.
 */
function getStats() {
	if (activePlay) {
		updateTeams();
		lastTeamTouched == Team.RED ? Rposs++ : Bposs++;
		var ballPosition = room.getBallPosition();
		point[1] = point[0];
		point[0] = ballPosition;
		ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60)/15000;
		var k = [-1, Infinity];
		for (var i = 0; i < teamR.length; i++) {
			if (teamR[i].position.x < k[1]) {
				k[0] = teamR[i];
				k[1] = teamR[i].position.x;
			}
		}
		k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
		k = [-1, -Infinity];
		for (var i = 0; i < teamB.length; i++) {
			if (teamB[i].position.x > k[1]) {
				k[0] = teamB[i];
				k[1] = teamB[i].position.x;
			}
		}
		k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
		findGK();
	}
}



/**
 * The function "updateStats" updates the statistics of players in a game, including games played,
 * wins, losses, win rate, goals, assists, clean sheets, and Elo rating.
 */
function updateStats() {
	// Checks when game is over
	if (players.length >= 2 * maxTeamSize && (game.scores.time >= (5 / 6) * game.scores.timeLimit || game.scores.red == game.scores.scoreLimit || game.scores.blue == game.scores.scoreLimit) && allReds.length >= maxTeamSize && allBlues.length >= maxTeamSize) {
		var stats;
		// for all RED players
		for (var i = 0; i < allReds.length; i++) {
			// Get all the items in the JSON file
			// stats: [0] Games played, [1] Wins, [2] Losses, [3] Draws, [4] Winrate, [5] Goals, [6] Assists, [7] Clean sheets, [8] Saves, [9] Save rate, [10] Elo rating, [11] Player type, [12] Player name
			localStorage.getItem(getAuth(allReds[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allReds[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", 0, "player", allReds[i].name, "", 0x000000, ""];
			// +1 in Games played
			stats[Ss.GA]++;
			// Which team won?
			lastWinner == Team.RED ? stats[Ss.WI]++ : lastWinner == Team.BLUE ? stats[Ss.LS]++ : stats[Ss.DR]++;
			// Winrrate recalculation
			stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
			// Saves into Localstore JSON
			localStorage.setItem(getAuth(allReds[i]), JSON.stringify(stats));
		}
		// The same for Blue TEAM
		for (var i = 0; i < allBlues.length; i++) {
			localStorage.getItem(getAuth(allBlues[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allBlues[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", 0, "player", allBlues[i].name, "", 0x000000, ""];
			stats[Ss.GA]++;
			lastWinner == Team.BLUE ? stats[Ss.WI]++ : lastWinner == Team.RED ? stats[Ss.LS]++ : stats[Ss.DR]++;
			stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
			localStorage.setItem(getAuth(allBlues[i]), JSON.stringify(stats));
		}
        // Goals recalculation
		for (var i = 0; i < game.goals.length; i++) {
			if (game.goals[i].striker != null) {
				if ((allBlues.concat(allReds)).findIndex((player) => player.id == game.goals[i].striker.id) != -1) {
					stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].striker)));
					stats[Ss.GL]++;
					localStorage.setItem(getAuth(game.goals[i].striker), JSON.stringify(stats));
				}
			}
            // Assists recalculation
			if (game.goals[i].assist != null) {
				if ((allBlues.concat(allReds)).findIndex((player) => player.name == game.goals[i].assist.name) != -1) {
					stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].assist)));
					stats[Ss.AS]++;
					localStorage.setItem(getAuth(game.goals[i].assist), JSON.stringify(stats));
				}
			}
		}
        // GK recalculation
		if (allReds.findIndex((player) => player.id == GKList[0].id) != -1) {
			stats = JSON.parse(localStorage.getItem(getAuth(GKList[0])));
			stats[Ss.GK]++;
			game.scores.blue == 0 ? stats[Ss.CS]++ : null;
			stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
			localStorage.setItem(getAuth(GKList[0]), JSON.stringify(stats));
		}
		if (allBlues.findIndex((player) => player.id == GKList[1].id) != -1) {
			stats = JSON.parse(localStorage.getItem(getAuth(GKList[1])));
			stats[Ss.GK]++;
			game.scores.red == 0 ? stats[Ss.CS]++ : null;
			stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
			localStorage.setItem(getAuth(GKList[1]), JSON.stringify(stats));
		}
        // Elo recalculation for RED
        for (var i = 0; i < allReds.length; i++) {
			localStorage.getItem(getAuth(allReds[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allReds[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", 0, "player", allReds[i].name, "", 0x000000, ""];
            stats[Ss.ELO] = (1000 + (stats[Ss.WI]*5)+(stats[Ss.LS]*-15)+(stats[Ss.GL]*15)+(stats[Ss.AS]*15)+(stats[Ss.CS]*20));
			localStorage.setItem(getAuth(allReds[i]), JSON.stringify(stats));
		}
		// Elo recalculation for BLUE
		for (var i = 0; i < allBlues.length; i++) {
			localStorage.getItem(getAuth(allBlues[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allBlues[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", 0, "player", allBlues[i].name, "", 0x000000, ""];
            stats[Ss.ELO] = (1000 + (stats[Ss.WI]*5)+(stats[Ss.LS]*-15)+(stats[Ss.GL]*15)+(stats[Ss.AS]*15)+(stats[Ss.CS]*20));
			localStorage.setItem(getAuth(allBlues[i]), JSON.stringify(stats));
		}
	}
}


// Function to look for the GK :/
function findGK() {
	var tab = [[-1,""], [-1,""]];
	for (var i = 0; i < extendedP.length ; i++) {
		if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.RED) {
			if (tab[0][0] < extendedP[i][eP.GK]) {
				tab[0][0] = extendedP[i][eP.GK];
				tab[0][1] = room.getPlayer(extendedP[i][eP.ID]);
			}
		}
		else if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.BLUE) {
			if (tab[1][0] < extendedP[i][eP.GK]) {
				tab[1][0] = extendedP[i][eP.GK];
				tab[1][1] = room.getPlayer(extendedP[i][eP.ID]);
			}
		}
	}
	GKList = [tab[0][1], tab[1][1]];
}


setInterval(() => {
	var tableau = [];
	if (statNumber % 5 == 0) {
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
		if (tableau.length < 5) {
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendAnnouncement(Bot + "Partidos Jugados> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], null, 0x4ffaff, "bold", 2);
	}
	if (statNumber % 5 == 1) {
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
		if (tableau.length < 5) {
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendAnnouncement(Bot + "Victorias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], null, 0x4ffaff, "bold", 2);
	}
	if (statNumber % 5 == 2) {
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
		if (tableau.length < 5) {
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendAnnouncement(Bot +"Goles> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], null, 0x4ffaff, "bold", 2);
	}
	if (statNumber % 5 == 3) {
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]); } });
		if (tableau.length < 5) {
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendAnnouncement(Bot + "Asistencias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], null, 0x4ffaff, "bold", 2);
	}
	if (statNumber % 5 == 4) {
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]); } });
		if (tableau.length < 5) {
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendAnnouncement("CS> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], null, 0x4ffaff, "bold", 2);
	}
	statNumber++;
}, statInterval * 60 * 1000);

/* EVENTS */

/* PLAYER MOVEMENT */

// Function that is triggered when a player joins
room.onPlayerJoin = function(player) {

	console.log(player.name + " : " + player.auth);
	extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);

	updateRoleOnPlayerIn();


	if (localStorage.getItem(player.auth) != null) {
		if (JSON.parse(localStorage.getItem(player.auth))[Ss.RL] == "admin") {
			room.setPlayerAdmin(player.id, true);
		}
	}

	// Stats: "Auth" : '["0-Games", "1-Wins", "2-Draws", "3-Losses", "4-Winrate", "5-Goals", "6-Assists", "7-GK", "8-CS", "9-CS%", "10- ELO", "11-Role", "12-Nick", "13-Emoji", "14-Color", "15-MSG"]'
	localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", 0, "player", player.name, "", "", ""];

	if (stats[Ss.RL] === "admin")
	{
		// Default emoji and message when joining if Admin
		if (stats[Ss.MSG] === "" && stats[Ss.EMOJI] === "")
		{
			stats[Ss.MSG] = "El administrador " + player.name + " ha llegado";
			stats[Ss.EMOJI] = "👑";
			localStorage.setItem(getAuth(player), JSON.stringify(stats));
		}

		room.sendAnnouncement(stats[Ss.EMOJI] + " " + stats[Ss.MSG], null, 0x4ffaff, "bold", 2);
	}
	else
	{
		room.sendAnnouncement("[Ramesh] 👋 Welcome to [HaxIndia] " + player.name + " ! Type '!help' to see the commands.", "bold", 1);;
  		room.sendAnnouncement(Bot + "---------------------------------", player.id, 0x6FE35D, "bold ", 1);;
  		room.sendAnnouncement(Bot + "Join Discord: https://discord.gg/AD5f5EXSXq", player.id, 0x6FE35D, "bold", 1);

	}
}

// Function that is triggered when a player change teams
room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
	if (changedPlayer.id == 0) {
		room.setPlayerTeam(0, Team.SPECTATORS);
		return;
	}
	if (getAFK(changedPlayer) && changedPlayer.team != Team.SPECTATORS) {
		room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
		room.sendAnnouncement(Bot + changedPlayer.name + "He went to chat!", null, 0xA1CDFF, "bold", 1);
		return;
	}
	updateTeams();
	if (room.getScores() != null) {
		var scores = room.getScores();
		if (changedPlayer.team != Team.SPECTATORS && scores.time <= (3/4) * scores.timeLimit  && Math.abs(scores.blue - scores.red) < 2) {
			(changedPlayer.team == Team.RED) ? allReds.push(changedPlayer) : allBlues.push(changedPlayer);
		}
	}
	if (changedPlayer.team == Team.SPECTATORS) {
		setActivity(changedPlayer, 0);
	}
	if (inChooseMode && resettingTeams == false && byPlayer.id == 0) {
		if (Math.abs(teamR.length - teamB.length) == teamS.length) {
			deactivateChooseMode();
			resumeGame();
			var b = teamS.length;
			if (teamR.length > teamB.length) {
				for (var i = 0 ; i < b ; i++) {
					setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 200*i);
				}
			}
			else {
				for (var i = 0 ; i < b ; i++) {
					setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 200*i);
				}
			}
			return;
		}
		else if ((teamR.length == maxTeamSize && teamB.length == maxTeamSize) || (teamR.length == teamB.length && teamS.length < 2)) {
			deactivateChooseMode();
			resumeGame();
		}
		else if (teamR.length <= teamB.length && redCaptainChoice != "") { // choice remembered
			redCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.RED) : redCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
			return;
		}
		else if (teamB.length < teamR.length && blueCaptainChoice != "") {
			blueCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.BLUE) : blueCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
			return;
		}
		else {
			choosePlayer();
		}
	}
}

// Function that is triggered when a player leaves
room.onPlayerLeave = function(player) {
	if (teamR.findIndex((red) => red.id == player.id) == 0 && inChooseMode && teamR.length <= teamB.length) {
		choosePlayer();
		capLeft = true; setTimeout(() => { capLeft = false; }, 10);
	}
	if (teamB.findIndex((blue) => blue.id == player.id) == 0 && inChooseMode && teamB.length < teamR.length) {
		choosePlayer();
		capLeft = true; setTimeout(() => { capLeft = false; }, 10);
	}
	setActivity(player, 0);
    updateRoleOnPlayerOut();
}

// Function that is triggered when a player is kicked
room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {
	ban == true ? banList.push([kickedPlayer.name, kickedPlayer.id]) : null;
}

// Function that is triggered when a player chats
room.onPlayerChat = function (player, message) {

	console.log("Name " + player.name + " : " + message);

	if (message.startsWith("t "))
	{
	room.getPlayerList().filter(callback => callback.team == player.team).forEach(callback => {room.sendAnnouncement("[Team] < " + player.name + ": " + message.substr(2)/*`[Chat de equipo] > [${player.id}] ${player.name}: ${message.substr(prefixTeamChatString.length)}`*/, callback.id, player.team == 1 ? 0xFF7438 : player.team == 0 ? 0xABFFB6 : 0x2C6AC7, "bold", 1)})

	return false;
	}

	else if (message.startsWith("!say ") && player.admin == true)
	{
		room.sendAnnouncement(Bot + message.substr(5), null, 0xffde2e, "bold", 1);
		return false;
	}
	message = message.split(/ +/);

	player.team != Team.SPECTATORS ? setActivity(player, 0) : null;

	if (["!help"].includes(message[0].toLowerCase()))
	{
		room.sendAnnouncement("Commands : !showstats, t [Team chat], !help, !leaderboard, !elo", player.id, 0x4ffaff, "bold", 2);
		player.admin ? room.sendAnnouncement(Bot + " : [Admin] !mute <duration = 3> #<id>, !unmute all/#<id>, !clearbans <number = all>, !slow <duration>, !endslow", player.id, 0x4ffaff, "bold", 2) : null;
				player.admin ? room.sendAnnouncement(Bot + " : [Admin] | !color <htmlcolor> | !message <message> | !emoji <emoji>", player.id, 0x4ffaff, "bold", 2) : null;
	}

    else if (message == "!elo")
    {
        var stats;
		localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", 0, "player", player.name, "", "", ""]
		room.sendAnnouncement("[" + player.name + "] ELO: " + stats[Ss.ELO], null, 0x4ffaff, "bold", 1);
	}

    else if (["!leaderboard", "tabla"].includes(message[0].toLowerCase()))
    {
        var top10Array = [];
		let limit = 10;
        for (let key in localStorage) {

			if (key.length > 15)
			{
			// Stats: "Auth" : '["0-Games", "1-Wins", "2-Draws", "3-Losses", "4-Winrate", "5-Goals", "6-Assists", "7-GK", "8-CS", "9-CS%", "10- ELO", "11-Role", "12-Nick", "13-Emoji", "14-Color", "15-MSG"]'
			localStorage.getItem(key) ? stats = JSON.parse(localStorage.getItem(key)) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", 0, "player", player.name, "", "", ""]
            top10Array.push({ name: stats[12], elo: stats[10] });
			}
		}
        // Create items array
  		top10Array.sort((a, b) => b.elo - a.elo);

        room.sendAnnouncement("-------------LOS 10 MAS GRANDES DE HAXBALL-------------", player.id, 0xffcd48, "bold", 2);

		if (message.length > 1) {limit = parseInt(message[1]);}

        for (var i = 0; i < Math.min(top10Array.length, limit); i++)
        {
            room.sendAnnouncement(i+1 + ". " + top10Array[i].name + " -> " + top10Array[i].elo + " puntos", player.id, 0xffcd48, "bold", 2);
        }
	}

	
	else if (["!afk"].includes(message[0].toLowerCase())) {
		if (players.length != 1 && player.team != Team.SPECTATORS) {
			if (player.team == Team.RED && streak > 0 && room.getScores() == null) {
				room.setPlayerTeam(player.id, Team.SPECTATORS);
			}
			else {
				room.sendAnnouncement(Bot + "No puedes ser AFK mientras estás en un equipo !", player.id, 0x8AFFF7, "bold", 1);
				return false;
			}
		}
		else if (players.length == 1 && !getAFK(player)) {
			room.setPlayerTeam(player.id, Team.SPECTATORS);
		}
		setAFK(player, !getAFK(player));
        // AFK message when command activated lol
		room.sendAnnouncement(player.name + (getAFK(player) ? " he's gone to shit!" : " He's back from cleaning his poo!"), null, (getAFK(player) ? 0xFFE063 : 0xFFE063), "normal", 1);
		/*room.sendAnnouncement(player.name + (getAFK(player) ? " Se ha ido a cagar!" : " Ha vuelto de limpiarse el poto !"), null, 0xFFE063, "bold", 2);*/
		getAFK(player) ? updateRoleOnPlayerOut() : updateRoleOnPlayerIn();
	}
	else if (["!afks", "!afklist"].includes(message[0].toLowerCase())) {
		var cstm = "[ATH] Lista de AFK : ";
		for (var i = 0; i < extendedP.length; i++) {
			if (room.getPlayer(extendedP[i][eP.ID]) != null && getAFK(room.getPlayer(extendedP[i][eP.ID]))) {
				if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + ", ").length) {
					room.sendAnnouncement(cstm, player.id, 0x30FF91, "bold", 2);
					cstm = "... ";
				}
				cstm += room.getPlayer(extendedP[i][eP.ID]).name + ", ";
			}
		}
		if (cstm == "[ATH] Lista de AFK : ") {
			room.sendAnnouncement(Bot + "There is no one on the AFK list!", player.id, 0x30FF91, "bold", 2);
			return false;
		}
		cstm = cstm.substring(0, cstm.length - 2);
		cstm += ".";
		room.sendAnnouncement(Bot + cstm, player.id, 0x8AFFF7, "bold", 2);
	}
	else if (["!stats"].includes(message[0].toLowerCase())) {

		var stats;
		localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", 0, "player", player.name, "", "", ""];
		room.sendAnnouncement("[" + player.name + "] PJ: " + stats[Ss.GA] + ", Victorias: " + stats[Ss.WI] + ", Derrotas: " + stats[Ss.LS] + ", WR: " + stats[Ss.WR] + "%, Goles: " + stats[Ss.GL] + ", Asistencias: " + stats[Ss.AS] + ", GK: " + stats[Ss.GK] + ", CS: " + stats[Ss.CS] + ", CS%: " + stats[Ss.CP] + "%", null, 0x30FF91, "bold", 1);

	}

	// Entry admin message setting
	else if ((["!message"].includes(message[0].toLowerCase())) && player.admin)  {

		var stats;
		localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", 0, "player", player.name, "", "", ""];

		const remainingWords = message.slice(1).join(" ");

		stats[Ss.MSG] = remainingWords;
		localStorage.setItem(getAuth(player), JSON.stringify(stats));
		room.sendAnnouncement(Bot + "Player welcome successfully changed a [ " + remainingWords + " ]", player.id, 0x6FE35D, "bold", 1);

	}

	// Entry admin emoji setting
	else if ((["!emoji"].includes(message[0].toLowerCase())) && player.admin)  {

		if (message.length > 0)
		{

		var stats;
		localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", 0, "player", player.name, "", "", ""];
		stats[Ss.EMOJI] = message[1];
		localStorage.setItem(getAuth(player), JSON.stringify(stats));
		room.sendAnnouncement(Bot + "Player emoji successfully changed a a [ " + message[1] + " ]", player.id, 0x6FE35D, "bold", 1);
		}
	}

	else if ((["!color"].includes(message[0].toLowerCase())) && player.admin)  {

		if (message.length > 0)
		{
		var stats;
		localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", 0, "player", player.name, "", "", ""];
		stats[Ss.COLOR] = message[1];
		localStorage.setItem(getAuth(player), JSON.stringify(stats));
		room.sendAnnouncement(Bot + "Player color successfully changed a a [ " + message[1] + " ]", player.id, 0x6FE35D, "bold", 1);
		}
	}

	else if (["!games"].includes(message[0].toLowerCase()))
	{
		var tableau = [];
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
		if (tableau.length < 5)
		{
			room.sendAnnouncement(Bot +"Not enough games have been played yet.", player.id, 0x8AFFF7, "bold",2);
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendAnnouncement(Bot + "Matches Played> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id, 0x8AFFF7, "bold", 2);
	}
	else if (["!wins"].includes(message[0].toLowerCase())) {
		var tableau = [];
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
		if (tableau.length < 5) {
			room.sendAnnouncement(Bot +"Not enough games have been played yets.", player.id, 0x8AFFF7, "bold", 2);
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendAnnouncement(Bot + "[ATH] Victorias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id, 0x4ffaff, "bold", 2);
	}
	else if (["!goals"].includes(message[0].toLowerCase())) {
		var tableau = [];
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
		if (tableau.length < 5) {
			room.sendAnnouncement(Bot +"Not enough games have been played yet", player.id, 0x8AFFF7, "bold", 2);
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendAnnouncement(Bot +"[ATH] Goles> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id, 0x4ffaff, "bold", 2);
	}
	else if (["!assists"].includes(message[0].toLowerCase())) {
		var tableau = [];
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]); } });
		if (tableau.length < 5) {
			room.sendAnnouncement(Bot + "Not enough games have been played yet.", player.id, 0x8AFFF7, "bold", 2);
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendAnnouncement(Bot + "[ATH] Asistencias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id, 0x4ffaff, "bold", 2);
	}
	else if (["!cs"].includes(message[0].toLowerCase())) {
		var tableau = [];
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]); } });
		if (tableau.length < 5) {
			room.sendAnnouncement(Bot + "Not enough games have been played yet", player.id, 0x4ffaff, "bold", 2);
			return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendAnnouncement(Bot + "[ATH] Vallas Invictas> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id, 0x8AFFF7, "bold", 2);
	}
	else if (["!claim"].includes(message[0].toLowerCase())) {

		console.log("claimsito");
		if (message[1] == adminPassword) {
			room.setPlayerAdmin(player.id, true);
			var stats;
			localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", 0, "player", player.name, "", "", ""];
			if (stats[Ss.RL] != "admin") {
				stats[Ss.RL] = "admin";
				room.sendAnnouncement(Bot + player.name + " Now he is a student at IIT !", null, 0x8AFFF7, "bold", 2);
				localStorage.setItem(getAuth(player), JSON.stringify(stats));
			}
		}
	}
	else if (["!setadmin", "!admin"].includes(message[0].toLowerCase())) {
		if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "admin") {
			if (message.length >= 2 && message[1][0] == "#") {
				message[1] = message[1].substring(1, message[1].length);
				if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
					var stats;
					localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", 0, "player", room.getPlayer(Number.parseInt(message[1])).name, "", 0x000000, ""];
					if (stats[Ss.RL] == "player") {
						stats[Ss.RL] = "admin";
						localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
						room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, true);
						room.sendAnnouncement(Bot + room.getPlayer(Number.parseInt(message[1])).name + "Now he is a student at IIT !", null, 0x8AFFF7, "bold", 2);
					}
				}
			}
		}
	}
	else if (["!setplayer", "!removeadmin"].includes(message[0].toLowerCase())) {
		if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "admin") {
			if (message.length >= 2 && message[1][0] == "#") {
				message[1] = message[1].substring(1, message[1].length);
				if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
					var stats;
					localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", 0, "player", room.getPlayer(Number.parseInt(message[1])).name, "", 0x000000, ""];
					if (stats[Ss.RL] == "admin") {
						room.sendAnnouncement(Bot + room.getPlayer(Number.parseInt(message[1])).name + " Now he is a student at NMIMS !", null, 0x8AFFF7, "bold", 2);
						stats[Ss.RL] = "player";
						localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
						room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, false);
					}
				}
			}
		}
	}
	else if (["!mutes", "!mutelist"].includes(message[0].toLowerCase())) {
		var cstm = "[ATH] Lista de muteados : ";
		for (var i = 0; i < extendedP.length; i++) {
			if (room.getPlayer(extendedP[i][eP.ID]) != null && getMute(room.getPlayer(extendedP[i][eP.ID]))) {
				if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ").length) {
					room.sendAnnouncement(Bot + cstm, player.id, 0x8AFFF7, "bold", 2);
					cstm = "... ";
				}
				cstm += room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ";
			}
		}
		if (cstm == "[ATH] Lista de Muteados : ") {
			room.sendAnnouncement(Bot + "There is no one on the mute list!", player.id, 0x8AFFF7, "bold", 2);
			return false;
		}
		cstm = cstm.substring(0, cstm.length - 2);
		cstm += ".";
		room.sendAnnouncement(cstm, player.id, 0x4ffaff, "bold", 2);
	}
	else if (["!mute"].includes(message[0].toLowerCase())) {
		if (player.admin) {
			updateTeams();
			var timeOut;
			if (!Number.isNaN(Number.parseInt(message[1])) && message.length > 1) {
				if (Number.parseInt(message[1]) > 0) {
					timeOut = Number.parseInt(message[1]) * 60 * 1000;
				}
				else {
					timeOut = 3 * 60 * 1000;
				}
				if (message[2].length > 1 && message[2][0] == "#") {
					message[2] = message[2].substring(1, message[2].length);
					if (!Number.isNaN(Number.parseInt(message[2])) && room.getPlayer(Number.parseInt(message[2])) != null) {
						if (room.getPlayer(Number.parseInt(message[2])).admin || getMute(room.getPlayer(Number.parseInt(message[2])))) {
							return false;
						}
						setTimeout(function (player) { setMute(player, false); }, timeOut, room.getPlayer(Number.parseInt(message[2])));
						setMute(room.getPlayer(Number.parseInt(message[2])), true);
						room.sendAnnouncement(Botroom.getPlayer(Number.parseInt(message[2])).name + " Muted for " + (timeOut / 60000) + " minutes !", "bold", 1);
					}
				}
			}
			else if (Number.isNaN(Number.parseInt(message[1]))) {
				if (message[1].length > 1 && message[1][0] == "#") {
					message[1] = message[1].substring(1, message[1].length);
					if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
						if (room.getPlayer(Number.parseInt(message[1])).admin || getMute(room.getPlayer(Number.parseInt(message[1])))) {
							return false;
						}
						setTimeout(function (player) { setMute(player, false); }, 3 * 60 * 1000, room.getPlayer(Number.parseInt(message[1])));
						setMute(room.getPlayer(Number.parseInt(message[1])), true);
						room.send(room.getPlayer(Number.parseInt(message[1])).name + " Te han muteado por 3 minutos!", "bold", 1);
					}
				}
			}
		}
	}
	else if (["!unmute"].includes(message[0].toLowerCase())) {
		if (player.admin && message.length >= 2) {
			if (message[1] == "all") {
				extendedP.forEach((ePlayer) => { ePlayer[eP.MUTE] = false; });
				room.sendAnnouncement(Bot + "Se ha limpiado la lista de muteados", null, 0x4ffaff, "bold", 2);
			}
			else if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
				setMute(room.getPlayer(Number.parseInt(message[1])), false);
				room.sendAnnouncement(Bot + room.getPlayer(Number.parseInt(message[1])).name + " ha sido desmuteado !", null, 0x96CBFF, "bold", 2);
			}
			else if (Number.isNaN(Number.parseInt(message[1]))) {
				if (message[1].length > 1 && message[1][0] == "#") {
					message[1] = message[1].substring(1, message[1].length);
					if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
						setMute(room.getPlayer(Number.parseInt(message[1])), false);
						room.sendAnnouncement(room.getPlayer(Number.parseInt(message[1])).name + " has been unmuted!", "bold", 1);
					}
				}
			}
		}
	}
	else if (["!slow"].includes(message[0].toLowerCase())) {
		if (player.admin) {
			if (message.length == 1) {
				slowMode = 2;
				room.sendAnnouncement(" SLOWCHAT Activated, Wait 2 seconds per message!", "bold", 1);
			}
			else if (message.length == 2) {
				if (!Number.isNaN(Number.parseInt(message[1]))) {
					if (Number.parseInt(message[1]) > 0) {
						slowMode = Number.parseInt(message[1]);
						room.sendAnnouncement(slowMode + " seconds, SLOWCHAT Activated!!", "bold", 1);
						return false;
					}
				}
				slowMode = 2;
				room.sendAnnouncement("Wait!! (2 seconds)!", "bold", 1);
			}
		}
	}
	else if (["!endslow"].includes(message[0].toLowerCase())) {
		if (player.admin) {
			slowMode != 0 ? room.sendAnnouncement("Ya guess , Gooo .", "bold", 1) : null;
			slowMode = 0;
		}
	}
	else if (["!showbans", "!bans"].includes(message[0].toLowerCase())) {
		if (banList.length == 0) {
			room.sendAnnouncement("There is no one on the banned list!", player.id, "bold", 1);
			return false;
		}
		var cstm = "Banned : ";
		for (var i = 0; i < banList.length; i++) {
			if (140 - cstm.length < (banList[i][0] + "[" + (banList[i][1]) + "], ").length) {
				room.sendAnnouncement(cstm, player.id);
				cstm = "... ";
			}
			cstm += banList[i][0] + "[" + (banList[i][1]) + "], ";
		}
		cstm = cstm.substring(0, cstm.length - 2);
		cstm += ".";
		room.sendAnnouncement(cstm, player.id);
	}
	else if (["!clearbans"].includes(message[0].toLowerCase())) {
		if (player.admin) {
			if (message.length == 1) {
				room.clearBans();
				room.sendAnnouncement("Bans cleared!");
				banList = [];
			}
			if (message.length == 2) {
				if (!Number.isNaN(Number.parseInt(message[1]))) {
					if (Number.parseInt(message[1]) > 0) {
						ID = Number.parseInt(message[1]);
						room.clearBan(ID);
						if (banList.length != banList.filter((array) => array[1] != ID)) {
							room.sendAnnouncement(banList.filter((array) => array[1] == ID)[0][0] + " has been banned from the host !");
						}
						setTimeout(() => { banList = banList.filter((array) => array[1] != ID); }, 20);
					}
				}
			}
		}
	}

	else if (["!bb", "!bye", "!cya", "!gn"].includes(message[0].toLowerCase())) {
		room.kickPlayer(player.id, "Nos vemos mrd !", false);
	}



    // Example command for creating soccer jerseys of "teams"
    // Must use hexadecimal colors for it, [0x'HEXCOLOR']
    // setTeamColors(team : TeamID, angle : float, textColor : int, colors : []int) : void

	else if (["!uni"].includes(message[0].toLowerCase()) && player.team != 0)
	{
		var correct = true;
		if (message[1].toLowerCase() == "Eagles")
		{
			if (player.team == 1) {room.setTeamColors(Team.RED, 0 , 0xFFFFFF , [0x6B0B6A , 0x6B0B6A , 0x000000]);}
			else{room.setTeamColors(Team.BLUE, 0, 0xFFFFFF , [0x6B0B6A , 0x6B0B6A , 0x000000]);}
		}

		else if (message[1].toLowerCase() == "abjitas")
		{
			if (player.team == 1) {room.setTeamColors(Team.RED, 125,0xFFFFFF, [0xFFDD00, 0x000000, 0xFFDD00]);}
			else{room.setTeamColors(Team.BLUE, 125 , 0xFFFFFF  , [0xFFDD00  , 0x000000  , 0xFFDD00]);}
		}
		else if (message[1].toLowerCase() == "drunk")
		{
			if (player.team == 1) {room.setTeamColors(Team.RED, 60 ,0xFFFFFF , [0xE8C538 , 0xFFF569]);}
			else{room.setTeamColors(Team.BLUE, 60 ,0xFFFFFF , [0xE8C538 , 0xFFF569]);}
		}
		else if (message[1].toLowerCase() == "mishari")
		{
			if (player.team == 1) {room.setTeamColors(Team.RED, 55  ,0xFFFFFF  , [0xCC003D , 0x8A0D21  , 0xCC003D]);}
			else{room.setTeamColors(Team.BLUE, 55 , 0xFFFFFF  , [0xCC003D  , 0x8A0D21  , 0xCC003D]);}
		}
		else if (message[1].toLowerCase() == "expropriators")
		{
			if (player.team == 1) {room.setTeamColors(Team.RED, 90 ,0xFFFFFF, [0x000000]);}
			else{room.setTeamColors(Team.BLUE, 90 ,0xFFFFFF, [0x000000]);}
		}
		else if (message[1].toLowerCase() == "liverpool")
		{
			if (player.team == 1) {room.setTeamColors(Team.RED, 0 ,0xFFFFFF , [0xCC0000, 0xCC0000, 0x8A0000]);}
			else{room.setTeamColors(Team.BLUE, 0 ,0xFFFFFF , [0xCC0000, 0xCC0000, 0x8A0000]);}
		}
		else if (message[1].toLowerCase() == "rechuchamboys")
		{
			if (player.team == 1) {room.setTeamColors(Team.RED, 90  ,0x000000 , [0xFFA203 , 0xFFA203 , 0x000000]);}
			else{room.setTeamColors(Team.BLUE, 90  ,0x000000 , [0xFFA203 , 0xFFA203 , 0x000000]);}
		}
		else if (message[1].toLowerCase() == "machos")
		{
			if (player.team == 1) {room.setTeamColors(Team.RED, 55   ,0x000000 , [0xC7180C  , 0xFAFAFA  , 0x961209]);}
			else{room.setTeamColors(Team.BLUE, 55   ,0x000000 , [0xC7180C  , 0xFAFAFA  , 0x961209]);}
		}
		else if (message[1].toLowerCase() == "psg")
		{
			if (player.team == 1) {room.setTeamColors(Team.RED, 0    ,0xFFFFFF  , [0x002A42 , 0xBD0000 , 0x002A42]);}
			else{room.setTeamColors(Team.BLUE, 0 ,0xFFFFFF  , [0x002A42 , 0xBD0000 , 0x002A42]);}
		}
		else if (message[1].toLowerCase() == "victoria")
		{
			if (player.team == 1) {room.setTeamColors(Team.RED, 0 ,0x000000  , [0xFF1717  , 0xFFFFFF  , 0xFF1717]);}
			else{room.setTeamColors(Team.BLUE, 0 ,0x000000  , [0xFF1717  , 0xFFFFFF  , 0xFF1717]);}
		}
		else if (message[1].toLowerCase() == "lorient")
		{
			if (player.team == 1) {room.setTeamColors(Team.RED, 60 ,0x000000  , [0x2AD600   , 0x21C200   , 0x11B000]);}
			else{room.setTeamColors(Team.BLUE, 60 ,0x000000 , [0x2AD600   , 0x21C200   , 0x11B000]);}
		}
		else if (message[1].toLowerCase() == "devils")
		{
			if (player.team == 1) {room.setTeamColors(Team.RED, 60  ,0xCCC125   , [0xED1000    , 0xC40D00    , 0xF7F7F0]);}
			else{room.setTeamColors(Team.BLUE, 60  ,0xCCC125   , [0xED1000    , 0xC40D00    , 0xF7F7F0]);}
		}
		else if (message[1].toLowerCase() == "callao")
		{
			if (player.team == 1) {room.setTeamColors(Team.RED, 60   ,0xF0D7D5    , [0xDE6E6A     , 0xBF4545     , 0xA82A2A]);}
			else{room.setTeamColors(Team.BLUE, 60   ,0xF0D7D5    , [0xDE6E6A     , 0xBF4545     , 0xA82A2A]);}
		}
		else
		{
			console.log("Bad actor");
			correct = false;
		}
		if (correct == true){
			room.sendAnnouncement(player.name + " I change the team shirts " + message[1], null, 0x4ffaff, "bold", 1);
		}


	}

	else if (["!camisetahelp"].includes(message[0].toLowerCase()))
	{
		room.sendAnnouncement("!uni [Team Name] : Eagles, abejitas, drunk, mishari, expropriators, liverpool, rechuchamboys, machos, psg, victoria, lorient, devils, callao, atheros [ In progress ]", player.id, 0x4ffaff, "bold", 2);
	}


	if (teamR.length != 0 && teamB.length != 0 && inChooseMode) {
		if (player.id == teamR[0].id || player.id == teamB[0].id) { // we care if it's one of the captains choosing
			if (teamR.length <= teamB.length && player.id == teamR[0].id) { // we care if it's red turn && red cap talking
				if (["top", "auto"].includes(message[0].toLowerCase())) {
					room.setPlayerTeam(teamS[0].id, Team.RED);
					redCaptainChoice = "top";
					clearTimeout(timeOutCap);
					room.sendAnnouncement(player.name + " you chose Top!");
					return false;
				}
				else if (["random", "rand"].includes(message[0].toLowerCase())) {
					var r = getRandomInt(teamS.length);
					room.setPlayerTeam(teamS[r].id, Team.RED);
					redCaptainChoice = "random";
					clearTimeout(timeOutCap);
					room.sendAnnouncement(player.name + " you chose Random!");
					return false;
				}
				else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
					room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
					redCaptainChoice = "bottom";
					clearTimeout(timeOutCap);
					room.sendAnnouncement(player.name + " you chose Bottom!");
					return false;
				}
				else if (!Number.isNaN(Number.parseInt(message[0]))) {
					if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
						room.sendAnnouncement("The number you chose is invalid!", player.id);
						return false;
					}
					else {
						room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.RED);
						room.sendAnnouncement(player.name + " chose" + teamS[Number.parseInt(message[0]) - 1].name + " !", 0x4ffaff, "bold", 1);
						return false;
					}
				}
			}
			if (teamR.length > teamB.length && player.id == teamB[0].id) { // we care if it's red turn && red cap talking
				if (["top", "auto"].includes(message[0].toLowerCase())) {
					room.setPlayerTeam(teamS[0].id, Team.BLUE);
					blueCaptainChoice = "top";
					clearTimeout(timeOutCap);
					room.sendAnnouncement(player.name + " selected Top!");
					return false;
				}
				else if (["random", "rand"].includes(message[0].toLowerCase())) {
					room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
					blueCaptainChoice = "random";
					clearTimeout(timeOutCap);
					room.sendAnnouncement(player.name + " selected random");
					return false;
				}
				else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
					room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
					blueCaptainChoice = "bottom";
					clearTimeout(timeOutCap);
					room.sendAnnouncement(player.name + " selected Bottom !");
					return false;
				}
				else if (!Number.isNaN(Number.parseInt(message[0]))) {
					if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
						room.sendAnnouncement("The number you chose is invalid!", player.id);
						return false;
					}
					else {
						room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.BLUE);
						room.sendAnnouncement(player.name + " chose " + teamS[Number.parseInt(message[0]) - 1].name + " !", 0x4ffaff, "bold", 1);
						return false;
					}
				}
			}

		}

	}
	if (message[0][0] == "!") {
		return false;
	}
	if (getMute(player)) {
		room.sendAnnouncement("you are muted.", player.id);
		return false;
	}

	if (slowMode > 0) {
		if (!player.admin) {
			if (!SMSet.has(player.id)) {
				SMSet.add(player.id);
				setTimeout((number) => { SMSet.delete(number); }, slowMode * 1000, player.id);
			}
			else {
				return false;
			}
		}
	}

    // Special chat settings for Admin and specific players (Using nicks)
	else if (player.admin && player.name != botName) {
		var stats;
		localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", 0, "player", player.name, "", "", ""];
		room.sendAnnouncement("[" + stats[Ss.EMOJI] + "] " + player.name + ": " + message.join(" "), null, "0x" + stats[Ss.COLOR] , "bold", 1);
		return false;
	}

	else if (!player.admin) {
			/*room.sendAnnouncement(player.name + ": " + message.join(" ") , null , player.team == 1 ? 0xFF7438 : player.team == 0 ? 0xffffff : 0x2C6AC7, "normal", 1);*/
			room.sendAnnouncement((player.team == 1 ? "🔴 " + player.name + ": " + message.join(" ") : player.team == 0 ? player.name + ": " + message.join(" ") : "🔵 " + player.name + ": " + message.join(" ")), null , player.team == 1 ? 0xFF0000 : player.team == 0 ? 0xffffff : 0x2C6AC7, "normal", 1);
			return false;

	}

}

room.onPlayerActivity = function(player) {
	setActivity(player, 0);
}

room.onPlayerBallKick = function(player) {
	if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
		!activePlay ? activePlay = true : null;
		lastTeamTouched = player.team;
		lastPlayersTouched[1] = lastPlayersTouched[0];
		lastPlayersTouched[0] = player;
	}
}

/* GAME MANAGEMENT */

room.onGameStart = function(byPlayer) {
	game = new Game(Date.now(), room.getScores(), []);
	countAFK = true;
	activePlay = false;
	goldenGoal = false;
	endGameVariable = false;
	lastPlayersTouched = [null, null];
    Rposs = 0;
	Bposs = 0;
	GKList = [];
	allReds = [];
	allBlues = [];
	if (teamR.length == maxTeamSize && teamB.length == maxTeamSize) {
		for (var i = 0; i < maxTeamSize; i++) {
			allReds.push(teamR[i]);
			allBlues.push(teamB[i]);
		}
	}
	for (var i = 0; i < extendedP.length; i++) {
		extendedP[i][eP.GK] = 0;
		extendedP[i][eP.ACT] = 0;
		room.getPlayer(extendedP[i][eP.ID]) == null ? extendedP.splice(i, 1) : null;
	}
	deactivateChooseMode();
	reset_size(player_size);

}

room.onGameStop = function(byPlayer) {
	if (byPlayer.id == 0 && endGameVariable) {
		updateTeams();
		if (inChooseMode) {
			if (players.length == 2 * maxTeamSize) {
				inChooseMode = false;
				resetBtn();
				for (var i = 0; i < maxTeamSize; i++) {
					setTimeout(() => { randomBtn(); }, 400*i);
				}
				setTimeout(() => { room.startGame(); }, 2000);
			}
			else {
				if (lastWinner == Team.RED) {
					blueToSpecBtn();
				}
				else if (lastWinner == Team.BLUE) {
					redToSpecBtn();
					blueToRedBtn();
				}
				else {
					resetBtn();
				}
				setTimeout(() => { topBtn(); }, 500);
			}
		}
		else {
			if (players.length == 2) {
				if (lastWinner == Team.BLUE) {
					room.setPlayerTeam(teamB[0].id, Team.RED);
					room.setPlayerTeam(teamR[0].id, Team.BLUE);
				}
				setTimeout(() => { room.startGame(); }, 2000);
			}
			else if (players.length == 3 || players.length >= 2 * maxTeamSize + 1) {
				if (lastWinner == Team.RED) {
					blueToSpecBtn();
				}
				else {
					redToSpecBtn();
					blueToRedBtn();
				}
				setTimeout(() => { topBtn(); }, 200);
				setTimeout(() => { room.startGame(); }, 2000);
			}
			else if (players.length == 4) {
				resetBtn();
				setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500);
				setTimeout(() => { room.startGame(); }, 2000);
			}
			else if (players.length == 5 || players.length >= 2 * maxTeamSize + 1) {
				if (lastWinner == Team.RED) {
					blueToSpecBtn();
				}
				else {
					redToSpecBtn();
					blueToRedBtn();
				}
				setTimeout(() => { topBtn(); }, 200);
				activateChooseMode();
			}
			else if (players.length == 6) {
				resetBtn();
				setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500); }, 500);
				setTimeout(() => { room.startGame(); }, 2000);
			}
		}
	}
}


function change_size(player_size, team) {

	var players = room.getPlayerList();
	var team_players = players.filter((p) => p.team == team);
	for (var i = 0; i < team_players.length; i++) {
		room.setPlayerDiscProperties(team_players[i].id, {radius: player_size});
	}

}

function reset_size(player_size) {

	var players = room.getPlayerList();
	for (var i = 0; i < players.length; i++) {
		room.setPlayerDiscProperties(players[i].id, {radius: player_size});
	}
}


room.onGamePause = function(byPlayer) {
}

room.onGameUnpause = function (byPlayer) {
	if (teamR.length == 4 && teamB.length == 4 && inChooseMode || (teamR.length == teamB.length && teamS.length < 2 && inChooseMode)) {
		deactivateChooseMode();
	}
}

room.onTeamGoal = function(team) {
	activePlay = false;
	countAFK = false;
	const scores = room.getScores();
	game.scores = scores;
	if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
		
		if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
			room.sendAnnouncement("🔥 " + getTime(scores) + " Great goal" + lastPlayersTouched[0].name + " ! With assist of " + lastPlayersTouched[1].name + ". Shooting speed: " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"), null, 0x4ffaff, "bold", 1);
			game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], lastPlayersTouched[1]));

		}
		else {
			room.sendAnnouncement("🔥 " + getTime(scores) + " Great goal " + lastPlayersTouched[0].name + ". Shooting speed: " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"), null, 0x4ffaff, "bold", 1);
			game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], null));
			
		}

		change_size(40, team);

	}
	else {
		room.sendAnnouncement("🤣 " + getTime(scores) + " " + lastPlayersTouched[0].name + "BABY" + "WHAT WAS IT?" 🙃 "+ "! Shooting speed: " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"), null, 0x4ffaff, "bold", 1);
		game.goals.push(new Goal(scores.time, team, null, null));
	}
	if (scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit && scores.blue > 0 || goldenGoal == true)) {
		endGame(team);
		goldenGoal = false;
		setTimeout(() => { room.stopGame(); }, 1000);
	}
}

room.onPositionsReset = function() {
	countAFK = true;
	lastPlayersTouched = [null, null];
	reset_size(player_size);
}

/* MISCELLANEOUS */

room.onRoomLink = function(url) {
}

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
	if (getMute(changedPlayer) && changedPlayer.admin) {
		room.sendAnnouncement(changedPlayer.name + " ha sido desmuteado.");
		setMute(changedPlayer, false);
	}
	if (byPlayer.id != 0 && localStorage.getItem(getAuth(byPlayer)) && JSON.parse(localStorage.getItem(getAuth(byPlayer)))[Ss.RL] == "admin") {
		room.sendAnnouncement("No tienes permiso para nombrar a un jugador como Administrador !", byPlayer.id);
		room.setPlayerAdmin(changedPlayer.id, false);
	}
}

room.onStadiumChange = function(newStadiumName, byPlayer) {
}

room.onGameTick = function() {
	checkTime();
	getLastTouchOfTheBall();
	getStats();
	handleInactivity();
}
