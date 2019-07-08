var qoutes = [
    {
        ins: 'The Way Get Started Is To Quit Talking And Begin Doing.',
        name: 'Walt Disney'
        
          
    },
    {
      ins: 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.',
        name: 'Winston Churchill'  
    },
    {
      ins: 'Don’t Let Yesterday Take Up Too Much Of Today.',
        name: 'Will Rogers'  
    },
    {
       ins: 'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.',
        name: 'Unknown' 
    },
    {
       ins: 'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.',
        name: 'Vince Lombardi' 
    },
    {
       ins: 'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.',
        name: 'Steve Jobs' 
    },
    {
       ins: 'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.',
        name: 'Rob Siltanen' 
    },
    {
      ins: 'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.',
        name: 'Og Mandino'  
    },
    {
        ins: 'Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.',
        name: 'Mohnish Pabrai'
    },
    {
       ins: 'We May Encounter Many Defeats But We Must Not Be Defeated.',
        name: 'Maya Angelou' 
    },
    {
      ins: 'Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.',
      name: 'Johann Wolfgang Von Goethe'
        
    },
    {
        ins: 'We Generate Fears While We Sit. We Overcome Them By Action.',
        name: 'Dr. Henry Link'
    }, 
    {
        ins: 'a freind indeed is a friend in need',
        name: 'Jamila Ismail'
    }
];

var theQoute = document.querySelector('.qoute')
var qouteButton = document.querySelector('button')
var myName = document.querySelector('.name')


qouteButton.addEventListener('click', function(){
    
    var reCreate = Math.floor(Math.random()*qoutes.length);
    theQoute.textContent = qoutes[reCreate].ins;
    
    
    myName.textContent = qoutes[reCreate].name;
    
})
























