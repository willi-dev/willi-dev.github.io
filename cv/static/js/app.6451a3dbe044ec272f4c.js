webpackJsonp([1],{"0598":function(t,a,e){"use strict";var s=e("RCxb");a.a={name:"personal-detail",props:["personal","personalLoaded"],components:{BeatLoader:s.a}}},"0vnt":function(t,a,e){"use strict";function s(t){e("fTED")}var i=e("0598"),c=e("tryO"),n=e("VU/8"),l=s,o=n(i.a,c.a,l,null,null);a.a=o.exports},"2DCm":function(t,a,e){"use strict";var s=e("RCxb");a.a={name:"skills",props:["skills","skillLoaded"],components:{BeatLoader:s.a}}},"4RYe":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cv-section__block-inner cv-section__publication-research"},[e("h3",{staticClass:"cv-section__block-title"},[t._v("Publication Research")]),t._v(" "),0==t.publicationLoaded?e("div",{staticClass:"cv-container__loader"},[e("beat-loader")],1):t._e(),t._v(" "),e("transition-group",{attrs:{name:"list",tag:"div"}},t._l(t.publication,function(a){return e("div",{key:a.type,staticClass:"list-item"},[e("div",{staticClass:"cv-block__wrapper cv-block__wrapper-publication-type"},[e("h4",{staticClass:"cv-block-publication-type cv-block-text"},[t._v("\n            "+t._s(a.type)+"\n          ")])]),t._v(" "),e("div",{staticClass:"cv-block__wrapper cv-block__wrapper-publication-title"},[e("h4",{staticClass:"cv-block-publication-title cv-block-text"},[t._v("\n            "+t._s(a.title)+"\n          ")])]),t._v(" "),e("div",{staticClass:"cv-block__wrapper cv-block__wrapper-publication-description"},[e("h4",{staticClass:"cv-block-publication-description cv-block-text"},[t._v("\n            "+t._s(a.description)+"\n          ")])]),t._v(" "),e("div",{staticClass:"cv-block__wrapper cv-block__wrapper-publication-url"},[e("h4",{staticClass:"cv-block-publication-url cv-block-text"},[t._v("\n            "+t._s(a.url)+"\n          ")])])])}))],1)},i=[],c={render:s,staticRenderFns:i};a.a=c},"9D87":function(t,a,e){"use strict";a.a={name:"BeatLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"15px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,height:this.size,width:this.size,margin:this.margin,borderRadius:this.radius}}}}},"9vhr":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 col-sm-5 col-md-5 col-lg-5"},[e("div",{staticClass:"cv-section__block--left cv-section__block"},[t._m(0),t._v(" "),e("personal-detail",{attrs:{personal:t.personal,personalLoaded:t.personalLoaded}}),t._v(" "),e("education",{attrs:{education:t.education,eduLoaded:t.eduLoaded}}),t._v(" "),e("skills",{attrs:{skills:t.skills,skillLoaded:t.skillLoaded}}),t._v(" "),e("training",{attrs:{training:t.training,trainingLoaded:t.trainingLoaded}})],1)]),t._v(" "),e("div",{staticClass:"col-xs-12 col-sm-7 col-md-7 col-lg-7"},[e("div",{staticClass:"cv-section__block--right cv-section__block"},[e("workExperience",{attrs:{work:t.work,workLoaded:t.workLoaded}}),t._v(" "),e("publication",{attrs:{publication:t.publication,publicationLoaded:t.publicationLoaded}})],1)])])])])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"cv-section__block-inner cv-section__personal-main"},[s("div",{staticClass:"cv-section__personal-main-photo"},[s("img",{staticClass:"img-responsive",attrs:{src:e("Jks+"),alt:""}})]),t._v(" "),s("div",{staticClass:"cv-block__wrapper-name cv-block__wrapper"},[s("h1",{staticClass:"cv-block-name"},[t._v("willi")])]),t._v(" "),s("div",{staticClass:"cv-block__wrapper-position cv-block__wrapper"},[s("h4",{staticClass:"cv-block-position"},[t._v("web developer")])]),t._v(" "),s("div",{staticClass:"cv-block__wrapper cv-block__wrapper-phone"},[s("h4",{staticClass:"cv-block-phone"},[t._v("+62 857 2030 8893")])]),t._v(" "),s("div",{staticClass:"cv-block__wrapper cv-block__wrapper-address"},[s("h4",{staticClass:"cv-block-address"},[t._v("Kawista no. 3 Cigadung Bandung")])]),t._v(" "),s("div",{staticClass:"cv-block__wrapper cv-block__wrapper-email"},[s("h4",{staticClass:"cv-block-email"},[t._v("willi.ilmukomputer@gmail.com")])]),t._v(" "),s("div",{staticClass:"cv-block__wrapper cv-block__wrapper-linkedin"},[s("h4",{staticClass:"cv-block-linkedin"},[t._v("https://id.linkedin.com/in/willidev")])]),t._v(" "),s("div",{staticClass:"cv-block__wrapper cv-block__wrapper-github"},[s("h4",{staticClass:"cv-block-github"},[t._v("https://github.com/willi-dev")])])])}],c={render:s,staticRenderFns:i};a.a=c},B9ss:function(t,a){},BkMl:function(t,a){},DiGE:function(t,a){},Gneo:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cv-section__block-inner cv-section__work-experience"},[e("h3",{staticClass:"cv-section__block-title"},[t._v("Work Experience")]),t._v(" "),0==t.workLoaded?e("div",{staticClass:"cv-container__loader"},[e("beat-loader")],1):t._e(),t._v(" "),e("transition-group",{attrs:{name:"list",tag:"div"}},t._l(t.work,function(a){return e("div",{key:a.position,staticClass:"list-item"},[e("div",{staticClass:"cv-block__wrapper cv-block__wrapper-company"},[e("h4",{staticClass:"cv-block-company cv-block-text"},[t._v(t._s(a.position)+" | "+t._s(a.company)+" "),e("span",{staticClass:"duration"},[t._v(t._s(a.duration))])])]),t._v(" "),t._l(a.projects,function(a,s){return e("div",{staticClass:"cv-block__wrapper cv-block__wrapper-projects"},t._l(a,function(a,s){return e("div",["title"==s?e("div",{staticClass:"cv-block__wrapper cv-block__wrapper-project-title"},[e("h4",{staticClass:"cv-block-project-title cv-block-text"},[t._v("Project: "+t._s(a))])]):t._e(),t._v(" "),"desc"==s?e("div",{staticClass:"cv-block__wrapper cv-block__wrapper-project-desc"},[e("h4",{staticClass:"cv-block-project-desc cv-block-text"},[t._v(t._s(a))])]):t._e(),t._v(" "),"url"==s?e("div",{directives:[{name:"show",rawName:"v-show",value:"-"!=a,expression:"projitem!='-'"}],staticClass:"cv-block__wrapper cv-block__wrapper-project-url"},[e("h4",{staticClass:"cv-block-project-url cv-block-text"},[t._v(t._s(a))])]):t._e()])}))})],2)}))],1)},i=[],c={render:s,staticRenderFns:i};a.a=c},"Jks+":function(t,a,e){t.exports=e.p+"static/img/photo.66f2c5a.jpg"},M93x:function(t,a,e){"use strict";function s(t){e("BkMl")}var i=e("xJD8"),c=e("9vhr"),n=e("VU/8"),l=s,o=n(i.a,c.a,l,null,null);a.a=o.exports},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),i=e("M93x"),c=e("1mcD"),n=e.n(c);s.a.config.productionTip=!1,s.a.use(n.a),new s.a({el:"#app",template:"<App/>",components:{App:i.a}})},O36n:function(t,a,e){"use strict";function s(t){e("hLWu")}var i=e("2DCm"),c=e("uFPt"),n=e("VU/8"),l=s,o=n(i.a,c.a,l,null,null);a.a=o.exports},RCxb:function(t,a,e){"use strict";function s(t){e("B9ss")}var i=e("9D87"),c=e("bNpO"),n=e("VU/8"),l=s,o=n(i.a,c.a,l,null,null);a.a=o.exports},ZHO3:function(t,a,e){"use strict";function s(t){e("q9lW")}var i=e("nNM8"),c=e("4RYe"),n=e("VU/8"),l=s,o=n(i.a,c.a,l,null,null);a.a=o.exports},aMOz:function(t,a,e){"use strict";function s(t){e("i6pO")}var i=e("mFmQ"),c=e("Gneo"),n=e("VU/8"),l=s,o=n(i.a,c.a,l,null,null);a.a=o.exports},bBZf:function(t,a,e){"use strict";function s(t){e("k3CS")}var i=e("hWOV"),c=e("qLCB"),n=e("VU/8"),l=s,o=n(i.a,c.a,l,null,null);a.a=o.exports},bNpO:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"v-spinner"},[e("div",{staticClass:"v-beat v-beat-odd",style:t.spinnerStyle}),e("div",{staticClass:"v-beat v-beat-even",style:t.spinnerStyle}),e("div",{staticClass:"v-beat v-beat-odd",style:t.spinnerStyle})])},i=[],c={render:s,staticRenderFns:i};a.a=c},fTED:function(t,a){},hLWu:function(t,a){},hWOV:function(t,a,e){"use strict";var s=e("RCxb");a.a={name:"training",props:["training","trainingLoaded"],components:{BeatLoader:s.a}}},i6pO:function(t,a){},k3CS:function(t,a){},mFmQ:function(t,a,e){"use strict";var s=e("RCxb");a.a={name:"work-experience",props:["work","workLoaded"],components:{BeatLoader:s.a}}},nNM8:function(t,a,e){"use strict";var s=e("RCxb");a.a={name:"publication",props:["publication","publicationLoaded"],components:{BeatLoader:s.a}}},pOYS:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cv-section__block-inner cv-section__education"},[e("h3",{staticClass:"cv-section__block-title"},[t._v("Education")]),t._v(" "),0==t.eduLoaded?e("div",{staticClass:"cv-container__loader"},[e("beat-loader")],1):t._e(),t._v(" "),e("transition-group",{attrs:{name:"list",tag:"div"}},t._l(t.education,function(a){return e("div",{key:a.school,staticClass:"list-item"},[e("div",{staticClass:"cv-block__wrapper cv-block__wrapper-school"},[e("h4",{staticClass:"cv-block-school cv-block-text"},[t._v("\n              "+t._s(a.school)+"\n            ")])]),t._v(" "),e("div",{staticClass:"cv-block__wrapper cv-block__wrapper-eduyear"},[e("h4",{staticClass:"cv-block-edu-year cv-block-text"},[t._v("\n              "+t._s(a.year)+"    \n            ")])]),t._v(" "),"-"!=a.department?e("div",{staticClass:"cv-block__wrapper cv-block__wrapper-department"},[e("h4",{staticClass:"cv-block-departement cv-block-text"},[t._v("\n              "+t._s(a.department)+"\n            ")])]):t._e()])}))],1)},i=[],c={render:s,staticRenderFns:i};a.a=c},q9lW:function(t,a){},qLCB:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cv-section__block-inner cv-section__training"},[e("h3",{staticClass:"cv-section__block-title"},[t._v("Training")]),t._v(" "),0==t.trainingLoaded?e("div",{staticClass:"cv-container__loader"},[e("beat-loader")],1):t._e(),t._v(" "),e("transition-group",{attrs:{name:"list",tag:"div"}},t._l(t.training,function(a){return e("div",{key:a.name,staticClass:"list-item"},[e("div",{staticClass:"cv-block__wrapper cv-block__wrapper-training-name"},[e("h4",{staticClass:"cv-block-training-name cv-block-text"},[t._v(t._s(a.name))])]),t._v(" "),e("div",{staticClass:"cv-block__wrapper cv-block__wrapper-training-year"},[e("h4",{staticClass:"cv-block-training-year cv-block-text"},[t._v(t._s(a.place_year))])])])}))],1)},i=[],c={render:s,staticRenderFns:i};a.a=c},rHPr:function(t,a,e){"use strict";var s=e("RCxb");a.a={name:"education",props:["education","eduLoaded"],components:{BeatLoader:s.a}}},tryO:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cv-section__block-inner cv-section__personal-detail"},[e("h3",{staticClass:"cv-section__block-title"},[t._v("Personal Detail")]),t._v(" "),0==t.personalLoaded?e("div",{staticClass:"cv-container__loader"},[e("beat-loader")],1):t._e(),t._v(" "),e("transition-group",{attrs:{name:"list",tag:"div"}},t._l(t.personal,function(a){return e("div",{key:a.placedatebirth,staticClass:"list-item"},[e("div",{staticClass:"cv-block__wrapper cv-block__wrapper-placedatebirth"},[e("h4",{staticClass:"cv-block-placedatebirth cv-block-text"},[t._v("Place, Date of Birth "),e("span",{staticClass:"value"},[t._v(t._s(a.placedatebirth))])])]),t._v(" "),e("div",{staticClass:"cv-block__wrapper cv-block__wrapper-gender"},[e("h4",{staticClass:"cv-block-gender cv-block-text"},[t._v("Gender "),e("span",{staticClass:"value"},[t._v(t._s(a.gender))])])]),t._v(" "),e("div",{staticClass:"cv-block__wrapper cv-block__wrapper-language"},[e("h4",{staticClass:"cv-block-language cv-block-text"},[t._v("Language "),e("span",{staticClass:"value"},[t._v(t._s(a.language))])])]),t._v(" "),e("div",{staticClass:"cv-block__wrapper cv-block__wrapper-religion"},[e("h4",{staticClass:"cv-block-religion cv-block-text"},[t._v("Religion "),e("span",{staticClass:"value"},[t._v(t._s(a.religion))])])])])}))],1)},i=[],c={render:s,staticRenderFns:i};a.a=c},uFPt:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cv-section__block-inner cv-section__skills"},[e("h3",{staticClass:"cv-section__block-title"},[t._v("Skills")]),t._v(" "),0==t.skillLoaded?e("div",{staticClass:"cv-container__loader"},[e("beat-loader")],1):t._e(),t._v(" "),e("transition-group",{attrs:{name:"list",tag:"div"}},t._l(t.skills,function(a){return e("div",{key:a.main_skills,staticClass:"list-item"},[e("div",{staticClass:"cv-block__wrapper cv-block__wrapper-skills-main"},[e("h4",{staticClass:"cv-block-skills-main cv-block-text"},[t._v("\n            "+t._s(a.main_skills)+"\n          ")])]),t._v(" "),e("div",{staticClass:"cv-block__wrapper cv-block__wrapper-skills-related"},[e("h3",{staticClass:"cv-block-skills-related-title cv-block-text"},[t._v("Related Development Tools")]),t._v(" "),e("h4",{staticClass:"cv-block-skills-related cv-block-text"},[t._v("\n            "+t._s(a.related_tools)+"\n          ")])])])}))],1)},i=[],c={render:s,staticRenderFns:i};a.a=c},v4vk:function(t,a,e){"use strict";function s(t){e("DiGE")}var i=e("rHPr"),c=e("pOYS"),n=e("VU/8"),l=s,o=n(i.a,c.a,l,null,null);a.a=o.exports},xJD8:function(t,a,e){"use strict";var s=e("q6Ae"),i=e.n(s),c=e("0vnt"),n=e("v4vk"),l=e("O36n"),o=e("bBZf"),r=e("aMOz"),v=e("ZHO3"),_=e("e45v"),p=e.n(_),d={apiKey:"AIzaSyCTn5KIYAtumc2AL_fCNj_n_CZ02pKAQj4",authDomain:"willi-3de27.firebaseapp.com",databaseURL:"https://willi-3de27.firebaseio.com",storageBucket:"willi-3de27.appspot.com",messagingSenderId:"19575266674",projectId:"willi-3de27"},u=i.a.initializeApp(d),b=u.database(),k=b.ref("personal_detail"),C=b.ref("education"),f=b.ref("skills"),m=b.ref("training"),w=b.ref("work_experience"),h=b.ref("publication");a.a={name:"app",components:{personalDetail:c.a,education:n.a,skills:l.a,training:o.a,workExperience:r.a,publication:v.a},firebase:{personal:{source:k,readyCallback:function(){this.personalLoaded=!0}},education:{source:C,readyCallback:function(){this.eduLoaded=!0}},skills:{source:f,readyCallback:function(){this.skillLoaded=!0}},training:{source:m,readyCallback:function(){this.trainingLoaded=!0}},work:{source:w,readyCallback:function(){this.workLoaded=!0}},publication:{source:h,readyCallback:function(){this.publicationLoaded=!0}}},data:function(){return{personalLoaded:!1,eduLoaded:!1,skillLoaded:!1,trainingLoaded:!1,workLoaded:!1,publicationLoaded:!1,stickyConfig:{zIndex:100,stickyTop:20}}},directives:{sticky:p.a}}}},["NHnr"]);
//# sourceMappingURL=app.6451a3dbe044ec272f4c.js.map