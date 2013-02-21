<div id="challenges_panel" class="panel">
	 <h1>This is the Challenges Panel</h1>
	 
	 <div style="background: #eee; width: 400px; margin: 20px 0px">
	   <ul id="challenge-list"></ul>
	 </div>      
	 
	 <div id="create-challenge">
	   <input id="new-challenge" placeholder="Challenge name" type="text" />
	   <a class="btn" style="margin-bottom: 10px">Create</a>
	 </div> 
	 
	 <div id="go-challenge">    
    <a class="btn">Go</a>
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