import{Q as v}from"./QPage.56670076.js";import{_ as g,a1 as w,E as y,r as l,G as n,I as d,J as m,a2 as b,O as t,Q as r,N as c,L as p,T as _,U as x}from"./index.ca4d31e2.js";import"./render.0c4776f1.js";const k={},I=w('<h2 data-v-76f13eca>Just Do it!</h2><article data-v-76f13eca><p data-v-76f13eca> Around June last year, I suddenly had an idea to write a personal blog! Unfortunately, I have only started to do this now, and I have started to give up countless times in between.During this time I tried to write my own personal blog in many different ways, like hexo,vuepress,etc. </p><p data-v-76f13eca> I&#39;ve made countless excuses to tell myself to stop writing, it&#39;s just a waste of time. for Example: </p><ul data-v-76f13eca><li data-v-76f13eca>no one reads it</li><li data-v-76f13eca>don&#39;t know what to write</li><li data-v-76f13eca>which way to build</li><li data-v-76f13eca>Where to publish and how to maintain</li><li data-v-76f13eca>...</li></ul><p data-v-76f13eca> But even with so many excuses, I still think how cool it would be to have my own independent blog! Don&#39;t hesitate, just do it! </p></article><h2 data-v-76f13eca>How to do it</h2><article data-v-76f13eca><p data-v-76f13eca> My blog is written by <a href="https://quasar.dev/" style="color:blueviolet;" target="_blank" data-v-76f13eca>quasar</a>, an open-source Vue.js based framework. Why i chosen this ? i don&#39;t know! Maybe when I was about to write a blog, I was just learning this framework, and there was no project to practice, so I used my blog to practice. If you want to know more, you can refer to <a href="https://github.com/wendongwoxin/quasar-project" style="color:blueviolet;" target="_blank" data-v-76f13eca>my code</a>; </p><p style="color:red;" data-v-76f13eca> Warning: It is not recommended to build a blog in this way, because it is difficult to maintain ! </p><p data-v-76f13eca> So when you learn a framework later, you don&#39;t know what projects to practice, and it happens that you don&#39;t have your own blog, so go to write a blog, so that you will have a deeper understanding of this framework, which is also a a good way to learn. </p></article><h2 data-v-76f13eca>what to write</h2><article data-v-76f13eca><p data-v-76f13eca> This is my own blog, I can write anything I want. However, as you can see, I blog to learn and share, so more content may be some technology related content and my own understanding of technology. </p></article>',6);function S(e,a){return I}var B=g(k,[["render",S],["__scopeId","data-v-76f13eca"]]);const $=y({components:{StartBlog:B},setup(){const e=["StartBlog","Blog"];let a=l(localStorage.getItem("blogName")),o=l(-1);return a.value&&(o.value=e.indexOf(a.value)),{name:a,list:e,index:o,pagerTo:(s,i)=>{i?a.value=e[s+1]:a.value=e[s-1],localStorage.setItem("blogName",a.value),a.value&&(o.value=e.indexOf(a.value))}}}}),h=e=>(_("data-v-0207d0ca"),e=e(),x(),e),j={class:"page-change"},C={key:0,class:"page"},N=h(()=>t("span",{class:"desc","data-v-176f99de":""},"Previous page",-1)),T={class:"title","data-v-176f99de":""},D={key:1,class:"page",style:{"padding-left":"16px"}},q=h(()=>t("span",{class:"desc","data-v-176f99de":""},"next page",-1)),V={class:"title","data-v-176f99de":""};function E(e,a,o,f,s,i){return n(),d(v,{class:"items-center justify-evenly"},{default:m(()=>[(n(),d(b(e.name))),t("div",j,[e.index!==0?(n(),r("div",C,[t("a",{class:"pager-link prev",onClick:a[0]||(a[0]=u=>e.pagerTo(e.index,!1))},[N,t("span",T,c(e.list[e.index-1]),1)])])):p("",!0),e.index+1<e.list.length?(n(),r("div",D,[t("a",{class:"pager-link prev",onClick:a[1]||(a[1]=u=>e.pagerTo(e.index,!0))},[q,t("span",V,c(e.list[e.index+1]),1)])])):p("",!0)])]),_:1})}var W=g($,[["render",E],["__scopeId","data-v-0207d0ca"]]);export{W as default};
