<!-----------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
-->

<!DOCTYPE html>

<html>

   <head>
   <title>hr097 README.md</title>
   <meta http-equiv="Content-type" content="text/html;charset=UTF-8">
   <style>
   @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@500&display=swap');
   </style>

   <style>
    body
    {
    	font-family:  'Be Vietnam Pro',"Poppins","HelveticaNeue-Light", sans-serif,"Segoe WPC", "Segoe UI", "SFUIText-Light","Droid Sans Fallback";
    	font-size: 18px;
    	padding: 0 12px;
    	line-height: 1.6;
    	word-wrap: break-word;
    	color: #333333;
    }

    .content-wrapper{
    	max-width: 860px;
        margin: 0 auto;
        padding: 20px 30px 40px 30px;
        padding-top: 20px;
        padding-bottom: 100px;
    }

    #code-csp-warning {
    	position: fixed;
    	top: 0;
    	right: 0;
    	color: white;
    	margin: 16px;
    	text-align: center;
    	font-size: 12px;
    	font-family: sans-serif;
    	background-color:#444444;
    	cursor: pointer;
    	padding: 6px;
    	box-shadow: 1px 1px 1px rgba(0,0,0,.25);
    }

    #code-csp-warning:hover {
    	text-decoration: none;
    	background-color:#007acc;
    	box-shadow: 2px 2px 2px rgba(0,0,0,.25);
    }


    body.scrollBeyondLastLine 
    {
    	margin-bottom: calc(100vh - 22px);
    }
    
    body.showEditorSelection .code-line 
    {
    	position: relative;
    }
    
    body.showEditorSelection .code-active-line:before,
    body.showEditorSelection .code-line:hover:before
    {
    	content: "";
    	display: block;
    	position: absolute;
    	top: 0;
    	left: -12px;
    	height: 100%;
    }

    body.showEditorSelection li.code-active-line:before,
    body.showEditorSelection li.code-line:hover:before
    {
    	left: -30px;
    }
    
    .vscode-light.showEditorSelection .code-active-line:before {
    	border-left: 3px solid rgba(0, 0, 0, 0.15);
    }
    
    .vscode-light.showEditorSelection .code-line:hover:before {
    	border-left: 3px solid rgba(0, 0, 0, 0.40);
    }
    
    .vscode-dark.showEditorSelection .code-active-line:before {
    	border-left: 3px solid rgba(255, 255, 255, 0.4);
    }
    
    .vscode-dark.showEditorSelection .code-line:hover:before {
    	border-left: 3px solid rgba(255, 255, 255, 0.60);
    }
    
    .vscode-high-contrast.showEditorSelection .code-active-line:before {
    	border-left: 3px solid rgba(255, 160, 0, 0.7);
    }
    
    .vscode-high-contrast.showEditorSelection .code-line:hover:before {
    	border-left: 3px solid rgba(255, 160, 0, 1);
    }
    
    img {
    	max-width: 100%;
    	max-height: 100%;
    }
    
    a {
    	color: #4080D0;
    	text-decoration: none;
    }

    a:focus,
    input:focus,
    select:focus,
    textarea:focus {
    	outline: 1px solid -webkit-focus-ring-color;
    	outline-offset: -1px;
    }
    
    hr {
    	border: 0;
    	height: 2px;
    	border-bottom: 2px solid;
    }
    
    h1 {
    	padding-bottom: 0.3em;
    	line-height: 1.2;
    	border-bottom: 1px solid #eee;
    }
    
    
    h2{
    	padding-bottom: .3em;
        font-size: 2em;
        line-height: 1.225;
        border-bottom: 1px solid #eee;
    }
    
    h3{
    	font-size: 1.75em;
        line-height: 1.225;
    }
    
    h1, h2, h3 {
    	font-weight: bold;
    }
    
    h1 code,
    h2 code,
    h3 code,
    h4 code,
    h5 code,
    h6 code {
    	font-size: inherit;
    	line-height: auto;
    }
    
    a:hover {
    	color: #4080D0;
    	text-decoration: underline;
    }
    
    table {
    	border-collapse: collapse;
    }
    
    table > thead > tr > th {
    	text-align: left;
    	border-bottom: 1px solid;
    }
    
    table > thead > tr > th,
    table > thead > tr > td,
    table > tbody > tr > th,
    table > tbody > tr > td {
    	padding: 5px 10px;
    }
    
    table > tbody > tr + tr > td {
    	border-top: 1px solid;
    }
    
    blockquote {
    	margin: 0 7px 0 5px;
    	padding: 0 16px 0 10px;
    	border-left: 5px solid;
    }
    
    code {
    	font-family: Menlo, Monaco, Consolas, "Droid Sans Mono", "Courier New", monospace, "Droid Sans Fallback";
    	font-size: 14px;
    	line-height: 19px;
    }
    
    body.wordWrap pre {
    	white-space: pre-wrap;
    }
    
    .mac code {
    	font-size: 12px;
    	line-height: 18px;
    }
    
    pre:not(.hljs),
    pre.hljs code > div {
    	padding: 16px;
    	border-radius: 3px;
    	overflow: auto;
    }

    .vscode-light,
    .vscode-light pre code {
    	color: rgb(30, 30, 30);
    }
    
    .vscode-dark,
    .vscode-dark pre code {
    	color: #DDD;
    }
    
    .vscode-high-contrast,
    .vscode-high-contrast pre code {
    	color: white;
    }
    
    .vscode-light code {
    	color: #A31515;
    }
    
    .vscode-dark code {
    	color: #D7BA7D;
    }
    
    .vscode-light pre:not(.hljs),
    .vscode-light code > div {
    	background-color: rgba(220, 220, 220, 0.4);
    }
    
    .vscode-dark pre:not(.hljs),
    .vscode-dark code > div {
    	background-color: rgba(10, 10, 10, 0.4);
    }
    
    .vscode-high-contrast pre:not(.hljs),
    .vscode-high-contrast code > div {
    	background-color: rgb(0, 0, 0);
    }
    
    .vscode-high-contrast h1 {
    	border-color: rgb(0, 0, 0);
    }
    
    .vscode-light table > thead > tr > th {
    	border-color: rgba(0, 0, 0, 0.69);
    }
    
    .vscode-dark table > thead > tr > th {
    	border-color: rgba(255, 255, 255, 0.69);
    }
    
    .vscode-light h1,
    .vscode-light hr,
    .vscode-light table > tbody > tr + tr > td {
    	border-color: rgba(0, 0, 0, 0.18);
    }
    
    .vscode-dark h1,
    .vscode-dark hr,
    .vscode-dark table > tbody > tr + tr > td {
    	border-color: rgba(255, 255, 255, 0.18);
    }
    
    .vscode-light blockquote,
    .vscode-dark blockquote {
    	background: rgba(127, 127, 127, 0.1);
    	border-color: rgba(0, 122, 204, 0.5);
    }
    
    .vscode-high-contrast blockquote {
    	background: transparent;
    	border-color: #fff;
    }
    
    .hljs {
      display: block;
      overflow-x: auto;
      padding: 0.5em;
      background: #FFFFFF;
    }
    
    .hljs,
    .hljs-subst {
      color: #434f54;
    }
    
    .hljs-keyword,
    .hljs-attribute,
    .hljs-selector-tag,
    .hljs-doctag,
    .hljs-name {
      color: #00979D;
    }
    
    .hljs-built_in,
    .hljs-literal,
    .hljs-bullet,
    .hljs-code,
    .hljs-addition {
      color: #D35400;
    }
    
    .hljs-regexp,
    .hljs-symbol,
    .hljs-variable,
    .hljs-template-variable,
    .hljs-link,
    .hljs-selector-attr,
    .hljs-selector-pseudo {
      color: #00979D;
    }
    
    .hljs-type,
    .hljs-string,
    .hljs-selector-id,
    .hljs-selector-class,
    .hljs-quote,
    .hljs-template-tag,
    .hljs-deletion {
      color: #005C5F;
    }
    
    .hljs-title,
    .hljs-section {
      color: #880000;
      font-weight: bold;
    }
    
    .hljs-comment {
      color: rgba(149,165,166,.8);
    }
    
    .hljs-meta-keyword {
      color: #728E00;
    }
    
    .hljs-meta {
      color: #434f54;
    }
    
    .hljs-emphasis {
      font-style: italic;
    }
    
    .hljs-strong {
      font-weight: bold;
    }
    
    .hljs-function {
      color: #728E00;
    }
    
    .hljs-number {
      color: #8A7B52;  
    }
    
    pre {
    	background-color: #f8f8f8;
    	border: 1px solid #cccccc;
    	border-radius: 3px;
    	overflow-x: auto;
    	white-space: pre-wrap;
    	overflow-wrap: break-word;
    }
    
    pre:not(.hljs) {
    	padding: 23px;
    	line-height: 19px;
    }
    
    blockquote {
    	background: rgba(127, 127, 127, 0.1);
    	border-color: rgba(0, 122, 204, 0.5);
    }
    
    .emoji {
    	height: 1.4em;
    }

     /* for inline code */
     :not(pre):not(.hljs) > code {
     	color: #C9AE75; /* Change the old color so it seems less like an error */
     	font-size: inherit;
     }
     /*
     @import url(
     'https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
     
           #myanimation{
             display: inline-block;
     		color: green;
     		max-width: 890px;
             white-space: nowrap;
     		overflow:hidden;
     		padding: 0px;
     		margin:auto;
             border-bottom: 5px outset black;
     	  }
           #myanimation:first-of-type{
             animation: appear 5s infinite;
           }
           #myanimation:last-of-type{
             animation: reveal 10s infinite;
           }
           #myanimation:last-of-type span{
             font-size: 33px;
             color: #808000;
             animation: slide 10s infinite;
           }
           @keyframes appear{
             0%{opacity: 0;}
             20%{opacity: 1;}
             80%{opacity: 1;}
             100%{opacity: 0;}
           }
           @keyframes slide{
             0%{margin-left:-800px;}
             20%{margin-left:-800px;}
             35%{margin-left:0px;}
           100%{margin-left:0px;}
           }
           @keyframes reveal{
             0%{opacity: 0; width: 0px;}
             20%{opacity: 1; width: 0px;}
             80%{opacity: 1;}
             100%{opacity: 0; width: 1055px;padding: 10px;}
           }
       	  #myAnim2{
           display: block;
           overflow: hidden;
       	  color: rgb(111, 114, 111);
       	  max-width: 890px;
           white-space: nowrap;
     	  padding:0px;
       	  margin:auto;
           }
           #myAnim2:first-of-type{
             animation: appear 5s infinite;
           }
           #myAnim2:last-of-type{
             animation: reveal 10s infinite;
           }
           #myAnim2:last-of-type span{
             font-size: 33px;
             color: #808000;
             animation: slide 10s infinite;
           }
           @keyframes appear{
             0%{opacity: 0;}
             20%{opacity: 1;}
             80%{opacity: 1;}
             100%{opacity: 0;}
           }
           @keyframes slide{
             0%{margin-left:-800px;}
             20%{margin-left:-800px;}
             35%{margin-left:0px;}
           100%{margin-left:0px;}
           }
           @keyframes reveal{
             0%{opacity: 0; width: 0px;}
             20%{opacity: 1; width: 0px;}
             80%{opacity: 1;}
             100%{opacity: 0; width: 1055px;padding: 10px;}
           }*/
     /* Page Break : use <div class="page"/> to insert page break
    -------------------------------------------------------- */
    .page {
    	page-break-after: always;
    }
    #first-link li
    {
    	margin:5px;
    }
    .mynav
    {
    	border-top: 5px outset grey;
    	border-bottom: 5px outset grey;
    	border-left: 5px inset grey;
    	border-right: 5px inset grey;
    	background-color:transparent;
    }
    .languages a
    {    
    	display: inline;
    }
    #my-lang img
    {
      max-height: 80px;
      max-width: 80px;
    }
    </style>

</head>

<body>
    <div class="content-wrapper">

     <center><nav class="table-of-contents mynav"><ul style="list-style-type:none;" id="first-link"><li><a href="#%F0%9F%99%8B%E2%80%8D%E2%99%82%EF%B8%8F-about-me">👩‍💻 About Me : </a></li><li><a href="#%F0%9F%9A%80-languages-and-tools%3A">🧬Languages and 🛠Tools : </a></li><li><a href="#%F0%9F%93%8A-my-github-stats">📊 My Github Stats : </a></li><li><a href="#connect-with-me%3A">🔗Connect with me : </a></li></ul></nav><img style="max-width:100%;max-height:70%;border:5px solid white; margin:20px;" src="https://i.pinimg.com/736x/cb/c3/d6/cbc3d6bdbd5d5677272ae4f5fbcefdcf.jpg" alt='hr097'></center>
	 <h1 align="center" style="color:black;">Hey  <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px"> , It's Harshil Ramani here...</h1>
     <h3 align="center" id="you__Can__give__animation" style="color:rgb(7, 167, 7);">Welcome to my Repository ! <br> <h1 id=you__Can__give__animation" style="color:rgb(58, 57, 57);">I'm a passionate C/C++ & FrontEnd Developer.</h1></h3><img style="max-width:50px;max-height:50px;" src="https://cdn-icons-png.flaticon.com/512/256/256672.png" alt="">

     <h2 id="%F0%9F%99%8B%E2%80%8D%E2%99%82%EF%B8%8F-about-me" id="about-me">👩‍💻 About Me </h2>
     <ul>
     <li>   I’m currently working on <strong>Personal Projects🚀 for My CV</strong></li>
     <li>   I consistently  Prefer learning <strong> Web Applications Related Technologies⚙ </strong></li>  
     <li>   Always looking for collaboration on <strong>OpenSource Projects 🤝🏻👨🏻‍🤝‍👨🏻👩🏻‍🤝‍🧑🏻</strong></li>
     <li>   All of my Projects🗂 are available at <strong><a href="https://github.com/hr097?tab=repositories">My GitHub</a></strong></li>
     <li>   You can reach me 📧 <strong><a href="mailto:harshilramani9777@gmail.com">harshilramani9777@gmail.com</a></strong></li>
     <br><center><li style="list-style-type: none;"><strong>🎭 Fun Facts 🎭</strong></li></center><br>
     <li>   <strong>cin >> Enthusiastic 🔭 >> Never give up 🎯 >> Knowledge ** share = 🏆>> Intersted in all Technologies🧩 of World🌍; </strong></li>
     </ul>
     <h2 style="display: inline-block;" id="%F0%9F%9A%80-languages-and-tools%3A" id="languages-and-tools"> Languages <img src="https://cdn-icons-png.flaticon.com/512/584/584904.png" style="max-width:40px;max-height:40px;margin:20px; margin-bottom:0px;" alt="🚀"> and Tools <img src="https://cdn-icons-png.flaticon.com/512/64/64722.png" style="max-width:50px;max-height:50px;margin:10px; margin-bottom:0px;" alt="⚙"> : </h2>
    
	 <p align="left" id="my-lang">
     <a href="https://https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank"> <img src="data:image/png;base64,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" alt="C language"/> </a>
     <a href="https://en.wikipedia.org/wiki/C%2B%2B" target="_blank"> <img src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" alt="C++ language"/> </a>
     <a href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" target="_blank"> <img src="https://cdn-icons-png.flaticon.com/512/6132/6132221.png" alt="C# language" /> </a> 
     <a href="https://en.wikipedia.org/wiki/Java" target="_blank"> <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" alt="Java Language"/> </a>
     <a href="https://en.wikipedia.org/wiki/SQL" target="_blank"> <img src="https://cdn-icons-png.flaticon.com/512/337/337953.png" alt="SQL Language"/> </a> 
	 <a href="https://en.wikipedia.org/wiki/HTML5rg/wiki/VB_.net" target="_blank"> <img src="https://cdn-icons-png.flaticon.com/512/29/29609.png" alt="VB .NET"/> </a> 
	 <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"> <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png"/> </a> 
	 <a href="https://en.wikipedia.org/wiki/CSS3" target="_blank"> <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png"/> </a> 
     <a style="padding-right:8px;" href="https://en.wikipedia.org/wiki/SASS" target="_blank"> <img src="https://cdn-icons-png.flaticon.com/512/5968/5968358.png"/> </a> 
     <a style="padding-right:8px;" href="https://en.wikipedia.org/wiki/Bootstrap5" target="_blank"> <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"/> </a>
	 <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank"> <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"/> </a> 
     <a href="https://en.wikipedia.org/wiki/jQuery" target="_blank"> <img src="data:image/png;base64,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" alt="jQuery"/> </a> 
     <a href="https://en.wikipedia.org/wiki/Php" target="_blank"> <img src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png" alt="Php"/> </a> 
     <a href="https://en.wikipedia.org/wiki/git" target="_blank"> <img src="https://camo.githubusercontent.com/87205c8a0904b29e3e32375dbb34f625930891aee0ecdcfa3926ccc78f367a70/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f3435322f6769742e706e67" alt="git" style="width:100px;height:75px"/> </a>   
     <a href="https://en.wikipedia.org/wiki/github" target="_blank"> <img src="https://cdn-icons.flaticon.com/png/512/3291/premium/3291695.png?token=exp=1643022409~hmac=fb68013534325105290d1901a9d5a0bb" alt="Github"/> </a> 
     <a href="https://en.wikipedia.org/wiki/visual studio code" target="_blank"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAyVBMVEX///8fnPAAeswAZakAlu/X6fsgnvINdLwNg9UAZKkAeMsAcckAe80Ac8oAWqQAdssAWaQAX6b3+/0AbsgAfc3k8PkAY6bw9voAmPC3zuLC1uehv9nc6/fC2/AAc8AAlPB7psxNqO3S4e5Agrje6vMsofAQbK0yi9KtzuuWuNZ8suFVnNifxegchNCzzOIye7Q/ktRjl8Nvqd2EwfO31/GTx/IAa7YakeJstO5Epe2hzPGOs9NQibxnse3L4vdwnseGuOJxq96VyfWVecUHAAAJr0lEQVR4nO2daVviShCFOyGOggKCAhkUcWVQwZVxXMZl7v//UTdhkST0VpXudJon5/t18t4u0ofTVQ0hhQoVKlSoUKFChQoVKrTe6kyGw0nL9FNoU+f3Rd/3fa/vPB6afhYtGh09PW1u/vnhOI7vPW+Yfhz1uq+1S6VSu73phIyOf7JmjM2zRmmm9uaU0HG8kw/TT6VQndsFYATR6Z9MTD+YKrUigIH+LBAd72U9GM9LMcD2+JswYLwYmn689DrdLZdihJsRwoDReTX9hCn1sxEHTBKG6/jaMf2UKXTQKJUEhOE6/raW8S1RonTCYH/0H+1kPK4l+RiEodF5tNCxflIAWYQBo/Nsm2H9SwNkE4a1+m4TY+d25SUjIgzUf7fGsLYYgALC4MX6bodhPR8wAIWElpjy0+Q+DyG0wbB2a0xAKcLQ6OSa8YD6EgURTk150zQIS5ecFZQnzPEXj+NVp4YjDD+PefQ5VCODJAxMQP4sAN3IoAkdJ2eruIyclBGemGaKiWlkUhB6ecoA2EYmBaHjmMZa6rTEfYliCb2eabCFumynlorQfzRNNtcNd59PU6UXptFmOuDv8/YTvkmuIIYwF6+az11JPlsJ70VGxnLCptCpWU7IipzWhrAlY2RsJjwtwQCtI+xKOTWLCX9Kb4OWEkobGVsJ+ZHTGhAeYwBtIoQYGRsJYUbGQsKOOHIyRdjq9RREkB2gkcmOcDTe297e2/lK2RZwDjUyWREe/tquuIEq1XGqdEcucjJA+LFfd+eqVL/wgJKRU/aEvdkCzlW9w1bqjfz3+WwJhzFA163v4yr1EuHUMiEcJQCxlYozMhE1NBFeVZOAIeI1+JRVdHYmUrn2t+frIHzYXuGbVSqs6wFtZJaAb2TDU0/YvK5SAYNl3B4BAPFGZq7GoEt0EHbuWICwSgVGTquqnYXHneoJO+M6EzCs1LGki5M6O+OovHs8/TvKCQ/3V98xiUqVanlIZWQCNUpdooWwJQIMER/EldotpwOcVagOwjtuic5V/SWqVNmzM5bmFaqBsLcnASiuVEzkFFGj/HP5txQTPsgs4RTxH6dSKe3aENVuoy0jignHwk/hslKZnSvHqbx28A6N/c9TTFiRJnQrFUY7IDJyWgDWbuJ/TjGh+E0aQdz7R/kLzbNUgI3bZGkoJrwDEIZfGlcqNZ2RKdc+Vz7eiglHbMNGU30/UanQs7Mk4MHqIykmbNZBixi8U6+i/zn47CymxuCc8kiqd/wh/XsTW9FKTZXIlGv31A1IuS/9giIu4w3E2VkUkFKhWgjJaA9WqN/xBrddW6TG4JTxPBq+Hw4pCQZf0yAujZFhVagmQtID7Psz1fc/0hiZcu2S/TQ6CMmGC0Ws1J/aaMBpWJEtYfAtUdKBL7VzhF7Av9ywWQ8h6fyCI7qoZQzjNK40EXLjKCbjExyQX6E6CQlhRoocRHCl1s6ExyH6CMkDAtEtQSq1XDsWP4ZGQvIFRwRVqrhCdRMG9gaBKF2pyzjNHCEZQh2cK1+pkTjNICHpAb9NzRglto1YnGaSkHyA7U2IeCSyqLWVsMIYoTjlpyIKKjURp5klJC3+SQ1LnEptNG7E/2yGhCh7w3unrsZppgk5J6ZcRHql0uI044TMU2+RKJVa3mWEFYYJyRVmFSmVSo/T8kBIvla6T+QQY9sGL6wwTkhpsJFTpFKZcVo+CMkEh7hz1P6uUFaclhNC8gEOqOaI+ArNmJBsYOzNPN6Av0NNEAb2BvdZDF44uArNnJAc4ghd9wi8SZghPB+Uj3ZQhJUx+h6gLAmnZ2dYRFBHnCHCeRMQGhHeu5kx4aIJqI1EdOv7+d4Pl2dn7SckIq5SsyKMnp3hEasSHXGGCON3NqIR3aps72bWhPeJw8F2GUko27uZNSGlXTsFIrBSs8hp6O3aLrpS2R1xZgiZTUBoxEoVUqnaCTlzZ9iNUdC7mTEht10bjQipVM2E/C4ntL0JltGVvcpRL+GBoIUkDSK1dzNrwkthjwx+76f2bmZNSLt8WiWi3MCfRkK5bub2E5ow2DauxI+hj1B67gxtb1ypStXWTwOYOyuj936ZStXVEwVr106BWNn+MkEIHqDH7xpBpV5n39d2Ch7LatdRB8Uz8UdTdRDC584ag9MrRO/NQpUqJ97QQAieO5v1T34hem+WiOwgTj0heO5s0T8J756OqL7P+gkA5YRv0G7mZXfaJA0iM4hTTXgDXcFo/ySqg+obkRHEqZ6ZAe4S5Xh3Gqq96Fv0IE4xIXBmolFKdKch24sWy0gL4hQT/gWtIaV/EtEgHkWkVKpiwgEEkNo/2UR1UH2rOtY8fwjY65n9k6gOqsgyJipV9RpKE3L6J//hOqgWiIkgTjHhp+TnMDmOHBd4/i2ueBCnmLArt9+vjCMnhG0vWixjdIha9Y4v9TJt3IoaD5J3MEER95bxhvJ7McSDvFL9k/D5t7iW8YZyXyq8dEWy9wc+/xbXd7yh4X4aPqJ0/yRi/i2mxRC1jjuGOCEUpDstnb1xF5Wq5Z4oZlIK65/ENYhHNK1UPUkUAxHaP9m8TrcxToeoNaWJtIvkMP2TiPm3uLave5oS4dVbjbnjyEzhGsQjqm9BAWVT/eSFjnKjdKsapSxUd0vb3ZfdaJ4hGkfmCDP/lg1h9BqPckMwjszTJE16o5WQnN/OPozlGrJC5/rYSYOok5CQg8FuoNJbynuED9Mg6iUMvFe3q+C32tIEVLoJFSmFvbGEEDn/ZhMhIVgHZw8h1t5YRIgMqGwixNkbqwhR5292EZIePL2xjBBx/mYbITygso4QHFDZRwg9f7OQEGhvrCQEnb/ZSQi5oMlSQsD5G5gwH78lCzh/s5ZQur0ISpib33QmZEMuvYES5ud3uQMHJ5XegKvUNFZUUgEVkNB7NU0Vk4y9ARKemGZKSmxvgIQKsk/FEl7QBCL0WX24JnUlQAQQei/5W8FQAnsjTehdQIeoMxO/QVyS0Lt4xd1KkYkmvDeqFKF3MckxX6ANjoOTIPReZAdSzemQnd4ICb0T9N03WarFTG8EhP13K/hIGFAxPoxcwv5JHjdAlhjnb2xC339X8Eu+WYpub1iEvv9sGR9h2Bs6od9/zKd/EYg2/0Yj9P3HlM0TxjRatTerhP6P37byEVp7UZLQ+/FqMV+gj6QPjxN6Tp7tp5wS52+VP1G+/H59gCiR3kT4LLCfcoqev1W21o+PRAOqyuJT6L3YYj8ldT1/38wAfd8q+ymn1636ztasQn3vef34AnX+u+j7vuf1nUf77KesOpPhcGKl+yxUqFChQoUKFSpUqND66X8ygSgTVb7oVAAAAABJRU5ErkJggg==" alt="Visual studio code" /> </a> 
     <a href="https://en.wikipedia.org/wiki/visual studio 2022" target="_blank"> <img src="data:image/jpeg;base64,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" alt="Visual studio 2022"/> </a>
     <a href="https://en.wikipedia.org/wiki/Arduino" target="_blank"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4OeA05Db9Rm6mE1fZP-fs2LczVcXa31N6qHGAWnwWC6d4gZirgFvmU9WCxPpqAC-RKQ&usqp=CAU" alt="Arduino" /> </a>
     </p>
	
<br>
     <p align="center">
         <a href="https://github.com/hr097/github-readme-streak-stats">
             <img title="🔥 Get streak stats for your profile at git.io/streak-stats" alt="Subham Raoniar's streak" src="https://github-readme-streak-stats.herokuapp.com/?user=hr097&theme=black-ice&hide_border=true&stroke=0000&background=060A0CD0"/>
         </a>
     </p>
     <h2 id="%F0%9F%93%8A-my-github-stats" id="my-github-stats">📊 My Github Stats</h2>
<br>
    <a href="https://github.com/hr097/github-readme-stats"><img src="https://github-readme-stats.vercel.app/api?username=hr097&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117" alt="hr097's github stats" /></a>
    <a href="https://github.com/hr097/github-readme-stats"><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=hr097&langs_count=8&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=0D1117" alt="hr097's github Top languages" /></a>
<br>
  <b>Note:</b> <p>Top languages is only a metric of the languages my public code consists of and doesn't reflect experience or skill level.</p> 
<br>

<h2 id="connect-with-me%3A" id="connect-with-me">Connect with me : </h2>

<p align="center">

<a href="http://linkedin.com/in/harshil-ramani-2b528920b" target="_blank"> <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1643027159~hmac=94129c1b42826b9c879874de7e4bf65b" alt="Linkedin : " style="max-width:50px;max-height:50px;margin:10px; margin-bottom:0px;"/> </a>
<a href="https://instagram.com/_harshil_ramani__?utm_medium=copy_link" target="_blank"> <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram : " style="max-width:50px;max-height:50px;margin:10px; margin-bottom:0px;"/> </a>
<a href="https://t.me/professor9777" target="_blank"> <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram : " style="max-width:50px;max-height:50px;margin:10px; margin-bottom:0px;" /> </a>

</p>

<h2 id="%E2%9D%A4-views-and-followers" id="views-and-followers"> ♟Views and Followers🧿</h2>
<a href="https://github.com/Meghna-DAS/github-profile-views-counter">
    <img src="https://komarev.com/ghpvc/?username=SubhamRaoniar28">
</a>

<a href="https://github.com/hr097?tab=followers"><img src="https://img.shields.io/github/followers/hr097?label=Followers&style=social" alt="GitHub Badge"></a>

</div>

</body>

</html>
