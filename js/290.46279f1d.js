"use strict";(self["webpackChunkautoinline"]=self["webpackChunkautoinline"]||[]).push([[290],{4290:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Y});var n=a(3673);const l={class:"page"};function i(e,t,a,i,o,s){const d=(0,n.up)("AddTariff"),u=(0,n.up)("AiHeader"),r=(0,n.up)("TableTariffOnline");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d)])),_:1}),(0,n._)("div",l,[(0,n.Wm)(r)])],64)}function o(e,t,a,l,i,o){const s=(0,n.up)("AiTable"),d=(0,n.up)("ModalContent");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(s,{data:e.data,loading:e.loading,onChangeItem:e.onChange,onDelete:e.onDelete},null,8,["data","loading","onChangeItem","onDelete"]),(0,n.Wm)(d,{open:e.open,tableData:e.tableData,toggleOpen:e.toggleOpen},null,8,["open","tableData","toggleOpen"])],64)}a(71);var s=a(3617),d=a(7281);const u=[{name:"title",required:!0,label:"Наименование",align:"left",field:"title",style:"width: 50%"},{name:"cost1",align:"center",label:"Цена за месяц",field:"cost1",style:"width: 15%"},{name:"categories",align:"center",label:"Категория",format:e=>`${e}`.toUpperCase(),field:"categories",style:"width: 15%"},{name:"is_active",label:"Активный",field:"is_active",format:e=>e?"Да":"Нет",align:"center",style:"width: 15%"},{name:"action",label:"Action",field:"action",style:"width: 98px",align:"center"}];var r=a(8880);const p={class:"addTariff__content row"},c={class:"addTariff__input"},f={class:"addTariff__input"},g={class:"addTariff__input addTariff__input_small"},m={class:"addTariff__input addTariff__input_small"},_={class:"addTariff__input addTariff__input_small"},h={class:"addTariff__input addTariff__input_small"},v={class:"modal__buttons row"};function b(e,t,a,l,i,o){const s=(0,n.up)("AiInput"),d=(0,n.up)("AiMultiSelect"),u=(0,n.up)("AiCheckbox"),b=(0,n.up)("AiButton"),T=(0,n.up)("AiModal");return(0,n.wg)(),(0,n.j4)(T,{open:e.open,title:e.modelTitle,isSave:"",onToggleOpen:e.toggleOpen},{default:(0,n.w5)((()=>[(0,n._)("form",{onSubmit:t[6]||(t[6]=(0,r.iM)(((...t)=>e.onSubmit&&e.onSubmit(...t)),["prevent"]))},[(0,n._)("div",p,[(0,n._)("div",c,[(0,n.Wm)(s,{value:e.data.title,"onUpdate:value":t[0]||(t[0]=t=>e.data.title=t),name:"title",required:"",title:"Наименование"},null,8,["value"])]),(0,n._)("div",f,[(0,n.Wm)(d,{values:e.data.categories,"onUpdate:values":t[1]||(t[1]=t=>e.data.categories=t),options:e.categoryOptions,label:"Категория",small:""},null,8,["values","options"])]),(0,n._)("div",g,[(0,n.Wm)(s,{value:e.data.cost1,"onUpdate:value":t[2]||(t[2]=t=>e.data.cost1=t),name:"cost1",required:"",title:"Цена за 1 месяц",type:"number"},null,8,["value"])]),(0,n._)("div",m,[(0,n.Wm)(s,{value:e.data.cost2,"onUpdate:value":t[3]||(t[3]=t=>e.data.cost2=t),name:"cost2",required:"",title:"Цена за 3 месяц",type:"number"},null,8,["value"])]),(0,n._)("div",_,[(0,n.Wm)(s,{value:e.data.cost3,"onUpdate:value":t[4]||(t[4]=t=>e.data.cost3=t),name:"cost3",required:"",title:"Цена за 1 год",type:"number"},null,8,["value"])]),(0,n._)("div",h,[(0,n.Wm)(u,{checked:e.data.is_active,"onUpdate:checked":t[5]||(t[5]=t=>e.data.is_active=t),label:"Активный"},null,8,["checked"])])]),(0,n._)("div",v,[(0,n.Wm)(b,{isSave:"",size:"big",text:"Сохранить",type:"submit"})])],32)])),_:1},8,["open","title","onToggleOpen"])}var T=a(1959),C=a(2337),O=a(3645),A=a(3373);const w=(0,n.aZ)({name:"",components:{AiModal:A.Z,AiButton:O.Z,AiInput:C.Z},props:{open:{type:Boolean},toggleOpen:{type:Function},tableData:{default:null}},data(){return{data:{title:null,categories:[],cost1:null,cost2:null,cost3:null,is_active:(0,T.iH)(!1)},categoryOptions:[{label:"A",value:"a"},{label:"B",value:"b"},{label:"C",value:"c"}]}},watch:{tableData(){this.data={...this.tableData}}},computed:{...(0,s.Se)({tariffs:"onlineCourse/getTariffs"}),modelTitle(){return this.tableData?`Редактирование тарифа - ${this.tableData.title}`:"Добавление тарифа"}},methods:{...(0,s.nv)({postTariff:"onlineCourse/postTariff",updateTariff:"onlineCourse/updateTariff"}),updateValue(e,t){this.data[e]=t},async onSubmit(){this.tableData?await this.updateTariff({...this.data}):await this.postTariff(this.data),this.toggleOpen(),this.data={title:null,categories:[],cost1:null,cost2:null,cost3:null,is_active:!1}}}});var D=a(4260);const y=(0,D.Z)(w,[["render",b],["__scopeId","data-v-7e897a88"]]),W=y,Z=(0,n.aZ)({name:"Table",components:{AiTable:d.Z,ModalContent:W},data(){return{open:!1,tableData:null}},computed:{...(0,s.Se)({getTariffs:"onlineCourse/getTariffs",loading:"onlineCourse/loading"}),data(){return{columns:u,rows:this.getTariffs}}},methods:{...(0,s.nv)({fetchTariffs:"onlineCourse/fetchTariffs",onDelete:"onlineCourse/deleteTariff"}),toggleOpen(){this.open=!this.open,this.tableData=null},onChange(e){this.tableData={title:e.title,categories:[...e.categories],cost1:e.cost1,cost2:e.cost2,cost3:e.cost3,is_active:e.is_active,id:e.id},this.open=!this.open}},mounted(){this.fetchTariffs()}}),S=(0,D.Z)(Z,[["render",o]]),k=S;function M(e,t,a,l,i,o){const s=(0,n.up)("AiAddItem"),d=(0,n.up)("ModalContent");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(s,{length:e.tariffs.length,open:e.open,toggleOpen:e.toggleOpen,title:"Тарифы онлайн курсов"},null,8,["length","open","toggleOpen"]),(0,n.Wm)(d,{open:e.open,toggleOpen:e.toggleOpen},null,8,["open","toggleOpen"])],64)}var I=a(2301);const U=(0,n.aZ)({name:"AddTariff",components:{AiAddItem:I.Z,ModalContent:W},data(){return{open:!1}},computed:{...(0,s.Se)({tariffs:"onlineCourse/getTariffs"})},methods:{toggleOpen(){this.open=!this.open}}}),q=(0,D.Z)(U,[["render",M]]),H=q,B=(0,n.aZ)({name:"TariffsOnline",components:{TableTariffOnline:k,AddTariff:H}}),x=(0,D.Z)(B,[["render",i]]),Y=x}}]);