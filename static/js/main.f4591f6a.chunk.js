(this["webpackJsonpburgerbuilder-project"]=this["webpackJsonpburgerbuilder-project"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__23J6h",BreadTop:"BurgerIngredient_BreadTop__1LTpc",Seeds1:"BurgerIngredient_Seeds1__3fz3O",Seeds2:"BurgerIngredient_Seeds2__qRr8W",Meat:"BurgerIngredient_Meat__3PxKo",Cheese:"BurgerIngredient_Cheese__A8xB3",Salad:"BurgerIngredient_Salad__1YVCw",Bacon:"BurgerIngredient_Bacon__2HbD5"}},,,,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__1NbKz",Open:"SideDrawer_Open__2Kg0A",Close:"SideDrawer_Close__1VOKq",Logo:"SideDrawer_Logo__31vrM"}},,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__2rQFM",Label:"BuildControl_Label__wi_c0",Less:"BuildControl_Less__1e0-A",More:"BuildControl_More__3cCpI"}},function(e,t,n){e.exports={Input:"Input_Input__2haiz",Label:"Input_Label__3P3Nc",InputElement:"Input_InputElement__1zQzO",Invalid:"Input_Invalid__2Z84K"}},,,,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__3lPxz",Logo:"Toolbar_Logo__jz6eQ",DesktopOnly:"Toolbar_DesktopOnly__2OFBR"}},,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__1mUBO",active:"NavigationItem_active__3m1i8"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__snLIJ",OrderButton:"BuildControls_OrderButton__29tlH",enable:"BuildControls_enable__2twLT"}},function(e,t,n){e.exports={Button:"Button_Button__oqtyA",Success:"Button_Success__3Po2z",Danger:"Button_Danger__2l4hV"}},,,,,,,,,,,,function(e,t,n){e.exports={Content:"Layout_Content__1Kp5M"}},function(e,t,n){e.exports=n.p+"static/media/logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__2DqFe"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__3WS_C"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__1DQY1"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__9oADW"}},function(e,t,n){e.exports={Burger:"Burger_Burger__1kZb-"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1HBTX"}},,function(e,t,n){e.exports={Loader:"Spinner_Loader__YFn57",load1:"Spinner_load1__3X3xl"}},,function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__n_UOX"}},function(e,t,n){e.exports={ContactData:"ContactData_ContactData__mUzsQ",Input:"ContactData_Input__1o5-M"}},function(e,t,n){e.exports={Order:"Order_Order__1pa4U"}},function(e,t,n){e.exports={Auth:"Auth_Auth__1nWw8",Input:"Auth_Input__1Zzp0",ContactData:"Auth_ContactData__161Gt"}},,function(e,t,n){e.exports=n(88)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),l=n.n(o),i=(n(65),n(2)),c=n(3),s=n(4),u=n(5),d=function(e){return e.children},p=n(43),m=n.n(p),h=n(25),g=n.n(h),v=n(44),f=n.n(v),b=n(45),_=n.n(b),E=function(e){return r.a.createElement("div",{className:_.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:f.a,alt:"My Burger"}))},y=n(46),C=n.n(y),O=n(27),k=n.n(O),j=n(15),N=function(e){return r.a.createElement("li",{className:k.a.NavigationItem},r.a.createElement(j.b,{to:e.link,exact:e.exact,activeClassName:k.a.active},e.children))},w=function(e){return r.a.createElement("ul",{className:C.a.NavigationItems},r.a.createElement(N,{link:"/",exact:!0},"Burger Builder"),r.a.createElement(N,{link:"/orders"},"Orders"),r.a.createElement(N,{link:"/auth"},"Authenticate"))},B=n(48),I=n.n(B),S=function(e){return r.a.createElement("div",{className:I.a.DrawerToggle,onClick:e.click},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},D=function(e){return r.a.createElement("header",{className:g.a.Toolbar},r.a.createElement(S,{click:e.drawerToggleClick}),r.a.createElement("div",{className:g.a.Logo},r.a.createElement(E,null)),r.a.createElement("nav",{className:g.a.DesktopOnly},r.a.createElement(w,null)))},T=n(18),x=n.n(T),L=n(49),A=n.n(L),M=function(e){return e.show?r.a.createElement("div",{className:A.a.Backdrop,onClick:e.clicked}):null},H=function(e){var t=[x.a.SideDrawer,x.a.Close];return e.open&&(t=[x.a.SideDrawer,x.a.Open]),r.a.createElement(d,null,r.a.createElement(M,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:x.a.Logo},r.a.createElement(E,null)),r.a.createElement("nav",null,r.a.createElement(w,null))))},P=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(t){return{showSideDrawer:!e.state.showSideDrawer}}))},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(D,{drawerToggleClick:this.sideDrawerToggleHandler}),r.a.createElement(H,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("div",null,"Backdrop"),r.a.createElement("main",{className:m.a.Content},this.props.children))}}]),n}(a.Component),V=n(6),q=n(59),F=n(50),R=n.n(F),z=n(12),U=n.n(z),W=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:U.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:U.a.BreadTop},r.a.createElement("div",{className:U.a.Seeds1}),r.a.createElement("div",{className:U.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:U.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:U.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:U.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:U.a.Bacon});break;default:e=null}return e}}]),n}(a.Component),Y=n(14),K=Object(Y.f)((function(e){console.log(e);var t=Object.keys(e.ingredients).map((function(t){return Object(q.a)(Array(e.ingredients[t])).map((function(e,n){return r.a.createElement(W,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:R.a.Burger},r.a.createElement(W,{type:"bread-top"}),t,r.a.createElement(W,{type:"bread-bottom"}))})),G=n(30),Q=n.n(G),J=n(20),Z=n.n(J),X=function(e){return r.a.createElement("div",{className:Z.a.BuildControl},r.a.createElement("div",{className:Z.a.Label},e.label),r.a.createElement("button",{className:Z.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:Z.a.More,onClick:e.added},"More"))},$=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],ee=function(e){return r.a.createElement("div",{className:Q.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),$.map((function(t){return r.a.createElement(X,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:Q.a.OrderButton,disabled:!e.purchaseable,onClick:e.ordered},"Order Now"))},te=n(51),ne=n.n(te),ae=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentDidUpdate",value:function(){console.log("[Modal.js] componentdidupdate")}},{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(M,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:ne.a.Modal,style:{tranform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),n}(a.Component),re=n(31),oe=n.n(re),le=function(e){return r.a.createElement("button",{className:[oe.a.Button,oe.a[e.btnType]].join(" "),onClick:e.clicked,disabled:e.disabled},e.children)},ie=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidUpdate",value:function(){console.log("[OrderSummary.js] DidUpdate")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])}));return r.a.createElement(d,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))),r.a.createElement("p",null,"Continue to CheckOut"),r.a.createElement(le,{btnType:"Danger",clicked:this.props.purchaseCancelled},"Cancel"),r.a.createElement(le,{btnType:"Success",clicked:this.props.purchaseContinued},"Submit"))}}]),n}(a.Component),ce=n(52),se=n.n(ce).a.create({baseURL:"https://react-my-burger-25557.firebaseio.com/"}),ue=n(53),de=n.n(ue),pe=function(){return r.a.createElement("div",{className:de.a.Loader},"Loading...")},me=function(e,t){return function(n){Object(u.a)(o,n);var a=Object(s.a)(o);function o(){var e;Object(i.a)(this,o);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(c.a)(o,[{key:"componentDidMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(ae,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),o}(a.Component)},he=n(13),ge=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={purchasing:!1,loading:!1,error:!1},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.props.history.push("/checkout")},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);return this.setState({purchaseable:t>0}),t>0}},{key:"render",value:function(){var e=Object(V.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,a=this.state.error?r.a.createElement("p",null,"Ingredients cant be loaded"):r.a.createElement(pe,null);return this.props.ings&&(a=r.a.createElement(d,null,r.a.createElement(K,{ingredients:this.props.ings}),r.a.createElement(ee,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,price:this.props.price,purchaseable:this.updatePurchaseState,ordered:this.purchaseHandler})),n=r.a.createElement(ie,{ingredients:this.props.ings,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,price:this.props.price})),this.state.loading&&(n=r.a.createElement(pe,null)),r.a.createElement(d,null,r.a.createElement(ae,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),a)}}]),n}(a.Component),ve=Object(he.b)((function(e){return{ings:e.ingredients,price:e.totalPrice}}),(function(e){return{onIngredientAdded:function(t){return e({type:"ADD_INGREDIENT",ingredientName:t})},onIngredientRemoved:function(t){return e({type:"REMOVE_INGREDIENT",ingredientName:t})}}}))(me(ge,se)),fe=n(55),be=n.n(fe),_e=function(e){return r.a.createElement("div",{className:be.a.Checkoutsummary},r.a.createElement("h1",null,"We hope it tastes well"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(K,{ingredients:e.ingredients})),r.a.createElement(le,{btnType:"Danger",clicked:e.CheckoutCancelled},"Cancel"),r.a.createElement(le,{btnType:"Success",clicked:e.CheckoutContinued},"Continue"))},Ee=n(56),ye=n.n(Ee),Ce=n(21),Oe=n.n(Ce),ke=function(e){var t=null,n=[Oe.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(Oe.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:Oe.a.Input},r.a.createElement("label",{className:Oe.a.Label},e.label),t)},je=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1,loading:!1},e.orderHandler=function(t){t.preventDefault(),e.setState({loading:!0});var n={};for(var a in e.state.orderForm)n[a]=e.state.orderForm[a].value;var r={ingredients:e.props.ings,price:e.props.price,orderData:n};se.post("/orders.json",r).then((function(t){return e.setState({loading:!1})})).catch((function(t){return e.setState({loading:!1})})),e.props.history.push("/"),console.log(e.props.ingredients)},e.inputChangedHandler=function(t,n){var a=Object(V.a)({},e.state.orderForm),r=Object(V.a)({},a[n]);r.value=t.target.value,r.valid=e.checkValidity(r.value,r.validation),r.touched=!0,a[n]=r;var o=!0;for(var l in a)o=a[l].valid&&o;e.setState({orderForm:a,formIsValid:o})},e}return Object(c.a)(n,[{key:"checkValidity",value:function(e,t){var n=!0;return!t||(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength),t.maxLength&&(n=e.length<=t.maxLength),n)}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=r.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return r.a.createElement(ke,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,changed:function(n){return e.inputChangedHandler(n,t.id)},invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched})})),r.a.createElement(le,{btnType:"Success",disabled:!this.state.formIsValid},"Order"));return this.state.loading&&(a=r.a.createElement(pe,null)),r.a.createElement("div",{className:ye.a.ContactData},r.a.createElement("h4",null,"Enter your Contact Data"),a)}}]),n}(a.Component),Ne=Object(he.b)((function(e){return{ings:e.ingredients,price:e.totalPrice}}))(je),we=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).checkoutCancelledHandler=function(){e.props.history.goBack()},e.checkoutContinueddHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(_e,{ingredients:this.props.ings,CheckoutCancelled:this.checkoutCancelledHandler,CheckoutContinued:this.checkoutContinueddHandler}),r.a.createElement(Y.a,{path:this.props.match.path+"/contact-data",component:Ne}))}}]),n}(a.Component),Be=Object(he.b)((function(e){return{ings:e.ingredients}}))(we),Ie=n(57),Se=n.n(Ie),De=function(e){return r.a.createElement("div",{className:Se.a.Order},r.a.createElement("p",null,"Ingredients: Salad(1)"),r.a.createElement("p",null,"Price: ",r.a.createElement("strong",null,"USD 5.45")))},Te=me(function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={orders:[],loading:!0},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;se.get("/orders").then((function(t){var n=[];for(var a in t.data)n.push(Object(V.a)({},t.data[a],{id:a}));e.setState({loading:!1,order:n})})).catch((function(t){e.setState({loading:!1})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(De,null),r.a.createElement(De,null))}}]),n}(a.Component),se),xe=n(16),Le=n(58),Ae=n.n(Le),Me=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}}},e.inputChangedHandler=function(t,n){var a=Object(V.a)({},e.state.controls,Object(xe.a)({},n,Object(V.a)({},e.state.controls[n],{value:t.target.value,valid:e.checkValidity(t.target.value,e.state.controls[n].validation),touched:!0})));e.setState({controls:a})},e}return Object(c.a)(n,[{key:"checkValidity",value:function(e,t){var n=!0;return!t||(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength),t.maxLength&&(n=e.length<=t.maxLength),n)}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map((function(t){return r.a.createElement(ke,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,changed:function(n){return e.inputChangedHandler(n,t.id)},invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched})}));return r.a.createElement("div",{className:Ae.a.Auth},r.a.createElement("form",null,a,r.a.createElement(le,{btnType:"Success"},"SUBMIT")))}}]),n}(a.Component),He=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(P,null,r.a.createElement(Y.c,null,r.a.createElement(Y.a,{path:"/",exact:!0,component:ve}),r.a.createElement(Y.a,{path:"/checkout",component:Be}),r.a.createElement(Y.a,{path:"/orders",component:Te}),r.a.createElement(Y.a,{path:"/auth",component:Me}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Pe=n(24),Ve={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:0},qe={salad:.5,cheese:.4,meat:1.3,bacon:.7},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":return Object(V.a)({},e,{ingredients:Object(V.a)({},e.ingredients,Object(xe.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1)),totalPrice:e.totalPrice+qe[t.ingredientName]});case"REMOVE_INGREDIENT":return Object(V.a)({},e,{ingredients:Object(V.a)({},e.ingredients,Object(xe.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1)),totalPrice:e.totalPrice-qe[t.ingredientName]});default:return e}},Re=Object(Pe.b)(Fe),ze=r.a.createElement(he.a,{store:Re},r.a.createElement(j.a,null,r.a.createElement(He,null)));l.a.render(ze,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[60,1,2]]]);
//# sourceMappingURL=main.f4591f6a.chunk.js.map