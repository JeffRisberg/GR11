<!DOCTYPE html>
<html>

  <head>
    <title>Backbone Demo: GR11</title>   
    <meta name="layout" content="main">
    <script type="text/javascript" src="<g:createLinkTo dir='js/models' file='activity.js' />" ></script> 
    <script type="text/javascript" src="<g:createLinkTo dir='js/models' file='challenge.js' />" ></script> 
    
    <script type="text/javascript" src="<g:createLinkTo dir='js/views'  file='home.js' />" ></script>
    <script type="text/javascript" src="<g:createLinkTo dir='js/views'  file='track.js' />" ></script>        
    <script type="text/javascript" src="<g:createLinkTo dir='js'        file='app.js' />" ></script>    
  </head>

  <body>
   <div id="container">
   <g:include view="_header.gsp"/>
         
   <g:include view="panels/_home.gsp"/>
   <g:include view="panels/_track.gsp"/>  
   
   <div style="clear:both"></div>
   <g:include view="_footer.gsp"/>
   </div>
  </body>

</html>
