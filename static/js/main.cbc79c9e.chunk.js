(this["webpackJsonpreact-real-estate"]=this["webpackJsonpreact-real-estate"]||[]).push([[0],{37:function(e,a,t){e.exports=t.p+"static/media/google-play-badge.db9b21a1.png"},38:function(e,a,t){e.exports=t.p+"static/media/app-store-logo.436fa48e.png"},40:function(e,a,t){e.exports=t(82)},81:function(e,a,t){},82:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(36),l=t.n(c),o=(t(45),t(46),t(49),t(50),t(51),t(52),t(14)),s=t(15),i=t(19),m=t(18),u=t(9),p=t(87),d=t(39),E=t(85),f=t(84),b=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",null,n.a.createElement("nav",{className:"navbar navbar-expand-custom navbar-dark",role:"navigation"},n.a.createElement("div",{id:"container-fluid-nav",className:"container-fluid"},n.a.createElement(f.a,{to:"/bootcamp-portfolio-project/home",className:"navbar-brand"},"LOGO"),n.a.createElement("button",{className:"navbar-toggler ml-auto",type:"button","data-toggle":"collapse","data-target":"#toggle-btn","aria-expanded":"false","aria-controls":"toggle-btn"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{id:"toggle-btn",className:"collapse navbar-collapse"},n.a.createElement("ul",{id:"nav-css",className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(f.a,{className:"nav-link text-white",to:"/bootcamp-portfolio-project/home"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(f.a,{className:"nav-link text-white",to:"/bootcamp-portfolio-project/listings"},"Listings")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(f.a,{className:"nav-link text-white",to:"/bootcamp-portfolio-project/aboutus"},"About Us"))))))))}}]),t}(r.Component),g=t(21),v=t(37),h=t.n(v),N=t(38),y=t.n(N);var w=function(){return n.a.createElement("footer",{className:"bg-color my-0"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("img",{className:"phones-img",src:"https://mockupz.design/assets/images/image18.jpg?v=061d1db9",alt:""})),n.a.createElement("div",{className:"col-sm-4 store-icons"},n.a.createElement("h3",null,"Download the Real Estate App"),n.a.createElement("span",null,n.a.createElement("a",{href:"/"},n.a.createElement("img",{className:"play-store",src:h.a,alt:""}))),n.a.createElement("span",null,n.a.createElement("a",{href:"/"},n.a.createElement("img",{className:"app-store",src:y.a,alt:""})))),n.a.createElement("div",{className:"col-sm-4 footer-links"},n.a.createElement("ul",{className:"list-unstyled"},n.a.createElement("li",null,n.a.createElement(g.a,{to:"/bootcamp-portfolio-project/home"},"Home")),n.a.createElement("li",null,n.a.createElement(g.a,{to:"/bootcamp-portfolio-project/listings"},"Listings")),n.a.createElement("li",null,n.a.createElement(g.a,{to:"/bootcamp-portfolio-project/aboutus"},"About Us")))))))},j=t(5),x=t(6);var k=function(){return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{id:"home-banner",className:"col-12 px-0"},n.a.createElement("div",{className:"overlay"},n.a.createElement("img",{className:"home-img",src:"https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/586970/getty-home-with-for-sale-sign.jpg&w=2000&op=resize",alt:""})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 align-items-end"},n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"form-field search-box"},n.a.createElement("form",null,n.a.createElement("input",{className:"form-control",type:"search",placeholder:"Enter City or Zip Code","aria-label":"Search"}),n.a.createElement("button",{type:"submit",className:"btn bg-white"},n.a.createElement(j.a,{className:"fas",icon:x.c}))))))))))},P=function(e){var a=e.propertiesPerPage,t=e.dataLength,r=e.currentPage,c=e.paginate,l=[],o=Math.ceil(t/a);console.log("total pages: ",o);for(var s=1;s<=o;s++)l.push(s);return n.a.createElement("nav",null,n.a.createElement("ul",{className:"pagination justify-content-center"},l.map((function(e){return n.a.createElement("li",{key:e,className:"page-item\n            ".concat(r===e?"active":"")},n.a.createElement("button",{onClick:function(){return c(e)},className:"page-link"},e))}))))},O=function(){var e=function(e){var a=(void 0).state.filteredData;"price-dsc"===e&&(e=a.sort((function(e,a){return e.price-a.price}))),"price-asc"===e&&(e=a.sort((function(e,a){return a.price-e.price}))),"area-asc"===e&&(e=a.sort((function(e,a){return a.area-e.area}))),"beds-asc"===e&&(e=a.sort((function(e,a){return a.rooms-e.rooms}))),"bath-asc"===e&&(e=a.sort((function(e,a){return a.bathrooms-e.bathrooms})))};return n.a.createElement("div",{id:"filter-and-sort-row",className:"row"},n.a.createElement("div",{className:"col-sm-12 d-flex flex-nowrap float-right justify-content-end dropdown"},n.a.createElement("button",{id:"filter-btn",className:"btn order-1 mr-2",type:"button"},"Filter"),n.a.createElement("div",{className:"btn-group"},n.a.createElement("button",{type:"button",id:"sort-btn",className:"btn dropdown-toggle order-2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",style:{backgroundColor:"#f8f9fa",borderColor:"#ced4da"}},"Sort"),n.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"sort-btn"},n.a.createElement("button",{className:"dropdown-item",type:"button",onClick:function(){return e("price-asc")}},"Price (High to Low)"),n.a.createElement("button",{className:"dropdown-item",type:"button",onClick:function(){return e("price-dsc")}},"Price (Low to High)"),n.a.createElement("button",{className:"dropdown-item",type:"button",onClick:function(){return e("area-asc")}},"Sqaure Feet"),n.a.createElement("button",{className:"dropdown-item",type:"button",onClick:function(){return e("beds-asc")}},"Bedrooms"),n.a.createElement("button",{className:"dropdown-item",type:"button",onClick:function(){return e("bath-asc")}},"Bathrooms")))))},C=function(e){var a=e.setSearchText,t=e.searchText,r=e.setCurrentPage,c=e.fetchForSale;return console.log("searchText: ",t),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 align-items-end"},n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"form-field search-box"},n.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=t.split(","),n=a[0],l=a[1].replace(/\s/g,"");c(n,l),r(1),console.log(n),console.log(l)}},n.a.createElement("input",{type:"search",name:"search",value:t,className:"form-control",placeholder:"Enter City or Zip Code",onChange:function(e){return a(e.target.value)}}),n.a.createElement("button",{type:"submit",className:"btn bg-white"},n.a.createElement(j.a,{className:"fas",icon:x.c})))))))},S=function(e){var a=e.listing,t=e.id;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"card",key:t},n.a.createElement(g.a,{to:"/bootcamp-portfolio-project/listings/".concat(a.id),className:"router-link"},n.a.createElement("img",{src:a.photo,className:"card-img-top img-fluid",alt:"..."}),n.a.createElement("div",{id:"card-body",className:"card-body"},n.a.createElement("div",{className:"row d-flex justify-content-between"},n.a.createElement("div",{className:"col-sm-auto"},n.a.createElement("h5",{className:"card-title price"},"$ ",a.price)),n.a.createElement("div",{className:"col-sm-auto"},n.a.createElement("h6",{className:"card-title details"},n.a.createElement(j.a,{className:"fas",icon:x.a})," ",a.beds," bds |"," ",n.a.createElement(j.a,{className:"fas",icon:x.d})," ",a.baths," ba | ",a.lot_size," sqft"))),n.a.createElement("span",{className:"text-dark"},n.a.createElement("strong",{className:"card-text"},n.a.createElement(j.a,{className:"fas",icon:x.b})," ",n.a.createElement("span",null,a.address_new.line,",")," ",n.a.createElement("span",null,a.address_new.city,",")," ",n.a.createElement("span",null,a.address_new.state_code)," ",n.a.createElement("span",null,a.address_new.postal_code)))),n.a.createElement("div",{className:"card-footer text-muted"},"for_sale"===a.prop_status?"For Sale":"For Rent"))))},F=function(e){var a=e.currentProperties;return n.a.createElement("div",{id:"card-columns",className:"col-md"},n.a.createElement("div",{className:"row"},a.map((function(e,a){return n.a.createElement(S,{key:a,listing:e})}))))},_=function(e){var a=e.currentProperties,t=e.propertiesPerPage,r=e.dataLength,c=e.currentPage,l=e.paginate,o=e.fetchForSale,s=e.setCurrentPage,i=e.setSearchText,m=e.searchText;return n.a.createElement("div",{className:"container-fluid"},n.a.createElement(C,{setSearchText:i,searchText:m,setCurrentPage:s,fetchForSale:o}),n.a.createElement(O,null),n.a.createElement("div",{className:"row"},a&&n.a.createElement(F,{currentProperties:a})),n.a.createElement(P,{propertiesPerPage:t,dataLength:r,currentPage:c,paginate:l}))},L=t(12),T=t.n(L),A=t(23),H=t(24),R=t.n(H),z="https://realty-in-us.p.rapidapi.com/",B=function(){var e=Object(A.a)(T.a.mark((function e(a,t){var r,n,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z+"properties/list-for-sale",r={params:{state_code:t,city:a,offset:"0",limit:"200",sort:"relevance"},headers:{"X-RapidAPI-Host":"realty-in-us.p.rapidapi.com","X-RapidAPI-Key":"01bb2f89c2mshc6f01d26644e205p1172c6jsn0495ead6b708"}},e.prev=2,e.next=5,R.a.get("https://realty-in-us.p.rapidapi.com/properties/list-for-sale",r);case 5:return n=e.sent,c=n.data,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a,t){return e.apply(this,arguments)}}(),D=function(){var e=Object(r.useState)([]),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(r.useState)(0),o=Object(u.a)(l,2),s=o[0],i=o[1],m=Object(r.useState)(10),f=Object(u.a)(m,2),g=f[0],v=(f[1],Object(r.useState)(1)),h=Object(u.a)(v,2),N=h[0],y=h[1],j=Object(r.useState)(""),x=Object(u.a)(j,2),P=x[0],O=x[1],C=function(e,a){B(e,a).then((function(e){c(e.listings),i(e.listings.length)})).catch((function(e){return console.log(e.message)}))},S=N*g,F=S-g,L=t.slice(F,S),T=function(e){return y(e)};return n.a.createElement("div",{className:"main-container"},n.a.createElement(b,null),n.a.createElement("div",{className:"content-wrap"},n.a.createElement(p.a,null,n.a.createElement(d.a,{path:"/bootcamp-portfolio-project/home",component:k}),n.a.createElement(d.a,{exact:!0,path:"/bootcamp-portfolio-project/listings",render:function(){return n.a.createElement(_,{currentProperties:L,propertiesPerPage:g,dataLength:s,currentPage:N,paginate:T,fetchForSale:C,setCurrentPage:y,searchText:P,setSearchText:O})}}),n.a.createElement(E.a,{to:"/bootcamp-portfolio-project/home"}))),n.a.createElement(w,null))},I=t(86),q=(t(81),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(I.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(D,null)))}}]),t}(r.Component));l.a.render(n.a.createElement(q,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.cbc79c9e.chunk.js.map