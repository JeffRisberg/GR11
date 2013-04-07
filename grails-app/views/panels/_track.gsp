<style> 
 #track_panel input {
    width: 80px;
    margin 0px;
    line-height: 15px; 
 }
</style>

<div id="track-panel" class="panel">
  
  <div class="panel-title">Track</div>
  
  <div style="background: #eee; padding: 5px;">
  <table>
    <tr>
      <td></td>
      <td>Sunday</td>
      <td>Monday</td>
      <td>Tuesday</td>
      <td>Wednesday</td>
      <td>Thursday</td>
      <td>Friday</td>
      <td>Saturday</td>
    </tr>
    <tr>
      <td>Hike</td>
      <td><input name="x1" style="width:30px" /></td>
      <td><input name="x2" style="width:30px"/></td>
      <td><input name="x3" style="width:30px"/></td>
      <td><input name="x4" style="width:30px" /></td>
      <td><input name="x5" style="width:30px" /></td>
      <td><input name="x6" style="width:30px" /></td>
      <td><input name="x7" style="width:30px" /></td>          
    </tr>
    <tr>
      <td>Dance</td>
      <td><input name="x1" style="width:30px" /></td>
      <td><input name="x2" style="width:30px" /></td>
      <td><input name="x3" style="width:30px" /></td>
      <td><input name="x4" style="width:30px" /></td>
      <td><input name="x5" style="width:30px" /></td>
      <td><input name="x6" style="width:30px" /></td>
      <td><input name="x7" style="width:30px" /></td>          
    </tr>
    <tr>
      <td>Skip Sweets</td>
      <td><input name="x1" type="checkbox" /></td>
      <td><input name="x2" type="checkbox" /></td>
      <td><input name="x3" type="checkbox" /></td>
      <td><input name="x4" type="checkbox" /></td>
      <td><input name="x5" type="checkbox" /></td>
      <td><input name="x6" type="checkbox" /></td>
      <td><input name="x7" type="checkbox" /></td>          
    </tr>
  </table>
  </div>
  <div>
  <label>Class Id</label><input id="classId" type="text" />
  </div>
  <div>
  <label>Building Id</label><input id="buildingId" type="text" />
  </div>
  <a id="save" class="btn">Save</a>
 
</div>