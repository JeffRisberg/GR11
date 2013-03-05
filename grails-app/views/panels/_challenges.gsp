<div id="challenges-panel" class="panel">
	 <h1>This is the Challenges Panel</h1>
	 
	 <div style="margin: 20px 0px">
    <table id="challenges-list">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>  
      <tbody id="challenges-tbody">
      </tbody>    
    </table>  
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
    <td class="challenge-destroy">Delete</td> 
</script>

<script type="text/template" id="challengeShowModal-template">
  <div class="modal">
    <div class="modal-header"><h3>Show {{name}}</h3></div>
    <div class="modal-body">
          Description:  {{description}}
    </div>
    <div class="modal-footer">
     <a class="btn" id="edit">Edit</a>
     <a id="close" class="btn">Close</a></div>
    </div>
  </div>
</script>

<script type="text/template" id="chllengeEditModal-template">
 <div class="modal">
    <div class="modal-header"><h3>Edit {{name}}</h3></div>
    <div class="modal-body">
         Description: <input id="description" type="text" value={{description}}></input>
    </div>
    <div class="modal-footer">
     <a class="btn" id="save">Save</a>
     <a id="close" class="btn">Close</a></div>
    </div>
 </div>
</script>