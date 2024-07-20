document.addEventListener(function(){
const navbar=document.querySelectorAll("nav a")
const sections=document.querySelectorAll('main section')
})
navbar.foreach(link=>{
    link.addEventListener('click',function(e){

        e.preventdefault()
        const targetId = this.getAttribute('href').substring(1);
            sections.forEach(section => {
                section.style.display = section.id === targetId ? 'block' : 'none';
    })
})
})
