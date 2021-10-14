<template>
<div class="background">
<h1 class="h1">
	<span class="kidName">
		<!-- here goes the variable for the kid's name -->
		<span class="tempText">[child's name]</span>
	</span>
	<span>'s Game Playthrough Assessment</span>
</h1>
<div id="banner" class="banner">
	<div class="print">
		<h2 class="h2">Your child's information</h2>
		<csm-button data-v-115883ef="" primary="" class="action hydrated">Print the report</csm-button>
	</div>
	<div>
		<ul class="ul">
			<li class="listitem">
				<span class="kidDetail">Name :</span> 
				<span>
					<span class="tempText">[child's name]</span>
					<!-- here goes the variable for the kid's name -->
				</span>
			</li>
			<li class="listitem">
				<span class="kidDetail">Age:</span> 
				<span>
					<!-- here goes the variable for the kid's year -->
					<span class="tempText">XX</span>
					<span> years and </span>
				</span>
				<span class="kidmonth">
					<!-- here goes the variable for the kid's month -->
					<span class="tempText">XX</span>
					<span> month.</span>
				</span>
		</ul>
	</div>
</div>
<div id"assessment">
	<h2 class="h2">Your child's assessment</h2>
	<h3 class="h3">1. Recognition skills</h3>
	<div class="tableTitle">
		<h4 id="wordsTableTitle" class="h4">Recognition skills: Words</h4>
		<p id="wordsTask"><span class="task">Task:</span> Classify of words into 3 categories: regular word, irregular word and logatoma</p>
	</div>
	<table class="table" aria-labelledby="wordsTableTitle" aria-describedby="wordsTask">
		<tbody>
			<tr >
				<th scope="col" class="colHeader"><span class="sr-only">Score types</span>
				</th>
				<th scope="col" class="colHeader">Regular word</th>
				<th scope="col" class="colHeader">Irregular word</th>
				<th scope="col" class="colHeader">Logatoma</th>
			<tr>
			<tr>
				<th scope="row" class="rowHeader">% error</th>
				<td class="row" class="result">
					<span class="result">
						<span class="tempText">XX</span>
						<!-- here goes the variable for the kid's Regular word error percentage -->
					</span>
				</td>
				<td class="row" class="result">
					<span class="result">
						<span class="tempText">XX</span><!-- here goes the variable for the kid's Irregular word error percentage -->
					</span>
				</td>
				<td class="row" class="result">
					<span class="result">
						<span class="tempText">XX</span><!-- here goes the variable for the kid's Logatoma error percentage -->
					</span>
				</td>
			</tr>
			<tr>
				<th scope="row" class="rowHeader">Norm
				</th>
				<td class="row">
					<span class="result">
						10<!-- here goes the variable for the Regular word norm rate -->
					</span>
				</td>
				<td class="row">
					<span class="result">
						15<!-- here goes the variable for the Irregular word norm rate -->
					</span>
				</td>
				<td class="row">
					<span class="result">
						15<!-- here goes the variable for the Logatoma norm rate -->
					</span>
				</td>
			</tr>
			<tr>
				<th scope="row" class="rowHeader">Standard error
				</th>
				<td class="row">
					<span class="result">
						2<!-- here goes the variable for the Regular word Standard error rate -->
					</span>
				</td>
				<td class="row">
					<span class="result">
						4<!-- here goes the variable for the Regular word Standard error rate -->
					</span>
				</td>
				<td class="row">
					<span class="result">
						3<!-- here goes the variable for the Regular word Standard error rate -->
					</span>
				</td>
			</tr>
		</tbody>
	</table>
	<div class="tableTitle">
		<h4 id="sylTableTitle" class="h4">Recognition skills: Syllables</h4>
		<p id="syllTask"><span class="task">Task:</span> Classify of texts into 2 categories: monosyllabic words and syllables</p>
	</div>
	<table class="table" aria-labelledby="sylTableTitle" aria-describedby="sylTask">
		<tr>
			<th scope="col" class="colHeader"><span class="sr-only">Score types</span>
			</th>
			<th scope="col" class="colHeader">Word
			</th>
			<th scope="col" class="colHeader">Syllables
			</th>
		<tr>
		<tr>
			<th scope="row" class="rowHeader">% error</th>
			<td class="row">
				<span class="result">
					<span class="tempText">XX</span><!-- here goes the variable for the kid's word error percentage -->
				</span>
			</td>
			<td class="row">
				<span class="result">
					<span class="tempText">XX</span><!-- here goes the variable for the kid's syllables error percentage -->
				</span>
			</td>
		</tr>
		<tr>
			<th scope="row" class="rowHeader">Norm
			</th>
			<td class="row">
				<span class="result">
					8<!-- here goes the variable for the word norm rate -->
				</span>
			</td>
			<td class="row">
				<span class="result">
					12<!-- here goes the variable for the syllables norm rate -->
				</span>
			</td>
		</tr>
		<tr>
			<th scope="row" class="rowHeader">Standard error
			</th>
			<td class="row">
				<span class="result">
					1<!-- here goes the variable for the word Standard error rate -->
				</span>
			</td>
			<td class="row">
				<span class="result">
					3<!-- here goes the variable for the syllables Standard error rate -->
				</span>
			</td>
		</tr>
	</table>
	<div class="tableTitle">
		<h3 id="VATableTitle" class="h3">2. Visual attention</h3>
		<p id="VATask" ><span class="task">Task:</span> matching two lines following their spatial orientation</p>
	</div>
	<table class="table" aria-labelledby="VATableTitle" aria-describedby="VATask">
		<tr>
			<th scope="col" class="colHeader"><span class="sr-only">Score types</span>
			</th>
			<th scope="col" class="colHeader">Score</th>
		<tr>
		<tr>
			<th scope="row" class="rowHeader">% error</th>
			<td class="row">
				<span class="result">
					<span class="tempText">XX</span><!-- here goes the variable for the kid's error percentage's score -->
				</span>
			</td>
		</tr>
		<tr>
			<th scope="row" class="rowHeader">Norm</th>
			<td class="row">
				<span class="result">
					15<!-- here goes the variable for the norm's score -->
				</span>
			</td>
		</tr>
		<tr>
			<th scope="row" class="rowHeader">Standard error</th>
			<td class="row">
				<span class="result">
					5<!-- here goes the variable for the Standard error's score -->
				</span>
			</td>
		</tr>
	</table>
	<div class="tableTitle">
		<h3 id="ACTableTitle" class="h3">3. Auditory comprehension</h3>
		<p id="ACTask"><span class="task">Task:</span> listen to a story and answer questions (if no answer, indicators)</p>
	</div>
	<table class="table" aria-labelledby="ACTableTitle" aria-describedby="ACTask">
		<tr>
			<th scope="col" class="colHeader"><span class="sr-only">Score types</span>
			</th>
			<th scope="col" class="colHeader">Score</th>
		<tr>
		<tr>
			<th scope="row" class="rowHeader">% error</th>
			<td class="row">
				<span class="result">
					<span class="tempText">XX</span><!-- here goes the variable for the kid's error percentage's score -->
				</span>
			</td>
		</tr>
		<tr>
			<th scope="row" class="rowHeader">Norm</th>
			<td class="row">
				<span class="result">
					5<!-- here goes the variable for the norm's score -->
				</span>
			</td>
		</tr>
		<tr>
			<th scope="row" class="rowHeader">Standard error</th>
			<td class="row">
				<span class="result">
					1<!-- here goes the variable for the Standard error's score -->
				</span>
			</td>
		</tr>
	</table>
	<div class="tableTitle">
		<h3 id="OSTableTitle" class="h3">4. Oral spelling</h3>
		<p id="OSTask"><span class="task">Task:</span> spell heard word</p>
	</div>
	<table class="table" aria-labelledby="OSTableTitle" aria-describedby="OSTask">
		<tr>
			<th scope="col" class="colHeader"><span class="sr-only">Score types</span>
			</th>
			<th scope="col" class="colHeader">Global</th>
			<th scope="col" class="colHeader">Phonetic</th>
			<th scope="col" class="colHeader">Added / omitted (letter)</th>
			<th scope="col" class="colHeader">Total</th>
		<tr>
		<tr>
			<th scope="row" class="rowHeader">Number of errors</th>
			<td class="row">
				<span class="result">
					<span class="tempText">XX</span><!-- here goes the variable for the kid's Oral spelling Global number of errors -->
				</span>
			</td>
			<td class="row">
				<span class="result">
					<span class="tempText">XX</span><!-- here goes the variable for the kid's Oral spelling Phonetic number of errors -->
				</span>
			</td>
			<td class="row">
				<span class="result">
					<span class="tempText">XX</span><!-- here goes the variable for the kid's Oral spelling Added / omitted letter number of errors -->
				</span>
			</td>
			<td class="row">
				<span class="result">
					<span class="tempText">XX</span><!-- here goes the variable for the kid's Oral spelling Total number of errors -->
				</span>
			</td>
		</tr>
		<tr>
			<th scope="row" class="rowHeader">Norm</th>
			<td class="row">
				<span class="result">
					1<!-- here goes the variable for the Global norm rate -->
				</span>
			</td>
			<td class="row">
				<span class="result">
					2<!-- here goes the variable for the Phonetic norm rate -->
				</span>
			</td>
			<td class="row">
				<span class="result">
					2<!-- here goes the variable for the Added / omitted letter norm rate -->
				</span>
			</td>
			<td class="row">
				<span class="result">
					4<!-- here goes the variable for the kid's Total norm rate -->
				</span>
			</td>
		</tr>
		<tr>
			<th scope="row" class="rowHeader">Standard error</th>
			<td class="row">
				<span class="result">
					0.2<!-- here goes the variable for the Global Standard error rate -->
				</span>
			</td>
			<td class="row">
				<span class="result">
					0.8<!-- here goes the variable for the Phonetic Standard error rate -->
				</span>
			</td>
			<td class="row">
				<span class="result">
					0.2<!-- here goes the variable for the Added / omitted letter Standard error rate -->
				</span>
			</td>
			<td class="row">
				<span class="result">
					2<!-- here goes the variable for the kid's Total Standard error rate -->
				</span>
			</td>
		</tr>
	</table>
	<table class="table" aria-labelledby="writtingTableTitle" aria-describedby="writtingTask">
		<caption class="tableTitle">
			<h3 id="writtingTableTitle" class="h3">5. Writting</h3>
			<p id="writtingTask"><span class="task">Task:</span> free writing about an imaginary story, landscape description</p>
		</caption>
		<tr>
			<th scope="col" class="colHeader"><span class="sr-only">Score types</span>
			</th>
			<th scope="col" class="colHeader">Global</th>
			<th scope="col" class="colHeader">Phonetic</th>
			<th scope="col" class="colHeader">Added / omitted (letter)</th>
			<th scope="col" class="colHeader">Punctuation</th>
			<th scope="col" class="colHeader">Total</th>
		<tr>
		<tr>
			<th scope="row" class="rowHeader">Number of errors</th>
			<td class="row">
				<span class="result">
					<span class="tempText">XX</span><!-- here goes the variable for the kid's writting Global number of errors -->
				</span>
			</td>
			<td class="row">
				<span class="result">
					<span class="tempText">XX</span><!-- here goes the variable for the kid's writting Phonetic number of errors -->
				</span>
			</td>
			<td class="row">
				<span class="result">
					<span class="tempText">XX</span><!-- here goes the variable for the kid's writting Added / omitted letter number of errors -->
				</span>
			</td>
			<td class="row">
				<span class="result">
					<span class="tempText">XX</span><!-- here goes the variable for the kid's writting Punctuation number of errors -->
				</span>
			</td>
			<td class="row">
				<span class="result">
					<span class="tempText">XX</span><!-- here goes the variable for the kid's writting Total number of errors -->
				</span>
			</td>
		</tr>
		<tr>
			<th scope="row" class="rowHeader">Norm</th>
			<td class="row">
				<span class="result">
					5<!-- here goes the variable for the writting Global norm -->
				</span>
			</td>
			<td class="row">
				<span class="result">
					4<!-- here goes the variable for the writting Phonetic norm -->
				</span>
			</td>
			<td class="row">
				<span class="result">
					2<!-- here goes the variable for the writting Added / omitted letter norm -->
				</span>
			</td>
			<td class="row">
				<span class="result">
					8<!-- here goes the variable for the writting Punctuation letter norm -->
				</span>
			</td>
			<td class="row">
				<span class="result">
					20<!-- here goes the variable for the kid's writting Total norm -->
				</span>
			</td>
		</tr>
		<tr>
			<th scope="row" class="rowHeader">Standard error
			</th>
			<td class="row">
				<span class="result">
					2<!-- here goes the variable for the writting Global Standard error -->
				</span>
			</td>
			<td class="row">
				<span class="result">
					2<!-- here goes the variable for the writting Phonetic Standard error -->
				</span>
			</td>
			<td class="row">
				<span class="result">0,5<!-- here goes the variable for the writting Added / omitted letter Standard error -->
			</td>
			<td class="row">
				<span class="result">3<!-- here goes the variable for the writting Punctuation letter Standard error -->
			</td>
			<td class="row">
				<span class="result">
					5<!-- here goes the variable for the kid's writting Total Standard error -->
				</span>
			</td>
		</tr>
	</table>
	<h3 class="h3">6. Memory span</h3>
	<ul>
		<li class="listitem"><span class="task">Task:</span> numeric span</li>
		<li class="listitem">
			<span class="task">Results:</span> 
			<span class="kidyear">
				<!-- here goes the variable for the kid's Memory span result (number) -->
			</span>
			years 
			<span class="kidmonth">
				<!-- here goes the variable for the kid's month -->
			</span>
			month</p>
	</ul>
	<h3 class="h3">General conclusion</h3>
	<p><span class="emphase">As a reminder, this game is only a test, not a diagnosis.</span> </br>
		For more precise results, see a healthcare professional.
	</p>
	<p>Your results suggest that: 
	<p class="diagnostic">
		<!-- here goes the variable for the kid's diagnostic - (one of the below)
			- Everything seems good
			- You may take a speech therapist appointment -->
	</p>
	<div class="tempText">
		possible results :
		<ul>
			<li>Everything seems good</li>
			<li>You may take a speech therapist appointment</li>
		</ul>
	</div>
</div>
</template>

<script>
export default {
  name: 'GameAssessment'
}
</script>

<style>
.background {
 background-color: #FFFFFF;
}
.print {
display:flex;
justify-content:space-between;
}

.ul {
	list-style: none;
    margin: 0;
    padding: 0;
}

.tempText {
	font-style: italic;
}

.kidDetail {
  font-weight: bold;
}

.table {
  border: 1px solid #666;
  border-collapse: collapse;
}

.rowHeader {
    padding: 0.5rem;
	border: 1px solid #666;
  text-align: left;
}

.colHeader {
    padding: 0.5rem;
	border: 1px solid #666;
  text-align: left;
  background-color: #E0E0E0
}

.row {
    padding: 0.5rem;
	border: 1px solid #666;
  text-align: left;
}

.tableTitle {
  text-align: left;
}
.task {
  font-weight: bold;
}
.link {
    color: #143250;
    cursor: pointer;
    text-decoration: underline;
}
.h1 {
  font-size: 32px;
  font-weight: bold;
}
.h2 {
  font-size: 24px;
  font-weight: bold;
}
.h3 {
  font-size: 18px;
  font-weight: bold;
}
.h4 {
  font-size: 16px;
  font-weight: bold;
}
</style>
