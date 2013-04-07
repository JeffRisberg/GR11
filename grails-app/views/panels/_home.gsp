<div id="home-panel" class="panel">

	<div class="panel-title">Home</div>

	<div class="row-fluid">
		<div class="span4">
			<img style="height: 300px" src="images/Heart-Health-250x225.jpg"></img>
		</div>

		<div class="span8">
			<div style="margin-bottom: 5px">
				Challenges
				<table id="homeChallenges-list">
					<thead>
						<tr>
							<th>Name</th>
							<th>Start Date</th>
							<th>End Date</th>							
						</tr>
					</thead>
					<tbody id="homeChallenges-tbody">
					</tbody>
				</table>
			</div>
			
			<div style="margin-bottom: 5px">
				Activities
				<table id="homeActivities-list">
					<thead>
						<tr>
							<th>Name</th>						
							<th>Amount</th>
						</tr>
					</thead>
					<tbody id="homeActivities-tbody">
					</tbody>
			</div>
		</div>
	</div>
</div>

<!-- Templates -->

<script type="text/template" id="challengesRow-template"> 
  <td class="name">{{name}}</td>
  <td class="startDate">{{startDate}}</td>
  <td class="endDate">{{endDate}}</td> 
</script>

<script type="text/template" id="activitiesRow-template"> 
  <td class="name">{{name}}</td>
  <td class="desc">{{amount}}</td> 
</script>