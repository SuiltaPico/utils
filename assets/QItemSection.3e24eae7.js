import{c as n,a as o,h as i,b as m}from"./index.44b791df.js";var r=n({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(t,{slots:e}){const a=o(()=>`q-item__section column q-item__section--${t.avatar===!0||t.side===!0||t.thumbnail===!0?"side":"main"}`+(t.top===!0?" q-item__section--top justify-start":" justify-center")+(t.avatar===!0?" q-item__section--avatar":"")+(t.thumbnail===!0?" q-item__section--thumbnail":"")+(t.noWrap===!0?" q-item__section--nowrap":""));return()=>i("div",{class:a.value},m(e.default))}});export{r as Q};
