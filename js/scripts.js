(function IIFE() {
  //
})();

var s = "白宮新聞秘書史派瑟（Sean Spicer）今天二度為昨天的「希特勒在二戰還沒不曾使用阿薩德的化學武器」言論再次認錯，他說，「我犯了錯，那並非我的本意，....，我搞糟了(I screwed it)」，他也向川普總統道歉，因為自己的不專業發言，讓公眾分散對總統這次的攻敘行動「成就」(accomplishment)的注意，也讓總統失望。\n史派瑟是今天上午出席華府新聞博物館(Newseum)的「媒體與川普政府」論壇，與MSNBC新聞主播蘇斯塔倫(Greta Van Susteren)對談時作此答覆。\n史派瑟11日在新聞簡報會上說「在第二次世界大戰中，甚至沒有使用化學武器」、「希特勒在二戰還沒沉淪到使用阿薩德的化武」。他今天坦言，拿希特勒的猶太大屠殺和敘利亞化武攻擊來比喻是不恰當的，「此二事件是不能比擬的」。他在昨日簡報會後廣受各方撻伐，尤其是猶太人社區反應強烈，宣稱猶太人被希特勒關入集中營並以化學沙林毒氣屠殺的人數至少有300萬。美國駐聯合國大使海理(Nikki Haley)以「不幸」(unfortunate)稱史派瑟的評論。\n針對外界傳言白宮權力核心出現內鬥，川普總統首席策士巴農(Steve Bannon)和女婿庫許納（Jared Kushner）不合一事，史派瑟稱，總統政策核心和競選時是同一批人，匯聚最聰明的人才，政策的辯論是健康的，目的在對總統提供施政指引。他期望媒體能多關注如何讓這個國家更進步、更安全、更多就業機會、、等和民眾息息相關的事務。"

// Try sample <p>
function typesetRL(s=Sring()) {
  var p = document.createElement('p');
  p.style.writingMode = 'vertical-rl';
  p.innerHTML = s;
  document.body.appendChild(p);
}

