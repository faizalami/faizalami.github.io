(window.webpackJsonp=window.webpackJsonp||[]).push([[4,8],{228:function(t,e,n){"use strict";n.r(e);var o={name:"ImagePreview",props:{show:{type:Boolean,default:!1},images:{type:Array,default:function(){return[]}}},methods:{close:function(){this.$emit("update:show",!1)}}},r=n(43),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{"enter-active-class":"transition-all ease-in duration-100","leave-active-class":"transition-all ease-out duration-100","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-to-class":"opacity-0"}},[t.show?n("div",{staticClass:"fixed z-10 inset-0 overflow-y-auto",attrs:{"aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"}},[n("div",{staticClass:"flex items-center justify-center min-h-screen pt-4 pb-20 text-center sm:block sm:p-0"},[n("div",{staticClass:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",attrs:{"aria-hidden":"true"},on:{click:t.close}}),t._v(" "),n("span",{staticClass:"hidden sm:inline-block sm:align-middle sm:h-screen",attrs:{"aria-hidden":"true"}},[t._v("​")]),t._v(" "),n("div",{staticClass:"inline-block align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full"},[n("div",{staticClass:"m-4 py-4 sm:p-4 border-2 border-gray-600"},[n("div",{staticClass:"w-full text-center mb-4 px-4"},[n("button",{staticClass:"w-full inline-flex justify-center border-2 border-gray-600 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm",attrs:{type:"button"},on:{click:t.close}},[t._v("\n              Close ⛌\n            ")])]),t._v(" "),n("div",{staticClass:"grid gap-4"},t._l(t.images,(function(image,t){return n("img",{key:t,staticClass:"border-y-2 sm:border-2 border-gray-600 w-full",attrs:{src:image,alt:t+1,loading:"lazy",width:"1080",height:"530"}})})),0)])])])]):t._e()])}),[],!1,null,"5479dcf9",null);e.default=component.exports},236:function(t,e,n){var content=n(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(99).default)("4dfe8536",content,!0,{sourceMap:!1})},250:function(t,e,n){t.exports=n.p+"img/sertifikat_course_163_922231_161121130516.ee8e2d0.png"},251:function(t,e,n){t.exports=n.p+"img/sertifikat_course_219_922231_021221135222.d73cb8b.png"},252:function(t,e,n){t.exports=n.p+"img/certificate-refactoring.8f85248.png"},253:function(t,e,n){t.exports=n.p+"img/sertifikat_course_169_922231_041221152845.c76c44b.png"},254:function(t,e,n){t.exports=n.p+"img/UC-2c872fcf-6d81-4fd6-978a-124c7051b026.419412b.png"},255:function(t,e,n){t.exports=n.p+"img/sertifikat_course_256_922231_161221150801.bc43e06.png"},256:function(t,e,n){t.exports=n.p+"img/UC-d01f0659-a749-4fca-bb7f-5c071c8f9ae5.d114dfe.png"},257:function(t,e,n){t.exports=n.p+"img/UC-2ecdfb21-15c7-4b52-b360-7582551f8e00.3e9bfb1.png"},258:function(t,e,n){t.exports=n.p+"img/UC-3ae88dff-f664-4475-92f0-2a8fc078e35d.7115711.png"},259:function(t,e,n){t.exports=n.p+"img/UC-7ba133c9-9a1b-4652-ad47-87eba6eceb31.0ad5931.png"},260:function(t,e,n){t.exports=n.p+"img/react-js-testing-dengan-jest-dan-rtl-faizal-amiruddin.0ab4cf5.png"},261:function(t,e,n){t.exports=n.p+"img/UC-c9e3699a-4bd4-4b9d-b6c3-2826cb20143b.d5a4cc6.png"},262:function(t,e,n){"use strict";n(236)},263:function(t,e,n){var o=n(98)((function(i){return i[1]}));o.push([t.i,"#course .title[data-v-6c674db6]{background:rgba(0,0,0,.5);min-height:150px}",""]),o.locals={},t.exports=o},309:function(t,e,n){"use strict";n.r(e);var o={name:"CourseSection",data:function(){return{courses:[n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(261)],showImage:!1,image:null}},methods:{showCourse:function(image){this.image=[image],this.showImage=!0}}},r=(n(262),n(43)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"course"}},[t._m(0),t._v(" "),n("div",{staticClass:"flex bg-white"},[n("div",{staticClass:"grid w-full md:grid-cols-4 md:auto-rows-fr gap-4 m-4 md:m-8"},t._l(t.courses,(function(e,o){return n("button",{key:o,staticClass:"border-gray-600 border-2",attrs:{"aria-label":"Open Image"},on:{click:function(n){return t.showCourse(e)}}},[n("img",{staticClass:"w-full h-full object-cover",attrs:{src:e,alt:"",loading:"lazy",width:"445",height:"330"}})])})),0)]),t._v(" "),n("image-preview",{attrs:{show:t.showImage,images:t.image},on:{"update:show":function(e){t.showImage=e}}})],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center items-center w-full title"},[n("h2",{staticClass:"w-full border-y-4 border-white p-8 text-center text-4xl font-bold text-white"},[t._v("\n      Course Completion\n    ")])])}],!1,null,"6c674db6",null);e.default=component.exports;installComponents(component,{ImagePreview:n(228).default})}}]);