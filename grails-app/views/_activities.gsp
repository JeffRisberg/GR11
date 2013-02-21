   
<div id="activities">
  
    This is the Activities Panel
    
    <div style="background: #888">
      <ul id="activity-list"></ul>
    </div>      
    
    <div id="create-activity">
      <input id="new-activity" placeholder="Need a new activity?" type="text" />
      <span class="ui-tooltip-top" style="display:none;">Press Enter to create this activity</span>
    </div>
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