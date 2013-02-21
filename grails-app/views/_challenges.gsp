   
<div id="challenges">
  
    This is the Challenges Panel
    
    <div style="background: #888">
      <ul id="challenge-list"></ul>
    </div>      
    
    <div id="create-challenge">
      <input id="new-challenge" placeholder="Need a new challenge" type="text" />
      <span class="ui-tooltip-top" style="display:none;">Press Enter to create this challenge</span>
    </div>
  </div>
</div>

<!-- Templates -->

<script type="text/template" id="challengesRow-template">
  <div class="challenge">
    <div class="display">          
      <div class="challenge-name">{{ name }}</div>
      <span class="challenge-destroy"></span>
    </div>       
  </div>
</script>