addLayer("A", {
 infoboxes: {
introBox: {
  title: "Welcome!",
  body(){return "Welcome to Anti-Anti-Softcap Tree (AAST)! This is a mod based on Anti-Softcap Tree. Instead of No-Softcaps, there will be a lot of softcaps in this mod, as well as timewalls.<br>Author: QqQe308<br>Original Author:4294967296"},//If you are reading this code, You May find many abbreviations (such as ue,gba,n()) You can find their original meaning in mod.js
        },
},
  name: "A", 
  symbol: "A", 
  position: 0, 
  startData() { return {
  unlocked: true,
		points: new Decimal(0),
		Ablim: new Decimal(3025),
  }},
  passiveGeneration(){
   let a=n(0)
   if(hasUpgrade("B",11)) a=n(0.5)
   if (hasUpgrade("B", 23))  a=a.add(1.5)
   if (hasMilestone("C", 1))  a=a.mul(10)
   if (hasMilestone("C", 2))  a=a.mul(10)
   if (hasMilestone("D", 1))  a=a.mul(100)
   if (hasMilestone("D", 2))  a=a.mul(1e4)
   return a},
  color: "#4bdc13",
  requires: new Decimal(10), 
  resource: "A", 
  baseResource: "points", 
  baseAmount() {return player.points}, 
  type: "normal", 
  exponent: 0.5, 
  gainExp() { 
   let exp=n(1)
   if(inChallenge("E",41)) exp=n(1).mul(layers.E.challenges[41].nerf())
   return exp
  },
  row: 0, 
  AblimCal() {
   let lim=n(3025)
   if(hasUpgrade("E",94)) lim=lim.add(ue("E",94))
   return lim
  },
  update(diff) {
   player.A.Ablim=tmp.A.AblimCal
   if(hasUpgrade("E",26)&&inChallenge("A",41)) player.A.challenges[41]=player.points.div("1e500").max(1).log(tmp.A.Ac7Req).add(10).max(player.A.challenges[41]).toNumber()
   if(hasUpgrade("E",74)) player.A.challenges[41]=player.points.div("1e500").max(1).log(tmp.A.Ac7Req).add(10).max(player.A.challenges[41]).toNumber()
  },
  hotkeys: [
 {key: "a", description: "A: Reset for A points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
  ],
  layerShown(){return true},
  gainMult() { 
 mult = new Decimal(1)
 mult = mult.mul(hasUpgrade(this.layer,22)?3:1)
 mult = mult.mul(hasChallenge("A", 22)?20:1)
 mult = mult.mul(hasChallenge("A", 31)?20:1)
 mult = mult.mul(hasUpgrade("B",16)?ue("B",16):1)
 mult = mult.mul(hasUpgrade("s",12)?ue("s",12):1)
 mult = mult.mul(hasChallenge("C", 12)?10:1)
 mult = mult.mul(hasChallenge("D", 22)?1e15:1)
 mult = mult.mul(hasUpgrade("C",12)?10:1)
 mult = mult.mul(hasUpgrade("D", 31)?ue("D",31):1)
 mult = mult.mul(hasUpgrade("D", 33)?1e10:1)
 mult = mult.mul(hasUpgrade("B",52)?ue("B",52):1)
 mult = mult.mul(hasUpgrade("E",93)?ue("E",93):1)
 mult = mult.pow(hasChallenge("A", 11)?1.1:1)
 mult = mult.pow(hasChallenge("C", 12)?1.025:1)
 mult = mult.pow(hasChallenge("D", 22)?1.1:1)
 mult = mult.pow(hasUpgrade("A",51)?1.25:1)
 mult = mult.pow(hasUpgrade("B",53)?2:1)
 mult = mult.pow(hasUpgrade("B",73)?ue("B",73):1)
 mult = mult.mul(buyableEffect("B",11))

 if(inChallenge("E",11)) mult=mult.max(10).tetrate(0.1)
 if(mult.gte(2) && !hasMilestone("AS", 2)) mult=mult.div(2).pow(0.5).mul(2)//Sc3
 if(mult.gte(1e7)) mult=mult.div(1e7).pow(0.3).mul(1e7)//Sc48
 if(mult.gte(1e9)) mult=mult.div(1e9).pow(0.3).mul(1e9)//Sc59
 if(mult.gte(1e100)) mult=mult.div(1e100).pow(0.8).mul(1e100)//Sc89
 if(mult.gte(1e250)) mult=mult.div(1e250).pow(0.8).mul(1e250)//Sc99
 if(mult.gte(1e300)) mult=mult.div(1e300).pow(0.8).mul(1e300)//Sc101
 if(mult.gte("1e400")) mult=mult.div("1e400").pow(0.8).mul("1e400")//Sc137
 return mult
  },
  directMult() {
   let mult = n(1)
   mult = mult.mul(buyableEffect("E",11))
   if(hasUpgrade("E",16)) mult=mult.mul(ue("E",16)[0])
   if(hasUpgrade("s",12)&&hasMilestone("E",6)) mult=mult.mul(ue("s",12))
   if (hasChallenge("E", 21)) mult=mult.mul(challengeEffect("E",21)[0])
   mult = mult.mul(hasUpgrade("E", 82)?ue("E",82):1)  
   return mult
  },
  microtabs: {
 stuff: {     
   "Upgrades": {
  unlocked() {return true},
  content: [ "upgrades"]}, 
   "Challenges": {
  unlocked() {return (hasUpgrade("B", 25))},
  content: ["challenges"]  },
   "Buyables": {
  unlocked() {return (hasUpgrade("B", 66))},
  content: [["raw-html", () => `<h4 style="opacity:.5"><br>The purchase limit of A buyables is ` + format(player.A.Ablim)],"buyables"]  },
 }
  },
  tabFormat: [ ["infobox","introBox"],
 "main-display","resource-display",
 "prestige-button",
 ["microtabs", "stuff"],
 ["blank", "25px"],
  ],
  automate(){
  if (player.B.auto2&&hasMilestone("B",5)) {
   layers.A.buyables[11].buyMax()  ;
   layers.A.buyables[12].buyMax()  ;
  }
  },
  Ac7Req() {//after 10 completions
  let req = n(1e50)
  if(hasUpgrade("E",33)) req=n(1e30)
  if(hasUpgrade("E",52)) req=req.pow(ue("E",52))
  return req
  },
  upgrades: {
 11: {
   title:"A1",
   description: function() {return "2x points"},
   tooltip:"All the upgrades that multiples points with a static multiplier in this layer are counted in this upgrade. Same as other layers.",
   effect(){
  let eff=n(1)
  if(hasUpgrade("A",11)) eff=eff.mul(2)
  if(hasUpgrade("A",12)) eff=eff.mul(2)
  if(hasUpgrade("A",13)) eff=eff.mul(2)
  if(hasUpgrade("A",14)) eff=eff.mul(2)
  if(hasUpgrade("A",16)) eff=eff.mul(3)
  if(hasUpgrade("A",21)) eff=eff.mul(3)
  if(hasUpgrade("A",23)) eff=eff.mul(3)
  if(hasUpgrade("A",25)) eff=eff.mul(5)
  if(hasUpgrade("A",26)) eff=eff.mul(4)
  if(hasUpgrade("A",41)) eff=eff.mul(1e10)
  if(hasUpgrade("A",43)) eff=eff.mul(5e20)
  if(hasUpgrade("A",45)) eff=eff.mul(1e100)
  if(hasUpgrade("A",46)) eff=eff.mul("1e1000")
  if(hasUpgrade("A",54)) eff=eff.mul(3e4)
  
  if(eff.gte(2) && !hasMilestone("AS", 0)) eff=eff.div(2).pow(0.5).mul(2)//Sc1
  if(eff.gte(10)) eff=eff.div(10).pow(0.6).mul(10)//Sc4
  if(eff.gte(1e10)) eff=eff.div(1e10).pow(0.7).mul(1e10)//Sc32
  if(eff.gte(1e12)) eff=eff.div(1e12).pow(0.8).mul(1e12)//Sc35
  if(eff.gte(1e25)) eff=eff.div(1e25).pow(0.9).mul(1e25)//Sc36
  if(eff.log10().gte(30)) eff = n(10).pow(eff.log10().sub(30).pow(0.1).add(30))//Sc37
  return eff
   },
   cost:new Decimal(1),
   effectDisplay() {
    let a1eff = format(this.effect())
    if ((!hasMilestone("AS", 0) && this.effect().gte(2)) || (hasMilestone("AS", 0) && this.effect().gte(10))) a1eff = a1eff + " (softcapped)"
    return a1eff
   },
 },
 12: {
   title:"A2",
   description: "2x points.",
   cost: new Decimal(1),
   unlocked() { return (hasUpgrade(this.layer, 11))},
 },
 13: {
   title:"A3",
   description: "2x points.",
   cost: new Decimal(2),
   unlocked() { return (hasUpgrade(this.layer, 12))},
 },
 14: {
   title:"A4",
   description: "2x points.",
   cost: new Decimal(4),
   unlocked() { return (hasUpgrade(this.layer, 13))},
 },
 15: {
   title:"A5",
   description: "point/s^1.1.",
   cost: new Decimal(12),
   unlocked() { return (hasUpgrade(this.layer, 14))},
   effect()  {let p=n(0.1)
  if (hasUpgrade("B", 32))  p = p.add(0.5)
  if (hasUpgrade("B", 35))  p = p.add(1.5)
  if (inChallenge("A", 12))  p = p.mul(-1)
  if (inChallenge("A", 31))  p = n(0)
  let eff= player.points.pow(p).add(1)
  if (inChallenge("A", 22))  eff = eff.pow(-2)
  if (hasUpgrade("s",14)) eff = eff.pow(ue("s",14))
  if(eff.gte(2) && !hasMilestone("AS", 1)) eff=eff.div(2).pow(0.5).mul(2)//Sc2
  if(eff.gte(100)) eff=eff.div(100).pow(0.5).mul(100)//Sc19
  if(eff.gte(1e6)) eff=eff.div(1e6).pow(0.5).mul(1e6)//Sc23
  return eff
   },
   effectDisplay() {
    let a2eff = format(this.effect())
    if ((!hasMilestone("AS", 1) && this.effect().gte(2)) || (hasMilestone("AS", 1) && this.effect().gte(100))) a2eff = a2eff + " (softcapped)"
    return a2eff
   }, 
 },
 16: {
   title:"A5.5",
   description: "3x points.",
   cost:new Decimal(200),
   unlocked() { return (hasUpgrade(this.layer, 25))},
 },
 21: {
   title:"A6",
   description: "3x points.",
   cost:new Decimal(20),
   unlocked() { return (hasUpgrade(this.layer, 15))},
 },
 22: {
   title:"A7",
   description: "3x A.",
   cost: new Decimal(30),
   unlocked() { return (hasUpgrade(this.layer, 21))},
 },
 23: {
   title:"A8",
   description: "3x points.",
   cost:new Decimal(100),
   unlocked() { return (hasUpgrade(this.layer, 22))},
 },
 24: {
   title:"A9",
   description: "lg(points) mults point/s.",
   cost: new Decimal(180),
   unlocked() { return (hasUpgrade(this.layer, 23))},
   effect()  { 
  let eff = player.points.add(10).log(10)
  if (hasUpgrade("A",31)) eff = eff.mul(5)
  if (hasUpgrade("A",32)) eff = eff.mul(5)
  if (hasUpgrade("A",33)) eff = eff.pow(1.3)
  if (hasUpgrade("A",34)) eff = eff.pow(1.25)
  if (hasUpgrade("B",33)&&!inChallenge("A",12)) eff = eff.pow(1.5)
  if (hasUpgrade("B",34)&&!inChallenge("A",12)) eff = eff.pow(5)
  if (hasUpgrade("A",52)) eff = eff.pow(1.25)
  if (hasUpgrade("s",13)&&!inChallenge("A",12)) eff = eff.pow(ue("s",13))

  if (inChallenge("A",12)) eff = eff.pow(-1)
  if (inChallenge("A",22)) eff = eff.pow(-0.5)
  if (inChallenge("A",31)) eff = n(1)
  if(eff.gte(2)) eff=eff.div(2).pow(0.5).mul(2)//Sc5
  if(eff.gte(5)) eff=eff.div(5).pow(0.6).mul(5)//Sc6
  if(eff.gte(10)) eff=eff.div(10).pow(0.7).mul(10)//Sc7
  if(eff.gte(100)) eff=eff.div(100).pow(0.8).mul(100)//Sc22
  if(eff.gte(1e20)) eff=eff.div(1e20).pow(0.9).mul(1e20)//Sc49
  return eff;   
   },
   effectDisplay() { return format(this.effect())+"x" }, 
 },
 25: {
   title:"A10",
   description: "5x points, unlock 2 upgrades.",
   cost:new Decimal(350),
   unlocked() { return (hasUpgrade(this.layer, 24))},
 },
 26: {
   title:"A10.5",
   description: "4x points.",
   cost:new Decimal(400),
   unlocked() { return (hasUpgrade(this.layer, 25))},
 },
 31: {
   title:"A11",
   description: "A9 x5.",
   cost:new Decimal(450),
   unlocked() { return (hasUpgrade(this.layer, 26))},
 },
 32: {
   title:"A12",
   description: "A9 x5.",
   cost:new Decimal(750),
   unlocked() { return (hasUpgrade(this.layer, 31))},
 },
 33: {
   title:"A13",
   description: "A9 ^1.3.",
   cost:new Decimal(1500),
   unlocked() { return (hasUpgrade(this.layer, 32))},
 },
 34: {
   title:"A14",
   description: "A9 ^1.25.",
   cost:new Decimal(2e3),
   unlocked() { return (hasUpgrade(this.layer, 33))},
 },
 35: {
   title:"A15",
   description: "A^0.2 boosts points. unlock B and Softcap Upgrades.",
   cost: new Decimal(3e3),
   unlocked() { return (hasUpgrade(this.layer, 34))},
   effect()  { 
  let p = n(0.2)
  if (hasUpgrade("A", 36))  p = p.mul(1.5)   
  if (hasUpgrade("A", 42))  p = p.mul(15)
  let eff = player[this.layer].points.pow(p); 
  if (hasUpgrade("A",52)) eff = eff.pow(1.5)
  if(eff.gte(5)) eff=eff.div(5).pow(0.5).mul(5)//Sc8
  if(eff.gte(1e10)) eff=eff.div(1e10).pow(0.1).mul(1e10)//Sc30
  if(eff.gte(1e20)) eff=eff.div(1e20).pow(0.1).mul(1e20)//Sc50
  return eff.max(1)
   },
   effectDisplay() { return format(this.effect())+"x" }, 
 },
 36: {
   title:"A15.5",
   description: "A15 ^1.5",
   cost:new Decimal("5e3"),
   unlocked() { return (hasUpgrade(this.layer, 35))},
 },
 41: {
   title:"A16",
   description: "1e10x points.",
   cost:new Decimal("1e14"),
   unlocked() { return (hasChallenge(this.layer, 31))},
 },
 42: {
   title:"A17",
   description: "A15 ^15.",
   cost:new Decimal("1e15"),
   unlocked() { return (hasUpgrade(this.layer, 41))},
 },
 43: {
   title:"A18",
   description: "5e20x points.",
   cost:new Decimal("2e16"),
   unlocked() { return (hasUpgrade(this.layer, 42))},
 },
 44: {
   title:"A19",
   description: "B5.5 and B10.5 ^15",
   cost:new Decimal("1e18"),
   unlocked() { return (hasUpgrade(this.layer, 43))},
 },
 45: {
   title:"A20",
   description: "1e100x points, C ^1.5.",
   cost:new Decimal("2e20"),
   unlocked() { return (hasUpgrade(this.layer, 44))},
 },
 46: {
   title:"A20.5",
   description: "1e1000x points, C ^1.5.",
   cost:new Decimal("5e21"),
   unlocked() { return (hasUpgrade(this.layer, 45))},
 },
 51: {
   title:"A21",
   description: "A ^1.1.",
   cost:new Decimal("5e32"),
   unlocked() { return (hasChallenge("C", 11))},
 },
 52: {
   title:"A22",
   description: "D ^1.5, A9 ^1.25 and A15 ^1.5.<br>unlock a C challenge.",
   cost:new Decimal("5e33"),
   unlocked() { return (hasUpgrade(this.layer, 51))},
 },
 53: {
   title:"A23",
   description: "B26 ^5.",
   cost:new Decimal("1e103"),
   unlocked() { return (hasUpgrade("B", 62))},
 },
 54: {
   title:"A24",
   description: "log2(slog(points)) boosts Bb1-2 base.",
   cost:new Decimal("1e104"),
   effect()  { 
   let eff = player.points.max(1).slog().max(2).log(2)
   return eff;  
   },
   effectDisplay() { return "^"+format(this.effect(),4)},
   unlocked() { return (hasUpgrade(this.layer, 53))},
 },
 55: {
   title:"A25",
   description: "A24^0.5 boosts Bb3-4 base.",
   cost:new Decimal("1e112"),
   effect()  { 
   let eff = ue("A",54).pow(0.5).max(1)
   return eff;  
   },
   effectDisplay() { return "^"+format(this.effect(),4)},
   unlocked() { return (hasUpgrade(this.layer, 54))},
 },
 56: {
   title:"A25.5",
   description: "D15.5 affects Bb and A25^0.5 boosts Bb5 base.",
   cost:new Decimal("1e114"),
   effect()  { 
   let eff = ue("A",55).pow(0.5).max(1)
   return eff;  
   },
   effectDisplay() { return "^"+format(this.effect(),4)},
   unlocked() { return (hasUpgrade(this.layer, 55))},
 },
 61: {
   title:"A26",
   description: "mult to C and D based on Bb1 eff.",
   cost:new Decimal("1e350"),
   effect()  { 
  let eff = buyableEffect("B",11).pow(0.02).times(buyableEffect("B",11).add(10).log(10).pow(1.5))
  if(hasUpgrade("A",62)) eff=eff.mul(ue("A",62))
  if(eff.gte(1e50)) eff=eff.div(1e50).pow(0.25).mul(1e50)//Sc95
  return eff},
   effectDisplay() { return format(this.effect())+"x" }, 
   unlocked() { return (hasMilestone("B", 6))},
 },
 62: {
   title:"A27",
   description: "mult to A26 based on Bb2 eff.",
   cost:new Decimal("3.68e368"),
   effect()  { 
  let eff = buyableEffect("B",12).add(2).log(2).pow(5)
  return eff;},
   effectDisplay() { return format(this.effect())+"x" }, 
   unlocked() { return (hasUpgrade(this.layer, 61))},
 },
 63: {
   title:"A28",
   description: "Ab2 x1.2.",
   cost:new Decimal("1e500"),
   unlocked() { return (hasUpgrade(this.layer, 62))},
 },
 64: {
   title:"A29",
   description: "mult to Ab1 based on Bb1 eff.",
   cost:new Decimal("5.26e526"),
   effect()  { 
  let eff = buyableEffect("B",11).pow(1.5)
  return eff},
   effectDisplay() { return format(this.effect())+"x"},
   tooltip:"This upgrade is weak, actually.",
   unlocked() { return (hasUpgrade(this.layer, 63))},
 },
 65: {
   title:"A30",
   description: "remove Bb1-5's base price.",
   cost:new Decimal("1e529"),
   unlocked() { return (hasUpgrade(this.layer, 64))},
 },
 66: {
   title:"A30.5",
   description: "remove Ab-2's base price.",
   cost:new Decimal("1e535"),
   unlocked() { return (hasUpgrade(this.layer, 65))},
 },
  },
  challenges: {
 11: {
   name: "Ac1",
   completionLimit: 1,
   challengeDescription() {return "points ^0.75"},
   unlocked() { return (hasUpgrade("B", 25))},
   goalDescription: "2.5e5 points /sec",
   canComplete() {return getPointGen().gte(2.5e5)},
   rewardDescription: "A and B ^1.1.",
 },
 12: {
   name: "Ac2",
   completionLimit: 1,
   challengeDescription() {return "A5 exponent x-1 and A9 effect ^-1"},
   unlocked() {  return (hasChallenge(this.layer, 11))},
   goalDescription: "1e6 points with at least 2e4 points /sec",
   canComplete() {return player.points.gte(1e6)&&getPointGen().gte(2e4)},
   rewardDescription: "B x10.",
 },
 21: {
   name: "Ac3",
   completionLimit: 1,
   challengeDescription() {return "points ^0.5"},
   unlocked() { return (hasUpgrade("B", 32))},
   goalDescription: "1.35e5 points /sec",
   canComplete() {return getPointGen().gte(1.35e5)},
   rewardDescription: "50x points(ignore most challenge effects) and 10x B.",
 },
 22: {
   name: "Ac4",
   completionLimit: 1,
   challengeDescription() {return "A5 effect ^-2 and A9 effect ^-0.5"},
   unlocked() { return (hasUpgrade("B", 35))},
   goalDescription: "5 points",
   canComplete() {return player.points.gte(5)},
   rewardDescription: "100x points(ignore most challenge effects), 20x A, 10x B.<br>unlock C.",
 },
 31: {
   name: "Ac5",
   completionLimit: 1,
   challengeDescription() {return "points ^0.15 and A5/A9 are disabled"},
   unlocked() { return (hasUpgrade("C", 15))},
   goalDescription: "7.5e5 points /sec",
   canComplete() {return getPointGen().gte(7.5e5)},
   rewardDescription: "2e5x points(ignore most challenge effects),20x A,2x C.",
 },
 32: {
   name: "Ac6",
   completionLimit: 1,
   challengeDescription() {return "Points gain is log10(points)"},
   unlocked() { return (hasMilestone("D", 3))},
   goalDescription() {return "308.25 points /sec"},
   canComplete() {return getPointGen().gte(308.25)},
   rewardDescription: "^1.5 D.",
 },
 41: {
   name: "Ac7",
   completionLimit() {
    let lim = 5
    if(hasUpgrade("B",75)) lim = 10
    if(hasUpgrade("E",26)) lim = 1e308
    return lim
   },
   challengeDescription: function() {
  return "Points gain ^^0.1.<br> Completion: " +format(challengeCompletions("A", 41)) + "/"+this.completionLimit()},
   unlocked() { return (hasMilestone("B", 4))},
   goal(){
    let goal = [n(1e32),n(1e38),n(2e41),n(1e44),n(1e54),n(1/0),n(1e121),n(1e150),n("1e320"),n("1e404"),n(1/0)]
    if(hasUpgrade("B",75)) goal[5]=n(1e111)
    return goal[challengeCompletions("A", 41)]
   },   
   canComplete() {return !hasUpgrade("E",26)},
   goalDescription:  function() {
    if (challengeCompletions("A", 41) >= 10 && hasUpgrade("E",26)) return format(tmp.A.Ac7Req.pow(challengeCompletions("A",41)-10).mul("1e500"))
    else return format(this.goal())+" points"},
   canComplete() {return player.points.gte(this.goal())&&challengeCompletions("A",41)<10},
   rewardDescription: "Boost Ab2 Effect.",
   rewardEffect() {
  let eff = n(1).add(n(challengeCompletions("A",41)).mul(0.05))
  if (challengeCompletions("A", 41) >= 1)  return eff
  else return new Decimal(1)
   },
   rewardDisplay() {return "^"+format(this.rewardEffect())},
 },
  },
  buyables:{
  11: {
   title: "Ab1", 
   baseCost() {
  let cost = n(1e125)
  if(hasUpgrade("A",66)) cost=n(1)
  if(hasUpgrade("B",83)) cost=cost.div(buyableEffect("E",24))
  return cost
   },
   cost(x=player[this.layer].buyables[this.id]) {
  let cost = n(this.baseCost()).mul(n(2).pow(x.pow(1.05)))
  return cost
   },
   canAfford() { return player[this.layer].points.gte(this.cost()) },
   buy() {
   if (!hasMilestone("B",4)) player[this.layer].points = player[this.layer].points.sub(this.cost())
   setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
   buyMax() {
   if (!this.canAfford()) return;
			 	let tempBuy = player.A.points.div(this.baseCost()).max(1).log(2).root(1.05)
   let target = tempBuy.plus(1).floor();
   player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target).min(player.A.Ablim)
				},
   base(){   let base = n(100)
   if(hasUpgrade("B",71)) base=base.mul(10)
   if(hasUpgrade("s",25)) base=base.pow(ue("s",25))
  return base
   },
   effect(x=player[this.layer].buyables[this.id]) { 
   let eff = Decimal.pow(this.base(),x)
   if(hasUpgrade("A",64)) eff = eff.mul(ue("A",64))
   if(eff.gte(1e200)) eff=eff.div(1e200).pow(0.25).mul(1e200)//Sc85
   if(eff.log10().gte(500)) eff = n(10).pow(eff.log10().sub(500).pow(0.5).add(500))//Sc90
   if(hasUpgrade("E",34)) eff=eff.pow(ue("E",34))
   if(inChallenge("E",31)) eff=n(1)
   return eff},
   display() { 
   return "Bb1,2,3,4 x"+ format(this.base()) + " effect<br>Cost: " + format(this.cost()) + " A<br>Amount: " + player[this.layer].buyables[this.id]  +"<br>  Effect: x" + format(this.effect()) + " effect" },
   purchaseLimit() {return player.A.Ablim},
   unlocked() { return hasUpgrade("B",66) }
  },
  12: {
   title: "Ab2", 
   baseCost() {
  let cost = n(1e167)
  if(hasUpgrade("A",66)) cost=n(1)
  if(hasUpgrade("B",83)) cost=cost.div(buyableEffect("E",24))
  if(hasUpgrade("E",66)) cost=cost.div(ue("E",66))
  return cost
   },
   cost(x=player[this.layer].buyables[this.id]) {
  let cost = n(this.baseCost()).mul(n(3).pow(x.pow(1.1)))
  return cost
   },
   canAfford() { return player[this.layer].points.gte(this.cost()) },
   buy() {
   if (!hasMilestone("B",4)) player[this.layer].points = player[this.layer].points.sub(this.cost())
   setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
   buyMax() {
   if (!this.canAfford()) return;
			 	let tempBuy = player.A.points.div(this.baseCost()).max(1).log(3).root(1.1)
   let target = tempBuy.plus(1).floor();
   player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target).min(player.A.Ablim)
				},
			base() {
			 let base=n(1)
			 if(hasUpgrade("s",26)) base=base.add(ue("s",26))
			 return base
			},
   effect(x=player[this.layer].buyables[this.id]) { 
   let eff = this.base().mul(x)
   if(hasChallenge("A",41)) eff=eff.pow(challengeEffect("A",41))
   if(hasUpgrade("A",63)) eff=eff.mul(1.2)
   if(hasUpgrade("B",82)) eff=eff.mul(1.35)
   if(inChallenge("E",31)) eff=n(1)
   if(eff.gte(10)) eff=eff.div(10).pow(0.5).mul(10)//Sc88
   if(eff.gte(100)) eff=eff.div(100).pow(0.5).mul(100)//Sc93
   return eff},
   display() { 
   return "All Bbs' Effective Amount +"+ format(this.base()) + "<br>Cost: " + format(this.cost()) + " A<br>Amount: " + player[this.layer].buyables[this.id]  +"<br>  Effect: +" + format(this.effect()) + " Amount" },
   purchaseLimit() {return player.A.Ablim},
   unlocked() { return hasMilestone("B",4) }
  },
  },
})//A
addLayer("B", {
  name: "B", 
  symbol: "B", 
  position: 1, 
  startData() { return {
  unlocked: false,
		points: new Decimal(0),
		pointsAc1: new Decimal(0),
		Bblim: new Decimal(1000),
  }},
  passiveGeneration(){  let pg=1
  if (hasMilestone("C", 2))  pg=pg+2
  if (hasMilestone("C", 3))  pg=pg*1000
  if (hasMilestone("D", 1))  pg=pg*100
  if (hasMilestone("D", 2))  pg=pg*1000
  if (hasMilestone("E", 10))  pg=pg*10
  return (hasUpgrade("C", 11))?pg:0},
  color: "#7AAA2C",
  requires: new Decimal(1e4), 
  resource: "B", 
  baseResource: "A", 
  baseAmount() {return player.A.points}, 
  type: "normal", 
  exponent: 0.2, 
  gainExp() {
   let exp=n(1)
   if(inChallenge("E",22)) exp=n(1).mul(layers.E.challenges[22].nerf())
   if(inChallenge("E",41)) exp=n(1).mul(layers.E.challenges[41].nerf())
  return exp
  },
  row: 0, 
  BblimCal() {
   let lim=n(1000)
   if(hasUpgrade("E",85)) lim=lim.add(ue("E",85))
   return lim
  },
  update(diff) {
   if(inChallenge("A",11)) player.B.pointsAc1=player.B.pointsAc1.max(player.points).min(1e8)
   player.B.Bblim=tmp.B.BblimCal
  },
  hotkeys: [
  {key: "b", description: "B: Reset for B points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
  ],
  layerShown(){  if (player.B.unlocked) return true
  else return (hasUpgrade("A", 35))},
  gainMult() { 
  mult = new Decimal(1)
  mult = mult.mul(hasUpgrade(this.layer,14)?2:1)
  mult = mult.mul(hasUpgrade(this.layer,15)?1.5:1)
  mult = mult.mul(hasUpgrade(this.layer,22)?2:1)
  mult = mult.mul(hasUpgrade(this.layer,24)?2:1)
  mult = mult.mul(hasUpgrade(this.layer,25)?2:1)
  mult = mult.mul(hasUpgrade("s",12)?ue("s",12):1)
  mult = mult.mul(hasUpgrade("C",12)?10:1)
  mult = mult.mul(hasUpgrade("C",25)?50:1)
  mult = mult.pow(hasChallenge("A", 11)?1.1:1)
  mult = mult.mul(hasChallenge("A", 12)?10:1)
  mult = mult.mul(hasChallenge("A", 21)?10:1)
  mult = mult.mul(hasChallenge("A", 22)?10:1)
  mult = mult.mul(hasChallenge("D", 22)?1e15:1)
  mult = mult.mul(buyableEffect("B",12))
  mult = mult.mul(hasUpgrade("B", 34)?50:1)
  mult = mult.mul(hasUpgrade("B", 41)?1500:1)
  mult = mult.mul(hasUpgrade("B", 45)?2e4:1)
  mult = mult.mul(hasUpgrade("B", 53)?30:1)
  mult = mult.mul(hasUpgrade("E",93)?ue("E",93):1)
  mult = mult.mul(hasUpgrade("B", 61)?ue("B",61):1)
  mult = mult.mul(buyableEffect("E",12))
  mult = mult.mul(hasUpgrade("D", 31)?ue("D",31):1)  
  
  mult = mult.mul(hasUpgrade("E",92)?ue("E",92):1)
  mult = mult.pow(hasUpgrade("B", 36)?1.1:1)
  mult = mult.pow(hasUpgrade("C", 34)?1.1:1)
  mult = mult.pow(hasUpgrade("D", 22)?1.2:1)
  mult = mult.pow(hasChallenge("D", 12)?1.35:1)
  mult = mult.pow(hasMilestone("B", 3)?1.15:1)
  mult = mult.pow(hasUpgrade("B",73)?ue("B",73):1)
  if(inChallenge("E",11)) mult=mult.max(10).tetrate(0.1)
if(mult.gte(10)) mult=mult.div(10).pow(0.5).mul(10)//Sc15
if(mult.gte(1e10)) mult=mult.div(1e10).pow(0.5).mul(1e10)//Sc54
if(mult.gte(1e25)) mult=mult.div(1e25).pow(0.5).mul(1e25)//Sc63
if(mult.gte(1e40)) mult=mult.div(1e40).pow(0.5).mul(1e40)//Sc69
if(mult.gte(1e100)) mult=mult.div(1e100).pow(0.5).mul(1e100)//Sc77
if(mult.gte(1e250)) mult=mult.div(1e250).pow(0.5).mul(1e250)//Sc92
if(mult.log10().gte(400)) mult = n(10).pow(mult.log10().sub(400).pow(0.5).add(400))//Sc97
  return mult
  },
  directMult() {
   let mult = n(1)
   mult = mult.mul(buyableEffect("E",12))
   if(hasUpgrade("E",16)) mult=mult.mul(ue("E",16)[1])
   if(hasUpgrade("s",12)&&hasMilestone("E",6)) mult=mult.mul(ue("s",12))
   if (hasChallenge("E", 21)) mult=mult.mul(challengeEffect("E",21)[1])
   mult = mult.mul(hasUpgrade("E", 82)?ue("E",82):1)  
   return mult
  },
  microtabs: {
  stuff: {   
   "Upgrades": {
   unlocked() {return true},
   content: [ "upgrades"]}, 
   "Buyables": {
   unlocked() {return (hasMilestone("D", 2))},
   content: [["raw-html", () => `<h4 style="opacity:.5">The purchase limit of B buyables is ` + format(player.B.Bblim)],"buyables"]},
   "Milestones": {
   unlocked() {return (hasUpgrade("B", 53))},
   content: ["milestones"]  },
  }
  },
  tabFormat: [ ["infobox","introBox"],
  "main-display","resource-display",
  "prestige-button",
  ["microtabs", "stuff"],
  ["blank", "25px"],
  ],
  branches: ["A"],
  milestones: {
  0: {requirementDescription: "1e66 total B",
   done() {return player[this.layer].total.gte("1e66")}, 
   effectDescription: "buyables cost nothing.",
  },
  1: {requirementDescription: "1e74 total B",
   done() {return player[this.layer].total.gte("1e74")}, 
   effectDescription: "All Bbs' effect ^2.",
  },
  2: {requirementDescription: "1e111 total B",
   done() {return player[this.layer].total.gte("1e111")}, 
   effectDescription: "Automatically buy max B buyables.",
   toggles: [ ["B","auto"] ]
  },
  3: {requirementDescription: "1e140 total B",
   done() {return player[this.layer].total.gte("1e140")},
   effectDescription: "B ^1.15 and unlock more B upgrades.",
  },
  4: {requirementDescription: "1e200 total B",
   done() {return player[this.layer].total.gte("1e200")}, 
   effectDescription: "unlock one A chal.<br>A buyables cost nothing and unlock Ab2.",
  },
  5: {requirementDescription: "1e250 total B",
   done() {return player[this.layer].total.gte("1e250")},
   effectDescription: "100x C/D passive and auto buy A buyables.",
   toggles: [ ["B","auto2"] ]
  },
  6: {requirementDescription: "3.65e365 total B",
   done() {return player[this.layer].total.gte("3.65e365")}, 
   effectDescription: "Unlock an A upg.",
  },
  7: {requirementDescription: "1e535 total B",
   done() {return player[this.layer].total.gte("1e535")}, 
   effectDescription: "Unlock the layer E.",
  },
  },
  upgrades: {
  11: {
   title:"B1",
   description: function() {return "5x points. 0.5x passive generate A.<br>layer B total:<br>"+ format(this.effect()) +"x"},
   effect()  { 
   let eff = 5
   if (hasUpgrade("B",12)) eff = eff*5
   if (hasUpgrade("B",13)) eff = eff*5
   if (hasUpgrade("B",15)) eff = eff*5
   if (hasUpgrade("B",24)) eff = eff*10
   if (hasUpgrade("B",25)) eff = eff*10
   if (hasUpgrade("B",31)) eff = eff*20
   if (hasUpgrade("B",36)) eff = eff*1e3
   if (hasUpgrade("B",42)) eff = eff*1e10
   if (hasUpgrade("B",64)) eff = eff*5e4
   if (hasUpgrade("B",72)) eff = eff*1e240
   eff=n(eff)
   if (hasUpgrade("B",81)) eff = eff.mul("1e25000")
   
   if(eff.gte(5)) eff=eff.div(5).pow(0.5).mul(5)//Sc10
   if(eff.gte(100)) eff=eff.div(100).pow(0.5).mul(100)//Sc16
   if(eff.gte(1000)) eff=eff.div(1000).pow(0.5).mul(1000)//Sc25
   if(eff.gte(1e30)) eff=eff.div(1e30).pow(0.5).mul(1e30)//Sc86
   if(eff.gte(1e100)) eff=eff.div(1e100).pow(0.5).mul(1e100)//Sc100
   return eff;  
   },
   cost:new Decimal(10),
  },
  12: {
   title:"B2",
   description: "5x points.",
   cost:new Decimal(15),
   unlocked() { return (hasUpgrade(this.layer, 11))},
  },
  13: {
   title:"B3",
   description: "5x points.",
   cost:new Decimal(20),
   unlocked() { return (hasUpgrade(this.layer, 12))},
  },
  14: {
   title:"B4",
   description: "2x B.",
   cost:new Decimal(25),
   unlocked() { return (hasUpgrade(this.layer, 13))},
  },
  15: {
   title:"B5",
   description: "1.5x B,5x points.",
   cost:new Decimal(60),
   unlocked() { return (hasUpgrade(this.layer, 14))},
  },
  16: {
   title:"B5.5",
   description: "B^0.2 boosts A.",
   cost: new Decimal(80),
   unlocked() { return (hasUpgrade(this.layer, 15))},
   effect()  { 
   let effb = 0.2
   let eff=player[this.layer].points.pow(effb); 
   if(hasUpgrade("A",44)) eff=eff.pow(15)
   if(eff.gte(2.5)) eff=eff.div(2.5).pow(0.5).mul(2.5)//Sc12
   if(eff.gte(1e4)) eff=eff.div(1e4).pow(0.1).mul(1e4)//Sc34
   if(eff.gte(1e6)) eff=eff.div(1e6).pow(0.01).mul(1e6)//Sc44
   return eff.max(1)
   },
   effectDisplay() { return format(this.effect())+"x" }, 
  },
  21: {
   title:"B6",
   description: "B^0.3 boosts points.",
   cost: new Decimal(140),
   unlocked() { return (hasUpgrade(this.layer, 15))},
   effect()  { 
   let effb6 = 0.3
   if (hasUpgrade("B", 32))  effb6 = effb6*1.5
   if (hasUpgrade("C", 14))  effb6 = effb6*15
   if (hasUpgrade("C", 22))  effb6 = effb6*10

   let eff=player[this.layer].points.pow(effb6);  
   if(eff.gte(4)) eff=eff.div(4).pow(0.5).mul(4)//Sc13
   if(eff.gte(25)) eff=eff.div(25).pow(0.2).mul(25)//Sc20
   if(eff.gte(1e6)) eff=eff.div(1e6).pow(0.1).mul(1e6)//Sc27
   return eff.max(1)
   },
   effectDisplay() { return format(this.effect())+"x" }, 
  },
  22: {
   title:"B7",
   description: "2x B.",
   cost:new Decimal(200),
   unlocked() { return (hasUpgrade(this.layer, 21))},
  },
  23: {
   title:"B8",
   description: "An additional 1.5x A passive generation.",
   cost:new Decimal(350),
   unlocked() { return (hasUpgrade(this.layer, 22))},
  },
  24: {
   title:"B9",
   description: "2x B,10x points.",
   cost:new Decimal(600),
   unlocked() { return (hasUpgrade(this.layer, 23))},
  },
  25: {
   title:"B10",
   description: "2x B,10x points.<br>unlock A chal.",
   cost:new Decimal(2e3),
   unlocked() { return (hasUpgrade(this.layer, 24))},
  },
  26: {
   title:"B10.5",
   description: "Best points in Ac1 boosts points.(capped at 1e8)",
   cost: new Decimal(10000),
   unlocked() { return (hasUpgrade(this.layer, 25))},
   effect()  { 
   let eff=player.B.pointsAc1.min(1e8).pow(0.1).max(1)
   if(hasUpgrade("A",44)) eff=eff.pow(15)
   if(eff.gte(5)) eff=eff.div(5).pow(0.5).mul(5)//Sc18
   return eff
   },
   tooltip() {return "Current best points: "+format(player.B.pointsAc1)},
   effectDisplay() { return format(this.effect())+"x" }, 
  },
  31: {
   title:"B11",
   description: "20x points.",
   cost:new Decimal(3e4),
   unlocked() { return (hasUpgrade(this.layer, 25))},
  },
  32: {
   title:"B12",
   description: "A5 exp+0.5, unlock a challenge.",
   cost:new Decimal(5e4),
   unlocked() { return (hasUpgrade(this.layer, 31))},
  },
  33: {
   title:"B13",
   description: "A9^1.5.",
   tooltip: "Make sure you have completed Ac2",
   cost:new Decimal(1.5e5),
   unlocked() { return (hasUpgrade(this.layer, 32))},
  },
  34: {
   title:"B14",
   description: "A9^5 and B x50.",
   cost:new Decimal(2e5),
   unlocked() { return (hasUpgrade(this.layer, 33))},
  },
  35: {
   title:"B15",
   description: "A5 exp+1 and unlock a challenge.",
   cost:new Decimal(1.5e6),
   unlocked() { return (hasUpgrade(this.layer, 34))},
  },
  36: {
   title:"B15.5",
   description: "B ^1.1 and 1000x points.",
   cost:new Decimal(1e7),
   unlocked() { return (hasUpgrade(this.layer, 35))},
  },
  41: {
   title:"B16",
   description: "x1500 B,unlock 2nd buyable.",
   cost:new Decimal("2e31"),
   unlocked() { return hasUpgrade("D",35)},
  },
  42: {
   title:"B17",
   description: "x1e10 points.<br>D15.5 is boosted and it affects Bb3.<br>unlock 2 buyables.",
   cost:new Decimal("1e34"),
   unlocked() { return (hasUpgrade(this.layer, 41))},
  },
  43: {
   title:"B18",
   description: "Bb2 and Bb2.5 are stronger.",
   cost:new Decimal("5e46"),
   unlocked() { return (hasUpgrade(this.layer, 42))},
  },
  44: {
   title:"B19",
   description: "mult to points based on Bb1 eff.",
   cost:new Decimal("1e49"),
   effect()  { 
   let eff = buyableEffect("B",11).pow(0.2).times(buyableEffect("B",11).add(1).log(10).pow(2))
   if (hasUpgrade("B",55)) eff=Decimal.pow(eff,1.5)
   if(eff.gte(1e10)) eff=eff.div(1e10).pow(0.5).mul(1e10)//Sc65
   if(eff.gte(1e30)) eff=eff.div(1e30).pow(0.5).mul(1e30)//Sc70
   return eff  
   },
   unlocked() { return (hasUpgrade(this.layer, 43))},
   effectDisplay() { return format(this.effect())+"x" }, 
  },
  45: {
   title:"B20",
   description: "2e4x B,unlock a buyable.",
   cost:new Decimal("1e50"),
   unlocked() { return (hasUpgrade(this.layer, 44))},
  },
  46: {
   title:"B20.5",
   description: "D15.5 is boosted and it affects Bb4.",
   cost:new Decimal("1e52"),
   unlocked() { return (hasUpgrade(this.layer, 45))},
  },
  51: {
   title:"B21",
   description: "Unlock the last B buyable.",
   cost:new Decimal(1e63),
   unlocked() { return (hasUpgrade(this.layer, 46))},
  },
  52: {
   title:"B22",
   description: "mult to points and A based on Bb2 eff.",
   cost:new Decimal(1e64),
   effect()  { 
   let eff = buyableEffect("B",12).pow(0.2)
   if (hasUpgrade("B",55)) eff=Decimal.pow(eff,1.5)
   if(eff.gte(1e50)) eff=eff.div(1e50).pow(0.25).mul(1e50)//Sc71
   return eff;  
   },
   unlocked() { return (hasUpgrade(this.layer, 51))},
   effectDisplay() { return format(this.effect())+"x" }, 
  },
  53: {
   title:"B23",
   description: "A's Gainmult^2.<br>Unlock B Milestones.",
   cost:new Decimal(1e65),
   unlocked() { return (hasUpgrade(this.layer, 52))},
  },
  54: {
   title:"B24",
   description: "Boost D15.5 again.",
   cost:new Decimal(6.66e66),
   unlocked() { return (hasUpgrade(this.layer, 53))},
  },
  55: {
   title:"B25",
   description: "B19/B22 ^1.5.",
   cost:new Decimal(1e72),
   unlocked() { return (hasUpgrade(this.layer, 54))},
  },
  56: {
   title:"B25.5",
   description: "Unlock D Challenges.",
   cost:new Decimal(1e81),
   unlocked() { return (hasUpgrade(this.layer, 55))},
  },
  61: {
   title:"B26",
   description: "log1.0001 points mult B.",
   cost:new Decimal(1e114),
   effect()  { 
   let eff = player.points.add(10).log(1.0001)
   if (hasUpgrade("A",53)) eff=eff.pow(5)
   if (hasUpgrade("B",63)) eff=Decimal.pow(eff,ue("B",63))
   if (hasUpgrade("B",64)) eff=Decimal.pow(eff,10)
   if (hasUpgrade("E",31)) eff=Decimal.pow(eff,1.1)
   if (hasMilestone("E",10)) eff=Decimal.pow(eff,1.05)
   if(eff.gte(1e10)) eff=eff.div(1e10).pow(0.5).mul(1e10)//Sc73
   if(eff.gte(1e20)) eff=eff.div(1e20).pow(0.5).mul(1e20)//Sc74
   if(eff.gte(1e50)) eff=eff.div(1e50).pow(0.5).mul(1e50)//Sc78
   if(eff.gte(1e80)) eff=eff.div(1e80).pow(0.25).mul(1e80)//Sc81
   if(eff.gte(1e100)) eff=eff.div(1e100).pow(0.25).mul(1e100)//Sc82
   return eff;  
   },
   unlocked() { return (hasMilestone("B",2))},
   effectDisplay() { return format(this.effect())+"x" }, 
  },
  62: {
   title:"B27",
   description: "unlock new A upg.",
   cost:new Decimal("1e116"),
   unlocked() { return (hasUpgrade(this.layer, 61))},
  },
  63: {
   title:"B28",
   description: "B26 ^(total B upgrades^0.5).",
   cost:new Decimal("1e136"),
   effect() {
  let eff=n(player.B.upgrades.length).pow(0.5)
  return eff
   },
   effectDisplay() { return "^"+format(this.effect())}, 
   unlocked() { return (hasUpgrade(this.layer,62))},
  },
  64: {
   title:"B29",
   description: "B26 ^10 and 5e4x points.",
   cost:new Decimal("1e150"),
   unlocked() { return (hasMilestone(this.layer, 3))},
  },
  65: {
   title:"B30",
   description: "Bb3-5 base x2",
   cost:new Decimal("1e156"),
   unlocked() { return (hasUpgrade(this.layer, 64))},
  },
  66: {
   title:"B30.5",
   description: "Unlock two D challenges.<br> Unlock A buyables.",
   cost:new Decimal("1.56e156"),
   unlocked() { return (hasUpgrade(this.layer, 65))},
  },
  71: {
   title:"B31",
   description: "Ab1 base x5.",
   cost:new Decimal("1e160"),
   unlocked() { return (hasUpgrade(this.layer, 66))},
  },
  72: {
   title:"B32",
   description: "1e240x points.",
   cost:new Decimal("1e191"),
   unlocked() { return (hasUpgrade(this.layer, 71))},
  },
  73: {
   title:"B33",
   description: "Boost A and B based on A beyond 1.8e308.",
   effect() {
  let eff=player.A.points.max(n(2).pow(1024)).log(2).log(2).sub(9).pow(0.8).max(1)
  if(hasUpgrade("B",74)) eff=eff.mul(ue("B",74))
  return eff
   },
   effectDisplay() { return "^"+format(this.effect(),4)},
   cost:new Decimal("3.21e321"),
   unlocked() { return (hasUpgrade(this.layer, 72))},
  },
  74: {
   title:"B34",
   description: "Boost B33 based on B beyond 9.88e319 (2^1063).",
   effect() {
  let eff=player.B.points.max(n(2).pow(1063)).log(2).sub(39).log(2).sub(9).pow(0.5).max(1)
  if(hasUpgrade("B",76)) eff=eff.pow(1.35)
  return eff
   },
   effectDisplay() { return format(this.effect(),4)+"x"},
   cost:new Decimal("1e325"),
   unlocked() { return (hasUpgrade(this.layer, 73))},
  },
  75: {
   title:"B35",
   description: "You can complete Ac7 more than 5 times.",
   cost:new Decimal("1e330"),
   unlocked() { return (hasUpgrade(this.layer, 74))},
  },
  76: {
   title:"B35.5",
   description: "B34 ^1.1",
   cost:new Decimal("1e520"),
   unlocked() { return (hasUpgrade(this.layer, 75))},
  },
  81: {
   title:"B36",
   description: "'x1e25000' points.",
   cost:new Decimal("1e530"),
   unlocked() { return (hasUpgrade("A", 65))},
  },
  82: {
   title:"B37",
   description: "Ab2 effect x1.35.",
   cost:new Decimal("2e530"),
   unlocked() { return (hasUpgrade(this.layer, 81))},
  },
  83: {
   title:"B38",
   description: "Eb12 affects Abs.",
   cost:new Decimal("2.5e692"),
   unlocked() { return (hasUpgrade("E",64))},
  },
  84: {
   title:"B39",
   description: "Boost E directly based on total Bb amount beyond 6300.<br>(with Ab2 effect)",
   cost:new Decimal("6.97e697"),
   effect() {
  let eff=gba("B",11).add(gba("B",12)).add(gba("B",13)).add(gba("B",21)).add(gba("B",22)).add(gba("B",23)).add(buyableEffect("A",12).mul(6)).sub(6300).max(1).pow(0.6)
  if(eff.gte(10)) eff=eff.div(10).pow(0.5).mul(10)//Sc146
  return eff
   },
   tooltip() {return "Amount:"+format(gba("B",11).add(gba("B",12)).add(gba("B",13)).add(gba("B",21)).add(gba("B",22)).add(gba("B",23)).add(buyableEffect("A",12).mul(6)))},
   effectDisplay() { return format(this.effect())+"x"},
   unlocked() { return (hasUpgrade("B",83))},
  },
  85: {
   title:"B40",
   description: "Ec1-4 effect ^1.2.",
   cost:new Decimal("7e700"),
   unlocked() { return (hasUpgrade("B",84))},
  },
  86: {
   title:"B40.5",
   description: "E21, E26, E28 and E30 ^1.5.",
   cost:new Decimal("2e704"),
   unlocked() { return (hasUpgrade("B",85))},
  },
  },
  automate(){
  if (player.B.auto&&hasMilestone("B",2)) {
   layers.B.buyables[11].buyMax()  ;
   layers.B.buyables[12].buyMax()  ;
   layers.B.buyables[13].buyMax()  ;
   layers.B.buyables[21].buyMax()  ;
   layers.B.buyables[22].buyMax()  ;
   layers.B.buyables[23].buyMax()  ;
  }
  },
  buyables:{
  11: {
   title: "Bb1", 
   baseCost() {
  let cost = n(1e23)
  if(hasUpgrade("A",65)) cost=n(1)
  cost=cost.div(buyableEffect("E",24))
  return cost
   },
   cost(x=player[this.layer].buyables[this.id]) {
  let cost = n(this.baseCost()).mul(n(4).pow(x.pow(1.2)))
  return cost
   },
   canAfford() { return player[this.layer].points.gte(this.cost()) },
   buy() {
   if (!hasMilestone("B",0)) player[this.layer].points = player[this.layer].points.sub(this.cost())
   setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
   buyMax() {
   if (!this.canAfford()) return;
			 	let tempBuy = player.B.points.div(this.baseCost()).max(0).max(1).log(4).root(1.2)
   let target = tempBuy.plus(1).floor();
   player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target).min(player.B.Bblim)
				},
   base(){   let bas = n(3)
   if (hasUpgrade("D",36)) bas = bas.add(ue("D",36))
   if(hasChallenge("D",11)) bas = bas.mul(2)
   
   if(hasUpgrade("A",54)) bas=bas.pow(ue("A",54))
   if (inChallenge("E",12)) bas = n(1)
   bas=n(bas)
   if(bas.gte(1e5)) bas=bas.div(1e5).pow(0.2).mul(1e5)//Sc75
  return bas
   },
   effect(x=player[this.layer].buyables[this.id]) { 
  if(gba("A",12)) x=x.add(buyableEffect("A",12))
   let eff = Decimal.pow(this.base(),x)
   eff=eff.mul(buyableEffect("A",11))
   if(hasMilestone("B",1)) eff=eff.pow(1.2)
   if(inChallenge("D",12)) eff=n("1e-4")
   if(inChallenge("E",31)) eff=n(1)
   return eff},
   display() { 
  let a = format(gba(this.layer,this.id))
  if(gba("A",12).gt(0)) a = a+"+"+format(buyableEffect("A",12))+"="+format(gba(this.layer,this.id).add(buyableEffect("A",12)))
   return "give A a x"+ format(this.base()) + " mult<br>Cost: " + format(this.cost()) + " B<br>Amount: " +  a +"<br>  Effect: x" + format(this.effect()) + " A" },
   purchaseLimit() {return player.B.Bblim},
   unlocked() { return hasMilestone("D",2) }
  },
  12: {
   title: "Bb2", 
   baseCost() {
  let cost = n(1e31)
  if(hasUpgrade("A",65)) cost=n(1)
  cost=cost.div(buyableEffect("E",24))
  return cost
   },
   cost(x=player[this.layer].buyables[this.id]) {
  let cost = n(this.baseCost()).mul(n(2).pow(x.pow(1.25)))
  return cost
   },
   canAfford() { return player[this.layer].points.gte(this.cost()) },
   buy() {
   if (hasMilestone("B",0)) player[this.layer].points = player[this.layer].points.sub(0)
   else player[this.layer].points = player[this.layer].points.sub(this.cost())
   setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
   buyMax() {
   if (!this.canAfford()) return;
   let tempBuy = player.B.points.div(this.baseCost()).max(0).max(1).log(2).root(1.25)
   let target = tempBuy.plus(1).floor();
   player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target).min(player.B.Bblim)
				},
   base(){   let bas = n(3)
   if (hasUpgrade("D",36)) bas = bas.add(ue("D",36))
   if(hasUpgrade("B",43)) bas=bas.mul(2)
   if(hasChallenge("D",11)) bas = bas.mul(2)
   if(hasUpgrade("A",54)) bas=bas.pow(ue("A",54))
   
   if (inChallenge("E",12)) bas = n(1)
   
   if(bas.gte(1e5)) bas=bas.div(1e5).pow(0.2).mul(1e5)//Sc76
   return bas},
   effect(x=player[this.layer].buyables[this.id]) { 
   if(gba("A",12)) x=x.add(buyableEffect("A",12))
   let eff = Decimal.pow(this.base(), x)
   eff=eff.mul(buyableEffect("A",11))
   if(hasMilestone("B",1)) eff=eff.pow(1.2)
   if(inChallenge("D",12)) eff=n("1e-4")
   if(inChallenge("E",31)) eff=n(1)
   return eff},
   display() { 
  let a = format(gba(this.layer,this.id))
  if(gba("A",12).gt(0)) a = a+"+"+format(buyableEffect("A",12))+"="+format(gba(this.layer,this.id).add(buyableEffect("A",12)))
   return "give B a x" + format(this.base()) + " mult <br>Cost: " + format(this.cost()) + " B<br>Amount: " + a  +"<br> Effect: x" + format(this.effect()) + " B" },
   purchaseLimit() {return player.B.Bblim},
   unlocked() { return hasUpgrade("B",41) },
  },
  13: {
   title: "Bb2.5", 
   baseCost() {
  let cost = n(1e33)
  if(hasUpgrade("A",65)) cost=n(1)
  cost=cost.div(buyableEffect("E",24))
  return cost
   },
   cost(x=player[this.layer].buyables[this.id]) {
  let cost = n(this.baseCost()).mul(n(2).pow(x.pow(1.2)))
  return cost
   },
   canAfford() { return player[this.layer].points.gte(this.cost()) },
   buy() {
   if (hasMilestone("B",0)) player[this.layer].points = player[this.layer].points.sub(0)
   else player[this.layer].points = player[this.layer].points.sub(this.cost())
   setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
   buyMax() {
   if (!this.canAfford()) return;
   let tempBuy = player.B.points.div(this.baseCost()).max(0).max(1).log(2).root(1.2)
   let target = tempBuy.plus(1).floor();
   player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target).min(player.B.Bblim)
				},
   effect(x=player[this.layer].buyables[this.id]) { 
   if(gba("A",12)) x=x.add(buyableEffect("A",12))
   if(hasChallenge("D",11)) x=x.mul(2)
   if(hasUpgrade("B",43)) x=x.pow(1.25)
   if(hasMilestone("B",1)) x=x.pow(2)
   if(inChallenge("D",12)) x=n(-1)
   if(inChallenge("E",31)) eff=n(0)
   return x},
   display() { 
  let a = format(gba(this.layer,this.id))
  if(gba("A",12).gt(0)) a = a+"+"+format(buyableEffect("A",12))+"="+format(gba(this.layer,this.id).add(buyableEffect("A",12)))
   return "D6 effect base +" + format(this.effect()) + "<br>Cost: " + format(this.cost()) + " B<br>Amount: " + a },
   purchaseLimit() {return player.B.Bblim},
   unlocked() { return hasUpgrade("B",42) },
  },
  21: {
   title: "Bb3", 
   baseCost() {
  let cost = n(1e33)
  if(hasUpgrade("A",65)) cost=n(1)
  cost=cost.div(buyableEffect("E",24))
  return cost
   },
   cost(x=player[this.layer].buyables[this.id]) {
  let cost = n(this.baseCost()).mul(n(3).pow(x.pow(1.2)))
  return cost
   },
   canAfford() { return player[this.layer].points.gte(this.cost()) },
   buy() {
   if (hasMilestone("B",0)) player[this.layer].points = player[this.layer].points.sub(0)
   else player[this.layer].points = player[this.layer].points.sub(this.cost())
   setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
   buyMax() {
   if (!this.canAfford()) return;
   let tempBuy = player.B.points.div(this.baseCost()).max(0).max(1).log(3).root(1.2)
   let target = tempBuy.plus(1).floor();
   player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target).min(player.B.Bblim)
				},
				base(){   let base = n(3)
				if (hasUpgrade("D",36)&&hasUpgrade("B",42)) base = base.add(ue("D",36))
				if(hasChallenge("D",11)) base = base.mul(2)
				if(hasUpgrade("B",65)) base = base.mul(2)
				if(hasUpgrade("A",55)) base=base.pow(ue("A",55))
				if(base.gte(1e5)) base=base.div(1e5).pow(0.2).mul(1e5)//Sc83
				return base
				},
				effect(x=player[this.layer].buyables[this.id]) { 
   if(gba("A",12)) x=x.add(buyableEffect("A",12))
   let eff = Decimal.pow(this.base(), x)
   eff=eff.mul(buyableEffect("A",11))
   if(hasMilestone("B",1)) eff=eff.pow(1.2)
   if(inChallenge("D",12)) eff=n("1e-4")
   if(inChallenge("E",31)) eff=n(1)
   return eff},
   display() { 
  let a = format(gba(this.layer,this.id))
  if(gba("A",12).gt(0)) a = a+"+"+format(buyableEffect("A",12))+"="+format(gba(this.layer,this.id).add(buyableEffect("A",12)))
   return "give C a x" + format(this.base()) + " mult <br>Cost: " + format(this.cost()) + " B<br>Amount: " + a  +"<br> Effect: x" + format(this.effect()) + " C" },
   purchaseLimit() {return player.B.Bblim},
   unlocked() { return hasUpgrade("B",42) }
  },
  22: {
   title: "Bb4", 
   baseCost() {
  let cost = n(1e50)
  if(hasUpgrade("A",65)) cost=n(1)
  cost=cost.div(buyableEffect("E",24))
  return cost
   },
   cost(x=player[this.layer].buyables[this.id]) {
  let cost = n(this.baseCost()).mul(n(3).pow(x.pow(1.25)))
  return cost
   },
   canAfford() { return player[this.layer].points.gte(this.cost()) },
   buy() {
   if (hasMilestone("B",0)) player[this.layer].points = player[this.layer].points.sub(0)
   else player[this.layer].points = player[this.layer].points.sub(this.cost())
   setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
   buyMax() {
   if (!this.canAfford()) return;
   let tempBuy = player.B.points.div(this.baseCost()).max(0).max(1).log(3).root(1.25)
   let target = tempBuy.plus(1).floor();
   player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target).min(player.B.Bblim)
				},
				base(){   let base = n(3)
				if (hasUpgrade("D",36)&&hasUpgrade("B",46)) base = base.add(ue("D",36))
				if(hasChallenge("D",11)) base = base.mul(2)
				if(hasUpgrade("B",65)) base = base.mul(2)
				if(hasUpgrade("A",55)) base=base.pow(ue("A",55))
				if(base.gte(1e5)) base=base.div(1e5).pow(0.2).mul(1e5)//Sc84
				return base
				},
				effect(x=player[this.layer].buyables[this.id]) { 
   if(gba("A",12)) x=x.add(buyableEffect("A",12))
   let eff = Decimal.pow(this.base(), x)
   eff=eff.mul(buyableEffect("A",11))
   if(inChallenge("D",12)) eff=n("1e-4")
   if(inChallenge("E",31)) eff=n(1)
   return eff},
   display() { 
  let a = format(gba(this.layer,this.id))
  if(gba("A",12).gt(0)) a = a+"+"+format(buyableEffect("A",12))+"="+format(gba(this.layer,this.id).add(buyableEffect("A",12)))
   return "give D a x" + format(this.base()) + " mult <br>Cost: " + format(this.cost()) + " B<br>Amount: " + a  +"<br> Effect: x" + format(this.effect()) + " D" },
   purchaseLimit() {return player.B.Bblim},
   unlocked() { return hasUpgrade("B",45) }
  },
  23: {
   title: "Bb5", 
   baseCost() {
  let cost = n(1e60)
  if(hasUpgrade("A",65)) cost=n(1)
  cost=cost.div(buyableEffect("E",24))
  return cost
   },
   cost(x=player[this.layer].buyables[this.id]) {
  let cost = n(this.baseCost()).mul(n(2).pow(x.pow(1.5)))
  return cost
   },
   canAfford() { return player[this.layer].points.gte(this.cost()) },
   buy() {
   if (hasMilestone("B",0)) player[this.layer].points = player[this.layer].points.sub(0)
   else player[this.layer].points = player[this.layer].points.sub(this.cost())
   setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
   buyMax() {
   if (!this.canAfford()) return;
   let tempBuy = player.B.points.div(this.baseCost()).max(0).max(1).log(2).root(1.5)
   let target = tempBuy.plus(1).floor();
   player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target).min(player.B.Bblim)
				},
				base(){   let base = n(10)
				if (hasUpgrade("D",36)&&hasUpgrade("A",56)) base = base.add(ue("D",36))
				if(hasChallenge("D",11)) base = base.mul(2)
				if(hasUpgrade("A",56)) base=base.pow(ue("A",56))
				if(hasUpgrade("B",65)) base = base.mul(2)
				if(base.gte(100)) base=base.div(100).pow(0.5).mul(100)//Sc80
				return base
				},
				effect(x=player[this.layer].buyables[this.id]) { 
			if(gba("A",12)) x=x.add(buyableEffect("A",12))
   let eff = Decimal.pow(this.base(), x)
   if(hasMilestone("B",1)) eff=eff.pow(1.2)
   if(inChallenge("D",12)) eff=n("1e-4")
   if(inChallenge("E",31)) eff=n(1)
   if(eff.gte("1e1024")) eff=eff.div("1e1024").pow(0.1).mul("1e1024")//Sc96
   return eff},
   display() { 
  let a = format(gba(this.layer,this.id))
  if(gba("A",12).gt(0)) a = a+"+"+format(buyableEffect("A",12))+"="+format(gba(this.layer,this.id).add(buyableEffect("A",12)))
   return "give Points a x" + format(this.base()) + " mult <br>Cost: " + format(this.cost()) + " B<br>Amount: " + a  +"<br> Effect: x" + format(this.effect()) + " Points" },
   purchaseLimit() {return player.B.Bblim},
   unlocked() { return hasUpgrade("B",51) }
  },
  }
})//B
addLayer("C", {
  name: "C", 
  symbol: "C", 
  position: 0, 
  startData() { return {
  unlocked: false,
		points: new Decimal(0),
  }},
  passiveGeneration(){  let c_pg=1
  if(hasMilestone("D", 1)) c_pg=c_pg+1
  if (hasMilestone("D", 2))  c_pg=c_pg*10
  if (hasMilestone("B", 5))  c_pg=c_pg*100
  return (hasUpgrade("C", 21))?c_pg:0},
  color: "#A73E16",
  requires: new Decimal(1e12), 
  resource: "C", 
  baseResource: "points", 
  baseAmount() {return player.points}, 
  type: "normal", 
  exponent: 0.15, 
  gainExp() {
  return new Decimal(1)
  },
  row: 1, 
  hotkeys: [
  {key: "c", description: "C: Reset for C points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
  ],
  layerShown(){  if (player.C.unlocked) return true
  else return (hasChallenge("A", 22))},
  gainMult() { 
  mult = new Decimal(1)
  mult = mult.mul(hasChallenge("A", 31)?2:1)
  mult = mult.mul(hasUpgrade("C",21)?10:1)
  mult = mult.mul(hasUpgrade("C",25)?50:1)
  mult = mult.mul(hasUpgrade("C",26)?10:1)
  mult = mult.mul(hasUpgrade("A",61)?ue("A",61):1)
  mult = mult.mul(hasUpgrade("s",16)?ue("s",16):1)
  mult = mult.mul(hasUpgrade("D",26)?ue("D",26):1)
  mult = mult.mul(hasUpgrade("E",95)?ue("E",95):1)
  mult = mult.mul(hasUpgrade("E",93)?ue("E",93):1)
  mult = mult.mul(buyableEffect("B",21))
  mult = mult.pow(hasUpgrade("A",45)?1.5:1)
  mult = mult.pow(hasUpgrade("A",46)?1.5:1)
  mult = mult.pow(hasUpgrade("C",24)?1.5:1)
  
  
  if(mult.gte(10)) mult=mult.div(10).pow(0.5).mul(10)//Sc33
  if(mult.gte(1e5)) mult=mult.div(1e5).pow(0.2).mul(1e5)//Sc41
  if(mult.gte(1e9)) mult=mult.div(1e9).pow(0.4).mul(1e9)//Sc57
  if(mult.gte(1e20)) mult=mult.div(1e20).pow(0.3).mul(1e20)//Sc67
  if(mult.gte(1e60)) mult=mult.div(1e60).pow(0.6).mul(1e60)//Sc87
  if(mult.gte(1e100)) mult=mult.div(1e100).pow(0.8).mul(1e100)//Sc94
  return mult
  },
  directMult() {
   let mult = n(1)
   mult = mult.mul(buyableEffect("E",13))
   if(hasUpgrade("E",22)) mult=mult.mul(ue("E",22)[0])
   if(hasUpgrade("E",31)) mult=mult.mul(ue("E",31))
   if(hasUpgrade("s",16)&&hasMilestone("E",6)) mult=mult.mul(ue("s",16))
   if (hasChallenge("E", 22)) mult=mult.mul(challengeEffect("E",22)[0])
   mult = mult.mul(hasUpgrade("E", 82)?ue("E",82):1)  
   return mult
  },
  branches: ["A","B"],
  resetsNothing() {return hasMilestone("C",0)},
  milestones: {
  0: {requirementDescription: "3 total C",
  done() {return player[this.layer].total.gte(3)}, 
  effectDescription: "C resets nothing",
  },
  1: {requirementDescription: "30 total C",
  done() {return player[this.layer].total.gte(30)}, 
  effectDescription: "10x A passive.",
  },
  2: {requirementDescription: "1e6 total C",
  done() {return player[this.layer].total.gte("1e6")}, 
  effectDescription: "10x A passive,2x B passive.",
  },
  3: {requirementDescription: "5e11 total C",
  done() {return player[this.layer].total.gte("5e11")}, 
  effectDescription: "1000x points, 1000x B passive,unlock D.",
  },
  },
  microtabs: {
  stuff: {   
  "Upgrades": {
  unlocked() {return true},
  content: [ "upgrades"]}, 
  "Milestones": {
  unlocked() {return true},
  content: ["milestones"]  },
  "Challenges": {
  unlocked() {return (hasUpgrade("D",15))},
  content: ["challenges"]  },
  }
  },
  tabFormat: [ ["infobox","introBox"],
  "main-display","resource-display",,
  "prestige-button",
  ["microtabs", "stuff"],
  ["blank", "25px"],
  ],
  upgrades: {
  11: {
  title:"C1",
  description: function() {return "100x points, 1x B passive generation.<br>layer C total: <br>" +format(this.effect()) +"x"},
  effect()  { 
  let eff = 100
  let exp = 0.4
  if (hasUpgrade("C",12)) eff = eff*20
  if (hasUpgrade("C",15)) eff = eff*200
  if (hasUpgrade("C",24)) eff = eff*1e20
  if (hasUpgrade("C",25)) eff = eff*1e30
  if (hasMilestone("C",3)) eff = eff*1000
  if (inChallenge("C",11))  eff = 1
  if(n(eff).gte(1e5)) eff=n(eff).div(1e5).pow(0.4).mul(1e5)//Sc28
  if(n(eff).gte(1e10)) eff=n(eff).div(1e10).pow(0.4).mul(1e10)//Sc40
  eff=n(eff)
  return eff;  
  },
  cost:new Decimal(1),
  },
  12: {
  title:"C2",
  description: "20x points, 10x A and B",
  cost:new Decimal(1),
  unlocked() { return (hasUpgrade(this.layer, 11))},

  },
  13: {
  title:"C3",
  description: "C^5 boosts points.",
  cost: new Decimal(10),
  unlocked() { return (hasUpgrade(this.layer, 12))},
  effect()  { 
  let effp = 5
  if (hasUpgrade("C",23))  effp = effp*5
  if (inChallenge("C",11))  effp = 0
  eff=player[this.layer].points.max(1).pow(effp);
  if (hasUpgrade("s",15)) eff = eff.pow(ue("s",15))
  if(eff.gte(1e5)) eff=eff.div(1e5).pow(0.25).mul(1e5)//Sc26
  if(eff.gte(1e10)) eff=eff.div(1e10).pow(0.25).mul(1e10)//Sc31
  if(eff.gte(1e20)) eff=eff.div(1e20).pow(0.25).mul(1e20)//Sc38
  return eff
  },
  effectDisplay() { return format(this.effect())+"x" }, 
  },
  14: {
  title:"C4",
  description: "B6^15.",
  cost:new Decimal(25),
  unlocked() { return (hasUpgrade(this.layer, 13))},
  },
  15: {
  title:"C5",
  description: "200x points.<br>unlock a new chal.",
  cost:new Decimal(50),
  unlocked() { return (hasUpgrade(this.layer, 14))},
  },
  16: {
  title:"C5.5",
  description: "Softcap Points ^2",
  cost:new Decimal(250),
  unlocked() { return (hasUpgrade(this.layer, 15))},
  },
  21: {
  title:"C6",
  description: "10x C and 1x C passive generation.",
  cost:new Decimal(5e3),
  unlocked() { return (hasUpgrade(this.layer, 15))},
  },
  22: {
  title:"C7",
  description: "B6 ^10.",
  cost:new Decimal(2e6),
  unlocked() { return (hasUpgrade(this.layer, 21))},
  },
  23: {
  title:"C8",
  description: "C3 ^5.",
  cost:new Decimal(3e6),
  unlocked() { return (hasUpgrade(this.layer, 22))},
  },
  24: {
  title:"C9",
  description: "1e20x points and C^1.5.",
  cost:new Decimal(1e8),
  unlocked() { return (hasUpgrade(this.layer, 23))},
  },
  25: {
  title:"C10",
  description: "1e30x points,50x B and C.",
  cost:new Decimal(3e9),
  unlocked() { return (hasUpgrade(this.layer, 24))},
  },
  26: {
  title:"C10.5",
  description: "10x C and Softcap Points ^3",
  cost:new Decimal(5e10),
  unlocked() { return (hasUpgrade(this.layer, 25))},
  },
  31: {
  title:"C11",
  description: "E5.5 and E7 ^2.",
  cost:new Decimal("1e235"),
  unlocked() { return hasUpgrade("E",31)},
  },
  32: {
  title:"C12",
  description: "Boost E based on C upgrade amount.",
  cost:new Decimal("1e240"),
  effect()  { 
  let bas=1.5
  let a=n(player.C.upgrades.length).sqrt(0.5)
  let eff = Decimal.pow(bas,a)
  if(eff.gte(2)) eff=eff.div(2).pow(0.5).mul(2)//Sc112
  return eff;  
  },
  unlocked() { return (hasUpgrade("C", 31))},
  effectDisplay() { return format(ue(this.layer, this.id))+"x" }, 
  },
  33: {
  title:"C13",
  description: "E3 and E4 boosts each other.<br>(beffore exponents)",
  cost:new Decimal("1e245"),
  effect()  { 
  let eff0=ue("E",14).pow(0.6)
  let eff1=ue("E",13).pow(0.6)
  if(eff0.gte(2)) eff0=eff0.div(2).pow(0.5).mul(2)//Sc115
  if(eff1.gte(2)) eff1=eff1.div(2).pow(0.5).mul(2)//Sc116
  return [eff0,eff1]
  },
  unlocked() { return (hasUpgrade(this.layer, 32))},
  effectDisplay() { return format(ue("C",33)[0],3)+"x E3 and "+format(ue("C",33)[1],3)+"x E4" }, 
  },
  34: {
  title:"C14",
  description: "Unlock Eb4. B gainMult^1.1",
  cost:new Decimal("1e248"),
  unlocked() { return (hasChallenge("E", 12))},
  },
  35: {
  title:"C15",
  description: "E3 and E4 ^1.2. Eb3 and Eb4 base +0.5.",
  cost:new Decimal("1e250"),
  unlocked() { return (hasUpgrade(this.layer, 34))},
  },
  36: {
  title:"C15.5",
  description: "E5.5, E7 and E11 ^1.5",
  cost:new Decimal("5.25e252"),
  unlocked() { return (hasUpgrade(this.layer, 35))},
  },
  },
  challenges: {
  11: {
  name: "Cc1",
  completionLimit: 1,
  challengeDescription() {return "Reset your points and points ^0.45,C1-C10 are disabled."},
  unlocked() { return (hasUpgrade("D",15))},
  goalDescription: "5e18 points.",
  onEnter() {player.points=n(0)},
  canComplete() {return player.points.gte(5e18)},
  rewardDescription: "x1000 points(ignore most challenge effects) and Softcap points ^1.1, unlock more A upgrades.",
  },
  12: {
  name: "Cc2",
  completionLimit: 1,
  challengeDescription() {return "Reset your points and D1-D5 are disabled."},
  unlocked() { return (hasUpgrade("A",52))},
  onEnter() {player.points=n(0)},
  goalDescription: "1e42 points.",
  canComplete() {return player.points.gte(1e42)},
  rewardDescription: "x8000 points(ignore most challenge effects), A ^1.025.",
  },
  }
})//C
addLayer("D", {
  name: "D", 
  symbol: "D", 
  position: 1, 
  startData() { return {
  unlocked: false,
		points: new Decimal(0),
  }},
  passiveGeneration(){  let d_pg=20
  if(hasMilestone("B",5)) d_pg=100
  return (hasMilestone("D",0))?d_pg:0},
  color: "#720202",
  requires: new Decimal(1e12), 
  resource: "D", 
  baseResource: "C", 
  baseAmount() {return player.C.points}, 
  type: "normal", 
  exponent: 0.2, 
  gainExp() {
  return new Decimal(1)
  },
  row: 1, 
  hotkeys: [
  {key: "d", description: "D: Reset for D points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
  ],
  layerShown(){  if (player.D.unlocked) return true
  else return (hasMilestone("C", 3))},
  gainMult() { 
  mult = new Decimal(1)
  mult = mult.mul(hasUpgrade("s",21)?ue("s",21):1)
  mult = mult.mul(hasUpgrade(this.layer,12)?2:1)
  mult = mult.mul(hasUpgrade(this.layer,13)?2:1)
  mult = mult.mul(hasUpgrade("A",61)?ue("A",61):1)
  mult = mult.mul(hasUpgrade("D",32)?ue("D",32):1)
  mult = mult.mul(buyableEffect("B",22))
  mult = mult.mul(hasUpgrade("E",93)?ue("E",93):1)
  
  
  mult = mult.pow(hasUpgrade("A",52)?1.5:1)
  mult = mult.pow(hasChallenge("A",32)?1.5:1)
  
  if(mult.gte(1e4)) mult=mult.div(1e4).pow(0.4).mul(1e4)//Sc56
  if(mult.gte(1e10)) mult=mult.div(1e10).pow(0.4).mul(1e10)//Sc66
  if(mult.gte(1e20)) mult=mult.div(1e20).pow(0.1).mul(1e20)//Sc68
  if(mult.gte(1e30)) mult=mult.div(1e30).pow(0.5).mul(1e30)//Sc79
  return mult
  },
  directMult() {
   let mult = n(1)
   mult = mult.mul(buyableEffect("E",13))
   if(hasUpgrade("E",22)) mult=mult.mul(ue("E",22)[1])
   if(hasUpgrade("s",21)&&hasMilestone("E",6)) mult=mult.mul(ue("s",21))
   if (hasChallenge("E", 22)) mult=mult.mul(challengeEffect("E",22)[1])
   mult = mult.mul(hasUpgrade("E", 82)?ue("E",82):1)  
   return mult
  },
  branches: ["C"],
  canReset() {return !hasMilestone("D",0)},
  resetsNothing() {return true},
  milestones: {
  0: {requirementDescription: "100 total D",
  done() {return player[this.layer].total.gte(100)}, 
  effectDescription: "20x D passive but disable D prestige.",
  },
  1: {requirementDescription: "2500 total D",
  done() {return player[this.layer].total.gte(2500)}, 
  effectDescription: "100x A/B passive,1x C passive.",
  },
  2: {requirementDescription: "1e6 total D",
  done() {return player[this.layer].total.gte("1e6")}, 
  effectDescription: "1e4x A, 1000x B and 10x C passive,unlock B buyable.",
  },
  3: {requirementDescription: "1e10 total D",
  done() {return player[this.layer].total.gte("1e10")}, 
  effectDescription: "1e5x A,unlock a chal.",
  },
  4: {requirementDescription: "6e666 total D",
  done() {return player[this.layer].total.gte(6e666)}, 
  effectDescription: "D17 base +0.05.",
  },
  },
  microtabs: {
  stuff: {  
  "Upgrades": {
  unlocked() {return true},
  content: [ "upgrades"]}, 
  "Milestones": {
  unlocked() {return true},
  content: ["milestones"]  },
  "Challenges": {
  unlocked() {return hasUpgrade("B",56)},
  content: ["challenges"]  },
  }
  },
  tabFormat: [ ["infobox","introBox"],
  "main-display","resource-display",
  "prestige-button",
  ["microtabs", "stuff"],
  ["blank", "25px"],
  ],
  upgrades: {
  11: {
  title:"D1",
  description: function() {return "1000x points.<br>layer D total:<br>"+ format(this.effect()) +"x"},
  effect()  { 
  let eff = 1000
  let exp = 0.4
  if (hasUpgrade("D",14)) eff = eff*10000
  if (hasUpgrade("D",25)) eff = eff*10000
  if (hasUpgrade("D",41)) eff = eff*1e7
  if (inChallenge("C",12)) eff = 1
  if (hasUpgrade("s",22)) eff=n(eff).pow(ue("s",22))
  if (hasUpgrade("D",25)) eff=n(eff).pow(ue("D",25))
  eff=n(eff)
  if(eff.gte(1e6)) eff=eff.div(1e6).pow(0.5).mul(1e6)//Sc45
  if(eff.gte(1e20)) eff=eff.div(1e20).pow(0.25).mul(1e20)//Sc52
  if(eff.log10().gte(100)) eff = n(10).pow(eff.log10().sub(100).pow(0.1).add(100))//Sc58
  if(eff.log10().gte(1e7)) eff = n(10).pow(eff.log10().sub(1e7).pow(0.1).add(1e7))//Sc124
  if(hasUpgrade("s",32)) eff=eff.pow(ue("s",32))
  return eff;  
  },
  cost:new Decimal(10),
  },
  12: {
  title:"D2",
  description: "2x D.",
  cost:new Decimal(20),
  unlocked() { return (hasUpgrade(this.layer, 11))},
  },
  13: {
  title:"D3",
  description: "2x D.",
  cost:new Decimal(50),
  unlocked() { return (hasUpgrade(this.layer, 12))},
  },
  14: {
  title:"D4",
  description: "10000x points.",
  cost:new Decimal(2000),
  unlocked() { return (hasUpgrade(this.layer, 13))},
  },
  15: {
  title:"D5",
  description: "D^0.8 boosts points.<br>unlock a C chal.",
  cost: new Decimal(3000),
  unlocked() { return (hasUpgrade(this.layer, 14))},
  effect()  { 
  let effpow = 0.8
  if (inChallenge("C",12))  effpow = 0
  let eff=n(player[this.layer].points.max(1).pow(effpow))
  if (hasUpgrade("D",23)) eff=eff.pow(2)
  if(eff.gte(1e3)) eff=eff.div(1e3).pow(0.5).mul(1e3)//Sc46
  if(eff.gte(1e5)) eff=eff.div(1e5).pow(0.5).mul(1e5)//Sc51
  return eff
  },
  effectDisplay() { return format(this.effect())+"x" },
  },
  16: {
  title:"D5.5",
  description: "D^0.1 boosts Softcap points. (beffore exp and softcaps).<br>unlock more Softcap Upgrades.",
  cost: new Decimal(4000),
  unlocked() { return (hasUpgrade(this.layer, 15))},
  effect()  { 
  let effpow = 0.1
  let eff=n(player[this.layer].points.max(1).pow(effpow))
  return eff
  },
  effectDisplay() { return format(this.effect())+"x" },
  },
  21: {
  title:"D6",
  description: "D upg boosts points.<br> (base is 2, can be boosted by Bbs).",
  cost:new Decimal(1e6),
  effect()  { 
  let a=player.D.upgrades.length
  let base = n(2).add(buyableEffect("B",13))
  let eff = Decimal.pow(base,a)
  if(eff.gte(1e10)) eff=eff.div(1e10).pow(0.5).mul(1e10)//Sc62
  if(eff.gte(1e20)) eff=eff.div(1e20).pow(0.5).mul(1e20)//Sc64
  return eff;  
  },
  unlocked() { return (hasUpgrade("A", 52))},
  effectDisplay() { return format(ue(this.layer, this.id))+"x" }, 
  },
  22: {
  title:"D7",
  description: "B ^1.2.",
  cost:new Decimal(1.2e6),
  unlocked() { return (hasUpgrade(this.layer, 21))},
  },
  23: {
  title:"D8",
  description: "D5 ^2.",
  cost:new Decimal(1.5e6),
  unlocked() { return (hasUpgrade(this.layer, 22))},
  },
  24: {
  title:"D9",
  description: "Softcap Points boosts Softcap Points",
  cost:new Decimal(1.8e6),
  effect()  { 
  let effd9 = player.s.points.add(1)
  if(hasUpgrade("D",34)) effd9=effd9.pow(2)
  return effd9;  
  },
  effectDisplay() { return format(ue(this.layer, this.id))+"x" }, 
  unlocked() { return (hasUpgrade(this.layer, 23))},
  },
  25: {
  title:"D10",
  description: "D boosts D1",
  tooltip:"From now on, the D upgrades will bring a lot of softcaps",
  effect()  { 
  let eff = player.D.points.add(1).pow(0.5).div(1e3).add(1)
  if(hasUpgrade("s",23)) eff=eff.pow(ue("s",23))
  if(hasUpgrade("E",41)) eff=eff.pow(1.1)
  if(eff.gte(1e5)) eff=eff.div(1e5).pow(0.25).mul(1e5)//Sc60
  return eff;  
  },
  effectDisplay() { return "^"+format(ue(this.layer, this.id))}, 
  cost:new Decimal(2e6),
  unlocked() { return (hasUpgrade(this.layer, 24))},
  },
  26: {
  title:"D10.5",
  description: "D ^1.25 boosts C",
  tooltip:"It will be… incredible",
  effect()  { 
  let eff = player.D.points.add(1).pow(1.25)
  if(eff.gte(1e8)) eff=eff.div(1e8).pow(0.5).mul(1e8)//Sc53
  return eff;  
  },
  effectDisplay() { return format(ue(this.layer, this.id))+"x"}, 
  cost:new Decimal(2.25e6),
  unlocked() { return (hasUpgrade(this.layer, 25))},
  },
  31: {
  title:"D11",
  description: "D10.5's effect^0.5 boosts A and B",
  cost:new Decimal(6e6),
  effect()  { 
  let eff = ue("D",26).pow(0.5)
  return eff;  
  },
  effectDisplay() { return format(ue(this.layer, this.id))+"x"}, 
  unlocked() { return (hasUpgrade(this.layer, 26))},
  },
  32: {
  title:"D12",
  description: "D^0.3 boosts D.",
  cost:new Decimal(8e6),
  effect()  { 
  let eff = player.D.points.max(1).pow(0.3)
  if(hasUpgrade("D",35)) eff=eff.pow(2)
  if(eff.gte(10)) eff=eff.div(10).pow(0.5).mul(10)//Sc55
  if(eff.gte(1e4)) eff=eff.div(1e4).pow(0.5).mul(1e4)//Sc61
  return eff;  
  },
  effectDisplay() { return format(ue(this.layer, this.id))+"x" }, 
  unlocked() { return (hasUpgrade(this.layer, 31))},
  },
  33: {
  title:"D13",
  description: "1e10x A.",
  cost:new Decimal("3e9"),
  unlocked() { return (hasUpgrade(this.layer, 32))},
  },
  34: {
  title:"D14",
  description: "D9 ^2.",
  cost:new Decimal("6e10"),
  unlocked() { return (hasUpgrade(this.layer, 33))},
  },
  35: {
  title:"D15",
  description: "D12 ^2 and unlock more B upgrades.",
  cost:new Decimal("7.5e10"),
  unlocked() { return (hasUpgrade(this.layer, 34))},
  },
  36: {
  title:"D15.5",
  description: "D boosts Bb1-2's base.",
  cost:new Decimal("1e13"),
  effect()  { 
  let eff = player.D.points.max(1).log(5).pow(0.5)
  if(hasUpgrade("B",42)) eff=eff.pow(2)
  if(hasUpgrade("B",46)) eff=eff.pow(1.25)
  if(hasUpgrade("B",54)) eff=eff.pow(1.5)
  if(hasUpgrade("s",24)) eff=eff.pow(ue("s",24))
  if(eff.gte(1e3)) eff=eff.div(1e3).pow(0.5).mul(1e3)//It should be Sc70
  return eff;  
  },
  effectDisplay() { return "+"+format(ue(this.layer, this.id)) }, 
  unlocked() { return (hasUpgrade(this.layer, 35))},
  },
  41: {
  title:"D16",
  description: "1e7x points.",
  cost:new Decimal("1e578"),
  unlocked() { return (hasUpgrade("C", 301))},
  },
  42: {
  title:"D17",
  description: "D upg boosts E.<br>(1.25^x).",
  cost:new Decimal("1e628"),
  effect()  { 
  let a=player.D.upgrades.length
  let bas =1.25
  if (hasMilestone("D",4)) bas =bas+0.05
  let eff = Decimal.pow(bas,a)
  return eff;  
  },
  unlocked() { return (hasUpgrade("C", 320))},
  effectDisplay() { return format(ue(this.layer, this.id))+"x" }, 
  },
  43: {
  title:"D18",
  description: "Eb2 amount boosts points.<br>(1.75^x).",
  cost:new Decimal("1e648"),
  effect()  { 
  let a=gba("E", 12)
  let eff = Decimal.pow(1.75,a)
  return eff;  
  },
  unlocked() { return (hasUpgrade("D", 42))},
  effectDisplay() { return format(ue(this.layer, this.id))+"x" }, 
  },
  44: {
  title:"D19",
  description: "Bb5 is cheaper.<br>(^0.98,after scaling)",
  cost:new Decimal("1e659"),
  unlocked() { return (hasUpgrade("D", 43))},
  },
  45: {
  title:"D20",
  description: "E12/E15 ^1.2。",
  cost:new Decimal("1e684"),
  unlocked() { return (hasUpgrade("D", 44))},
  },
  },
  challenges: {
  11: {
    name: "Dc1",
    completionLimit: 1,
    challengeDescription() {return "Sc72 starts at 1 point /sec and it's boosted."},
    unlocked() { return (hasUpgrade("B",56))},
    onEnter() {player.points=n(0)},
    tooltip:"Reset your points when entering.",
    goalDescription: "37.37 points /sec",
    canComplete() {return getPointGen().gte(37.37)},
    rewardDescription: "All Bbs' base x2",
  },
  12: {
    name: "Dc2",
    completionLimit: 1,
    challengeDescription() {return "All Bbs' effects are capped."},
    unlocked() { return (hasUpgrade("B",56))},
    goalDescription: "1e80 points. /sec",
    onEnter() {player.points=n(0)},
    tooltip:"Reset your points when entering.",
    canComplete() {return getPointGen().gte(1e80)},
    rewardDescription: "B Gainmult ^1.25.",
  },
  21: {
    name: "Dc3",
    completionLimit: 1,
    challengeDescription() {return "Points gain is slog(points)."},
    unlocked() { return (hasUpgrade("B",66))},
    goalDescription: "250 points.",
    onEnter() {player.points=n(0)},
    tooltip:"Reset your points when entering.",
    canComplete() {return player.points.gte(250)},
    rewardDescription: "Points ^1.1.",
  },
  22: {
    name: "Dc4",
    completionLimit: 1,
    challengeDescription() {return "Points gain is 0 /sec. You start with 10 points."},
    unlocked() { return (hasUpgrade("B",66))},
    goalDescription: "get 1e65 A gainMult.",
    onEnter() {player.points=n(10)},
    tooltip:"Reset your points to 10 when entering.",
    canComplete() {return tmp.A.gainMult.gte(1e65)},
    rewardDescription: "A and B x1e15 and A ^1.25.",
  },
  },
})//D
addLayer("E", {
  name: "E", 
  symbol: "E", 
  position: 2, 
  startData() { return {
   unlocked: false,
		points: new Decimal(0),
		 Eblim: n(40),
		 Ebpow: n(100),//Eb's cost increase power beyond 40
   Em: new Decimal(0),
   Ek: new Decimal(0),
  }},
  passiveGeneration(){  let pg=25
   if (hasMilestone("E",10)) pg=pg*2
   if (hasMilestone("E",11)) pg=pg*2
   return (hasMilestone("E", 0))?pg:0},
  color: "#789A89",
  requires: new Decimal("1e535"), 
  resource: "E", 
  baseResource: "B", 
  baseAmount() {return player.B.points}, 
  type: "normal", 
  exponent() {
   let exp=n(0.008)
   exp=exp.add(buyableEffect("E",14))
   return exp
  },
  gainExp() {
   let exp=n(1)
   if(inChallenge("E",42)) exp=n(1).mul(layers.E.challenges[42].nerf())
   return exp
  },
  resetsNothing() {return true},
  row: 1, 
  hotkeys: [
   {key: "e", description: "E: Reset for E points", onPress(){if (canReset(this.layer)&&!hasMilestone("E",10)) doReset(this.layer)}},
  ],
  layerShown(){  if (player.E.unlocked) return true
  else return (hasMilestone("B", 7))},
  gainMult() {
   mult = new Decimal(1)
   mult = mult.mul(hasUpgrade("E",12)?ue("E",12):1)
   mult = mult.mul(hasUpgrade("E",13)?ue("E",13):1)
   mult = mult.mul(hasUpgrade("E",14)?ue("E",14):1)
   mult = mult.mul(hasUpgrade("E",26)?ue("E",26):1)
   mult = mult.mul(hasUpgrade("E",21)?2:1)
   mult = mult.mul(hasUpgrade("E",23)?ue("E",23):1)
   mult = mult.mul(hasUpgrade("E",32)?ue("E",32):1)
   mult = mult.mul(hasUpgrade("E",35)?ue("E",35):1)
   mult = mult.mul(hasUpgrade("E",36)?ue("E",36):1)
   mult = mult.mul(hasUpgrade("E",51)?ue("E",51):1)
   mult = mult.mul(hasUpgrade("C",32)?ue("C",32):1)
   mult = mult.mul(hasUpgrade("D",42)?ue("D",42):1)
   mult = mult.mul(hasUpgrade("s",31)?ue("s",31):1)
   
   mult = mult.mul(hasUpgrade("E",71)?ue("E",71):1)
   mult = mult.mul(hasUpgrade("E",101)?ue("E",101):1)
   if (hasChallenge("E", 11))  mult = mult.mul(challengeEffect("E",11))
   if (hasChallenge("E", 12))  mult = mult.mul(challengeEffect("E",12))
   if (hasChallenge("E", 31))  mult = mult.pow(challengeEffect("E",31))
   if(mult.gte(1e5)) mult=mult.div(1e5).pow(0.5).mul(1e5)//Sc113
   if(mult.gte(1e10)) mult=mult.div(1e10).pow(0.75).mul(1e10)//Sc131
   return mult
  },
  directMult() {
   let mult = n(1)
   mult=mult.mul(buyableEffect("E",21))
   if(hasUpgrade("s",31)&&hasMilestone("E",6)) mult=mult.mul(ue("s",31))
   if(hasUpgrade("E",61)) mult=mult.mul(ue("E",61))
   if(hasUpgrade("E",63)) mult=mult.mul(ue("E",63))
   if(hasUpgrade("B",84)) mult=mult.mul(ue("B",84))
   mult=Decimal.mul(mult,(buyableEffect("E", 32)))
   mult = mult.mul(hasMilestone("E",11)?tmp.E.emf:1)
   return mult
  },
  branches: ["A","B","D"],
  EblimCal() {
   let lim=n(40)
   if(hasUpgrade("E",86)) lim=lim.add(ue("E",86))
   return lim
  },
  EbpowCal() {
   let pow=n(100)
   pow=n(2).add(n(98).div(tmp.E.ekf))
   return pow
  },
  update(diff) {
   player.E.Eblim=tmp.E.EblimCal
   player.E.Ebpow=tmp.E.EbpowCal
   if (hasMilestone("E", 11))  player.E.Em = player.E.Em.add(tmp.E.emgain.mul(diff))
   if (hasMilestone("E", 16))  player.E.Ek = player.E.Ek.add(tmp.E.ekgain.mul(diff))
  },
  clickables: {
   11: {
  title(){return "A Qol for mobile players."},
  display: "Hold on to auto reset for E.",
  canClick() {return !hasMilestone("E",10)},
  onClick() { doReset("E") },
  onHold() { doReset("E") },
  unlocked(){return true},
    },
  },
  milestones: {
   0: {requirementDescription: "1500 total E",
  done() {return player[this.layer].total.gte("1500")}, 
  effectDescription: "unlock E upgrades.<br>get 2500% of E every second.",
   },
   1: {requirementDescription: "40000 total E",
  done() {return player[this.layer].total.gte("40000")}, 
  effectDescription: "unlock E buyables.",
   },
   2: {requirementDescription: "1e6 total E",
  done() {return player[this.layer].total.gte("1e6")}, 
  effectDescription: "unlock E chal.",
   },
   3: {requirementDescription: "1e10 total E",
  done() {return player[this.layer].total.gte("1e10")}, 
  effectDescription: "E12 and E15 ^1.5,unlock Ec2.",
   },
   4: {requirementDescription: "1e15 total E",
  done() {return player[this.layer].total.gte("1e15")}, 
  effectDescription: "autobuy Eb1-3 and unlock Eb3.5.",
  toggles: [ ["E","auto"] ]
   },
   5: {requirementDescription: "1e31 total E",
  done() {return player[this.layer].total.gte("1e31")}, 
  effectDescription: "Eb3 base +1 and unlock Eb12.",
   },
   6: {requirementDescription: "1e34 total E",
  done() {return player[this.layer].total.gte("1e34")}, 
  effectDescription: "autobuy Eb3.5 and Eb4.<br>ScU2,6,7,13 also boosts them directly, and boosts ScU13.",
  toggles: [ ["E","auto2"] ]
   },
   7: {requirementDescription: "1e40 total E",
  done() {return player[this.layer].total.gte("1e40")}, 
  effectDescription: "auto buy Eb10,11,12.<br>unlock 2 new E chal.",
  toggles: [ ["E","auto3"] ]
   },
   8: {requirementDescription: "1e49 total E",
  done() {return player[this.layer].total.gte("1e49")}, 
  effectDescription: "unlock new E upg, Ec3 effect ^1.25.",
   },
   9: {requirementDescription: "1e60 total E",
  done() {return player[this.layer].total.gte("1e60")}, 
  effectDescription: "Ec4 effect ^1.25.",
   },
   10: {requirementDescription: "1e63 total E",
  done() {return player[this.layer].total.gte("1e63")},
  effectDescription: "10x B and 2x E passive but disable hotkeys and mobile Qol for E.",
   },
   11: {requirementDescription: "6.66e66 total E",
  done() {return player[this.layer].total.gte("6.66e66")},
  effectDescription: "2x E passive again,unlock Em.",
   },
   12: {requirementDescription: "1e110 total E",
  done() {return player[this.layer].total.gte("1e110")},
  effectDescription: "Em effect exponent +0.01. (^0.25 → ^0.26)",
   },
   13: {requirementDescription: "1e116 total E",
  done() {return player[this.layer].total.gte("1e116")}, 
  effectDescription: "autobuy Eb5-7.<br>Em effect exponent +0.01. (^0.26 → ^0.27)",
  toggles: [ ["E","auto4"] ]
   },
   14: {requirementDescription: "1e123 total E",
  done() {return player[this.layer].total.gte("1e123")}, 
  effectDescription: "unlock 2 new challenges.",
   },
   15: {requirementDescription: "1e132 total E",
  done() {return player[this.layer].total.gte("1e132")}, 
  effectDescription: "E37 ^2.",
   },
   16: {requirementDescription: "1e190 total E",
  done() {return player[this.layer].total.gte("1e190")},
  effectDescription: "unlock Ek.",
  tooltip: "Difficult, isn't it?"
   },
   17: {requirementDescription: "2.05e205 total E",
  done() {return player[this.layer].total.gte("2.05e205")}, 
  effectDescription: "unlock the last 2 E challenges.",
   },
   18: {requirementDescription: "1e260 total E",
  done() {return player[this.layer].total.gte("1e260")}, 
  effectDescription: "unlock the final buyable.",
   },
   19: {requirementDescription: "1e300 total E",
  done() {return player[this.layer].total.gte("1e300")}, 
  effectDescription: "autobuy Eb8-9.",
  toggles: [ ["E","auto5"] ]
   },
   21: {requirementDescription: "1.79e308 total E",
  done() {return player[this.layer].total.gte("1.79e308")}, 
  effectDescription: "Unlock Anti-Softcap layer, the only layer that TRULY will remove softcaps",
   },
  },
  canReset() {return !hasMilestone("E",10)},
  microtabs: {
   stuff: {  
  "Upgrades": {
   unlocked() {return hasMilestone("E", 0)},
   content: [ "upgrades"]}, 
  "Buyables": {
   unlocked() {return hasMilestone("E",1)},
   content: [["raw-html", () => `<h4 style="opacity:.5">E buyables cost nothing.<br>The purchase limit of E buyables is ` + format(player.E.Eblim)],
   ["display-text",function() {return "Eb's cost increase power beyond 40 is "+format(player.E.Ebpow)+" (limited at 2)"}],
   ["buyables",[1,2]]]},
  "Milestones": {
   unlocked() {return true},
   content: [["display-text",function() {return "You have "+format(player.E.total)+" E in total"}],"milestones"]},
  "Challenges": {
   unlocked() {return (hasMilestone("E",2))},
   content: ["challenges"]},
  "Em": {
   unlocked() {return (hasMilestone("E", 11))},
   content: [["display-text", () => "You have <h2 style='color: #789A89; text-shadow: 0 0 10px #c2b280'>" + format(player.E.Em) + "</h2> Em, mult E directly by <h2 style='color: #789A89; text-shadow: 0 0 10px #c2b280'> " + format(tmp.E.emf) + "x</h2>.<br>" + "<h3>" + format(tmp.E.emgain) + " Em/s<h3> <br>"],
   ["raw-html", () => `<h4 style="opacity:.5">welcome to first sub-currency. Em^`+format(tmp.E.emExp)+` mults E directly. </h4>`],
   ["buyables",[3]]]},
  "Ek": {
   unlocked() {return (hasMilestone("E", 16))},
   content: [["display-text", () => "You have <h2 style='color: #177261; text-shadow: 0 0 10px #c2b280'>" + format(player.E.Ek) + "</h2> Ek, Eb cost increase power <h2 style='color: #177261; text-shadow: 0 0 10px #c2b280'> /" + format(tmp.E.ekf) + " </h2><br>" + "<h3>" + format(tmp.E.ekgain) + " Ek/s<h3> <br>"],
   ["raw-html", () => `<h4 style="opacity:.5">Ek delays Eb scaling. </h4>`],
   ["buyables",[4]]]},
   }
  },
  tabFormat: [
   "main-display","resource-display",
   ["row",["prestige-button","clickables"]],"blank",
   ["microtabs", "stuff"],
   ["blank", "25px"],
  ],
  upgrades: {
   11: {
  title:"E1",
  description: function() {return "1e20000x points <br>"+"layer E total: <br>"+ format(this.effect()) +"x"},
  effect()  { 
   let eff = n("1e20000")
   if(hasUpgrade("E",55)) eff=eff.mul("1e80001")
   if(hasUpgrade("E",56)) eff=eff.mul("1e800000")
   if(eff.gte("1e100000")) eff=eff.div("1e100000").pow(0.5).mul("1e100000")//Sc136
   if(eff.gte("1e500000")) eff=eff.div("1e500000").pow(0.5).mul("1e500000")//Sc138
   return eff;  
  },
  cost:new Decimal(1500),
   },
   12: {
  title:"E2",
  description: "E boosts itself.",
  effect()  { 
   let base = n(0.1)
   if(hasUpgrade("E",15)) base=base.mul(ue("E",15))
   if(hasUpgrade("E",44)) base=base.mul(1.5)
   let eff = player.E.points.max(1).pow(base)
   if(eff.gte(10)) eff=eff.div(10).pow(0.5).mul(10)//Sc102
   if(eff.gte(1000)) eff=eff.div(1000).pow(0.5).mul(1000)//Sc127
   return eff
  },
  cost:new Decimal(2500),
  effectDisplay() { return format(this.effect())+"x" }, 
  unlocked() { return (hasUpgrade(this.layer, 11))},
   },
   13: {
  title:"E3",
  description: "boosts to E based on D.",
  effect()  { 
   let eff = player.D.points.add(10).log(2).div(300).max(1)
   if (hasUpgrade("C",33)) eff = eff.mul(ue("C",33)[0])
   if (hasUpgrade("E",24)) eff = Decimal.pow(eff,1.5)
   if (hasUpgrade("C",35)) eff = Decimal.pow(eff,1.5)
   if(eff.gte(2)) eff=eff.div(2).pow(0.5).mul(2)//Sc106
   if(eff.gte(5)) eff=eff.div(5).pow(0.5).mul(5)//Sc122
   if(eff.gte(10)) eff=eff.div(10).pow(0.5).mul(10)//Sc163
   return eff;
  },
  cost:new Decimal(4000),
  unlocked() { return (hasUpgrade(this.layer, 12))},
  effectDisplay() { return format(this.effect(),3)+"x" }, 
   },
   14: {
  title:"E4",
  description: "boosts to E based on C.",
  effect()  { 
   let eff = player.C.points.add(10).log(2).div(500).max(1)
   if (hasUpgrade("C",33)) eff = eff.mul(ue("C",33)[1])
   if (hasUpgrade("E",24)) eff = Decimal.pow(eff,1.7)
   if (hasUpgrade("C",35)) eff = Decimal.pow(eff,1.5)
   if(eff.gte(2)) eff=eff.div(2).pow(0.5).mul(2)//Sc105
   if(eff.gte(4)) eff=eff.div(4).pow(0.5).mul(4)//Sc117
   if(eff.gte(10)) eff=eff.div(10).pow(0.5).mul(10)//Sc164
   return eff;  
  },
  cost:new Decimal(6000),
  effectDisplay() { return format(this.effect(),3)+"x" }, 
  unlocked() { return (hasUpgrade(this.layer, 13))},
   },
   15: {
  title:"E5",
  description: "E2 ^(total E upgrades^0.3).",
  cost:new Decimal("10000"),
  effect()  { 
   let eff = n(player.E.upgrades.length).pow(0.3)
   if(eff.gte(2)) eff=eff.div(2).pow(0.5).mul(2)//Sc103
   return eff;  
  },
  effectDisplay() { return "^"+format(this.effect(),3) }, 
  unlocked() { return (hasUpgrade(this.layer, 14))},
   },
   16: {
  title:"E5.5",
  description: "lg(Bb1) boosts A directly, same as Bb2.",
  cost:new Decimal("30000"),
  effect()  { 
   let eff1 = buyableEffect("B",11).max(10).log10()
   let eff2 = buyableEffect("B",12).max(10).log10()
   if(hasUpgrade("C",31)) {eff1=eff1.pow(2);eff2=eff2.pow(2)}
   if(hasUpgrade("C",36)) {eff1=eff1.pow(1.5);eff2=eff2.pow(1.5)}
   if(eff1.gte(1e4)) eff1=eff1.div(1e4).pow(0.5).mul(1e4)//Sc107
   if(eff2.gte(1e4)) eff2=eff2.div(1e4).pow(0.5).mul(1e4)//Sc108
   return [eff1,eff2]
  },
  effectDisplay() { return format(this.effect()[0])+"x A and "+format(this.effect()[1])+"x B." }, 
  unlocked() { return (hasUpgrade(this.layer, 15))},
   },
   21: {
  title:"E6",
  description: "Eb1-2 base +1,x2 E.<br>Unlock Eb3.",
  cost:new Decimal("40000"),
  unlocked() { return (hasUpgrade(this.layer, 16))},
   },
   22: {
  title:"E7",
  description: "lg(Bb3) boosts C directly, same as Bb4.",
  cost:new Decimal("1e5"),
  effect()  { 
   let eff1 = buyableEffect("B",21).max(10).log10()
   let eff2 = buyableEffect("B",22).max(10).log10()
   if(hasUpgrade("C",31)) {eff1=eff1.pow(2);eff2=eff2.pow(2)}
   if(hasUpgrade("C",36)) {eff1=eff1.pow(1.5);eff2=eff2.pow(1.5)}
   if(eff1.gte(1e4)) eff1=eff1.div(1e4).pow(0.5).mul(1e4)//Sc109
   if(eff2.gte(1e4)) eff2=eff2.div(1e4).pow(0.5).mul(1e4)//Sc110
   return [eff1,eff2]
  },
  unlocked() { return (hasUpgrade(this.layer, 21))},
  effectDisplay() { return format(this.effect()[0])+"x C and "+format(this.effect()[1])+"x D." }, 
   },
   23: {
  title:"E8",
  description: "log2(log2(Bb2.5)) boosts E.",
  cost:new Decimal("1.2e5"),
  effect()  { 
   let eff = buyableEffect("B",13).max(4).log(2).log(2)
   if(hasUpgrade("E",25)) eff = Decimal.pow(eff,1.5)
   if(eff.gte(10)) eff=eff.div(10).pow(0.5).mul(10)//Sc104
   return eff;  
  },
  unlocked() { return (hasUpgrade(this.layer, 22))},
  effectDisplay() { return format(this.effect(),3)+"x" }, 
   },
   24: {
  title:"E9",
  description: "E3 ^1.6 and E4 ^1.7.",
  cost:new Decimal("2e6"),
  unlocked() { return (hasChallenge("E",11))},
   },
   25: {
  title:"E10",
  description: "E8 ^1.5.",
  cost:new Decimal("3.2e6"),
  unlocked() { return (hasUpgrade(this.layer, 24))},
   },
   26: {
  title:"E10.5",
  description: "You can complete Ac7 for decimal times more than 10.<br>Boost E based on Ac7 completions.",
  cost:new Decimal("1e7"),
  effect()  { 
   let eff = n(challengeCompletions("A",41)).sub(9).max(1).pow(n(challengeCompletions("A",41)).max(1).sqrt())
   if(eff.gte(5)) eff=eff.div(5).pow(0.5).mul(5)//Sc118
   if(eff.gte(10)) eff=eff.div(10).pow(0.75).mul(10)//Sc132
   return eff;  
  },
  effectDisplay() { return format(this.effect(),3)+"x"},
  unlocked() { return (hasUpgrade(this.layer, 25))},
   },
   31: {
  title:"E11",
  description: "E boosts C directly and unlock more C upgrades.",
  cost:new Decimal("5e7"),
  effect() {
   let eff = player.E.points.max(1)
   if(hasUpgrade("C",36)) eff=eff.pow(1.5)
   if(eff.gte(1e9)) eff=eff.div(1e9).pow(0.5).mul(1e9)//Sc114
   return eff
  },
  effectDisplay() { return format(this.effect())+"x" }, 
  unlocked() { return  (challengeCompletions("E", 11) >= 2)},
   },
   32: {
  title:"E12",
  description: "boosts to E based on points.",
  cost:new Decimal("1.5e8"),
  effect()  { 
   let eff = player.points.add(10).log(10).sqrt().div(10).max(1)
   if (hasMilestone("E",3)) eff = Decimal.pow(eff,1.5)
   if (hasUpgrade("D",45)) eff = Decimal.pow(eff,1.2)
   if(eff.gte(2)) eff=eff.div(2).pow(0.5).mul(2)//Sc111
   return eff;  
  },
  effectDisplay() { return format(this.effect(),3)+"x"},
  unlocked() { return (hasUpgrade(this.layer, 31))},
   },
   33: {
  title:"E13",
  description: "Reduce Ac7 requirement beyond 10.",
  cost:new Decimal("1e9"),
  unlocked() { return (hasUpgrade(this.layer, 32))},
   },
   34: {
  title:"E14",
  description: "Ac7 boosts Ab1 effect.<br>(ignore any softcaps)",
  cost:new Decimal("1.2e9"),
  effect()  { 
   let eff = n(challengeCompletions("A",41)).sub(8).max(1).log(2).sqrt().max(1)
   return eff;
  },
  effectDisplay() { return "^"+format(this.effect(),3)}, 
  unlocked() { return (hasUpgrade(this.layer, 33))},
   },
   35: {
  title:"E15",
  description: "boosts to E base on A.",
  cost:new Decimal("4e9"),
  effect()  { 
   let eff = player.A.points.add(10).log(10).cbrt().div(5).max(1)
   if (hasMilestone("E",3)) eff = Decimal.pow(eff,1.5)
   if (hasUpgrade("E",41)) eff = Decimal.pow(eff,2)
   if (hasUpgrade("D",45)) eff = Decimal.pow(eff,1.2)
   if(eff.gte(2)) eff=eff.div(2).pow(0.5).mul(2)//Sc119
   return eff;  
  },
  effectDisplay() { return format(this.effect(),3)+"x"},
  unlocked() { return (hasUpgrade(this.layer, 34))},
   },
   36: {
  title:"E15.5",
  description: "boosts to E based on E upgrades amount.",
  cost:new Decimal("1e10"),
  effect()  { 
   let eff = n(player.E.upgrades.length).pow(0.5).max(1)
   if(hasUpgrade("E",84)) eff=eff.pow(15.5)
   if(eff.gte(4)) eff=eff.div(4).pow(0.5).mul(4)//Sc121
   if(eff.gte(1e3)) eff=eff.div(1e3).pow(0.6).mul(1e3)//Sc168
   if(eff.gte(1e5)) eff=eff.div(1e5).pow(0.7).mul(1e5)//Sc169
   return eff;  
  },
  effectDisplay() { return format(this.effect(),3)+"x"},
  unlocked() { return (hasUpgrade(this.layer, 35))},
   },
   41: {
  title:"E16",
  description: "E15 ^2, D10 ^1.1.",
  cost:new Decimal("1e14"),
  unlocked() { return  (challengeCompletions("E", 12) >= 3)},
   },
   42: {
  title:"E17",
  description: "Eb1-2 base +1, Eb3 base +1.5, Eb4 base +0.5.",
  cost:new Decimal("1.5e15"),
  unlocked() { return (hasUpgrade(this.layer, 41))},
   },
   43: {
  title:"E18",
  description: "Unlock more Softcap Point upgrades.",
  cost:new Decimal("1e19"),
  unlocked() { return (hasUpgrade(this.layer, 42))},
   },
   44: {
  title:"E19",
  description: "E2 ^1.5",
  cost:new Decimal("1e20"),
  unlocked() { return (hasUpgrade(this.layer, 43))},
   },
   45: {
  title:"E20",
  description: "Unlock Eb10.",
  tooltip:"Eb5-9 will be unlocked later.",
  cost:new Decimal("1e23"),
  unlocked() { return (hasUpgrade(this.layer, 44))},
   },
   46: {
  title:"E20.5",
  description: "Eb10 affects Eb4.<br>Unlock Eb11.",
  cost:new Decimal("1e24"),
  unlocked() { return (hasUpgrade(this.layer, 45))},
   },
   51: {
  title:"E21",
  description: "Boost E based on Bb5.",
  cost:new Decimal("1e31"),
  effect()  { 
   let eff = buyableEffect("B",23).div("1e1000").max(1).pow(0.015)
   if(hasUpgrade("B",86)) eff=eff.pow(1.5)
   if(hasUpgrade("E",76)) eff=eff.pow(1.1)
   if(eff.gte(100)) eff=eff.div(100).pow(0.5).mul(100)//Sc130
   if(eff.gte(1e4)) eff=eff.div(1e4).pow(0.5).mul(1e4)//Sc150
   if(eff.gte(1e5)) eff=eff.div(1e5).pow(0.5).mul(1e5)//Sc159
   return eff;  
  },
  effectDisplay() { return format(this.effect())+"x" }, 
  unlocked() { return (hasUpgrade(this.layer, 45))},
   },
   52: {
  title:"E22",
  description: "Reduce Ac7 requirement based on E.",
  cost:new Decimal("2e32"),
  effect()  { 
   let eff = n(1).div(player.E.points.max(10).log(10).max(10).log(10)).min(1)
   if(hasUpgrade("E",76)) eff=eff.pow(1.1)
   return eff;  
  },
  effectDisplay() { return "^"+format(this.effect(),4)},
  unlocked() { return (hasUpgrade(this.layer, 51))},
   },
   53: {
  title:"E23",
  description: "Boost Eb10 and Eb11's bases based on E.",
  cost:new Decimal("4e32"),
  effect()  { 
   let eff = player.E.points.div(1e30).max(10).log(10).pow(0.5)
   if(hasUpgrade("E",76)) eff=eff.pow(1.1)
   if(eff.gte(10)) eff=eff.div(10).pow(0.5).mul(10)//Sc161
   return eff;  
  },
  effectDisplay() { return format(this.effect())+"x"},
  unlocked() { return (hasUpgrade(this.layer, 52))},
   },
   54: {
  title:"E24",
  description: "Reduce Ebs' costs based on Eb12.",
  cost:new Decimal("1e39"),
  effect()  { 
   let eff = buyableEffect("E",24).pow(0.01).div(10).pow(2).mul(10).max(1)
   if(hasUpgrade("E",56)) eff=eff.pow(ue("E",56))
   if(hasUpgrade("E",76)) eff=eff.pow(1.1)
   if(eff.gte(1e10)) eff=eff.div(1e10).pow(0.5).mul(1e10)//Sc140
   if(eff.gte(1e60)) eff=eff.div(1e60).pow(0.5).mul(1e60)//Sc162
   return eff;  
  },
  effectDisplay() { return "÷"+format(this.effect())},
  unlocked() { return (hasUpgrade(this.layer, 53))},
   },
   55: {
  title:"E25",
  description: "x1e80001 points, add to Eb1-4 base based on E.",
  cost:new Decimal("2e42"),
  effect()  { 
   let eff = Decimal.add(player.E.points,10).log(10).pow(0.25).sub(1)
   if(hasUpgrade("E",76)&&eff.gt(1)) eff=eff.pow(1.1)
   return eff.max(0)
  },
  effectDisplay() { return "+"+format(this.effect()) }, 
  unlocked() { return (hasUpgrade(this.layer, 54))},
   },
   56: {
  title:"E25.5",
  description: "x1e800000 points, boosts to E24 based on E.",
  cost:new Decimal("4.3e43"),
  effect()  { 
   let eff = player.E.points.div(1e33).max(10).log(10).sub(9)
   if(eff.gte(2)) eff=eff.div(2).pow(0.5).mul(2)//Sc139
   if(eff.gte(10)) eff=eff.div(10).pow(0.5).mul(10)//Sc160
   return eff.max(1)
  },
  effectDisplay() { return "^"+format(this.effect(),3) }, 
  unlocked() { return (hasUpgrade(this.layer, 54))},
   },
   61: {
  title:"E26",
  description: "Boost E directly based on Ac7 completions beyond 12.",
  cost:new Decimal("1e50"),
  effect()  { 
   let eff = n(challengeCompletions("A",41)).sub(11).max(1).pow(n(challengeCompletions("A",41)).max(1).pow(0.8))
   if(hasUpgrade("B",86)) eff=eff.pow(1.5)
   if(hasUpgrade("E",72)) eff=eff.pow(1.1)
   if(eff.gte(5)) eff=eff.div(5).pow(0.5).mul(5)//Sc141
   if(eff.gte(15)) eff=eff.div(15).pow(0.8).mul(15)//Sc147
   return eff.max(1)
  },
  effectDisplay() { return format(this.effect(),3)+"x"},
  unlocked() { return (hasMilestone(this.layer, 8))},
   },
   62: {
  title:"E27",
  description: "Eb12 is more effective. (effect ^1.2)",
  cost:new Decimal("3e56"),
  unlocked() { return (hasUpgrade(this.layer, 61))},
   },
   63: {
  title:"E28",
  description: "boosts E directly based on E3/4/12/15 ^0.2.",
  cost:new Decimal("2e57"),
  effect()  { 
   let eff = n(ue("E",13).mul(ue("E",14)).mul(ue("E",32)).mul(ue("E",35))).pow(0.2)
   if(hasUpgrade("B",86)) eff=eff.pow(1.5)
   if(hasUpgrade("E",72)) eff=eff.pow(1.1)
   if(eff.gte(7.5)) eff=eff.div(7.5).pow(0.8).mul(7.5)//Sc148
   return eff.max(1)
  },
  effectDisplay() { return format(this.effect(),3)+"x"},
  unlocked() { return (hasUpgrade(this.layer, 62))},
   },
   64: {
  title:"E29",
  description: "Unlock new B upgrades.",
  cost:new Decimal("6e60"),
  unlocked() { return (hasUpgrade(this.layer, 63))},
   },
   65: {
  title:"E30",
  description: "Boost B directly based on B beyond 1e700.",
  cost:new Decimal("1e63"),
  effect()  { 
   let eff = player.B.points.max(10).log(10).sub(699).pow(2)
   if(hasUpgrade("B",86)) eff=eff.pow(1.5)
   if(hasUpgrade("E",72)) eff=eff.pow(1.1)
   if(eff.gte(100)) eff=eff.div(100).pow(0.8).mul(100)//Sc149
   if(eff.gte(500)) eff=eff.div(500).pow(0.5).mul(500)//Sc152
   return eff.max(1)
  },
  effectDisplay() { return format(this.effect())+"x"},
  unlocked() { return hasUpgrade("E",64)},
   },
   66: {
  title:"E30.5",
  description: "Reduce Ab2's cost based on A.",
  cost:new Decimal("2e63"),
  effect()  { 
   let eff = player.A.points.max(10).div("100")
   if(hasUpgrade("E",72)) eff=eff.pow(1.1)
   if(eff.gte(1e100)) eff=eff.div(1e100).pow(0.5).mul(1e100)//Sc153
   return eff.max(1)
  },
  effectDisplay() { return "÷"+format(this.effect())},
  unlocked() { return hasUpgrade("E",65)},
   },
   71: {
  title:"E31",
  description: "log2(Em)^2 mults E.",
  cost:new Decimal("1e70"),
  unlocked() { return (hasMilestone(this.layer, 11))},
  effect()  { 
   let eff = player.E.Em.add(2).log(2).pow(2)
   if (hasUpgrade("E",75)) eff=eff.pow(2)
   if (hasUpgrade("E",81)) eff = Decimal.pow(eff,5)
   if(eff.gte(10)) eff=eff.div(10).pow(0.5).mul(10)//Sc151
   if(eff.gte(100)) eff=eff.div(100).pow(0.5).mul(100)//Sc155
   if(eff.gte(1000)) eff=eff.div(1000).pow(0.5).mul(1000)//Sc157
   if(eff.gte(1e5)) eff=eff.div(1e5).pow(0.5).mul(1e5)//Sc166
   if(eff.gte(1e6)) eff=eff.div(1e6).pow(0.5).mul(1e6)//Sc167
   return eff;  
  },
  effectDisplay() { return format(this.effect())+"x" },
   },
   72: {
  title:"E32",
  description: "E26~E30.5 ^1.1.",
  cost:new Decimal("5e4"),
  tooltip:"Except E29",
  currencyDisplayName:"Em",
  currencyInternalName:"Em",
  currencyLayer:"E",
  unlocked() { return (hasUpgrade(this.layer, 71))},
   },
   73: {
  title:"E33",
  description: "Boost Em based on total E upgrades amount.",
  effect()  { 
   let eff = n(player.E.upgrades.length).pow(0.5)
   if(hasUpgrade("E",75)) eff=eff.pow(2)
   if(eff.gte(6)) eff=eff.div(6).pow(0.5).mul(6)//Sc154
   if(eff.gte(10)) eff=eff.div(10).pow(0.5).mul(10)//Sc158
   return eff;  
  },
  effectDisplay() { return format(this.effect())+"x" },
  cost:new Decimal("1e73"),
  unlocked() { return (hasUpgrade(this.layer, 72))},
   },
   74: {
  title:"E34",
  description: "Auto complete Ac7 based on points.",
  cost:new Decimal("1e84"),
  unlocked() { return (hasUpgrade(this.layer, 73))},
   },
   75: {
  title:"E35",
  description: "E31 and E33 ^2.",
  cost:new Decimal("5e95"),
  unlocked() { return (hasUpgrade(this.layer, 74))},
   },
   76: {
  title:"E35.5",
  description: "E21~E25.5 ^1.1.",
  cost:new Decimal("5e96"),
  unlocked() { return (hasUpgrade(this.layer, 75))},
   },
   81: {
  title:"E36",
  description: "E31 ^5.",
  cost:new Decimal("1.10e110"),
  unlocked() { return (hasUpgrade(this.layer, 76))},
   },
   82: {
  title:"E37",
  description() { return "Em^" +format(this.eff())+" mults A,B,C,D (directly) and E. (power based on E)"},
  eff() {
   let eff = player.E.points.max(10).log(10).div(100).pow(0.5).sub(0.98).max(0)
   eff=eff.add(ue("E",83))
   return eff
  },
  effect()  { 
   let effpow = this.eff()
   let eff = player.E.Em.add(1).pow(effpow)
   if(hasMilestone("E",15)) eff=eff.pow(2)
   if(eff.gte(1e7)) eff=eff.div(1e7).pow(0.5).mul(1e7)//Sc170
   return eff
  },
  cost:new Decimal("1e112"),
  effectDisplay() { return format(this.effect())+"x" }, 
  unlocked() { return (hasUpgrade(this.layer, 81))},
   },
   83: {
  title:"E38",
  description:"Add E37 power based on Em.",
  effect()  { 
   let eff = player.E.Em.max(10).log(10).pow(0.5).div(6).sub(1).max(0)
   if(eff.gte(0.5)) eff=eff.sub(0.5).div(2).add(0.5)//Sc177
   return eff
  },
  effectDisplay() { return "+"+format(this.effect(),4) }, 
  cost:new Decimal("1e115"),
  unlocked() { return (hasUpgrade(this.layer, 82))},
   },
   84: {
  title:"E39",
  description: "E15.5 ^15.5.",
  cost:new Decimal("1e117"),
  unlocked() { return (hasUpgrade(this.layer, 83))},
   },
   85: {
  title:"E40",
  cost:new Decimal("5e119"),  
  description() { return "Eb5-7 total amount boosts Bb's limit.<br>(+"+format(tmp.E.upgrades[85].base)+" each)." },
  unlocked() { return (hasUpgrade(this.layer, 84))},
  base() {
   let base = 1
   return base
  },
  effect()  { 
   let a = gba("E",31).add(gba("E",32)).add(gba("E",33))
   let eff = a.mul(tmp.E.upgrades[85].base)
   return eff;  
  },
  effectDisplay() { return "+"+format(this.effect()) }, 
   },
   86: {
  title:"E40.5",
  cost:new Decimal("2e120"),  
  description() { return "E40 also boosts Eb's limit.<br>You can buy max Ebs (with decimal).(+"+format(tmp.E.upgrades[86].base)+" each)." },
  base() {
   let base = 0.01
   return base
  },
  tooltip:"Eb's cost will increase rapidly beyond 40",
  unlocked() { return (hasUpgrade(this.layer, 85))},
  effect()  { 
   let a = gba("E",31).add(gba("E",32)).add(gba("E",33))
   let eff = a.mul(tmp.E.upgrades[86].base)
   return eff;  
  },
  effectDisplay() { return "+"+format(this.effect()) }, 
   },
   91: {
  title:"E41",
  description: "Eb12 ^1.35.",
  cost:new Decimal("1e124"),
  unlocked() { return (hasUpgrade(this.layer, 86))},
   },
   92: {
  title:"E42",
  cost:new Decimal("5e130"),  
  description() { return "Eb5-7 amount boosts B.<br>("+format(this.base())+"^x)." },
  unlocked() { return (hasUpgrade(this.layer, 91))},
  base() {
   let base=n(1e10)
   return base
  },
  effect()  { 
   let b=this.base()
   let a=gba("E", 31).add(gba("E", 32)).add(gba("E", 33))
   let eff = Decimal.pow(b,a)
   return eff;  
  },
  effectDisplay() { return format(this.effect())+"x" }, 
   },
   93: {
  title:"E43",
  description: "E42 ^0.1 boosts A,B,C and D.",
  cost:new Decimal("3e135"),
  unlocked() { return (hasUpgrade(this.layer, 92))},
  effect()  { 
   let eff = ue("E",92).pow(0.1)
   return eff;  
  },
  effectDisplay() { return format(this.effect())+"x" }, 
   },
   94: {
  title:"E44",
  description: "E40^1.5 applies to Abs.",
  cost:new Decimal("1.44e144"),
  base() {
   let base = 1
   return base
  },
  effect()  { 
   let a = gba("E",31).add(gba("E",32)).add(gba("E",33))
   let eff = a.mul(tmp.E.upgrades[94].base).pow(1.5)
   if(eff.gte(2085)) eff=eff.div(2085).pow(0.5).mul(2085)//Sc171
   return eff;  
  },
  effectDisplay() { return "+"+format(this.effect()) }, 
  unlocked() { return (hasUpgrade(this.layer, 93))},
   },
   95: {
  title:"E45",
  cost:new Decimal("1e148"),  
  description: "Eb5-7 amount boosts C.(1.15^x)<br> Eb5 cost base -1.",
  unlocked() { return (hasUpgrade(this.layer, 94))},
  effect()  { 
   let b=1.15
   let a=gba("E", 31).add(gba("E", 32)).add(gba("E", 33))
   let eff = Decimal.pow(b,a)
   return eff;  
  },
  effectDisplay() { return format(this.effect())+"x" }, 
   },
   96: {
  title:"E45.5",
  cost:new Decimal("1.55e155"),  
  description: "Remove Eb5-7 base cost.",
  unlocked() { return (hasUpgrade(this.layer, 95))},
   },
   101: {
  title:"E46",
  description: "Boost E based on Ek.",
  cost:new Decimal("1e196"),
  effect()  { 
   let eff = player.E.Ek.add(2).log(2).pow(2).max(1)
   if(eff.gte(200)) eff=eff.div(200).pow(0.5).mul(200)//Sc175
   return eff;  
  },
  effectDisplay() { return format(this.effect())+"x" }, 
  unlocked() { return hasMilestone("E",16)},
   },
   102: {
  title:"E47",
  description: "Boost Em based on Ek.",
  effect()  { 
   let eff = player.E.Ek.add(3).log(3).pow(2)
   if(eff.gte(100)) eff=eff.div(100).pow(0.5).mul(100)//Sc176
   return eff;  
  },
  cost:new Decimal("1e200"),
  effectDisplay() { return format(this.effect())+"x" }, 
  unlocked() { return (hasUpgrade(this.layer, 101))},
   },
   103: {
  title:"E48",
  description: "Em eff exp +0.01.",
  cost:new Decimal("2.22e222"),
  unlocked() { return (hasUpgrade(this.layer, 102))},
   },
   104: {
  title:"E49",
  description: "Em^0.01 boost Ek,Eb6/9 base +0.25,Eb7 base +1.",
  effect()  { 
   let eff = player.E.Em.max(1).pow(0.01)
   eff=sc(eff,n(10),0.5)//Sc181
   return eff;  
  },
  cost:new Decimal("1e270"),
  effectDisplay() { return format(this.effect())+"x" }, 
  unlocked() { return (hasUpgrade(this.layer, 103))},
   },
   105: {
  title:"E50",
  description: "Ek eff exp +0.01.",
  cost:new Decimal("1e290"),
  unlocked() { return (hasUpgrade(this.layer, 104))},
   },
   106: {
  title:"E50",
  description: "Em and Ek eff exp +0.01.",
  cost:new Decimal("1e300"),
  unlocked() { return (hasUpgrade(this.layer, 105))},
   },
  },
  automate(){
   if (player.E.auto) { buyBuyable("E",11),buyBuyable("E",12),buyBuyable("E",13) }
  if (player.E.auto2) { buyBuyable("E",14),buyBuyable("E",21) }
  if (player.E.auto3) { buyBuyable("E",22),buyBuyable("E",23),buyBuyable("E",24) }
  if (player.E.auto4) { buyBuyable("E",31),buyBuyable("E",32),buyBuyable("E",33) }
  if (player.E.auto5) { buyBuyable("E",41),buyBuyable("E",42) }
  },
  buyables:{
   11: {
  title: "Eb1", 
  baseCost() {
   let base = n(1)
   if(hasUpgrade("E",54)) base=base.div(ue("E",54))
   return base
  },
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
  if(x.gte(40)) x=x.div(40).pow(player.E.Ebpow).mul(40)
   let cost = Decimal.pow(2, x.pow(1.2)).mul(this.baseCost())
   return cost},
  canAfford() { return player[this.layer].points.gte(this.cost()) },
  buy() {
   if(hasUpgrade("E",86)) layers.E.buyables[this.id].buyMax()
  else setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
  },
  buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.E.points.div(this.baseCost()).max(1).log(2).root(1.2)
					if (tempBuy.gte(40)) tempBuy = tempBuy.div(40).root(player.E.Ebpow).mul(40)
					let target = tempBuy;
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target).min(player.E.Eblim);
				},
  base(){   let bas = n(2)
   if (hasUpgrade("E",21)) bas = Decimal.add(bas,1)
   if (hasUpgrade("E",42)) bas = Decimal.add(bas,1)
   if (hasUpgrade("E",55)) bas = Decimal.add(bas,ue("E",55))
   if (hasUpgrade("E",45)) bas = Decimal.add(bas,buyableEffect("E",22))
   return bas},
  effect(x) { // Effects of owning x of the items, x is a decimal
   let eff = Decimal.pow(this.base(),x)
   if(eff.gte(1e40)) eff=eff.div(1e40).pow(0.5).mul(1e40)//Sc134
   if (inChallenge("E",21)) eff = n(1e-100)
   return eff},
  display() { // Everything else displayed in the buyable button after the title
   return "give A a x"+ format(this.base()) + " direct mult \n\
   Cost: " + format(this.cost()) + " E \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: x" + format(this.effect()) + " A" },
   purchaseLimit() {return player.E.Eblim},
  unlocked() { return hasMilestone("E",1) }
   },
   12: {
  title: "Eb2", 
  baseCost() {
   let base = n(1)
   if(hasUpgrade("E",54)) base=base.div(ue("E",54))
   return base
  },
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
   if(x.gte(40)) x=x.div(40).pow(player.E.Ebpow).mul(40)
   let cost = Decimal.pow(3, x.pow(1.25)).mul(this.baseCost())
   return cost},
  canAfford() { return player[this.layer].points.gte(this.cost()) },
buy() {
   if(hasUpgrade("E",86)) layers.E.buyables[this.id].buyMax()
  else setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
  },
  buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.E.points.div(this.baseCost()).max(1).log(3).root(1.25)
					if (tempBuy.gte(40)) tempBuy = tempBuy.div(40).root(player.E.Ebpow).mul(40)
					let target = tempBuy;
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target).min(player.E.Eblim);
				},
  base(){   let bas = n(2)
   if (hasUpgrade("E",21)) bas = Decimal.add(bas,1)
   if (hasUpgrade("E",42)) bas = Decimal.add(bas,1)
   if (hasUpgrade("E",55)) bas = Decimal.add(bas,ue("E",55))
   if (hasUpgrade("E",45)) bas = Decimal.add(bas,buyableEffect("E",22))
   return bas},
  effect(x) { // Effects of owning x of the items, x is a decimal
   let eff = Decimal.pow(this.base(),x)
   if(eff.gte(1e40)) eff=eff.div(1e40).pow(0.5).mul(1e40)//Sc135
   if (inChallenge("E",21)) eff = n(1e-100)
   return eff},
  display() { // Everything else displayed in the buyable button after the title
   return "give B a x"+ format(this.base()) + " direct mult \n\
   Cost: " + format(this.cost()) + " E \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: x" + format(this.effect()) + " B" },
   purchaseLimit() {return player.E.Eblim},
  unlocked() { return hasMilestone("E",1) }
   },
   13: {
  title: "Eb3", 
  baseCost() {
   let base = n(50000)
   if(hasUpgrade("E",54)) base=base.div(ue("E",54))
   return base
  },
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
  if(x.gte(40)) x=x.div(40).pow(player.E.Ebpow).mul(40)
  let cost = Decimal.pow(6, x.pow(1.14)).mul(this.baseCost())
   return cost},
  canAfford() { return player[this.layer].points.gte(this.cost()) },
  buy() {
   if(hasUpgrade("E",86)) layers.E.buyables[this.id].buyMax()
  else setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
  },
  buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.E.points.div(this.baseCost()).max(1).log(6).root(1.14)
					if (tempBuy.gte(40)) tempBuy = tempBuy.div(40).root(player.E.Ebpow).mul(40)
					let target = tempBuy;
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target).min(player.E.Eblim);
				},
  base(){   let bas = n(2)
   if(hasUpgrade("C",35)) bas=bas.add(0.5)
   if (hasUpgrade("E",42)) bas = Decimal.add(bas,1.5)
   if (hasMilestone("E",5)) bas = Decimal.add(bas,1)
   if (hasUpgrade("E",55)) bas = Decimal.add(bas,ue("E",55))
   if (hasUpgrade("E",45)) bas = Decimal.add(bas,buyableEffect("E",22))
   return bas},
  effect(x) { // Effects of owning x of the items, x is a decimal
   let eff = Decimal.pow(this.base(),x)
   if(eff.gte(1e40)) eff=eff.div(1e40).pow(0.5).mul(1e40)//It should be Sc136
   return eff},
  display() { // Everything else displayed in the buyable button after the title
   return "give C/D a x"+ format(this.base()) + " direct mult \n\
   Cost: " + format(this.cost()) + " E \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: x" + format(this.effect()) + " C/D" },
   purchaseLimit() {return player.E.Eblim},
  unlocked() { return hasUpgrade("E",21) }
   },
   14: {
  title: "Eb3.5", 
  baseCost() {
   let base = n(1e15)
   if(hasUpgrade("E",54)) base=base.div(ue("E",54))
   return base
  },
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
   if(x.gte(40)) x=x.div(40).pow(player.E.Ebpow).mul(40)
   let cost = Decimal.pow(2, x.pow(1.2)).mul(this.baseCost())
   return cost},
  canAfford() { return player[this.layer].points.gte(this.cost()) },
  buy() {
   if(hasUpgrade("E",86)) layers.E.buyables[this.id].buyMax()
  else setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
  },
  buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.E.points.div(this.baseCost()).max(1).log(2).root(1.2)
					if (tempBuy.gte(40)) tempBuy = tempBuy.div(40).root(player.E.Ebpow).mul(40)
					let target = tempBuy;
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target).min(player.E.Eblim);
				},
  base(){   let base = n(0.001)
  if (hasUpgrade("E",46)) base = Decimal.add(base,buyableEffect("E",23))
   return base},
  effect(x) { // Effects of owning x of the items, x is a decimal
   let eff = Decimal.mul(this.base(),x)
   if(eff.gte(0.03)) eff=eff.sub(0.03).div(10).add(0.03)//Sc129
   return eff},
  display() { // Everything else displayed in the buyable button after the title
   return "give a +"+ format(this.base(),4) + " E exponent \n\
   Cost: " + format(this.cost()) + " E \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: +" + format(this.effect(),4) + " E exponent" },
   purchaseLimit() {return player.E.Eblim},
  unlocked() { return hasMilestone("E",4) }
   },
   21: {
  title: "Eb4", 
  baseCost() {
   let base = n(1e10)
   if(hasUpgrade("E",54)) base=base.div(ue("E",54))
   return base
  },
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
   if(x.gte(40)) x=x.div(40).pow(player.E.Ebpow).mul(40)
   let cost = Decimal.pow(3, x.pow(1.1)).mul(this.baseCost())
   return cost},
  canAfford() { return player[this.layer].points.gte(this.cost()) },
  buy() {
   if(hasUpgrade("E",86)) layers.E.buyables[this.id].buyMax()
  else setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
  },
  buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.E.points.div(this.baseCost()).max(1).log(3).root(1.1)
					if (tempBuy.gte(40)) tempBuy = tempBuy.div(40).root(player.E.Ebpow).mul(40)
					let target = tempBuy;
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target).min(player.E.Eblim);
				},
  base() {
   let base =n(2)
   if(hasUpgrade("C",35)) base=base.add(0.5)
   if (hasUpgrade("E",42)) base = Decimal.add(base,0.5)
   if (hasUpgrade("E",55)) base = Decimal.add(base,ue("E",55))
   if (hasUpgrade("E",46)) base = Decimal.add(base,buyableEffect("E",22))
   return base
  },
  effect() {
   let eff=this.base().pow(gba("E",21))
   if(eff.gte(1e15)) eff=eff.div(1e15).pow(0.2).mul(1e15)//Sc128
   return eff.max(1)
  },
  display() { // Everything else displayed in the buyable button after the title
   return "give E a x" +format(this.base())+" direct mult<br>Cost: " + format(this.cost()) + " E \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: x" + format(this.effect()) +" E"},
   purchaseLimit() {return player.E.Eblim},
  unlocked() { return hasUpgrade("C",34) }
   },
   22: {
  title: "Eb10", 
  baseCost() {
   let base = n(1e23)
   if(hasUpgrade("E",54)) base=base.div(ue("E",54))
   return base
  },
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
   if(x.gte(40)) x=x.div(40).pow(player.E.Ebpow).mul(40)
   let cost = Decimal.pow(3, x.pow(1.25)).mul(this.baseCost())
   return cost
  },
  canAfford() { return player[this.layer].points.gte(this.cost()) },
  buy() {
   if(hasUpgrade("E",86)) layers.E.buyables[this.id].buyMax()
  else setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
  },
  buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.E.points.div(this.baseCost()).max(1).log(3).root(1.25)
					if (tempBuy.gte(40)) tempBuy = tempBuy.div(40).root(player.E.Ebpow).mul(40)
					let target = tempBuy;
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target).min(player.E.Eblim);
				},
   base() {
  let base=n(0.1)
  if(hasUpgrade("E",53)) base=base.mul(ue("E",53))
  return base
   },
  effect(x) { // Effects of owning x of the items, x is a decimal
   let eff = this.base().mul(gba("E",22))
   return eff},
  display() { // Everything else displayed in the buyable button after the title
  let a="3"
  if(hasUpgrade("E",46)) a="4"
   return "Eb1-"+a+" base +" +format(this.base())+"<br>Cost: " + format(this.cost()) + " E \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: +" + format(this.effect())},
   purchaseLimit() {return player.E.Eblim},
  unlocked() { return hasUpgrade("E",45) }
   },
   23: {
  title: "Eb11", 
  baseCost() {
   let base = n(1e25)
   if(hasUpgrade("E",54)) base=base.div(ue("E",54))
   return base
  },
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
   if(x.gte(40)) x=x.div(40).pow(player.E.Ebpow).mul(40)
   let cost = Decimal.pow(3, x.pow(1.25)).mul(this.baseCost())
   return cost
  },
  canAfford() { return player[this.layer].points.gte(this.cost()) },
 buy() {
   if(hasUpgrade("E",86)) layers.E.buyables[this.id].buyMax()
  else setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
  },
  buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.E.points.div(this.baseCost()).max(1).log(3).root(1.25)
					if (tempBuy.gte(40)) tempBuy = tempBuy.div(40).root(player.E.Ebpow).mul(40)
					let target = tempBuy;
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target).min(player.E.Eblim);
				},
   base() {
  let base=n(0.0001)
  if(hasUpgrade("E",53)) base=base.mul(ue("E",53))
  return base
   },
  effect(x) { // Effects of owning x of the items, x is a decimal
   let eff = this.base().mul(gba("E",23))
   return eff},
  display() { // Everything else displayed in the buyable button after the title
   return "Eb3.5 base +" +format(this.base(),5)+"<br>Cost: " + format(this.cost()) + " E \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: +" + format(this.effect(),5)},
   purchaseLimit() {return player.E.Eblim},
  unlocked() { return hasUpgrade("E",46) }
   },
   24: {
  title: "Eb12", 
  baseCost() {
   let base = n(1e31)
   if(hasUpgrade("E",54)) base=base.div(ue("E",54))
   return base
  },
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
   if(x.gte(40)) x=x.div(40).pow(player.E.Ebpow).mul(40)
   let cost = Decimal.pow(2.5, x.pow(1.35)).mul(this.baseCost())
   return cost
  },
  canAfford() { return player[this.layer].points.gte(this.cost()) },
 buy() {
   if(hasUpgrade("E",86)) layers.E.buyables[this.id].buyMax()
  else setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))
  },
  buyMax() {
					if (!this.canAfford()) return;
					let tempBuy = player.E.points.div(this.baseCost()).max(1).log(2.5).root(1.35)
					if (tempBuy.gte(40)) tempBuy = tempBuy.div(40).root(player.E.Ebpow).mul(40)
					let target = tempBuy;
					player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].max(target).min(player.E.Eblim);
				},
   base() {
  let base=n(1e10)
  if(hasUpgrade("E",62)) base=base.pow(1.2)
  if(hasUpgrade("E",72)) base=base.pow(1.1)
  if(hasUpgrade("E",91)) base=base.pow(1.35)
  return base
   },
  effect(x) { // Effects of owning x of the items, x is a decimal
   let eff = this.base().pow(gba("E",24))
   return eff},
  display() { // Everything else displayed in the buyable button after the title
  let a=""
  if(hasUpgrade("B",83)) a="Ab and "
   return "All "+a+"Bbs' cost ÷" +format(this.base())+"<br>Cost: " + format(this.cost()) + " E \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: ÷" + format(this.effect())},
   purchaseLimit() {return player.E.Eblim},
  unlocked() { return hasMilestone("E",5) }
   },
   31: {
  title: "Eb5", 
  baseCost() {
   let cost=n(1e67)
   if(hasUpgrade("E",96)) cost=n(1)
   return cost
  },
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
   let cost = Decimal.pow(10, x).times(this.baseCost())
   if (hasUpgrade("E",95)) cost =Decimal.pow(9, x).times(this.baseCost())
   return cost
  },
  canAfford() { return player[this.layer].points.gte(this.cost()) },
  buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
  base(){   let base = 2  
   return base},
  effect(x) { // Effects of owning x of the items, x is a decimal
   let eff = Decimal.pow(this.base(),x)
   if(eff.gte(1e30)) eff=eff.div(1e30).pow(0.25).mul(1e30)//Sc172
   return eff},
  display() { // Everything else displayed in the buyable button after the title
   return "give Em a x"+ format(this.base()) + " mult \n\
   Cost: " + format(this.cost()) + " E \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: x" + format(this.effect())},
  unlocked() { return hasMilestone("E",11) }
   },
   32: {
  title: "Eb6",
  baseCost() {
   let cost=n(100)
   if(hasUpgrade("E",96)) cost=n(1)
   return cost
  },
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
   let cost = Decimal.pow(5, x.pow(1.03)).times(this.baseCost())
   return cost
  },
  canAfford() { return player[this.layer].Em.gte(this.cost()) },
  buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
  base(){   let base = 2   
   if (hasChallenge("E", 32))  base = Decimal.add(base,challengeEffect("E",32)) 
   if (hasUpgrade("E", 104))  base = Decimal.add(base,0.25)  
   return base},
  effect(x) { // Effects of owning x of the items, x is a decimal
   let eff = Decimal.pow(this.base(),x)
   if(eff.gte(1e5)) eff=eff.div(1e5).pow(0.25).mul(1e5)//Sc156
   if(eff.gte(1e12)) eff=eff.div(1e12).pow(0.5).mul(1e12)//Sc174
   return eff},
  display() { // Everything else displayed in the buyable button after the title
   return "give E and Em a x"+ format(this.base()) + " mult \n\
   Cost: " + format(this.cost()) + " Em \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: x" + format(this.effect())},
  unlocked() { return hasMilestone("E",11) }
   },
   33: {
  title: "Eb7", 
  baseCost() {
   let cost = n(1e75)
   if(hasUpgrade("E",96)) cost=n(1)
   return cost
  },
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
   let cost = Decimal.pow(10, x.pow(1.5)).times(this.baseCost())
   return cost
  },
  canAfford() { return player[this.layer].points.gte(this.cost()) },
  buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
  base(){   let base = 10   
   if (hasChallenge("E", 32))  base = Decimal.add(base,challengeEffect("E",32))  
   if (hasUpgrade("E", 104))  base = Decimal.add(base,1)
   return base},
  effect(x) { // Effects of owning x of the items, x is a decimal
   let eff = Decimal.pow(this.base(),x)
   if(eff.gte(1e10)) eff=eff.div(1e10).pow(0.5).mul(1e10)//Sc165
   if(eff.gte(1e15)) eff=eff.div(1e15).pow(0.5).mul(1e15)//Sc173
   return eff},
  display() { // Everything else displayed in the buyable button after the title
   return "give Em a x"+ format(this.base()) + " mult \n\
   Cost: " + format(this.cost()) + " E \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: x" + format(this.effect())},
  unlocked() { return player[this.layer].total.gte("1e73") }
   },
   41: {
  title: "Eb8", 
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
   let cost = Decimal.pow(10, x).times("1e192")
   return cost
  },
  canAfford() { return player[this.layer].points.gte(this.cost()) },
  buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
  base(){   let base = 2  
   return base},
  effect(x) { // Effects of owning x of the items, x is a decimal
   let eff = Decimal.pow(this.base(),x)
   return eff},
  display() { // Everything else displayed in the buyable button after the title
   return "give Ek a x"+ format(this.base()) + " mult \n\
   Eb8's factor/cost multiplier are fixed. \n\
   Cost: " + format(this.cost()) + " E \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: x" + format(this.effect())},
  unlocked() { return hasMilestone("E",11) }
   },
   42: {
  title: "Eb9", 
  cost(x) { // cost for buying xth buyable, can be an object if there are multiple currencies
   let cost = Decimal.pow(100, x).times("1e260")
   return cost
  },
  canAfford() { return player[this.layer].points.gte(this.cost()) },
  buy() { setBuyableAmount(this.layer, this.id, gba(this.layer, this.id).add(1))},
  base(){   let base = 2   
   if (hasUpgrade("E", 104))  base = Decimal.add(base,0.25)  
   return base},
  effect(x) { // Effects of owning x of the items, x is a decimal
   let eff = Decimal.pow(this.base(),x)
   return eff},
  display() { // Everything else displayed in the buyable button after the title
   return "give Ek a x"+ format(this.base()) + " mult \n\
   Cost: " + format(this.cost()) + " E \n\
   Amount: " + player[this.layer].buyables[this.id]  +" \n\
   Effect: x" + format(this.effect())},
  unlocked() { return hasMilestone("E",18) }
   },
  },
  challenges: {
   11: {
   name: "Ec1",
   completionLimit: 3,
   challengeDescription: function() {
  return "Reset A and B points and buyables and they are dilated.<br> Completion: " +challengeCompletions("E", 11) + "/3"},
   unlocked() { return (hasMilestone("E", 2))},
   goal(){
  let goal = [n(1e145),n(1e155),n(1e166)]
  return goal[challengeCompletions("E",11)]
   },  
   onEnter() {
  player.A.points=n(0);player.B.points=n(0);
  player.A.buyables={11:n(0),12:n(0)};player.B.buyables={11:n(0),12:n(0),13:n(0),21:n(0),22:n(0),23:n(0)}
   },
   goalDescription:  function() {return format(this.goal())+" B"},
   canComplete(){return player.B.points.gte(this.goal())},
   rewardDescription: "boosts to E based on B.",
   rewardEffect() {
  let base = n(challengeCompletions("E",11)).pow(n(challengeCompletions).sqrt().max(1)).div(10)
  let eff = player.B.points.max(10).log(10).tetrate(base).max(1)
  if(hasUpgrade("B",85)) eff=eff.pow(1.2)
  if(eff.gte(10)) eff=eff.div(10).pow(0.5).mul(10)//It should be Sc147
  return eff
   },
   rewardDisplay() {return format(this.rewardEffect())+"x"},
   },
   12: {//21 after E15,22 E17,23 E19
  name: "Ec2",
  completionLimit: 3,
  challengeDescription: function() {
   return "Reset A and B points and buyables. Bb1-2's base are stuck at 1. <br> Completion: " +challengeCompletions("E", 12) + "/3"},
  unlocked() { return (hasMilestone("E", 3))},
  goal(){
   let goal = [n("1e315"),n("1e333"),n("1e355")]
  return goal[challengeCompletions("E",12)]
  },  
  goalDescription:  function() {return format(this.goal())+" B"},
  onEnter() {
  player.A.points=n(0);player.B.points=n(0);
  player.A.buyables={11:n(0),12:n(0)};player.B.buyables={11:n(0),12:n(0),13:n(0),21:n(0),22:n(0),23:n(0)}
   },
   canComplete() {return player.B.points.gte(this.goal())},
   rewardDescription: "boosts to E based on Softcap Points (start at 20000).",
   rewardEffect() {
   let bas = Decimal.pow(challengeCompletions("E", 12),1.35)
   let eff = player.s.points.max(20000).sub(19990).log(10).pow(bas)
   if(hasUpgrade("B",85)) eff=eff.pow(1.2)
   if(eff.gte(2)) eff=eff.div(2).pow(0.5).mul(2)//Sc120
   if(eff.gte(10)) eff=eff.div(10).pow(0.5).mul(10)//Sc123
   if (challengeCompletions("E", 12) >= 1)  return eff
   else return new Decimal(1)
  },
  rewardDisplay() {return format(this.rewardEffect(),3)+"x"},
   },
   21: {//31 after 1e45
  name: "Ec3",
  completionLimit: 3,
  challengeDescription: function() {
   return "Reset points, and A and B points and buyables. Eb1-2's effect are stuck at 1e-100. <br> Completion: " +challengeCompletions("E", 21) + "/3"},
  unlocked() { return (hasMilestone("E", 7))},
  goal(){
  let goal = [n("4.35e435"),n("4.53e453"),n("4.71e471")]
  return goal[challengeCompletions("E",21)]
  },  
  goalDescription:  function() {return format(this.goal())+" B"},
  onEnter() {
  player.A.points=n(0);player.B.points=n(0);player.points=n(0)
  player.A.buyables={11:n(0),12:n(0)};player.B.buyables={11:n(0),12:n(0),13:n(0),21:n(0),22:n(0),23:n(0)}
   },
  canComplete(){return player.B.points.gte(this.goal())},
  rewardDescription: "boosts to A and B directly based on themselves.",
  rewardEffect() {
   let eff0 = player.A.points.pow(challengeCompletions("E",21)).pow(0.01).max(1)
   let eff1 = player.B.points.pow(challengeCompletions("E",21)).pow(0.01).max(1)
   if(hasMilestone("E",8)) {eff0=eff0.pow(1.25);eff1=eff1.pow(1.25)}
   if(hasUpgrade("B",85)) {eff0=eff0.pow(1.2);eff1=eff1.pow(1.2)}
   if(eff0.gte(1e25)) eff0=eff0.div(1e25).pow(0.5).mul(1e25)//Sc142
   if(eff1.gte(1e25)) eff1=eff1.div(1e25).pow(0.5).mul(1e25)//Sc143
   if(challengeCompletions("E", 21)>=1) return [eff0,eff1]
   else return [n(1),n(1)]
  },
  rewardDisplay() {return format(this.rewardEffect()[0])+"x A and "+format(this.rewardEffect()[1])+"x B"},
   },
   22: {//41 after 1e47
  name: "Ec4",
  completionLimit: 3,
  challengeDescription: function() {
   return "Reset points, and A and B points and buyables.<br>Nerf B based on B. <br> Completion: " +challengeCompletions("E", 22) + "/3 <br> currently: ^"+format(this.nerf(),6)},
  unlocked() { return (hasMilestone("E", 7))},
  goal(){
  let goal = [n("3.65e365"),n("3.75e375"),n("3.91e391")]
  return goal[challengeCompletions("E",22)]
  },
  nerf() { return player.B.points.add(10).log(10).pow(-0.1)},  
  goalDescription:  function() {return format(this.goal())+" B"},
  onEnter() {
  player.A.points=n(0);player.B.points=n(0);player.points=n(10)
  player.A.buyables={11:n(0),12:n(0)};player.B.buyables={11:n(0),12:n(0),13:n(0),21:n(0),22:n(0),23:n(0)}
   },
  canComplete(){return player.B.points.gte(this.goal())},
  rewardDescription: "boosts to C and D directly based on themselves.",
  rewardEffect() {
   let eff0 = player.C.points.pow(challengeCompletions("E",22)).pow(0.01).max(1)
   let eff1 = player.D.points.pow(challengeCompletions("E",22)).pow(0.01).max(1)
   if(hasMilestone("E",9)) {eff0=eff0.pow(1.25);eff1=eff1.pow(1.25)}
   if(hasUpgrade("B",85)) {eff0=eff0.pow(1.2);eff1=eff1.pow(1.2)}
   if(eff0.gte(1e15)) eff0=eff0.div(1e15).pow(0.5).mul(1e15)//Sc144
   if(eff1.gte(1e10)) eff1=eff1.div(1e10).pow(0.5).mul(1e10)//Sc145
   if(challengeCompletions("E", 22)>=1) return [eff0,eff1]
   else return [n(1),n(1)]
  },
  rewardDisplay() {return format(this.rewardEffect()[0])+"x C and "+format(this.rewardEffect()[1])+"x D"},
   },
   31: {//51
  name: "Ec5",
  completionLimit: 5,
  challengeDescription: function() {
   return "Reset points, A,B buyables are disabled. You can't get points and points ÷"+format(this.nerf())+". <br> Completion: " +challengeCompletions("E", 31) + "/5<br>Current Raw Points: "+format(getRawPointsGen())},
  unlocked() { return (hasMilestone("E", 14))},
  goal(){
   let goal = [n("1e33333"),n("1e12345"),n("1e88888"),n("1e2000"),n("1e20250")]
  return goal[challengeCompletions("E",31)]
  },  
  goalDescription:  function() {return format(this.goal())+" Raw Points"},
  onEnter() {
  player.points=n(10)
   },
  nerf() {
   let nerf = [n("e1.56e7"),n("e1.58e7"),n("e1.59e7"),n("e1.64e7"),n("e1.64e7"),n(1)]
  return nerf[challengeCompletions("E",31)]
  },
  canComplete(){return getRawPointsGen().gte(this.goal())},
  rewardDescription: "Boost E Gainmult based on completions and Em.",
  rewardEffect() {
   let eff=n(1).add(n(challengeCompletions("E", 31)).div(player.E.Em.max(10).log(10).pow(-1).mul(1000)))
   if (challengeCompletions("E", 31) >= 5) eff=eff.pow(1.1)
   if (challengeCompletions("E", 31) >= 1)  return eff
   else return new Decimal(1)
  },
  rewardDisplay() {return "^"+format(this.rewardEffect(),4)},
   },
   32: {//61
  name: "Ec6",
  completionLimit: 5,
  challengeDescription: function() {
   return "Reset Points and nerf Points based on completions. <br> Completion: " +challengeCompletions("E", 32) + "/5 <br> currently: ^"+formatSmall(this.nerf())},
  unlocked() { return (hasMilestone("E", 14))},
  goal(){
   let goal = [n(1e164),n(3e79),n(1e43),n(2.9e29),n(1e23),n(0)]
  return goal[challengeCompletions("E",32)]
  },   
  onEnter() {
  player.points=n(10)
   },
  nerf() { return n(challengeCompletions("E",32)).add(1).pow(0.5).mul(10).pow(-4)},  
  goalDescription:  function() {return format(this.goal())+" points"},
  canComplete(){return player.points.gte(this.goal())},
  rewardDescription: "Ec6 comp add to Eb6-7 base.",
  rewardEffect() {
   let eff=n(challengeCompletions("E", 32)).mul(0.2) 
   return eff
  },
  rewardDisplay() {return "+"+format(this.rewardEffect())},
   },
   41: {
  name: "Ec7",
  completionLimit: 5,
  challengeDescription: function() {
   return "Reset Points, A and B. Nerf A and B based on completions. (don't apply to directMult) <br> Completion: " +challengeCompletions("E", 41) + "/5 <br> currently: ^"+formatSmall(this.nerf())},
  unlocked() { return (hasMilestone("E", 17))},
  onEnter() {
  setClickableState("t",11,1);player.points=n(10);player.A.points=n(0);player.B.points=n(0);setClickableState("t",11,0)
   },
  goal(){
   let goal = [n(1.66e166),n(1.94e194),n(2.14e214),n(2.25e225),n(2.36e236),n(0)]
  return goal[challengeCompletions("E",41)]
  },   
  goalDescription:  function() {return format(this.goal())+" A"},
  nerf() { return n(challengeCompletions("E",41)).add(1).pow(0.7).mul(5).pow(-3)},  
  canComplete(){return player.A.points.gte(this.goal())},
  rewardDescription: "Boost to Em and Ek based on E and completions.",
  rewardEffect() {
   let c=n(challengeCompletions("E", 41)).mul(0.1)
   let eff=c.add(1).mul(player.E.points.max(1e200).log(10).div(200).pow(c))
   eff=sc(eff,n(1.15),0.2)//Sc180
   return eff
  },
  rewardDisplay() {return "^"+format(this.rewardEffect(),3)},
   },
   42: {
  name: "Ec8",
  completionLimit: 5,
  challengeDescription: function() {
   return "Reset E and nerf E based on completions. <br> Completion: " +challengeCompletions("E", 42) + "/5 <br> currently: ^"+formatSmall(this.nerf())},
  unlocked() { return (hasMilestone("E", 17))},
  goal(){
   let goal = [n(1e88),n(3e90),n(9.1e91),n(9.2e92),n(9.3e93),n(0)]
  return goal[challengeCompletions("E",42)]
  },   
  onEnter() {
  setClickableState("t",11,1)
  player.E.points=n(0)
  setClickableState("t",11,0)
   },
  goalDescription:  function() {return format(this.goal())+" E/s"},
  nerf() { return n(challengeCompletions("E",42)).add(1).pow(0.3).mul(4).pow(-2)},  
  canComplete(){return n(tmp.E.resetGain).mul(tmp.E.passiveGeneration).gte(this.goal())},
  rewardDescription: "Boosts to Em/Ek effect exp.",
  rewardEffect() {
   let eff=n(challengeCompletions("E", 42)).mul(0.01)
   if(eff.gt(0.03)) eff=eff.sub(0.03).mul(0.04).add(0.03)//Sc183
   return eff
  },
  rewardDisplay() {return "Em/Ek exp +"+format(this.rewardEffect())},
   },
  },
  emgain() {
   let eff = new Decimal(1)
   eff=Decimal.mul(eff,(buyableEffect("E", 31)))
  eff=Decimal.mul(eff,(buyableEffect("E", 32)))
  eff=Decimal.mul(eff,(buyableEffect("E", 33)))
  eff=eff.mul(hasUpgrade("E",73)?ue("E",73):1)
  eff=eff.mul(hasUpgrade("E",102)?ue("E",102):1)
  if(hasChallenge("E",41)) eff=eff.pow(challengeEffect("E",41))
   eff=sc(eff,n(1e100),0.6)//Sc180
   return eff;
  },
  emExp() {
   let exp=0.25
   if (hasMilestone("E",12))  exp=Decimal.add(exp,0.01)
   if (hasMilestone("E",13))  exp=Decimal.add(exp,0.01)
   if (hasUpgrade("E",103))  exp=Decimal.add(exp,0.01)  
   if (hasUpgrade("E",106))  exp=Decimal.add(exp,0.01)  
   if (hasChallenge("E", 42))  exp = Decimal.add(exp,challengeEffect("E",42))   
   return exp
  },
  emf() {
   let exp=tmp.E.emExp
   let eff=player.E.Em.max(1).pow(exp)
   return eff
  },
  ekgain() {
   let eff = new Decimal(1)
   eff=Decimal.mul(eff,(buyableEffect("E", 41)))
   eff=Decimal.mul(eff,(buyableEffect("E", 42)))
   eff=eff.mul(hasUpgrade("E",104)?ue("E",104):1)
   if(hasChallenge("E",41)) eff=eff.pow(challengeEffect("E",41))
   eff=sc(eff,n(1e20),0.8)//Sc179
   eff=sc(eff,n(1e40),0.8)//Sc182
   return eff;
  },
  ekexp() {
   let exp=n(0.25)
   if (hasChallenge("E", 42))  exp = Decimal.add(exp,challengeEffect("E",42))
   if (hasUpgrade("E",105))  exp=Decimal.add(exp,0.01)  
   if (hasUpgrade("E",106))  exp=Decimal.add(exp,0.01)  
   return exp
  },
  ekf() {
   let exp=tmp.E.ekexp
   let eff=player.E.Ek.add(2).log(2).pow(exp)
   return eff
  },
})//E

addLayer("ac", {
   startData() { return {
   unlocked: true,
   }},
   color: "yellow",
   row: "side",
   tooltip() { // Optional, tooltip displays when the layer is locked
   return ("Achievements")
   },
   achievementPopups: true,
   achievements: {
   11: {
   name: "1. You Gotta Start Softcaps Somewhere",
   done() {return player.A.total.gte("1")}, 
   tooltip: "get 1 A", 
   },
   12: {
   name: "2. Unconstant",
   done() {return (hasUpgrade("A", 14))},
   tooltip: "get A1-A4", 
   },
   13: {
   name: "3. Dis-self Boosts",
   done() {return (hasUpgrade("A", 15))},
   tooltip: "get A5",
   },
   14: {
   name: "4. 100 is Well",
   done() {return player.A.total.gte("100")},
   tooltip: "get 100 A",
   },
   15: {
   name: "5. Logged",
   done() {return (hasUpgrade("A", 24))},
   tooltip: "get A9",
   },
   16: {
   name: "6. Why not Prestige",
   done() {return player.B.total.gte("1")},
   tooltip: "get 1 B",
   },
   17: {
   name: "6.5. Why not Softcaps",
   done() {return player.softcap.gte("5")},
   tooltip: "get 5 softcaps",
   },
   21: {
   name: "7. Constant^√2",
   done() {return (hasUpgrade("B", 15))},
   tooltip: "get B1-B5",
   },
   22: {
   name: "8. Primary Automation^2",
   done() {return (hasUpgrade("B", 23))},
   tooltip: "get B8", 
   },
   23: {
   name: "9. Not so Challenging",
   done() {return (hasUpgrade("B", 25))},
   tooltip: "unlock A chal", 
   },
   24: {
   name: "10. Challenged",
   done() {return (hasChallenge("A", 11))},
   tooltip: "complete Ac1", 
   },
   25: {
   name: "11. Challenged*3",
   done() {return (hasChallenge("A", 21))},
   tooltip: "complete Ac3", 
   },
   26: {
   name: "12. Row 1 Full",
   done() {return (hasUpgrade("B", 36))},
   tooltip: "get B15.5", 
   },
   27: {
   name: "12.5. Struggling for Points",
   done() {return (player.points.gte(1e12))},
   tooltip: "get 1e12 points.", 
   },
   31: {
   name: "13. Row 2 why does Prestige",
   done() {return player.C.total.gte("1")},
   tooltip: "unlock C",
   },
   32: {
   name: "14. Hidden Upgrades",
   done() {return (hasUpgrade("A", 41))},
   tooltip: "get A16", 
   },
   33: {
   name: "15. A set of Timewall",
   done() {return (hasUpgrade("A", 46))},
   tooltip: "get A20.5", 
   },
   34: {
   name: "16. Not Clickable",
   done() {return (hasUpgrade("C", 26))},
   tooltip: "get C10.5", 
   },
   35: {
   name: "17. Thanks no Reset",
   done() {return player.D.total.gte(1)},
   tooltip: "unlock D",
   },
   36: {
   name: "18. Constant^3",
   done() {return (hasUpgrade("D", 14))},
   tooltip: "get D1-D4", 
   },
   37: {
   name: "18.5. Hyper Reduce",
   done() {return ue("A",11).gte(1e30)},
   tooltip: "get the first exponential softcap (Sc37)", 
   },
   41: {
   name: "19. Hidden Upgrades^2",
   done() {return (hasUpgrade("A", 52))},
   tooltip: "get A22", 
   },
   42: {
   name: "20. Imperfect Exponential",
   done() {return (hasUpgrade("D", 21))},
   tooltip: "get D6", 
   },
   43: {
   name: "21. First Buyable",
   done() { return hasMilestone("D",2)},
   tooltip: "unlock B buyable",
   },
   44: {
   name: "22. Row 1 Boosts",
   done() { return hasUpgrade("B",41)},
   tooltip: "unlock Bb2",
   },
   45: {
   name: "23. More Powerful",
   done() { return hasUpgrade("B",44)},
   tooltip: "get B19",
   },
   46: {
   name: "24. Multi Effect",
   done() { return hasUpgrade("B",52)},
   tooltip: "get B22",
   },
   47: {
   name: "24.5. Deserve it",
   done() { return player.points.gte(1e100)},
   tooltip: "get a googol(1e100) points",
   },
   51: {
   name: "25. Remarkable",
   done() { return hasMilestone("B",0)},
   tooltip: "get a B milestone",
   },
   52: {
   name: "26. Isn't it too early?",
   done() {return (hasChallenge("A", 32))},
   tooltip: "complete Ac6", 
   },
   53: {
   name: "27. Googol again?",
   done() {return player.A.total.gte("1e100")},
   tooltip: "get 1e100 A", 
   },
   54: {
   name: "28. Feel Free",
   done() { return hasMilestone("B",2)},
   tooltip: "autobuy B buyable",
   },
   55: {
   name: "29. A Real Wall",
   done() {return (hasChallenge("D",21))},
   tooltip: "complete Dc3", 
   },
   56: {
   name: "30. Age of Automation",
   done() { return hasMilestone("B",5)},
   tooltip: "Auto buy A buyables.",
   },
   57: {
   name: "30.5. Age of Destabilization",
   done() { return player.points.gte(1.79e308)},
   tooltip: "Get 1.79e308 points.",
   },
   61: {
   name: "31. Year in B",
   done() { return hasMilestone("B",6)},
   tooltip: "get 3.65e365 B.",
   },
   62: {
   name: "32. Year in Points",
   done() { return player.points.gte("3.65e365")},
   tooltip: "get 3.65e365 points",
   },
   63: {
   name: "33. A set of Timewall^30.5",
   done() {return (hasUpgrade("A", 66))},
   tooltip: "get A30.5", 
   },
   64: {
   name: "34. The Grand Finale",
   done() {return challengeCompletions("A",41)>=10},
   tooltip: "complete Ac7 for 10 times.", 
   },
   65: {
   name: "35. 'E'asy Game",
   done() {return player.E.total.gte("1")}, 
   tooltip: "get 1 E", 
   },
   66: {
   name: "36. 'Multi Effect'",
   done() {return hasUpgrade("E",16)}, 
   tooltip: "get E5.5", 
   },
   67: {
   name: "36.5. Eternal Challenges",
   done() {return (hasMilestone("E", 2))},
   tooltip: "unlock E chal", 
   },
   71: {
   name: "37. Fractal Engine",
   done() {return challengeCompletions("A",41)>=10.24},
   tooltip: "complete Ac7 for 10.24 times.", 
   },
   72: {
   name: "38. E Billionaire",
   done() {return player.E.total.gte("1e9")}, 
   tooltip: "get 1e9 E", 
   },
   73: {
   name: "39. Just for E",
   done() { return (challengeCompletions("E", 11) >= 3)},
   tooltip: "complete Ec1x3",
   },
   74: {
   name: "40. A bigger Timewall",
   done() {return (challengeCompletions("E", 12) >= 2)},
   tooltip: "complete Ec2x2", 
   },
   75: {
   name: "41. Shown Upgrades",
   done() {return hasUpgrade("C",36)},
   tooltip: "get C15.5",
   },
   76: {
   name: "42. Toooooooo Early???!!!",
   done() {return (hasUpgrade("E", 45))},
   tooltip: "unlock Bb10", 
   },
   77: {
   name: "42.5. Capped Amount",
   done() {return gba("E",11).gte(40)},
   tooltip: "Reach the cap of a E buyable.", 
   },
   81: {
   name: "43. Here's the Guy",
   done() {return player.B.points.gte("6.16e616")},
   tooltip: "get 6.16e616 B", 
   },
   82: {
   name: "44. ABout Challenging DEstruction…",
   done() {return (challengeCompletions("E", 22) >= 1)},
   tooltip: "complete Ec4x1", 
   },
   83: {
   name: "45. Maelstrom Silenced",
   done() {return gba("E",24).gte(40)},
   tooltip: "Reach the cap of All E buyables.", 
   },
   84: {
   name: "46. Powerful 700",
   done() { return player.B.points.gte("1e700")},
   tooltip: "get 1e700 B",
   },
   85: {
   name: "47. No more Walls?",
   done() {return player.softcap.gte(150)},
   tooltip: "get 150 softcaps", 
   },
   86: {
   name: "48. The EMpire",
   done() {return (hasMilestone("E",11))},
   tooltip: "unlock Em", 
   },
   87: {
   name: "48.5. Less or Equal than 0.0001",
   done() {return layers.E.buyables[13].cost().lte(0.0001)},
   tooltip: "Make the cost of Eb3 less or equal than 0.0001.", 
   },
   91: {
   name: "49. Em Boosted",
   done() {return player.E.Em.gte("1e10")},
   tooltip: "get 1e10 Em",
   },
   92: {
   name: "50. Googol E",
   done() {return player.E.points.gte("1e100")},
   tooltip: "get 1e100 E",
   },
   93: {
   name: "51. Massively",
   done() {return player.A.points.gte("1e1000")},
   tooltip: "get 1e1000 A!!", 
   },
   94: {
   name: "52. Struggling again",
   done() {return (challengeCompletions("E", 32) >= 1)},
   tooltip: "complete Ec6x1", 
   },
   95: {
   name: "53. Ek ruby",
   done() {return (hasMilestone("E",16))},
   tooltip: "unlock Ek", 
   },
   96: {
   name: "54. 10 Rows of Upgrades",
   done() {return (hasUpgrade("E", 101))},
   tooltip: "get E46", 
   },
   97: {
   name: "54.5. The Answer to Everything",
   done() {return (gba("E",11).gte(42))},
   tooltip: "get 42 Eb1", 
   },
   101: {
   name: "55. GOODRAGE",
   done() {return player.E.points.gte("2e222")},
   tooltip: "get 2e222 E",
   },
   102: {
   name: "56. Getting slower again",
   done() {return (hasUpgrade("E", 104))},
   tooltip: "get E49", 
   },
   103: {
   name: "57. Raising exp",
   done() {return (challengeCompletions("E", 42) >= 2)},
   tooltip: "complete Ec8x2", 
   },
   104: {
   name: "58. Experienced",
   done() {return challengeCompletions("E", 41) >= 5},
   tooltip: "complete Ec7x5", 
   },
   105: {
   name: "59. Reasonable Upgrades",
   done() {return (hasUpgrade("E", 106))},
   tooltip: "get E50.5", 
   },
   106: {
   name: "60. Constructed World",
   done() {return challengeCompletions("E", 42) >= 5},
   tooltip: "complete Ec8x5",
   },
   107: {
   name: "60. Infinite Energy -Overdoze-",
   done() {return player.E.points.gte(1.79e308)},
   tooltip: "get 1.79e308 E.",
   },
   },
   tabFormat: ["blank", ["display-text", function() {
   return "<h3 style='color: yellow;'>Achievements: " + player.ac.achievements.length + "/70 </h3>" }
   ], "blank", "blank", "achievements", ],
},
)//A
addLayer("s", {
 infoboxes: {
 introBox: {
 title: "Softcaps",
 body(){return "This layer displays all the Softcaps in all now, it really cost me a lot of time!!!"},
  },
 ScBox: {
 title: "Softcap Formulas",
 body(){return "This tab displays all the Softcap Formulas in all now, the formula will be displayed like 'a,b', a means when the softcap starts at, and b means the strength of the softcap. For example, '10,0.5' means the resource beyond 10 is raised to 0.5 power. And '1e100,exp0.8' means the resource's exponent beyond 100 is raised to 0.8 power, in this way, 1e300 will be 2.06e169"},
  },
},
 name: "Softcaps",
 startData() { return {
  unlocked: true,
  points: n(0),
 }},
 symbol: "S",
  color: "#ffffff",
 row: "side",
 tooltip() { // Optional, tooltip displays when the layer is locked
  return ("Softcaps")
 },
 resource: "Softcap Points",
 update(diff) {
  player.s.points=tmp.s.spCal
 },
 tabFormat: {
 "Softcaps": {
  content: [ ["infobox","introBox"],
  ["display-text",function() {return softcapCal()[1]}]
  ]
  },
 "Softcap Formulas": {
  content: [ ["infobox","ScBox"],
  ["display-text",function() {return softcapCal()[2]}]
  ]
  },
 "Upgrades": {
        content: [// ["infobox","upgBox"],
        ["display-text",function() { return "You have "+format(player.softcap)+" Softcaps."}, ],
        ["display-text",function() { return "You have "+format(player.s.points)+" Softcap Points"}, ],
        ["display-text",function() { return "You have "+player.s.points+" Softcap Points exactly"}, ],
    "upgrades",
],
unlocked(){return hasUpgrade("A",35)}
    },
 },
 spCal() {
  let sp=player.softcap
  if(hasUpgrade("D",16)) sp=sp.mul(ue("D",16))
  if(hasUpgrade("D",24)) sp=sp.mul(ue("D",24))
  if(hasUpgrade("C",16)) sp=sp.pow(2)
  if(hasUpgrade("C",26)) sp=sp.pow(3)
  if(hasChallenge("C",11)) sp=sp.pow(1.1)
  if(sp.gte(100)) sp=sp.div(1e2).pow(0.2).mul(1e2)//Sc29
  if(sp.gte(1000)) sp=sp.div(1e3).pow(0.04).mul(1e3)//Sc42
  if(sp.gte(2.5e4)) sp=sp.div(2.5e4).pow(0.1).mul(2.5e4)//Sc125
  return sp
 },
 upgrades: {
  11: {
  title:"ScU1",
  description: function() {return "Softcap Points boosts points.<br>Effect: " + format(this.effect()) +"x"},
  effect(){
 let eff=player.s.points.max(1)
 if(eff.gte(10)) eff=eff.div(10).pow(0.6).mul(10)//Sc11
 return eff
  },
  cost:new Decimal(10),
 },
  12: {
  title:"ScU2",
  description: function() {return "Softcap Points boosts A and B.<br>Effect: " + format(this.effect()) +"x"},
  effect(){
 let eff=player.s.points.max(1).pow(0.5)
 if(eff.gte(4)) eff=eff.div(4).pow(0.7).mul(4)//Sc17
 return eff
  },
  cost:new Decimal(16),
  unlocked() {return hasUpgrade("s",11)},
 },
  13: {
  title:"ScU3",
  description: function() {return "Softcap Points boosts A9<br>Effect: ^" + format(this.effect()) },
  effect(){
 let eff=player.s.points.max(1).pow(0.3).log(2).max(1)
 return eff
  },
  cost:new Decimal(21),
  unlocked() {return hasUpgrade("s",12)},
 },
  14: {
  title:"ScU4",
  description: function() {return "Softcap Points boosts A5<br>Effect: ^" + format(this.effect()) },
  effect(){
 let eff=player.s.points.max(1).pow(0.5).log(4).max(1)
 return eff
  },
  cost:new Decimal(25),
  unlocked() {return hasUpgrade("s",13)},
 },
  15: {
  title:"ScU5",
  description: function() {return "Softcap Points boosts C3<br>Effect: ^" + format(this.effect()) },
  effect(){
 let eff=player.s.points.max(1).pow(0.8).log(8).max(1)
 return eff
  },
  cost:new Decimal(155),
  unlocked() {return hasUpgrade("s",14)},
 },
  16: {
  title:"ScU6",
  description: function() {return "Softcap Points boosts C.<br>Effect: " + format(this.effect()) +"x"},
  effect(){
 let eff=player.s.points.max(1).pow(0.5)
 if(eff.gte(10)) eff=eff.div(10).pow(0.5).mul(10)//Sc39
 return eff
  },
  cost:new Decimal(170),
  unlocked() {return hasUpgrade("s",15)},
 },
  21: {
  title:"ScU7",
  description: function() {return "Softcap Points boosts D.<br>Effect: " + format(this.effect()) +"x"},
  effect(){
 let eff=player.s.points.max(1).pow(0.33)
 if(eff.gte(10)) eff=eff.div(10).pow(0.5).mul(10)//Sc47
 return eff
  },
  cost:new Decimal(1125),
  unlocked() {return hasUpgrade("D",16)},
 },
  22: {
  title:"ScU8",
  description: function() {return "Softcap Points boosts D1<br>Effect: ^" + format(this.effect()) },
  effect(){
 let eff=player.s.points.max(1).pow(0.7).log(7).max(1)
 return eff
  },
  cost:new Decimal(1160),
  unlocked() {return hasUpgrade("s",21)},
 },
  23: {
  title:"ScU9",
  description: function() {return "Softcap Points boosts D10<br>Effect: ^" + format(this.effect()) },
  effect(){
 let eff=player.s.points.max(1).pow(0.6).log(6).max(1)
 return eff
  },
  tooltip:"Don't worry, it's not too powerful",
  cost:new Decimal(1818),
  unlocked() {return hasUpgrade("s",22)},
 },
  24: {
  title:"ScU10",
  description: function() {return "Softcap Points boosts D15.5<br>Effect: ^" + format(this.effect()) },
  effect(){
 let eff=player.s.points.max(1).pow(0.4).log(10).max(1)
 return eff
  },
  cost:new Decimal(3000),
  unlocked() {return hasUpgrade("s",23)},
 },
  25: {
  title:"ScU11",
  description: function() {return "Softcap Points boosts Ab1 base<br>Effect: ^" + format(this.effect()) },
  effect(){
 let eff=player.s.points.max(1).pow(0.1).log(2).max(1)
 return eff
  },
  cost:new Decimal(4747),
  unlocked() {return hasUpgrade("s",24)},
 },
  26: {
  title:"ScU12",
  description: function() {return "Softcap Points boosts Ab2 base<br>Effect: +" + format(this.effect()) },
  effect(){
 let eff=player.s.points.max(1).pow(0.3).log(9).sub(1).max(0)
 return eff
  },
  cost:new Decimal(6000),
  unlocked() {return hasUpgrade("s",25)},
 },
  31: {
  title:"ScU13",
  description: function() {return "Softcap Points boosts E.<br>Effect: " + format(this.effect()) +"x"},
  effect(){
 let eff=player.s.points.max(10).log(10).pow(0.75)
 if(hasMilestone("E",6)) eff=eff.pow(2.5)
 if(eff.gte(2)) eff=eff.div(2).pow(0.5).mul(2)//Sc126
 if(eff.gte(5)) eff=eff.div(5).pow(0.5).mul(5)//Sc133
 return eff
  },
  cost:new Decimal(25050),
  unlocked() {return hasUpgrade("E",43)},
 },
  32: {
  title:"ScU14",
  description: function() {return "Softcap Points boosts D1 (ignore softcaps).<br>Effect: ^" + format(this.effect(),3) },
  effect(){
 let eff=player.s.points.max(25000).log(10).sub(4.4).pow(0.3).add(1).max(1)
 return eff
  },
  tooltip:"effect starts at ~25118.8",
  cost:new Decimal(25100),
  unlocked() {return hasUpgrade("s",24)},
 },
 },
})//S
addLayer("t", {
  infoboxes: {
 introBox: {
  title: "Test",
  body(){return "A layer for tests"},
   },
},
 name: "test",
 symbol: "T",
 position: 0,
 startData() { return {
   unlocked() { return true},
 }},
  color: "#ffffff",
 type: "none", 
 exponent: 1, 
 row: 3, 
 layerShown(){ return true},
 devSpeedCal() {
  let dev=n(1)
  dev=dev.add(player.t.dev1?1:0)
  dev=dev.add(player.t.dev2?2:0)
  dev=dev.add(player.t.dev4?4:0)
  dev=dev.add(player.t.dev8?8:0)
  if(gcs("t",11)) dev=n(0)
  if(isEndgame()) dev=n(0)
  return dev
 },
 update(diff) {
  player.devSpeed=tmp.t.devSpeedCal
  player.softcap=n(softcapCal()[0])
 },
 clickables:{  
 11: {
 title(){return "Pause"},
 display: "Pause the game. Click it again to resume.",
 onClick() {
 if(gcs("t",11)==1) setClickableState("t",11,0)
 else setClickableState("t",11,1)
 },
 canClick() {return true},
 unlocked() {return true},
   },
 12: {
 title(){return "Play Time"},
 display() {
  let a=" isn't "
  if(gcs("t",12)==1) a=" is"
  return "Play time "+a+" displayed！"
 },
 onClick() {
 if(gcs("t",12)==1) setClickableState("t",12,0)
 else setClickableState("t",12,1)
 },
 canClick() {return true},
 unlocked() {return true},
   },
 13: {
 title(){return "FPS (Frames Per Second)"},
 display() {
  let a=" isn't "
  if(gcs("t",13)==1) a=" is"
  return "FPS "+a+" displayed！"
 },
 onClick() {
 if(gcs("t",13)==1) setClickableState("t",13,0)
 else setClickableState("t",13,1)
 },
 canClick() {return true},
 unlocked() {return true},
   },
 14: {
 title(){return "Raw Points"},
 display() {
  let a=" isn't "
  if(gcs("t",14)==1) a=" is"
  return "Raw Points (points gain without softcaps) "+a+" displayed！"
 },
 onClick() {
 if(gcs("t",14)==1) setClickableState("t",14,0)
 else setClickableState("t",14,1)
 },
 canClick() {return true},
 unlocked() {return true},
   },
 19: {
  title(){return "Toggle Shift"},
  display() {
   let a=" isn't "
   if(shitDown) a=" is "
  return "shift"+a+"clicked down. You can click on a layer to toggle its tooltip. (need related setting)"},
  onClick() {
  shitDown=!shitDown
  },
  canClick() {return true},
  unlocked() {return true},
    },
 21: {
 title(){return "Softcap Amount"},
 display() {
  let a=" isn't "
  if(gcs("t",21)==1) a=" is"
  return "Softcap Amount "+a+" displayed！"
 },
 onClick() {
 if(gcs("t",21)==1) setClickableState("t",21,0)
 else setClickableState("t",21,1)
 },
 canClick() {return true},
 unlocked() {return true},
   },
 22: {
 title(){return "A GainMult"},
 display() {
  let a=" isn't "
  if(gcs("t",22)==1) a=" is "
  return "A's GainMult"+a+"displayed！"
 },
 onClick() {
 if(gcs("t",22)==1) setClickableState("t",22,0)
 else setClickableState("t",22,1)
 },
 canClick() {return true},
 unlocked() {return true},
   },
 23: {
 title(){return "B GainMult"},
 display() {
  let a=" isn't "
  if(gcs("t",23)==1) a=" is "
  return "B's GainMult"+a+"displayed！"
 },
 onClick() {
 if(gcs("t",23)==1) setClickableState("t",23,0)
 else setClickableState("t",23,1)
 },
 canClick() {return true},
 unlocked() {return tmp.B.layerShown},
   },
 24: {
 title(){return "C GainMult"},
 display() {
  let a=" isn't "
  if(gcs("t",24)==1) a=" is "
  return "C's GainMult"+a+"displayed！"
 },
 onClick() {
 if(gcs("t",24)==1) setClickableState("t",24,0)
 else setClickableState("t",24,1)
 },
 canClick() {return true},
 unlocked() {return tmp.C.layerShown},
   },
 25: {
 title(){return "D GainMult"},
 display() {
  let a=" isn't "
  if(gcs("t",25)==1) a=" is "
  return "D's GainMult"+a+"displayed！"
 },
 onClick() {
 if(gcs("t",25)==1) setClickableState("t",25,0)
 else setClickableState("t",25,1)
 },
 canClick() {return true},
 unlocked() {return tmp.D.layerShown},
   },
 26: {
 title(){return "E GainMult"},
 display() {
  let a=" isn't "
  if(gcs("t",26)==1) a=" is "
  return "E's GainMult"+a+"displayed！"
 },
 onClick() {
 if(gcs("t",26)==1) setClickableState("t",26,0)
 else setClickableState("t",26,1)
 },
 canClick() {return true},
 unlocked() {return tmp.E.layerShown},
   },
 31: {
 title(){return "Softcap Point"},
 display() {
  let a=" isn't "
  if(gcs("t",31)==1) a=" is"
  return "Softcap Point "+a+" displayed！"
 },
 onClick() {
 if(gcs("t",31)==1) setClickableState("t",31,0)
 else setClickableState("t",31,1)
 },
 canClick() {return true},
 unlocked() {return true},
   },
 32: {
 title(){return "A DirectMult"},
 display() {
  let a=" isn't "
  if(gcs("t",32)==1) a=" is "
  return "A's DirectMult"+a+"displayed！"
 },
 onClick() {
 if(gcs("t",32)==1) setClickableState("t",32,0)
 else setClickableState("t",32,1)
 },
 canClick() {return true},
 unlocked() {return true},
   },
 33: {
 title(){return "B DirectMult"},
 display() {
  let a=" isn't "
  if(gcs("t",33)==1) a=" is "
  return "B's DirectMult"+a+"displayed！"
 },
 onClick() {
 if(gcs("t",33)==1) setClickableState("t",33,0)
 else setClickableState("t",33,1)
 },
 canClick() {return true},
 unlocked() {return tmp.B.layerShown},
   },
 34: {
 title(){return "C DirectMult"},
 display() {
  let a=" isn't "
  if(gcs("t",34)==1) a=" is "
  return "C's DirectMult"+a+"displayed！"
 },
 onClick() {
 if(gcs("t",34)==1) setClickableState("t",34,0)
 else setClickableState("t",34,1)
 },
 canClick() {return true},
 unlocked() {return tmp.C.layerShown},
   },
 35: {
 title(){return "D DirectMult"},
 display() {
  let a=" isn't "
  if(gcs("t",35)==1) a=" is "
  return "D's DirectMult"+a+"displayed！"
 },
 onClick() {
 if(gcs("t",35)==1) setClickableState("t",35,0)
 else setClickableState("t",35,1)
 },
 canClick() {return true},
 unlocked() {return tmp.D.layerShown},
   },
 36: {
 title(){return "E DirectMult"},
 display() {
  let a=" isn't "
  if(gcs("t",36)==1) a=" is "
  return "E's DirectMult"+a+"displayed！"
 },
 onClick() {
 if(gcs("t",36)==1) setClickableState("t",36,0)
 else setClickableState("t",36,1)
 },
 canClick() {return true},
 unlocked() {return tmp.E.layerShown},
   },
   },
   tabFormat: [
   "main-display","resource-display",
   "milestones",
   "clickables",
  ],
 milestones: {
  0: {requirementDescription: "toggle devSpeed",
  done() {return true}, 
  effectDescription: "The Game is too Slow? Use this to speed it up! Anyhow, I promise this game is balanced at normal speed. The buttons reffer to +1x,+2x,+4x,+8x speed, you can speed the game up to 16x.",
  toggles: [ ["t","dev1"],["t","dev2"],["t","dev4"],["t","dev8"], ],
   },
 },
})//T

function softcapCal() {//The most important function???
let sc="";scf="";//Softcap and Softcap Formula
if(uesc("A",11,n(2)) && !hasMilestone("AS", 0)) {
sc+="Sc1: Reduce A1's Effect<br>"
scf+="Sc1: 2,0.5<br>" }
if(uesc("A",15,n(2)) && !hasMilestone("AS", 1)) {
sc+="Sc2: Reduce A5's Effect<br>"
scf+="Sc2: 2,0.5<br>" }
if(tmp.A.gainMult.gte(2) && !hasMilestone("AS", 2)) {
sc+="Sc3: Reduce A's Gainmult<br>"
scf+="Sc3: 2,0.5<br>" }
if(uesc("A",11,n(10))) {
sc+="Sc4: Reduce A1's Effect<br>"
scf+="Sc4: 2,0.5<br>" }
if(uesc("A",24,n(2))) {
sc+="Sc5: Reduce A9's Effect<br>"
scf+="Sc5: 2,0.5<br>" }
if(uesc("A",24,n(5))) {
sc+="Sc6: Reduce A9's Effect<br>"
scf+="Sc6: 5,0.6<br>" }
if(uesc("A",24,n(10))) {
sc+="Sc7: Reduce A9's Effect<br>"
scf+="Sc7: 10,0.7<br>" }
if(uesc("A",35,n(5))) {
sc+="Sc8: Reduce A15's Effect<br>"
scf+="Sc8: 5,0.5<br>" }
if(getPointGen().gte(1e4)) {
sc+="Sc9: Reduce Points Gain<br>"
scf+="Sc9: 1e4,0.5<br>" }
if(uesc("B",11,n(5))) {
sc+="Sc10: Reduce B1's Effect<br>"
scf+="Sc10: 5,0.5<br>" }
if(uesc("s",11,n(10))) {
sc+="Sc11: Reduce ScU1's Effect<br>"
scf+="Sc11: 10,0.6<br>" }
if(uesc("B",16,n(2.5))) {
sc+="Sc12: Reduce B5.5's Effect<br>"
scf+="Sc12: 2.5,0.5<br>" }
if(uesc("B",21,n(4))) {
sc+="Sc13: Reduce B6's Effect<br>"
scf+="Sc13: 4,0.5<br>" }
if(getPointGen().gte(1e6)) {
sc+="Sc14: Reduce Points Gain<br>"
scf+="Sc14: 1e6,0.6<br>" }
if(tmp.B.gainMult.gte(10)) {
sc+="Sc15: Reduce B's Gainmult<br>"
scf+="Sc15: 10,0.5<br>" }
if(uesc("B",11,n(100))) {
sc+="Sc16: Reduce B1's Effect<br>"
scf+="Sc16: 100,0.5<br>" }
if(uesc("s",12,n(4))) {
sc+="Sc17: Reduce ScU2's Effect<br>"
scf+="Sc17: 4,0.7<br>" }
if(uesc("B",26,n(5))) {
sc+="Sc18: Reduce B10.5's Effect<br>"
scf+="Sc18: 5,0.5<br>" }
if(uesc("A",15,n(100))) {
sc+="Sc19: Reduce A5's Effect<br>"
scf+="Sc19: 100,0.5<br>" }
if(uesc("B",21,n(25))) {
sc+="Sc20: Reduce B6's Effect<br>"
scf+="Sc20: 25,0.2<br>" }
if(getPointGen().gte(1e8)) {
sc+="Sc21: Reduce Points Gain<br>"
scf+="Sc21: 1e8,0.7<br>" }
if(uesc("A",24,n(100))) {
sc+="Sc22: Reduce A9's Effect<br>"
scf+="Sc22: 100,0.8<br>" }
if(uesc("A",15,n(1e6))) {
sc+="Sc23: Reduce A5's Effect<br>"
scf+="Sc23:1e6,0.5<br>" }
if(getPointGen().gte(1e10)) {
sc+="Sc24: Reduce Points Gain<br>"
scf+="Sc24:1e10,0.8<br>" }
if(uesc("B",11,n(1000))) {
sc+="Sc25: Reduce B1's Effect<br>"
scf+="Sc25:1000,0.5<br>" }
if(uesc("C",13,n(1e5))) {
sc+="Sc26: Reduce C3's Effect<br>"
scf+="Sc26:1e5,0.25<br>" }
if(uesc("B",21,n(1e6))) {
sc+="Sc27: Reduce B6's Effect<br>"
scf+="Sc27: 1e6,0.1<br>" }
if(uesc("C",11,n(1e5))) {
sc+="Sc28: Reduce C1's Effect<br>"
scf+="Sc28: 1e5,0.4<br>" }
if(player.s.points.gte(100)) {
sc+="Sc29: Reduce Softcap Points Gain<br>"
scf+="Sc29: 100,0.2<br>" }
if(uesc("A",35,n(1e10))) {
sc+="Sc30: Reduce A15's Effect<br>"
scf+="Sc30: 1e10,0.1<br>" }
if(uesc("C",13,n(1e10))) {
sc+="Sc31: Reduce C3's Effect<br>"
scf+="Sc31: 1e10,0.25<br>" }
if(uesc("A",11,n(1e10))) {
sc+="Sc32: Reduce A1's Effect<br>"
scf+="Sc32: 1e10,0.7<br>" }
if(tmp.C.gainMult.gte(10)) {
sc+="Sc33: Reduce C's Gainmult<br>"
scf+="Sc33: 10,0.5<br>" }
if(uesc("B",16,n(1e4))) {
sc+="Sc34: Reduce B5.5's Effect<br>"
scf+="Sc34: 1e6,0.1<br>" }
if(uesc("A",11,n(1e12))) {
sc+="Sc35: Reduce A1's Effect<br>"
scf+="Sc35: 1e12,0.8<br>" }
if(uesc("A",11,n(1e25))) {
sc+="Sc36: Reduce A1's Effect<br>"
scf+="Sc36: 1e25,0.9<br>" }
if(uesc("A",11,n(1e30))) {
sc+="Sc37: Decrease A1's Effect<br>"
scf+="Sc37: 1e30,exp0.1<br>" }
if(uesc("C",13,n(1e20))) {
sc+="Sc38: Reduce C3's Effect<br>"
scf+="Sc38: 1e20,0.25<br>" }
if(uesc("s",16,n(10))) {
sc+="Sc39: Reduce ScU6's Effect<br>"
scf+="Sc39: 10,0.5<br>" }
if(uesc("C",11,n(1e10))) {
sc+="Sc40: Reduce C1's Effect<br>"
scf+="Sc40: 1e10,0.4<br>" }
if(tmp.C.gainMult.gte(1e5)) {
sc+="Sc41: Reduce C's Gainmult<br>"
scf+="Sc41: 1e5,0.2<br>" }
if(player.s.points.gte(1000)) {
sc+="Sc42: Reduce Softcap Points Gain<br>"
scf+="Sc42: 1000,0.04<br>" }
if(getPointGen().gte(1e35)) {
sc+="Sc43: Reduce Points Gain<br>"
scf+="Sc43: 35,0.9<br>" }
if(uesc("B",16,n(1e6))) {
sc+="Sc44: Reduce B5.5's Effect<br>"
scf+="Sc44: 1e6,0.01<br>" }
if(uesc("D",11,n(1e6))) {
sc+="Sc45: Reduce D1's Effect<br>"
scf+="Sc45: 1e6,0.5<br>" }
if(uesc("D",15,n(1e3))) {
sc+="Sc46: Reduce D5's Effect<br>"
scf+="Sc46: 1e3,0.5<br>" }
if(uesc("s",21,n(10))) {
sc+="Sc47: Reduce ScU7's Effect<br>"
scf+="Sc47: 10,0.5<br>" }
if(tmp.A.gainMult.gte(1e7)) {
sc+="Sc48: Reduce A's Gainmult<br>"
scf+="Sc48: 1e7,0.3<br>" }
if(uesc("A",24,n(1e20))) {
sc+="Sc49: Reduce A9's Effect<br>"
scf+="Sc49: 1e20,0.9<br>" }
if(uesc("A",35,n(1e20))) {
sc+="Sc50: Reduce A15's Effect<br>"
scf+="Sc50: 1e20,0.1<br>" }
if(uesc("D",15,n(1e5))) {
sc+="Sc51: Reduce D5's Effect<br>"
scf+="Sc51: 1e5,0.5<br>" }
if(uesc("D",11,n(1e20))) {
sc+="Sc52: Reduce D1's Effect<br>"
scf+="Sc52: 1e20,0.25<br>" }
if(uesc("D",26,n(1e8))) {
sc+="Sc53: Reduce D10.5's Effect<br>"
scf+="Sc53: 1e8,0.5<br>" }
if(tmp.B.gainMult.gte(1e10)) {
sc+="Sc54: Reduce B's Gainmult<br>"
scf+="Sc54: 1e10,0.5<br>" }
if(uesc("D",32,n(10))) {
sc+="Sc55: Reduce D12's Effect<br>"
scf+="Sc55: 10,0.5<br>" }
if(tmp.D.gainMult.gte(1e4)) {
sc+="Sc56: Reduce D's Gainmult<br>"
scf+="Sc56: 1e4,0.4<br>" }
if(tmp.C.gainMult.gte(1e9)) {
sc+="Sc57: Reduce C's Gainmult<br>"
scf+="Sc57: 1e9,0.4<br>" }
if(uesc("D",11,n(1e100))) {
sc+="Sc58: Decrease D1's Effect<br>"
scf+="Sc58: 100,exp0.1<br>" }
if(tmp.A.gainMult.gte(1e9)) {
sc+="Sc59: Reduce A's Gainmult<br>"
scf+="Sc59: 1e9,0.3<br>" }
if(uesc("D",25,n(1e4))) {
sc+="Sc60: Reduce D10's Effect<br>"
scf+="Sc60: 1e5,0.25<br>" }
if(uesc("D",32,n(1e4))) {
sc+="Sc61: Reduce D12's Effect<br>"
scf+="Sc61: 1e4,0.5<br>" }
if(uesc("D",21,n(1e10))) {
sc+="Sc62: Reduce D6's Effect<br>"
scf+="Sc62: 1e10,0.5<br>" }
if(tmp.B.gainMult.gte(1e25)) {
sc+="Sc63: Reduce B's Gainmult<br>"
scf+="Sc63: 1e25,0.5<br>" }
if(uesc("D",21,n(1e20))) {
sc+="Sc64: Reduce D6's Effect<br>"
scf+="Sc64: 1e20,0.5<br>" }
if(uesc("B",44,n(1e10))) {
sc+="Sc65: Reduce B19's Effect<br>"
scf+="Sc65: 1e10,0.5<br>" }
if(tmp.D.gainMult.gte(1e10)) {
sc+="Sc66: Reduce D's Gainmult<br>"
scf+="Sc66: 1e10,0.4<br>" }
if(tmp.C.gainMult.gte(1e20)) {
sc+="Sc67: Reduce C's Gainmult<br>"
scf+="Sc67: 1e20,0.3<br>" }
if(tmp.D.gainMult.gte(1e20)) {
sc+="Sc68: Reduce D's Gainmult<br>"
scf+="Sc68: 1e20,0.1<br>" }
if(tmp.B.gainMult.gte(1e40)) {
sc+="Sc69: Reduce B's Gainmult<br>"
scf+="Sc69: 1e40,0.5<br>" }
if(uesc("B",52,n(1e50))) {
sc+="Sc70: Reduce B19's Effect<br>"
scf+="Sc70: 1e30,0.5<br>" }
if(uesc("B",44,n(1e30))) {
sc+="Sc71: Reduce B22's Effect<br>"
scf+="Sc71: 1e50,0.25<br>" }
if(getPointGen().gte(1e100)) {
sc+="Sc72: Decrease Points Gain<br>"
scf+="Sc72: 100,exp0.8<br>" }
if(uesc("B",61,n(1e10))) {
sc+="Sc73: Reduce B26's Effect<br>"
scf+="Sc73: 1e10,0.5<br>" }
if(uesc("B",61,n(1e20))) {
sc+="Sc74: Reduce B26's Effect<br>"
scf+="Sc74: 1e20,0.5<br>" }
if(layers.B.buyables[11].base().gte(1e5)) {
sc+="Sc75: Reduce Bb1's Base<br>"
scf+="Sc75: 1e5,0.2<br>" }
if(layers.B.buyables[12].base().gte(1e5)) {
sc+="Sc76: Reduce Bb2's Base<br>"
scf+="Sc76: 1e5,0.2<br>" }
if(tmp.B.gainMult.gte(1e100)) {
sc+="Sc77: Reduce B's Gainmult<br>"
scf+="Sc77: 1e100,0.5<br>" }
if(uesc("B",61,n(1e50))) {
sc+="Sc78: Reduce B26's Effect<br>"
scf+="Sc78: 1e50,0.5<br>" }
if(tmp.D.gainMult.gte(1e30)) {
sc+="Sc79: Reduce D's Gainmult<br>"
scf+="Sc79: 1e30,0.5<br>" }
if(layers.B.buyables[23].base().gte(100)) {
sc+="Sc80: Reduce Bb5's Base<br>"
scf+="Sc80: 100,0.5<br>" }
if(uesc("B",61,n(1e80))) {
sc+="Sc81: Reduce B26's Effect<br>"
scf+="Sc81: 1e80,0.25<br>" }
if(uesc("B",61,n(1e100))) {
sc+="Sc82: Reduce B26's Effect<br>"
scf+="Sc82: 1e100,0.25<br>" }
if(layers.B.buyables[21].base().gte(1e5)) {
sc+="Sc83: Reduce Bb3's Base<br>"
scf+="Sc83: 1e5,0.2<br>" }
if(layers.B.buyables[22].base().gte(1e5)) {
sc+="Sc84: Reduce Bb4's Base<br>"
scf+="Sc84: 1e5,0.2<br>" }
if(buyableEffect("A",11).gte(1e200)) {
sc+="Sc85: Reduce Ab1's Effect<br>"
scf+="Sc85: 1e200,0.25<br>" }
if(uesc("B",11,n(1e30))) {
sc+="Sc86: Reduce B1's Effect<br>"
scf+="Sc86: 1e30,0.5<br>" }
if(tmp.C.gainMult.gte(1e60)) {
sc+="Sc87: Reduce C's Gainmult<br>"
scf+="Sc87: 1e60,0.6<br>" }
if(buyableEffect("A",12).gte(10)) {
sc+="Sc88: Reduce Ab2's Effect<br>"
scf+="Sc88: 10,0.5<br>" }
if(tmp.A.gainMult.gte(1e100)) {
sc+="Sc89: Reduce A's Gainmult<br>"
scf+="Sc89: 1e100,0.8<br>" }
if(buyableEffect("A",11).gte("1e500")) {
sc+="Sc90: Decrease Ab1's Effect<br>"
scf+="Sc90: 1e500,exp0.5<br>" }
if(getPointGen().gte(1e300)) {
sc+="Sc91: Decrease Points Gain<br>"
scf+="Sc91: 1e300,exp0.75<br>" }
if(tmp.B.gainMult.gte(1e250)) {
sc+="Sc92: Reduce B's Gainmult<br>"
scf+="Sc92: 1e250,0.5<br>" }
if(buyableEffect("A",12).gte(100)) {
sc+="Sc93: Reduce Ab2's Effect<br>"
scf+="Sc93: 100,0.5<br>" }
if(tmp.C.gainMult.gte(1e100)) {
sc+="Sc94: Reduce C's Gainmult<br>"
scf+="Sc94: 1e100,0.8<br>" }
if(uesc("A",61,n(1e50))) {
sc+="Sc95: Reduce A26's Effect<br>"
scf+="Sc95: 1e50,0.25<br>" }
if(buyableEffect("B",23).gte("1e1024")) {
sc+="Sc96: Reduce Bb5's Effect<br>"
scf+="Sc96: 1e1024,0.1<br>" }
if(tmp.B.gainMult.gte("1e400")) {
sc+="Sc97: Decrease B's Gainmult<br>"
scf+="Sc97: 1e400,exp0.5<br>" }
if(getPointGen().gte("1e500")) {
sc+="Sc98: Decrease Points Gain<br>"
scf+="Sc98: 1e500,exp0.5<br>" }
if(tmp.A.gainMult.gte(1e250)) {
sc+="Sc99: Reduce A's Gainmult<br>"
scf+="Sc99: 1e250,0.8<br>" }
if(uesc("B",11,n(1e100))) {
sc+="Sc100: Reduce B1's Effect<br>"
scf+="Sc100: 1e100,0.5<br>" }
if(tmp.A.gainMult.gte(1e300)) {
sc+="Sc101: Reduce A's Gainmult<br>"
scf+="Sc101: 1e300,0.8<br>" }
if(uesc("E",12,n(10))) {
sc+="Sc102: Reduce E2's Effect<br>"
scf+="Sc102: 10,0.5<br>" }
if(uesc("E",15,n(2))) {
sc+="Sc103: Reduce E5's Effect<br>"
scf+="Sc103: 2,0.5<br>" }
if(uesc("E",23,n(10))) {
sc+="Sc104: Reduce E8's Effect<br>"
scf+="Sc104: 10,0.5<br>" }
if(uesc("E",14,n(2))) {
sc+="Sc105: Reduce E4's Effect<br>"
scf+="Sc105: 2,0.5<br>" }
if(uesc("E",13,n(2))) {
sc+="Sc106: Reduce E3's Effect<br>"
scf+="Sc106: 2,0.5<br>" }
if(ue("E",16)[0].gte(1e4)&&hasUpgrade("E",16)) {
sc+="Sc107: Reduce E5.5's first Effect<br>"
scf+="Sc107: 1e4,0.5<br>" }
if(ue("E",16)[1].gte(1e4)&&hasUpgrade("E",16)) {
sc+="Sc108: Reduce E5.5's second Effect<br>"
scf+="Sc108: 1e4,0.5<br>" }
if(ue("E",22)[0].gte(1e4)&&hasUpgrade("E",22)) {
sc+="Sc109: Reduce E7's first Effect<br>"
scf+="Sc109: 1e4,0.5<br>" }
if(ue("E",22)[1].gte(1e4)&&hasUpgrade("E",22)) {
sc+="Sc110: Reduce E7's second Effect<br>"
scf+="Sc110: 1e4,0.5<br>" }
if(uesc("E",32,n(2))) {
sc+="Sc111: Reduce E12's Effect<br>"
scf+="Sc111: 2,0.5<br>" }
if(uesc("C",32,n(2))) {
sc+="Sc112: Reduce C12's Effect<br>"
scf+="Sc112: 2,0.5<br>" }
if(tmp.E.gainMult.gte(1e5)) {
sc+="Sc113: Reduce E's Gainmult<br>"
scf+="Sc113: 1e5,0.5<br>" }
if(uesc("E",31,n(1e9))) {
sc+="Sc114: Reduce E11's Effect<br>"
scf+="Sc114: 1e9,0.5<br>" }
if(ue("C",33)[0].gte(2)&&hasUpgrade("C",33)) {
sc+="Sc115: Reduce C13's first Effect<br>"
scf+="Sc115: 2,0.5<br>" }
if(ue("C",33)[1].gte(2)&&hasUpgrade("C",33)) {
sc+="Sc116: Reduce C13's second Effect<br>"
scf+="Sc116: 2,0.5<br>" }
if(uesc("E",14,n(4))) {
sc+="Sc117: Reduce E4's Effect<br>"
scf+="Sc117: 4,0.5<br>" }
if(uesc("E",26,n(5))) {
sc+="Sc118: Reduce E10.5's Effect<br>"
scf+="Sc118: 5,0.5<br>" }
if(uesc("E",35,n(2))) {
sc+="Sc119: Reduce E15's Effect<br>"
scf+="Sc119: 2,0.5<br>" }
if(challengeEffect("E",12).gte(2)&&hasChallenge("E",12)) {
sc+="Sc120: Reduce Ec2's Effect<br>"
scf+="Sc120: 2,0.5<br>" }
if(uesc("E",36,n(4))) {
sc+="Sc121: Reduce E15.5's Effect<br>"
scf+="Sc121: 4,0.5<br>" }
if(uesc("E",13,n(5))) {
sc+="Sc122: Reduce E3's Effect<br>"
scf+="Sc122: 5,0.5<br>" }
if(challengeEffect("E",12).gte(10)&&hasChallenge("E",12)) {
sc+="Sc123: Reduce Ec2's Effect<br>"
scf+="Sc123: 10,0.5<br>" }
if(uesc("D",11,n("ee7"))) {
sc+="Sc124: Decrease D1's Effect<br>"
scf+="Sc124: e1e7,exp0.1<br>" }
if(player.s.points.gte(2.5e4)) {
sc+="Sc125: Reduce Softcap Points Gain<br>"
scf+="Sc125: 2.5e4,0.1<br>" }
if(uesc("s",31,n(2))) {
sc+="Sc126: Decrease Sc13's Effect<br>"
scf+="Sc126: 2,0.5<br>" }
if(uesc("E",12,n(1000))) {
sc+="Sc127: Reduce E2's Effect<br>"
scf+="Sc127: 1000,0.5<br>" }
if(buyableEffect("E",21).gte(1e15)) {
sc+="Sc128: Reduce Eb4's Effect<br>"
scf+="Sc128: 1e15,0.2<br>" }
if(buyableEffect("E",14).gte(0.03)) {
sc+="Sc129: Reduce Eb3.5's Effect<br>"
scf+="Sc129: 0.03,/10<br>" }
if(uesc("E",51,n(100))) {
sc+="Sc130: Reduce E21's Effect<br>"
scf+="Sc130: 100,0.5<br>" }
if(tmp.E.gainMult.gte(1e10)) {
sc+="Sc131: Reduce E's Gainmult<br>"
scf+="Sc131: 1e10,0.75<br>" }
if(uesc("E",26,n(10))) {
sc+="Sc132: Reduce E10.5's Effect<br>"
scf+="Sc132: 10,0.75<br>" }
if(uesc("s",31,n(5))) {
sc+="Sc133: Reduce ScU13's Effect<br>"
scf+="Sc133: 5,0.5<br>" }
if(buyableEffect("E",11).gte(1e40)) {
sc+="Sc134: Reduce Eb1's Effect<br>"
scf+="Sc134: 1e40,0.5<br>" }
if(buyableEffect("E",12).gte(1e40)) {
sc+="Sc135: Reduce Eb2's Effect<br>"
scf+="Sc135: 1e40,0.5<br>" }
if(uesc("E",11,n("ee5"))) {
sc+="Sc136: Reduce E1's Effect<br>"
scf+="Sc136: e1e5,0.5<br>" }
if(tmp.A.gainMult.gte("1e400")) {
sc+="Sc137: Reduce A's Gainmult<br>"
scf+="Sc137: 1e400,0.8<br>" }
if(uesc("E",11,n("e5e5"))) {
sc+="Sc138: Reduce E1's Effect<br>"
scf+="Sc138: e5e5,0.5<br>" }
if(uesc("E",56,n(2))) {
sc+="Sc139: Reduce E25.5's Effect<br>"
scf+="Sc139: 2,0.5<br>" }
if(uesc("E",54,n(1e10))) {
sc+="Sc140: Reduce E24's Effect<br>"
scf+="Sc140: 1e10,0.5<br>" }
if(uesc("E",61,n(5))) {
sc+="Sc141: Reduce E26's Effect<br>"
scf+="Sc141: 5,0.5<br>" }
if(challengeEffect("E",21)[0].gte(1e25)&&hasChallenge("E",21)) {
sc+="Sc142: Reduce Ec3's first Effect<br>"
scf+="Sc142: 1e25,0.5<br>" }
if(challengeEffect("E",21)[1].gte(1e25)&&hasChallenge("E",21)) {
sc+="Sc143: Reduce Ec3's second Effect<br>"
scf+="Sc143: 1e25,0.5<br>" }
if(challengeEffect("E",22)[0].gte(1e15)&&hasChallenge("E",22)) {
sc+="Sc144: Reduce Ec4's first Effect<br>"
scf+="Sc144: 1e15,0.5<br>" }
if(challengeEffect("E",22)[1].gte(1e10)&&hasChallenge("E",22)) {
sc+="Sc145: Reduce Ec4's second Effect<br>"
scf+="Sc145: 1e10,0.5<br>" }
if(uesc("B",84,n(10))) {
sc+="Sc146: Reduce B39's Effect<br>"
scf+="Sc146: 10,0.5<br>" }
if(uesc("E",61,n(15))) {
sc+="Sc147: Reduce E26's Effect<br>"
scf+="Sc147: 15,0.8<br>" }
if(uesc("E",63,n(7.5))) {
sc+="Sc148: Reduce E28's Effect<br>"
scf+="Sc148: 7.5,0.8<br>" }
if(uesc("E",65,n(100))) {
sc+="Sc149: Reduce E30's Effect<br>"
scf+="Sc149: 100,0.8<br>" }
if(uesc("E",51,n(1e4))) {
sc+="Sc150: Reduce E21's Effect<br>"
scf+="Sc150: 1e4,0.5<br>" }
if(uesc("E",71,n(10))) {
sc+="Sc151: Reduce E31's Effect<br>"
scf+="Sc151: 10,0.5<br>" }
if(uesc("E",65,n(500))) {
sc+="Sc152: Reduce E30's Effect<br>"
scf+="Sc152: 500,0.5<br>" }
if(uesc("E",73,n(6))) {
sc+="Sc153: Reduce E33's Effect<br>"
scf+="Sc153: 6,0.5<br>" }
if(uesc("E",66,n(1e100))) {
sc+="Sc154: Reduce E30.5's Effect<br>"
scf+="Sc154: 1e100,0.5<br>" }
if(uesc("E",71,n(100))) {
sc+="Sc155: Reduce E31's Effect<br>"
scf+="Sc155: 100,0.5<br>" }
if(buyableEffect("E",32).gte(1e5)) {
sc+="Sc156: Reduce Eb6's Effect<br>"
scf+="Sc156: 1e5,0.25<br>" }
if(uesc("E",71,n(1000))) {
sc+="Sc157: Reduce E31's Effect<br>"
scf+="Sc157: 1000,0.5<br>" }
if(uesc("E",73,n(10))) {
sc+="Sc158: Reduce E33's Effect<br>"
scf+="Sc158: 10,0.5<br>" }
if(uesc("E",51,n(1e5))) {
sc+="Sc159: Reduce E21's Effect<br>"
scf+="Sc159: 1e5,0.5<br>" }
if(uesc("E",56,n(10))) {
sc+="Sc160: Reduce E25.5's Effect<br>"
scf+="Sc160: 10,0.5<br>" }
if(uesc("E",53,n(10))) {
sc+="Sc161: Reduce E23's Effect<br>"
scf+="Sc161: 10,0.5<br>" }
if(uesc("E",54,n(1e60))) {
sc+="Sc162: Reduce E24's Effect<br>"
scf+="Sc162: 1e60,0.5<br>" }
if(uesc("E",13,n(10))) {
sc+="Sc163: Reduce E3's Effect<br>"
scf+="Sc163: 10,0.5<br>" }
if(uesc("E",14,n(10))) {
sc+="Sc164: Reduce E4's Effect<br>"
scf+="Sc164: 10,0.5<br>" }
if(buyableEffect("E",33).gte(1e10)) {
sc+="Sc165: Reduce Eb7's Effect<br>"
scf+="Sc165: 1e10,0.5<br>" }
if(uesc("E",71,n(1e5))) {
sc+="Sc166: Reduce E31's Effect<br>"
scf+="Sc166: 1e5,0.5<br>" }
if(uesc("E",71,n(1e6))) {
sc+="Sc167: Reduce E31's Effect<br>"
scf+="Sc167: 1e6,0.5<br>" }
if(uesc("E",36,n(1e3))) {
sc+="Sc168: Reduce E15.5's Effect<br>"
scf+="Sc168: 1e3,0.6<br>" }
if(uesc("E",36,n(1e5))) {
sc+="Sc169: Reduce E15.5's Effect<br>"
scf+="Sc169: 1e5,0.7<br>" }
if(uesc("E",82,n(1e7))) {
sc+="Sc170: Reduce E37's Effect<br>"
scf+="Sc170: 1e7,0.5<br>" }
if(uesc("E",94,n(2085))) {
sc+="Sc171: Reduce E44's Effect<br>"
scf+="Sc171: 2085,0.5<br>" }
if(buyableEffect("E",31).gte(1e30)) {
sc+="Sc172: Reduce Eb5's Effect<br>"
scf+="Sc172: 1e30,0.25<br>" }
if(buyableEffect("E",32).gte(1e12)) {
sc+="Sc173: Reduce Eb7's Effect<br>"
scf+="Sc173: 1e15,0.25<br>" }
if(buyableEffect("E",33).gte(1e15)) {
sc+="Sc174: Reduce Eb6's Effect<br>"
scf+="Sc174: 1e12,0.5<br>" }
if(uesc("E",101,n(200))) {
sc+="Sc175: Reduce E46's Effect<br>"
scf+="Sc175: 200,0.5<br>" }
if(uesc("E",102,n(200))) {
sc+="Sc176: Reduce E47's Effect<br>"
scf+="Sc176: 100,0.5<br>" }
if(uesc("E",83,n(0.5))) {
sc+="Sc177: Reduce E38's Effect<br>"
scf+="Sc177: 0.5,/2<br>" }
if(challengeEffect("E",41).gte(1.15)) {
sc+="Sc178: Reduce Ec7's Effect<br>"
scf+="Sc178: 1.15,^0.5<br>" }
if(tmp.E.ekgain.gte(1e20)) {
sc+="Sc179: Reduce Ek Gain<br>"
scf+="Sc179: 1e20,^0.8<br>" }
if(tmp.E.emgain.gte(1e100)) {
sc+="Sc180: Reduce Em Gain<br>"
scf+="Sc180: 1e100,^0.6<br>" }
if(uesc("E",104,n(10))) {
sc+="Sc181: Reduce E49's Effect<br>"
scf+="Sc181: 10,0.5<br>" }
if(tmp.E.ekgain.gte(1e40)) {
sc+="Sc182: Reduce Ek Gain<br>"
scf+="Sc182: 1e40,^0.8<br>" }
if(challengeEffect("E",42).gt(0.03)) {
sc+="Sc183: Reduce Ec8's Effect<br>"
scf+="Sc183: 0.03,/25<br>" }
return [sc.split("br").length-1,sc,scf]
}

addLayer("AS", {
        layer: "AS", // This is assigned automatically, both to the layer and all upgrades, etc. Shown here so you know about it
        name: "Anti-Softcap", // This is optional, only used in a few places, If absent it just uses the layer id.
        symbol: "AS", // This appears on the layer's node. Default is the id with the first letter capitalized
        position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
        startData() { return {
            unlocked: false,
			points: new Decimal(0),
            best: new Decimal(0),
            total: new Decimal(0),
        }},
        color: "#4BDC13",
        requires: new Decimal("1.79e308"), // Can be a function that takes requirement increases into account
        resource: "Anti-Softcap", // Name of prestige currency
        baseResource: "E", // Name of resource prestige is based on
        baseAmount() {return player.E.points}, // Get the current amount of baseResource
        type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
        exponent: Decimal.reciprocate("10^^1e100"), // Prestige currency exponent
        canBuyMax() {}, // Only needed for static layers with buy max
        gainMult() { // Calculate the multiplier for main currency from bonuses
            mult = new Decimal(1)
            return mult
        },
        gainExp() { // Calculate the exponent on main currency from bonuses
            return new Decimal(1)
        },
        row: 2, // Row the layer is in on the tree (0 is the first row)
        milestones: {
            0: {requirementDescription: "1 Anti-Softcap points",
                done() {return player[this.layer].best.gte(1)}, // Used to determine when to give the milestone
                effectDescription: "Remove permamently Sc1(Sc mean Softcap), also permamently keep softcap upgrades",
            },
            1: {requirementDescription: "2 Anti-Softcap points",
                unlocked() {return hasMilestone(this.layer, 0)},
                done() {return player[this.layer].best.gte(2)},
                effectDescription: "Remove permamently Sc2",
            },
            2: {requirementDescription: "3 Anti-Softcap points",
                unlocked() {return hasMilestone(this.layer, 1)},
                done() {return player[this.layer].best.gte(3)},
                effectDescription: "Remove permamently Sc3",
            },
        },
        doReset(layer){ // Triggers when this layer is being reset, along with the layer doing the resetting. Not triggered by lower layers resetting, but is by layers on the same row.
             layerDataReset("A", ["upgrades","milestones","clickables","buyables","challenges"])
             layerDataReset("B", ["upgrades","milestones","clickables","buyables","challenges"])
             layerDataReset("C", ["upgrades","milestones","clickables","buyables","challenges"])
             layerDataReset("D", ["upgrades","milestones","clickables","buyables","challenges"])
             layerDataReset("E", ["upgrades","milestones","clickables","buyables","challenges"])
             player.s.upgrades=[]
        },
        layerShown() {if (player.AS.unlocked || player.E.points.gte("1.79e308")) return true}, // Condition for when layer appears on the tree
        automate() {
        }, // Do any automation inherent to this layer if appropriate
        resetsNothing() {return false},
})
