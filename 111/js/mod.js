let modInfo = {
	name: "Anti-Anti-Softcap tree",
	id: "AASC",
	author: "QqQe308",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js",],

	discordName: "BiliBili link",
	discordLink: "https://b23.tv/ALvJ9Im",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

var qqq//used for testing effects, finding limits, etc.

// Set your version in num and name
let VERSION = {
	num: "0.3",
	name: "E finish",
}

let changelog = `<h1>Changelog:</h1><br>
<h2>v0.3 2024/9/7-2025/5/4</h2><br>
<h3>- Rebalanced late-E with more upgrades and contents.
<br>- Added softcap formulas and toggle devSpeed.
<br>- Completly Reconstruct coding.
<br>Endgame: 1.79e308 E (183 softcaps)</h3><br>
<h2>v0.25 2024/7/17-2024/7/25</h2><br>
<h3>- Rebalanced early-E with more upgrades and contents.
<br>- Added many new features.
<br>Endgame: 6.66e66 E (150 softcaps)</h3><br>
<h2>v0.2 2024/7/11-2024/7/16</h2><br>
<h3>- Rebalanced D with more upgrades and contents.
<br>- Added D challenges, A buyables and many new features.
<br>Endgame: 1e525 B (100 softcaps)</h3><br>
<h2>v0.1 2024/7/9-2024/7/10</h2><br>
<h3>- Rebalanced A, B and C with more upgrades and contents.
<br>- Added Softcap Layer.
<br>- Added Test and some Qol contents.
<br>- The first release of this mod.
<br>Endgame: 1e12 C</h3>
`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getRawPointsGen() {
//points gain if no softcaps
 let gain = new Decimal(1)
	gain = gain.mul(hasUpgrade("A",11)?upgradeEffect("A",11):1)
	gain = gain.mul(hasUpgrade("A",15)?upgradeEffect("A",15):1)
	gain = gain.mul(hasUpgrade("A",24)?upgradeEffect("A",24):1)
	gain = gain.mul(hasUpgrade("A",35)?upgradeEffect("A",35):1)
	gain = gain.mul(hasUpgrade("B",11)?upgradeEffect("B",11):1)
	gain = gain.mul(hasUpgrade("B",21)?upgradeEffect("B",21):1)
	gain = gain.mul(hasUpgrade("B",26)?upgradeEffect("B",26):1)
	gain = gain.mul(hasUpgrade("B",44)?upgradeEffect("B",44):1)
	gain = gain.mul(hasUpgrade("B",52)?upgradeEffect("B",52):1)
	gain = gain.mul(hasUpgrade("s",11)?upgradeEffect("s",11):1)
	gain = gain.mul(hasMilestone("C",3)?1000:1)

	gain = gain.mul(hasUpgrade("C",11)?upgradeEffect("C",11):1)
	gain = gain.mul(hasUpgrade("C",13)?upgradeEffect("C",13):1)
	gain = gain.mul(hasUpgrade("D",11)?upgradeEffect("D",11):1)
	gain = gain.mul(hasUpgrade("D",15)?upgradeEffect("D",15):1)
	gain = gain.mul(hasUpgrade("D",21)?upgradeEffect("D",21):1)
	gain = gain.mul(hasUpgrade("D",32)?upgradeEffect("D",32):1)
	gain = gain.mul(hasUpgrade("E",11)?upgradeEffect("E",11):1)
	gain = gain.mul(hasUpgrade("D",43)?upgradeEffect("D",43):1)
	gain = gain.mul(hasUpgrade("E",85)?upgradeEffect("E",85):1)
	gain = gain.mul(buyableEffect("B",23))

 if(inChallenge("E",31)) gain=gain.div(layers.E.challenges[31].nerf())
	if (inChallenge("A", 11))  gain = gain.pow(0.75)
	if (inChallenge("A", 21))  gain = gain.pow(0.5)
	if (inChallenge("A", 31))  gain = gain.pow(0.15)
	if (inChallenge("C", 11))  gain = gain.pow(0.45)
	if (hasChallenge("D", 21))  gain = gain.pow(1.1)
	if (inChallenge("E", 32))  gain = gain.pow(layers.E.challenges[32].nerf())
	if (inChallenge("E", 42))  gain = gain.pow(player.points.add(10).log(10).pow(-0.12))

	if (hasChallenge("A", 21))  gain = gain.mul(50)
	if (hasChallenge("A", 22))  gain = gain.mul(100)
	if (hasChallenge("A", 31))  gain = gain.mul(2e5)
	if (hasChallenge("C", 11))  gain = gain.mul(1000)
	if (hasChallenge("C", 12))  gain = gain.mul(8000)
	
if(inChallenge("A",32)) gain=gain.log10()
if(inChallenge("A",41)) gain=gain.tetrate(0.1)
if(inChallenge("D",21)) gain=gain.slog()
if(inChallenge("D",22)) gain=n(0)
return gain.min("10^^10")
}
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)
        
	let gain = getRawPointsGen()
	
if(gain.gte(1e4)) gain=gain.div(1e4).pow(0.5).mul(1e4)//Sc9
if(gain.gte(1e6)) gain=gain.div(1e6).pow(0.6).mul(1e6)//Sc14
if(gain.gte(1e8)) gain=gain.div(1e8).pow(0.7).mul(1e8)//Sc21
if(gain.gte(1e10)) gain=gain.div(1e10).pow(0.8).mul(1e10)//Sc24
if(gain.gte(1e35)) gain=gain.div(1e35).pow(0.9).mul(1e35)//Sc43
if(gain.max(1).log10().gte(100)) gain=n(10).pow(gain.log10().sub(100).pow(0.8).add(100))//Sc72
if(gain.max(1).log10().gte(300)) gain=n(10).pow(gain.log10().sub(299).pow(0.75).add(299))//Sc91
if(gain.max(1).log10().gte(500)) gain=n(10).pow(gain.log10().sub(499).pow(0.5).add(499))//Sc98
if(inChallenge("D",11)) gain=n(10).pow(gain.max(1).log10().pow(0.1))//Sc72boosted

	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
 devSpeed:n(1),
 softcap:n(0),
}}
var shitDown=false


// Display extra things at the top of the page
var displayThings = [
	function() {
	 let a="Current endgame: [redacted] Anti-Softcap points"
	 if(isEndgame()) a=a+"<br>You are past endgame! The game may not be very balanced."
	 if(gcs("t",12)) a=a+"<br>You have played the game for "+formatTime(player.timePlayed)+"."
	 if(gcs("t",13)) a=a+"<br>Current FPS: "+format(1000/(Date.now()-player.time))+"."
	 if(gcs("t",14)) a=a+"<br>Raw Points: "+format(getRawPointsGen())+"."
	 if(gcs("t",21)) a=a+"<br>There are "+format(player.softcap)+" softcaps in all now."
	 if(gcs("t",22)) a=a+"<br>A's GainMult: "+format(tmp.A.gainMult)
	 if(gcs("t",23)) a=a+"<br>B's GainMult: "+format(tmp.B.gainMult)
	 if(gcs("t",24)) a=a+"<br>C's GainMult: "+format(tmp.C.gainMult)
	 if(gcs("t",25)) a=a+"<br>D's GainMult: "+format(tmp.D.gainMult)
	 if(gcs("t",26)) a=a+"<br>E's GainMult: "+format(tmp.E.gainMult)
	 if(gcs("t",31)) a=a+"<br>Softcap Point: "+format(player.s.points)
	 if(gcs("t",32)) a=a+"<br>A's DirectMult: "+format(tmp.A.directMult)
	 if(gcs("t",33)) a=a+"<br>B's DirectMult: "+format(tmp.B.directMult)
	 if(gcs("t",34)) a=a+"<br>C's DirectMult: "+format(tmp.C.directMult)
	 if(gcs("t",35)) a=a+"<br>D's DirectMult: "+format(tmp.D.directMult)
	 if(gcs("t",36)) a=a+"<br>E's DirectMult: "+format(tmp.E.directMult)
	 return a
	},
]
// Determines when the game "ends"
function isEndgame() {
	return player.AS.points.gte("67")
}

//<br> bilibili: @QqQe308

// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}

function gba(a,b) {return getBuyableAmount(a,b)}

function gcs(a,b) {return getClickableState(a,b)}

function ue(layer,id) {return upgradeEffect(layer,id)}

function sc(eff,start,power) {
 if(eff.gte(start)) return eff.div(start).pow(power).mul(start)
 else return eff
}
//对于变量eff，超出start的部分变成原来的power次方

function scExp(eff,startExp,power) {
 if(eff.log10().gte(startExp)) return n(10).pow(eff.log10().sub(startExp).pow(power).add(startExp))
 else return eff
}
//对于变量eff，指数超出startExp的部分指数变成原来的power次方

function uesc(layer,id,start) {
return ue(layer,id).gte(start)&&hasUpgrade(layer,id)}//是否触发升级效果软上限

function n(a) {
 return new Decimal(a)
}
