https://www.w3schools.com/jsref/event_onblur.asp


<button onclick="document.getElementById('demo').innerHTML=Date()">The time is?</button>

<p id="demo"></p>


<h2>JavaScript HTML Events</h2>
<button onclick="this.innerHTML=Date()">The time is?</button>

<h2>JavaScript HTML Events</h2>
<p>Click the button to display the date.</p>

<button onclick="displayDate()">The time is?</button>

<script>
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>

<p id="demo"></p>


<p>Select a new car from the list.</p>

<select id="mySelect" onchange="myFunction()">
  <option value="Audi">Audi</option>
  <option value="BMW">BMW</option>
  <option value="Mercedes">Mercedes</option>
  <option value="Volvo">Volvo</option>
</select>

<p>When you select a new car, a function is triggered which outputs the value of the selected car.</p>

<p id="demo"></p>

<script>
function myFunction() {
  var x = document.getElementById("mySelect").value;
  document.getElementById("demo").innerHTML = "You selected: " + x;
}
</script>


<p>This example uses the addEventListener() method to attach a "change" event to an input element.</p>

Enter your name: <input type="text" id="fname">

<p>When you leave the input field, a function is triggered which transforms the input text to upper case.</p>

<script>
document.getElementById("fname").addEventListener("change", myFunction);

function myFunction() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}
</script>



<input type="text" oncopy="myFunction()" value="Try to copy this text">

<p id="demo"></p>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "You copied text!"
}
</script>

Enter your name: <input type="text" id="fname" onblur="myFunction()">

<p>When you leave the input field, a function is triggered which transforms the input text to upper case.</p>

<script>
function myFunction() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}
</script>


<p>Write something in the input field, and then click outside the field to lose focus (blur).</p>

<input type="text" id="fname">

<script>
document.getElementById("fname").addEventListener("blur", myFunction);

function myFunction() {
  alert("Input field lost focus.");
}
</script>





























































