webpackJsonp([3],{"3K0C":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAABAxJREFUeAHtnLtrFFEUxt08FLHwVYgPFB9pRAQfiMkfoFioIChCiiARGysbxcZKEMHaVgMptLEJBBtTaOUriSIiRqIoMY2PRFCJJq7ft5kzzC73zGNndmdhzoEvd+bcO+ec+9vZmZ3dmSxZktDK5XIX9ACahUahi9DKhGEaPpw1QZcg1shaWXNXQxMjQTv0Dqo1FnANWtfQAmIEZw1eLayp1ibgaI8Rpr4hCH6qNmPN+m+s34S215eh/q2Qc5uXmzWE2cn6s0RsiazDYZkDffNYvgvtiwiZups5vFzMGceGUyd1BUDmNmgmTgU1Y/jeP+yKmcbHmBBjJzXOoS1Nbue2CLojaSU148ex3gt1OBPEcHJbL8YLtGks+0MAquGunIV9QJDz0NIYTCpDMLYTOgtNQllY9m99VNWTRWWBGJzsoShIHANlBUbS90TlTdyPyDx9Zm0LCHhcK4Z9EMdkbbE/jpS04lx+VDkF/wZXXwrfWKlU2uvaHvlG4d/j6kvhm0K+TXG3T3o0v4DAC3GDxxw3ETIurC9kM7WLtXMOsS3RHsSoeFX5avdCm6HYB1qMDdo/rHyHHkO38YrOBTtlGbmWYbkPOgithpK+oNikYn/w9yM0iFxjiy77awSMgBFofQKVgzQOhvwKgKfTrdAKqN6DITZNbL9w4Lzj2gp1nYZ/uauvQb55xP0MvUdNk8xRQhG70N6HNtKRg02jGOdnK9TGYtfnUBNTDkF93FNuQHnBQeqWtaOo7CoB7W/ZEvMv7AgBrc2/jpatYEszD8YtSyGksDYDFEKHXQbIAEUQiOi2PcgARRCI6OYe9CViTJG7fxDQqyITiJj7WwK6Av2NGFjE7jImfb0DF4qPcFHIH9LOQbya58Uhv+psln0NSfQUfc38pE8oPOR8ggbA5jlaMyNgBIyAEWhVAv4PhziT8Qe6EzkU+g1nizOuvKjpFvxrXH0N9t1DTQPMEbxXZyfWjzU4sSv8tMvp+XjjVR7fSb+RmuxiVUgorQFSwIjbAAkJpTVAChhxGyAhobQGSAEjbgMkJJTWAClgxG2AhITSGiAFjLgNkJBQWgOkgBG3ARISSmuAFDDiNkBCQmkNkAJG3AZISCitAVLAiNsACQmlNUAKGHEbICGhtAZIASNuAyQklNYAKWDEHQTEe2PMFgn4LIKAfhodn4DPIgho1u+2BZ9FENCEcfEJ+CyCgMbRzce1i25kQBYV8wHhdg/eZTHi+YvcjHgsqgF5RC6j5UP4RTXOnQx88/cgekDuGZp+aI7rBTPOud9j4E+9ChC9GDCIpht6yPWCGOfa7c29asr+LXhVXm8Ft8DtxiIfbj0A8Q60VRD/JWAnlJU186lnPlHAU/gM9Bp6Ag0BzEu0TvsPYkqxYVyBqvMAAAAASUVORK5CYII="},JMj7:function(t,a){},yZHR:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={components:{Footer:s("SKcX").a},props:{},data:()=>({primaryDataList:[{name:"# 1",address:"0xD34eBEf34A55BC9912B177ecC61ab137E0BcE845",poolName:"S1"},{name:"# 2",address:"0x70b026048d924eb525889ce975ae9ed83833f2cf",poolName:"S2"}],intermediateDataList:[{name:"# 1",address:"0x43ec3d7136433e2c4a586938be4be9734bfa6a64",poolName:"M1"},{name:"# 2",address:"0x1512fd854fa6de1c3e701dca2cde11acc8a44b83",poolName:"M2"},{name:"# 3",address:"0xf891b655578befa3a57501168753929250eec838",poolName:"M3"}],ultimateDataList:[{name:"# 1",address:"0x2245e4afed154942a71abcd555931366c92233b9",poolName:"L1"}]}),watch:{},computed:{},methods:{},created(){}},i={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"histry_warp"},[t._m(0),t._v(" "),s("div",{staticClass:"historyContent_warp MaxWidth"},[s("div",{staticClass:"primary_warp"},[s("span",{staticClass:"contentHeader_icon"}),t._v(" "),s("span",{staticClass:"contentHeader_text"},[t._v("Quick")]),t._v(" "),s("div",{staticClass:"home_card_warp"},[s("el-row",{attrs:{gutter:20}},t._l(t.primaryDataList,function(a,e){return s("el-col",{key:e,attrs:{xs:24,sm:12,md:8,lg:6,xl:6}},[s("div",{staticClass:"history_button_warp"},[s("span",{staticClass:"history_button"},[s("router-link",{attrs:{tag:"div",to:"/historyContent/"+a.poolName}},[t._v(t._s(a.name)+" Pool #")])],1)])])}))],1)])]),t._v(" "),s("Footer")],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"historyTitle_warp"},[a("div",{staticClass:"history_headerimg"},[a("div",{staticClass:"heaer_placeholder"}),this._v(" "),a("div",{staticClass:"historyProgrsess_warp MaxWidth"},[a("img",{staticClass:"historyProgrsess_img",attrs:{src:s("3K0C"),alt:""}}),this._v(" "),a("span",{staticClass:"historyProgrsess_text"},[this._v("History")])])])])}]};var r=s("C7Lr")(e,i,!1,function(t){s("JMj7")},"data-v-1a4f32ca",null);a.default=r.exports}});