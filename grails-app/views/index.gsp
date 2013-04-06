<!DOCTYPE html>
<html>

  <head>
    <title>Backbone Demo: GR11</title>   
    <meta name="layout" content="main">
    <script type="text/javascript" src="<g:createLinkTo dir='js/models' file='challenge.js' />" ></script> 
    <script type="text/javascript" src="<g:createLinkTo dir='js/models' file='activity.js' />" ></script> 
    <script type="text/javascript" src="<g:createLinkTo dir='js/views'  file='home.js' />" ></script>
    <script type="text/javascript" src="<g:createLinkTo dir='js/views'  file='track.js' />" ></script> 
    <script type="text/javascript" src="<g:createLinkTo dir='js/views'  file='challenges.js' />" ></script> 
    <script type="text/javascript" src="<g:createLinkTo dir='js/views'  file='activities.js' />" ></script> 
    <script type="text/javascript" src="<g:createLinkTo dir='js/views'  file='wallUsers.js' />" ></script> 
    <script type="text/javascript" src="<g:createLinkTo dir='js/views'  file='wallSystem.js' />" ></script> 
    <script type="text/javascript" src="<g:createLinkTo dir='js'        file='app.js' />" ></script>    
  </head>

  <body>
   <div id="container">
   <g:include view="_header.gsp"/>
         
   <g:include view="panels/_home.gsp"/>
   <g:include view="panels/_track.gsp"/>
   <g:include view="panels/_activities.gsp"/>
   <g:include view="panels/_challenges.gsp"/>   
   <g:include view="panels/_wallUsers.gsp"/>     
   <g:include view="panels/_wallSystem.gsp"/> 
   
   <div style="clear:both"></div>
   <g:include view="_footer.gsp"/>
   </div>
  </body>

</html>
