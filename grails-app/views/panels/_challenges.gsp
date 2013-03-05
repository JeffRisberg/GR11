<div id="challenges-panel" class="panel">
	 <h1>This is the Challenges Panel</h1>
	 
	 <div style="background: #eee; width: 400px; margin: 20px 0px">
	   <table id="challenge-table"></table>
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
    <td class="challenge">{{ name }}</td>
    <td class="desc">{{ description }}</td>
    <td class="challenge-destroy">Action</td> 
</script>