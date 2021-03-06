<div id="activities-panel" class="panel">
  <div class="panel-title">Activity Administration</div>
 
  <div id="create-activity">
    <a class="btn" style="margin-bottom: 10px">Create New Activity &raquo;</a>
  </div>
   
  <div style="margin: 20px 0px">
    <table id="activities-list">
	  	<thead>
	  		<tr>
	  		  <th>Name</th>
	  		  <th>Description</th>
	  		  <th>Action</th>
	  		</tr>
	  	</thead>	
	  	<tbody id="activities-tbody">
	  	</tbody>  	
 	 </table>  
  </div>      
  
</div>

<!-- Templates -->

<script type="text/template" id="activityShowModal-template">
  <div class="modal">
    <div class="modal-header"><h3>{{name}}</h3></div>
    <div class="modal-body">
          Description:  {{description}}
    </div>
    <div class="modal-footer">
     <a class="btn" id="edit">Edit</a>
     <a id="close" class="btn">Close</a></div>
    </div>
  </div>
</script>

<script type="text/template" id="activityEditModal-template">
 <div class="modal">
    <div class="modal-header"><h3>Edit {{name}}</h3></div>
    <div class="modal-body">
         Description: <input id="description" type="text" value="{{description}}"></input>
    </div>
    <div class="modal-footer">
     <a class="btn" id="save">Save</a>
     <a id="close" class="btn">Close</a></div>
    </div>
 </div>
</script>

<script type="text/template" id="activitiesRow-template"> 
  <td class="name">{{name}}</td>
  <td class="desc">{{description}}</td>
  <td class="activity-destroy">Delete</td> 
</script>
