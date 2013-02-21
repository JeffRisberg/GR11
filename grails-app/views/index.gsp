<!DOCTYPE html>
<html>

  <head>
    <title>Backbone Demo: GR11</title>   
    <meta name="layout" content="main">
    <script type="text/javascript" src="<g:createLinkTo dir='js/models' file='challenge.js' />" ></script> 
    <script type="text/javascript" src="<g:createLinkTo dir='js/models' file='activity.js' />" ></script> 
    <script type="text/javascript" src="<g:createLinkTo dir='js/views'  file='challenges.js' />" ></script> 
    <script type="text/javascript" src="<g:createLinkTo dir='js/views'  file='activities.js' />" ></script> 
    <script type="text/javascript" src="<g:createLinkTo dir='js'        file='app.js' />" ></script>    
  </head>

  <body>

    <!-- App Interface -->
    <div id="app">

      <div class="content">
        <img src="/GR11/images/logo.png" /> 
    
        <!-- top level menu -->
        <div id="menu">
          <a id="activities_button" class="btn" href="#">Activities</a>
          <a id="challenges_button" class="btn" href="#">Challenges</a>
        </div>
        
        <!-- panels begin here -->
        <g:include view="_activities.gsp"/>
        <g:include view="_challenges.gsp"/> 
      </div>
    </div>
  </body>

</html>
