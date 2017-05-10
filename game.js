//an array that stores images and the names
var faces = [{
    src:'images/dangote.jpg',
    title:'dangote',
    hint:'richest man in 9ja',
    clue:'tdagnygvotlbue',
    link: 'https://en.wikipedia.org/wiki/Aliko_Dangote'
},{src:'images/donjazzy.jpg',
    title:'don jazzy',
    hint:'mavin records',
    clue:'dtotnejbazdzyc',
  link: 'https://en.wikipedia.org/wiki/Don_Jazzy'},{src:'images/myoga.jpg',
    title:'ogaatthetop',
    hint:'NSCDC.thatsall',
    clue:'ogabattohestsfp', link: 'https://en.wikipedia.org/wiki/My_Oga_at_the_top'},{src:'images/2baba.jpg',
    title:'2baba',
    hint:'african queen',
    clue:'yu2bhfagdbmnixa', link: 'https://en.wikipedia.org/wiki/2Baba'},{src:'images/abacha.jpg',
    title:'abacha',
    hint:'apple killed him',
    clue:'arbaurvcdidhgfa', link: 'https://en.wikipedia.org/wiki/Sani_Abacha'},{src:'images/adeboye.jpg',
    title:'pst adeboye',
    hint:'can somebody shout hallelujah',
    clue:'pxswtrayfebofde', link: 'https://en.wikipedia.org/wiki/Enoch_Adeboye'},{src:'images/adefarasin.jpg',
    title:'pst adefarasin',
    hint:'He is a Pastor',
    clue:'astpdebfasaridn', link: 'https://en.wikipedia.org/wiki/Paul_Adefarasin'},{src:'images/awolowo.jpg',
    title:'awolowo',
    hint:'look at the cap and glasses',
    clue:'tawgotljovwonki', link: 'https://en.wikipedia.org/wiki/Obafemi_Awolowo'},{src:'images/banky.jpg',
    title:'banky w',
    hint:'capable man',
    clue:'abheansdkucywop', link: 'https://en.wikipedia.org/wiki/Banky_W.'},{src:'images/buhari.jpg',
    title:'buhari',
    hint:'the change',
    clue:'bxcusvfhjaryrfi', link: 'https://en.wikipedia.org/wiki/Muhammadu_Buhari'},{src:'images/chimamanda.jpg',
    title:'chimamanda',
    hint:'a writer',
    clue:'cshiumadbmanvda', link: 'https://en.wikipedia.org/wiki/Chimamanda_Ngozi_Adichie'},{src:'images/deolasagoe.jpg',
    title:'deola sagoe',
    hint:'Deola fashion designer',
    clue:'dexolgasdargoce', link: 'https://en.wikipedia.org/wiki/Deola_Sagoe'},{src:'images/djspinall.jpg',
    title:'dj spinall',
    hint:'the cap',
    clue:'drjsapibnamluly', link: 'https://en.wikipedia.org/wiki/DJ_Spinall'},{src:'images/dokubo.jpg',
    title:'asari dokubo',
    hint:'militant',
    clue:'asbarifdoktuibo', link: 'https://en.wikipedia.org/wiki/Mujahid_Dokubo-Asari'},{src:'images/fela.jpg',
    title:'fela',
    hint:'plenty wives + ganja',
    clue:'fenuyexpoungrla', link: 'https://en.wikipedia.org/wiki/Fela_Kuti'},{src:'images/goodluck.jpg',
    title:'goodluck',
    hint:'ex president',
    clue:'gnoordsdlusrfck', link: 'https://en.wikipedia.org/wiki/Goodluck_Jonathan'},{src:'images/herbert.jpg',
    title:'macaulay',
    hint:'10 naira note',
    clue:'mawvcfarsulfuey', link: 'https://en.wikipedia.org/wiki/Herbert_Macaulay'},{src:'images/honpatrick.jpg',
    title:'hon patrick',
    hint:'la honourable grammarly',
    clue:'hoenpvadtrmiuck', link: 'http://infonubia.com/2013/09/hon-patrick-obahiagbons-interview-on.html'},{src:'images/jagaban.jpg',
    title:'jagaban',
    hint:'Tinubu nickname',
    clue:'jtagradkbadtrun', link: 'https://en.wikipedia.org/wiki/Bola_Tinubu'},{src:'images/kanu.jpg',
    title:'kanu',
    hint:'olympics 98 hero',
    clue:'kyritadenywvhou', link: 'https://en.wikipedia.org/wiki/Nwankwo_Kanu'},{src:'images/lagbaja.jpg',
    title:'lagbaja',
    hint:'konko below',
    clue:'layvgbiajhdavbr', link: 'https://en.wikipedia.org/wiki/Lagbaja'},{src:'images/obasanjo.jpg',
    title:'obasanjo',
    hint:'baba iyabo',
    clue:'oybrasfyauvnjor', link: 'https://en.wikipedia.org/wiki/Olusegun_Obasanjo'},{src:'images/okonjo.jpg',
    title:'okonjo',
    hint:'finance',
    clue:'oekcdgtofyvnjuo', link:'https://en.wikipedia.org/wiki/Ngozi_Okonjo-Iweala'},{src:'images/oritsejafor.jpg',
    title:'oritsejafor',
    hint:'CAN',
    clue:'oruitgsejdayfor', link: 'https://en.wikipedia.org/wiki/Ayo_Oritsejafor'},{src:'images/psquare.jpg',
    title:'psquare',
    hint:'Senorita',
    clue:'pyusqdqrutgarve', link: 'https://en.wikipedia.org/wiki/P-Square'},{src:'images/toolz.jpg',
    title:'toolz',
    hint:'NdaniTV',
    clue:'teovsntuiobflzs', link: 'https://en.wikipedia.org/wiki/Toolz'},{src:'images/wizkid.jpg',
    title:'wizkid',
    hint:'One dance ft drake',
    clue:'awsridzyekfbind', link: 'https://en.wikipedia.org/wiki/Wizkid_(musician)'},{src:'images/wole.jpg',
    title:'soyinka',
    hint:'nobel laurel',
    clue:'scrqotysijdnkda', link: 'https://en.wikipedia.org/wiki/Wole_Soyinka'}];
//used to display objects in the faces when u get the pics right
var counter = 0;
//variables used in the game
var idea;
var names;
var namesNo = 0;
var namesSplit = [];
var nice = 0;
var comment;
//array that throws jab when u get it wrong
var abuse = ["where are you from","can i see your passport","shaking my head","beht why",
            "just try again","u miss am o"];
//array that informs them that they passed
var correctG = ["You passed: you smart","You passed: you sabi","You passed: ride on","You passed: i like that",
            "You passed: keep it up","You passed: thumbs up"];

//checking users entry and pics name
function myfunction(){
if(document.getElementById("trial").value.toLowerCase() === document.getElementById("images").alt){
    counter++;
    scores += 10;
    levels += 1;
    //saving the scores to the phone
    window.localStorage.setItem('points', scores);
    scores = parseInt(window.localStorage.getItem('points'));
    //saving the stage to the phone
    window.localStorage.setItem('stages', levels);
    levels = parseInt(window.localStorage.getItem('stages'));
    //saving the counter to phone
    window.localStorage.setItem('key', counter);
    counter = window.localStorage.getItem('key');
    /////
    document.getElementById("score").innerHTML = scores;
    document.getElementById("level").innerHTML = levels;
    document.getElementById("trial").value = '';
    //document.getElementById("trial").maxLength = namesNo;
    document.getElementById("trial").focus();
    //new things
    var nice = Math.floor(Math.random() * 6);
    comment = correctG[nice];
   // alert(comment);
    navigator.notification.alert(comment, null, "9ja Mascots", "Continue");
    idea = faces[counter].clue;
    names = faces[counter].title;
    namesNo = names.length;
    document.getElementById("numbernames").innerHTML = namesNo;
    splitName();
    //end of new things
    document.getElementById("images").alt = faces[counter].title;
	document.getElementById('images').src=faces[counter].src;
    document.getElementById("result").innerHTML = " ";
    document.getElementById("help").innerHTML = " ";

} else if(document.getElementById("trial").value.toLowerCase() != document.getElementById("images").alt){
    var yab = Math.floor(Math.random() * 6);
    document.getElementById("result").innerHTML = abuse[yab];
    navigator.vibrate(200); }
}
//lets display the score
var scores = 0;
var levels = 1;
//getting help
function helperMan(){
    document.getElementById("help").innerHTML = faces[counter].hint;
}

//function that displays the first objects and passes it to the window load
function firstImage(){
    //saving the level into the phone
    if(window.localStorage.getItem('key')==null){
        window.localStorage.setItem('key', 0);
        counter = window.localStorage.getItem('key');
       } else { counter = window.localStorage.getItem('key'); }
    //end of saving level
    //saving scores to the phone
    if(window.localStorage.getItem('points')==null){
        window.localStorage.setItem('points', 0);
        scores = parseInt(window.localStorage.getItem('points'));
        document.getElementById("score").innerHTML = scores;
       } else { scores = parseInt(window.localStorage.getItem('points'));
              document.getElementById("score").innerHTML = scores; }
    //end of saving score
    //saving levels to phone
    if(window.localStorage.getItem('stages')==null){
        window.localStorage.setItem('stages', 1);
        levels = parseInt(window.localStorage.getItem('stages'));
        document.getElementById("level").innerHTML = levels;
       } else { levels = parseInt(window.localStorage.getItem('stages'));
              document.getElementById("level").innerHTML = levels; }
    //NEW CLICKABLE
    putclickable();
    document.getElementById('images').src=faces[counter].src;
    document.getElementById("images").alt = faces[counter].title;
    idea = faces[counter].clue;
    names = faces[counter].title;
    namesNo = names.length;
    document.getElementById("numbernames").innerHTML = namesNo;
  //  document.getElementById("trial").maxLength = namesNo;
    splitName();
  //  putclickable();
}
window.onload = firstImage;

//displaying the name on buttons
function splitName(){
    namesSplit = idea.split("");
    for (var i = 0;i < namesSplit.length;i++){
        // trying fills the buttons
        var trying = i;
        document.getElementById(trying).value = namesSplit[i];
    }
}

//function that response to button click
function clickThing(idbutton){
    document.getElementById("trial").value += document.getElementById(idbutton).value;
}
//function that responds to space button
function addSpace(){
    document.getElementById("trial").value += " ";
}
//function that responds to backspace button
function wipeLast(){
    var wiper;
    var word;
    word = document.getElementById("trial").value;
    wiper = word.substr(0, word.length - 1)
    document.getElementById("trial").value = wiper;
}
///
function openLink(){
    counter = window.localStorage.getItem('key');
    window.open(faces[counter].link, '_blank', 'location=yes');
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/* Toggle between adding and removing the "active" and "show" classes when the user clicks on one of the "Section" buttons. The "active" class is used to add a background color to the current button when its belonging panel is open. The "show" class is used to open the specific accordion panel */
function openAccord(){
    var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}
}
var namesplitter = [];
//code for CLICKABLE BUTTONS
function putclickable(){
  //  counter = window.localStorage.getItem('key');
    var nameforsplit = faces[counter].title;
    namesplitter = nameforsplit.split("");
    for (var t = 0; t < namesplitter.length; t++){
        var btn = document.createElement("BUTTON");
        var texts = document.createTextNode(namesplitter[t]);
     //   btn.appendChild(texts);
        document.body.appendChild(btn);
        document.getElementById("clickable").appendChild(btn);
        $('#clickable button').addClass("inputx");
        //$('#clickable button').attr("onclick", revclick());
    }
}
//jQuery for clickable
$(document).ready(
function clicking(){
$('#options input').click(function(e){
    e.preventDefault()
    if($('.inputx:empty:first').text($(this).val()).length)
        $(this).hide();
    emptyalert();
    trykicker();
        })
//if($('.inputx.text:not(:empty)')){
//    alert('all filled');
//}


$('.inputx').click(function(e){
    e.preventDefault();
    if($(this).is(':not(:empty)')){
        var letter = $(this).text()
        $('#options input:not(:visible)').filter(function(){
            return this.value == letter;
        }).first().show();
        $(this).empty();
    }
}).not(':empty').each(function(){
    var letter = $(this).text()
    $('#options input:visible').filter(function(){
        return this.value == letter;
    }).first().hide();
})
})
//new way to check winner...fantastic
var kicker;
function emptyalert(){
 //  if($('#clickable > .inputx').text.is(':not(:empty)')){
//    alert('not empty');
//   }
        kicker = $('#clickable .inputx').text();
}

function trykicker(){
    if(kicker.length == names.length){
        if(kicker === names){
            counter++;
    document.getElementById("images").alt = faces[counter].title;
	document.getElementById('images').src=faces[counter].src;
        }else {alert('you missed');}
    }
}
