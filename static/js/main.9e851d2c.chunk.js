(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{34:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]')},56:function(e,t,s){},60:function(e,t,s){},71:function(e,t){},79:function(e,t){},82:function(e,t,s){"use strict";s.r(t);var n=s(9),a=s(43),r=s.n(a),i=(s(56),s(4)),o=s.n(i),c=s(24),l=s(5),u=s(6),d=s(8),p=s(7),b=s(35),j=s(44),m=s.n(j),h=(s(60),s(45)),y=s(14),O=s.n(y),x=s(1),f=function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.purchaseLink,this.props.data.enterClubLink;var e=this.props.data.purchaseSquaresClubLink,t=this.props.data.purchaseSquaresSummertimeLink,s=this.props.data.name,n=this.props.data.description;return Object(x.jsxs)("header",{id:"home",children:[Object(x.jsx)(h.a,{type:"circle",bg:!0}),Object(x.jsxs)("nav",{id:"nav-wrap",children:[Object(x.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(x.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(x.jsxs)("ul",{id:"nav",className:"nav",children:[Object(x.jsx)("li",{className:"current",children:Object(x.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#resume",children:"NFTs"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Team"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#mint",children:"Mint"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(x.jsx)("div",{className:"row banner",children:Object(x.jsxs)("div",{className:"banner-text",children:[Object(x.jsx)(O.a,{bottom:!0,children:Object(x.jsx)("h1",{className:"responsive-headline",children:s})}),Object(x.jsx)("br",{}),Object(x.jsx)(O.a,{bottom:!0,duration:1200,children:Object(x.jsxs)("h3",{children:[n,"."]})}),Object(x.jsx)("hr",{}),Object(x.jsx)(O.a,{bottom:!0,duration:2e3,children:Object(x.jsxs)("ul",{className:"social",children:[Object(x.jsxs)("a",{href:e,className:"button btn project-btn",children:[Object(x.jsx)("i",{className:"fa fa-book"}),"Original Silly Squares Club"]}),Object(x.jsxs)("a",{href:t,className:"button btn project-btn",children:[Object(x.jsx)("i",{className:"fa fa-anchor"}),"Silly Squares Summertime"]})]})})]})}),Object(x.jsx)("p",{className:"scrolldown",children:Object(x.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(x.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(n.Component),g=function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:e.url,children:Object(x.jsx)("i",{className:e.className})})},e.name)}));return Object(x.jsx)("footer",{children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)(O.a,{bottom:!0,children:Object(x.jsxs)("div",{className:"twelve columns",children:[Object(x.jsx)("ul",{className:"social-links",children:e}),Object(x.jsx)("ul",{className:"copyright",children:Object(x.jsx)("li",{children:"\xa9 Copyright 2021 Silly Squares Club"})})]})}),Object(x.jsx)("div",{id:"go-top",children:Object(x.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(x.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(n.Component),v=function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;this.props.data.name;var e="images/"+this.props.data.image,t=this.props.data.bio;this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email,this.props.data.resumedownload;return Object(x.jsx)("section",{id:"about",children:Object(x.jsx)(O.a,{duration:1e3,children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"three columns",children:Object(x.jsx)("img",{className:"profile-pic",src:e,alt:"Nordic Giant Profile Pic"})}),Object(x.jsxs)("div",{className:"nine columns main-col",children:[Object(x.jsx)("h2",{children:"About Us"}),Object(x.jsx)("p",{children:t}),Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"columns",children:[Object(x.jsx)("br",{}),Object(x.jsx)("h2",{children:"Roadmap"}),Object(x.jsxs)("p",{children:["We are dedicated to building out awesome new things that integrate with Silly Squares NFTs. Here are just a few of the things on our roadmap...",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"\u2022 Members page of this site, connected to MetaMask."}),Object(x.jsx)("li",{children:"\u2022 Hoodies and other swag- with a free piece for every silly square holder!"}),Object(x.jsx)("li",{children:"\u2022 Streamlined awesomeness consulting registration calendar form."}),Object(x.jsx)("li",{children:"\u2022 3d metaverse experience where you can play as the silly squares you own."}),Object(x.jsx)("li",{children:"\u2022 Support for even more types of wallets."}),Object(x.jsx)("li",{children:"\u2022 Release our own ERC20 governance token."}),Object(x.jsx)("li",{children:"\u2022 Host parties in NYC, Miami, and LA allowing entry with proof of silly square ownership."})]})]})]})})]})]})})})}}]),s}(n.Component),w=function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;this.props.data.skillmessage;var t=this.props.data.education.map((function(t,s){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:t.school}),Object(x.jsxs)("p",{className:"info",children:[t.degree," ",Object(x.jsx)("span",{children:"\u2022"}),Object(x.jsx)("em",{className:"date",children:t.graduated})]}),Object(x.jsx)("p",{}),Object(x.jsx)("a",{href:t.openSeaLink,children:"Browse NFTs on OpenSea"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)("h4",{children:["Contract Address: ",Object(x.jsx)("a",{href:t.polygonscanLink,children:t.contractAddress}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]}),s!==e.props.data.education.length-1&&Object(x.jsx)("hr",{})]},t.school)})),s=this.props.data.work.map((function(t,s){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:t.company}),Object(x.jsx)("p",{className:"info",children:t.title}),Object(x.jsx)("p",{children:t.description}),Object(x.jsx)("br",{}),s!==e.props.data.work.length-1&&Object(x.jsx)("hr",{}),Object(x.jsx)("br",{})]},t.company)}));return Object(x.jsxs)("section",{id:"resume",children:[Object(x.jsx)(O.a,{left:!0,duration:1300,children:Object(x.jsxs)("div",{className:"row education",children:[Object(x.jsx)("div",{className:"three columns header-col",children:Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:"NFTs"})})}),Object(x.jsx)("div",{className:"nine columns main-col",children:Object(x.jsx)("div",{className:"row item",children:Object(x.jsx)("div",{className:"twelve columns",children:t})})})]})}),Object(x.jsx)(O.a,{left:!0,duration:1300,children:Object(x.jsxs)("div",{className:"row work",children:[Object(x.jsx)("div",{className:"three columns header-col",children:Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:"Technology"})})}),Object(x.jsx)("div",{className:"nine columns main-col",children:s})]})})]})}}]),s}(n.Component),S=function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t=this.props.data.address.street,s=this.props.data.address.city,n=this.props.data.address.state,a=this.props.data.address.zip,r=this.props.data.phone,i=this.props.data.contactmessage;return Object(x.jsxs)("section",{id:"contact",children:[Object(x.jsx)(y.Fade,{bottom:!0,duration:1e3,children:Object(x.jsxs)("div",{className:"row section-head",children:[Object(x.jsx)("div",{className:"two columns header-col",children:Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:"Get In Touch."})})}),Object(x.jsx)("div",{className:"ten columns",children:Object(x.jsx)("p",{className:"lead",children:i})})]})}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)(y.Slide,{left:!0,duration:1e3,children:Object(x.jsxs)("div",{className:"eight columns",children:[Object(x.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",children:Object(x.jsxs)("fieldset",{children:[Object(x.jsxs)("div",{children:[Object(x.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(x.jsx)("span",{className:"required",children:"*"})]}),Object(x.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(x.jsx)("span",{className:"required",children:"*"})]}),Object(x.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(x.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(x.jsx)("span",{className:"required",children:"*"})]}),Object(x.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{className:"submit",children:"Submit"}),Object(x.jsx)("span",{id:"image-loader",children:Object(x.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(x.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(x.jsxs)("div",{id:"message-success",children:[Object(x.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(x.jsx)("br",{})]})]})}),Object(x.jsx)(y.Slide,{right:!0,duration:1e3,children:Object(x.jsxs)("aside",{className:"four columns footer-widgets",children:[Object(x.jsxs)("div",{className:"widget widget_contact",children:[Object(x.jsx)("h4",{children:"Headquarters"}),Object(x.jsxs)("p",{className:"address",children:[e,Object(x.jsx)("br",{}),t," ",Object(x.jsx)("br",{}),s,", ",n," ",a,Object(x.jsx)("br",{}),Object(x.jsx)("span",{children:r})]})]}),Object(x.jsxs)("div",{className:"widget widget_tweets",children:[Object(x.jsx)("h4",{className:"widget-title",children:"Need some help?"}),Object(x.jsx)("ul",{id:"twitter",children:Object(x.jsx)("li",{children:Object(x.jsx)("span",{children:"We love collaborating both with established companies and up-and-coming new artists. Reach out with more details about your project, and we'll work with you to make it happen!"})})})]})]})})]})]})}}]),s}(n.Component),T=0,C=function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.team.map((function(e){var t="images/portfolio/"+e.img;return Object(x.jsx)("div",{className:"columns ",children:Object(x.jsxs)("div",{className:"item-wrap",children:[Object(x.jsx)("a",{href:e.link,children:Object(x.jsx)("img",{alt:e.name,src:t})}),Object(x.jsx)("div",{style:{textAlign:"center"},children:e.name})]})},T++)}));return Object(x.jsx)("section",{id:"portfolio",children:Object(x.jsx)(O.a,{left:!0,duration:1100,distance:"40px",children:Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"twelve columns collapsed",children:[Object(x.jsx)("h1",{children:"Team"}),Object(x.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-quarters cf",children:e})]})})})})}}]),s}(n.Component),N=s(18),M={width:"40vw",height:"10vh",lineHeight:"9vh",borderRadius:"25px",backgroundColor:"green",border:"5px solid darkgreen",color:"white",fontSize:"4rem",margin:"auto",cursor:"pointer"},k={fontSize:"29px",padding:"7px 5px 7px 10px",borderRadius:"9px"},q=function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).COST_PER_NFT_ETH=.002,n.state={numberOfNFTsToMint:1,connectedContract:void 0,costPerNFT:n.COST_PER_NFT_ETH,mintCostEth:void 0,mintCostWei:void 0,totalCost:n.COST_PER_NFT_ETH*Math.pow(10,18)},n}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=Object(c.a)(o.a.mark((function e(){var t=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){var e=t.props.nftContract.connect(t.props.signer);t.setState({connectedContract:e}),t.state.connectedContract.on("Transfer",(function(e,t,s){console.log("heard the transfer event! "),console.log(e),console.log(t),console.log(s);var n=N.a.utils.formatUnits(s,"wei");console.log(n),window.confirm('You successfully minted a new NFT!!\n\n Click "Ok" to view it on OpenSea!\n\n(Note: Traits and image may take a few minutes or hours for OpenSea to load)')&&(window.location.href="https://opensea.io/assets/matic/0x4a2d1ee65060ee4f01b85c569076d90afd1b9ff8/"+n)})),console.log("set up listener... ",t.state.connectedContract)}),1e3);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"handleNFTsNumberInputChange",value:function(e){var t=e.target.value,s=t*this.state.mintCostWei;this.setState({numberOfNFTsToMint:t,totalCost:s})}},{key:"handleMintSubmit",value:function(){var e=Object(c.a)(o.a.mark((function e(){var t,s,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Minting!!"),console.log(this.props),console.log("ok2",this.props.nftContract),e.next=5,this.props.nftContract.cost();case 5:return t=e.sent,s=N.a.utils.formatEther(t),console.log({mintCostWei:t}),console.log({mintCostEth:s}),this.setState({mintCostEth:s,mintCostWei:t}),n={},this.props.userAddress!==this.props.contractOwnerAddress?n.value=this.state.totalCost.toString():(n.value=0,console.log("called by owner... not charging to mint!")),console.log("trying to mint:"),console.log("this.props.userAddress: ",this.props.userAddress),console.log("this.props.userAddress: ",this.props.contractOwnerAddress),console.log("this.state.numberOfNFTsToMint: ",this.state.numberOfNFTsToMint),console.log("overrides: ",n),console.log("this.props.nftContractWithSigner: ",this.props.nftContractWithSigner),e.next=20,this.props.nftContractWithSigner.mint(this.props.userAddress,this.state.numberOfNFTsToMint,n);case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"mintTokens",value:function(){var e=Object(c.a)(o.a.mark((function e(){var t,s,n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("minting!"),e.next=3,this.props.nftContract.cost();case 3:return t=e.sent,s=N.a.utils.formatEther(t),console.log({mintCostWei:t}),console.log({mintCostEth:s}),this.setState({mintCostEth:s,mintCostWei:t}),n=this.state.numberOfNFTsToMint*t,a={},this.props.userAddress!==this.props.contractOwnerAddress?a.value=n.toString():(a.value=0,console.log("called by owner... not charging to mint!")),console.log("args"),console.log(this.props.userAddress,this.state.numberOfNFTsToMint,a),e.next=15,this.state.connectedContract.mint(this.props.userAddress,this.state.numberOfNFTsToMint,a);case 15:r=e.sent,console.log("Request to mint sent!"),alert("your request to mint has been sent successfully!"),console.log("success ",r);case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(x.jsx)("section",{id:"resume",children:Object(x.jsx)(O.a,{left:!0,duration:1300,children:Object(x.jsx)("div",{className:"",children:Object(x.jsxs)("div",{className:"row text-center",children:[Object(x.jsx)("h2",{children:this.props.collectionName}),Object(x.jsx)("br",{}),Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:"Mint Here!"})}),Object(x.jsx)("br",{}),this.props.collectionName,Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("h3",{children:Object(x.jsxs)("span",{children:["( ",this.props.totalAlreadyMinted," ) of ( ",this.props.totalSupply," ) have been minted!"]})}),Object(x.jsx)("br",{}),Object(x.jsxs)("p",{children:['Click the "mint" button to generate a new random NFT from ',this.props.collectionName," collection!"]}),Object(x.jsx)("br",{}),Object(x.jsx)("h3",{children:Object(x.jsxs)("span",{children:["Cost: ",this.state.costPerNFT,"Eth per NFT"]})}),Object(x.jsx)("p",{children:"(Users can mint up to 20 NFTs in a single transaction)"}),Object(x.jsx)("br",{}),Object(x.jsx)("img",{src:"../images/gumball-machine.jpg"}),Object(x.jsxs)("form",{children:[Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{for:"numberOfNftsToMint",children:"NFTs to Mint (1-20):"}),Object(x.jsx)("br",{}),Object(x.jsx)("input",{type:"number",id:"numberOfNftsToMint",name:"numberOfNftsToMint",style:k,min:"1",max:"20",value:this.state.numberOfNFTsToMint,onChange:function(t){return e.handleNFTsNumberInputChange(t)}}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("div",{style:M,onClick:Object(c.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.mintTokens();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),children:Object(x.jsx)("span",{style:{userSelect:"none"},children:"Mint!"})})]})]})})})})}}]),s}(n.Component),A=s(34),F=function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).state={},n}return Object(u.a)(s,[{key:"render",value:function(){return Object(x.jsx)("section",{id:"resume",children:Object(x.jsx)(O.a,{left:!0,duration:1300,children:Object(x.jsx)("div",{style:this.props.sillySquaresClubBalance>0?{background:"url('../images/stars.png')",backgroundRepeat:"repeat"}:{backgroundColor:"#ebeeee"},children:Object(x.jsxs)("div",{className:"row text-center",children:[Object(x.jsx)("br",{}),Object(x.jsxs)("div",{style:{border:"2px solid gold",backgroundColor:"white",borderRadius:"20px"},children:[Object(x.jsx)("br",{}),Object(x.jsx)("h1",{children:Object(x.jsx)("span",{children:"Exclusive Content For Token Holders!"})}),Object(x.jsx)("br",{}),Object(x.jsx)("h2",{children:Object(x.jsxs)("span",{children:["You own:",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"(\xa0",this.props.sillySquaresClubBalance,"\xa0) Original Silly Squares Club NFTs",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"and",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"(\xa0",this.props.sillySquaresSummertimeBalance,"\xa0) Silly Squares Summertime NFTs.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"Total Silly Squares Owned: (\xa0",this.props.sillySquaresClubBalance+this.props.sillySquaresSummertimeBalance,"\xa0)",Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]})}),Object(x.jsx)("br",{})]}),Object(x.jsx)("br",{}),this.props.sillySquaresClubBalance<1&&Object(x.jsx)("div",{style:{border:"2px solid gold",backgroundColor:"white",borderRadius:"20px",padding:"15px"},children:Object(x.jsxs)("p",{children:["Uh oh, you don't own any Silly Squares!",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"You need to connect a MetaMask account that owns at least one Silly Square to see the exclusive content here!"]})}),this.props.sillySquaresClubBalance>0&&Object(x.jsxs)("h2",{children:[Object(x.jsxs)("div",{style:{border:"2px solid gold",backgroundColor:"white",borderRadius:"20px"},children:[Object(x.jsx)("br",{}),"You are a Silly Squares NFT holder!!",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"Please enjoy this EXCLUSIVE picture of a zebra!",Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]}),Object(x.jsx)("br",{}),Object(x.jsx)("img",{src:"../images/zebra.jpg"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]})})})})}}]),s}(n.Component),E=function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).state={foo:"bar",homePageData:{},sillySquaresClubContract:void 0,sillySquaresSummertimeContract:void 0,nftContractWithSigner:void 0,signer:void 0,currentUserAddress:"",sillySquaresClubContractOwnerAddress:"",sillySquaresSummertimeContractOwnerAddress:"",sillySquaresClubBalance:0,sillySquaresSummertimeBalance:0,mintCostWeiSquaresClub:0,mintCostEthSquaresClub:0,mintCostWeiSquaresSummertime:0,mintCostEthSquaresSummertime:0,totalSupplyClub:0,totalSupplySummertime:0,totalSquaresClubAlreadyMinted:0,totalSquaresSummertimeAlreadyMinted:0},n.getHomePageData(),b.a.initialize("UA-110570651-1"),b.a.pageview(window.location.pathname),n}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=Object(c.a)(o.a.mark((function e(){var t,s,n,a,r,i,c,l,u,d,p,b,j,m,h,y,O;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("mounting..."),window.ethereum.enable(),t=new N.a.providers.Web3Provider(window.ethereum),console.log({provider:t}),s=t.getSigner(),e.next=7,s.getAddress();case 7:return n=e.sent,this.setState({signer:s,currentUserAddress:n}),"0x4a2D1ee65060ee4f01B85c569076d90aFd1B9FF8","0x2f3356c0d03458ed1f6917236ab1311e770dbbc3",a=new N.a.Contract("0x4a2D1ee65060ee4f01B85c569076d90aFd1B9FF8",A,t),r=new N.a.Contract("0x2f3356c0d03458ed1f6917236ab1311e770dbbc3",A,t),this.setState({sillySquaresClubContract:a,sillySquaresSummertimeContract:r}),e.next=16,a.balanceOf(n);case 16:return i=e.sent.toNumber(),e.next=19,r.balanceOf(n);case 19:return c=e.sent.toNumber(),console.log({sillySquaresClubBalance:i}),console.log({sillySquaresSummertimeBalance:c}),this.setState({sillySquaresClubBalance:i,sillySquaresSummertimeBalance:c}),e.next=25,a.owner();case 25:return l=e.sent,e.next=28,r.owner();case 28:return u=e.sent,console.log("got owner"),console.log({sillySquaresClubContractOwnerAddress:l}),console.log({sillySquaresSummertimeContractOwnerAddress:u}),this.setState({sillySquaresClubContractOwnerAddress:l,sillySquaresSummertimeContractOwnerAddress:u}),e.next=35,a.cost();case 35:return d=e.sent,p=N.a.utils.formatEther(d),e.next=39,r.cost();case 39:return b=e.sent,j=N.a.utils.formatEther(b),console.log({mintCostEthSquaresClub:p}),console.log({mintCostEthSquaresSummertime:j}),this.setState({mintCostWeiSquaresClub:d,mintCostEthSquaresClub:p,mintCostWeiSquaresSummertime:b,mintCostEthSquaresSummertime:j}),e.next=46,a.totalSupply();case 46:return m=e.sent,e.next=49,a.totalSupply();case 49:return h=e.sent,this.setState({totalSquaresClubAlreadyMinted:N.a.utils.formatUnits(m,"wei"),totalSquaresSummertimeAlreadyMinted:N.a.utils.formatUnits(h,"wei")}),e.next=53,a.maxSupply();case 53:return y=e.sent,e.next=56,r.maxSupply();case 56:O=e.sent,console.log("max supply! ",N.a.utils.formatUnits(y,"wei")),this.setState({totalSupplyClub:N.a.utils.formatUnits(y,"wei"),totalSupplySummertime:N.a.utils.formatUnits(O,"wei")});case 59:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"mintTokens",value:function(){var e=Object(c.a)(o.a.mark((function e(t){var s,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=t*this.state.mintCostWei,n={},this.state.currentUserAddress!==this.state.contractOwnerAddress?n.value=s.toString():(n.value=0,console.log("called by owner... not charging to mint!")),console.log("args"),console.log(this.state.currentUserAddress,t,n);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getHomePageData",value:function(){m.a.ajax({url:"./homePageData.json",dataType:"json",cache:!1,success:function(e){this.setState({homePageData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(f,{data:this.state.homePageData.main}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(v,{data:this.state.homePageData.main}),Object(x.jsx)(w,{data:this.state.homePageData.resume}),Object(x.jsx)(C,{data:this.state.homePageData.portfolio}),Object(x.jsx)(q,{data:this.state.homePageData.resume,collectionName:"The Original Silly Squares Club",nftContract:this.state.sillySquaresClubContract,signer:this.state.signer,userAddress:this.state.currentUserAddress,contractOwnerAddress:this.state.sillySquaresClubContract,totalAlreadyMinted:this.state.totalSquaresClubAlreadyMinted,totalSupply:this.state.totalSupplyClub}),Object(x.jsx)("br",{}),Object(x.jsx)("hr",{}),Object(x.jsx)("br",{}),Object(x.jsx)(q,{data:this.state.homePageData.resume,collectionName:"Silly Squares Summertime Edition",nftContract:this.state.sillySquaresSummertimeContract,signer:this.state.signer,userAddress:this.state.currentUserAddress,contractOwnerAddress:this.state.sillySquaresSummertimeContractOwnerAddress,totalAlreadyMinted:this.state.totalSquaresSummertimeAlreadyMinted,totalSupply:this.state.totalSupplySummertime}),Object(x.jsx)(F,{sillySquaresClubBalance:this.state.sillySquaresClubBalance,sillySquaresSummertimeBalance:this.state.sillySquaresSummertimeBalance}),Object(x.jsx)(S,{data:this.state.homePageData.main}),Object(x.jsx)(g,{data:this.state.homePageData.main})]})}}]),s}(n.Component),B=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,84)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),r(e),i(e)}))};r.a.render(Object(x.jsx)(E,{}),document.getElementById("root")),B()}},[[82,1,2]]]);
//# sourceMappingURL=main.9e851d2c.chunk.js.map