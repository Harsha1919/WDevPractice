const button = document.getElementById('generate');
const quotation = document.getElementById('quot');
const author = document.getElementById('author');

function randQuote(){
    const quotes = [{
            quote:"Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
            author:"Maya Angelou"},
     {
            quote:"Happiness is not something readymade.  It comes from your own actions.",
            author:"Dalai Lama"},
     {
            quote:"If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
            author:"Sheryl Sandberg"},
     {
            quote:"First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
            author:"Aristotle"},
     {
            quote:"If the wind will not serve, take to the oars.",
            author:"Latin Proverb"},
     {
            quote:"You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.",
            author:"Unknown"},
     {
            quote:"We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
            author:"Marie Curie"},
     {
            quote:"Too many of us are not living our dreams because we are living our fears.",
            author:"Les Brown"},
     {
            quote:"Challenges are what make life interesting and overcoming them is what makes life meaningful.",
            author:"Joshua J. Marine"},
     {
            quote:"If you want to lift yourself up, lift up someone else.",
            author:"Booker T. Washington"},
     {
            quote:"I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
            author:"Leonardo da Vinci"}]

    button.addEventListener('click', (e)=>{
        let val = Math.floor(Math.random() * quotes.length);
        quotation.textContent = quotes[val].quote;
        author.textContent = quotes[val].author;
    });
}

randQuote();
