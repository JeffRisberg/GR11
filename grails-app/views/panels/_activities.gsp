<div id="activities_panel" class="panel">
  <h1>This is the Activities Panel</h1>
  
  <div style="background: #eee; width: 400px; margin: 20px 0px">
    <ul id="activity-list"></ul>
  </div>      
  
  <div id="create-activity">
    <input id="new-activity" placeholder="Activity name" type="text" />
    <a class="btn" style="margin-bottom: 10px">Create</a>
  </div>
  
  <div id="go-activity">    
    <a class="btn">Go</a>
  </div> 
</div>

<!-- Templates -->

<script type="text/template" id="activitiesRow-template">
  <div class="activity">
    <div class="display">          
      <div class="activity-name">{{ name }}</div>
      <span class="activity-destroy"></span>
    </div>       
  </div>
</script>