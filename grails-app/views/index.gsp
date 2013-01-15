<!DOCTYPE html>
<html>

  <head>
    <title>Backbone Demo: GR11</title>   
    <meta name="layout" content="main">
    <script type="text/javascript" src="<g:createLinkTo dir='js/models' file='challenge.js' />" ></script> 
    <script type="text/javascript" src="<g:createLinkTo dir='js/models' file='activity.js' />" ></script> 
    <script type="text/javascript" src="<g:createLinkTo dir='js/views'  file='challenge.js' />" ></script> 
    <script type="text/javascript" src="<g:createLinkTo dir='js/views'  file='activity.js' />" ></script> 
    <script type="text/javascript" src="<g:createLinkTo dir='js'        file='app.js' />" ></script>    
  </head>

  <body>

    <!-- App Interface -->
    <div id="app">

      <div class="content">
        <img src="/GR11/images/logo.png" /> 
    
        <div id="select-activity">
          <a id="show-activities" class="btn" href="#">Show Activities &raquo; </a>
          <a id="show-challenges" class="btn" href="#">Show Challenges &raquo; </a>
        </div>
        
        <div id="activities">
          <ul id="activity-list"></ul>
        </div>      

        <div id="challenges">
          <ul id="challenge-list"></ul>
        </div>
        
        <div id="create-challenge">
          <input id="new-challenge" placeholder="Ready for a challenge?" type="text" />
          <span class="ui-tooltip-top" style="display:none;">Press Enter to create this challenge</span>
        </div>
      </div>
    </div>

    <!-- Templates -->

    <script type="text/template" id="challenge-template">
      <div class="challenge">
        <div class="display">          
          <div class="challenge-name">{{ name }}</div>
          <span class="challenge-destroy"></span>
        </div>        
      </div>
    </script>

    <script type="text/template" id="activity-template">
      <div class="activity">
        <div class="display">          
          <div class="activity-name">{{ name }}</div>
          <span class="activity-destroy"></span>
        </div>       
      </div>
    </script>

  </body>

</html>
