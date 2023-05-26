import{c as s,a as i,m as e}from"./vuex.esm.8fdeb4b6.js";import"./WpTable.ee9185a7.js";import"./default-i18n.3a91e0e5.js";import"./constants.0d8c074c.js";import"./index.ec9852b3.js";import{M as n}from"./MetaTag.1c306c27.js";import"./SaveChanges.e40a9083.js";const c={data(){return{roles:[{label:this.$t.__("Administrator",this.$td),name:"administrator",description:this.$t.sprintf(this.$t.__("By default Admins have access to %1$sall SEO site settings%2$s",this.$td),"<strong>","</strong>")},{label:this.$t.__("Editor",this.$td),name:"editor",description:this.$t.sprintf(this.$t.__("By default Editors have access to %1$sSEO settings for General Settings, Search Appearance, Social Networks, and Redirects as well as all settings for individual pages and posts.%2$s",this.$td),"<strong>","</strong>")},{label:this.$t.__("Author",this.$td),name:"author",description:this.$t.sprintf(this.$t.__("By default Authors have access to %1$sSEO settings for individual pages and posts that they already have permission to edit.%2$s",this.$td),"<strong>","</strong>")},{label:this.$t.__("Contributor",this.$td),name:"contributor",description:this.$t.sprintf(this.$t.__("By default Contributors have access to %1$sSEO settings for individual pages and posts that they already have permission to edit.%2$s",this.$td),"<strong>","</strong>")},{label:this.$t.__("SEO Manager",this.$td),name:"seoManager",description:this.$t.sprintf(this.$t.__("By default SEO Managers have access to %1$sSEO settings for General Settings, Sitemaps, Link Assistant, Redirects, Local SEO, and individual pages and posts.%2$s",this.$td),"<strong>","</strong>")},{label:this.$t.__("SEO Editor",this.$td),name:"seoEditor",description:this.$t.sprintf(this.$t.__("By default SEO Editors have access to %1$sSEO settings for individual pages and posts.%2$s",this.$td),"<strong>","</strong>")}],strings:{tooltip:this.$t.sprintf(this.$t.__("By default, only users with an Administrator role have permission to manage %1$s within your WordPress admin area. With Access Controls, though, you can easily extend specific access permissions to other user roles.",this.$td),"All in One SEO"),accessControl:this.$t.__("Access Control Settings",this.$td),useDefaultSettings:this.$t.__("Use Default Settings",this.$td)}}},computed:{...s(["settings"]),getRoles(){return this.roles.concat(Object.keys(this.$aioseo.user.customRoles).map(t=>({label:this.$aioseo.user.roles[t],name:t,description:this.$t.sprintf(this.$t.__("By default the %1$s role %2$shas no access%3$s to %4$s settings.",this.$td),this.$aioseo.user.roles[t],"<strong>","</strong>","All in One SEO"),dynamic:!0})))}}},p={mixins:[n],props:{tool:{type:Object,required:!0},isConnected:{type:Boolean,default(){return!1}}},computed:{...s(["isUnlicensed"]),...i(["options"])}},$={data(){return{installingPlugin:!1,miInstalled:!1,miInstalledFailed:!1,showMiPromo:!0,strings:{installMi:this.$t.sprintf(this.$t.__("Install %1$s",this.$td),"MonsterInsights"),miInstalled:this.$t.__("Success!",this.$td)}}},computed:{gaActivated(){return this.$aioseo.plugins.miLite.activated||this.$aioseo.plugins.emLite.activated||this.$aioseo.plugins.miPro.activated||this.$aioseo.plugins.emPro.activated},prefersEm(){return(this.$aioseo.plugins.emLite.installed||this.$aioseo.plugins.emPro.installed)&&!this.$aioseo.plugins.miLite.installed&&!this.$aioseo.plugins.miPro.installed}},methods:{...e(["installPlugins","upgradePlugins"]),installMi(){this.installingPlugin=!0,this.installPlugins([{plugin:"miLite",type:"plugin"}]).then(t=>{if(this.installingPlugin=!1,t.body.failed.length){this.miInstalledFailed=!0;return}this.miInstalled=!0,setTimeout(()=>{this.showMiPromo=!1,this.$aioseo.plugins.miLite.activated=!0,window.aioseo.plugins.miLite.activated=!0},3e3)}).catch(t=>{console.error(t)})}}};export{c as A,$ as M,p as W};
