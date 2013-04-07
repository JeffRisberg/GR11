<!DOCTYPE html>
<html>

  <head>
    <title>Backbone Demo: GR11</title>   
    <meta name="layout" content="main">
    <script type="text/javascript" src="<g:createLinkTo dir='js/models' file='activity.js' />" ></script> 
    <script type="text/javascript" src="<g:createLinkTo dir='js/models' file='challenge.js' />" ></script> 
           
    <script type="text/javascript" src="<g:createLinkTo dir='js/views'  file='activities.js' />" ></script>    
    <script type="text/javascript" src="<g:createLinkTo dir='js/views'  file='challenges.js' />" ></script> 
    <script type="text/javascript" src="<g:createLinkTo dir='js'        file='adminApp.js' />" ></script>    
  </head>

  <body>
   <div id="container">
   <g:include view="_adminHeader.gsp"/>
            
   <g:include view="panels/_activities.gsp"/>
   <g:include view="panels/_challenges.gsp"/>    
   
   <div style="clear:both"></div>
   <g:include view="_footer.gsp"/>
   </div>
  </body>

</html>
